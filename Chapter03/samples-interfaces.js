"use strict";
// Interfaces
// ==========
var complexType;
complexType = { id: 1, name: "test" };
var incompleteType;
var idOnly = { id: 1 };
var idAndName = { id: 2, name: "idName" };
idAndName = idOnly;
var weakTypeNoOverlap;
function printNameOrDescription(value) {
    if ('id' in value) {
        console.log("found id ! | name : " + value.name);
    }
    if ('value' in value) {
        console.log("found value ! : description : " + value.description);
    }
}
