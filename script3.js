function validacep(entrada) {
	
	valor = entrada.value;
	valor = valor.replace("-","");
	valor = valor.replace(".","");
	entrada.className= "";
	document.getElementById("alerta").style.display = "none";
	if(valor.length >= 5) {
		prefixo = valor.substring(0,5);
		sufixo = valor.substring(5, valor.length);
		if(isNaN(prefixo) || isNaN(sufixo)) {
			entrada.className = "erro";
			document.getElementById("alerta").style.display = "block";
		}
		else{
		entrada.value= prefixo + "-" + sufixo;
		if(valor.length >= 8) {
		 entrada.className = "sucesso";
		}
	}
	
	}
			

}	
function calculadata() {
	  dataatual = new Date();
	  var erros = new Array();
	  data = document.getElementById("date1").value;
	  alert(data);
	  if(data == ""){
		 erros.push("Formato Inadequado: Forneça uma data");
	  }
	  else {
	  data = new Date(data);
	  alert(data);
	  }
	// if(data.value < 
	   /* document.getElementById("resultado").innerHTML = dataatual + "<br>";
		  diferença = x /1000/60/60/24/365       */
		
}