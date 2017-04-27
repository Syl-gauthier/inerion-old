function crate Table (list, languages) {
    var table = document.createElement("table");
    
    
}



function edit (rowElt) {
    function textToInput (elt){
        var text = elt.textContent;
        elt.textContent = "";
        var button = document.createElement("input");
        button.textContent = text;
        button.type = "button";
    }
    textToInput (rowElt.getElementById("eng"));
    textToInput (rowElt.getElementById("kor"));
    textToInput (rowElt.getElementById("fr"));
}