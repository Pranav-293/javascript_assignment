//JavaScript program to convert a comma-separated values (CSV) string to a 2D array.

var csv = `A, B, C, D
E, F, G, H
I, J, K, L`;

function csvToArray(csv){
    const rows = csv.split("\n");
    const result = [];
    for(let i = 0;i<rows.length;i++){
        result[i] = rows[i].split(",");
    }
    console.log(result);
}

csvToArray(csv);
