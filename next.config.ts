import type { NextConfig } from "next";

const remotePatterns: NonNullable<
  NonNullable<NextConfig["images"]>["remotePatterns"]
> = [
  { protocol: "https", hostname: "img.clerk.com" },
];

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
if (supabaseUrl) {
  try {
    remotePatterns.push({
      protocol: "https",
      hostname: new URL(supabaseUrl).hostname,
    });
  } catch {
    /* invalid URL — skip */
  }
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns,
  },
};

export default nextConfig;
