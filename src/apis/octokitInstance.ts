import { Octokit } from 'octokit';

const octokitInstance = new Octokit({
  auth: import.meta.env.VITE_GITHUB_AUTH_TOKEN,
});

export default octokitInstance;
