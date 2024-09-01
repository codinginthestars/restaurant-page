



const Home = () => {
    const content = document.querySelector("#content");
    content.className = "";
    content.classList.add("home-tab");

    // Intro Section Elements

    const intro = document.createElement("div");
    intro.classList.add("intro");

    const introHeading = document.createElement("h1");
    introHeading.classList.add("intro-heading");
    introHeading.innerText = "Are you hungry?";

    intro.appendChild(introHeading);

    // Reservation Section Elements

    const reserveContainer = document.createElement("div");
    reserveContainer.classList.add("reserve-container");

    const reserveLeft = document.createElement("div");
    reserveLeft.classList.add("reserve-left");
    reserveLeft.classList.add("reserve-section")

    const reserveHeading = document.createElement("h2");
    reserveHeading.classList.add("reserve-heading");
    reserveHeading.innerText = "Are you in the mood for some pizza?";

    const reservePara = document.createElement("p");
    reservePara.innerText = "WELL WE ARE!";

    const reserveRight = document.createElement("div");
    reserveRight.classList.add("reserve-right");
    reserveRight.classList.add("reserve-section");

    const reserveHeadingTwo = document.createElement("h3");
    reserveHeadingTwo.innerText = "Make a Reservation";

    const reserveParaTwo = document.createElement("p");
    reserveParaTwo.innerText = "Try our many different styles of pizzas! And not just pizza, as well as our various styles of pasta, salads, soups, bread. Checkout our menu, there's so many options to choose from!";

    const reserveBtn = document.createElement("button");
    reserveBtn.classList.add("reserve-button");
    reserveBtn.innerText = "Reserve";

    reserveContainer.appendChild(reserveLeft);
    reserveContainer.appendChild(reserveRight);

    reserveLeft.appendChild(reserveHeading);
    reserveLeft.appendChild(reservePara);

    reserveRight.appendChild(reserveHeadingTwo);
    reserveRight.appendChild(reserveParaTwo);
    reserveRight.appendChild(reserveBtn);

    // Adding all the elements to div#content 

    content.appendChild(intro);
    content.appendChild(reserveContainer);
}

export default Home;