/*  =================================== typing animation ============================= */

var typed = new Typed(".typing", {
  strings: ["Web Developer", "Frontend Developer", "Web Designer"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

/*  =================================== Aside  ============================= */

const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");

  a.addEventListener("click", function () {
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
        //allSection[j].classList.add("back-section");
      }
      navList[j].querySelector("a").classList.remove("active");
    }

    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionToggleBtn();
    }
  });
}

window.addEventListener("scroll", function () {
  // Find the section currently in the viewport
  for (let i = 0; i < totalSection; i++) {
    const section = allSection[i];
    const rect = section.getBoundingClientRect();

    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      removeBackSection();
      allSection[i].classList.add("active");

      // Update the navigation based on the active section
      updateNav(navList[i].querySelector("a"));
    }
  }
});

const mainContent = document.querySelector(".main-content");

function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}

function addBackSection(num) {
  allSection[num].classList.add("back-section");
}

function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }

  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}

document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});

const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionToggleBtn();
});

function asideSectionToggleBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}

const openResume = () => {
  document
    .getElementById("resume-button-1")
    .addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default behavior of the anchor tag

      var resumeLink = document
        .getElementById("resume-link-1")
        .getAttribute("href");
      window.open(resumeLink, "_blank"); // Open the link in a new tab

      // Trigger a download by creating an invisible anchor element
      var downloadAnchor = document.createElement("a");
      downloadAnchor.style.display = "none";
      downloadAnchor.href = resumeLink;
      downloadAnchor.download = "Pranavi-Kayapati-resume.pdf"; // You can specify the desired filename here
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      document.body.removeChild(downloadAnchor);
    });
};
