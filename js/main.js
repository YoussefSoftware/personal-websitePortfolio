let burgerMenu = document.getElementById("burgerMenu");
let aside = document.getElementById("aside");
let container = document.getElementById("container");

burgerMenu.addEventListener("click", dropDownMenu);

let clicked = false;

function dropDownMenu() {
  if (clicked === false) {
    aside.classList.remove("aside01");
    aside.classList.add("aside02");
    clicked = true;
    burgerMenu.classList.remove("burgerMenu");
    burgerMenu.classList.add("burgerMenu-opened");
  } else {
    aside.classList.remove("aside02");
    aside.classList.add("aside01");
    burgerMenu.classList.remove("burgerMenu-opened");
    burgerMenu.classList.add("burgerMenu");
    clicked = false;
  }
}

function closeDropDownMenu() {
  aside.classList.remove("aside02");
  aside.classList.add("aside01");
  burgerMenu.classList.remove("burgerMenu-opened");
  burgerMenu.classList.add("burgerMenu");
  clicked = false;
}

// portfolioBtn

let seePoBtn = document.getElementById("seePortfolio");
seePoBtn.addEventListener("click", scrollToMyWork);

function scrollToMyWork() {
  window.location.href = "#portfolio";
}

function home() {
  window.location.href = "index.html";
}

// start chat box

let contactBtn = document.getElementById("contactBtn");
let chat = document.getElementById("chat");
let chatClose = document.getElementById("chatClose");
let firstMsg = document.querySelector(".firstMsg");
let firstMsg2 = document.querySelector(".firstMsg2");

contactBtn.addEventListener("click", popUpChat);
chatClose.addEventListener("click", closeChat);

function popUpChat() {
  chat.style.visibility = "visible";
  chat.style.opacity = "1";
  container.style.opacity = ".2";
  setTimeout(function () {
    firstMsg.style.opacity = 1;
  }, 1000);
  setTimeout(function () {
    firstMsg2.style.opacity = 1;
  }, 2000);

  setTimeout(function () {
    for (let x in options) {
      options[x].style.visibility = "visible";
    }
  }, 4000);

  if (window.matchMedia("(max-width: 600px)").matches) {
    container.style.display = "none";
  }
}
function closeChat() {
  chat.style.visibility = "hidden";
  chat.style.opacity = "0";
  container.style.opacity = "1";
  if (window.matchMedia("(max-width: 600px)").matches) {
    container.style.display = "block";
  }
}

// start bot

let me = document.getElementById("me");

let options = {
  op1: document.getElementById("op1"),
  op2: document.getElementById("op2"),
  op3: document.getElementById("op3"),
};

options.op1.addEventListener("click", answer1);
options.op2.addEventListener("click", answer2);
options.op3.addEventListener("click", answer3);

clickNum = 1;

function answer1() {
  for (let x in options) {
    options[x].style.visibility = "hidden";
  }
  if (clickNum == 1) {
    let answer = document.createElement("span");
    let offer = document.createElement("p");
    answer.textContent = options.op1.innerText;
    offer.textContent = "OK great!";
    me.appendChild(answer);
    options.op1.textContent = "Send Msg";
    options.op2.textContent = "Other Options?";
    options.op3.style.display = "none";
    setTimeout(function () {
      me.appendChild(offer);
    }, 2000);
    options.op2.style.display = "block";
    clickNum = 2;
    setTimeout(function () {
      for (let x in options) {
        options[x].style.visibility = "visible";
      }
    }, 4000);
  } else if (clickNum == 2) {
    window.location.href = "mailto:youssefsoftware21@gmail.com";
  } else if (clickNum == 3) {
    setTimeout(function () {
      let offer = document.createElement("p");
      offer.textContent =
        "You can find theme Top of the page, I'll send you there 😊";
      me.appendChild(offer);
    }, 1000);
    setTimeout(function () {
      closeChat();
      window.location.href = "#container";
      setTimeout(function () {
        dropDownMenu();
      }, 1000);
    }, 5000);
    setTimeout(function () {
      for (let x in options) {
        options[x].style.visibility = "visible";
      }
    }, 6000);
  }
}
function answer2() {
  for (let x in options) {
    options[x].style.visibility = "hidden";
  }
  if (clickNum == 1) {
    let answer = document.createElement("span");
    answer.textContent = options.op2.innerText;
    me.appendChild(answer);
    setTimeout(function () {
      let offer = document.createElement("p");
      offer.textContent = "Well hello there!";
      me.appendChild(offer);
    }, 1000);
    setTimeout(function () {
      let offer = document.createElement("p");
      offer.textContent = "I hope you've enjoyed browsing my work";
      me.appendChild(offer);
    }, 2000);
    setTimeout(function () {
      let offer = document.createElement("p");
      offer.textContent = "Can I help you with anything else?";
      me.appendChild(offer);
    }, 4000);
    options.op2.style.display = "none";
    setTimeout(function () {
      for (let x in options) {
        options[x].style.visibility = "visible";
      }
    }, 5500);
  } else if (clickNum == 2) {
    let answer = document.createElement("span");
    answer.textContent = options.op2.innerText;
    me.appendChild(answer);
    let offer = document.createElement("p");
    offer.textContent = "Well, You can contact me on my social media accounts!";
    options.op1.textContent = "My social media accounts";
    options.op2.style.display = "block";
    options.op3.style.display = "block";
    options.op2.textContent = "I just want to say hello";
    options.op3.textContent = "Interested in mentorship";

    setTimeout(function () {
      me.appendChild(offer);
    }, 2000);
    clickNum = 3;
    setTimeout(function () {
      for (let x in options) {
        options[x].style.visibility = "visible";
      }
    }, 4000);
  } else if (clickNum == 3) {
    let answer = document.createElement("span");
    answer.textContent = options.op2.innerText;
    me.appendChild(answer);
    setTimeout(function () {
      let offer = document.createElement("p");
      offer.textContent = "Well hello there!";
      me.appendChild(offer);
    }, 1000);
    setTimeout(function () {
      let offer = document.createElement("p");
      offer.textContent = "I hope you've enjoyed browsing my work";
      me.appendChild(offer);
    }, 2000);
    setTimeout(function () {
      let offer = document.createElement("p");
      offer.textContent = "Can I help you with anything else?";
      me.appendChild(offer);
    }, 4000);
    options.op2.style.display = "none";
    setTimeout(function () {
      for (let x in options) {
        options[x].style.visibility = "visible";
      }
    }, 5500);
  }
}
function answer3() {
  for (let x in options) {
    options[x].style.visibility = "hidden";
  }
  if (clickNum == 1) {
    let answer = document.createElement("span");
    answer.textContent = options.op3.innerText;
    me.appendChild(answer);
    setTimeout(function () {
      let offer = document.createElement("p");
      offer.textContent = "Hi! Well, I am happy for your trust in me.";
      me.appendChild(offer);
    }, 1200);
    setTimeout(function () {
      let offer = document.createElement("p");
      offer.textContent =
        "But unfortunately, I don't currently have any capacity to take on the role of mentor for any new students this period, I will be available in the summer.";
      me.appendChild(offer);
    }, 3000);
    setTimeout(function () {
      let offer = document.createElement("p");
      offer.textContent = "Thanks😄";
      me.appendChild(offer);
      options.op2.style.display = "none";
      options.op3.style.display = "none";
    }, 5000);
    setTimeout(function () {
      for (let x in options) {
        options[x].style.visibility = "visible";
      }
    }, 6000);
  } else if (clickNum == 2) {
    let answer = document.createElement("span");
    answer.textContent = options.op3.innerText;
    me.appendChild(answer);
    setTimeout(function () {
      let offer = document.createElement("p");
      offer.textContent =
        "You can find theme Top of the page, I'll send you there 😊";
      me.appendChild(offer);
    }, 1000);
    setTimeout(function () {
      for (let x in options) {
        options[x].style.visibility = "visible";
      }
    }, 2000);
  } else if (clickNum == 3) {
    let answer = document.createElement("span");
    answer.textContent = options.op3.innerText;
    me.appendChild(answer);
    setTimeout(function () {
      let offer = document.createElement("p");
      offer.textContent = "Hi! Well, I am happy for your trust in me.";
      me.appendChild(offer);
    }, 1200);
    setTimeout(function () {
      let offer = document.createElement("p");
      offer.textContent =
        "But unfortunately, I don't currently have any capacity to take on the role of mentor for any new students this period, I will be available in the summer.";
      me.appendChild(offer);
    }, 3000);
    setTimeout(function () {
      let offer = document.createElement("p");
      offer.textContent = "Thanks😄";
      me.appendChild(offer);
    }, 5000);
    setTimeout(function () {
      for (let x in options) {
        options[x].style.visibility = "visible";
      }
    }, 6000);
  }
}
