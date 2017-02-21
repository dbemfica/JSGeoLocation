# JSGeoLocation

Um pequeno script para usar a api do google maps para pegar as informações de endereço

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>JS GeoLocation</title>
    <script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?sensor=false"></script>
    <script type="text/javascript" src="GeoLocation.js"></script>
    <script type="text/javascript">
        var GeoLocation = new GeoLocation();
        GeoLocation.getLocation();
        setTimeout(function(){
	    console.log(GeoLocation.street); //Rua
            console.log(GeoLocation.number); //Numero
            console.log(GeoLocation.location); //Baixo
            console.log(GeoLocation.city); //Cidade
            console.log(GeoLocation.state); //Estado
            console.log(GeoLocation.country); //País
            console.log(GeoLocation.postal_code); //CEP
        }, 500);
    </script>
</head>
<body>
</body>
</html>
```