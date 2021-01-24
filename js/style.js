var tableTD = document.querySelector("table tbody");
var registerInputs = document.getElementById("register");
var cBox = document.querySelectorAll(".table input[type=checkbox]");


/* Kişi Ekleme */
function addRow() {
    for (var i = 0; i < registerInputs.children.length - 1; i++) {
        var child = registerInputs.children[i];
        if (child.value === "") {
            alert(child.id + " Boş olamaz");
            return;
        }
    }
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    var id = document.createElement("td");
    id.innerText = registerInputs.children[0].value;
    var ad = document.createElement("td");
    ad.innerText = registerInputs.children[1].value;
    var soyad = document.createElement("td");
    soyad.innerText = registerInputs.children[2].value;
    var sira = document.createElement("td");
    sira.appendChild(document.createElement("input"));
    sira.children[0].setAttribute("disabled", true);
    var pCheck = document.createElement("td");
    pCheck.appendChild(document.createElement("input"));
    pCheck.children[0].setAttribute("type", "checkbox");
    tableTD.appendChild(tr);
    tr.appendChild(id);
    tr.appendChild(ad);
    tr.appendChild(soyad);
    tr.appendChild(sira);
    tr.appendChild(pCheck);
}