const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1

// Targeting the next buttom
next.addEventListener('click', () => {
    // Increse the value of the currentActive in every click
    currentActive++;
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    // Calling the update function
    update();
})

prev.addEventListener('click', () => {
    // Decreasing the value of the currentActive in every click
    currentActive--
    if (currentActive < 1) {
        currentActive = 1
    }
    // Calling the update function
    update();
})

function update() {
    // Here we compare the value of the index with currentActive 
    circles.forEach((circle, idx) => {
        // Only add the class 'active' when index is less than currentActive
        if (idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active');
    // The progress line
    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + "%"

    // Here we are changing the state of the buttons 
    if (currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}