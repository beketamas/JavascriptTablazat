function tablaKeszit(){
    let sorok_oszlopok_szam = document.getElementById("csuzska_sorok_oszlopok_szama").value;
    let tabla = document.getElementById("tabla");
    let szelesseg = document.getElementById("csuszka_meret").value;
    tabla.innerHTML = "";
    for (let index_tr = 0; index_tr < sorok_oszlopok_szam; index_tr++) {
        let uj_tr = document.createElement("tr");
        for (let index_td = 0; index_td < sorok_oszlopok_szam; index_td++) {
            let uj_td = document.createElement("td");
            uj_td.style.width = szelesseg+"px";
            uj_td.style.height = szelesseg+"px";
            if (index_tr % 2 === 0) {
                
                if (index_td % 2 === 0) {
                    uj_td.style.backgroundColor = "red";
                    uj_td.id="id_red"
                }
                else{
                    uj_td.style.backgroundColor = "blue";
                    uj_td.id="id_blue"
                }
            }
            else{
                if (index_td % 2 === 0) {
                    uj_td.style.backgroundColor = "blue";
                    uj_td.id="id_blue"
                }
                else{
                    uj_td.style.backgroundColor = "red";
                    uj_td.id="id_red"
                }
            }
            //uj_td.onclick = function(){SzintValt()};
            uj_tr.appendChild(uj_td);
        }
        tabla.appendChild(uj_tr);
    }
}
/*
function SzintValt(x){
    document.getElementById(x.id).style.backgroundColor = "white";
}
*/