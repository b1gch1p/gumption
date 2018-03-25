
function Tracker() {

    this.lst = new InitList();
    this.inp = new InputBar();

    this.initUI = function() {
        document.body.appendChild(this.inp.input_bar);
        document.body.appendChild(this.lst.initDiv);
    }
    
}

document.onkeyup = function(e) {
    if(e.key == "Enter") {
        var db = [];
        db["name"] = trk.inp.getName();
        db["init"] = trk.inp.getInit();
        trk.lst.insert(db);
    }
}
