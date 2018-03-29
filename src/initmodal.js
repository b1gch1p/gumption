function InitiativeModal() {

    this.init_input = document.createElement('input');
    this.name_input = document.createElement('input');
    this.ok_button = document.createElement('button');
    this.cancel_button = document.createElement('button');

    this.modal_div = document.createElement('DIV');
    this.modal_content = document.createElement("DIV");

    this.modal_div.className = "modal";
    this.modal_content.className = "modal_content";

    this.init_input.className = "input"
    this.name_input.className = "input"
    this.ok_button.className = "modal_button";
    this.cancel_button.className = "modal_button";

    this.cancel_button.id = "modal_cancel";
    this.ok_button.id = "modal_ok";

    this.cancel_button.innerHTML = "cancel";
    this.ok_button.innerHTML = "ok";
    this.init_input.placeholder = "Initiative";
    this.name_input.placeholder = "Name";
    
    this.modal_content.appendChild(this.init_input);
    this.modal_content.appendChild(this.name_input);
    this.modal_content.appendChild(this.cancel_button);
    this.modal_content.appendChild(this.ok_button);

    this.modal_div.appendChild(this.modal_content);

    document.body.appendChild(this.modal_div);

    this.displayModal = function() {
        console.log("this");
        this.modal_div.style.display = "block";
    }

    this.hideModal = function(){
        this.modal_div.style.display = "none";
    }
}