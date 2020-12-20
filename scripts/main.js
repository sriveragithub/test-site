let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/sky1.jpg') {
        myImage.setAttribute('src','images/sky2.jpg');
    } else {
        myImage.setAttribute('src','images/sky1.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name');
    if(!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = `Welcome to the site, ${myName}`;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = "Welcome to the site, " + storedName;
}

myButton.onclick = function() {
    setUserName();
}