const images = ["0.png","1.jpg", "3.png", "4.jpg"];
const color1 = document.querySelector(".style");
const color2 = document.querySelector("#quote");
const color3 =  document.querySelector(".A");
const color4 = document.querySelector(".B");
const input = document.querySelector("input");

const randomJpg = images[Math.floor(Math.random() * images.length)];

const imageCreate = document.createElement("img");

imageCreate.src = `img/${randomJpg}`;

document.body.appendChild(imageCreate);
if(randomJpg === images[3]){
  color1.style.color = "black";
  color2.style.color = "black";
  color3.style.color = "black";
  color4.style.color = "black";
  color3.style.borderBottom = "2px solid black";
  color4.style.borderBottom = "2px solid black";
}
