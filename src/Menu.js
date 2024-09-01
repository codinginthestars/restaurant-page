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

    const menuCardContainer = document.createElement("div");
    menuCardContainer.classList.add("card-container");

    // The First Card Element

    const menuCardOne = document.createElement("div");
    menuCardOne.classList.add("menu-card");

    const itemHeading = document.createElement("h3");
    itemHeading.innerText = "Item One";

    const itemDetails = document.createElement("p");
    itemDetails.innerText = "Some details about the item.";

    const itemPrice = document.createElement("p");
    itemPrice.innerText = "$0.00";

    menuCardOne.appendChild(itemHeading);
    menuCardOne.appendChild(itemDetails);
    menuCardOne.appendChild(itemPrice);

    // The Second Card Element

    const menuCardTwo = document.createElement("div");
    menuCardTwo.classList.add("menu-card");

    const itemHeadingTwo = document.createElement("h3");
    itemHeadingTwo.innerText = "Item Two";

    const itemDetailsTwo = document.createElement("p");
    itemDetailsTwo.innerText = "Some details about the item.";

    const itemPriceTwo = document.createElement("p");
    itemPriceTwo.innerText = "$0.00";

    menuCardTwo.appendChild(itemHeadingTwo);
    menuCardTwo.appendChild(itemDetailsTwo);
    menuCardTwo.appendChild(itemPriceTwo);

    // The Third Card Element

    const menuCardThree = document.createElement("div");
    menuCardThree.classList.add("menu-card");

    const itemHeadingThree = document.createElement("h3");
    itemHeadingThree.innerText = "Item Three";

    const itemDetailsThree = document.createElement("p");
    itemDetailsThree.innerText = "Some details about the item.";

    const itemPriceThree = document.createElement("p");
    itemPriceThree.innerText = "$0.00";

    menuCardThree.appendChild(itemHeadingThree);
    menuCardThree.appendChild(itemDetailsThree);
    menuCardThree.appendChild(itemPriceThree);

    menuCardContainer.appendChild(menuCardOne);
    menuCardContainer.appendChild(menuCardTwo);
    menuCardContainer.appendChild(menuCardThree);

    content.appendChild(menuCardContainer);

}

export default Menu;