var tableTD = document.querySelector("table tbody");
var registerInputs = document.getElementById("register");
var cBox = document.querySelectorAll(".table input[type=checkbox]");
var ekle = document.getElementById("ekle");
var kaydet = document.getElementById("kaydet");

/* Kişi Ekleme */

ekle.addEventListener("click", function() {
    for (var i = 0; i < registerInputs.children.length - 2; i++) {
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
    pCheck.children[0].addEventListener("change", function() {
        checkEvent(pCheck);
    });
    tableTD.appendChild(tr);
    tr.appendChild(id);
    tr.appendChild(ad);
    tr.appendChild(soyad);
    tr.appendChild(sira);
    tr.appendChild(pCheck);
});


/* Checkbutton check kontrolü */
function checkEvent(pCheck) {
    var child = pCheck.parentElement;
    child = child.children[3].children[0];
    console.log(child.attributes);
    if (child.attributes.length == 0) {
        child.setAttribute("disabled", true);
        child.value = "";
    } else {
        child.removeAttribute("disabled");
    }

}


/* Kaydet ve console'a yazdırma */
/* function kaydet() {

} */