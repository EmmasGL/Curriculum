
let data = {
  "header": {
    "name": "Emmanuel Gomez Luna",
    "subtitle": "Desarrollador Frontend | Creativo | Innovador",
    "profileImage": "img/perfil.jpeg"
  },
  "about": {
    "title": "Sobre mí",
    "content": "Soy un desarrollador frontend apasionado por la creación de experiencias web únicas y funcionales. Siempre estoy en búsqueda de aprender nuevas tecnologías y resolver problemas de manera creativa. Tengo experiencia en la creación de soluciones digitales integrales, así como amplias habilidades en la implementación de tests, depuración de código y optimización del rendimiento. Me destaco por ser una persona comunicativa, amable y capaz de adaptarme a diferentes situaciones. Estoy buscando una oportunidad laboral que me permita demostrar mi compromiso, capacidad de trabajo y aprendizaje rápido. En mis trabajos anteriores, siempre he destacado por mi alta productividad y por mi habilidad para adquirir nuevas competencias de manera eficiente."
  },
  "experience": {
    "title": "Experiencia",
    "jobs": [
      {
        "position": "Desarrollador Frontend",
        "company": "Babel",
        "duration": "11/2022 - 11/2024",
        "responsibilities": [
          "Diseño de la interfaz e interacción de páginas web.",
          "Aplicación de lenguajes de diseño y marcado como <span>HTML, CSS, JavaScript, Java y Cells</span>.",
          "Ejecución de pruebas de usabilidad y accesibilidad.",
          "Responsable de la interacción directa con el usuario.",
          "Diseño, desarrollo y mantenimiento de sitios y aplicaciones web.",
          "Evaluación de las necesidades y especificaciones de los clientes para brindar las mejores soluciones.",
          "Participación en todas las actividades del ciclo de vida del desarrollo de software.",
          "Elaboración de documentación de las aplicaciones o soluciones desarrolladas.",
          "Manejo de metodología <span>SCRUM</span>.",
          "Pruebas unitarias con <span>Mocha</span>."
        ]
      },
      {
        "position": "Desarrollador Full Stack",
        "company": "Mundo Ejecutivo",
        "duration": "06/2017 - 11/2017",
        "responsibilities": [
          "Análisis, levantamiento de requerimientos, maquetado y diseño de página.",
          "Migración de xlsx a una base de datos no relacional <span>MongoDB</span>.",
          "Pruebas Unitarias de los componentes.",
          "Creación de documentación",
          "Modelo de Arquitectura <span>MVC</span>"
        ]
      },
      {
        "position": "Practicante",
        "company": "Cinvestav",
        "duration": "01/2018 - 06/2018",
        "responsibilities": [
          "Creación de prototipos interactivos en Figma.",
          "Colaboración en equipos ágiles para desarrollar MVPs."
        ]
      },
      {
        "position": "Practicante",
        "company": "Cinvestav",
        "duration": "2020 - 2021",
        "responsibilities": [
          "Creación de prototipos interactivos en Figma.",
          "Colaboración en equipos ágiles para desarrollar MVPs."
        ]
      }
    ]
  },
  "skills": {
    "title": "Habilidades",
    "list": ["HTML", "CSS", "JavaScript", "Java", "Lit", "Git", "Node", "SQL", "Python", "GitHub", "Bitbucket", "Bootstrap", "Materialize", "Sass"]
  },
  "education": {
    "title": "Educación",
    "degree": "Ingeniería en Sistemas Computacionales",
    "institution": "Universidad de México",
    "years": "2015 - 2020"
  },
  "footer": {
    "contact": "gomezlunaemmanuel@gmail.com",
    "phone": "+52 554 081 6430",
    // "portfolio": "www.emmanuelportafolio.com"
  }
}


document.getElementById('profile-img').src = data.header.profileImage;
document.getElementById('name').textContent = data.header.name;
document.getElementById('subtitle').textContent = data.header.subtitle;

// About
document.getElementById('about-title').textContent = data.about.title;
document.getElementById('about-content').textContent = data.about.content;

// Experience
document.getElementById('experience-title').textContent = data.experience.title;
const experienceContent = document.getElementById('experience-content');
data.experience.jobs.forEach(job => {
  const jobCard = document.createElement('div');
  jobCard.className = 'card';
  jobCard.innerHTML = `
        <h3>${job.position} - ${job.company}</h3>
        <p><strong>${job.duration}</strong></p>
        <ul>${job.responsibilities.map(res => `<li>${res}</li>`).join('')}</ul>
      `;
  experienceContent.appendChild(jobCard);
});

// Skills
document.getElementById('skills-title').textContent = data.skills.title;
const skillsContent = document.getElementById('skills-content');
data.skills.list.forEach(skill => {
  const skillItem = document.createElement('span');
  skillItem.textContent = skill;
  skillItem.className = 'skill-item';
  skillsContent.appendChild(skillItem);
});

// Education
document.getElementById('education-title').textContent = data.education.title;
document.getElementById('education-content').textContent = `${data.education.degree} - ${data.education.institution} (${data.education.years})`;

// Footer
document.getElementById('contact-email').textContent = data.footer.contact;
document.getElementById('contact-email').href = `mailto:${data.footer.contact}`;
document.getElementById('contact-phone').textContent = data.footer.phone;
document.getElementById('contact-portfolio').textContent = data.footer.portfolio;
document.getElementById('contact-portfolio').href = `https://${data.footer.portfolio}`;
