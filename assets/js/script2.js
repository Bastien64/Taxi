document.addEventListener("DOMContentLoaded", function() {
    var popup = document.getElementById("popupReservation");
    var span = document.getElementsByClassName("close")[0];
    var contactLink = document.getElementById("contact");

    // Afficher le popup dès l'ouverture de la page
    popup.style.display = "block";

    // Fermer le popup quand on clique sur (X)
    span.onclick = function() {
        popup.style.display = "none";
    }

    // Fermer le popup en cliquant à l'extérieur
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }

    // Fermer le popup en cliquant sur le lien de réservation
    contactLink.onclick = function() {
        popup.style.display = "none";
    }
});
