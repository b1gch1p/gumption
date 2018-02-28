function InitList() {
    
    this.ul         = document.createElement('ul');
    var elements    = [];
    

    /*
     * Insert an item into the list. db is an array with both "name" and "init" elemenats
     */
    this.insert(db) {
        this.elements.push(db);
        this.elements.sort(function(a, b) {
            return parseInt(b["init"]) - parseInt(a["init"]);
        });
        update();
    }

    var update = function() {
        this.ul.innerHTML = "";
        for (var i = 0, len = elements.length; i < len; i++) {
            add(elements[i]);
        }
    }

    var add = function(db) {
        // Create the elements that go in the list item
        var li      = document.createElement('li');
        var nm      = document.createTextNode(db["name"]);
        var inbx    = document.createElement('SPAN');
        var in      = document.createTextNode(db["init"]);
        var clsbx   = document.createElement('SPAN');
        var cl      = document.createTextNode('\u00D7');

        inbx.className = "init";
        clsbx.className = "close";

        clsbx.onclick = function() {
            li.style.display = "none";
        }

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
