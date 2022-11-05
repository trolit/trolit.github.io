import path from "path";

const config = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
    },
  },
};

export default config;
