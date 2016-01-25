
/* Script för Google map på "Kontakt"-sidan*/
 function initialize() {
        var kartaKanvas = document.getElementById('kartaScript');
     
        var minLatLng = {lat: 59.345519, lng: 18.023493};
     
        var kartaAlt = {
          center: new google.maps.LatLng(59.345519, 18.023493),
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP}
        
        var karta = new google.maps.Map(kartaKanvas, kartaAlt)
        
        var marker = new google.maps.Marker({
        position: minLatLng,
        map: karta,
        title: 'Bright - better web'});
      }

google.maps.event.addDomListener(window, 'load', initialize);