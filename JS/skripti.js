$(document).ready(function () {
    // merkataan item completed
    $("ul").on("click", "li", function () {
        $(this).toggleClass("completed");
    });

    // poistetaan itemi listalta
    $('ul').on("click", "span", function(event) {
        // lisätään fadeOut
        $(this).parent().fadeOut(500, function() {
            // ja remove
            $(this).remove();
        });
        event.stopPropagation();
    });

    // Syötetään inputista itemi "ul"
    $("input[type='text']").keypress(function(event) {
        if (event.which === 13) {
            var item = $(this).val();
            $(this).val("");

            $("ul").append("<li><span><i class='fa-solid fa-dumpster'></i></span>" + item + "</li>")
        } 
    });

    // mahdollisuus piilottaa input fieldi
    $(".fa-eye-slash").click(function () {
        $("input[type='text']").fadeToggle();
    });

});