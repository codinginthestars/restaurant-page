import './styles.css';
import Home from './home';
import Menu from './Menu';
import Contact from './Contact';



const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const contactBtn = document.getElementById("contact");

Contact();

homeBtn.addEventListener("click", () => {
    removeAllContent();
    Home();
});

menuBtn.addEventListener("click", () => {
    removeAllContent();
    Menu();
});

contactBtn.addEventListener("click", () => {
    removeAllContent();
    Contact();
})

const removeAllContent = () => {
    const content = document.getElementById("content");
    content.innerHTML = "";
}