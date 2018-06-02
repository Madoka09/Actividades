$(function(){
    var $h1 = $("h1");
    var $zip = $("input[name='zip']");
    $("form").on("submit",function(event){
        event.preventDefault();
        var zipCode = $.trim($zip.val());
        $h1.text("Cargando...");
        var request = $.ajax({
            url:"/"+ zipCode,
            dataType: "json"
        });
        request.done(function(data){
            var temperature = data.temperature;
            var celcius = (temperature - 32)/1.8000
            $h1.html("la temperatura es " + celcius + " &#176; en " + zipCode + ".");
        });
        request.fail(function(){
            $h1.text("Error!");
        })
    });
});