$(document).ready(function () {
    function procesar_url(query) {
        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?' + $.param({'api-key': "9347b3689fb241f4821b59c0bb852a8c",
        'q':"" })+query;
        //alert("url: " + url);
        $.ajax({
        url: url,
        method: 'GET'
        }).done(function(data) {
            mostrar_resultados(data,query);
        console.log(data);
    }).fail(function(err) {
      throw err;
    });
    }
    
    function mostrar_resultados(data,query){
        if (data == undefined){
            if(query.length > 0){
                $(document).trigger("add-alerts", {
                    message: "No se encontro lo solicitado" + query ,
                    priority: "warning"
                });
            }
            return;
        }

        var lista_resultados = $('#lista_resultados');
        lista_resultados.empty();

        var articulos = data.response.docs;

        for (var i=0; i<articulos.length;i++) {
            alert(articulos[i].headline.main);
            alert(articulos[i].snippet);

            var articulo_item = $([
            "<div class='col-md-2 col-lg-2 item-articulo'>",
            "   <span class='overlay' id='overlay-portada-"+  articulos['id'] +"' data-pelicula-id='" + articulos['id'] +"' ></span>",
            "   <p class='titulo'>" + articulos['snippet'] + "</p>",
            "</div>"
        ].join("\n"));
            alert(articulo_item);
        }

    }


    $(".input-append #enviar").click(function () {
        var query = $("#url").val();
        procesar_url(query);
    }); 
});