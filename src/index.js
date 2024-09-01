import './styles.css';
import Home from './home';
import Menu from './Menu';

Home();

const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const contactBtn = document.getElementById("contact");

homeBtn.addEventListener("click", () => {
    removeAllContent();
    Home();
});

menuBtn.addEventListener("click", () => {
    removeAllContent();
    Menu();
});

const removeAllContent = () => {
    const content = document.getElementById("content");
    content.innerHTML = "";
}