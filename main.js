

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