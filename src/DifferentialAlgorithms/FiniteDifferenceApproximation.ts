import { DifferentialAlgorithm } from "../DifferentialAlgorithm";
import { MathFunction } from "../MathFunction";
import math from "mathjs";
import { GLOBAL_H_VALUE } from "..";

export class FiniteDifferenceApproximation extends DifferentialAlgorithm {
    of: (x: number) => number;
    df: (x: number) => number;
    halfH = GLOBAL_H_VALUE / 2;
    async Prepare(f: MathFunction): Promise<DifferentialAlgorithm> {
        let strFunc = math.compile(f)
        this.of = x => {
            return strFunc.eval({ x: x }) as number
        }
        this.df = x => {
            return (this.of(x + this.halfH) - this.of(x - this.halfH)) / GLOBAL_H_VALUE
        }
        return this;
    }
    async Run(x: number): Promise<number> {
        return this.df(x);
    }
}