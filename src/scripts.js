// Navbar scroll
const header = document.querySelector("header");
let prevScrollPos = window.scrollY;
let isHeaderAtTop = true;
const originalPaddingTop = "3rem";

function handleNavbarScroll() {
  const currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos) {
    // Scrolling up
    header.classList.remove("header-hidden");
    if (!isHeaderAtTop) {
      header.style.paddingTop = "1.5rem";
    }
  } else {
    // Scrolling down
    header.classList.add("header-hidden");
  }

  // Check if the current scroll position is at or below the original padding-top value
  if (currentScrollPos <= parseFloat(originalPaddingTop)) {
    isHeaderAtTop = true;
    header.style.paddingTop = originalPaddingTop; // Restore the original padding-top value
  } else {
    isHeaderAtTop = false;
  }

  prevScrollPos = currentScrollPos;
}

window.addEventListener("scroll", handleNavbarScroll);

// Section scroll
let hasFadeIn = false;

// Check if the element is visible in the viewport
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

// Handle the scroll event
function handleSectionScroll() {
  const featuredProjectsSection = document.getElementById("featured-projects");
  const featuredProjectsTitle = document.querySelector("#featured-projects h1");

  // Check if the H1 is in the viewport and the transition has not been applied yet
  if (!hasFadeIn && isElementInViewport(featuredProjectsTitle)) {
    // Apply the "fade-in-up" class to the entire section
    featuredProjectsSection.classList.add("fade-in-up");
    // Update the flag to avoid repetitions
    hasFadeIn = true;
  }
}

// Add the DOMContentLoaded event to ensure the document is fully loaded
window.addEventListener("DOMContentLoaded", function () {
  // Add the scroll event once the DOM is fully loaded
  window.addEventListener("scroll", handleSectionScroll);
});
