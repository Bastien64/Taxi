document.addEventListener("DOMContentLoaded", function() {
    var popup = document.getElementById("popupReservation");
    var closeBtn = document.getElementsByClassName("close")[0];
    var contactBtn = document.getElementById("goToContact");
    var body = document.body;

    // Afficher le popup et flouter l’arrière-plan
    popup.style.display = "block";
    body.classList.add("blur");

    // Fermer le popup et enlever le flou
    closeBtn.onclick = function() {
        popup.style.display = "none";
        body.classList.remove("blur");
    }

    // Fermer le popup en cliquant à l'extérieur
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
            body.classList.remove("blur");
        }
    }

    // Scroll vers la section "contact_scroll" au clic du bouton et enlever le flou
    contactBtn.onclick = function() {
        popup.style.display = "none";
        body.classList.remove("blur");
        document.getElementById("contact_scroll").scrollIntoView({ behavior: "smooth" });
    }
});
