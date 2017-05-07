function Misquad(img,nombre,apellido,edad,hobbies,hobbies2,hobbies3,id){
	this.img = img;
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.hobbies = hobbies;
	this.hobbies2 = hobbies2;
	this.hobbies3 = hobbies3;

	this.id = id;
	this.foto = "<img src='assets/imgs/avataressquad-0" + this.id + "_360.png'>";
	this.caja = "<input type='text' id='boton" + this.id + "'>"; //aca se ingresa el comentario
	this.boton = "<button id='" + this.id + "' onclick='" + /*nuevoComentario.likes() +*/ "'>Comenta ... </button>"; //boton dejar comentario
}



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
	
	var info = document.getElementById("miembro" + arrusuario.indexOf(ele).toString());

	var info = (ele.img+ "  " +"<b>Nombre: </b>"+ele.nombre+ " " +
		 ele.apellido+ "<br>" + "<b>Edad : </b>"+  ele.edad+ "<br>"+ "<b>Hobbies : </b> <i>" + "<ul>" + "<li>" + ele.hobbies+ "</li>"+"<li>" +ele.hobbies2+ 
		 "</li>"+ "<li>"+ ele.hobbies3 + "</li></ul></i><br></b>"); 
	divlistasquad.innerHTML += info;

})


function Comentarios(id_miembro,comentario,likes){
	this.id_miembro = id_miembro;
	this.comentario = comentario;
	this.likes = function(){
		var numero = 0;
		return (numero + 1);
	};
	this.botonLike = "<button onclick='" + this.likes() + "'></button>";
}
