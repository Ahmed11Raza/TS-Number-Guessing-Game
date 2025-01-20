"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
// Initialize readline interface for user input
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// Game variables
var randomNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1-100
var maxAttempts = 5;
var attempts = 0;
// Function to prompt user input
var askQuestion = function (question) {
    return new Promise(function (resolve) { return rl.question(question, resolve); });
};
// Main game logic
var playGame = function () { return __awaiter(void 0, void 0, void 0, function () {
    var answer, userGuess;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("Welcome to the Number Guessing Game!");
                console.log("I'm thinking of a number between 1 and 100.");
                console.log("You have ".concat(maxAttempts, " attempts to guess it."));
                _a.label = 1;
            case 1:
                if (!(attempts < maxAttempts)) return [3 /*break*/, 3];
                return [4 /*yield*/, askQuestion("Attempt ".concat(attempts + 1, ": Enter your guess: "))];
            case 2:
                answer = _a.sent();
                userGuess = parseInt(answer, 10);
                if (isNaN(userGuess)) {
                    console.log("Please enter a valid number.");
                    return [3 /*break*/, 1];
                }
                attempts++;
                if (userGuess === randomNumber) {
                    console.log("\uD83C\uDF89 Congratulations! You guessed the number ".concat(randomNumber, " correctly in ").concat(attempts, " attempts."));
                    rl.close();
                    return [2 /*return*/];
                }
                else if (userGuess < randomNumber) {
                    console.log("Too low! Try again.");
                }
                else {
                    console.log("Too high! Try again.");
                }
                return [3 /*break*/, 1];
            case 3:
                console.log("\uD83D\uDE1E You've used all ".concat(maxAttempts, " attempts. The number was ").concat(randomNumber, ". Better luck next time!"));
                rl.close();
                return [2 /*return*/];
        }
    });
}); };
// Start the game
playGame();
