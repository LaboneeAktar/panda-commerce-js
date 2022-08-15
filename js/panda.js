//2. all h2 color change
const allH2Tags = document.getElementsByTagName('h2');
for (const h2 of allH2Tags) {
    h2.style.color = 'red';
}

//3. backpack background color change
document.getElementById('backpack').addEventListener('click', function () {
    backpack.style.backgroundColor = 'antiquewhite';
})


//4. all card radius change
const allCards = document.getElementsByClassName('card');
for (const card of allCards) {
    card.style.borderRadius = '30px';
}

//5. Click and show console log
function xboxButton() {
    console.log('Please Buy this X-Box');
}


//6. display none in click handler (Need more information)
function hideButton() {
    const allButtons = document.getElementsByClassName('btn');
    for (const btn of allButtons) {
        btn.style.display = 'none';
    }
}

//7. button disable
document.getElementById('exampleInputEmail1').addEventListener('keyup', function (event) {
    const text = event.target.value;

    const submitButton = document.getElementById('submit-button');
    if (text == 'email') {
        submitButton.removeAttribute('disabled');
    }
    else {
        submitButton.setAttribute('disabled', true);
    }
})


// document.getElementById('laltu-bag').addEventListener('mouseenter', function () {
//     console.log('Event show mouse enter');
// })
// const myImage = new Image(100, 200);
// myImage.src = 'picture.jpg';
// document.body.appendChild(myImage);



// 9. color change in double click
document.getElementById('subscribe').addEventListener('dblclick', function () {
    subscribe.style.backgroundColor = 'skyblue';
})

