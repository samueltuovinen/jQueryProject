$(document).ready(function () {

    // mahdollisuus piilottaa input fieldi
    $(".fa-eye-slash").click(function () {
        $("input[type='text']").fadeToggle();
        $("i[class='fa-solid fa-arrow-turn-down iconsubmit'").fadeToggle();
    });

     // Syötetään input enterillä
     $("input[type='text']").keypress(function(event) {
        if (event.which === 13) {
            // tarkistaa onko input field tyhjä
            if ($("input").val().length === 0) {
                // Jos tyhjä lähetetään alert ja muutetaan väri
                alert('Text field is empty');
                $("input").css("border-color", "red");

                // Jos fieldissä sisältöä, syötetään se näytölle
            } else { 
            var item = $(this).val();
            $(this).val("");
            $("input").css("border-color", "rgb(109, 138, 188)");

            $("ul").append("<li><span><i class='fa-solid fa-dumpster'></i></span>" + item + "</li>")
            }
        } 
    }); 

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
});