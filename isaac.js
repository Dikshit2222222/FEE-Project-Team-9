document.addEventListener("DOMContentLoaded", function() {
    // Get the timeline header and all the container elements
    const timelineHeader = document.getElementById("timeline-header");
    const containers = document.querySelectorAll(".container");
  
    // Hide all the container elements 
    for (let i = 0; i < containers.length; i++) {
      containers[i].style.display = "none";
    }
  
    // Add a click event listener to the timeline header
    timelineHeader.addEventListener("click", function() {
      // Reveal the containers one by one with a delay of 1 second
      for (let i = 1; i < containers.length; i++) {
        (function(index) {
          setTimeout(function() {
            containers[index].style.display = "block";
          }, (index - 1) * 1000); // Delay of 1 second for each container after the first one
        })(i);
      }
    });
  });

// Get all the container elements
var containers = document.getElementsByClassName('container');

// Add event listener to each container
for (var i = 0; i < containers.length; i++) {
  containers[i].addEventListener('click', toggleContent);
}

function toggleContent() {
  // Toggle the visibility of event content
  var content = this.getElementsByClassName('event-content')[0];
  content.classList.toggle('show');

  // Increase container size and text size on click
  this.classList.toggle('active');
}
// const titles = [
//   "Scientist",
//   "Mathematician",
//   "Physicist",
//   "Astronomer",
//   "Alchemist",
//   "Theologian",
//   "Author"
// ];

// let currentTitleIndex = 0;
// const titleElement = document.getElementById("title");

// function animateTitle() {
//   const currentTitle = titles[currentTitleIndex];
//   const words = currentTitle.split(" ");
//   currentTitleIndex = (currentTitleIndex + 1) % titles.length;
// }

// Call the animateTitle function initially
// animateTitle();

// // Call the animateTitle function every 3 seconds
// setInterval(animateTitle, 3000);
// JavaScript
// JavaScript
