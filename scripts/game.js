turn = 0;
victory = null;
winPlay1 = 0;
winPlay2 = 0;
if(localStorage.getItem('winPlayer1') == null) {
    localStorage.setItem('winPlayer1', "0");
}
if(localStorage.getItem('winPlayer2') == null) {
    localStorage.setItem('winPlayer2', "0");
}

var table = [
    [
        {
            data: 1,
            content: ""
        },
        {
            data: 2,
            content: ""
        },
        {
            data: 3,
            content: ""
        },
    ],
    [
        {
            data: 4,
            content: ""
        },
        {
            data: 5,
            content: ""
        },
        {
            data: 6,
            content: ""
        },
    ],
    [
        {
            data: 7,
            content: ""
        },
        {
            data: 8,
            content: ""
        },
        {
            data: 9,
            content: ""
        },
    ],
];
    function selectId(currentObject) {
        //Turn 0 est le joueur 1
        //Turn 1 est le joueur 2
        if(turn == 0) {
                document.getElementsByClassName(tdId).innerHTML = "background-color: 'white'";
                var tdId = currentObject.id;
                for (data = 0; data < table.length; data++) {
                    for(object = 0; object < table[data].length; object++) {;
                        if(table[data][object].data == tdId) {
                        switch(table[data][object].content) {
                            //Si la case cochée est vide:
                            case "":
                            //Ajoute La tête de Yoda, et vérifie si on a une combinaison gagnante pour le joueur 1
                                document.getElementById('playerTurn').innerHTML= "Au tour de <span style='color:red; font-weight:bold'>Vador</span> de jouer !";
                                document.getElementById(tdId).innerHTML= "<img class='yoda' src='/img/yoda.png'></i>";
                                document.getElementById('pion').innerHTML = "Le <span style='color:green'>joueur 1</span> a joué en case " + tdId + " !";
                                table[data][object].content = "Joueur 1";
                                var result = checkVictory(table[data][object].data,  table);
                                if (result == 1){
                                //Si le joueur 1 gagne, on empêche le fait de cliquer et remplir les autres cases, on enregistre en localStorage le score du joueur 1  + 1point et on propose une nouvelle partie
                                        var el = document.querySelectorAll('tbody tr td');
                                        for(var i = 0; i < el.length; i++) {
                                            el[i].setAttribute( "onClick", "");
                                        }
                                        document.getElementById('tourJoueur').innerHTML= "Victoire de <span style='color: green'>Yoda !!</span>"
                                        document.getElementById('bouton').innerHTML= "<button>Nouvelle partie</button>"
                                        var oldValue1 = localStorage.getItem('winPlayer1');
                                        var oldValue1 = localStorage.getItem('winPlayer1');
                                        //Numérise le score du joueur1 qui au préalable était un string
                                        oldValue1 = Number(oldValue1)
                                        oldValue1++;
                                        localStorage.setItem('winPlayer1', oldValue1);
                                        document.getElementById('Score1').innerHTML = "Score du joueur 1 : <span id='test'> " + oldValue1 + "</span>";
                                } else if(result == 2) {
                                        document.getElementById('tourJoueur').innerHTML= "<span style='color:darkgreen'>Ceci se termine donc par un match nul !!</span>"
                                        document.getElementById('bouton').innerHTML= "<button>Nouvelle partie !</button>"
                                }
                                turn = 1;
                            break;
                            //Si la case est déjà prise, on a une alert qui nous le dit et le tour reste au joueur actuel
                            case "Joueur 1":
                                alert('Cette case est déjà prise!');
                                break;
                            case "Joueur 2":
                                alert('Cette case est déjà prise!');
                                break;
                            default:
                        } //End switch
                        } //End if
                }
            }
        } else if(turn == 1) {
            //CF if turn == 0, exactement la même partie
                var tdId = currentObject.id;
                for (data = 0; data < table.length; data++) {
                    for(object = 0; object < table[data].length; object++) {;
                        if(table[data][object].data == tdId) {
                        switch(table[data][object].content) {
                            case "":
                                document.getElementById('playerTurn').innerHTML= "Au tour de <span style='color:green; font-weight:bold'>Yoda</span> de jouer !";
                                document.getElementById(tdId).innerHTML= "<img  class='vador' src='/img/vador.png'></i>";
                                document.getElementById('pion').innerHTML = "Le <span style='color:red'>joueur 2</span> a joué en case " + tdId + " !";
                                table[data][object].content = "Joueur 2";
                                var result = checkVictory(table[data][object].data,  table);
                                if (result == 1){
                                        var el = document.querySelectorAll('tbody tr td');
                                        for(var i = 0; i < el.length; i++) {
                                            el[i].setAttribute( "onClick", "");
                                        }
                                        document.getElementById('tourJoueur').innerHTML= "Victoire de <span style='color: red'>Dark Vador!!</span>"
                                        document.getElementById('bouton').innerHTML= "<button>Nouvelle partie</button>"
                                         var oldValue2 = localStorage.getItem('winPlayer2');
                                         var oldValue2 = localStorage.getItem('winPlayer2');
                                        oldValue2 = Number(oldValue2)
                                        oldValue2++;
                                        localStorage.setItem('winPlayer2', oldValue2);
                                        document.getElementById('Score2').innerHTML = "Score du joueur 2 : <span id='test'> " + oldValue2 + "</span>";
                                } else if(result == 2) {
                                        document.getElementById('tourJoueur').innerHTML= "<span style='color:darkgreen'>Ceci se termine donc par un match nul !!</span>"
                                        document.getElementById('bouton').innerHTML= "<button>Nouvelle partie !</button>"
                                }
                                turn = 0;
                            break;
                            case "Joueur 1":
                                alert('Cette case est déjà prise!');
                                break;
                            case "Joueur 2":
                                alert('Cette case est déjà prise!');
                                break;
                            default:
                        } //End switch
                        } //End if
                }
            }
        } //End if turn == 1
        
        
      
    }

    //On check la victoire, si elle existe ou non
     function checkVictory(id, table) {
        player = null;
        if(turn == 0) {
            player = "Joueur 1";
        };
        if(turn == 1) {
            player = "Joueur 2"
        };
        console.log('Start check');
        //Test de toutes les combinaisons gagnantes en fonction de la DERNIERE case cliquée
        switch (id) {
            case 1:
            if(table[0][1].content == player){
                if(table[0][2].content == player){
                    return 1;
                }
            }
            if(table[1][0].content == player){
                if(table[2][0].content == player){
                    return 1;
                }
            }
            if(table[1][1].content == player){
                if(table[2][2].content == player){
                    return 1;
                }
            }
            return 0
                break;
            case 2:
            // Teste si la premiere ligne contient une victoire
            if(table[0][0].content == player) {
                 if(table[0][2].content == player) {
                    return 1;
                }
            }
            if(table[1][1].content == player) {
                 if(table[2][1].content == player) {
                    return 1;
                }
            }
            return 0

                break;
            case 3:
            if(table[0][1].content == player) {
                 if(table[0][0].content == player) {
                    return 1;
                }
            }
            if(table[1][2].content == player) {
                 if(table[2][2].content == player) {
                    return 1;
                }
            }
            if(table[1][1].content == player) {
                 if(table[2][0].content == player) {
                    return 1;
                }
            }
            return 0

                break;
            case 4:
            if(table[0][0].content == player) {
                 if(table[2][0].content == player) {
                    return 1;
                }
            }
            if(table[1][1].content == player) {
                 if(table[1][2].content == player) {
                    return 1;
                }
            }
            return 0

                break;
            case 5:
            if(table[0][1].content == player) {
                 if(table[2][1].content == player) {
                    return 1;
                }
            }
            if(table[1][0].content == player) {
                 if(table[1][2].content == player) {
                    return 1;
                }
            }
            if(table[0][0].content == player) {
                 if(table[2][2].content == player) {
                    return 1;
                }
            }
            if(table[0][2].content == player) {
                 if(table[2][0].content == player) {
                    return 1;
                }
            }
            return 0

                break;
            case 6:
            if(table[0][2].content == player) {
                 if(table[2][2].content == player) {
                    return 1;
                }
            }
            if(table[1][0].content == player) {
                 if(table[1][1].content == player) {
                    return 1;
                }
            }
            return 0

                break;
            case 7:
            if(table[0][0].content == player) {
                 if(table[1][0].content == player) {
                    return 1;
                }
            }
            if(table[2][1].content == player) {
                 if(table[2][2].content == player) {
                    return 1;
                }
            }
            if(table[1][1].content == player) {
                 if(table[0][2].content == player) {
                    return 1;
                }
            }
            return 0

                break;
            case 8:
            if(table[0][1].content == player) {
                 if(table[1][1].content == player) {
                    return 1;
                }
            }
            if(table[2][0].content == player) {
                 if(table[2][2].content == player) {
                    return 1;
                }
            }
            return 0

                break;
            case 9:
            if(table[0][0].content == player) {
                 if(table[1][1].content == player) {
                    return 1;
                }
            }
            if(table[2][0].content == player) {
                 if(table[2][1].content == player) {
                    return 1;
                }
            }
            if(table[0][2].content == player) {
                 if(table[1][2].content == player) {
                    return 1;
                }
            }
            return 0

                break;
            default:
        }
        //Un compteur qui ... compte le nombre de tour qui passe, et qui au bout de 9 tours, affiche un draw si un win n'a pas été annoncé.
        var count = 0;
        for (data = 0; data < table.length; data++) {
            for(object = 0; object < table[data].length; object++) {
              if(count >= 8){
                return 2;
              }
              if(table[data][object].content == "") {
                // Do nothing
              } else {
                console.log(count);
                count ++;
              }
            }
        }
        console.log('End check');
}

