

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

    // Reservation & Hours Section Elements

    const reserveContainer = document.createElement("div");
    reserveContainer.classList.add("reserve-container");

    // Service Hours Section

    const reserveLeft = document.createElement("div");
    reserveLeft.classList.add("reserve-left");
    reserveLeft.classList.add("reserve-section")

    const reserveHeading = document.createElement("h3");
    reserveHeading.classList.add("reserve-heading");
    reserveHeading.innerText = "Are you in the mood for some pizza?";

    const reservePara = document.createElement("p");
    reservePara.innerText = "Our hours are:";

    const monday = document.createElement("p");
    monday.classList.add("hours");
    monday.textContent = "Monday: 8am - 8pm";

    const tuesday = document.createElement("p");
    tuesday.classList.add("hours");
    tuesday.textContent = "Tuesday: 8am - 8pm";

    const wednesday = document.createElement("p");
    wednesday.classList.add("hours");
    wednesday.textContent = "Wednesday: 8am - 8pm";

    const thursday = document.createElement("p");
    thursday.classList.add("hours");
    thursday.textContent = "Thursday: 8am - 8pm";

    const friday = document.createElement("p");
    friday.classList.add("hours");
    friday.textContent = "Friday: 8am - 8pm";

    const saturday = document.createElement("p");
    saturday.classList.add("hours");
    saturday.textContent = "Saturday: 8am - 8pm";

    const sunday = document.createElement("p");
    sunday.classList.add("hours");
    sunday.textContent = "Sunday: 8am - 8pm";

    // Reservation Section

    const reserveRight = document.createElement("div");
    reserveRight.classList.add("reserve-right");
    reserveRight.classList.add("reserve-section");

    const reserveHeadingTwo = document.createElement("h3");
    reserveHeadingTwo.classList.add("reserve-heading")
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
    reserveLeft.appendChild(monday);
    reserveLeft.appendChild(tuesday);
    reserveLeft.appendChild(wednesday);
    reserveLeft.appendChild(thursday);
    reserveLeft.appendChild(friday);
    reserveLeft.appendChild(saturday);
    reserveLeft.appendChild(sunday);

    reserveRight.appendChild(reserveHeadingTwo);
    reserveRight.appendChild(reserveParaTwo);
    reserveRight.appendChild(reserveBtn);

    // Adding all the elements to div#content 

    content.appendChild(intro);
    content.appendChild(reserveContainer);
}

export default Home;