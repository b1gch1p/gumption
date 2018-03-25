function InputBar(l) {

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

    this.input_bar   = document.createElement('DIV');
    this.button_div  = document.createElement('DIV');

    this.button_div.className = "nav_div";
    
    this.button_div.appendChild(this.next_button);
    this.button_div.appendChild(this.prev_button);
    this.button_div.appendChild(this.add_button);
    this.button_div.appendChild(this.clear_button);
    this.input_bar.appendChild(this.button_div);

}
