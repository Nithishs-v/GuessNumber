let variable = 70;
var cnt = 1;
var fl = 0;

function generateValue() {
    document.getElementById('textmessage').style.display = 'none';
    var answer = document.getElementById('values').value;
    // document.getElementById('display').innerHTML = 'he;;;o';
    if (cnt <= 10) {
        if (answer == variable) {
            if (fl == 0) document.getElementById('display').innerHTML += ' ' + answer;
            document.getElementById('textmessage').innerHTML = 'Correct Answer';
            document.getElementById('textmessage').style.backgroundColor = 'green';
            document.getElementById('textmessage').style.display = 'block';
            document.getElementById('rest').style.display = 'block';
            fl = 1;
        } else if (answer > variable) {
            document.getElementById('textmessage').innerHTML = 'The number is high';
            document.getElementById('textmessage').style.backgroundColor = 'red';
            document.getElementById('textmessage').style.display = 'block';
            document.getElementById('display').innerHTML += ' ' + answer;
        } else if (answer < variable) {
            document.getElementById('textmessage').innerHTML = 'The number is low';
            document.getElementById('textmessage').style.backgroundColor = 'red';
            document.getElementById('textmessage').style.display = 'block';
            document.getElementById('display').innerHTML += ' ' + answer;
        }
    } else {
        document.getElementById('textmessage').innerHTML = 'Limit Exceeded';
        document.getElementById('textmessage').style.backgroundColor = 'red';
        document.getElementById('textmessage').style.display = 'block';
        document.getElementById('rest').style.display = 'block';
    }
    cnt = cnt + 1;
}