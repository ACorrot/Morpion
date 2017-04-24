turn = 0;
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
                        document.getElementById(tdId).innerHTML= "O";
                         localStorage.setItem('circle', tdId );
                         table[data][object].content = "circle";
                         turn = 1;
                            break;
                        case "circle":
                            console.log('Cette case est déjà prise!');
                            break;
                        case "cross":
                            console.log('Cette case est déjà prise!');
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
                        document.getElementById(tdId).innerHTML= "X";
                        table[data][object].content = "cross";
                        turn = 0;
                            break;
                        case "circle":
                       console.log('Cette case est déjà prise!');
                            break;
                        case "cross":
                       console.log('Cette case est déjà prise!');
                            break;
                        default:
                    }
                }
            }
        }
        }
       
        console.log(tdId);
    }
    