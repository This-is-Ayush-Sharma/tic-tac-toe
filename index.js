var playturn='X';
function turn() {
    if (playturn == 'X')
        playturn = 'O'
    else
        playturn = 'X';
    // document.getElementById('instruct').innerHTML = playturn+" turn";

}
function enable() {
    document.getElementById("bt1").disabled = false;
    document.getElementById("bt2").disabled = false;
    document.getElementById("bt3").disabled = false;
    document.getElementById("bt4").disabled = false;
    document.getElementById("bt5").disabled = false;
    document.getElementById("bt6").disabled = false;
    document.getElementById("bt7").disabled = false;
    document.getElementById("bt8").disabled = false;
    document.getElementById("bt9").disabled = false;
    document.getElementById('instruct').innerHTML = 'Keys are enabled';
    display();
}
function display()
{
    document.getElementById('instruct').innerHTML = "X turn";
}
function put(ids) {
    ab = checkwin();
    if (ab == 0) {
        document.getElementById('instruct').innerHTML = playturn+" turn";
        turn();
        // document.getElementById(ids).
        // document.write(ids);
        document.getElementById(ids).innerHTML = playturn;
        document.getElementById(ids).disabled = true;
    }
    iswin();
}
function iswin() {
    checkwin();
    checkdraw();
}
function run() {
    document.getElementById('instruct').innerHTML = playturn+" turn";
    document.getElementById("players").disabled = true;
    playturn = 'O';
    // var ar=["bt1","bt2","b3","b4","b5","bt6","bt7","bt8","bt9"]
    // x=document.getElementById("bt").value;
    var x = document.getElementById("xnm").value;
    var y = document.getElementById("onm").value;
    if(x!=""&&y!="")
    enable();
    else
    {
        document.getElementById("players").disabled = false;
        document.getElementById('instruct').innerHTML = 'Enter names';
    }
}
function checkwin() {
    var a = 0;
    var a1 = document.getElementById("bt1").textContent;
    var a2 = document.getElementById("bt2").textContent;
    var a3 = document.getElementById("bt3").textContent;
    var a4 = document.getElementById("bt4").textContent;
    var a5 = document.getElementById("bt5").textContent;
    var a6 = document.getElementById("bt6").textContent;
    var a7 = document.getElementById("bt7").textContent;
    var a8 = document.getElementById("bt8").textContent;
    var a9 = document.getElementById("bt9").textContent;

    if (a1 == 'X' && a2 == 'X' && a3 == 'X') {
        document.getElementById('instruct').innerHTML = 'X wins';
        a = 1;
    }
    if (a4 == 'X' && a5 == 'X' && a6 == 'X') {
        document.getElementById('instruct').innerHTML = 'X wins';
        a = 1;
    }
    if (a7 == 'X' && a8 == 'X' && a9 == 'X') {
        document.getElementById('instruct').innerHTML = 'X wins';
        a = 1;
    }



    if (a1 == 'O' && a2 == 'O' && a3 == 'O') {
        document.getElementById('instruct').innerHTML = 'O wins';
        a = 1;
    }
    if (a4 == 'O' && a5 == 'O' && a6 == 'O') {
        document.getElementById('instruct').innerHTML = 'O wins';
        a = 1;
    }
    if (a7 == 'O' && a8 == 'O' && a9 == 'O') {
        document.getElementById('instruct').innerHTML = 'O wins';
        a = 1;
    }

    if (a1 == 'X' && a4 == 'X' && a7 == 'X') {
        document.getElementById('instruct').innerHTML = 'X wins';
        a = 1;
    }
    if (a2 == 'X' && a5 == 'X' && a8 == 'X') {
        document.getElementById('instruct').innerHTML = 'X wins';
        a = 1;
    }
    if (a3 == 'X' && a6 == 'X' && a9 == 'X') {
        document.getElementById('instruct').innerHTML = 'X wins';
        a = 1;
    }



    if (a1 == 'O' && a4 == 'O' && a7 == 'O') {
        document.getElementById('instruct').innerHTML = 'O wins';
        a = 1;
    }
    if (a2 == 'O' && a5 == 'O' && a8 == 'O') {
        document.getElementById('instruct').innerHTML = 'O wins';
        a = 1;
    }
    if (a3 == 'O' && a6 == 'O' && a9 == 'O') {
        document.getElementById('instruct').innerHTML = 'O wins';
        a = 1;
    }


    if (a1 == 'X' && a5 == 'X' && a9 == 'X') {
        document.getElementById('instruct').innerHTML = 'X wins';
        a = 1;
    }
    if (a3 == 'X' && a5 == 'X' && a7 == 'X') {
        document.getElementById('instruct').innerHTML = 'X wins';
        a = 1;
    }
    
    if (a1 == 'O' && a5 == 'O' && a9 == 'O') {
        document.getElementById('instruct').innerHTML = 'O wins';
        a = 1;
    }
    if (a3 == 'O' && a5 == 'O' && a7 == 'O') {
        document.getElementById('instruct').innerHTML = 'O wins';
        a = 1;
    }

    if (a == 1) {
        document.getElementById('players').innerHTML = "play again";
        document.getElementById("players").disabled = false;
        document.getElementById("bt1").disabled = true;
        document.getElementById("bt2").disabled = true;
        document.getElementById("bt3").disabled = true;
        document.getElementById("bt4").disabled = true;
        document.getElementById("bt5").disabled = true;
        document.getElementById("bt6").disabled = true;
        document.getElementById("bt7").disabled = true;
        document.getElementById("bt8").disabled = true;
        document.getElementById("bt9").disabled = true;
        document.getElementById("bt1").innerHTML = '-';
        document.getElementById("bt2").innerHTML = '-';
        document.getElementById("bt3").innerHTML = '-';
        document.getElementById("bt4").innerHTML = '-';
        document.getElementById("bt5").innerHTML = '-';
        document.getElementById("bt6").innerHTML = '-';
        document.getElementById("bt7").innerHTML = '-';
        document.getElementById("bt8").innerHTML = '-';
        document.getElementById("bt9").innerHTML = '-';
    }
    return a;
}
function checkdraw()
{
    var a;
    var a1 = document.getElementById("bt1").textContent;
    var a2 = document.getElementById("bt2").textContent;
    var a3 = document.getElementById("bt3").textContent;
    var a4 = document.getElementById("bt4").textContent;
    var a5 = document.getElementById("bt5").textContent;
    var a6 = document.getElementById("bt6").textContent;
    var a7 = document.getElementById("bt7").textContent;
    var a8 = document.getElementById("bt8").textContent;
    var a9 = document.getElementById("bt9").textContent;
    if(a1!='-'&&a2!='-'&&a3!='-'&&a4!='-'&&a5!='-'&&a6!='-'&&a7!='-'&&a8!='-'&&a9!='-')
    {
        a=checkwin();
        
    }
    if(a==0)
    {
        document.getElementById('players').innerHTML = "play again";
        document.getElementById('instruct').innerHTML = 'Its a draw';
        document.getElementById("players").disabled = false;
        document.getElementById("bt1").disabled = true;
        document.getElementById("bt2").disabled = true;
        document.getElementById("bt3").disabled = true;
        document.getElementById("bt4").disabled = true;
        document.getElementById("bt5").disabled = true;
        document.getElementById("bt6").disabled = true;
        document.getElementById("bt7").disabled = true;
        document.getElementById("bt8").disabled = true;
        document.getElementById("bt9").disabled = true;
        document.getElementById("bt1").innerHTML = '-';
        document.getElementById("bt2").innerHTML = '-';
        document.getElementById("bt3").innerHTML = '-';
        document.getElementById("bt4").innerHTML = '-';
        document.getElementById("bt5").innerHTML = '-';
        document.getElementById("bt6").innerHTML = '-';
        document.getElementById("bt7").innerHTML = '-';
        document.getElementById("bt8").innerHTML = '-';
        document.getElementById("bt9").innerHTML = '-';
    }
}