import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://osamaabushama.tech";

  const webProjects = Array.from({ length: 9 }, (_, index) => ({
    url: `${baseUrl}/web-dev/${index + 1}`,
    lastModified: new Date("2026-09-23"),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const dataProjects = Array.from({ length: 2 }, (_, index) => ({
    url: `${baseUrl}/ai-data/${index + 1}`,
    lastModified: new Date("2026-09-23"),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-09-23"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/web-dev`,
      lastModified: new Date("2026-09-23"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ai-data`,
      lastModified: new Date("2026-09-23"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: new Date("2026-09-23"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...webProjects,
    ...dataProjects,
  ];
}