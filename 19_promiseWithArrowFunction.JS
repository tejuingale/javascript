

let isNotesPrepared = true;
let promise = new Promise(function(resolve, reject){
    if (isNotesPrepared) {
        resolve("Guys, please take this notes");
    } else {
        reject("Sorry, I didn't get time.....");
    }
});
promise.then((success) =>{
    console.log(success);
}).catch((reject)=>{
    console.log(reject);
}).finally( () =>{
    console.log("I should have notes...");
})