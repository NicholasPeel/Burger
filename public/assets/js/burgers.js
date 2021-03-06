// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(document).on("click", ".devoured", function (event) {
        var id = $(this).data("id");
        console.log(id);
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT"
        }).then(
            function () {
                console.log("changed devoured to true");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#ca").val().trim(),
            devoured: false
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new Burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

});
