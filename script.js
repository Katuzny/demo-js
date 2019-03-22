
function numberSelect(idCible){
	var nombre = document.getElementsByName("nombre"+idCible)[0].value;
	return nombre;
}

function creeTableau(number) {
	var tableau = [];
	for (var i = 0 ; i < number ; i++) {
		var nom = prompt("nom du joueur "+ (i+1) + " ?");
		tableau.push(nom +" (" + (i+1)+")");
	}
	return tableau;
}
 
function afficheHTML (idCible){
	var htmltableau = document.getElementById("tableau" + idCible);
	var tableau = creeTableau(numberSelect(idCible));
	var content = "";
	for(var i=0; i < tableau.length ; i++){
		content += "<tr><td>";
		content += i+1; 
		content += "</td><td>"; 
		content += tableau[i];
		content += "</td></tr>";
	}
	htmltableau.innerHTML = content;
} 

function removeHTML (idCible) {
	var htmltableau = document.getElementById("tableau" +idCible);
	htmltableau.innerHTML = "";
}

