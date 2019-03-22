
function numberSelect(){
	var nombre = document.getElementsByName("nombre")[0].value;
	return nombre;
}

function creeTableau() {
	var number = numberSelect();
	var tableau = [];
	for (var i = 0 ; i < number ; i++) {
		var nom = prompt("nom du joueur "+ (i+1) + " ?");
		if (nom == null)

		tableau.push(nom +" (" + (i+1)+")");
	}
	return tableau;
}
 
function afficheHTML (){
	var htmltableau = document.getElementById("tableau");
	var tableau = creeTableau();
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

function removeHTML () {
	var htmltableau = document.getElementById("tableau");
	htmltableau.innerHTML = "";
}

