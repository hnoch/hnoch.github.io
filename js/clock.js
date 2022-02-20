const clock = document.querySelector('h2#clock');

function sayHello() {
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

function getClock() {
    // `string`.padStart( 원하는 문자열 길이, 길이의 공백에 들어갈 문자)
    // ex) "aabb".padStart(10, 'x')
    // >> xxxxxxaabb

    // padEnd는 반대로 적용
    // ex) "qwer".padEnd(6, '@')
    // >> qwer@@

    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// 화면 로딩 시 바로 시간 보이도록
getClock();

setInterval(getClock, 1000);
