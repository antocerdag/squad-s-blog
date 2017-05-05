function Misquad(nombre,apellido,edad,hobbies){
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.hobbies = hobbies;
}

var fran = new Misquad("Francisca","Ojeda",28,"Roller derby");
var cote = new Misquad("María José","Pozo",31,"Bailar");
var mariajose = new Misquad("María José","Rodriguez",32,"Ver series");
var cata = new Misquad("Carolina","Tapia",27,"Trekking");
var camila = new Misquad("Camila","Saez",24,"Origami");
var val = new Misquad("Valentina","Saavedra",26,"Medicina autogestiva");
var marion = new Misquad("Marion","Castillo",29,"Caminar");
var antonia = new Misquad("Antonia","Cerda",23,"Diseñar");

var mostrarfran = document.getElementById("fran");
var mostrarcote = document.getElementById("cote");
var mostrarmariajose = document.getElementById("mariajose");
var mostrarcata = document.getElementById("cata");
var mostrarcamila = document.getElementById("camila");
var mostrarval = document.getElementById("val");
var mostrarmarion = document.getElementById("marion");
var mostrarantonia = document.getElementById("antonia");

var infofran = "<span style='font-size:20px'" + "Nombre : "  + "</style>" + fran.nombre + " " + fran.apellido + "<br>" 
+ "Edad : " + fran.edad + "<br>" + "Hobbies : " + "<ul><li>"+fran.hobbies+"</li></ul>" + "<br>";
mostrarfran.innerHTML = infofran;

var infocote = "<span style='font-size:20px'" + "Nombre : "  + "</style>" + cote.nombre + " " + cote.apellido + "<br>" 
+ "Edad : " + cote.edad + "<br>" + "Hobbies : " + "<ul><li>"+cote.hobbies+"</li></ul>" + "<br>";
mostrarcote.innerHTML = infocote;
 
var infomariajose = "<span style='font-size:20px'"  + "Nombre : "  + "</style>" + mariajose.nombre + " " + mariajose.apellido + "<br>" 
+ "Edad : " + mariajose.edad + "<br>" + "Hobbies : " + "<ul><li>"+mariajose.hobbies+"</li></ul>" + "<br>";
mostrarmariajose.innerHTML = infomariajose;

var infocata = "<span style='font-size:20px'" + "Nombre : "  + "</style>" + cata.nombre + " " + cata.apellido + "<br>" 
+ "Edad : " + cata.edad + "<br>" + "Hobbies : " + "<ul><li>"+cata.hobbies+"</li></ul>" + "<br>";
mostrarcata.innerHTML = infocata;

var infocamila = "<span style='font-size:20px'" + "Nombre : "  + "</style>" + camila.nombre + " " + camila.apellido + "<br>" 
+ "Edad : " + camila.edad + "<br>" + "Hobbies : " + "<ul><li>"+camila.hobbies+"</li></ul>" + "<br>";
mostrarcamila.innerHTML = infocamila;

var infoval = "<span style='font-size:20px'" + "Nombre : "  + "</style>" + val.nombre + " " + val.apellido + "<br>" 
+ "Edad : " + val.edad + "<br>" + "Hobbies : " + "<ul><li>"+val.hobbies+"</li></ul>" + "<br>";
mostrarval.innerHTML = infoval;

var infomarion = "<span style='font-size:20px'" + "Nombre : "  + "</style>" + marion.nombre + " " + marion.apellido + "<br>" 
+ "Edad : " + marion.edad + "<br>" + "Hobbies : " + "<ul><li>"+marion.hobbies+"</li></ul>" + "<br>";
mostrarmarion.innerHTML = infomarion;

var infoantonia = "<span style='font-size:20px'" + "Nombre : "  + "</style>"  + antonia.nombre + " " + antonia.apellido + "<br>" 
+ "Edad : " + antonia.edad + "<br>" + "Hobbies : " + "<ul><li>"+antonia.hobbies+"</li></ul>" + "<br>";
mostrarantonia.innerHTML = infoantonia;

