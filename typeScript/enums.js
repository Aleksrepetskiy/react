"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DirectionNum;
(function (DirectionNum) {
    DirectionNum[DirectionNum["Up"] = 0] = "Up";
    DirectionNum[DirectionNum["Right"] = 1] = "Right";
    DirectionNum[DirectionNum["Down"] = 2] = "Down";
    DirectionNum[DirectionNum["Left"] = 3] = "Left";
})(DirectionNum || (DirectionNum = {}));
var DirectionString;
(function (DirectionString) {
    DirectionString["Up"] = "Up";
    DirectionString["Right"] = "Right";
    DirectionString["Down"] = "Down";
    DirectionString["Left"] = "Left";
})(DirectionString || (DirectionString = {}));
var DirectionStringNum;
(function (DirectionStringNum) {
    DirectionStringNum[DirectionStringNum["Up"] = 1] = "Up";
    DirectionStringNum["Down"] = "Down";
})(DirectionStringNum || (DirectionStringNum = {}));
var DirectionCalk;
(function (DirectionCalk) {
    DirectionCalk[DirectionCalk["Up"] = 1] = "Up";
    DirectionCalk[DirectionCalk["Left"] = calcEnum()] = "Left";
})(DirectionCalk || (DirectionCalk = {}));
function calcEnum() {
    return 2;
}
function runEnum(obj) {
    return 2;
}
runEnum(DirectionString);
var Test;
(function (Test) {
    Test[Test["A"] = 0] = "A";
})(Test || (Test = {}));
let test = Test.A;
let namesA = Test[test];
