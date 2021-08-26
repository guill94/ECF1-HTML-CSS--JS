document.querySelector("#connect").addEventListener("click", () => {
    var old_pw = document.querySelector("#oldpassword").value;
    var new_pw = document.querySelector("#newpassword").value;
    var new_pw2 = document.querySelector("#newpassword2").value;
    var longueur = document.querySelector("#newpassword").value

    if (new_pw == new_pw2 &&
        new_pw.match (/[A-Z]/g) &&
        new_pw.match(/[a-z]/g) &&
        new_pw.match(/[1-9]/g) &&
        longueur.length >=10  )
    {
        if (old_pw == "admin")
        document.location.href="espaceadmin.html"
        else if (old_pw == "jury")
        document.location.href="espacejury.html"
        else if (old_pw == "auteur")
        document.location.href="espaceauteur.html"
    }
    else {
        document.querySelector(".erreurpw").style.display="block";
    }
})
