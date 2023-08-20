let container = document.querySelector('.container1');

// Hide the element initially
container.style.display = 'none';

// Set a timeout to show the element after 5 seconds
setTimeout(function() {
  container.style.display = 'block';
}, 5000); // 5000 milliseconds = 5 seconds

container.addEventListener('mouseover', function() {
  this.style.transform = 'rotate(1440deg)';
});
container.addEventListener('mouseout', function() {
  this.style.transform = 'rotate(0deg)';
});
