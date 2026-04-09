import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

function getBasePath() {
  const repository = process.env.GITHUB_REPOSITORY;

  if (!repository) {
    return "/";
  }

  const [owner, repo] = repository.split("/");

  if (!owner || !repo) {
    return "/";
  }

  const expectedRootRepo = `${owner.toLowerCase()}.github.io`;

  return repo.toLowerCase() === expectedRootRepo ? "/" : `/${repo}/`;
}

export default defineConfig({
  base: getBasePath(),
  plugins: [react()],
});
