const repoBase = process.env.BASE_PATH || "";
const assetPrefix = process.env.ASSET_PREFIX || undefined;
const isPagesStatic = process.env.PAGES_STATIC === "1";

export default {
  basePath: repoBase,
  assetPrefix,
  images: { unoptimized: true },
  trailingSlash: true,
  ...(isPagesStatic ? { output: "export" } : {}),
};
