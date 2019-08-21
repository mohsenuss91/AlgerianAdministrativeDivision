// Code by : @celyes
// Read the file: README.md

let fs = require('fs'),
    convert = require('xml-js'),
    json = fs.readFileSync('Algeria.json', 'utf8'),
    options = {compact: true, ignoreComment: true, spaces: 4},
    xml = convert.json2xml(json, options);

fs.writeFile('Algeria.xml', xml, (err) => {
    if (err) throw err;
    console.log("File converted successfully! ");
});