document.addEventListener("DOMContentLoaded", function () {
    let h1 = document.createElement('h1');
    h1.className = 'h1'
    let h1Text = document.createTextNode('This is an h1');
    h1.addEventListener('dblclick', cellDblClicked);
    // h1.style.cursor = 'pointer';
    
    
    let h2 = document.createElement('h2');
    h2.className = 'h2'
    let h2Text = document.createTextNode('This is an h2');
    h2.addEventListener('dblclick', cellDblClicked);
    // h2.style.cursor = 'pointer';
    
    
    let h3 = document.createElement('h3');
    h3.className = 'h3'
    let h3Text = document.createTextNode('This is an h3');
    h3.addEventListener('dblclick', cellDblClicked);

    let h4 = document.createElement('h4');
    h4.className = 'h4'
    let h4Text = document.createTextNode('This is an h4');
    h4.addEventListener('dblclick', cellDblClicked);

    let h5 = document.createElement('h5');
    h5.className = 'h5'
    let h5Text = document.createTextNode('This is an h5');
    h5.addEventListener('dblclick', cellDblClicked);

    let h6 = document.createElement('h6');
    h6.className = 'h6'
    let h6Text = document.createTextNode('This is an h6');
    h6.addEventListener('dblclick', cellDblClicked);

    let div = document.createElement('div');
    div.className = 'header-container';
    document.body.appendChild(div);
    div.appendChild(h1);
    h1.appendChild(h1Text);

    div.appendChild(h2);
    h2.appendChild(h2Text);

    div.appendChild(h3);
    h3.appendChild(h3Text);

    div.appendChild(h4);
    h4.appendChild(h4Text);

    div.appendChild(h5);
    h5.appendChild(h5Text);

    div.appendChild(h6);
    h6.appendChild(h6Text);

    div.style.cursor = 'pointer';


    let newLiButton = document.querySelector('button');
    newLiButton.addEventListener('click', newLiButtonClicked);
    newLiButton.style.cursor = 'pointer';
    
});

//array of 8 colors
let colorsArray = ["black", "blue", "red", "green", "purple", "orange", "yellow", "grey"];
//  chooses random color from 'colors' array indexes
function changeColor() {
    const random = Math.floor(Math.random() * colorsArray.length);
    event.target.style.color = colorsArray[random];
}

//document.getElementsByClassName('li')


//  double click on headers changes then to random color from array
function cellDblClicked() {
    changeColor()
}

let listCount = 0;

function createListItem() {
    listCount++;
    let li = document.createElement('li');
    let liText = document.createTextNode('This is list item ' + listCount);
    li.appendChild(liText);
    document.body.appendChild(li);
    li.style.cursor = 'pointer'
    //single click changes color random from 'colorsArray
    function liElementClicked() {
        changeColor()
    }
    li.addEventListener('click', liElementClicked);
    //removes child from parent node
    function removeListItem() {
        li.parentNode.removeChild(li);
    }
    //Double click removes list item from DOM
    function liDoubleClicked() {
        removeListItem()
    }
    li.addEventListener('dblclick', liDoubleClicked)
    }

    //calls list item when button clicked
    function newLiButtonClicked(){
        createListItem();
    }





