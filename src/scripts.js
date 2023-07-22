const header = document.querySelector("header");
let prevScrollPos = window.scrollY;
let isHeaderAtTop = true;
const originalPaddingTop = "3rem";

function handleScroll() {
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

window.addEventListener("scroll", handleScroll);
