
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

function combientableau(){
	var tableau = prompt('combien de tableau?');
	var content = "";
	for(var i=0; i < tableau; i++){
		content += '<input type="number" name="nombre';
		content += i+1;
		content += '" value="1" min="1" max="3">';
		content += '<button onclick="afficheHTML(';
		content += i+1;
		content += ')">add</button><button onclick="removeHTML(';
		content += i+1;
		content +=')">remove</button>'; 
		content += "<table>"; 
		content += '<tbody id="tableau'
		content += i+1;
		content += '"></tbody>';
		content += "</table>";
	}
	document.body.innerHTML = content + document.body.innerHTML;
}

combientableau();
