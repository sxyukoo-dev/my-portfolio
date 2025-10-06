const button = document.getElementById('colorBtn');
const colors = ['#FFB6C1', '#B0E0E6', '#98FB98', '#FFFACD', '#D8BFD8'];

button.addEventListener('click', () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});