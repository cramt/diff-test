import { FiniteDifferenceApproximation } from './DifferentialAlgorithms/FiniteDifferenceApproximation';
import { MathJsAlgorithm } from './DifferentialAlgorithms/MathJsAlgorithm';
import * as math from "mathjs"
import { DifferentialAlgorithm } from "./DifferentialAlgorithm";
import { MathFunction } from "./MathFunction";

export const INT32_MAX = 2147483647
export const INT32_MIN = -2147483647
export const GLOBAL_H_VALUE = 0.000001;

export function createAlgorithms(f: MathFunction): Promise<DifferentialAlgorithm[]> {
    let inits: DifferentialAlgorithm[] = [
        new MathJsAlgorithm(),
        new FiniteDifferenceApproximation(),
    ]
    return Promise.all<DifferentialAlgorithm>(inits.map(x => x.Prepare(f)))
}

export function generateRandomNumbers(l: number): number[] {
    let re: number[] = [];
    for(let i = 0; i < l; i++){
        re[re.length] = math.random(0, INT32_MAX);
    }
    return re;
}

/*
const parser = math.parser()
let y = "x^sin(x)"
console.log(math.eval("f(x) = " + y)(2));
*/

console.log(math.parse("x^sin(x)").compile().eval({x:2}))