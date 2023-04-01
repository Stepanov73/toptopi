let plus = document.getElementsByClassName('plus')[0];
let minus = document.getElementsByClassName('minus')[0];
let start = document.getElementsByClassName('start')[0];
let wordStart = document.getElementsByClassName('wordStart')[0]
let h3 = document.getElementsByClassName('h3')[0];
let ownV = document.getElementsByClassName('ownV')[0];
let secondList = document.getElementsByClassName('secondList')[0]
let firstList = document.getElementsByClassName('firstList')[0]
let thirdList = document.getElementsByClassName('thirdList')[0];
let inputPlus = document.getElementsByClassName('inputPlus')[0];
let input = document.getElementsByTagName('input')[0];
let finish = document.getElementsByClassName('finish')[0];
let h1 = document.getElementsByTagName('h1')
let variants = [];
let wordVariants = [];
let number = 0;
let finishColor = 0;
let colorRed = 0;
let p = document.getElementsByTagName('p')[0];
function startSite() {
    start.disabled = true;
    console.log('reeeel');
}
startSite();
plus.onclick = function () {
    number = number + 1;
    // if(variants < 2){
    //     p.style.opacity = '1'
    //     console.log(932);
    //     // setTimeout(function () {
    //     //     p.style.opacity = '0'
    //     //     console.log(9999);
            
    //     // }, 5000)
    // }
    
    for (let i = 0; i < number; i++) {
        if (i = number) {
            variants.push(i)
        }
        if (variants.length < 3) {
        }
        if (variants.length > 1) {
            start.style.color = 'white'
        }
    }
    console.log(variants);
    h3.innerHTML = variants.length
}
inputPlus.onclick = function () {
    if (input.value.length > 0) {
        wordVariants.push(input.value)
    }
    input.value = '';
    if(wordVariants.length > 1){
        wordStart.style.color ='red'
        
    }
    wordVariants.push(input.value)
    console.log(variants.length);
}
minus.onclick = function () {
    if (variants.length < 3) {
        start.style.color = 'rgb(87, 87, 87)'
        start.style.textShadow = '0 3px 7px rgba(0, 0, 0, 0.181)'
    }
    variants.splice(variants.length - 1, 1)
    h3.innerHTML = variants.length
}

start.onclick = function () {

    // document.getElementsByClassName("start").disabled = false;


    secondList.style.transform = 'translateY(0%)'
    // console.log(randomNumber);
    console.log(000);
    myInterval = setInterval(function () {
        let randomNumber = Math.floor(Math.random() * variants.length)

        finish.innerHTML = variants[randomNumber];
        // console.log(variants[randomNumber]);
        finishColor = finishColor + 6
        colorRed = colorRed + 1 / 80
        finish.style.color = 'rgb(' + finishColor + ', 0, 0, ' + colorRed + ')'
    }, 50)

    setTimeout(function () {
        clearInterval(myInterval)
        // finish.innerHTML = variants[randomNumber];

    }, 4000)
    if(variants.length < 1){
        p.style.opacity = '1'
    }

}
wordStart.onclick = function () {
    secondList.style.transform = 'translateY(0%)'

    mySecondInterval = setInterval(function () {
        let randomNumber = Math.floor(Math.random() * wordVariants.length)

        finish.innerHTML = wordVariants[randomNumber];
        // finish.innerHTML = 
        finishColor = finishColor + 6
        colorRed = colorRed + 1 / 80
        finish.style.color = 'rgb(' + finishColor + ', 0, 0, ' + colorRed + ')'
    }, 50)
    setTimeout(function () {
        clearInterval(mySecondInterval)
        // finish.innerHTML = wordVariants[WordRandomNumber];

    }, 4000)
}
ownV.onclick = function () {
    thirdList.style.transform = 'translateY(0%)'
}


secondList.onclick = function () {
    secondList.style.transform = 'translateY(-120%)'
    thirdList.style.transform = 'translateY(-120%)'
    h3.innerHTML = '0'
    variants = [];
    wordVariants = [];
    // finish.style.color = 'rgb(0, 0, 0, 0)'
    colorRed = 0;
    number = 0;
    start.style.color = 'red';

    

}