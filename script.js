//Nixies

var dis = document.getElementById('dis');
var list = document.getElementById('list');
dis.textContent = '0';
list.textContent = '';
var num1 = '';
var num2 = '';
var op = '';
var res;
var a = '';

//Keyboard support
document.addEventListener('keydown', function (event) {
  if (event.which === 97 || event.which === 49) {
    clickNumber(1);
  }
}, false);


document.addEventListener('keydown', function (event) {
  if (event.which === 98 || event.which === 50) {
    clickNumber(2);
  }
}, false);

document.addEventListener('keydown', function (event) {
  if (event.which === 99 || event.which === 51) {
    clickNumber(3);
  }
}, false);

document.addEventListener('keydown', function (event) {
  if (event.which === 100 || event.which === 52) {
    clickNumber(4);
  }
}, false);

document.addEventListener('keydown', function (event) {
  if (event.which === 101 || event.which === 53) {
    clickNumber(5);
  }
}, false);

document.addEventListener('keydown', function (event) {
  if (event.which === 102 || event.which === 54) {
    clickNumber(6);
  }
}, false);

document.addEventListener('keydown', function (event) {
  if (event.which === 103 || event.which === 55) {
    clickNumber(7);
  }
}, false);

document.addEventListener('keydown', function (event) {
  if (event.which === 104 || event.which === 56) {
    clickNumber(8);
  }
}, false);

document.addEventListener('keydown', function (event) {
  if (event.which === 105 || event.which === 57) {
    clickNumber(9);
  }
}, false);

document.addEventListener('keydown', function (event) {
  if (event.which === 96 || event.which === 48) {
    if (op === 'div') {
      reset();
    }

    lightEmUp(10);
    clickNumber(0);
  }
}, false);

document.addEventListener('keydown', function (event) {
  if (event.which === 107 || event.which === 187) {
    if (op !== '' & num2 !== '') {
      operate();
    }
    if (a.slice(-1) !== '+') {
      a += '+';
      list.textContent = a;
    }
    op = 'add';

    lightEmUp(12);
  }
}, false);

document.addEventListener('keydown', function (event) {
  if (event.which === 109 || event.which === 189) {
    if (op !== '' & num2 !== '') {
      operate();
      op = 'sub';
    } else if (num1 === '') {
      num1 += '-';
      dis.textContent = num1;
    } else if (num1 !== '' & num2 === '') {
      op = 'sub';
    }
    if (a.slice(-1) !== '-') {
      a += '-';
      list.textContent = a;
    }

    lightEmUp(13);
  }
}, false);

document.addEventListener('keydown', function (event) {
  if (event.which === 106) {
    if (op !== '' & num2 !== '') {
      operate();
    }
    if (a.slice(-1) !== '*') {
      a += '*';
      list.textContent = a;
    }
    op = 'mult';

    lightEmUp(15);
  }
}, false);

document.addEventListener('keydown', function (event) {
  if (event.which === 111) {
    if (op !== '' & num2 !== '') {
      operate();
    }
    if (a.slice(-1) !== '/') {
      a += '/';
      list.textContent = a;
    }
    op = 'div';
    lightEmUp(16);
  }
}, false);

document.addEventListener('keydown', function (event) {
  if (event.which === 110 || event.which === 190) {
    if (num1.toString().indexOf('.') === -1 & op === '') {
      num1 += '.';
      dis.textContent = num1;
      a += '.';
      list.textContent = a;
    } else if (op !== '' & num2.indexOf('.') === -1) {
      num2 += '.';
      dis.textContent = num2;
      a += '.';
      list.textContent = a;
    }

    lightEmUp(17);
  }
}, false);

//Backspace
document.addEventListener('keydown', function (event) {
  if (event.which === 8) {
    if (dis.textContent == num1 & op === '') {
      num1 = num1.toString().slice(0, -1);
      dis.textContent = num1;
    } else if (dis.textContent == num2) {
      num2 = num2.toString().slice(0, -1);
      dis.textContent = num2;
    } else if (op !== '') {
      op = '';
    }
    a = a.toString().slice(0, -1);
    list.textContent = a;

    lightEmUp(14);
  }
}, false);

document.addEventListener('keydown', function (event) {
  if (event.which === 13) {

    operate();
    lightEmUp(18);

  }
}, false);

document.addEventListener('keydown', function (event) {
  if (event.which === 27) {
    reset();
    lightEmUp(11);
  }
}, false);

//Number buttons

//Display numbers
function clickNumber(n) {
  if (op === '') {
    num1 += n;
    a += n;
    list.textContent = a;
    dis.textContent = num1;
  } else if (op !== '') {
    num2 += n;
    a += n;
    list.textContent = a;
    dis.textContent = num2;
  }

  if (n !== 0) {
    lightEmUp(n);
  }
}

//Light
const lightEmUp = (light) => {
  var child = document.querySelectorAll('.light');
  child[light - 1].style.filter = "grayscale(0%)";
  setTimeout(
    function () {
      child[light - 1].style.filter = "grayscale(100%)";
    }, 1000);
}


var btn0 = document.getElementById('btn0');
btn0.addEventListener('click', () => {
  lightEmUp(10);
  if (op === 'div') {
    reset();
  } else {

    clickNumber(0);
  }

}, false);


//Addition button
var btnA = document.getElementById('btnA');
btnA.addEventListener('click', () => {
  //Operate if operator is pressed instead of '='

  if (op !== '' & num2 !== '') {
    operate();
  }
  if (a.slice(-1) !== '+') {
    a += '+';
    list.textContent = a;
  }
  op = 'add';
  lightEmUp(12);
}, false);

//Subtraction and minus button
var btnS = document.getElementById('btnS');
btnS.addEventListener('click', () => {
  //Operate if operator is pressed instead of '='
  if (op !== '' & num2 !== '') {
    operate();
    op = 'sub';
  } else if (num1 === '') {
    num1 += '-';
    dis.textContent = num1;
  } else if (num1 !== '' & num2 === '') {
    op = 'sub';
  }

  if (a.slice(-1) !== '-') {
    a += '-';
    list.textContent = a;
  }
  lightEmUp(13);
}, false);

//Multiplication button
var btnMu = document.getElementById('btnMu');
btnMu.addEventListener('click', () => {

  if (op !== '' & num2 !== '') {
    operate();
  }
  if (a.slice(-1) !== '*') {
    a += '*';
    list.textContent = a;
  }
  op = 'mult';
  lightEmUp(15);
}, false);

//Division button
var btnDiv = document.getElementById('btnDiv');
btnDiv.addEventListener('click', () => {

  if (op !== '' & num2 !== '') {
    operate();
  }
  if (a.slice(-1) !== '/') {
    a += '/';
    list.textContent = a;
  }
  op = 'div';
  lightEmUp(16);
}, false);



//Operate button
var btnE = document.getElementById('btnE');
btnE.addEventListener('click', () => {
  lightEmUp(18);
  operate();
}, false);

//Decimal button
var btnDec = document.getElementById('btnDec');
btnDec.addEventListener('click', () => {

  if (num1.toString().indexOf('.') === -1 & op === '') {
    num1 += '.';
    dis.textContent = num1;
    a += '.';
    list.textContent = a;
  } else if (op !== '' & num2.indexOf('.') === -1) {
    num2 += '.';
    dis.textContent = num2;
    a += '.';
    list.textContent = a;
  }
  lightEmUp(17);
}, false);

//Reset button
var btnC = document.getElementById('btnC');
btnC.addEventListener('click', () => {
  reset();
  lightEmUp(11);

}, false);

//Backspace button
var btnBk = document.getElementById('btnBk');
btnBk.addEventListener('click', () => {
  if (dis.textContent == num1 & op === '') {
    num1 = num1.toString().slice(0, -1);
    dis.textContent = num1;
  } else if (dis.textContent == num2) {
    num2 = num2.toString().slice(0, -1);
    dis.textContent = num2;
  } else if (op !== '') {
    op = '';
  }
  a = a.toString().slice(0, -1);
  list.textContent = a;
  lightEmUp(14);
}, false);

//Reset function
function reset() {
  dis.textContent = '0';
  list.textContent = '';
  num1 = '';
  num2 = '';
  op = '';
  a = '';
}

//Addition function
function add(num1, num2) {
  res = Number(num1) + Number(num2);
  return res;
}

//Subtraction function
function substract(num1, num2) {
  res = Number(num1) - Number(num2);
  return res;
}

//Multiplication function
function multiplicate(num1, num2) {
  res = Number(num1) * Number(num2);
  return res;
}

//Division function
function division(num1, num2) {
  if (num2 === '0') {
    return;
  } else {
    res = Number(num1) / Number(num2);
    return res;
  }
}

//Operate function
function operate() {

  if (op === 'add') {
    add(num1, num2);
  } else if (op === 'sub') {
    substract(num1, num2);
  } else if (op === 'mult') {
    multiplicate(num1, num2);
  } else if (op === 'div') {
    division(num1, num2);
  }
  //Rounding long decimals
  if (res.toString().indexOf('.') !== -1) {
    res = Math.round(res * 100) / 100;
  }
  //Continue operation without reset
  num1 = res;
  num2 = '';
  dis.textContent = res;
}
