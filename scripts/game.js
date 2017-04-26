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

      // Turn 0 = Joueur 1
      // Turn 1 = Joueur 2
      var currentId = currentObject.id;

      for (data = 0; data < table.length; data++) {
          for(object = 0; object < table[data].length; object++) {;
              if(table[data][object].data == currentId) {
                  switch(table[data][object].content) {
                      case  "":
                      if(turn == 0) {
                        console.log('TOUR : Joueur 1');
                        document.getElementById(currentId).innerHTML= "<i class='fa fa-circle-o' aria-hidden='true'></i>";
                         localStorage.setItem('Joueur 1', currentId );
                         table[data][object].content = "Joueur 1";
                         var result = checkVictory(table[data][object].data, table);
                         if(result == 1) {
                            console.log('victoire Joueur 1')
                         } else if(result == 2) {
                           console.log('match nul');
                         }
                            turn = 1;

                      } else if(turn == 1) {
                        console.log('TOUR : Joueur 2');
                        document.getElementById(currentId).innerHTML= "<i class='fa fa-times' aria-hidden='true'></i>";
                         localStorage.setItem('Joueur 2', currentId );
                         table[data][object].content = "Joueur 2";
                         var result = checkVictory(table[data][object].data, table);
                         if(result == 1) {
                            console.log('victoire Joueur 2')
                         } else if(result == 2) {
                           console.log('match nul');
                         }
                          turn = 0;
                      }

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
  }


    function checkVictory(id, table) {
        player = null;
        if(turn == 0) {
            player = "Joueur 1";
        };
        if(turn == 1) {
            player = "Joueur 2"
        };
        console.log('Start check');
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
        console.log('End check');

    }
