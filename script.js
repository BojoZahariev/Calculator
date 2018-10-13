'use strict';
//Nixies
var but1L = document.getElementById('but1L');
var but2L = document.getElementById('but2L');
var but3L = document.getElementById('but3L');
var but4L = document.getElementById('but4L');
var but5L = document.getElementById('but5L');
var but6L = document.getElementById('but6L');
var but7L = document.getElementById('but7L');
var but8L = document.getElementById('but8L');
var but9L = document.getElementById('but9L');
var but0L = document.getElementById('but0L');
var butAL = document.getElementById('butAL');
var butMuL = document.getElementById('butMuL');
var butSL = document.getElementById('butSL');
var butCL = document.getElementById('butCL');
var butBkL = document.getElementById('butBkL');
var butDivL = document.getElementById('butDivL');
var butDecL = document.getElementById('butDecL');
var butEL = document.getElementById('butEL');

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
document.addEventListener('keydown', function(event) {

  if (event.which === 97 || event.which === 49) {
    if (op === '') {
      num1 += '1';
      a += '1';
      list.textContent = a;
      dis.textContent = num1;
    } else if (op !== '') {
      num2 += '1';
      a += '1';
      list.textContent = a;
      dis.textContent = num2;
    }
    //Nixie light
    but1L.style.filter = "grayscale(0%)";
    setTimeout(
      function() {
        but1L.style.filter = "grayscale(100%)";
      }, 1000);
  }
}, false);


document.addEventListener('keydown', function(event) {
  if (event.which === 98 || event.which === 50) {
    if (op === '') {
      num1 += '2';
      a += '2';
      list.textContent = a;
      dis.textContent = num1;
    } else if (op !== '') {
      num2 += '2';
      a += '2';
      list.textContent = a;
      dis.textContent = num2;
    }
    but2L.style.filter = "grayscale(0%)";
    setTimeout(
      function() {
        but2L.style.filter = "grayscale(100%)";
      }, 1000);
  }
}, false);

document.addEventListener('keydown', function(event) {
  if (event.which === 99 || event.which === 51) {
    if (op === '') {
      num1 += '3';
      a += '3';
      list.textContent = a;
      dis.textContent = num1;
    } else if (op !== '') {
      num2 += '3';
      a += '3';
      list.textContent = a;
      dis.textContent = num2;
    }
    but3L.style.filter = "grayscale(0%)";
    setTimeout(
      function() {
        but3L.style.filter = "grayscale(100%)";
      }, 1000);
  }
}, false);

document.addEventListener('keydown', function(event) {
  if (event.which === 100 || event.which === 52) {
    if (op === '') {
      num1 += '4';
      a += '4';
      list.textContent = a;
      dis.textContent = num1;
    } else if (op !== '') {
      num2 += '4';
      a += '4';
      list.textContent = a;
      dis.textContent = num2;
    }
    but4L.style.filter = "grayscale(0%)";
    setTimeout(
      function() {
        but4L.style.filter = "grayscale(100%)";
      }, 1000);
  }
}, false);

document.addEventListener('keydown', function(event) {
  if (event.which === 101 || event.which === 53) {
    if (op === '') {
      num1 += '5';
      a += '5';
      list.textContent = a;
      dis.textContent = num1;
    } else if (op !== '') {
      num2 += '5';
      a += '5';
      list.textContent = a;
      dis.textContent = num2;
    }
    but5L.style.filter = "grayscale(0%)";
    setTimeout(
      function() {
        but5L.style.filter = "grayscale(100%)";
      }, 1000);
  }
}, false);

document.addEventListener('keydown', function(event) {
  if (event.which === 102 || event.which === 54) {
    if (op === '') {
      num1 += '6';
      a += '6';
      list.textContent = a;
      dis.textContent = num1;
    } else if (op !== '') {
      num2 += '6';
      a += '6';
      list.textContent = a;
      dis.textContent = num2;
    }

    but6L.style.filter = "grayscale(0%)";
    setTimeout(
      function() {
        but6L.style.filter = "grayscale(100%)";
      }, 1000);
  }
}, false);

document.addEventListener('keydown', function(event) {
  if (event.which === 103 || event.which === 55) {
    if (op === '') {
      num1 += '7';
      a += '7';
      list.textContent = a;
      dis.textContent = num1;
    } else if (op !== '') {
      num2 += '7';
      a += '7';
      list.textContent = a;
      dis.textContent = num2;
    }

    but7L.style.filter = "grayscale(0%)";
    setTimeout(
      function() {
        but7L.style.filter = "grayscale(100%)";
      }, 1000);
  }
}, false);

document.addEventListener('keydown', function(event) {
  if (event.which === 104 || event.which === 56) {
    if (op === '') {
      num1 += '8';
      a += '8';
      list.textContent = a;
      dis.textContent = num1;
    } else if (op !== '') {
      num2 += '8';
      a += '8';
      list.textContent = a;
      dis.textContent = num2;
    }

    but8L.style.filter = "grayscale(0%)";
    setTimeout(
      function() {
        but8L.style.filter = "grayscale(100%)";
      }, 1000);
  }
}, false);

document.addEventListener('keydown', function(event) {
  if (event.which === 105 || event.which === 57) {
    if (op === '') {
      num1 += '9';
      a += '9';
      list.textContent = a;
      dis.textContent = num1;
    } else if (op !== '') {
      num2 += '9';
      a += '9';
      list.textContent = a;
      dis.textContent = num2;
    }

    but9L.style.filter = "grayscale(0%)";
    setTimeout(
      function() {
        but9L.style.filter = "grayscale(100%)";
      }, 1000);
  }
}, false);

document.addEventListener('keydown', function(event) {
  if (event.which === 96 || event.which === 48) {
    if (op === '') {
      num1 += '0';
      a += '0';
      list.textContent = a;
      dis.textContent = num1;
    } else if (op !== '') {
      num2 += '0';
      a += '0';
      list.textContent = a;
      dis.textContent = num2;
    }

    but0L.style.filter = "grayscale(0%)";
    setTimeout(
      function() {
        but0L.style.filter = "grayscale(100%)";
      }, 1000);
  }
}, false);

document.addEventListener('keydown', function(event) {
  if (event.which === 107 || event.which === 187) {
    if (op !== '' & num2 !== '') {
      operate();
    }
    if (a.slice(-1) !== '+') {
      a += '+';
      list.textContent = a;
    }
    op = 'add';

    butAL.style.filter = "grayscale(0%)";
    setTimeout(
      function() {
        butAL.style.filter = "grayscale(100%)";
      }, 1000);
  }
}, false);

document.addEventListener('keydown', function(event) {
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

    butSL.style.filter = "grayscale(0%)";
    setTimeout(
      function() {
        butSL.style.filter = "grayscale(100%)";
      }, 1000);
  }
}, false);

document.addEventListener('keydown', function(event) {
  if (event.which === 106) {
    if (op !== '' & num2 !== '') {
      operate();
    }
    if (a.slice(-1) !== '*') {
      a += '*';
      list.textContent = a;
    }
    op = 'mult';

    butMuL.style.filter = "grayscale(0%)";
    setTimeout(
      function() {
        butMuL.style.filter = "grayscale(100%)";
      }, 1000);
  }
}, false);

document.addEventListener('keydown', function(event) {
  if (event.which === 111) {
    if (op !== '' & num2 !== '') {
      operate();
    }
    if (a.slice(-1) !== '/') {
      a += '/';
      list.textContent = a;
    }
    op = 'div';
    butDivL.style.filter = "grayscale(0%)";
    setTimeout(
      function() {
        butDivL.style.filter = "grayscale(100%)";
      }, 1000);
  }
}, false);

document.addEventListener('keydown', function(event) {
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
    butDecL.style.filter = "grayscale(0%)";
    setTimeout(
      function() {
        butDecL.style.filter = "grayscale(100%)";
      }, 1000);
  }
}, false);

//Backspace
document.addEventListener('keydown', function(event) {
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
    butBkL.style.filter = "grayscale(0%)";
    setTimeout(
      function() {
        butBkL.style.filter = "grayscale(100%)";
      }, 1000);
  }
}, false);

document.addEventListener('keydown', function(event) {
  if (event.which === 13) {

    operate();
    butEL.style.filter = "grayscale(0%)";
    setTimeout(
      function() {
        butEL.style.filter = "grayscale(100%)";
      }, 1000);

  }
}, false);

document.addEventListener('keydown', function(event) {
  if (event.which === 27) {
    reset();
    butCL.style.filter = "grayscale(0%)";
    setTimeout(
      function() {
        butCL.style.filter = "grayscale(100%)";
      }, 1000);

  }
}, false);

//Number buttons
var btn1 = document.getElementById('btn1');
btn1.addEventListener('click', () => {
  if (op === '') {
    num1 += '1';
    a += '1';
    list.textContent = a;
    dis.textContent = num1;
  } else if (op !== '') {
    num2 += '1';
    a += '1';
    list.textContent = a;
    dis.textContent = num2;
  }
  but1L.style.filter = "grayscale(0%)";
  setTimeout(
    function() {
      but1L.style.filter = "grayscale(100%)";
    }, 1000);
}, false);

var btn2 = document.getElementById('btn2');
btn2.addEventListener('click', () => {
  if (op === '') {
    num1 += '2';
    a += '2';
    list.textContent = a;
    dis.textContent = num1;
  } else if (op !== '') {
    num2 += '2';
    a += '2';
    list.textContent = a;
    dis.textContent = num2;
  }
  but2L.style.filter = "grayscale(0%)";
  setTimeout(
    function() {
      but2L.style.filter = "grayscale(100%)";
    }, 1000);
}, false);

var btn3 = document.getElementById('btn3');
btn3.addEventListener('click', () => {
  if (op === '') {
    num1 += '3';
    a += '3';
    list.textContent = a;
    dis.textContent = num1;
  } else if (op !== '') {
    num2 += '3';
    a += '3';
    list.textContent = a;
    dis.textContent = num2;
  }
  but3L.style.filter = "grayscale(0%)";
  setTimeout(
    function() {
      but3L.style.filter = "grayscale(100%)";
    }, 1000);
}, false);

var btn4 = document.getElementById('btn4');
btn4.addEventListener('click', () => {
  if (op === '') {
    num1 += '4';
    a += '4';
    list.textContent = a;
    dis.textContent = num1;
  } else if (op !== '') {
    num2 += '4';
    a += '4';
    list.textContent = a;
    dis.textContent = num2;
  }
  but4L.style.filter = "grayscale(0%)";
  setTimeout(
    function() {
      but4L.style.filter = "grayscale(100%)";
    }, 1000);
}, false);

var btn5 = document.getElementById('btn5');
btn5.addEventListener('click', () => {
  if (op === '') {
    num1 += '5';
    a += '5';
    list.textContent = a;
    dis.textContent = num1;
  } else if (op !== '') {
    num2 += '5';
    a += '5';
    list.textContent = a;
    dis.textContent = num2;
  }
  but5L.style.filter = "grayscale(0%)";
  setTimeout(
    function() {
      but5L.style.filter = "grayscale(100%)";
    }, 1000);
}, false);

var btn6 = document.getElementById('btn6');
btn6.addEventListener('click', () => {
  if (op === '') {
    num1 += '6';
    a += '6';
    list.textContent = a;
    dis.textContent = num1;
  } else if (op !== '') {
    num2 += '6';
    a += '6';
    list.textContent = a;
    dis.textContent = num2;
  }
  but6L.style.filter = "grayscale(0%)";
  setTimeout(
    function() {
      but6L.style.filter = "grayscale(100%)";
    }, 1000);
}, false);

var btn7 = document.getElementById('btn7');
btn7.addEventListener('click', () => {
  if (op === '') {
    num1 += '7';
    a += '7';
    list.textContent = a;
    dis.textContent = num1;
  } else if (op !== '') {
    num2 += '7';
    a += '7';
    list.textContent = a;
    dis.textContent = num2;
  }
  but7L.style.filter = "grayscale(0%)";
  setTimeout(
    function() {
      but7L.style.filter = "grayscale(100%)";
    }, 1000);
}, false);

var btn8 = document.getElementById('btn8');
btn8.addEventListener('click', () => {
  if (op === '') {
    num1 += '8';
    a += '8';
    list.textContent = a;
    dis.textContent = num1;
  } else if (op !== '') {
    num2 += '8';
    a += '8';
    list.textContent = a;
    dis.textContent = num2;
  }
  but8L.style.filter = "grayscale(0%)";
  setTimeout(
    function() {
      but8L.style.filter = "grayscale(100%)";
    }, 1000);
}, false);

var btn9 = document.getElementById('btn9');
btn9.addEventListener('click', () => {
  if (op === '') {
    num1 += '9';
    a += '9';
    list.textContent = a;
    dis.textContent = num1;
  } else if (op !== '') {
    num2 += '9';
    a += '9';
    list.textContent = a;
    dis.textContent = num2;
  }
  but9L.style.filter = "grayscale(0%)";
  setTimeout(
    function() {
      but9L.style.filter = "grayscale(100%)";
    }, 1000);
}, false);

var btn0 = document.getElementById('btn0');
btn0.addEventListener('click', () => {
  if (op === 'div' & num2 === '') {
    dis.textContent = 'Hey don\'t do that';
    setTimeout(
      function() {
        reset();
      }, 1000);
  } else if (op === '') {
    num1 += '0';
    a += '0';
    list.textContent = a;
    dis.textContent = num1;
  } else if (op !== '') {
    num2 += '0';
    a += '0';
    list.textContent = a;
    dis.textContent = num2;
  }
  but0L.style.filter = "grayscale(0%)";
  setTimeout(
    function() {
      but0L.style.filter = "grayscale(100%)";
    }, 1000);
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
  butAL.style.filter = "grayscale(0%)";
  setTimeout(
    function() {
      butAL.style.filter = "grayscale(100%)";
    }, 1000);
}, false);

//Substraction and minus button
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
  butSL.style.filter = "grayscale(0%)";
  setTimeout(
    function() {
      butSL.style.filter = "grayscale(100%)";
    }, 1000);
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
  butMuL.style.filter = "grayscale(0%)";
  setTimeout(
    function() {
      butMuL.style.filter = "grayscale(100%)";
    }, 1000);
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
  butDivL.style.filter = "grayscale(0%)";
  setTimeout(
    function() {
      butDivL.style.filter = "grayscale(100%)";
    }, 1000);
}, false);



//Operate button
var btnE = document.getElementById('btnE');
btnE.addEventListener('click', () => {

  operate();
  butEL.style.filter = "grayscale(0%)";
  setTimeout(
    function() {
      butEL.style.filter = "grayscale(100%)";
    }, 1000);

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
  butDecL.style.filter = "grayscale(0%)";
  setTimeout(
    function() {
      butDecL.style.filter = "grayscale(100%)";
    }, 1000);
}, false);

//Reset button
var btnC = document.getElementById('btnC');
btnC.addEventListener('click', () => {
  reset();
  butCL.style.filter = "grayscale(0%)";
  setTimeout(
    function() {
      butCL.style.filter = "grayscale(100%)";
    }, 1000);

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
  butBkL.style.filter = "grayscale(0%)";
  setTimeout(
    function() {
      butBkL.style.filter = "grayscale(100%)";
    }, 1000);
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

//Substraction function
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
