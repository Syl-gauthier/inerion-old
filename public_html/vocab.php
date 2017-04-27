<!DOCTYPE html>
<html>

<head>
    <?php include("../ressources/templates/common-head.php"); ?>
</head>

<body>

    <?php include("../ressources/templates/header.php"); ?>

        <section>
            <article>
                <h3>Korean vocabulary lists</h3>
            </article>    
            <article>
                <aside>
                    <ul id="vocLists"></ul>
                </aside>
            </article>
            <article>
                <table id="vocTable">
                    <tr>
                        <th>Id</th>
                        <th>English</th>
                        <th>Korean</th>
                        <th>French</th>
                        <th>Check if right</th>
                    </tr>
                </table>


                <button id="submit" type="button"><span>Submit</span></button>
            </article>
        </section>

        <?php include("../ressources/templates/footer.php") ?>
        <script src="/tools/ajax.js"></script>
        <script src="../bin/vocab.js"></script>
</body>

</html>