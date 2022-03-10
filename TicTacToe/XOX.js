
var move = true;
const x = $('.x');
const o = document.getElementsByClassName('o');
const game = document.getElementById('game-container')
const finish = document.getElementById('finish')
const tx = document.getElementById('turnX')
const to = document.getElementById('turnO')
var w = false
var end;
var d = 0;
var i = 0;
var xResult;
var oResult;
var abort = false;
var ran;
var hard = false;

get() // Score

responsive()

$('#mainMenu').click(function () {
    $('#main').slideDown('slow')
    $('#game').slideUp('fast')
    clearAll()
})
$('#Restart').click(function () {
    clearAll()
})
$('#clear').click(function () {
    clear()
})
$('#twoPlayer').click(function () {
    $('#main').slideUp('fast')
    $('#game').slideDown('slow')
    abort = false
    hard = false;
    two()

})
$('#newGame').click(function () {
    $('#main').slideUp('fast')
    $('#game').slideDown('slow')
    abort = true;
    hard = false;
    one()
})
$('#hard').click(function () {
    $('#main').slideUp('fast')
    $('#game').slideDown('slow')
    abort = true;
    hard = true;
    one()
})
$(window).on('resize', function () {
    windowWidth = $(window).width();
    responsive()
});
// Two player part
function two() {
    $('.item').click(function () {
        let b = this
        if (b.innerText == '') {
            let a = 2;
            console.log(i)
            if (i % 2 == 0) {
                createX(b)
            } else {
                createO(b)
            }

            check(b)
        }


    });
}
// Player vs Computer part
function one() {
    $('.item').click(function () {
        if (move) {
            if (abort) {
                let b = this
                if (b.innerText == '') {
                    move = false;
                    let a = 2;
                    createX(b)
                    check(b)
                    Pc()
                }
            }
        }
    });

}
// Creation of X and O
function createX(b) {
    const div = document.createElement('div');
    div.className = 'letters'
    div.innerText = 'X';
    b.appendChild(div)
}
function createO(b) {
    const div = document.createElement('div');
    div.className = 'letters'
    div.innerText = 'O';
    b.appendChild(div)
}

// Pc plays in this function
function Pc() {

    function time() {
        if (abort) {
            ran = Math.floor(Math.random() * 8)

            // if hard is chosen, it finds another 'r' in int function
            if (hard) {
                int()
            }


            let b = game.children[ran]

            while (b.innerText != '') {

                ran = Math.floor(Math.random() * 9)
                b = game.children[ran]

            }
            if (b.innerText == '') {
                createO(b)
            }
            check(b)
            move = true // move keeps the player from clicking before the turn
        }
    }
    setTimeout(time, 1000)

}

// Checks for winning
function check(b) {


    end = b.innerText;
    turn(end) // shows the X or O

    let one = game.children[0].textContent;
    let two = game.children[1].textContent;
    let three = game.children[2].textContent;
    let four = game.children[3].textContent;
    let five = game.children[4].textContent;
    let six = game.children[5].textContent;;
    let seven = game.children[6].textContent;;
    let eight = game.children[7].textContent;;
    let nine = game.children[8].textContent;;

    if (b.classList[1] == 'item1') {
        if (b.innerText == two && b.innerText == three) {

            win("row1")
        }
        if (b.innerText == four && b.innerText == seven) {
            win("col1")
        }
        if (b.innerText == five && b.innerText == nine) {
            win("diag2")
        }
    }
    if (b.classList[1] == 'item2') {
        if (b.innerText == one && b.innerText == three) {
            win("row1")
        }
        if (b.innerText == five && b.innerText == eight) {
            win("col2")
        }
    }
    if (b.classList[1] == 'item3') {
        if (b.innerText == two && b.innerText == one) {
            win("row1")
        }
        if (b.innerText == six && b.innerText == nine) {
            win("col3")
        }
        if (b.innerText == five && b.innerText == seven) {
            win("diag1")
        }
    }
    if (b.classList[1] == 'item4') {
        if (b.innerText == one && b.innerText == seven) {
            win("col1")
        }
        if (b.innerText == five && b.innerText == six) {
            win("row2")
        }
    }
    if (b.classList[1] == 'item5') {
        if (b.innerText == two && b.innerText == eight) {
            win("col2")
        }
        if (b.innerText == four && b.innerText == six) {
            win("row2")
        }
        if (b.innerText == one && b.innerText == nine) {
            win("diag2")
        }
        if (b.innerText == three && b.innerText == seven) {
            win("diag1")
        }
    }
    if (b.classList[1] == 'item6') {
        if (b.innerText == nine && b.innerText == three) {
            win("col3")
        }
        if (b.innerText == five && b.innerText == four) {
            win("row2")
        }
    }
    if (b.classList[1] == 'item7') {
        if (b.innerText == one && b.innerText == four) {
            win("col1")
        }
        if (b.innerText == eight && b.innerText == nine) {
            win("row3")
        }
        if (b.innerText == five && b.innerText == three) {
            win("diag1")
        }

    }
    if (b.classList[1] == 'item8') {
        if (b.innerText == five && b.innerText == two) {
            win("col2")
        }
        if (b.innerText == seven && b.innerText == nine) {
            win("row3")
        }
    }
    if (b.classList[1] == 'item9') {
        if (b.innerText == seven && b.innerText == eight) {
            win("row3")
        }
        if (b.innerText == six && b.innerText == three) {
            win("col3")
        }
        if (b.innerText == one && b.innerText == five) {
            win("diag2")
        }
    }

    i++
    // in case of playing 9 times without winner.
    if (i == 9) {
        if (w == false) {
            setTimeout(function () {
                alert('tie')
                clear()
            }, 1000)
        }
    }

}
// In case of winning, shows the line
function win(item) {
    let j;
    let a = finish.children;
    let b;

    for (j = 0; j < a.length; j++) {
        b = a[j]
        if (b.classList[1] == item) {
            w = true;
            $(b).fadeIn('slow')
            setTimeout(result, 1000)
            function result() {
                alert(`${end} won`)
                clear()
                score()

            }
        }
    }
}
function clearAll() {
    clear()
    xResult = 0;
    oResult = 0;
    save()
}

function clear() {
    let j;
    let b = game.children;
    let a = finish.children

    for (j = 0; j < b.length - 3; j++) {
        b[j].innerHTML = ''
    }
    for (j = 0; j < a.length; j++) {
        $(a[j]).fadeOut('fast')
    }
    i = 0;
    w = false;

}

function responsive() {
    var windowWidth = $(window).width();
    let x = document.getElementById('game').children[0]
    let o = document.getElementById('game').children[1]
    if (windowWidth < 771) {
        x.innerHTML = `X <p>${xResult}</p>`
        o.innerHTML = `O <p>${oResult}</p>`
    }
    if (windowWidth > 771) {
        x.innerHTML = `Player X <p>${xResult}</p>`
        o.innerHTML = `Player O <p>${oResult}</p>`
    }
}


function score() {
    if (end == 'X') {
        xResult++

    }
    if (end == 'O') {
        oResult++

    }
    save()

}
// shows X or O
function turn() {

    if (end == 'X') {
        $(tx).fadeOut('fast')
        $(to).fadeIn('slow')
    }
    if (end == 'O') {
        $(to).fadeOut('fast')
        $(tx).fadeIn('slow')
    }

}

function save() {
    localStorage.setItem('x', xResult)
    localStorage.setItem('o', oResult)
    responsive()
}
// Score table
function get() {
    xResult = localStorage.getItem('x')
    if (xResult == null) {
        xResult = 0;
    }

    oResult = localStorage.getItem('o')
    if (oResult == null) {
        oResult = 0;
    }

}

function int() {

    let one = game.children[0].textContent;
    let two = game.children[1].textContent;
    let three = game.children[2].textContent;
    let four = game.children[3].textContent;
    let five = game.children[4].textContent;
    let six = game.children[5].textContent;;
    let seven = game.children[6].textContent;;
    let eight = game.children[7].textContent;;
    let nine = game.children[8].textContent;;

    if (one == '') {
        one = 1;
    }
    if (two == '') {
        two = 2;
    }
    if (three == '') {
        three = 3;
    }
    if (four == '') {
        four = 4;
    }
    if (five == '') {
        five = 5;
    }
    if (six == '') {
        six = 6;
    }
    if (seven == '') {
        seven = 7;
    }
    if (eight == '') {
        eight = 8;
    }
    if (nine == '') {
        nine = 9;
    }

    ran = Math.floor(Math.random() * 8)
    let a = new Array();
    let n;

    if (one == two || six == nine || five == seven) {
        a.push(2);
    }
    if (three == two || seven == four || five == nine) {
        a.push(0);
    }
    if (one == nine || two == eight || three == seven || four == six) {
        a.push(4);
    }
    if (one == four || eight == nine || five == three) {
        a.push(6);
    }
    if (one == five || six == three || eight == seven) {
        a.push(8);
    }
    if (three == one || five == eight) {
        a.push(1);
    }
    if (one == seven || five == six) {
        a.push(3);
    }
    if (five == four || three == nine) {
        a.push(5);
    }
    if (two == five || nine == seven) {
        a.push(7);
    }


    if (a.length > 0) {
        n = Math.floor(Math.random() * a.length)
        ran = a[n]
        let t;

        let b = game.children[ran]

        while (b.innerText != '') {
            let j;
            for (j = 0; j < a.length; j++) {
                n = Math.floor(Math.random() * a.length)
                ran = a[n]
                b = game.children[ran]
                if (b.innerText == '') {
                    return ran;
                }
            }
            ran = Math.floor(Math.random() * 9)

            b = game.children[ran]

        }
    }
    return ran;
}
