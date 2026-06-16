import fs from "fs";
import path from "path";

const dreamsDir = "./src/pages/dreams";

function normalizeTitleFromSlug(slug) {
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function extractFrontmatter(content) {
  const match = content.match(/^---\s*([\s\S]*?)\s*---/);
  return match ? match[1] : null;
}

function extractTitleFromFrontmatter(frontmatter) {
  if (!frontmatter) return null;
  const match = frontmatter.match(/title:\s*(.*)/);
  return match ? match[1].trim() : null;
}

function removeExistingFrontmatter(content) {
  return content.replace(/^---[\s\S]*?---\s*/, "");
}

const files = fs.readdirSync(dreamsDir).filter((f) => f.endsWith(".md"));

files.forEach((file) => {
  const fullPath = path.join(dreamsDir, file);
  let content = fs.readFileSync(fullPath, "utf8");

  const slug = file.replace(".md", "");
  const existingFrontmatter = extractFrontmatter(content);
  const existingTitle = extractTitleFromFrontmatter(existingFrontmatter);

  // Determine title
  const title =
    existingTitle ||
    normalizeTitleFromSlug(slug) ||
    "Dream Interpretation";

  // Remove old frontmatter if malformed or missing layout
  const body = removeExistingFrontmatter(content);

  // Build new frontmatter
  const newFrontmatter = `---
layout: ../../layouts/BaseLayout.astro
slug: "${fileBasenameNoExtension}"
title: ${title}
---`;

  const newContent = `${newFrontmatter}\n\n${body.trim()}\n`;

  fs.writeFileSync(fullPath, newContent, "utf8");
  console.log(`✨ Fixed: ${file}`);
});

console.log("\nAll dream files fully normalized and updated.");
