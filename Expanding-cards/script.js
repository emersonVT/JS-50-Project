// Selecting the main class
const panels = document.querySelectorAll('.panel');

// Creating a loop to target each element from the nodelist
panels.forEach(function (element) {
    // When a element is clicked two things happens
    element.addEventListener('click', function () {
        // 1. All 'active' class is removed in all elements (function call)
        remove_active_class();
        // 2. The active class is added to the last clicked element
        element.classList.add('active');
    })
})

// A function that remove 'active' class for each element
function remove_active_class() {
    panels.forEach(function (element) {
        element.classList.remove('active');
    })
}