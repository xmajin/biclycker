
function myName() {
   var name = prompt("Koks tava vardas?");
   document.getElementById("name").innerHTML = name;
   document.getElementById("tabName").innerHTML = name;
   document.getElementById("button").innerHTML = "CHANGE NAME";
}

var click = 0;
function headClick() {
    click += 1;
    document.getElementById("picHead").innerHTML = "Oy don't click my head, mate! "
     + click + " times clicked.";
    document.getElementById("klikYes").innerHTML = "Yes, " + "clicks: " + click;
}
