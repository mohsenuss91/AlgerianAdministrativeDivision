"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('module-alias/register');
var parsers_1 = require("@/helpers/parsers");
var datastack = parsers_1.parseJsonFile(parsers_1.getJsonLocation("Algeria"));
exports.Wilayas = datastack;
exports.getByWilaya = function (searchFor) {
    var language = "french";
    if (parsers_1.isArabic(searchFor))
        language = "arabic";
    return exports.Wilayas.find(function (wilayaObj) { return (wilayaObj[language] == searchFor); });
};
exports.getByMaticule = function (matricule) {
    parsers_1.checkStringNumber(matricule, "matrilcule");
    return exports.Wilayas.find(function (wilayaObj) { return (wilayaObj.matricule == matricule); });
};
exports.getByCallingCode = function (callingCode) {
    parsers_1.checkStringNumber(callingCode, "calling code");
    return exports.Wilayas.find(function (wilayaObj) { return (wilayaObj.matricule == callingCode); });
};
