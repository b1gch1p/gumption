function InputBar(l) {

    this.listener = l;

    this.nameBox    = document.createElement('input');
    this.initBox    = document.createElement('input');
    this.addButton  = document.createElement('button');
    this.newButton  = document.createElement('button');

    this.inBar      = document.createElement('DIV');
    this.indiv      = document.createElement('DIV');
    this.butdiv     = document.createElement('DIV');

    this.charspan   = document.createElement('SPAN');

    this.nameBox.className = "character";
    this.initBox.className = "initiative";        
    this.butdiv.className = "butdiv";
    this.indiv.classname = "indiv";
    this.charspan.className = "inspan"; 
    this.addButton.className = "addbutton";
    this.newButton.className = "newbutton";
    
    this.nameBox.placeholder = "Character Name";
    this.initBox.placeholder = "Initiative";

    this.charspan.appendChild(this.nameBox);
    this.indiv.appendChild(this.initBox);
    this.indiv.appendChild(this.charspan);    

    this.addButton.innerHTML = "ADD";
    this.newButton.innerHTML = "NEW";

    this.butdiv.appendChild(this.addButton);
    this.butdiv.appendChild(this.newButton);

    this.inBar.appendChild(this.indiv);
    this.inBar.appendChild(this.butdiv);

    this.getName = function() {
        return this.nameBox.value;
    }

    this.getInit = function() {
        return this.initBox.value;
    }
}
