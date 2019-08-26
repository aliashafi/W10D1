
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

const dogLinkCreator = function dogLinkCreator(){
  let key = Object.keys(dogs);

  let dogLinks = [];
  for (let i = 0; i < key.length; i++) {
    let liTag = document.createElement("li");
    let aTag = document.createElement("a");
    aTag.setAttribute("href", dogs[key[i]]);
    aTag.innerHTML = (key[i]);
    liTag.setAttribute("class", "dog-link");
    liTag.appendChild(aTag);
    dogLinks.push(liTag);
  }
  return dogLinks;
};

const attachDogLinks = function attachDogLinks() {
  let dogLinks = dogLinkCreator();
  let dropDown = document.querySelector(".drop-down-dog-list");
  dogLinks.forEach(el => {
    dropDown.appendChild(el);
  });

};



let links = attachDogLinks();

function handleEnter(ele){
  ele.style.display = "block";
}

function handleLeave(ele){
  ele.style.display = "none";
}

let dropDownNav = document.querySelector(".drop-down-dog-nav");

dropDownNav.addEventListener("mouseover", function (event) {
  let dropDown = document.querySelector(".drop-down-dog-list");
  handleEnter(dropDown);
});

dropDownNav.addEventListener("mouseleave", function (event) {
  let dropDown = document.querySelector(".drop-down-dog-list");
  handleLeave(dropDown);
});



