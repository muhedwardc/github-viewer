const BASE_GITHUB_API = 'https://api.github.com/';

export const getRepos = (username) => fetch(BASE_GITHUB_API + `users/${username}/repos`);

export const getReadme = (username, repo) => fetch(BASE_GITHUB_API + `repos/${username}/${repo}/readme`);