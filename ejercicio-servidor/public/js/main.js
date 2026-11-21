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
