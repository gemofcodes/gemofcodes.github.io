const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelector('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

const readMoreBtn = document.querySelector('.read-more-btn');
const text = document.querySelector('.text');

readMoreBtn.addEventListener('click', (e)=>{
    text.classList.toggle('show-more');
})

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll',() => {
   var scroll_position = window.scrollY;
   if(scroll_position > 250){
    // header.style.backgroundColor = "#e1782c";
    header.style.backgroundColor = "#1B898D";
       }
   else{
         header.style.backgroundColor = "transparent";
   }
});

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});

function toggleContent(){
    var text = document.getElementById("moreText");
    var link = document.getElementById("moreLink");
    if(link.innerHTML=="More"){
        text.style.display = "inline";
        link.innerHTML = "less";
    }
    else{
        text.style.display = "none";
        link.innerHTML = "More";
    }
}


function toggleContent1(){    
    var text1 = document.getElementById("moreText1");
    var link1 = document.getElementById("moreLink1");
    if(link1.innerHTML=="More"){
        text1.style.display = "inline";
        link1.innerHTML = "less";
    }
    else{
        text1.style.display = "none";
        link1.innerHTML = "More";
    }
}

function toggleContent2(){    
    var text2 = document.getElementById("moreText2");
    var link2 = document.getElementById("moreLink2");
    if(link2.innerHTML=="More"){
        text2.style.display = "inline";
        link2.innerHTML = "less";
    }
    else{
        text2.style.display = "none";
        link2.innerHTML = "More";
    }
}

function toggleContent3(){    
    var text3 = document.getElementById("moreText3");
    var link3 = document.getElementById("moreLink3");
    if(link3.innerHTML=="More"){
        text3.style.display = "inline";
        link3.innerHTML = "less";
    }
    else{
        text3.style.display = "none";
        link3.innerHTML = "More";
    }
}

function toggleContent5(){    
    var text5 = document.getElementById("moreText5");
    var link5 = document.getElementById("moreLink5");
    if(link5.innerHTML=="Read More..."){
        text5.style.display = "inline";
        link5.innerHTML = "<br>Less";
    }
    else{
        text5.style.display = "none";
        link5.innerHTML = "Read More...";
    }
}

