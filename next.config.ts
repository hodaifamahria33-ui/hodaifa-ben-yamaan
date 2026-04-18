import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

/** Altijd deze map als projectroot — voorkomt dat Turbopack een lockfile hoger in je user-map pakt. */
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: projectRoot,
  },
  ...(basePath
    ? {
        basePath,
        assetPrefix: basePath,
      }
    : {}),
};

export default nextConfig;
