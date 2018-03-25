
function Tracker() {

    this.lst = new InitList();
    this.nav = new NavBar();

    this.nav.setAddButtonAction(function() {
        this.lst.add(["name","10"]);
    })

    this.initUI = function() {
        document.body.appendChild(this.nav.button_div);
        document.body.appendChild(this.lst.initDiv);
    }


    
}

