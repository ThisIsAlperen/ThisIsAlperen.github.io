const homePage = document.getElementById('homePage')
const aboutPage = document.getElementById('aboutPage')
const portfolioPage = document.getElementById('portfolioPage')
const contactPage = document.getElementById('contactPage')
const skills = document.getElementById('skillsPage')
const navButton = document.getElementById('navButton').children[0]
const Scroll = document.getElementById('scroll')
const ScrollLinks = document.getElementById('scrollLinks')
const Main = document.querySelector('main')
const homeDownArrow = document.getElementById('homeDownArrow')
const skillsDetails = document.getElementById('skillsDetails')
const frame = document.getElementById('frame')
const jobDetailLink = document.getElementById('jobDetailLink')


// this is for the changing job with js
const job = document.getElementById('homeJob').children[0]

// this is for the changing job with css
const job2 = document.getElementById('changeJob')
const jobDetail = document.getElementById('jobDetail')
const portfolioLinks = document.getElementById('portfolioLinks')

const carousel = document.getElementById('carousel')
const carouselLeft = document.getElementsByClassName('fa-angle-left')
const carouselRight = document.getElementsByClassName('fa-angle-right')

const pointer = document.getElementById('pointer')
let slide = 0;


// for each method can be used for html collections
NodeList.prototype.forEach = HTMLCollection.prototype.forEach = Array.prototype.forEach;
document.getElementById('scroll').children.forEach(function (child) {
    child.children.forEach(function (e) {
        e.style.opacity = '0'
        e.style.paddingTop = '10px'
    })
})

function hide(x) {
    x.classList.add('hide')
}
function show(x) {
    x.classList.remove('hide')
}
homePage.children.forEach(function (child) {
    setTimeout(function () {
        child.style.transition = '.5s'
        child.style.opacity = '1'
        child.style.paddingTop = '0'
    },500);
})
carousel.innerHTML = '';

// Uppercase the titles
document.getElementsByTagName('h2').forEach(child => {
    child.innerText = child.innerText.toUpperCase()
})
document.getElementsByTagName('h3').forEach(child => {
    child.innerText = child.innerText.toUpperCase()
})
// scroll to the about page when the arrow in the homepage clicked
homePage.children[2].onclick = function (e) {
    $('html,main').animate({ //animate element that has scroll
        scrollTop: 716 //for scrolling

    }, 100);
    e.preventDefault()
}
// scroll to the page when navbar link clicked
ScrollLinks.onclick = function (e) {
    e.preventDefault()
    var x = e.target.getAttribute('href')
    var y = document.getElementById(x)

    if(window.innerWidth < 992){
        document.getElementsByTagName('nav')[0].classList.remove('open')
        navButton.classList.add('fa-bars')
        navButton.classList.remove('fa-xmark')
    }
    $('html,main').animate({ //animate element that has scroll
        scrollTop: y.offsetTop //for scrolling

    }, 100);

}
// remove the navbar class when resize
window.addEventListener('resize', function () {
    var x = document.getElementsByTagName('nav')[0]
    var y = this.document.getElementById('navButton').children[0]
    if (this.window.innerWidth >= 992) {
        y.classList.remove('fa-xmark')
        y.classList.add('fa-bars')
        x.classList.remove('open')
    }

    if (carousel.innerHTML != '') {
        Slide()
        carouselWidth()
    }


})
function Fade() {
    var x = this.window.innerHeight + this.window.pageYOffset + -200;
    document.getElementById('scroll').children.forEach(function (child) {

        if (child.offsetTop < x) {
            child.children.forEach(function (e) {
                e.style.transition = '.6s'
                e.style.opacity = '1'

                //Number(this.window.getComputedStyle(e).padding)
                e.style.paddingTop = '0px'
            })
        }
    })
}
// hover the navbar links when scroll
window.addEventListener("scroll", function () {
    Fade()
    carouselWidth()
    ScrollLinks.children.forEach(child => {
        child.children[0].classList = ''
    });
    ScrollLinks.children.forEach(child => {
        child.classList = ''
    });


    if (this.window.pageYOffset < aboutPage.offsetTop - 200) {

        document.getElementById('homeLink').classList.add('hover')
        document.getElementById('homeLink').parentElement.classList.add('hover')
    }
    if (this.window.pageYOffset > aboutPage.offsetTop - 200 && this.window.pageYOffset < portfolioPage.offsetTop - 200) {


        document.getElementById('aboutLink').classList.add('hover')
        document.getElementById('aboutLink').parentElement.classList.add('hover')

    }
    if (this.window.pageYOffset > portfolioPage.offsetTop - 200 && this.window.pageYOffset < contactPage.offsetTop - 200) {
        document.getElementById('portfolioLink').classList.add('hover')
        document.getElementById('portfolioLink').parentElement.classList.add('hover')

    }
    if (this.window.pageYOffset > contactPage.offsetTop - 200) {
        document.getElementById('contactLink').classList.add('hover')
        document.getElementById('contactLink').parentElement.classList.add('hover')

    }

});
// ********vvvv This Part is for the changing the job vvvv******//
// ************* I found a smoother way with css **********//
//setTimeout(changeJob,1000)
function changeJob() {
    var k = ['Web Developer', 'Freelancer']
    var y;
    var x = job.innerText
    if (k[0] === x) {
        y = k[1]

    } else if (k[1] === x) {
        y = k[0]
    } else {
        x = 'Freelancer'
        y = 'Web Developer'
    }

    y = y.split('')
    x = x.split('')



    setTimeout(function () { clearJob(x); }, 750)
    setTimeout(function () { createJob(y); }, 1500)
}
//setInterval(changeJob, 4000)

function createJob(y) {
    i = 0;
    var k = ''
    var writeJob = setInterval(function () {

        if (y[i] != undefined) {
            k = k + y[i]
        }
        job.innerText = k
        i++

        if (i >= y.length) {

            clearInterval(writeJob)
        }
    }, 50)
}
function clearJob(x) {
    var deleteJob = setInterval(function () {
        x.pop()

        var m = ''
        for (i = 0; i < x.length; i++) {
            if (x[i] != undefined) {
                m = m + x[i]
            }
        }
        job.innerText = m;
        if (x.length == 0) {

            clearInterval(deleteJob)
        }
    }, 50)
}
// *********^^^^ This Part is for the changing the job^^^^^********//
//left - right carousel

carouselLeft[0].onclick = function () {
    if (slide > 0) {
        Slide(-1)
    }
}
carouselRight[0].onclick = function () {

    if (slide < carousel.children.length - 1) {
        Slide(1)
    }
}
pointer.onclick = function (e) {
    e.preventDefault()

    if (e.target.classList.length > 0) {
        var x = Number(e.target.getAttribute('number'))

    }
    slide = x;
    Slide()
}

function Slide(x) {

    var y = carousel.children[slide].offsetWidth
    if (x == undefined) {
        x = 0;
    }
    slide = slide + x
    pointer.children.forEach(function (child) {
        child.classList.remove('on')
        child.classList.add('off')
    })
    pointer.children[slide].classList.add('on')
    pointer.children[slide].classList.remove('off')
    //carousel.style.left = 
    carousel.style.left = `-${y * slide}px`
}
// This is the new part for the changing the job
var i;
setInterval(function () {

    if (i == undefined) {
        i = 0
    }

    job2.style.width = '2px'
    setTimeout(function () {

        if (i == 0) {
            hide(job2.children[0].children[0])
            job2.style.width = '145px'
            show(job2.children[0].children[1])
        }
        if (i == 1) {
            hide(job2.children[0].children[1])
            job2.style.width = '107px'
            show(job2.children[0].children[2])
        }
        if (i == 2) {
            hide(job2.children[0].children[2])
            job2.style.width = '155px'
            show(job2.children[0].children[0])
        }

        i++
        if (i > 2) {
            i = 0
        }

    }, 800)



}, 2500)
//****************************************************/
// open the details of a portfolio item
portfolioLinks.onclick = function (e) {
    pointer.innerHTML = ''
    carousel.innerHTML = ''
    e.preventDefault()

    var x = e.target.getAttribute('href')
    var title = e.target.getAttribute('title')
    createImg(x)

    document.getElementById('specificJob').children[0].innerText = title
    // get the specific text by name
    document.getElementById('jobDetailText').children.forEach(child => {
        if (child.getAttribute('name') == x) {
            child.classList.remove('hide')
        } else {
            child.classList.add('hide')
        }
    });
    document.getElementById('jobDetailLink').children.forEach(function (child) {
        if (child.getAttribute('name') == x) {
            child.classList.remove('hide')
        } else {
            child.classList.add('hide')
        }
    })
    // get the specific feature list by name
    document.getElementById('jobDetailFeatures').children.forEach(child => {

        if (child.getAttribute('name') == x) {
            child.classList.remove('hide')
        } else {
            child.classList.add('hide')
        }

    });

    if (x !== null) {//to make sure that user clicked to a picture not any point (will be changed)
        portfolioPage.children[1].style.opacity = '0';
        portfolioPage.children[2].style.opacity = '0';

        setTimeout(function () {
            hide(portfolioPage.children[1])
            hide(portfolioPage.children[2])
            show(jobDetail)
            carouselWidth()

        }, 350)
        setTimeout(function () {

            jobDetail.style.opacity = '1'
        }, 400)
    }

}
jobDetail.children[0].onclick = function (e) {
    jobDetail.style.opacity = '0';
    frame.classList.add('hide')
    frame.style.opacity = '0'
    frame.style.height = '0px'
    setTimeout(function () {
        show(portfolioPage.children[1])
        show(portfolioPage.children[2])
        hide(jobDetail)

    }, 350)
    setTimeout(function () {
        portfolioPage.children[1].style.opacity = '1'
        portfolioPage.children[2].style.opacity = '1'
    }, 400)
    e.preventDefault()
}
//home Page Down Arrows
//Starts at the beginning
var homeArrow = setInterval(homeArrow2, 5000)
// If mouse enter the arrows, stops
homeDownArrow.addEventListener('mouseenter', function () {
    clearInterval(homeArrow)
})
//If mouse leaves the arrows, continue
homeDownArrow.addEventListener('mouseleave', function () {
    setTimeout(homeArrow2, 1000)
    homeArrow = setInterval(homeArrow2, 5000) // creates interval again
})

function homeArrow2() {
    var x = homeDownArrow
    x.style.height = '130px'
    x.style.transition = '.4s '
    setTimeout(function () {
        x.style.transition = '.15s ease-in'
        x.style.height = '90px'
    }, 400)
    setTimeout(function () {
        x.style.transition = '.2s ease-out '
        x.style.height = '115px'
    }, 580)
    setTimeout(function () {
        x.style.transition = '.15s ease-in'
        x.style.height = '90px'
    }, 800)
    setTimeout(function () {
        x.style.transition = '.15s ease-out'
        x.style.height = '96px'
    }, 970)
    setTimeout(function () {
        x.style.transition = '.1s ease-in'
        x.style.height = '90px'
    }, 1150)
    x.style.transition = '.3s'
}

// 

document.getElementById('navButton').onclick = function close(e) {
    var x = document.getElementsByTagName('nav')[0]


    if (e.target.classList != '') {
        var y = e.target

    } else {
        var y = e.target.children[0]

    }

    if (x.classList[2] == 'open') {
        y.classList.remove('fa-xmark')
        y.classList.add('fa-bars')
        x.classList.remove('open')
    } else {
        x.classList.add('open')
        y.classList.add('fa-xmark')
        y.classList.remove('fa-bars')
    }
}
function createImg(x) {
    for (i = 1; i < 5; i++) {
        var y = x + i + '.png'
        var imgName = checkFile(y)

        if (imgName) {
            img = document.createElement('img')
            img.setAttribute('src', y)
            carousel.appendChild(img)
        }

    }
    createI()
}
function createI() {
    for (i = 0; i < carousel.children.length; i++) {
        icon = document.createElement('i');
        icon.setAttribute('class', 'fa-solid fa-circle off')
        icon.setAttribute('number', i)
        pointer.appendChild(icon)
    }
    pointer.children[0].classList.remove('off')
    pointer.children[0].classList.add('on')
}
function checkFile(x) {
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', x, false);
    xhr.send();
    if (xhr.status == "404") {
        return false;
    } else {
        return true;
    }

}
function carouselWidth() {
    var h = document.getElementById('jobDetailPicture').offsetWidth / 2 + 15


    document.getElementById('jobDetailPicture').style.height = `${h}px`
}
function gamePlay() {

    frame.classList.remove('hide')
    var h = frame.offsetWidth * 9 / 16
    setTimeout(function () {
        frame.style.opacity = '1'
        frame.style.height = h + 'px'
    }, 100)
}



skillsDetails.children.forEach(child => {
    console.log(child.children)
    child.children.forEach(c =>{
        var percent = c.children[1].innerText;
        c.children[2].children[0].style.width = percent
    })
})

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
    if(xhr.status === 200 && xhr.readyState === 4){
        console.log(xhr.responseText)
    }
}
xhr.open('GET','aboutMe.txt',true)
xhr.send()

var json = new XMLHttpRequest();

json.onreadystatechange = function(){
    console.log(json.status)
    console.log(json.readyState)

    if (json.status === 200 && json.readyState === 4) {
        console.log(xhr.responseText)
    }
}
json.open('GET','Eng.json',true)
json.send()