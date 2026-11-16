const projects = [
  {
    title: "Página web de Biomimesis — Horas estudiante",
    description: "Participación en el desarrollo y mantenimiento de la página web de Biomimesis durante un programa de horas estudiante.",
    details: [
      "Colaboración en el desarrollo y actualización de contenido de la página web.",
      "Aplicación de conocimientos de desarrollo web.",
      "Trabajo colaborativo con el equipo encargado del proyecto."
    ]
  },
  {
    title: "Sistema para farmacia — Proyecto Integrador de Redes y Sistemas Operativos",
    description: "Proyecto académico desarrollado en los cursos de Proyecto Integrador, Redes y Sistemas Operativos, orientado a la creación de un sistema para la gestión de una farmacia.",
    details: [
      "Desarrollo de un sistema para la gestión de una farmacia.",
      "Implementación de comunicación entre diferentes componentes del sistema.",
      "Aplicación de conceptos de redes, sistemas operativos y programación.",
      "Trabajo colaborativo utilizando control de versiones."
    ]
  },
  {
    title: "Microprocesador — Proyecto Integrador de Lenguaje Ensamblador y Arquitectura de Computadoras",
    description: "Proyecto académico desarrollado en los cursos de Lenguaje Ensamblador y Arquitectura de Computadoras.",
    details: [
      "Diseño y construcción de un microprocesador.",
      "Ensamblaje y soldadura de componentes electrónicos.",
      "Aplicación práctica de conceptos de arquitectura de computadoras y lenguaje ensamblador.",
      "Trabajo con componentes de hardware y circuitos electrónicos."
    ]
  }
]

const experienceProjectsContainer = document.querySelector('.experience-projects');

projects.forEach((project) => {
  const article = document.createElement('article');
  const title = document.createElement('h3');
  const description = document.createElement('p');
  const list = document.createElement('ul');

  title.textContent = project.title;
  description.textContent = project.description;

  project.details.forEach(detail => {
    const listItem = document.createElement('li');
    listItem.textContent = detail;
    list.append(listItem);
  });

  article.append(title);
  article.append(description);
  article.append(list);

  experienceProjectsContainer.append(article);
});

const education = [
  {
    institution: "Universidad de Costa Rica",
    degree: "Bachillerato en Computación con énfasis en Ingeniería de Software — En curso"
  }
];

const educationContainer = document.querySelector('.education');

education.forEach((item) => {
  const article = document.createElement('article');
  const institution = document.createElement('h3');
  const degree = document.createElement('p');

  institution.textContent = item.institution;
  degree.textContent = item.degree;

  article.append(institution);
  article.append(degree);

  educationContainer.append(article);
});

const technicalSkills = ["HTML5", "CSS3", "React", "C++"];
const softSkills = ["Trabajo en equipo", "Organización", "Adaptabilidad", "Aprendizaje continuo"];

const technicalSkillsList = document.querySelector('.technical-skills');
const softSkillsList = document.querySelector('.soft-skills');

technicalSkills.forEach((skill) => {
  const listItem = document.createElement('li');
  listItem.textContent = skill;
  technicalSkillsList.append(listItem);
});

softSkills.forEach((skill) => {
  const listItem = document.createElement('li');
  listItem.textContent = skill;
  softSkillsList.append(listItem);
});

const languages = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "Intermedio alto (B2)" },
  { name: "Francés", level: "Básico" }
];

const languagesTable = document.querySelector('.languages');

languages.forEach((language) => {
  const row = document.createElement('tr');
  const name = document.createElement('td');
  const level = document.createElement('td');

  name.textContent = language.name;
  level.textContent = language.level;

  row.append(name);
  row.append(level);

  languagesTable.append(row);
});

const root = document.querySelector('html');
const header = document.querySelector('.header');
const themeBtn = document.createElement('button');

themeBtn.textContent = "Cambiar tema";
header.append(themeBtn);

themeBtn.addEventListener('click', () => {
  root.classList.toggle('dark-mode');

  if(root.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark-mode');
  } else {
    localStorage.setItem('theme', '');
  }
});

if(localStorage.getItem('theme') === 'dark-mode') {
  root.classList.add('dark-mode');
}



