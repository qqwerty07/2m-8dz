
function plus() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('result').innerHTML = num1 + num2;
}

function minus() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('result').innerHTML = num1 - num2;
}

function umnoj() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('result').innerHTML = num1 * num2;
}

function delenie() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    if (num2 !== 0) {
        document.getElementById('result').innerHTML = num1 / num2;
    } else {
        document.getElementById('result').innerHTML = "невозможно делить на 0";
    }
}

function stepen() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    
    document.getElementById('result').innerHTML = Math.pow(num1, num2);
}

function koren() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    
    document.getElementById('result').innerHTML = Math.pow(num1, 1 / num2);
}