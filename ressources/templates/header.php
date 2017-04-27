<header>
    <div id=plainBackground>
        <h1>Sylvain Gauthier</h1>
        <h2>Une page qui n'est pas destinée à être lue.</h2>
        <img id="cestmoi" src="./data/pictures/cestmoi.png">
    </div>
</header>

<!-- destiné à être horizontale en dessous du header -->
<nav>
    <table>
        <tbody>
            <tr>
                <td><a href="index.php">Home</a></td>
                <td><a href="CV.php">CV</a></td>
                <td><a href="contact.php">Contact</a></td>
                <td><a href="projets.php">Projets</a></td>
            </tr>
        </tbody>
    </table>
</nav>

<script>
    var link = document.getElementById("plainBackground");
    link.onclick = function() {
        window.location = "index.php";
    }
</script>