let bar = document.getElementById('bar');
let navbar = document.querySelector('.navbar');

bar.onclick = () =>{
    bar.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
    
}
window.onscroll = () =>{
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}
window.onload = () =>{
        document.querySelector('.header').classList.add('active');
}
document.querySelector('#loginn').onclick = () =>{
    document.querySelector('.loginform').classList.toggle('active')
} 

document.querySelector('#closee').onclick = () =>{
    document.querySelector('.loginform').classList.remove('active')
} 
document.querySelector('#logg').onclick = ()=>{
    document.querySelector('.loginform').classList.toggle('active');
}


let wrapper = document.querySelector('.wrepper-box');
let activeBox = wrapper.querySelectorAll('.box');
let activeCircel = document.querySelector('.activecircle').querySelectorAll('.fa-circle');
let nextBtn = document.querySelector('#nextbtn');
let preBtn = document.querySelector('#prebtn');

let index = 0;

nextBtn.onclick = () =>{
    index++;
    changebox()
}
preBtn.onclick = () =>{
    index--;
    changebox()
}
let changebox = () => {
    if(index > activeBox.length - 1){
        index = 0
    }else if(index <0){
        index = activeBox.length - 1
    }

    for(let i = 0 ; i < activeBox.length ; i++){
        if(i === index){
            activeBox[i].classList.add('active');
            activeCircel[i].classList.add('fa-solid');
            wrapper.style.transform = `translateX(${index* - 250}px)`
        }else{
            activeBox[i].classList.remove('active');
            activeCircel[i].classList.remove('fa-solid');
        }
    }
}
