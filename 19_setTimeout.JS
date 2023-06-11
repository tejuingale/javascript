function display() {
   console.log("display"); 
}

setTimeout(display, 9000);

setTimeout(function(){
    console.log(100+100);
}, 5000);

setTimeout( () => {
    console.log(`Inside arrow function...`);
}, 3000);