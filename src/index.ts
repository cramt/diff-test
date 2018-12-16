import { BackwardsFiniteDifferenceApproximation } from './DifferentialAlgorithms/BackwardsFiniteDifferenceApproximation';
import { CentralFiniteDifferenceApproximation } from './DifferentialAlgorithms/CentralFiniteDifferenceApproximation';
import { MathJsAlgorithm } from './DifferentialAlgorithms/MathJsAlgorithm';
import * as math from "mathjs"
import { DifferentialAlgorithm } from "./DifferentialAlgorithm";
import { MathFunction } from "./MathFunction";
import { ForwardFiniteDifferenceApproximation } from './DifferentialAlgorithms/ForwardFiniteDifferenceApproximation';

export const INT32_MAX = 2147483647
export const INT32_MIN = -2147483647
export const GLOBAL_DELTA_X_VALUE = 0.000001;

export function createAlgorithms(f: MathFunction): Promise<DifferentialAlgorithm[]> {
    let inits: DifferentialAlgorithm[] = [
        new MathJsAlgorithm(),
        new CentralFiniteDifferenceApproximation(),
        new ForwardFiniteDifferenceApproximation(),
        new BackwardsFiniteDifferenceApproximation()
    ]
    return Promise.all<DifferentialAlgorithm>(inits.map(x => x.Prepare(f)))
}

export function generateRandomNumbers(l: number): number[] {
    let re: number[] = [];
    for (let i = 0; i < l; i++) {
        re[re.length] = math.random(0, INT32_MAX);
    }
    return re;
}

export interface TestResult {
    function: MathFunction;
    derivative: MathFunction;
    dataSet: {
        [key: number]: number
    }
}

export async function generateTestResults(testFunctions: MathFunction[], testPoints: number[]): Promise<TestResult[]> {
    let re: TestResult[] = [];
    testFunctions.map(func => {
        let derivative = math.derivative(func, "x");
        let result: TestResult = {
            function: func,
            derivative: derivative.toString(),
            dataSet: {}
        }
        testPoints.forEach(testPoint => {
            result.dataSet[testPoint] = derivative.eval({ x: testPoint })
        });
        re[re.length] = result;
    });
    return re;
}



/*
const parser = math.parser()
let y = "x^sin(x)"
console.log(math.eval("f(x) = " + y)(2));
*/

//console.log(math.parse("x^sin(x)").compile().eval({x:2}))

(async ()=>{
    let a = await (await new MathJsAlgorithm().Prepare("x^sin(x)")).Run(23)
    console.log(a)
})()