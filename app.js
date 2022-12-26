// mobil nav script start//
const mobilmenu = document.querySelector("#mobilmenu")
const nav = document.querySelector(".mobil-nav")

mobilmenu.addEventListener("click",()=>{
    if(mobilmenu.getAttribute("class") == "fa fa-bars"){
        mobilmenu.setAttribute("class","fa fa-times")
        mobilmenu.setAttribute("style","color: #171515")
        
        nav.classList.add("navShow")
    }
    else{
        mobilmenu.setAttribute("class","fa fa-bars")
        mobilmenu.setAttribute("style","color: #eeeeee")
        if(window.scrollY>200){
         mobilmenu.setAttribute("style","color: #171515")   
        }
        else{
            mobilmenu.setAttribute("style","color: #eeeeee")
        }
        nav.classList.remove("navShow")
    }
})
// mobil nav script end//


// menu change background-color script start // 
const header = document.querySelector("header")

window.addEventListener("scroll",()=>{
    if(window.scrollY>200){
        header.classList.add("header-color")
        mobilmenu.setAttribute("style","color: #171515")
    }
    else{
        header.classList.remove("header-color")
        mobilmenu.setAttribute("style","color: #eeeeee")
    }
})
// menu change background-color script end //

// back to top button script start //
let calcScrollValue = () =>{
    let scrollProgress = document.getElementById ("progress");
    let progressValue = document.getElementById ("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = 
    document.documentElement.scrollHeight - 
    document.documentElement.clientHeight;
    let scrollValue = Math.round ((pos * 100) / calcHeight);
    
    if(pos > 100){
        scrollProgress.style.display = "flex"

    }
    else{
        scrollProgress.style.display = "none"
    }
    scrollProgress.addEventListener("click",()=>{
        document.documentElement.scrollTop = 0;

    });
   
}

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

// back to top button script end //

const menus = document.querySelector('.menus');
const secondAbout = document.querySelector(".second-about")
const secondContact = document.querySelector(".second-contact")

menus.addEventListener('click', function(e) {
  e.preventDefault();
  const curTarget = e.target;
  if (!curTarget.classList.contains('bt')) return;


  const currentSection = document.querySelector(`#${curTarget.dataset.sec}`);

 
  window.scrollTo({
    top: currentSection.getBoundingClientRect().top + window.pageYOffset+50,
    behavior: 'smooth',
  })  
})
secondAbout.addEventListener("click",() => {
    window.scrollTo({top : 300})
})

// on page load script start//
window.addEventListener("load",()=>{
    const loader = document.querySelector(".loader")


    loader.classList.toggle("loader-hidden")

    // loader.addEventListener("transitionend",()=>{
    //     loader.classList.remove("loader")
    // })
})


// on page load script end//