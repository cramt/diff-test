import "mocha"
import { createAlgorithms, generateRandomNumbers, generateTestResults } from ".";
import { MathFunction } from "./MathFunction";
import * as math from "mathjs"
import { expect } from 'chai';

const testFunctions: MathFunction[] = [
    "x^sin(x)"
]

const testPoints = generateRandomNumbers(500);

const testResults = generateTestResults(testFunctions, testPoints);

