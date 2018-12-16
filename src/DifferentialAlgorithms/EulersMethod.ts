import { GLOBAL_DELTA_X_VALUE } from "..";
import { MathFunction } from "../MathFunction";
import math from "mathjs";
import { DifferentialAlgorithm } from "../DifferentialAlgorithm";

export class EulersMethod extends DifferentialAlgorithm {
    f: (x: number) => number;
    halfH = GLOBAL_DELTA_X_VALUE / 2;
    async Prepare(f: MathFunction): Promise<DifferentialAlgorithm> {
        let strFunc = math.compile(f)
        this.f = x => {
            return strFunc.eval({ x: x }) as number
        }
        return this;
    }
    async Run(point: number): Promise<number> {
        let x0 = 0;
        let table = {} as any
        let oldX = x0
        let oldY = this.f(oldX)
        table[oldX] = oldY
        let stepSize = GLOBAL_DELTA_X_VALUE
        let slope = 0
        while (point > oldX) {
            let newX = oldX + stepSize
            let newY = this.f(newX)
            table[newX] = newY
            slope = (newY - oldY) / (newX - oldX)
            oldX = newX
            oldY = newY
        }
        return slope
    }
    get Name() {
        return "eulers method"
    }
}