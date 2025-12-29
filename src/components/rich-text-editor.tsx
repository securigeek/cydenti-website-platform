"use client";

import { useEffect, useRef } from "react";
import { Bold, Italic, Heading1, Heading2, Heading3, Quote, ListCollapse, ListChecks } from "lucide-react";
import { Button } from "./ui/button";

interface PortableTextSpan {
  _type: "span";
  _key: string;
  text: string;
  marks: string[];
}

interface PortableTextBlock {
  _type: "block";
  _key: string;
  style: string;
  children: PortableTextSpan[];
}

interface RichTextEditorProps {
  initialValue?: PortableTextBlock[];
  onChange: (value: PortableTextBlock[]) => void;
}

export function RichTextEditor({ initialValue, onChange }: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);

  // Convert Portable Text to HTML (Basic implementation)
  useEffect(() => {
    if (!editorRef.current) return;

    if (!initialValue || initialValue.length === 0) {
      if (editorRef.current.innerHTML === "") {
        editorRef.current.innerHTML = "<p><br/></p>";
      }
      return;
    }

    const html = initialValue.map((block: PortableTextBlock) => {
      if (block._type !== "block") return "";
      
      const tag = block.style === "h1" ? "h1" : block.style === "h2" ? "h2" : block.style === "blockquote" ? "blockquote" : "p";
      const children = block.children.map((child: PortableTextSpan) => {
        let text = child.text;
        if (child.marks && child.marks.includes("strong")) text = `<strong>${text}</strong>`;
        if (child.marks && child.marks.includes("em")) text = `<em>${text}</em>`;
        return text;
      }).join("");

      return `<${tag}>${children}</${tag}>`;
    }).join("");

    if (editorRef.current.innerHTML !== html) {
      editorRef.current.innerHTML = html;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const generateKey = () => Math.random().toString(36).substring(2, 9);

  const handleInput = () => {
    if (!editorRef.current) return;
    
    // Parse HTML back to Portable Text (Basic implementation)
    const nodes = Array.from(editorRef.current.childNodes);
    const blocks = nodes.map((node: ChildNode) => {
      const tag = node.nodeName.toLowerCase();
      let style = "normal";
      if (tag === "h1") style = "h1";
      if (tag === "h2") style = "h2";
      if (tag === "blockquote") style = "blockquote";

      const children: PortableTextSpan[] = [];
      
      // Handle text nodes and simple elements inside block
      const childNodes = node.childNodes && node.childNodes.length > 0 ? Array.from(node.childNodes) : [node];
      
      if (childNodes.length === 0 && node.textContent) {
          children.push({
              _type: "span",
              _key: generateKey(),
              text: node.textContent,
              marks: []
          });
      } else {
        childNodes.forEach((child: ChildNode) => {
            const marks: string[] = [];
            const text = child.textContent || "";
            const element = child as HTMLElement;
            
            if (child.nodeName === "STRONG" || child.nodeName === "B" || (element.style && element.style.fontWeight === "bold")) marks.push("strong");
            if (child.nodeName === "EM" || child.nodeName === "I" || (element.style && element.style.fontStyle === "italic")) marks.push("em");

            if (text) {
                children.push({
                    _type: "span",
                    _key: generateKey(),
                    text: text,
                    marks: marks
                });
            }
        });
      }
      
      // Fallback for empty blocks
      if (children.length === 0) {
          children.push({ _type: "span", _key: generateKey(), text: "", marks: [] });
      }

      return {
        _type: "block" as const,
        _key: generateKey(),
        style: style,
        children: children,
      };
    });

    onChange(blocks);
  };

  const execCommand = (e: React.MouseEvent, command: string, value: string | undefined = undefined) => {
    e.preventDefault(); // Prevent focus loss
    document.execCommand(command, false, value);
    handleInput();
    // Keep focus on editor
    if (editorRef.current) {
       // We don't want to force focus if it's already there as it might mess up selection
       // But if we prevented default, focus should stay.
       // However, to be safe:
       // editorRef.current.focus(); 
    }
  };
  const insertHtml = (e: React.MouseEvent, html: string) => {
    e.preventDefault();
    document.execCommand("insertHTML", false, html);
    handleInput();
  };

  return (
    <div className="border rounded-md overflow-hidden bg-white">
      <div className="flex items-center gap-1 p-2 border-b bg-gray-50">
        <Button variant="ghost" size="icon" onMouseDown={(e) => execCommand(e, "bold")} type="button" title="Bold">
          <Bold className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" onMouseDown={(e) => execCommand(e, "italic")} type="button" title="Italic">
          <Italic className="h-4 w-4" />
        </Button>
        <div className="w-px h-6 bg-gray-300 mx-1" />
        <Button variant="ghost" size="icon" onMouseDown={(e) => execCommand(e, "formatBlock", "H1")} type="button" title="Heading 1">
          <Heading1 className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" onMouseDown={(e) => execCommand(e, "formatBlock", "H2")} type="button" title="Heading 2">
          <Heading2 className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" onMouseDown={(e) => execCommand(e, "formatBlock", "H3")} type="button" title="Heading 3">
          <Heading3 className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" onMouseDown={(e) => execCommand(e, "formatBlock", "p")} type="button" title="Paragraph">
          <span className="font-serif font-bold">P</span>
        </Button>
         <Button variant="ghost" size="icon" onMouseDown={(e) => execCommand(e, "formatBlock", "blockquote")} type="button" title="Quote">
          <Quote className="h-4 w-4" />
        </Button>
        <div className="w-px h-6 bg-gray-300 mx-1" />
        <Button variant="ghost" size="icon" onMouseDown={(e) => insertHtml(e, "<h2>Outline</h2><h3>Section 1</h3><p><br/></p><h3>Section 2</h3><p><br/></p>")} type="button" title="Insert Outline">
          <ListCollapse className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" onMouseDown={(e) => insertHtml(e, "<h2>FAQ</h2><p>Q: </p><p>A: </p><p><br/></p>")} type="button" title="Insert FAQ">
          <ListChecks className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" onMouseDown={(e) => insertHtml(e, "<h2>Key Takeaways</h2><p>• </p><p>• </p><p>• </p>")} type="button" title="Insert Key Takeaways">
          <span className="font-serif font-bold">KT</span>
        </Button>
        <Button variant="ghost" size="icon" onMouseDown={(e) => insertHtml(e, "<h2>TL;DR</h2><p><br/></p>")} type="button" title="Insert TL;DR">
          <span className="font-serif font-bold">TL</span>
        </Button>
      </div>
      <div
        ref={editorRef}
        contentEditable
        onInput={handleInput}
        className="p-4 min-h-[200px] outline-none prose max-w-none"
        style={{ minHeight: "300px" }}
      />
    </div>
  );
}
