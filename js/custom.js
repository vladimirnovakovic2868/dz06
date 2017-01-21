$(document).ready(function() {
    $('form').on("submit", function(event) {
        event.preventDefault();
        var form = $(this);
        var resource_id = form.find('input').val();
        var imdbUrl = 'http://imdb.wemakesites.net/api/';
        var myApiKey = '6f0c00d7-4d9e-46b8-9914-f89626c2b102';

        $.ajax({
            url: imdbUrl + resource_id,
            crossDomain: true,
            data: {
                api_key: myApiKey
            },
            dataType: 'jsonp',
            success: function(data) {
                console.log(data);
                var realData = data.data;

                // $('.content').text(JSON.stringify(data.data));
                $('.title').text(realData.title);
                $('.description').text(realData.description);
                $('.duration').text(realData.duration);
                if(realData.cast!=null) {
                    $('.cast').text(realData.cast.join(", "));
                }
                if(realData.genres!=null) {
                    $('.genres').text(realData.cast.join(", "));
                }
                $('.resource-image').attr('src', realData.image);
            }
        });
    });
});