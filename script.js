/***
* recupère valeur du input nombre+id
***/
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
	//va chercher l'element tbody avec id tableau1
	var tableau = creeTableau(numberSelect(idCible));
	//var tableau = ["coucou1", "coucou2", "coucou3"];
	var content = "";
	//variable vide en attente de remplissage
	//pour 0; si inferieur a 3; 0+1 (i = i + 1 ou i += 1 ou i++) faire
	for(var i=0; i < tableau.length ; i++){
		//i=0 content = ""
		content += "<tr><td>";
			// content = "<tr><td>"
			//
		content += i+1;
			// content = content + (0 + 1)
			// content = "<tr><td>" + (0 + 1)
			// content =  "<tr><td>1"
		content += "</td><td>";
			// content = content + "</td><td>"
			// content = "<tr><td>1" + "</td><td>"
			// content = "<tr><td>1</td><td>"
		content += tableau[i];
			// content = content + tableau[i]
			// content = "<tr><td>1</td><td>" + tableau[0]
			// content = "<tr><td>1</td><td>" + "coucou1"
			// content = "<tr><td>1</td><td>coucou1"
		content += "</td></tr>";
			// content = content + "</td></tr>"
			// content = "<tr><td>1</td><td>coucou1" + "</td></tr>"
				// //i=0 content = "<tr><td>1</td><td>coucou1</td></tr>"	
			 //    // i++
			 //    //pour 1; si inferieur a 3 i++
			 //    //i=1
			 //    //content = "<tr><td>1</td><td>coucou1</td></tr>"
			 //    content += "<tr><td>";
				// 	// content = content + "<tr><td>"
				// 	// content = "<tr><td>1</td><td>coucou1</td></tr>" + "<tr><td>"
				// 	// content = "<tr><td>1</td><td>coucou1</td></tr><tr><td>"
				// content += i+1;
				// 	// content = content + (i+1)
				// 	// content = "<tr><td>1</td><td>coucou1</td></tr><tr><td>" + (1 + 1)
				// 	// content = "<tr><td>1</td><td>coucou1</td></tr><tr><td>2" 
				// content += "</td><td>";
				// 	// content = content + "</td><td>" 
				// 	// content = "<tr><td>1</td><td>coucou1</td></tr><tr><td>2" + "</td><td>"
				// 	// content = "<tr><td>1</td><td>coucou1</td></tr><tr><td>2</td><td>"
				// content += tableau[i];
				// 	// content = content + tableau[i]
				// 	// content = "<tr><td>1</td><td>coucou1</td></tr><tr><td>2</td><td>" + tableau[1]
				// 	// content = "<tr><td>1</td><td>coucou1</td></tr><tr><td>2</td><td>" + "coucou2"
				// 	// content = "<tr><td>1</td><td>coucou1</td></tr><tr><td>2</td><td>coucou2"
				// content += "</td></tr>";
				// 	// content = content + "</td></tr>"
				// 	// content = "<tr><td>1</td><td>coucou1</td></tr><tr><td>2</td><td>coucou2" + "</td></tr>"
				// 	// content = "<tr><td>1</td><td>coucou1</td></tr><tr><td>2</td><td>coucou2</td></tr>"
				// 	//i++
				// 	//pour 2; si inferieur a 3;
				// 	// i = 2
				// 	// content = "<tr><td>1</td><td>coucou1</td></tr><tr><td>2</td><td>coucou2</td></tr>"
				// 		content += "<tr><td>";
				// 	// content = content + "<tr><td>"
				// 	// content = "<tr><td>1</td><td>coucou1</td></tr><tr><td>2</td><td>coucou2</td></tr>"  + "<tr><td>"
				// 	// content = "<tr><td>1</td><td>coucou1</td></tr><tr><td>2</td><td>coucou2</td></tr><tr><td>"
				// content += i+1;
				// 	// content = content + (i+1)
				// 	// content = "<tr><td>1</td><td>coucou1</td></tr><tr><td>2</td><td>coucou2</td></tr><tr><td>" + (2 +1)
				// 	// content = "<tr><td>1</td><td>coucou1</td></tr><tr><td>2</td><td>coucou2</td></tr><tr><td>3"
				// content += "</td><td>";
				// 	// content = content + "</td><td>"
				// 	// content = "<tr><td>1</td><td>coucou1</td></tr><tr><td>2</td><td>coucou2</td></tr><tr><td>3" + "</td><td>"
				// 	// content = "<tr><td>1</td><td>coucou1</td></tr><tr><td>2</td><td>coucou2</td></tr><tr><td>3</td><td>"
				// content += tableau[i];
				// 	// content = content + tableau[i]
				// 	// content = "<tr><td>1</td><td>coucou1</td></tr><tr><td>2</td><td>coucou2</td></tr><tr><td>3</td><td>" + tableau[2]
				// 	// content = "<tr><td>1</td><td>coucou1</td></tr><tr><td>2</td><td>coucou2</td></tr><tr><td>3</td><td>" + "coucou3"
				// 	// content = "<tr><td>1</td><td>coucou1</td></tr><tr><td>2</td><td>coucou2</td></tr><tr><td>3</td><td>coucou3"
				// content += "</td></tr>";
				// 	// content = content + "</td></tr>"
				// 	// content = "<tr><td>1</td><td>coucou1</td></tr><tr><td>2</td><td>coucou2</td></tr><tr><td>3</td><td>coucou3" + "</td></tr>"
				// 	// content = "<tr><td>1</td><td>coucou1</td></tr><tr><td>2</td><td>coucou2</td></tr><tr><td>3</td><td>coucou3</td></tr>"
				// 	// i++ = 3	
				// 	////pour 3; si inferieur a 3;
	}
	 //content = "<tr><td>1</td><td>coucou1</td></tr><tr><td>2</td><td>coucou2</td></tr><tr><td>3</td><td>coucou3</td></tr>"
	htmltableau.innerHTML = content;
	//<tbody id="tableau1"> content </tbody>
	//<tbody id="tableau1"><tr><td>1</td><td>coucou1</td></tr><tr><td>2</td><td>coucou2</td></tr><tr><td>3</td><td>coucou3</td></tr></tbody>
} 

function removeHTML (idCible) {
	var htmltableau = document.getElementById("tableau" +idCible);
	htmltableau.innerHTML = "";
}

function removetableau() {
	var tableaux = document.getElementsByClassName("tableau");
	var tailletableau = tableaux.length; 
	document.body.removeChild(tableaux[tailletableau - 1]); 
}

function removeHTMLensemble(cible) {
	document.body.removeChild(cible.parentNode);
}

function combienTableau(){
	var tableau = prompt('combien de tableau?');
	var content = "";
	for(var i=0; i < tableau; i++){
		content += '<div class="tableau"><input type="number" name="nombre';
		content += i+1;
		content += '" value="1" min="1" max="3">';
		content += '<button onclick="afficheHTML(';
		content += i+1;
		content += ')">add</button><button onclick="removeHTML(';
		content += i+1;
		content +=')">remove</button>';
		content += '<button onclick="removeHTMLensemble(this)">supprime cet ensemble</button>';  
		content += "<table>"; 
		content += '<tbody id="tableau'
		content += i+1;
		content += '"></tbody>';
		content += "</table></div>";
	}
	document.body.innerHTML = content + document.body.innerHTML;
}





































