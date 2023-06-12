





// const elementPersonal = document.getElementById("personal");
// console.log(elementPersonal.innerHTML);
// const elementH3 = document.querySelectorAll("p");
// console.log(elementH3[0].innerHTML);
// document.getElementsByClassName();




const elementPer =document.querySelector('#personal');
console.log(elementPer.innerHTML);

const elementName =document.querySelector('.name');
console.log(elementPer.innerHTML);
const elementH3Contact =document.querySelector('h3');
console.log(elementPer.innerHTML);
const elementsPara = document.querySelectorAll('p');
for (const element of elementsPara) {
    console.log(element.innerHTML);
}
console.log("-------------.querySelectorAll('p`)");
const elementCeo = document.querySelectorAll(".ceo")
elementCeo.forEach((element) => {
    console.log(element.innerHTML);
});