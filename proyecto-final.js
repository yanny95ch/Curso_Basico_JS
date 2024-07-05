const userDataBase = [
    {
        username: 'andres',
        password: '123'
    },
    {
        username: 'caro',
        password: '456'
    },
    {
        username: 'mariana', 
        password:'789'
    }
]

const userTineLine = [
    {
        username: 'Estefany', 
        password:'Me encanta javaScript'
    },
    {
        username: 'Oscar', 
        password:'Developer es lo mejor'
    },
    {
        username: 'Mariana', 
        password:'A mi me gusta mas el cafe que el te'
    },
    {
        username: 'Andres', 
        password:'Yo hoy no quiero trabajar'
    }

]

const username = prompt('Cual es tu usuario?')
const password = prompt('Cual es tu clave?')

function usuarioExistente (username, password){
    for (let i = 0 ; i < userDataBase.length; i++) {
        if (
            userDataBase[i].username === username && 
            userDataBase[i].password === password
        ) {
           return true; 
        }
    }
    return false;
}

function signIn (username, password){
    if(usuarioExistente){
        alert(`Bienvenido a tu cuenta ${username}`);
        console.log(userTineLine)
    } else {
        alert('Uuuup Usuario o clave incorrectos')
    }
}
signIn (username,password);