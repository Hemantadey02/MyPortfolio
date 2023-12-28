// -------- Text changer starts --------

let words = document.querySelectorAll(".word");
words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = (currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1]);

    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in";
        }, 200 + i * 80);
    });
    currentWordIndex = (currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1);

};
changeText();
setInterval(changeText, 2000);

// -------- Text changer ends --------

// --------Circle skill starts --------

const circles = document.querySelectorAll('.circle-bar');
circles.forEach(elem => {
    let dots = elem.getAttribute("data-dots");
    let marked = elem.getAttribute("data-percent");
    let percent = Math.floor(dots * marked / 100);
    let points = "";
    let rotate = 360 / dots;
    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked');
    }
})

// -------- Circle skill ends --------

// -------- Header toggler starts --------

let menuBtn = document.getElementById('menuBtn');
menuBtn.addEventListener('click', () => {
    document.querySelector('body').classList.add('mobile-nav-active');
})
let exitBtn = document.getElementById('exitBtn');
exitBtn.addEventListener('click', () => {
    document.querySelector('body').classList.remove('mobile-nav-active');
})

// -------- header toggler scroll behavior --------

window.addEventListener('scroll', () => {
    if (document.querySelector('body').classList.contains('mobile-nav-active')) {
        document.querySelector('body').classList.remove('mobile-nav-active');
    }
})
// -------- Header toggler ends --------

// -------- JavaScript for google sheet --------
const scriptURL = 'https://script.google.com/macros/s/AKfycbzZdUD600WeiY3S5tgL5SYosz3j7oBNjen8QxQlwjQafBKtds2Vx7BEaMVG766h4LT3NQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(() => {
                msg.innerHTML = "";
            }, 4000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})

// -------- toggle style switcher starts --------

const styleSwitcherToggler = document.querySelector('.style-switcher-toggler');
styleSwitcherToggler.addEventListener('click', () => {
    document.querySelector('.style-switcher').classList.toggle('open');
})

// -------- scroll behaviour --------

window.addEventListener('scroll', () => {
    if (document.querySelector('.style-switcher').classList.contains('open')) {
        document.querySelector('.style-switcher').classList.remove('open');
    }
})

// -------- toggler style switcher ends --------

// -------- theme colors changer --------

const alternateStyles = document.querySelectorAll('.alternate-style');
function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute('title')) {
            style.removeAttribute('disabled');
        }
        else {
            style.setAttribute('disabled', 'true');
        }
    })
}

// -------- theme light and dark mode changer --------

const dayNight = document.querySelector('.day-night');
dayNight.addEventListener('click', () => {
    dayNight.querySelector('i').classList.toggle('fa-sun');
    dayNight.querySelector('i').classList.toggle('fa-moon');
    document.body.classList.toggle('dark');
})

window.addEventListener('load', () => {
    if (document.body.classList.contains('dark')) {
        dayNight.querySelector('i').classList.add('fa-sun');
    }
    else {
        dayNight.querySelector('i').classList.add('fa-moon');
    }
})

// -------- active menu -------- 

let menuList = document.querySelectorAll('.header nav ul li');
menuList.forEach((elem) => {
    elem.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active');
        document.querySelectorAll('.header nav ul li').forEach((lis) => {
            lis.classList.add('links');
        })
        elem.classList.add('active');
        elem.classList.remove('links');
    })
})

// -------- active sidebar menu --------

let mbmenuList = document.querySelectorAll('.sidebar .navbar ul li');
mbmenuList.forEach((elem) => {
    elem.addEventListener('click', () => {
        document.querySelector('.sidebar .active')?.classList.remove('active');
        document.querySelectorAll('.sidebar .navbar ul li').forEach((lis) => {
            lis.classList.add('mb-links');
        })
        elem.classList.remove('mb-links');
        elem.classList.add('active');
    })
})

// // -------- active scroll menu --------

// let navlinks = document.querySelectorAll('.header nav ul li');
// let sections = document.querySelectorAll('section');
// function activeMenu(){
//     let len=sections.length;
//     while(--len && window.scrollY+97 < sections[len].offsetTop){
//         navlinks.forEach((lnk)=>lnk.classList.remove('active'));
//     }
//     navlinks[len].classList.add('active');
// }
// activeMenu();
// window.addEventListener('scroll',activeMenu);
