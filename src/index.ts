import './styles/main.scss';

console.log('TypeScript Todo App is running! 🚀');


document.querySelector('.todo-container')!.innerHTML = `
    <div style="text-align: center; padding: 50px;">
        <h2 style="color: #2c3e50;">🚧 Under Construction</h2>
        <p style="color: #7f8c8d;">Our amazing Todo app is coming soon!</p>
        <button onclick="alert('TypeScript работает!')" style="padding: 10px 20px; background: #3498db; color: white; border: none; border-radius: 5px; cursor: pointer;">
        Test Button
        </button>
    </div>
`;