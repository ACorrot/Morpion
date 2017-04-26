if(turn == 0) {
       
         // Tour du joueur 1
           // console.log(turn);
           // Id de la case cliquée
            var tdId = currentObject.id;
            for (data = 0; data < table.length; data++) {
                for(object = 0; object < table[data].length; object++) {;
                    // Si l'id de l'element dans le Json correspond a l'element cliqué
                    if(table[data][object].data == tdId) {
                        // On verifie si le contenu de l'element dans le Json est vide, ce qui signifie qu'il n'a pas deja été cliqué
                        switch(table[data][object].content) {
                            // Si il est vide
                            case  "":
                            // On ajoute la forme dans la case correspondante
                            document.getElementById(tdId).innerHTML= "<i class='fa fa-circle-o' aria-hidden='true'></i>";
                            // On modifie le contenu du Json pour refleter le click du joueur
                            table[data][object].content = "Joueur 1";
                            // On verifie la victoire
                            var result = checkVictory(table[data][object].data,  table);
                            // Result peut etre egal a null, 0,1,2
                            switch(result) {
                                case null:
                                // Continuité du jeu
                                break;
                                case 0:
                                // Cas de défaite du joueur 2
                                var el = document.querySelectorAll('tbody tr td');
                                        for(var i = 0; i < el.length; i++) {
                                            el[i].setAttribute( "onClick", "");
                                        }
                                 document.getElementById('tourJoueur').innerHTML= "Victoire du du <span style='color: red'>joueur 2 !!</span>"
                                 document.getElementById('bouton').innerHTML= "<button>Nouvelle partie</button>"
                                break;
                                case 1:
                                // Cas de victoire du joueur 1
                                debugger;
                                var el = document.querySelectorAll('tbody tr td');
                                        for(var i = 0; i < el.length; i++) {
                                            el[i].setAttribute( "onClick", "");
                                        }
                                 document.getElementById('tourJoueur').innerHTML= "Victoire du <span style='color: blue'>joueur 1 !!</span>"
                                 document.getElementById('bouton').innerHTML= "<button>Nouvelle partie</button>"
                                break;
                                case 2:
                                // Cas d'égalité
                                break;
                                default:
                            }
                            
                            turn = 1;
                                break;
                            // Si le Joueur 1 a deja cliqué
                            case "Joueur 1":
                        alert('Cette case est déjà prise!');
                                break;
                            // SI le joueur 2 a deja cliqué
                            case "Joueur 2":
                        alert('Cette case est déjà prise!');
                                break;
                            default:
                        }
                    }
                }
            }
       // console.log(tdId);
    } else {
            // Tour du joueur 2
           // console.log(turn);
           // Id de la case cliquée
            var tdId = currentObject.id;
            for (data = 0; data < table.length; data++) {
                for(object = 0; object < table[data].length; object++) {;
                    // Si l'id de l'element dans le Json correspond a l'element cliqué
                    if(table[data][object].data == tdId) {
                        // On verifie si le contenu de l'element dans le Json est vide, ce qui signifie qu'il n'a pas deja été cliqué
                        switch(table[data][object].content) {
                            // Si il est vide
                            case  "":
                            // On ajoute la forme dans la case correspondante
                            document.getElementById(tdId).innerHTML= "<i class='fa fa-times' aria-hidden='true'></i>";
                            // On modifie le contenu du Json pour refleter le click du joueur
                            table[data][object].content = "Joueur 2";
                            // On verifie la victoire
                            var result = checkVictory(table[data][object].data,  table);
                            // Result peut etre egal a null, 0,1,2
                            switch(result) {
                                case null:
                                // Continuité du jeu
                                break;
                                case 0:
                                // Cas de défaite du joueur 2
                                var el = document.querySelectorAll('tbody tr td');
                                        for(var i = 0; i < el.length; i++) {
                                            el[i].setAttribute( "onClick", "");
                                        }
                                 document.getElementById('tourJoueur').innerHTML= "Victoire du du <span style='color: red'>joueur 1 !!</span>"
                                 document.getElementById('bouton').innerHTML= "<button>Nouvelle partie</button>"
                                break;
                                case 1:
                                // Cas de victoire du joueur 1
                                var el = document.querySelectorAll('tbody tr td');
                                        for(var i = 0; i < el.length; i++) {
                                            el[i].setAttribute( "onClick", "");
                                        }
                                 document.getElementById('tourJoueur').innerHTML= "Victoire du <span style='color: blue'>joueur 2 !!</span>"
                                 document.getElementById('bouton').innerHTML= "<button>Nouvelle partie</button>"
                                break;
                                case 2:
                                // Cas d'égalité
                                break;
                                default:
                            }
                            
                            turn = 0;
                                break;
                            // Si le Joueur 1 a deja cliqué
                            case "Joueur 1":
                        alert('Cette case est déjà prise!');
                                break;
                            // SI le joueur 2 a deja cliqué
                            case "Joueur 2":
                        alert('Cette case est déjà prise!');
                                break;
                            default:
                        }
                    }
                }
            }
        }