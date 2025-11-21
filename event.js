// // let element = document.querySelector('#para');

// function1 = (event) =>{
//     console.log(event);
//     let element = document.querySelector('#para');
//     element.textContent="Hello Lalit";
// }

// let element = document.querySelector('#para');

// element.addEventListener('click', function1);





// code to add 100 para in document 
// code1
// for( i=0; i<=100; i++){

//     let para = document.createElement('p');
//     para.textContent="this is para "+i;
//     document.body.appendChild(para);
// }

// code2
// let mydiv = document.createElement('div');
// for (i=0; i<+100; i++){
//     let para = document.createElement('p');
//     para.textContent="This is para "+i;
//     mydiv.appendChild(para);
// }
// document.body.appendChild(mydiv);

// optimise way to add 100 para 
let fragement = document.createDocumentFragment();

for (i=0; i<100; i++){
    let para= document.createElement('p');
    para.textContent="This is paragraph"+i;
    // no reflow and repaint for below line 
    fragement.appendChild(para);
}

// below line takes 1 reflow and 1 repaint 
document.body.appendChild(fragement);
