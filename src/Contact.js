import pizzaImage5 from '../assets/images/pizza5.jpg';

const Contact = () => {
    const content = document.getElementById("content");
    content.className = "";
    content.classList.add("contact-tab");

    const contactHeader = document.createElement("h2");
    contactHeader.classList.add("contact-heading");
    contactHeader.innerText = "Contact Us";

    const contactImage = document.createElement("img");
    contactImage.classList.add("contact-image");
    contactImage.src = pizzaImage5;

    // Contact Section

    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");

    // Manager Container

    const managerContainer = document.createElement("div");
    managerContainer.classList.add("manager-container");

    const managerHeading = document.createElement("h3");
    managerHeading.innerText = "Manager:";

    const managerName = document.createElement("p");
    managerName.innerText = "Name of Manager";

    managerContainer.appendChild(managerHeading);
    managerContainer.appendChild(managerName);

    // Address Section

    const addressContainer = document.createElement("div");
    addressContainer.classList.add("address-container");

    const addressHeading = document.createElement("h3");
    addressHeading.innerText = "Address:";

    const address = document.createElement("p");
    address.innerText = "5555 E 20th Pl, Fake City, Fake State, 55555-555";

    addressContainer.appendChild(addressHeading);
    addressContainer.appendChild(address);

    // Phone Number

    const phoneContainer = document.createElement("div");
    phoneContainer.classList.add("phone-container");

    const phoneHeading = document.createElement("h3");
    phoneHeading.innerText = "Phone Number:";

    const phone = document.createElement("p");
    phone.innerText = "555-555-5555";

    phoneContainer.appendChild(phoneHeading);
    phoneContainer.appendChild(phone);

    // Add all the elements to the container, then the div#content

    const rightContainer = document.createElement("div");
    rightContainer.classList.add("right-container");

    contactContainer.appendChild(managerContainer);
    contactContainer.appendChild(addressContainer);
    contactContainer.appendChild(phoneContainer);

    rightContainer.appendChild(contactHeader);
    rightContainer.appendChild(contactContainer);


    content.appendChild(contactImage);
    content.appendChild(rightContainer);

}

export default Contact;