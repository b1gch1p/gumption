
function Tracker() {
    this.init_modal = new InitiativeModal();

    this.lst = new InitList();
    this.nav = new NavBar();

    this.initUI = function() {
        document.body.appendChild(this.nav.button_div);
        document.body.appendChild(this.lst.initDiv);
    }
    
    this.askForInit = function() {
        this.init_modal.displayModal();
    }

}

