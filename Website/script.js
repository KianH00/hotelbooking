const wrapper = document.querySelector('#wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

if (registerLink && wrapper) {
  registerLink.addEventListener('click', (e) => {
    e.preventDefault();
    wrapper.classList.add('active');
  });
}

if (loginLink && wrapper) {
  loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    wrapper.classList.remove('active');
  });
}

// Date logic
const checkinElem = document.querySelector("#checkin-date");
const checkoutElem = document.querySelector("#checkout-date");

if (checkinElem && checkoutElem) {
  const currentDateTime = new Date();
  currentDateTime.setDate(currentDateTime.getDate() + 1);

  const year = currentDateTime.getFullYear();
  let month = currentDateTime.getMonth() + 1;
  let date = currentDateTime.getDate();

  if (month < 10) month = '0' + month;
  if (date < 10) date = '0' + date;

  const dateTomorrow = `${year}-${month}-${date}`;

  checkinElem.setAttribute("min", dateTomorrow);

  checkinElem.addEventListener("change", function () {
    checkoutElem.setAttribute("min", this.value);
  });
}

// Login
function login() {
  const email = document.querySelector("#email")?.value;
  const password = document.querySelector("#password")?.value;

  const demoEmail = "demo@hotel.com";
  const demoPassword = "demo123";

  if (email === demoEmail && password === demoPassword) {
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "home.html";
  } else {
    alert("Invalid credentials");
  }
}