// scripts/main.js
window.addEventListener('DOMContentLoaded', () => {
    // Simulate loading posts from an API or source
    const posts = [
        { title: "First Post", content: "This is the content of the first post." },
        // Add more posts here
    ];

    const mainContent = document.querySelector('main');

    // Loop through posts and display them
    posts.forEach((post, index) => {
        const postElement = document.createElement('article');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
        `;
        mainContent.appendChild(postElement);
    });
});
