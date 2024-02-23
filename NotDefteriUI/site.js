const apiUrl = "http://localhost:5293/api/Notlar";
const divNotlar = document.getElementById("notlar");
const frmNot = document.getElementById("frmNot");
const txtBaslik = document.getElementById("baslik");
const txtIcerik = document.getElementById("icerik");
const btnSil = document.getElementById("sil");

let notlar = [];
let seciliNot = null;

function listele() {
    divNotlar.innerHTML = "";

    axios.get(apiUrl).then(res => {
        notlar = res.data;

        for (const not of notlar) {
            const a = document.createElement("a");
            a.not = not;
            a.href = "#"
            a.className = "list-group-item list-group-item-action"
            a.textContent = not.baslik;
            a.onclick = (e) => notuGoster(not);
            divNotlar.append(a)
        }
    })

}

function notuGoster(not) {
    seciliNot = not;
    frmNot.style.display = "block"
    txtBaslik.value = not.baslik;
    txtIcerik.value = not.icerik;
    secimiGuncelle();
}

function secimiGuncelle() {
    divNotlar.childNodes.forEach(el => {
        if (el.not.id == seciliNot?.id) {
            el.classList.add("active");
        }
        else {
            el.classList.remove("active");
        }
    });
}

listele()