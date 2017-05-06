function Misquad(img,nombre,apellido,edad,hobbies,hobbies2,hobbies3){
	this.img = img;
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.hobbies = hobbies;
	this.hobbies2 = hobbies2;
	this.hobbies3 = hobbies3;
}

var fotoFran = new Misquad()
fotoFran.src = "http://quebolu.com/uploads/meme1419396805gen.png";


var fran = new Misquad("Francisca","Ojeda",28,"Roller derby", "Lettering", "Juegos de mesa");
var cote = new Misquad("María José","Pozo",31,"Bailar","Comer","Dormir");
var mariajose = new Misquad("María José","Rodriguez",32,"Ver series","Bailar","Leer");
var caro = new Misquad("Carolina","Tapia",27,"Trekking", "Leer" , "Tejer");
var camila = new Misquad("Camila","Saez",24,"Origami","Viajar","Comprar cosas en Aliexpress");
var val = new Misquad("Valentina","Saavedra",26,"Medicina autogestiva","Hacer magias","Hacerse tatuajes");
var marion = new Misquad("Marion","Castillo",29,"Caminar","Hacer series","Pintar");
var antonia = new Misquad("Antonia","Cerda",23,"Diseñar", "Ver series", "Lettering");


var arrusuario = [];

arrusuario.push(fotoFran,fran,cote,mariajose,caro,camila,val,marion,antonia);

arrusuario.forEach(function(ele){
	var divlistasquad = document.getElementById("listasquad");
	var usuario = document.createElement("div");
	divlistasquad.appendChild(usuario);
	//var dentroDiv = document.createTextNode(info);
	
	var areatexto = document.getElementById("areatexto");
	var cajatexto = document.createElement("textarea");
	var boton = document.createElement("button");

	cajatexto.name = "post";
	cajatexto.maxLength = "5000";
	cajatexto.cols = "80";
	cajatexto.rows = "40";
	areatexto.appendChild(cajatexto);
	areatexto.appendChild(boton);

	var info = (ele.img+ "  " +"<b>Nombre: </b>"+ele.nombre+ " " +
		 ele.apellido+ "<br>" + "<b>Edad : </b>"+  ele.edad+ "<br>"+ "<b>Hobbies : </b> <i>" + "<ul>" + "<li>" + ele.hobbies+ "</li>"+"<li>" +ele.hobbies2+ 
		 "</li>"+ "<li>"+ ele.hobbies3 + "</li></ul></i><br></b>"); 
	divlistasquad.innerHTML += info;

})



var numero=0;
function sumar (){ 
numero++;
return numero;
}
function hacerClick(){
    document.getElementById("caja").innerHTML = sumar();
}