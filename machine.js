	function machine(){
				
		var tableau = ["bonjour", "salut", "machin"];
		var elemIdx = 0;
		var caractere = 0;
		
		for (elemIdx; elemIdx<tableau.length; elemIdx++) {
			caractere=0;
			for (caractere; caractere<tableau[elemIdx].length; caractere++) {
				document.form_identite.entrees.value += tableau[elemIdx].substr(caractere, 1);
			};
		};
	};