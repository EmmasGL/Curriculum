// script.js
fetch('/locales-app/data.json')
  .then(response => response.json())
  .then(data => {
    // Header
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
  })
  .catch(error => console.error('Error al cargar el archivo JSON:', error));
