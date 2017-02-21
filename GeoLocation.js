var GeoLocation = function(){
    this.latitude = 0;
    this.longitude = 0;
    this.street = "";
    this.number = "";
    this.location = "";
    this.city = "";
    this.state = "";
    this.country = "";
    this.postal_code = "";
	var getLatLng = function(position) {
        GeoLocation.latitude = position.coords.latitude;
        GeoLocation.longitude = position.coords.longitude;
        codeLatLng(GeoLocation.latitude, GeoLocation.longitude);
	};
    this.getLocation = function() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getLatLng);
        } else {
            alert('Navegador não suporta');
        }
    };
    var codeLatLng = function (latitude,longitude){
        var geocoder = new google.maps.Geocoder();
        var latlng = new google.maps.LatLng(latitude, longitude);
        geocoder.geocode({'latLng': latlng}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[1]) {
                    GeoLocation.street = results[0].address_components[1].long_name;
                    GeoLocation.number = results[0].address_components[0].long_name;
                    GeoLocation.location = results[1].address_components[0].long_name;
                    GeoLocation.city = results[1].address_components[1].long_name;
                    GeoLocation.state = results[1].address_components[3].long_name;
                    GeoLocation.country = results[1].address_components[3].long_name;
                    GeoLocation.postal_code = results[3].address_components[0].long_name;
                }
            }else{
                alert("Geocoder failed due to: " + status);
            }
        });
    };
};