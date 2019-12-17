function validaemail(entrada) {
	
	limpamensagens();
	entrada = entrada.trim();
	entrada = entrada.toLowerCase();
	document.getElementById("entrada").value = entrada;
	var erros = new Array();
	invalidcara = new Array(" ", "#", "%", "*", "!", "?", ",","..", "á", "´e", "í", "ó", "ú", "\"", "\\");
	
	if(entrada) {
	    	if(entrada.indexOf("@")== -1) {
			erros.push("Formato Inadequado: Não foi possível encontrar o elemento @");
		    }
			else {
			if(entrada.indexOf("@")== 0) {
			erros.push("Formato Inadequado: Não foi possível encontrar o nome do usuário");	
			}
			else{
			
			   usuario = entrada.substring(0, entrada.indexOf("@"));
				if(usuario.indexOf(".")==0) {
				erros.push("Formato Inadequado: Usuário inválido: '.' no início do usuário");	
				}
				if(usuario.lastIndexOf(".")== (usuario.length -1)) {
				erros.push("Formato Inadequado: Usuário inválido: '.' no final do usuário");
				}
				servidor2 = entrada.substring(entrada.indexOf("@")+1, entrada.length);
				if(servidor2.indexOf(".")== 0) {
				erros.push("Formato Inadequado: Usuário inválido: '.' no começo do servidor");
				}
				if(servidor2.lastIndexOf(".")== (servidor2.length-1)) {
				erros.push("Formato Inadequado: Usuário inválido: '.' no final do servidor");
				}
			if(entrada.indexOf("@")==(entrada.length -1)) {
			erros.push("Formato Inadequado: Não foi possível encontrar o nome do servidor");	
			}
			if(entrada.indexOf("@")!= entrada.lastIndexOf("@")) {
			erros.push("Formato Inadequado: O e-mail contém mais de um caracter @");	
			}
			}
			}
			for(y=0; y<invalidcara.length; y++){
		    if(entrada.indexOf(invalidcara[y])!= -1) {
			erros.push("Formato Inadequado: Caracter inválido:" + invalidcara[y]);	
			}
			}
			if((entrada.length) - entrada.indexOf("@") < 8) {
			erros.push("Formato Inadequado: Mínimo de 8 caracteres de servidor");	
			}
			if(entrada.lastIndexOf("@") < 3) {
			erros.push("Formato Inadequado: Mínimo de 3 caracteres de usuário");	
			}
			}
			else{
		    erros.push("Por favor preencha o campo e-mail") ;
			}
			
	    if(erros.length) {
		for(x=0; x<erros.length;x++) {
			diverro = document.createElement("div");
			diverro.innerHTML = erros[x];
			diverro.className= "errostyle";
			document.getElementById("formulario").appendChild(diverro);
		}
	    }
		else {
			divsucess = document.createElement("div");
			divsucess.innerHTML = "Valid E-mail";
			divsucess.className = "sucess";
			document.getElementById("formulario").appendChild(divsucess);
        }
}
	
    function limpaerros() {
	erros = document.getElementById("formulario").getElementsByClassName("errostyle");
	for(x = (erros.length -1); x >= 0; x--) {
	document.getElementById("formulario").removeChild(erros[x]);
	}
	}
		 
		 function limpamensagens() {
			 limpaerros();
			 sucess = document.getElementById("formulario").getElementsByClassName("sucess");
			 for(x = (sucess.length -1); x >= 0; x--) {
				 document.getElementById("formulario").removeChild(sucess[x]);
			 }
		 }
