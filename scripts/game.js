turn = 0;
victory = null;
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
        
        if(turn == 0) {
            var tdId = currentObject.id;
            for (data = 0; data < table.length; data++) {
                for(object = 0; object < table[data].length; object++) {;
                    if(table[data][object].data == tdId) {
                    switch(table[data][object].content) {
                    case "":
                    document.getElementById(tdId).innerHTML= "<i class='fa fa-circle-o' aria-hidden='true'></i>";
                    table[data][object].content = "Joueur 1";
                    alert('pion 1 posé');
                    var result = checkVictory(table[data][object].data,  table);
                    turn = 1;
                    }
                    break;
                    } //End if
            }
        }
        }
        
        if(turn == 1) {
            var tdId = currentObject.id;
            for (data = 0; data < table.length; data++) {
                for(object = 0; object < table[data].length; object++) {;
                    if(table[data][object].data == tdId) {
                    switch(table[data][object].content) {
                    case "":
                    document.getElementById(tdId).innerHTML= "<i class='fa fa-times' aria-hidden='true'></i>";
                    table[data][object].content = "Joueur 2";
                    alert('pion 2 posé');
                    var result = checkVictory(table[data][object].data,  table);
                    turn = 0;
                    }
                }
            }
            }
        }
        
        
      
    }

    
    function checkVictory(id, table) {
        for (data = 0; data < table.length; data++) {
                for(object = 0; object < table[data].length; object++) {
                    console.log( table[data][object].content);
                    var matchNul = 'true';
                    return matchNul;
                    if(table[data][object].content == "") {
                        matchNul = 'false';
                        return matchNul;
                    }
                }
        }
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
                    result = 1;
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
        //console.log('End check');
}

