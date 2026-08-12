import { projectData } from "../data/index-project-data.js"

let projectHTML = ''

projectData.forEach((projectItem) => {
  projectHTML += `
  <article class="card" style="--accent:#0E8F7E">
    <div class="icon-badge">
      <img src="${projectItem.image}" height="30px">
    </div>
    <span class="card-label">${projectItem.logic}</span>
    <h3>${projectItem.name}</h3>
    <p>${projectItem.paragraph}</p>
    <a class="btn" href="${projectItem.link}" aria-label="${projectItem.label}">
      <span>View project</span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
    </a>
  </article>

  `
})
document.querySelector('.js-grid-container').innerHTML = projectHTML