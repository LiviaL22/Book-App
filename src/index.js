
async function onclickSearch() {
    let txt = document.getElementById("barra").value
    if (txt == "") {
        alert("find your category \n reading makes you free"); //type something
        return false;
    }
    let openBo = await fetch //book list
    ("https://openlibrary.org/subjects/" + txt + ".json");
    let obj = await openBo.text();
    let x = JSON.parse(obj);
    let target = document.getElementById("target");
    let out = "<table id='lista'>"

    for (let i = 0; i < x.works.length; i++) {
        out += "<tr onclick='info(this)' data-key='" + x.works[i].key + "'><td>" +
            x.works[i].title + "</td><td>";
        for (let j = 0; j < x.works[i].authors.length; j++) {
            out += x.works[i].authors[j].name + "<br>";
        }
        out += "</td></tr>";
    }
    out += "</table>";
    target.innerHTML = out;
}
async function info(id) { //description
    let key = id.getAttribute("data-key");
    let openBo = await fetch("https://openlibrary.org" + key + ".json");
    let obj = await openBo.text();
    let x = JSON.parse(obj);
    let des = document.getElementById("des");

    if (typeof x.description == "object") {
        des.innerHTML = x.description.value;
    } else {
        des.innerHTML = x.description;
    }
    des.style.visibility = "visible";

}