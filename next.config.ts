import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images:{
  remotePatterns:[
    {
      protocol:"https",
      hostname:"*",
    }
  ]
 },
  reactCompiler: true,
};

export default nextConfig;
