turn = 0;
v = 0;
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
for (data = 0; data < table.length; data++) {
    for(object = 0; object < table[data].length; object++) {;
    }
}

    function selectId(currentObject) {
        
        
        if(turn == 0) {
       
        // Tour du joueur
        console.log(turn);
        var tdId = currentObject.id;
        for (data = 0; data < table.length; data++) {
            for(object = 0; object < table[data].length; object++) {;
                if(table[data][object].data == tdId) {
                    switch(table[data][object].content) {
                        case  "":
                        document.getElementById(tdId).innerHTML= "<i class='fa fa-circle-o' aria-hidden='true'></i>";
                         localStorage.setItem('Joueur 1', tdId );
                         table[data][object].content = "Joueur 1";
                         var result = checkVictory(table[data][object].data);
                            if(result == true) {
                                 document.getElementById('tourJoueur').innerHTML= "Victoire du <span style='color: red'>joueur 1 !!</span>";
                                 document.getElementById('bouton').innerHTML= "<button>Nouvelle partie</button>"
                                var el = document.querySelectorAll('tbody tr td');
                                        for(var i = 0; i < el.length; i++) {
                                            el[i].setAttribute( "onClick", "");
                                        }                            
                            }
                         turn = 1;
                            break;
                        case "Joueur 1":
                           alert('Cette case est déjà prise!');
                            break;
                        case "Joueur 2":
                           alert('Cette case est déjà prise!');
                            break;
                        default:
                    }
                }
            }
        }
    } else {
            // Tour de l'ennemi
            console.log(turn);
            var tdId = currentObject.id;
            for (data = 0; data < table.length; data++) {
                for(object = 0; object < table[data].length; object++) {;
                    if(table[data][object].data == tdId) {
                        switch(table[data][object].content) {
                            case  "":
                            document.getElementById(tdId).innerHTML= "<i class='fa fa-times' aria-hidden='true'></i>";
                            table[data][object].content = "Joueur 2";
                            var result = checkVictory(table[data][object].data);
                            if(result == true) {
                                var el = document.querySelectorAll('tbody tr td');
                                        for(var i = 0; i < el.length; i++) {
                                            el[i].setAttribute( "onClick", "");
                                        } 
                                 document.getElementById('tourJoueur').innerHTML= "Victoire du <span style='color: blue'>joueur 2 !!</span>"
                                 document.getElementById('bouton').innerHTML= "<button>Nouvelle partie</button>"
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
                        }
                        for (data = 0; data < table.length; data++) {
                    if(table[data][object].content == "") {
                        console.log("here");
                    }
       }
                    }
                }
            }
        }
        console.log(tdId);
    }

    
    function checkVictory(id) {
        var type = "";
        if(table[data][object].content == "Joueur 1") {
            type = "Joueur 1";
        } else {
            type = "Joueur 2"
        }
        console.log('Start check');
        switch (id) {
            case 1:
            if(table[0][1].content == type){
                if(table[0][2].content == type){
                    return true;
                } 
            }
            if(table[1][0].content == type){
                if(table[2][0].content == type){
                    return true;
                }
            }
            if(table[1][1].content == type){
                if(table[2][2].content == type){
                    return true;
                }
            }
                break;
            case 2:
            // Teste si la premiere ligne contient une victoire
            if(table[0][0].content == type) {
                 if(table[0][2].content == type) {
                    return true;
                }
            }
            if(table[1][1].content == type) {
                 if(table[2][1].content == type) {
                    return true;
                }
            }
                break;
            case 3:
            if(table[0][1].content == type) {
                 if(table[0][0].content == type) {
                    return true;
                }
            }
            if(table[1][2].content == type) {
                 if(table[2][2].content == type) {
                    return true;
                }
            }
            if(table[1][1].content == type) {
                 if(table[2][0].content == type) {
                    return true;
                }
            }
                break;
            case 4:
            if(table[0][0].content == type) {
                 if(table[2][0].content == type) {
                    return true;
                }
            }
            if(table[1][1].content == type) {
                 if(table[1][2].content == type) {
                    return true;
                }
            }
                break;
            case 5:
            if(table[0][1].content == type) {
                 if(table[2][1].content == type) {
                    return true;
                }
            }
            if(table[1][0].content == type) {
                 if(table[1][2].content == type) {
                    return true;
                }
            }
            if(table[0][0].content == type) {
                 if(table[2][2].content == type) {
                    return true;
                }
            }
            if(table[0][2].content == type) {
                 if(table[2][0].content == type) {
                    return true;
                }
            }
                break;
            case 6:
            if(table[0][2].content == type) {
                 if(table[2][2].content == type) {
                    return true;
                }
            }
            if(table[1][0].content == type) {
                 if(table[1][1].content == type) {
                    return true;
                }
            }
                break;
            case 7:
            if(table[0][0].content == type) {
                 if(table[1][0].content == type) {
                    return true;
                }
            }
            if(table[2][1].content == type) {
                 if(table[2][2].content == type) {
                    return true;
                }
            }
            if(table[1][1].content == type) {
                 if(table[0][2].content == type) {
                    return true;
                }
            }
                break;
            case 8:
            if(table[0][1].content == type) {
                 if(table[1][1].content == type) {
                    return true;
                }
            }
            if(table[2][0].content == type) {
                 if(table[2][2].content == type) {
                    return true;
                }
            }
                break;
            case 9:
            if(table[0][0].content == type) {
                 if(table[1][1].content == type) {
                    return true;
                }
            }
            if(table[2][0].content == type) {
                 if(table[2][1].content == type) {
                    return true;
                }
            }
            if(table[0][2].content == type) {
                 if(table[1][2].content == type) {
                    return true;
                }
            }
                break;
            default:
        }
        console.log('End check');
        
    }