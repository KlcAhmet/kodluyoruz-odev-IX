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
    tr.classList = "table__info";
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
    if (child.attributes.length == 0) {
        child.setAttribute("disabled", true);
        child.value = "";
    } else {
        child.removeAttribute("disabled");
    }
}


/* Kaydet ve console'a yazdırma */
kaydet.addEventListener("click", function() {
    var katilimcilar = [];

    var degerler = tableTD.querySelectorAll("tr.table__info");
    degerler.forEach(element => {
        var tmp = element.children;
        var check = tmp[4].children[0].checked;
        if (check) {
            if ("" == tmp[3].children[0].value) {
                alert("Id: " + tmp[0].innerText + " sıra numarası girilmedi! Bu yüzden katılımcı listesine eklenmedi.");
            } else {
                var id = tmp[0].innerText;
                var isim = tmp[1].innerText;
                var soyad = tmp[2].innerText;
                var sira = tmp[3].children[0].value;
                console.log(id + " " + isim + " " + soyad + " " + sira);
                katilimcilar.push({ 'id': id, 'isim': isim, 'soyad': soyad, 'sira': sira });
            }
        }
    });
    console.log("---Katılımcılar(array değerleri)---");
    katilimcilar.forEach(element => {
        console.log(element);
    });
});