function listerInspecteur()
{
	var employe = []; 
	var activite_real = 0;
	var delta_color =  '"color:#FF4F4F"'; // FF4F4F rouge ou #4f6b72 défaut
	var valeur_delta = 0;
	$.ajax(
			{
				url: 'scripts/Employes.json',
				async: false,
				dataType: 'json',
				success: function (json) 
				{
					employe = json.employes;
				}
			}
	);

	document.write("<table id=" +'"mytable"' + ">");
	document.write("<caption> Rapport des activités d'inspections </caption>");
	
	//Entête de tableau
	document.write("<tr>");
	document.write("<th scope=" + '"col"' +  " class=" + '"col"' + ">  </th>");
	document.write("<th scope=" + '"col"' +  " class=" + '"col"' + ">Réalisations </th>");
	document.write("<th scope=" + '"col"' +  " class=" + '"col"' + ">Activité complété</th>");
	document.write("</tr>");

	for (var an_emp=0; an_emp < employe.length; an_emp++)
	{	
		valeur_delta = (parseInt(employe[an_emp].activite_effectue) - 
					   parseInt(employe[an_emp].activite_total));
		// Déterminer la couleur de présentation
		(valeur_delta < 0) ? delta_balise = "real_retard" : delta_balise = "real";
		
		document.write(" <tr>");
		document.write("  	<th scope="+'"row "'+ " class="+'"spec "'+">"+ employe[an_emp].nom+ " "+ employe[an_emp].prenom +"</th>");
		document.write(" 	<td> ");
	 	document.write("		<progress value="+ employe[an_emp].activite_effectue+ " max="+employe[an_emp].activite_total+">");
		document.write("			<span id="+'"downloadProgress "'+"></span>%");
		document.write("		</progress> <real>"+employe[an_emp].activite_total+"</real>");
		document.write(" 	</td>");
		document.write(" 	<td>" + "<" + delta_balise + ">");
		document.write(			valeur_delta); 
		document.write(" 	</"+delta_balise+"></td>");
		document.write(" </tr> ");
	}
	document.write("</table>");
}


function getNonConformite(Inspecteur,Activite)
{
	// Inspecteur: nom de l'inspecteur
	// Activité : l'activité. 
	
	var nonConfQuantity = Math.floor(Math.random()*101);
	var employe = new Array("Robert", "Joaquim", "Eric", "Paul", "Jennifer","Jean-Claude");	
	switch(Inspecteur)
	{
		case "Robert":	
			value = nonConfQuantity;
		break;
	
		case "Joaquim":
			value = nonConfQuantity;
		break;
		case "Eric":
			value = nonConfQuantity;
		break;
		case "Paul":
			value = nonConfQuantity;
		break;
		case "Jennifer":
			value = nonConfQuantity;
		break;
	}
	return (nonConfQuantity);
}

function showNonConformiteReport(Aa,Bb)
{
	var employe = new Array("Robert", "Joaquim", "Eric", "Paul", "Jennifer","Jean-Claude");		
	var activite = new Array("Aerien", "Vehicule", "Souterrain", "Autre");
	
	document.write(" <table id=" + '"mytable"' +">");
	document.write("<caption> Rapport des activités d'inspections réalisés </caption>");
	document.write("<tr><th scope=" +  '"col"' +
                            "abbr=" +  '"test"' + 
                            " class="+ '"col"' + ">  </th>");
	for (iActivite=0; iActivite < activite.length; iActivite++)
	{
	    	
	document.write("<th scope=" +  '"col"' + 
					" class="+ '"col"' +
                            "abbr=" +  '"test"' + 
		       ">"+activite[iActivite] +"  </th>");
	}
	document.write("</tr>");
	
	// Pour chaque employé. 
	for (iEmploye = 0; iEmploye < employe.length; iEmploye++)
	{
	    document.write(" <tr>");
	    document.write("  	<th scope="+'"row"'+ " class="+'"spec"'+">"+ employe[iEmploye] +"</th>"); 
	    
	    // Pour chaque activité
	    for (iActivite=0; iActivite < activite.length; iActivite++)
		{
		    
		    document.write(" 	<td> ");
		    document.write(getNonConformite(employe[iEmploye],activite[iActivite]));
		    document.write(" 	</td>");
		}
	    
	    document.write("</tr>");
	    
	}

	document.write("</table>");
}

