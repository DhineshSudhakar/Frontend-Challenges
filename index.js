const projects = [
  'four-card-feature-section',
  'base-apparel-coming-soon',
  'intro-component-with-signup-form',
  'single-price-grid-component-master',
  'ping-coming-soon-page-master',
  'huddle-landing-page-with-alternating-feature-blocks-master',
  'huddle-landing-page-with-single-introductory-section-master',
];

const list = document.getElementById('list');

projects.forEach(project => {
  const listItem = document.createElement('li');
  const link = document.createElement('a');
  link.href = '/' + project + '/index.html';

  const projectName = document.createElement('p');
  projectName.innerText = formatProjectName(project);

  const img = document.createElement('img');
  img.src = '/' + project + '/design/desktop-design.jpg';

  link.appendChild(img);
  link.appendChild(projectName);
  listItem.appendChild(link);
  list.appendChild(listItem);
})

function formatProjectName(name){
  return name.split('-')
  .map(word => word[0].toUpperCase() + word.slice(1))
  .join(' ');
};
