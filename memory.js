document.addEventListener("DOMContentLoaded", function() {

  
    var cardsList = ["bobr.png","zebra.png","pies.png","kaczka.png","mors.png","osiol.png","mors.png","krowa.png","slon.png","lew.png","kaczka.png","krowa.png","bobr.png","lew.png","pies.png","zebra.png","malpa.png","slon.png","osiol.png","malpa.png"];

  
    var card0 = document.getElementById("card0");
    var card1 = document.getElementById("card1");
    var card2 = document.getElementById("card2");
    var card3 = document.getElementById("card3");
    var card4 = document.getElementById("card4");
    var card5 = document.getElementById("card5");
    var card6 = document.getElementById("card6");
    var card7 = document.getElementById("card7");
    var card8 = document.getElementById("card8");
    var card9 = document.getElementById("card9");
    var card10 = document.getElementById("card10");
    var card11 = document.getElementById("card11");
    var card12 = document.getElementById("card12");
    var card13 = document.getElementById("card13");
    var card14 = document.getElementById("card14");
    var card15 = document.getElementById("card15");
    var card16 = document.getElementById("card16");
    var card17 = document.getElementById("card17");
    var card18 = document.getElementById("card18");
    var card19 = document.getElementById("card19");

  
    var stop = false; 
    var visible1 = false; 
    var visible1_index; 
    var left = 10; 
    var counter = 0; 
    var cards = [];

  
    function mixArray(cardsList) {
        for (var i = cardsList.length; i >= 0; i--) {
            var f = Math.floor(Math.random()*(i+1));
            for (var j = 0, k = 0; j < cardsList.length; j++) {
                if (cards[j] === undefined) {
                    if (k === f) {
                        cards[j] = cardsList[i];
                        break;
                    }
                    k++;
                }
            }
        }
        return cards;
    }
    mixArray(cardsList);

  
    function uncoverCard(number) {
        var cardd = document.getElementById("card"+number);
        var opac = window.getComputedStyle(cardd,null).getPropertyValue('opacity');
        if (opac != 0 && stop == false) { 
            document.getElementById("card" + number).style.backgroundImage = "url(./Images/" + cards[number] + ")";

            if (visible1 == false) { 
                visible1 = true;
                visible1_index = number;
                stop = false;
            } else {
             
                if (cards[visible1_index] == cards[number]) {
                    setTimeout(function() {
                        goodCards(number, visible1_index)
                    }, 1000);
                } else {
                    setTimeout(function() {
                        wrongCards(number, visible1_index)
                    }, 1000);
                }
                counter++;
                document.querySelector(".score").innerHTML = 'Number of Mapings : ' + counter;
                visible1 = false;
            }
        }
    }

  
    function goodCards(numb1, numb2) {
        document.getElementById("card" + numb1).style.opacity = "0";
        document.getElementById("card" + numb2).style.opacity = "0";
        left--;
        if (left == 0) {
            document.querySelector(".memory-board").innerHTML = "<p>=You WIN 🏆 in <span>" + counter + "</span> Maps !<br/><a href='./memory.html'><button class='new-game' onclick='mixArray(cards)'>Play again▶️</button></a></p>";
            document.querySelector(".memory-score").style.visibility = "hidden";
        }
        stop = false;
    }

    function wrongCards(numb1, numb2) {
        document.getElementById("card" + numb1).style.backgroundImage = "url(./Images/karta.png)";
        document.getElementById("card" + numb1).classList.remove("activeCard");
        document.getElementById("card" + numb2).style.backgroundImage = "url(./Images/karta.png)";
        document.getElementById("card" + numb2).classList.remove("activeCard");
        stop = false;
    }

   
    card0.addEventListener("click", function() {
        uncoverCard(0);
        this.classList.add("activeCard");
    });
    card1.addEventListener("click", function() {
        uncoverCard(1);
        this.classList.add("activeCard");
    });
    card2.addEventListener("click", function() {
        uncoverCard(2);
        this.classList.add("activeCard");
    });
    card3.addEventListener("click", function() {
        uncoverCard(3);
        this.classList.add("activeCard");
    });
    card4.addEventListener("click", function() {
        uncoverCard(4);
        this.classList.add("activeCard");
    });
    card5.addEventListener("click", function() {
        uncoverCard(5);
        this.classList.add("activeCard");
    });
    card6.addEventListener("click", function() {
        uncoverCard(6);
        this.classList.add("activeCard");
    });
    card7.addEventListener("click", function() {
        uncoverCard(7);
        this.classList.add("activeCard");
    });
    card8.addEventListener("click", function() {
        uncoverCard(8);
        this.classList.add("activeCard");
    });
    card9.addEventListener("click", function() {
        uncoverCard(9);
        this.classList.add("activeCard");
    });
    card10.addEventListener("click", function() {
        uncoverCard(10);
        this.classList.add("activeCard");
    });
    card11.addEventListener("click", function() {
        uncoverCard(11);
        this.classList.add("activeCard");
    });
    card12.addEventListener("click", function() {
        uncoverCard(12);
        this.classList.add("activeCard");
    });
    card13.addEventListener("click", function() {
        uncoverCard(13);
        this.classList.add("activeCard");
    });
    card14.addEventListener("click", function() {
        uncoverCard(14);
        this.classList.add("activeCard");
    });
    card15.addEventListener("click", function() {
        uncoverCard(15);
        this.classList.add("activeCard");
    });
    card16.addEventListener("click", function() {
        uncoverCard(16);
        this.classList.add("activeCard");
    });
    card17.addEventListener("click", function() {
        uncoverCard(17);
        this.classList.add("activeCard");
    });
    card18.addEventListener("click", function() {
        uncoverCard(18);
        this.classList.add("activeCard");
    });
    card19.addEventListener("click", function() {
        uncoverCard(19);
        this.classList.add("activeCard");
    });


    var btn = document.querySelector(".new-game");
    btn.addEventListener("click", function(cards,i) {
        for (i = cards.length; i; cards.push(cards.splice(~~(Math.random()*(i--)),1)));
    })


});
