function InitList() {
    
    this.ul         = document.createElement('ul');
    var elements    = [];
    

    /*
     * Insert an item into the list. db is an array with both "name" and "init" elemenats
     */
    this.insert = function(db) {
        elements.push(db);
        elements.sort(function(a, b) {
            return parseInt(b["init"]) - parseInt(a["init"]);
        });
        this.update();
    }

    this.update = function() {
        this.ul.innerHTML = "";
        for (var i = 0, len = elements.length; i < len; i++) {
            this.add(elements[i]);
        }
    }

    this.add = function(db) {
        // Create the elements that go in the list item
        var li      = document.createElement('li');
        var nm      = document.createTextNode(db["name"]);
        var inbx    = document.createElement('SPAN');
        var ini      = document.createTextNode(db["init"]);
        var clsbx   = document.createElement('SPAN');
        var cl      = document.createTextNode('\u00D7');

        inbx.className = "init";
        clsbx.className = "close";

        clsbx.onclick = function() {
            li.style.display = "none";
        }

        inbx.appendChild(ini);
        clsbx.appendChild(cl);
        li.appendChild(nm);
        li.appendChild(inbx);
        li.appendChild(clsbx);

        this.ul.appendChild(li);

    }

    this.clear = function() {
        this.ul.innerHTML = "";
        elements = [];
    }

}
