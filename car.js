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
