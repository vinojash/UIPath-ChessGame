function showText(color) {var element = document.getElementById("processgif");element.style.setProperty("visibility", "unset");var text = document.getElementById("user_info");if (color == "b") {text.innerHTML = "Bot s turn On Black side, Please wait..!";} else {text.innerHTML = "Bot s turn On white side, Please wait..!";}var abc = game.game_over();return abc;}showText();