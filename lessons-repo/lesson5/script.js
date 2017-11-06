function board() {
    var table = document.createElement("table");
    var tbody = document.createElement("tbody");
    table.appendChild(tbody);
    for(var i = 0; i < 10; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < 10; j++){
            var td = document.createElement('td');
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    document.getElementById("myTable").appendChild(table);
}
