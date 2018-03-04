function InputBar(l) {

    this.listener = l;

    this.nameBox    = document.createElement('input');
    this.initBox    = document.createElement('input');
    this.inBar      = document.createElement('DIV');

    this.nameBox.className = "character";
    this.initBox.className = "initiative";        

    this.nameBox.placeholder = "Character Name";
    this.initBox.placeholder = "Initiative";

    this.inBar.appendChild(this.initBox);
    this.inBar.appendChild(this.nameBox);    
    
    this.getName = function() {
        return this.nameBox.vakue;
    }

    this.getInit = function() {
        return this.initBox.vakue;
    }
}
