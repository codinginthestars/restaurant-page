import pizzaImage1 from '../assets/images/pizza2.jpg';
import pizzaImage2 from '../assets/images/pizza3.jpg';
import pizzaImage3 from '../assets/images/pizza4.jpg';


const Menu = () => {
    const content = document.querySelector("#content");
    content.className = "";
    content.classList.add("menu-tab");

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    // The Menu page header section

    const menuHeader = document.createElement("div");
    menuHeader.classList.add("menu-header");

    const menuHeading = document.createElement("h2");
    menuHeading.classList.add("menu-heading");
    menuHeading.innerText = "MENU";

    const menuPara = document.createElement("p");
    menuPara.innerText = "A menu full of deliciously prepared food.";

    menuHeader.appendChild(menuHeading);
    menuHeader.appendChild(menuPara);

    // Section Headings

    const sectionHeader = document.createElement("div");
    sectionHeader.classList.add("section-header");

    const pizzaHeading = document.createElement("h2");
    pizzaHeading.classList.add("section-heading");
    pizzaHeading.innerText = "Pizzas";

    sectionHeader.appendChild(pizzaHeading);

    // Menu Card Container

    const menuCardContainer = document.createElement("div");
    menuCardContainer.classList.add("card-container");

    // The First Card Element

    const menuCardOne = document.createElement("div");
    menuCardOne.classList.add("menu-card");

    const itemHeading = document.createElement("h3");
    itemHeading.innerText = "Item One";

    const itemImage = document.createElement("img");
    itemImage.classList.add("item-image")
    itemImage.src = pizzaImage1;

    const itemDetails = document.createElement("p");
    itemDetails.innerText = "Some details about the item.";

    const itemPrice = document.createElement("p");
    itemPrice.classList.add("price");
    itemPrice.innerText = "$0.00";

    menuCardOne.appendChild(itemHeading);
    menuCardOne.appendChild(itemImage);
    menuCardOne.appendChild(itemDetails);
    menuCardOne.appendChild(itemPrice);

    // The Second Card Element

    const menuCardTwo = document.createElement("div");
    menuCardTwo.classList.add("menu-card");

    const itemHeadingTwo = document.createElement("h3");
    itemHeadingTwo.innerText = "Item Two";

    const itemImage2 = document.createElement("img");
    itemImage2.classList.add("item-image")
    itemImage2.src = pizzaImage2;

    const itemDetailsTwo = document.createElement("p");
    itemDetailsTwo.innerText = "Some details about the item.";

    const itemPriceTwo = document.createElement("p");
    itemPriceTwo.classList.add("price");
    itemPriceTwo.innerText = "$0.00";

    menuCardTwo.appendChild(itemHeadingTwo);
    menuCardTwo.appendChild(itemImage2);
    menuCardTwo.appendChild(itemDetailsTwo);
    menuCardTwo.appendChild(itemPriceTwo);

    // The Third Card Element

    const menuCardThree = document.createElement("div");
    menuCardThree.classList.add("menu-card");

    const itemHeadingThree = document.createElement("h3");
    itemHeadingThree.innerText = "Item Three";

    const itemImage3 = document.createElement("img");
    itemImage3.classList.add("item-image")
    itemImage3.src = pizzaImage3;

    const itemDetailsThree = document.createElement("p");
    itemDetailsThree.innerText = "Some details about the item.";

    const itemPriceThree = document.createElement("p");
    itemPriceThree.classList.add("price");
    itemPriceThree.innerText = "$0.00";

    menuCardThree.appendChild(itemHeadingThree);
    menuCardThree.appendChild(itemImage3);
    menuCardThree.appendChild(itemDetailsThree);
    menuCardThree.appendChild(itemPriceThree);

    content.appendChild(menuHeader)
    menuCardContainer.appendChild(menuCardOne);
    menuCardContainer.appendChild(menuCardTwo);
    menuCardContainer.appendChild(menuCardThree);

    content.appendChild(sectionHeader);
    content.appendChild(menuCardContainer);

}

export default Menu;