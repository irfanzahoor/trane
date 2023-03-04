const getResult = () => {
    let math = document.getElementById('math').value;
    let physics = document.getElementById('physics').value;
    let english = document.getElementById('english').value;
    let urdu = document.getElementById('urdu').value;
    let computer = document.getElementById('computer').value;
    let pakstudy = document.getElementById('pakstudy').value;

    if(document.getElementsByTagName('input').value==""){
        alert("Please Enter Some Value");
    }
    let total = parseFloat(math) + parseFloat(physics) + parseFloat(english) + parseFloat(urdu) + parseFloat(computer)+ parseFloat(pakstudy);
    let percentage = (total * 100) / 495;

    if (percentage >= 95) {
        document.getElementById("grade").innerHTML = "A+";
    }
    else if (percentage >= 90) {
        document.getElementById("grade").innerHTML = "A";

    }
    else if (percentage >= 85) {
        document.getElementById("grade").innerHTML = "B+";

    }
    else if (percentage >= 80) {
        document.getElementById("grade").innerHTML = "B";

    }
    else if (percentage >= 60) {
        document.getElementById("grade").innerHTML = "B+";

    }
    else if (percentage >= 55) {
        document.getElementById("grade").innerHTML = "C+";

    }
    else if (percentage >= 40) {
        document.getElementById("grade").innerHTML = "C";

    }
    else if (percentage >= 30) {
        document.getElementById("grade").innerHTML = "D+";

    }
    else {
        document.getElementById("grade").innerHTML = "You Are Failed";

    }


    document.getElementById('percentage').innerHTML = percentage;
    document.getElementById('total').innerHTML = total;
}