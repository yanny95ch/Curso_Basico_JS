/*
for in -->  Iterar sobre objetos imnumerables
Objetos = Propiedades que a su vez tienen un valor

arrays, string

item 

for (variable in objeto)
*/

const listaDeCompras = {
    manzanas: 5,
    pera:2,
    natanja:7,
    uva:1
}

for (fruta in listaDeCompras){
    console.log(fruta);
}

for (fruta in listaDeCompras){
    console.log(`${fruta} : ${listaDeCompras[fruta]}`);
}

for (fruta of listaDeCompras){
    console.log(fruta);
}