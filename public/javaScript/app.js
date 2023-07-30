 


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







const url = 'https://script.google.com/macros/s/AKfycbynecsEBbTLrg2iTdwKrCjDKTRGpEiOYtj-yRWYY8Q_79zJv8CjUOoIkVBzs7VgbkfC5w/exec';
const myForm = document.querySelector('#myForm');
const myName = document.querySelector('#name');
const myEmail = document.querySelector('#email');
const mySubject = document.querySelector('#subject');
const myMessage = document.querySelector('#message');
const subBtn =document.querySelector('button[type="submit"]');

myName.value = 'Laurence Svekis';
myEmail.value = 'gapp*****@gmail.com';
mySubject.value= 'working hour';
myMessage.value = 'Hello World';
myForm.addEventListener('submit', submitter);


function submitter(e) {
    console.log('submitted');
    e.preventDefault();
    subBtn.disabled = true;
    let message = '';
    if (myName.value.length < 5) {
        myName.style.borderColor = 'red';
        message += `<br>Name needs to be 5 characters`;
    }
    if (myEmail.value.length < 5) {
        myEmail.style.borderColor = 'red';
        message += `<br>Email is missing`;
    }
    if (message) {
        const div = document.createElement('div');
        div.innerHTML = message;
        div.style.color = 'red';
        myForm.append(div);
        setTimeout(() => {
            div.remove();
            myName.style.borderColor = '';
            myEmail.style.borderColor = '';
        }, 5000);
        subBtn.disabled = false;
    } else {
        const myObj = {
            name: myName.value,
            email: myEmail.value,
            subject:mySubject.value,
            message: myMessage.value
        };
        addSendMail(myObj);
    }
    
}


function addSendMail(data) {
    console.log(data);
    fetch(url,{
        method:'POST',
        body:JSON.stringify(data)
    }) 
    .then(res => res.json())
    .then(json => {
            console.log(json);
        })
}



function addSendMailGET(data) {
    const url1 = url + '?id=100';
    fetch(url1)
        .then(res => res.json())
        .then(json => {
            console.log(json);
        })
}


 


//  app.listen(3000,()=>{
//     console.log("server is running successfully");
//  })