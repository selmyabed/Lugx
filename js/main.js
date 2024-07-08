

// Shop category active class
let shopList = document.querySelectorAll('.trending .filter li');
let gameCards = document.querySelectorAll('.trending .container  .row > div');

shopList.forEach((li) => {
    li.addEventListener('click', (e) => {
        handleActive(e);

        //  Filter Games
        gameCards.forEach((card) => {
            // card.style.display = 'none';
            card.classList.add('shrink');
        });
        document.querySelectorAll(e.currentTarget.dataset.game).forEach(currentGames => {
            // currentGames.style.display = 'block';
            currentGames.classList.remove('shrink');
            
            // Make Games in center while they'r less than 4 Games
            if(document.querySelectorAll(e.currentTarget.dataset.game).length < 4) {
                currentGames.parentElement.classList.add('justify-content-center');
            } else {
                currentGames.parentElement.classList.remove('justify-content-center');
            }
        })
    });
});

// Product Page =>> Get image src from shop   [STILL WORKING ON IT]

    // let gameCardsAnchor = document.querySelectorAll('.trending .container  .row .image > a');
    // let productImage = document.getElementById('product-image');
    // console.log(productImage)
    // gameCardsAnchor.forEach((a) => {
    //     a.addEventListener('click' , (e) => {
    //         // e.preventDefault();
    //         let theAnchor = e.currentTarget.children[0].getAttribute('src')
    //         console.log(theAnchor)
    //         // [The Problem is the next nile doesn't work because the load when you click on the image]
    //         // if(theAnchor != null) {
    //             // productImage.setAttribute('src', 'images/trending-02.jpg');
    //         // }
    //     })
    // })


// let playedSection = document.querySelectorAll('.played .box img');
// console.log(playedSection);

// Navbar
let navbarLinks = document.querySelectorAll('.navbar .navbar-nav li')
window.onload = () => {
    navbarLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            console.log(e.currentTarget);
            handleActive(e);
        });
    });
};


///////////////////////////////////////////////////////////////////////////////////////////

let navigation = document.querySelector(".navbar")
let subSection = document.querySelector('.subs')
// let subSectionImage = window.getComputedStyle(subSection, "::after");
// console.log(subSectionImage)

window.onscroll = function() {

    let windowScrollTop = this.scrollY;
    if(windowScrollTop > navigation.clientHeight - 25) {
        navigation.classList.add('on-scroll')
    } else {
        navigation.classList.remove('on-scroll')

    }

    // Skills Offset Top (All Elements Above Section)
    let subOffsetTop = subSection.offsetTop;
    console.log(subOffsetTop)
    // Skills outer Height (Section Height including Padding..etc)
    let subOuterHeight = subSection.offsetHeight;
    
    if(windowScrollTop > (subOffsetTop + subOuterHeight - this.innerHeight) - 180) {

        let Divs = document.querySelectorAll('.subs .row > div');
        Divs.forEach((div) => {
            div.style = 'transform: translateX(0); opacity: 1';
        })

        // subSectionImage.classList.add('arrive')
        // subSectionImage.style = 'transform: translate(-50% ,-50%); opacity: 1;'
    }

}



/*      Component       */
// Handle Active Class 
function handleActive(ev) {
    ev.target.parentElement.querySelectorAll('.active').forEach((ele) =>{ 
        ele.classList.remove("active") 
    });
    ev.target.classList.add("active");
}
