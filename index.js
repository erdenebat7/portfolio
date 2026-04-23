import { fetchJSON, renderProjects, fetchGithubData } from './global.js';

const projects = await fetchJSON('./lib/projects.json');

const latestProjects = projects.slice(0, 3);

const projectsContainer = document.querySelector('.projects');

renderProjects(latestProjects, projectsContainer, 'h3');

const githubData = await fetchGitHubData('erdenebat7');

const profileStats = document.querySelector('#profile-stats');

if (profileStats) {
  profileStats.innerHTML = `
        <dl>
          <dt>Public Repos:</dt><dd>${"https://api.github.com/users/erdenebat7/repos"}</dd>
          <dt>Public Gists:</dt><dd>${"https://api.github.com/users/erdenebat7/gists{/gist_id}"}</dd>
          <dt>Followers:</dt><dd>${"https://api.github.com/users/erdenebat7/followers"}</dd>
          <dt>Following:</dt><dd>${"https://api.github.com/users/erdenebat7/following{/other_user}"}</dd>
        </dl>
    `;
}