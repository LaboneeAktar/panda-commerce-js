//2. all h2 color change
const allH2Tags = document.getElementsByTagName('h2');
for (const h2 of allH2Tags) {
    h2.style.color = 'red';
}

//3. backpack background color change
const backPack = document.getElementById('backpack');
backPack.style.backgroundColor = 'antiquewhite';


//4. all card radius change
const allCards = document.getElementsByClassName('card');
for (const card of allCards) {
    card.style.borderRadius = '30px';
}

//5. Click and show console log
function xboxButton() {
    console.log('Please Buy this X-Box');
}


//6. display none in click handler
const allButtons = document.getElementsByClassName('btn');
for (const button of allButtons) {
    button.addEventListener('click', function (event) {
        event.target.style.display = 'none';
    })
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

//8. changing image in mouseenter
document.getElementById('lal-bag').addEventListener('mouseenter', function (event) {
    event.target.src = "images/shoes/shoe-2.png";
})

document.getElementById('lal-bag').addEventListener('mouseout', function (event) {
    event.target.src = "images/bags/bag-1.png";
})

document.getElementById('red-shoe').addEventListener('mouseenter', function (event) {
    event.target.src = "images/bags/bag-2.png";
})
document.getElementById('red-shoe').addEventListener('mouseout', function (event) {
    event.target.src = "images/shoes/shoe-3.png";
})



// 9. color change in double click
document.getElementById('subscribe').addEventListener('dblclick', function () {
    subscribe.style.backgroundColor = 'skyblue';
})

