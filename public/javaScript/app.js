 


// app.get("/",function(req,res){
//     res.sendFile(__dirname+"/index.html");
// })
              
// function attachEventListener(){
//     let count=0;
//     document.getElementById("but").addEventListener("click",()=>{
//         console.log("button clicked",++count);
//     });
// };
// attachEventListener();


const counters = document.querySelectorAll('.counter');
const duration = 2000; // Finish in 2 seconds
const speed = 2000;
const state = {};

const max = Math.max(...[...counters]
    .map(counter => +counter.dataset.target));
const tick = duration / max;

const updateCount = (counter) => {
    const target = +counter.dataset.target;
    const value = +counter.dataset.value;
    const ratio = target / max;
    const ms = Math.ceil(ratio * tick);
    const incr = target / speed;
    const newVal = value + incr;

    if (value < target) {
        counter.innerText = Math.floor(newVal);
        counter.dataset.value = newVal;
        setTimeout(updateCount, ms, counter);
    } else {
        counter.innerText = target;
        counter.dataset.value = target;
    }
};
counters.forEach(updateCount);

 


//  app.listen(3000,()=>{
//     console.log("server is running successfully");
//  })