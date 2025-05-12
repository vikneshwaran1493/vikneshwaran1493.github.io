// This file contains JavaScript code for interactive elements on the Broadsage website.

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Form validation for contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (!name || !email || !message) {
                e.preventDefault();
                alert('Please fill in all fields.');
            }
        });
    }

    // Dynamic content loading for courses
    const coursesSection = document.getElementById('courses');
    if (coursesSection) {
        fetch('path/to/courses/data.json')
            .then(response => response.json())
            .then(data => {
                data.courses.forEach(course => {
                    const courseElement = document.createElement('div');
                    courseElement.classList.add('course');
                    courseElement.innerHTML = `
                        <h3>${course.title}</h3>
                        <p>${course.description}</p>
                        <p><strong>Duration:</strong> ${course.duration}</p>
                        <p><strong>Syllabus:</strong> ${course.syllabus}</p>
                    `;
                    coursesSection.appendChild(courseElement);
                });
            })
            .catch(error => console.error('Error loading courses:', error));
    }
});