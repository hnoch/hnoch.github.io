// // 2-10
// const player = {
//     name: "nico",
//     age: 98,
// };

// player.name = "aaaa";
// console.log("p : ", player.name);
// console.log("p : ", player);

// const calculaotr = {
//     add: function (a, b) {
//         console.log(">> : ", a + b);
//     },
//     minus: function (a, b) {
//         console.log(">> : ", a - b);
//     },
//     divide: function (a, b) {
//         console.log(">> : ", a / b);
//     },
//     multi: function (a, b) {
//         console.log(">> : ", a * b);
//     },
//     power: function (a, b) {
//         console.log(">> : ", a ** b);
//     },
// };

// calculaotr.add(2, 3);
// calculaotr.minus(2, 3);
// calculaotr.divide(2, 3);
// calculaotr.multi(2, 3);
// calculaotr.power(2, 3);

// ==================================================================

// // 2- 13

// const age = prompt("how old are you?");

// console.log("age : ", age, typeof age, parseInt(age));

// ==================================================================

// //  2- 14

// const age = parseInt(prompt("how old are you?"));

// // isNaN > is not a number = 숫자가 아니면(문자라면) true 반환
// console.log("age : ", isNaN(age));

// ==================================================================

// console.log("");
// document.title = "Hello, FROM JS";

// const h1 = document.getElementById("h1");

// // element 자세히
// console.dir(h1);

// // h1.autofocus = true;
// // h1.className = "hello";

// const hellos = document.getElementsByClassName("hello");

// console.log("hellos : ", hellos);

// const h1_2 = document.querySelector("div.hello:first-child h1");

// console.log("h1_2 : ", h1_2.innerText);

// function handleClick() {
//     // console.log("click!!");
//     h1_2.style.color = "green";
// }

// // h1_2.addEventListener("click", handleClick());
// h1_2.onclick = handleClick;

// ==================================================================

// 3-5
// h1_2.addEventListener("mouseenter", function handleEnter() {
//     // console.log("enter");
//     h1_2.innerText = "enter";
// });

// function handleLeave() {
//     // console.log("leave");
//     h1_2.innerText = "leave";
// }

// // h1_2.addEventListener("mouseleave", handleLeave);

// // 윈도우 사이즈 조절 이벤트
// function handleWindowResize() {
//     document.body.style.background = "tomato";
// }

// window.addEventListener("resize", handleWindowResize);

// // 복사 시 이벤트
// function handleWindowCopy(copy) {
//     alert("copy", copy);
// }

// window.addEventListener("copy", handleWindowCopy);

// ==================================================================

// //  3-6
// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTItleClick() {
//     // console.log(h1.style.color);
//     // h1.style.color = "blue";

//     // if (h1.style.color === "blue") {
//     //     h1.style.color = "tomato";
//     // } else {
//     //     h1.style.color = "blue";
//     // }

//     const stColor = h1.style.color;
//     let newColor;

//     if (stColor === "blue") {
//         newColor = "tomato";
//     } else {
//         newColor = "blue";
//     }
//     h1.style.color = newColor;
// }

// h1.addEventListener("click", handleTItleClick);

// ==================================================================

// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTItleClick() {
//     // h1.className = "active";

//     // 3-8
//     // const clickedClass = "clicked";
//     // if (h1.className === clickedClass) {
//     //     h1.className = "";
//     // } else {
//     //     h1.className = clickedClass;
//     // }

//     // 3-9

//     // a-1
//     // const clickedClass = "clicked";
//     // if (h1.classList.contains(clickedClass)) {
//     //     h1.classList.remove(clickedClass);
//     // } else {
//     //     h1.classList.add(clickedClass);
//     // }

//     // a-2
//     h1.classList.toggle("clicked");
// }

// h1.addEventListener("click", handleTItleClick);

// ========================================================================================
// 서론
// ========================================================================================

// const loginForm = document.getElementById("login-form");

// # 4.1
// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

// function onBtnClick() {
//     // console.log(loginInput.value);

//     // const username = loginInput.value;
//     // if (username === "") {
//     //     alert("Please write your name");
//     // } else if (username.length > 10) {
//     //     alert("your name is too long");
//     // }

//     const username = loginInput.value;
//     console.log("username : ", username);
// }

// loginButton.addEventListener("click", onBtnClick);

// loginButton.onclick = onBtnClick;

// # 4.2

const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const USERNAME_KEY = 'username';

function onLoginSUbmit(event) {
    const username = loginInput.value;
    console.log('username : ', username);

    // submit 시 새로고침 방지
    // 브라우저의 기본 동작을 막아줌!
    event.preventDefault();

    loginForm.classList.add('hidden');
    paintGreeting(username);

    localStorage.setItem(USERNAME_KEY, username);
}

function paintGreeting(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove('hidden');
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
    // show the form
    loginForm.classList.remove('hidden');
    loginForm.addEventListener('submit', onLoginSUbmit);
} else {
    // show the greeting
    paintGreeting(savedUserName);
}
