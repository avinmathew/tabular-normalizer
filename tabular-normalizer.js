// Usage: node normalise-tabular.js Input-Model.bim Output-Model.bim

const fs = require('fs');

var args = process.argv.slice(2);

inputFile = args[0];
outputFile = args[1];

const inFile = fs.readFileSync(inputFile);
const model = JSON.parse(inFile);

// Reorder tables
model.model.tables.sort((a, b) => a.name.localeCompare(b.name));

model.model.tables.forEach(table => {
    // Reorder columns
    table.columns.sort((a, b) => a.name.localeCompare(b.name));

    // Reorder measures
    if (table.measures) {
        table.measures.sort((a, b) => a.name.localeCompare(b.name));
    }
});

// Reorder relationships
model.model.relationships.sort((a, b) => {
    return (a.fromTable + a.toTable + a.fromColumn + a.toColumn).localeCompare(b.fromTable + b.toTable + b.fromColumn + b.toColumn);
});

const outFile = JSON.stringify(model, null, 2); // spacing level = 2 to match original
fs.writeFileSync(outputFile, outFile);
