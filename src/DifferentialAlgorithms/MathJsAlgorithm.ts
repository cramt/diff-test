import { DifferentialAlgorithm } from "../Differentialalgorithm";
import * as math from "mathjs"
import { MathFunction } from "../MathFunction";

export class MathJsAlgorithm extends DifferentialAlgorithm {
    async Prepare(f: MathFunction): Promise<DifferentialAlgorithm> {

        return this;
    }
    async Run(x: number): Promise<number> {

        return 0;
    }
}