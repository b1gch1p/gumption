function NavBar(l) {

    this.listener = l;

    this.add_button  = document.createElement('button');
    this.clear_button  = document.createElement('button');
    this.next_button = document.createElement('button');
    this.prev_button = document.createElement('button');
    
    this.add_button.className =   "nav_button";
    this.clear_button.className = "nav_button";
    this.next_button.className =  "nav_button";
    this.prev_button.className =  "nav_button";

    this.add_button.innerHTML = "ADD";
    this.clear_button.innerHTML = "CLEAR";
    this.next_button.innerHTML = "NEXT";
    this.prev_button.innerHTML = "PREV";

    this.button_div  = document.createElement('DIV');
    this.button_div.className = "nav";
    
    this.button_div.appendChild(this.next_button);
    this.button_div.appendChild(this.prev_button);
    this.button_div.appendChild(this.add_button);
    this.button_div.appendChild(this.clear_button);

    this.rounds_div = document.createElement('DIV');
    this.rounds_div.className = "rounds";

    this.rounds = document.createElement('SPAN');
    this.time = document.createElement('SPAN');


    this.rounds_div.appendChild(this.rounds);
    this.rounds_div.appendChild(this.time);

    this.setTimeForRound = function(rnd) {
        this.rounds.innerHTML = "Round: " + rnd.toString() + "   ";
        var t = 15 * rnd;

        var m = Math.floor(t / 60);
        var s = t % 60;
        this.time.innerHTML = "Time: " + m.toString() + ":" + s.toString();
    }
}

