var listsElt = document.getElementById("vocLists");
var tableElt = document.getElementById("vocTable");
var subButton = document.getElementById("submit");
var lists;

subButton.style.display = "none";


//http://localhost/javascript-web-srv/post_json.log
ajaxGet("../post_json.log", function (reponse) {

    // Transforme la réponse en un tableau d'articles
    lists = JSON.parse(reponse);
    console.log(lists);

    //sauvegarde des modifications effécuées
    subButton.onclick = function() {
        ajaxPost("../post_json.php", JSON.stringify(lists),
            function (reponse) {
                // Le film est affiché dans la console en cas de succès
                console.log(JSON.stringify(lists) + " a été envoyé au serveur");
            },
            true // Valeur du paramètre isJson
        );
    }
    var listId = 0;
    lists.forEach(function (list) {

        list.id = listId;
        listId++;

        //création et insertion d'un <li> dans la liste des listes de vocabulaires
        var listLink = document.createElement("li");
        listLink.textContent = list.titre;
        listsElt.appendChild(listLink);

        //création et définition du listener permettant d'afficher l'une des listes de vocabulaire
        listLink.onclick = function () {
            console.log("click");

            //affichage du bouton de sauvegarde
            subButton.style.display = "inline";

            //set id de la list actuel (inutil pour l'instant.. pourrait être réutiliser pour des reloads)
            //tableElt.setAttribute("idList", list.id);

            //ràz du tableau
            while (tableElt.getElementsByClassName("word").length > 0) {
                tableElt.getElementsByClassName("word")[0].parentNode.removeChild(tableElt.getElementsByClassName("word")[0]);
            }

            //initialisation de id --> peut-être inutile
            if (list.isId != true) {
                var newId = 0;
                list.vocList.forEach(function (word) {
                    word.id = newId;
                    newId++;
                    list.isId = true;
                });
            }

            // ajout les mot en anglais, coréen et français dans des <td>
            // puis ajoute des checkbox pour la correction
            list.vocList.forEach(function (word) {
                var rowElt = document.createElement("tr");
                rowElt.id = word.id;
                rowElt.className += "word";

                rowElt.appendChild(addWord(word.id));
                rowElt.appendChild(addWord(word.eng));
                rowElt.appendChild(addWord(word.kor));
                rowElt.appendChild(addWord(word.fr));

                var checkBox = document.createElement("input");
                checkBox.type = "checkbox";
                checkBox.checked = word.checked;
                rowElt.appendChild(checkBox);

                checkBox.onclick = function () {
                    word.checked = checkBox.checked;
                    console.log(word.checked);
                    console.log(word.eng);
                }

                tableElt.appendChild(rowElt);

                function addWord(pWord) {
                    var htmlElt = document.createElement("td");
                    htmlElt.textContent = pWord;
                    return htmlElt;
                }
            });
        };
    });
});