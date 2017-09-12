$(document).ready(function () {
    function procesar_url(q) {
        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?' + $.param({'api-key': "9347b3689fb241f4821b59c0bb852a8c",
        'q':"" })+q;
        alert("url: " + url);
        $.ajax({
        url: url,
        method: 'GET'
        }).done(function(result) {
        console.log(result);
    }).fail(function(err) {
      throw err;
    });
    }
         
    $(".input-append #enviar").click(function () {
        var q = $("#url").val();
        procesar_url(q);
    }); 
});