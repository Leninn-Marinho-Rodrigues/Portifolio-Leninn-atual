// Funções de navegação para o menu hambúrguer
function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}

// Efeito de máquina de escrever
const typewriterTextElement = document.getElementById('typewriter-text');
const words = ["Desenvolvedor Junior", "Designer", "Estudante de TI"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
        typewriterTextElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriterTextElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typingSpeed = 150; // Velocidade de digitação
    if (isDeleting) {
        typingSpeed /= 2; // Velocidade mais rápida para apagar
    }

    if (!isDeleting && charIndex === currentWord.length) {
        typingSpeed = 1500; // Pausa no final da palavra
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; // Move para a próxima palavra
        typingSpeed = 500; // Pausa antes de digitar a nova palavra
    }

    setTimeout(typeWriter, typingSpeed);
}

// Inicia o efeito de máquina de escrever e o AOS quando a janela carrega
window.onload = function() {
    AOS.init({offset:0}); // Inicializa AOS
    typeWriter(); // Inicia o efeito de máquina de escrever
};
