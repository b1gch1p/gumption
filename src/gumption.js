
function Gumption() {
    this.init_modal = new InitiativeModal();

    this.lst = new InitList();
    this.nav = new NavBar();

    this.initUI = function() {
        document.body.appendChild(this.nav.button_div);
        document.body.appendChild(this.nav.rounds_div);
        document.body.appendChild(this.lst.initDiv);
        this.nav.setTimeForRound(this.lst.rounds);
    }
    
    this.nav.add_button.onclick = () => {
        this.init_modal.displayModal();
    }

    this.nav.clear_button.onclick = () => {
        this.lst.clear();
        this.nav.setTimeForRound(this.lst.rounds);
    }

    this.nav.next_button.onclick = () => {
        this.lst.nextInitiative();
        this.nav.setTimeForRound(this.lst.rounds);
    }

    this.nav.prev_button.onclick = () => {
        this.lst.prevInitiative();
        this.nav.setTimeForRound(this.lst.rounds);
    }

    this.init_modal.cancel_button.onclick = () => {
        this.init_modal.hideModal();
    }

    this.init_modal.ok_button.onclick = () => {
        i = this.init_modal.getInitiative();
        this.lst.insert(i);
        this.init_modal.hideModal();
        this.lst.slectInitiative()
    }
}

