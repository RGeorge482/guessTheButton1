let randNumber = Math.floor(Math.random() * 3) + 1;

function myId(buttonId) {
    if (buttonId == randNumber) {
        alert("You won!!! " +
            "\nRefresh the browser to play again.");
    } else {
        alert("Sorry! The winning button was: " + randNumber +
            "\nRefresh the browser to play again.");
    }
}