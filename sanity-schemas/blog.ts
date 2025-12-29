import type { Rule } from 'sanity'

const blog = {
  name: 'blog',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Cloud Technologies', value: 'Cloud Technologies' },
          { title: 'Threats', value: 'Threats' },
          { title: 'CASB', value: 'CASB' },
          { title: 'Azure', value: 'Azure' },
          { title: 'Trending', value: 'Trending' },
        ],
      },
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
            },
          ],
        },
      ],
    },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
        },
      ],
    },
    {
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
    },
    {
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 2,
    },
    {
      name: 'focusKeyword',
      title: 'Focus Keyword',
      type: 'string',
    },
    {
      name: 'index',
      title: 'Allow Indexing',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
    },
    {
      name: 'schemaArticle',
      title: 'Article Schema',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'schemaFAQ',
      title: 'FAQ Schema',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'schemaHowTo',
      title: 'How-To Schema',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'schemaAuthor',
      title: 'Author Schema',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'previousSlugs',
      title: 'Previous Slugs',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'published',
      title: 'Published',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'featuredImage',
      published: 'published',
    },
    prepare(selection: { title?: string; published?: boolean }) {
      const { title, published } = selection;
      return {
        title: title,
        subtitle: published ? 'Published' : 'Draft',
      };
    },
  },
};

export default blog;
