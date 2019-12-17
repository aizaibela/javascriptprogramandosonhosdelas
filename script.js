function criarparagrafo() {
	paragrafo = document.createElement("p");
	paragrafo.innerHTML = "화이팅";
	paragrafo.style.color = "red";
	paragrafo.style.fontWeight ="bold";
	document.body.appendChild(paragrafo);
}
function marcarinicio() {
	document.getElementById("inicio").style.color = "green";
	document.getElementById("inicio").style.display = "none"
}
	
	function removerparagrafo() {
		paragrafos = document.getElementsByTagName("p");
		ultimo = paragrafos.length -1;
		if(ultimo >=0){
		document.body.removeChild(paragrafos[ultimo]);
		}
	
}

function marcarparagrafo() {
	
	paragrafos = document.getElementsByTagName("p");
	for(x=0; x< paragrafos.length; x++) {
		paragrafos[x].style.color = "orange";
	}
	
	
}

function alterarimagem() {
	
   /*  imagem = document.getElementsByTagName("img");
      imagem[0].src = "urucumflor.jpg"	
	*/
	
	valor = document.getElementById("imagem").src;
if(valor.includes("1493828b9a657c106a0387de2165ecb9.gif")) {
	document.getElementById("imagem").src="0df2bf70a28b806f7755065634921399.gif"
}
else{
	document.getElementById("imagem").src="1493828b9a657c106a0387de2165ecb9.gif"
}
}
	