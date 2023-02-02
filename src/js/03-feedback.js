import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const KEY = "feedback-from-state";

let savedData={};

form.addEventListener('input',throttle(formInputHandler,500));
loadHandler();
form.addEventListener('submit',submitHandler)

function formInputHandler(event){
    savedData[event.target.name] = event.target.value;
    localStorage.setItem(KEY,JSON.stringify(savedData));
    console.log(savedData);
}

function loadHandler(){
    let fromStorage = JSON.parse(localStorage.getItem(KEY));
    if(fromStorage){
        Object.entries(fromStorage).forEach(([name, value]) => {
            savedData[name] = value;
            form.elements[name].value = value;
        });
    }

}

function submitHandler(event){
    event.preventDefault();

    const formObj = new FormData(form);
    formObj.forEach((item,value)=> console.log(`${item} --- ${value}`));
    event.target.reset();
    localStorage.removeItem(KEY);
}
