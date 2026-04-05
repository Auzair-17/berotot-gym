// ========================== Navbar ==========================

const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

const navLinks = document.querySelectorAll(".nav__link");

// ======== Show Navbar ========
if (navToggle) {
  navToggle.addEventListener("click", function () {
    navMenu.classList.add("display-menu");
  });
}

// ======== Hide Navbar ========
if (navClose) {
  navClose.addEventListener("click", function () {
    navMenu.classList.remove("display-menu");
  });
}

// Hide Navbar After Clicking a Navigation Link
navLinks.forEach((navLink) =>
  navLink.addEventListener("click", () => {
    navMenu.classList.remove("display-menu");
  })
);

// On scroll change navbar background
const navBackground = function () {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("scroll-nav")
    : header.classList.remove("scroll-nav");
};
window.addEventListener("scroll", navBackground);

// ========================== Calculate BMI ==========================
const bmiForm = document.getElementById("calculate-form"),
  heightInput = document.getElementById("calculate-cm"),
  weightInput = document.getElementById("calculate-kg"),
  bmiMessage = document.getElementById("calculate-message");

const calculateBmi = function (e) {
  e.preventDefault();
  if (heightInput.value === "" && weightInput.value === "") {
    bmiMessage.classList.remove("color-green");
    bmiMessage.classList.add("color-red");
    bmiMessage.textContent = "Fill in the height and weight 📝";

    setTimeout(function () {
      bmiMessage.textContent = "";
    }, 3000);
  } else {
    const height = heightInput.value / 100,
      weight = weightInput.value,
      bmi = Math.round(weight / height ** 2);

    if (bmi < 18.5) {
      bmiMessage.classList.add("color-green");
      bmiMessage.textContent = `Your BMI is ${bmi} and you are skinny 😞`;
    } else if (bmi > 25) {
      bmiMessage.classList.add("color-green");
      bmiMessage.textContent = `Your BMI is ${bmi} and you are fat 😞`;
    } else {
      bmiMessage.classList.add("color-green");
      bmiMessage.textContent = `Your BMI is ${bmi} and you are healty 🥳`;
    }
  }

  heightInput.value = "";
  weightInput.value = "";

  setTimeout(function () {
    bmiMessage.textContent = "";
  }, 4000);
};
bmiForm.addEventListener("submit", calculateBmi);

// ========================== Calculate BMI ==========================
const emailForm = document.getElementById("contact-form"),
  emailInput = document.getElementById("contact-user"),
  formMessage = document.getElementById("contact-message");

const sendEmail = function (e) {
  e.preventDefault();

  if (emailInput.value === "") {
    formMessage.classList.remove("color-green");
    formMessage.classList.add("color-red");

    formMessage.textContent = "You must enter your email ☝️";

    setTimeout(function () {
      formMessage.textContent = "";
    }, 3000);
  } else {
    formMessage.classList.remove("color-red");
    formMessage.classList.add("color-green");

    formMessage.textContent = "You registered successfully 💪";

    setTimeout(function () {
      formMessage.textContent = "";
    }, 5000);

    emailInput.value = "";
  }
};
emailForm.addEventListener("submit", sendEmail);

// ========================== Scroll Sections Active Link ========================
const sections = document.querySelectorAll("section[id]");

const scrollActive = function () {
  const scrollY = window.pageYOffset;

  sections.forEach(function (curSection, i) {
    const curSectionHeight = curSection.offsetHeight,
      sectionTop = curSection.offsetTop - 58,
      sectionId = curSection.getAttribute("id"),
      sectionClass = document.querySelector(
        `.nav__menu a[href*= ${sectionId}]`
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + curSectionHeight) {
      sectionClass.classList.add("active-link");
      console.log(i);
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

// ========================== Show Scroll Up ========================
const showScrollUp = function () {
  const scrollUp = document.getElementById("scroll-up");

  this.scrollY > 350
    ? scrollUp.classList.add("show-scrollup")
    : scrollUp.classList.remove("show-scrollup");
};
window.addEventListener("scroll", showScrollUp);

// ========================== Show Scroll Up ========================
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});
sr.reveal(`.home__data, .footer__container, .footer__group`);
sr.reveal(`.home__img`, { delay: 700, origin: "bottom" });
sr.reveal(`.logo__img, .program__card, .pricing__card`, { interval: 100 });
sr.reveal(`.choose__img, .calculate__content`, { origin: "left" });
sr.reveal(`.choose__content, .calculate__img`, { origin: "right" });
