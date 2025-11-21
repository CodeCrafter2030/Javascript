let myDiv= document.querySelector('.mydiv');

let newElement = document.createElement('span');

newElement.textContent="lalit rathod";
myDiv.insertAdjacentElement('beforebegin', newElement);

// myDiv.removeChild(newElement);

let parent = newElement.parentNode;

