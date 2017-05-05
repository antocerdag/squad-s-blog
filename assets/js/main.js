function Misquad(nombre,apellido,edad,hobbies,hobbies2,hobbies3){
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.hobbies = hobbies;
	this.hobbies2 = hobbies2;
	this.hobbies3 = hobbies3;
}

var fran = new Misquad("Francisca","Ojeda",28,"Roller derby", "Lettering", "Cocinar Pizza");
var cote = new Misquad("María José","Pozo",31,"Bailar","Comer","Dormir");
var mariajose = new Misquad("María José","Rodriguez",32,"Ver series","Bailar","Leer");
var caro = new Misquad("Carolina","Tapia",27,"Trekking", "leer" , "tejer");
var camila = new Misquad("Camila","Saez",24,"Origami","Viajar","Comprar cosas en Aliexpress");
var val = new Misquad("Valentina","Saavedra",26,"Medicina autogestiva","Hacer magias","Hacerse tatuajes");
var marion = new Misquad("Marion","Castillo",29,"Caminar","Hacer series","Pintar");
var antonia = new Misquad("Antonia","Cerda",23,"Diseñar", "Ver series", "Lettering");


var arrusuario = [];

arrusuario.push(fran,cote,mariajose,caro,camila,val,marion,antonia);

arrusuario.forEach(function(ele){
	var divlistasquad = document.getElementById("listasquad");
	var info = ("<b>Nombre: </b>"+ele.nombre+ " " +
		 ele.apellido+ "<br>" + "<b>Edad : </b>"+  ele.edad+ "<br>"+ "<b>Hobbies : </b> <i>" + "<ul>" + "<li>" + ele.hobbies+ "</li>"+"<li>" +ele.hobbies2+ 
		 "</li>"+ "<li>"+ ele.hobbies3 + "</li></ul></i><br></b>"); 
	divlistasquad.innerHTML += info;
})
