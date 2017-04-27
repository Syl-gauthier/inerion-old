//doit être inclu dans un template



//inclu dans ../templates/footer.js

if (document.getElementById("pageTitle") != null) {
    var title = document.getElementById("pageTitle").textContent;
    if (title != null) {
        document.title = title;
    }
}