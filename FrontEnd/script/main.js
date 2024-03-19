const fetchWork = "http://localhost:5678/api/works";

const displayFilter = document.querySelector(".filters");
const displayWork = document.querySelector(".gallery");

const getData = async () => {
  const res = await fetch(fetchWork);
  const data = await res.json();
  return data;
};

const displayWorks = async () => {
  const payload = await getData();
  

  let workDisplay = payload
    .map((work) => {
      const { title, imageUrl, category } = work;
      


      return `
    <div class="card hide ${category.id}\">
    <figure>
    <img src=${imageUrl} alt="${imageUrl}">
    <figcaption>${title}</figcaption>
    </figure>
    </div>
        `;
    })
    .join("");

  displayWork.innerHTML = workDisplay;
};

function filterWork(text, value) {
  //Button class code
  let buttons = document.querySelectorAll(".filter-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (text.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (text == "Tous") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

displayWorks();

window.onload = () => {
  filterWork("Tous", "0");
};
