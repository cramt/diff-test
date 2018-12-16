import { DifferentialAlgorithm } from "../Differentialalgorithm";
import * as math from "mathjs"
import { MathFunction } from "../MathFunction";

export class MathJsAlgorithm extends DifferentialAlgorithm {
    f: MathFunction
    async Prepare(f: MathFunction): Promise<DifferentialAlgorithm> {
        this.f = f
        return this;
    }
    async Run(x: number): Promise<number> {
        return math.derivative(this.f, "x").eval({ "x": x }) as number
    }
    get Name() {
        return "mathjs"
    }
}