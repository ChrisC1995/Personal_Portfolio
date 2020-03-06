$(function () {

    var player1 = [];
    var player2 = [];



    var player1Wins = 0;
    var player2Wins = 0;

    var whichturn = 0;
    $("#button1").on("click", function () {
        whichturn = whichturn + 1;
        if (whichturn % 2 == 0) {
            $("#button1").html("O");
            player2.push(1);
            $("#button1").prop("disabled", true);
            if (player2.includes(1) && player2.includes(2) && player2.includes(3)) {
                alert("Player Two Wins");
                player2Wins = player2Wins + 1;
                $("#2wins").html(player2Wins);
                resetgame();


            }
            else if (player2.includes(1) && player2.includes(5) && player2.includes(9)) {
                alert("Player Two Wins");
                player2Wins = player2Wins + 1;
                $("#2wins").html(player2Wins);
                resetgame();
            }
            else if (player2.includes(1) && player2.includes(4) && player2.includes(7)) {
                alert("Player Two Wins");
                player2Wins = player2Wins + 1;
                $("#2wins").html(player2Wins);
                resetgame();
            }
            else if (player1.length + player2.length == 9){
                alert ("cat wins")
                resetgame();
            }
            
        } else if (whichturn % 2 == 1) {
            $("#button1").html("X");
            player1.push(1);
            $("#button1").prop("disabled", true);
            if (player1.includes(1) && player1.includes(2) && player1.includes(3)) {
                alert("Player One Wins");
                player1Wins = player1Wins + 1;
                $("#1wins").html(player1Wins);
                resetgame();
            }
            else if (player1.includes(1) && player1.includes(5) && player1.includes(9)) {
                alert("Player One Wins");
                player1Wins = player1Wins + 1;
                $("#1wins").html(player1Wins);
                resetgame();
            }
            else if (player1.includes(1) && player1.includes(4) && player1.includes(7)) {
                alert("Player One Wins");
                player1Wins = player1Wins + 1;
                $("#1wins").html(player1Wins);
                resetgame();
            }
            else if (player1.length + player2.length == 9){
                alert ("cat wins")
                resetgame();
            }
           
        }
        console.log(player1);
        console.log(player2);

    });
    $("#button2").on("click", function () {
        whichturn = whichturn + 1;
        if (whichturn % 2 == 0) {
            $("#button2").html("O");
            player2.push(2);
            $("#button2").prop("disabled", true);
            if (player2.includes(2) && player2.includes(5) && player2.includes(8)) {
                alert("Player Two Wins");
                player2Wins = player2Wins + 1;
                $("#2wins").html(player2Wins);
                resetgame();
            }
            else if (player2.includes(1) && player2.includes(2) && player2.includes(3)) {
                alert("Player Two Wins");
                player2Wins = player2Wins + 1;
                $("#2wins").html(player2Wins);
                resetgame();
            }
            else if (player1.length + player2.length == 9){
                alert ("cat wins")
                resetgame();
            }
           

        } else if (whichturn % 2 == 1) {
            $("#button2").html("X");
            player1.push(2);
            $("#button2").prop("disabled", true);
            if (player1.includes(2) && player1.includes(5) && player1.includes(8)) {
                alert("Player One Wins");
                player1Wins = player1Wins + 1;
                $("#1wins").html(player1Wins);
                resetgame();
            }
            else if (player1.includes(1) && player1.includes(2) && player1.includes(3)) {
                alert("Player One Wins");
                player1Wins = player1Wins + 1;
                $("#1wins").html(player1Wins);
                resetgame();
            }
            else if (player1.length + player2.length == 9){
                alert ("cat wins")
                resetgame();
            }
            
        }
        console.log(player1);
        console.log(player2);

    });
    $("#button3").on("click", function () {
        whichturn = whichturn + 1;
        if (whichturn % 2 == 0) {
            $("#button3").html("O");
            player2.push(3);
            $("#button3").prop("disabled", true);
            if (player2.includes(1) && player2.includes(2) && player2.includes(3)) {
                alert("Player Two Wins");
                player2Wins = player2Wins + 1;
                $("#2wins").html(player2Wins);
                resetgame();
            }
            else if (player2.includes(3) && player2.includes(5) && player2.includes(7)) {
                alert("Player Two Wins");
                player2Wins = player2Wins + 1;
                $("#2wins").html(player2Wins);
                resetgame();
            }
            else if (player2.includes(3) && player2.includes(6) && player2.includes(9)) {
                alert("Player Two Wins");
                player2Wins = player2Wins + 1;
                $("#2wins").html(player2Wins);
                resetgame();
            }
            else if (player1.length + player2.length == 9){
                alert ("cat wins")
                resetgame();
            }
           

        } else if (whichturn % 2 == 1) {
            $("#button3").html("X");
            player1.push(3);
            $("#button3").prop("disabled", true);
            if (player1.includes(1) && player1.includes(2) && player1.includes(3)) {
                alert("Player One Wins");
                player1Wins = player1Wins + 1;
                $("#1wins").html(player1Wins);
                resetgame();
            }
            else if (player1.includes(3) && player1.includes(5) && player1.includes(7)) {
                alert("Player One Wins");
                player1Wins = player1Wins + 1;
                $("#1wins").html(player1Wins);
                resetgame();
            }
            else if (player1.includes(3) && player1.includes(6) && player1.includes(9)) {
                alert("Player One Wins");
                player1Wins = player1Wins + 1;
                $("#1wins").html(player1Wins);
                resetgame();
            }
            else if (player1.length + player2.length == 9){
                alert ("cat wins")
                resetgame();
            }
            

        }
        console.log(player1);
        console.log(player2);

    });
    $("#button4").on("click", function () {
        whichturn = whichturn + 1;
        if (whichturn % 2 == 0) {
            $("#button4").html("O");
            player2.push(4);
            $("#button4").prop("disabled", true);
            if (player2.includes(4) && player2.includes(5) && player2.includes(6)) {
                alert("Player Two Wins");
                player2Wins = player2Wins + 1;
                $("#2wins").html(player2Wins);
                resetgame();
            }
            else if (player2.includes(1) && player2.includes(4) && player2.includes(7)) {
                alert("Player Two Wins");
                player2Wins = player2Wins + 1;
                $("#2wins").html(player2Wins);
                resetgame();
            }
            else if (player1.length + player2.length == 9){
                alert ("cat wins")
                resetgame();
            }
            

        } else if (whichturn % 2 == 1) {
            $("#button4").html("X");
            player1.push(4);
            $("#button4").prop("disabled", true);
            if (player1.includes(4) && player1.includes(5) && player1.includes(6)) {
                alert("Player One Wins");
                player1Wins = player1Wins + 1;
                $("#1wins").html(player1Wins);
                resetgame();
            }
            else if (player1.includes(1) && player1.includes(4) && player1.includes(7)) {
                alert("Player One Wins");
                player1Wins = player1Wins + 1;
                $("#1wins").html(player1Wins);
                resetgame();
            }
            else if (player1.length + player2.length == 9){
                alert ("cat wins")
                resetgame();
            }
            

        }
        console.log(player1);
        console.log(player2);

    });
    $("#button5").on("click", function () {
        whichturn = whichturn + 1;
        if (whichturn % 2 == 0) {
            $("#button5").html("O");
            player2.push(5);
            $("#button5").prop("disabled", true);
            if (player2.includes(1) && player2.includes(5) && player2.includes(9)) {
                alert("Player Two Wins");
                player2Wins = player2Wins + 1;
                $("#2wins").html(player2Wins);
                resetgame();
            }
            else if (player2.includes(4) && player2.includes(5) && player2.includes(6)) {
                alert("Player Two Wins");
                player2Wins = player2Wins + 1;
                $("#2wins").html(player2Wins);
                resetgame();
            }
            else if (player2.includes(3) && player2.includes(5) && player2.includes(7)) {
                alert("Player Two Wins");
                player2Wins = player2Wins + 1;
                $("#2wins").html(player2Wins);
                resetgame();
            }
            else if (player2.includes(2) && player2.includes(5) && player2.includes(8)) {
                alert("Player Two Wins");
                player2Wins = player2Wins + 1;
                $("#2wins").html(player2Wins);
                resetgame();
            }
            else if (player1.length + player2.length == 9){
                alert ("cat wins")
                resetgame();
            }
           

        } else if (whichturn % 2 == 1) {
            $("#button5").html("X");
            player1.push(5);
            $("#button5").prop("disabled", true);
            if (player1.includes(1) && player1.includes(5) && player1.includes(9)) {
                alert("Player One Wins");
                player1Wins = player1Wins + 1;
                $("#1wins").html(player1Wins);
                resetgame();
            }
            else if (player1.includes(4) && player1.includes(5) && player1.includes(6)) {
                alert("Player One Wins");
                player1Wins = player1Wins + 1;
                $("#1wins").html(player1Wins);
                resetgame();
            }
            else if (player1.includes(3) && player1.includes(5) && player1.includes(7)) {
                alert("Player One Wins");
                player1Wins = player1Wins + 1;
                $("#1wins").html(player1Wins);
                resetgame();
            }
            else if (player1.includes(2) && player1.includes(5) && player1.includes(8)) {
                alert("Player One Wins");
                player1Wins = player1Wins + 1;
                $("#1wins").html(player1Wins);
                resetgame();
            }
            else if (player1.length + player2.length == 9){
                alert ("cat wins")
                resetgame();
            }
            

        }
        console.log(player1);
        console.log(player2);

    });
    $("#button6").on("click", function () {
        whichturn = whichturn + 1;
        if (whichturn % 2 == 0) {
            $("#button6").html("O");
            player2.push(6);
            $("#button6").prop("disabled", true);
            if (player2.includes(4) && player2.includes(5) && player2.includes(6)) {
                alert("Player Two Wins");
                player2Wins = player2Wins + 1;
                $("#2wins").html(player2Wins);
                resetgame();
            }
            else if (player2.includes(3) && player2.includes(6) && player2.includes(9)) {
                alert("Player Two Wins");
                player2Wins = player2Wins + 1;
                $("#2wins").html(player2Wins);
                resetgame();
            }
            else if (player1.length + player2.length == 9){
                alert ("cat wins");
                resetgame();
            }
            

        } else if (whichturn % 2 == 1) {
            $("#button6").html("X");
            player1.push(6);
            $("#button6").prop("disabled", true);
            if (player1.includes(4) && player1.includes(5) && player1.includes(6)) {
                alert("Player One Wins");
                player1Wins = player1Wins + 1;
                $("#1wins").html(player1Wins);
                resetgame();
            }
            else if (player1.includes(3) && player1.includes(6) && player1.includes(9)) {
                alert("Player One Wins");
                player1Wins = player1Wins + 1;
                $("#1wins").html(player1Wins);
                resetgame();
            }
            else if (player1.length + player2.length == 9){
                alert ("cat wins");
                resetgame();
            }
           

        }
        console.log(player1);
        console.log(player2);

    });
    $("#button7").on("click", function () {
        whichturn = whichturn + 1;
        if (whichturn % 2 == 0) {
            $("#button7").html("O");
            player2.push(7);
            $("#button7").prop("disabled", true);
            if (player2.includes(1) && player2.includes(4) && player2.includes(7)) {
                alert("Player Two Wins");
                player2Wins = player2Wins + 1;
                $("#2wins").html(player2Wins);
                resetgame();
            }
            else if (player2.includes(7) && player2.includes(5) && player2.includes(3)) {
                alert("Player Two Wins");
                player2Wins = player2Wins + 1;
                $("#2wins").html(player2Wins);
                resetgame();
            }
            else if (player2.includes(7) && player2.includes(8) && player2.includes(9)) {
                alert("Player Two Wins");
                player2Wins = player2Wins + 1;
                $("#2wins").html(player2Wins);
                resetgame();
            }
            else if (player1.length + player2.length == 9){
                alert ("cat wins")
                resetgame();
            }
            

        } else if (whichturn % 2 == 1) {
            $("#button7").html("X");
            player1.push(7);
            $("#button7").prop("disabled", true);
            if (player1.includes(1) && player1.includes(4) && player1.includes(7)) {
                alert("Player One Wins");
                player1Wins = player1Wins + 1;
                $("#1wins").html(player1Wins);
                resetgame();
            }
            else if (player1.includes(7) && player1.includes(5) && player1.includes(3)) {
                alert("Player One Wins");
                player1Wins = player1Wins + 1;
                $("#1wins").html(player1Wins);
                resetgame();
            }
            else if (player1.includes(7) && player1.includes(8) && player1.includes(9)) {
                alert("Player One Wins");
                player1Wins = player1Wins + 1;
                $("#1wins").html(player1Wins);
                resetgame();
            }
            else if (player1.length + player2.length == 9){
                alert ("cat wins")
                resetgame();
            }
            

        }
        console.log(player1);
        console.log(player2);

    });
    $("#button8").on("click", function () {
        whichturn = whichturn + 1;
        if (whichturn % 2 == 0) {
            $("#button8").html("O");
            player2.push(8);
            $("#button8").prop("disabled", true);
            if (player2.includes(7) && player2.includes(8) && player2.includes(9)) {
                alert("Player Two Wins");
                player2Wins = player2Wins + 1;
                $("#2wins").html(player2Wins);
                resetgame();
            }
            else if (player2.includes(2) && player2.includes(5) && player2.includes(8)) {
                alert("Player Two Wins");
                player2Wins = player2Wins + 1;
                $("#2wins").html(player2Wins);
                resetgame();
            }
            else if (player1.length + player2.length == 9){
                alert ("cat wins")
                resetgame();
            }
        

        } else if (whichturn % 2 == 1) {
            $("#button8").html("X");
            player1.push(8);
            $("#button8").prop("disabled", true);
            if (player1.includes(7) && player1.includes(8) && player1.includes(9)) {
                alert("Player One Wins");
                player1Wins = player1Wins + 1;
                $("#1wins").html(player1Wins);
                resetgame();
            }
            else if (player1.includes(2) && player1.includes(5) && player1.includes(8)) {
                alert("Player One Wins");
                player1Wins = player1Wins + 1;
                $("#1wins").html(player1Wins);
                resetgame();
            }
            else if (player1.length + player2.length == 9){
                alert ("cat wins")
                resetgame();
            }

        }
        console.log(player1);
        console.log(player2);

    });
    $("#button9").on("click", function () {
        whichturn = whichturn + 1;
        if (whichturn % 2 == 0) {
            $("#button9").html("O");
            player2.push(9);
            $("#button9").prop("disabled", true);
            if (player2.includes(9) && player2.includes(5) && player2.includes(1)) {
                alert("Player Two Wins");
                player2Wins = player2Wins + 1;
                $("#2wins").html(player2Wins);
                resetgame();
            }
            else if (player2.includes(9) && player2.includes(6) && player2.includes(3)) {
                alert("Player Two Wins");
                player2Wins = player2Wins + 1;
                $("#2wins").html(player2Wins);
                resetgame();
            }
            else if (player2.includes(9) && player2.includes(8) && player2.includes(7)) {
                alert("Player Two Wins");
                player2Wins = player2Wins + 1;
                $("#2wins").html(player2Wins);
                resetgame();
            }
            else if (player1.length + player2.length == 9){
                alert ("cat wins")
                resetgame();
            }


        } else if (whichturn % 2 == 1) {
            $("#button9").html("X");
            player1.push(9);
            $("#button9").prop("disabled", true);
            if (player1.includes(9) && player1.includes(5) && player1.includes(1)) {
                alert("Player One Wins");
                player1Wins = player1Wins + 1;
                $("#1wins").html(player1Wins);
                resetgame();
            }
            else if (player1.includes(9) && player1.includes(6) && player1.includes(3)) {
                alert("Player One Wins");
                player1Wins = player1Wins + 1;
                $("#1wins").html(player1Wins);
                resetgame();
            }
            else if (player1.includes(9) && player1.includes(8) && player1.includes(7)) {
                alert("Player One Wins");
                player1Wins = player1Wins + 1;
                $("#1wins").html(player1Wins);
                resetgame();
            }
            else if (player1.length + player2.length == 9){
                alert ("cat wins")
                resetgame();
            }
          
        } 
        console.log(player1);
        console.log(player2);

					
			

    });
    function resetgame() {
	      $(":button").html(null);
        $("#reset").html("Reset");
        $(":button").prop("disabled", false);
        player1 = [];
        player2 = [];
    }
    
    $("#reset").on("click", function () {
        $(":button").html(null);
        $("#reset").html("Reset");
        $(":button").prop("disabled", false);
        player1 = [];
        player2 = [];
    });
    function cat(){
    if (whichturn == 9)
    alert ("cat");
    
   }
});








