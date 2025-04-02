// JavaScript pour initialiser la carte
function initMap() {
    // Coordonnées fictives pour l'emplacement
    var location = { lat: 48.989236, lng: 1.732578 }; // Modifiez ces coordonnées selon votre emplacement

    // Créez une carte avec le centre sur les coordonnées spécifiées
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15, // Zoom de la carte
        center: location
    });

    // Ajoutez un marqueur pour montrer l'emplacement
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        title: "Notre Emplacement"
    });
}

