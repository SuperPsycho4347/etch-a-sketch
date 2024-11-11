const containerDiv = document.querySelector(".container");
let gridRows = 16;
let gridColumns = 16;

function create16x16() {
    for (let i = 0; i < gridRows; i++) {
        const row= document.createElement("div");
        row.classList += "row";
        containerDiv.appendChild(row);
        for (let j = 0; j < gridColumns; j++) {
            let cell = document.createElement("div");
            cell.className = "cell"
            anotherColumn.appendChild(cell);
        }
        
    }
}

create16x16();