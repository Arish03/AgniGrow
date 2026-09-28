import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Agni Digital Experience",
    short_name: "Agni",
    description: "Websites, Branding & Automation in Vaniyambadi, Tamil Nadu",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0807",
    theme_color: "#ff5a1f",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
