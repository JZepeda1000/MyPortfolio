$("#car").mouseover(function() {
    $("#textbox").append($("<span>GIF PAGE<br>The buttons on the page render random images of cars based on vehicle make. The user can add a button which will do the same.</span>"))
})
    $("#car").mouseleave(function() {
        $("#textbox").empty("<span></span>")
    });

$("#plate").mouseover(function() {
    $("#textbox").append($("<span>TABLE RESERVATIONS<br>This app schedules reservations at a restaurant. Customers can be confirmed or placed on a waiting list based on availability.</span>"))
})
    $("#plate").mouseleave(function() {
        $("#textbox").empty("<span></span>")
    });

$("#train").mouseover(function() {
    $("#textbox").append($("<span>TRAIN SCHEDULER<br>In this interactive chart, the user inputs a fictitious train line along with its destination, first arrival time and travel frequency. Based on the data, the app calculates the next arrival time and how many minutes away the train is.</span>"))
})
    $("#train").mouseleave(function() {
        $("#textbox").empty("<span></span>")
    });

$("#numbers").mouseover(function() {
    $("#textbox").append($("<span>CRYSTAL COLLECTOR<br>Each crystal in this game has a hidden number value. The player clicks on crystal to build up points trying to match the pre-set number on the socreboard. The player loses if his or her points exceed the default score.</span>"))
})
    $("#numbers").mouseleave(function() {
        $("#textbox").empty("<span></span>")
    });