// Example of a small JavaScript function to show an alert when a project is clicked
document.querySelectorAll('.project-card a').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        alert('You clicked on the project!');
    });
});
