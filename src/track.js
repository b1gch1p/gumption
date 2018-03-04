
function Tracker() {

    this.lst = new InitList();
    this.inp = new InputBar();

    this.initUI = function() {
        document.body.appendChild(this.inp.inBar);
        document.body.appendChild(this.lst.initDiv);
    }
    
    document.onkeyup = function(e) {
        if(e.key == "Enter") {
            addCharacter();
        }
    }

    function addCharacter() {
        db = [];
        db['name'] = this.inp.getName();
        db['init'] = this.inp.getInit();
        this.lst.insert(db);
    }
}
