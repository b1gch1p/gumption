
function IniTracker() {

    this.lst = new InitList();

    this.initUI = function() {
        document.body.appendChild(this.lst.ul);
    }
    
    document.onkeydown = function(e) {

        switch(e.key) {
            case 'a':
            case 'A':
                console.log("add a new user");
                break;
        }
    }
}
