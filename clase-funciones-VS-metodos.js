//Capacidades que tienen las finciones al igual que otros objetos

//1.Pasar funciones como argumentos --> Callback: llamamos a la Funcion b y llamamos como argumento a la  primera funcion a
function a() {};
function b(a) {};
b(a);


//Retornar funciones
function a () {
    function b (){}
    return b
}

//Asignar funciones a variables --> Expresion de Funcion
const a = function (){}


//Propiedades y Metodos 
function a (){}
const obj = {}
a.call(obj)

//Anidar Funciones --> Nested Functions
function a(){
    function b () {
      function c (){
      }  
      c()
    }
    b()
}
a()
 
//Es posible almacenar funciones en objetos: Metodo
const rocket = {
    name: 'Falcon 9',
    launchMessage: function launchMessage (){
        console.log('❤️‍🔥❤️‍🔥❤️‍🔥');
    }
}
rocket.launchMessage()
