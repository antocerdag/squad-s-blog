function Misquad(nombre,apellido,edad,hobbies,hobbies2,hobbies3,id){
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.hobbies = hobbies;
	this.hobbies2 = hobbies2;
	this.hobbies3 = hobbies3;

	this.id = id;
	this.foto = "<img src='assets/img/imguser-0'" + this.id + "'>";
	this.caja = "<input type='text' id='boton" + this.id + "'>"; //aca se ingresa el comentario
	this.boton = "<button id='" + this.id + "' onclick='" + "'>Enviar</button>";
	//this.heart = "<button onclick="sumar()"" + "<i class="fa fa-heart" aria-hidden="true"></i>" + "</button>";
}


var user = new Array(9);
user[0] = new Misquad("Francisca","Ojeda",28,"Roller derby", "Lettering", "Juegos de mesa","1");
user[1] = new Misquad("María José","Pozo",31,"Bailar","Comer","Dormir","2");
user[2] = new Misquad("María José","Rodriguez",32,"Ver series","Bailar","Leer","3");
user[3] = new Misquad("Carolina","Tapia",27,"Trekking", "Leer" , "Tejer","4");
user[4] = new Misquad("Camila","Saez",24,"Origami","Viajar","Comprar cosas en Aliexpress","5");
user[5] = new Misquad("Valentina","Saavedra",26,"Medicina autogestiva","Hacer magias","Hacerse tatuajes","6");
user[6] = new Misquad("Marion","Castillo",29,"Caminar","Hacer series","Pintar","7");
user[7] = new Misquad("Antonia","Cerda",23,"Diseñar", "Ver series", "Lettering","8");
user[8] = new Misquad("Belen","Recabal",27,"Andar en bici","Leer","Ver series","9");




user.forEach(function(ele){
	/*var divlistasquad = document.getElementById("listasquad");
	var usuario = document.createElement("div");
	divlistasquad.appendChild(usuario);*/
	
	var info = document.getElementById("listasquad");

	var infousuarios = (ele.foto +"<br><b>Nombre: </b>" + ele.nombre + "<br><b>Apellido: </b>" + ele.apellido + 
	"<br><b>Edad: </b>" + ele.edad + "<br><b>Hobbies: </b>" + "<ul>" + "<li>" + ele.hobbies + "</li>" + 
	"<li>" + ele.hobbies2 + "</li>" + "<li>" + ele.hobbies3 + "</li>" + "</ul>" + ele.caja +
	 "<br>" + ele.boton+ "<br>"+"<br>");

	info.innerHTML += infousuarios;

})


function Comentarios(id_miembro,comentario,likes){
	this.id_miembro = id_miembro;
	this.comentario = comentario;
	var numero=0;
	this.likes = function sumar(){ 
		numero++;
		return numero;
	};
	
	//this.botonLike = "<button onclick='" + this.likes() + "'></button>";
}
