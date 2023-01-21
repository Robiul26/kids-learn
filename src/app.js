let coverSection = document.querySelector('#cover-section');
let learningSection = document.querySelector('#learning-section');
let homeBtn = document.querySelector('#homeBtn');
let letterName = document.querySelector('.right-sidebar #letterBtn');
let letterExample = document.querySelector('.right-sidebar p');
let letterImage = document.querySelector('.english-alphabet-learn-banner img');

let enBtn = document.querySelector('#enBtn');

bookOpen = () => {
    learningSection.style.display = "block";
    coverSection.style.display = "none";


    const letter_list = document.querySelector('.footer-container');
    const letter = letter_list.querySelectorAll('.footer-item button');

    for (var i = 0; i < letter.length; i++) {
        letter[i].setAttribute("onclick", "optionSelected(this)");
    }

    optionSelected = (btnValue) => {
        let userTookLetter = btnValue.textContent;
        let latterDesc = btnValue.getAttribute('data');
        let latterImg = btnValue.getAttribute('img-data');

        letterName.innerHTML = userTookLetter;
        letterExample.innerHTML = latterDesc;
        letterImage.setAttribute('src', latterImg);

        switch (userTookLetter) {
            case "A":
                var audio = new Audio("./sounds/en/a.m4a");
                audio.play();
                break;
            case "B":
                var audio = new Audio("./sounds/en/b.m4a");
                audio.play();
                break;
            case "C":
                var audio = new Audio("./sounds/en/c.m4a");
                audio.play();
                break;
            case "D":
                var audio = new Audio("./sounds/en/d.m4a");
                audio.play();
                break;
            case "E":
                var audio = new Audio("./sounds/en/e.m4a");
                audio.play();
                break;
            case "F":
                var audio = new Audio("./sounds/en/f.m4a");
                audio.play();
                break;
            case "G":
                var audio = new Audio("./sounds/en/g.m4a");
                audio.play();
                break;
            case "H":
                var audio = new Audio("./sounds/en/h.m4a");
                audio.play();
                break;
            case "I":
                var audio = new Audio("./sounds/en/i.m4a");
                audio.play();
                break;
            case "J":
                var audio = new Audio("./sounds/en/j.m4a");
                audio.play();
                break;
            case "K":
                var audio = new Audio("./sounds/en/k.m4a");
                audio.play();
                break;
            case "L":
                var audio = new Audio("./sounds/en/l.m4a");
                audio.play();
                break;
            case "M":
                var audio = new Audio("./sounds/en/m.m4a");
                audio.play();
                break;
            case "N":
                var audio = new Audio("./sounds/en/n.m4a");
                audio.play();
                break;
            case "O":
                var audio = new Audio("./sounds/en/o.m4a");
                audio.play();
                break;
            case "P":
                var audio = new Audio("./sounds/en/p.m4a");
                audio.play();
                break;
            case "Q":
                var audio = new Audio("./sounds/en/q.m4a");
                audio.play();
                break;
            case "R":
                var audio = new Audio("./sounds/en/r.m4a");
                audio.play();
                break;
            case "S":
                var audio = new Audio("./sounds/en/s.m4a");
                audio.play();
                break;
            case "T":
                var audio = new Audio("./sounds/en/t.m4a");
                audio.play();
                break;
            case "U":
                var audio = new Audio("./sounds/en/u.m4a");
                audio.play();
                break;
            case "V":
                var audio = new Audio("./sounds/en/v.m4a");
                audio.play();
                break;
            case "W":
                var audio = new Audio("./sounds/en/w.m4a");
                audio.play();
                break;
            case "X":
                var audio = new Audio("./sounds/en/x.m4a");
                audio.play();
                break;
            case "Y":
                var audio = new Audio("./sounds/en/y.m4a");
                audio.play();
                break;
            case "Z":
                var audio = new Audio("./sounds/en/z.m4a");
                audio.play();
                break;
        }
    }



};



bookClose = () => {
    learningSection.style.display = "none";
    coverSection.style.display = "block";
};


// for owl carousel
var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 6,
    loop: true,
    margin: 10,
    // autoplay: true,
    // autoplayTimeout: 3000,
    autoplayHoverPause: true,
    linear: true,
    step: 1,
    delay: 1000,
    speed: 100
});