const progressContainer = document.querySelector(".progress-container");
const progressBar = document.querySelector("#progress");
const circles = document.querySelectorAll(".circle");
const buttons = document.getElementsByTagName('button');
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentActive = 1

nextButton.addEventListener('click', () => {
    currentActive++

    if (currentActive > circles.length) {
        currentActive = circles.length
    }


    update()

    console.log(currentActive)
})


prevButton.addEventListener('click', () => {
    currentActive--

    if (currentActive < 1) {
        currentActive = 1
    }

    update()
    console.log(currentActive)
})

function update() {
    circles.forEach((circle, i) => {
        if (i < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progressBar.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if (currentActive === 1) {
        prevButton.disabled = true;

    } else if (currentActive === circles.length) {
        nextButton.disabled = true
    } else {
        prevButton.disabled = false
        nextButton.disabled = false
    }

}




// const circle1 = circles[0]
// const circle2 = circles[1]
// const circle3 = circles[2]
// const circle4 = circles[3]

// nextButton.addEventListener('click', e => {
//     if (circle1.classList == 'circle active') {
//         circle1.classList.remove('active')
//         circle2.classList.add('active')
//         prevButton.disabled = false
//     } else if (circle2.classList == 'circle active') {
//         circle2.classList.remove('active')
//         circle3.classList.add('active')
//     } else if (circle3.classList == 'circle active') {
//         circle3.classList.remove('active')
//         circle4.classList.add('active')
//         nextButton.disabled = true
//     }
// })

// prevButton.addEventListener('click', e => {
//     if (circle4.classList == 'circle active') {
//         circle4.classList.remove('active')
//         circle3.classList.add('active')
//         prevButton.disabled = false
//         nextButton.disabled = false
//     } else if (circle3.classList == 'circle active') {
//         circle3.classList.remove('active')
//         circle2.classList.add('active')

//     } else if (circle2.classList == 'circle active') {
//         circle2.classList.remove('active')
//         circle1.classList.add('active')
//         prevButton.disabled = true
//         nextButton.disabled = false
//     }
// })