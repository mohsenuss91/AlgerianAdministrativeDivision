"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path_1 = require("path");
exports.getJsonLocation = function (filename) {
    return path_1.resolve("@/", "..", filename + ".json");
};
var alphabet = "abcdefghijklmnopqrstuvwxyz";
exports.isArabic = function (text) {
    var textLower = text.toLowerCase();
    var alphas = alphabet.toLowerCase().split('');
    for (var index = 0; index < alphas.length; index++) {
        var element = alphas[index];
        if (textLower.includes(element))
            return false;
    }
    return true;
};
exports.checkStringNumber = function (stringNumber, variableName) {
    try {
        parseInt(stringNumber);
    }
    catch (error) {
        throw variableName + " " + stringNumber + " needs to be a number in string format";
    }
};
exports.parseJsonFile = function (file_location) {
    var data = null;
    var exists = fs.existsSync(file_location);
    if (exists) {
        var content = fs.readFileSync(file_location, { encoding: 'utf8' });
        data = JSON.parse(content.toString());
    }
    else
        throw "Fialed to find " + file_location;
    return data;
};
