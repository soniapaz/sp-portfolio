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
let hasFeaturedProjectsFadeIn = false;
let hasAboutMeFadeIn = false;

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
  const aboutMeSection = document.getElementById("about-me");
  const aboutMeTitle = document.querySelector("#about-me h1");

  // Check if the H1s are in the viewport and the transitions have not been applied yet
  if (
    !hasFeaturedProjectsFadeIn &&
    isElementInViewport(featuredProjectsTitle)
  ) {
    // Apply the "fade-in-up" class to the entire featured-projects section
    featuredProjectsSection.classList.add("fade-in-up");
    // Update the flag to avoid repetitions
    hasFeaturedProjectsFadeIn = true;
  }

  if (!hasAboutMeFadeIn && isElementInViewport(aboutMeTitle)) {
    // Apply the "fade-in-up" class to the entire about-me section
    aboutMeSection.classList.add("fade-in-up");
    // Update the flag to avoid repetitions
    hasAboutMeFadeIn = true;
  }
}

// Add the DOMContentLoaded event to ensure the document is fully loaded
window.addEventListener("DOMContentLoaded", function () {
  // Add the scroll event once the DOM is fully loaded
  window.addEventListener("scroll", handleSectionScroll);
});
