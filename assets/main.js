// // let us1Tijera = document.querySelector('#tijera');
// // let us1Papel = document.querySelector('#papel');
// // let us1Piedra = document.querySelector('#piedra');

// let usuario;

// usuario = prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2", 0)



// const papel = false;
// const tijera = 'tijera';
// const piedra = 'piedra';
// function rial(){
//     document.querySelector('#tijera').papel(true)
// }
// function real(){
//     if(papel === true){
//         console.log("11111")
//     }
// }
// real()
// const computer = [papel,piedra,tijera]

// // var juego = new chimbupapas(tijera,computer);
// // juego.rival();
// // juego.imprime();

// class chimbupapas{
//     constructor(us1,computer = []){
//         this.us1 = us1;        
//         this.computer = computer;
        
         
//     }x

//     rival(){
       
//           let s = this.computer[Math.floor(Math.random() * this.computer.length)];
//          document.write(s)
//          switch(true){
//             case(this.us1 === papel && s === tijera):
//                 console.log("perdio");
//                 break;
//             case(this.us1 === tijera && s === papel):
//                 console.log("gano");
//             break;
//             case(this.us1 === papel && s === piedra):
//                 console.log("gano");
//             break;
//             case(this.us1 === piedra && s === papel):
//                 console.log("perdio");
//             break;
//             case(this.us1 === tijera && s === piedra):
//             console.log("lose");
//             break;
//             case(this.us1 === piedra && s === tijera):
//             console.log("win");
//             break;
//             default:
//                 console.log("empate")
//                 break;
//          }
      
//     }
   
//     imprime(){
//       console.log(this.computer)
   
      
     
//     }
// }

// var juego = new chimbupapas(tijera,computer);
// juego.rival();
// juego.imprime();

function patito(minimo, maximo)
{
    var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
    return numero;
}

var piedra = 0;
var papel = 1;
var tijera = 2;

var opciones = ["Piedra", "Papel", "Tijera"];

var opcionUsuario;
var opcionMaquina = patito(0,2);

opcionUsuario = prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2", 0);

document.write("<p>Tu Elegiste</p> " + opciones[opcionUsuario]+ "<br>");
document.write("la computadora  eligió <p>" + opciones[opcionMaquina]+'</p><br>');

if(opcionUsuario == piedra)
{
    if(opcionMaquina == piedra)
    {
      
        document.write("Empate!");
    }
    else if(opcionMaquina == papel)
    {
        document.write("Perdiste :( ");
    }
    else if(opcionMaquina == tijera)
    {
        document.write("Ganaste!");
    }
}
else if(opcionUsuario == papel)
{
    if(opcionMaquina == piedra)
    {
        document.write("Ganaste!");
    }
    else if(opcionMaquina == papel)
    {
        document.write("Empate!");
    }
    else if(opcionMaquina == tijera)
    {
        document.write("Perdiste!");
    }
}
else if(opcionUsuario == tijera)
{
    if(opcionMaquina == piedra)
    {
        document.write("Perdiste!");
    }
    else if(opcionMaquina == papel)
    {
        document.write("Ganaste!");
    }
    else if(opcionMaquina == tijera)
    {
        document.write("Empate!");
    }
}
else
{
    document.write("¿Pos qué carajo?");
}