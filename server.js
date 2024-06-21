 //la palabra const me asegura poder asignar la variable una vez
const express = require('express');
const path = require('path');

//Aca inicia el server, llamado app  
const app = express(); //El framework(node) tiene un constructor definido express() el cual se encarga de inicializar los procesos que se necesitan.
const PORT = 3000; // Si el puerto queda en una constante, es facil de acceder por que esta fijo. (Poner el puerto como const es opcional)

app.use(express.urlencoded({ extended: true })); //El metodo use() es un metodo que recibe configuracion

app.get('/', (req, res) => {
    console.log('Loading Home...');
    res.send('Hello World');
}); // Cuando el cliente haga un get del servidor, de la ruta (/), el servidor cargara el mensaje loading home y se le devolvera el hello world

app.listen(PORT, () => {
    console.log('✅ Server is running on port ' + PORT );
});








/*
//Arrow Functions vs Regular Functions 
//Regular
function sayMyName(name, lastName){
    console.log("Your name is" + name + " "+ lastName);
    //En Js la clausula this. no se refiere a un objeto se refiere a la funcion, en este caso si utilizo un this.ID no se refiere a eso se refiere a sayMyName. 
    //(En Js es practicamente lo mismo un objeto y un metodo).
}
sayMyName("Walter" , "White");
//const es constante y let es una variable en Js

//Estas tres funciones son practicamente iguales, muy similares, las diferencias que tienen es con respecto al contexto.
function screamMyName (name, loud) {
    console.log(name);
};
let screamMyName = function(name, loud) {
    console.log(name);
}; //Esto es una funcion anonima
let screamMyName = (name, loud) => {
    console.log(name);
}; // (=>) significa Goes to, pero popularmente se le conoce como Arrow
*/