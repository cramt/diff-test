import "mocha"
import { createAlgorithms, generateRandomNumbers } from ".";
import { MathFunction } from "./MathFunction";
import * as math from "mathjs"
import { expect } from 'chai';

const testFunction: MathFunction[] = [
    "x^sin(x)"
]

const testPoints = generateRandomNumbers(500);

