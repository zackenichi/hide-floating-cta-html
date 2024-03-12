// Get the CTA container and the section
var floatingContainer = document.querySelector('.floating');
var ctaTrigger = document.querySelector('.trigger');

// Initially hide the CTA container
floatingContainer.style.display = 'none';

// Get the position of the section
var triggerPos = ctaTrigger.offsetTop;

// Add scroll event listener
window.addEventListener('scroll', function () {
  // Get current scroll position
  var scrollPos = window.pageYOffset;

  // If current scroll position is greater than or equal to section position, show the CTA container
  if (scrollPos >= triggerPos) {
    floatingContainer.style.display = 'block';
  } else {
    floatingContainer.style.display = 'none';
  }
});
