let data = document.querySelector('input[name="select"]:checked');



function displayData() {
    data = document.querySelector('input[name="select"]:checked').value;
    document.getElementById("selection1").innerHTML = data;
    event.preventDefault();
    document.getElementById("card1").style.display="none";
    document.getElementById("card2").style.display="block";
}

