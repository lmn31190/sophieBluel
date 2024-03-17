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

  let workDisplay = payload.map((work) => {
    console.log(work);
    const { title, imageUrl, category} = work;
    

    return `
        <figure class=${category.name}>
        <img src=${imageUrl} alt="${imageUrl}">
        <figcaption>${title}</figcaption>
        </figure>
        `;
  }).join("");

  displayWork.innerHTML = workDisplay;
};

displayWorks();



