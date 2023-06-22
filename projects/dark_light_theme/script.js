const checkbox = document.querySelector(".checkbox");
const body = document.body

const theme = localStorage.getItem('theme')
if (theme) {
    if (theme === 'dark') {
        body.classList.add('dark')
    }
}

checkbox.addEventListener("change", () => {
    body.classList.toggle("dark");
    
    if (body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark')
    } else {
        localStorage.setItem('theme', 'light')
    }
});
