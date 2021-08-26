document.querySelector("#connect").addEventListener("click", () => {

    var ident = document.querySelector("#identifiant").value;
    var pw = document.querySelector("#password").value;

    if (ident == "admin" && pw == "admin") {
        document.location.href="change_mp.html"
    }

    else if (ident == "jury" && pw == "jury") {
        document.location.href="change_mp.html"
    }

    else if (ident == "auteur" && pw == "auteur") {
        document.location.href="change_mp.html"
    }
})

