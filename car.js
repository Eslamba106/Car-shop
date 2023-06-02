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

// write effect 
let ha = 'Find Your Car';
let indexx = 1;

function eslamm(){
    document.getElementById('ha').textContent = ha.slice(0,indexx);
    indexx++;
}
setInterval(function(){
    eslamm();
},500)

let ans = document.getElementById('bada');
let anss = ans.innerHTML;
console.log(anss)

// scroll 
window.onscroll = function(){
    if(scrollY >= 400 ){
        ans.style.display = 'block';
    }else{
        ans.style.display = 'none';
        
    }
}
ans.onclick = function(){
    window.scroll({
        behavior: 'smooth',
        top:0,
    })
}