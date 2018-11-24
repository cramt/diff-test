import { DifferentialAlgorithm } from "../DifferentialAlgorithm";
import * as maple from "maple-node-bindings"

export class MapleAlgorithm extends DifferentialAlgorithm {
    maple: maple.MapleEngine
    df: string;
    async Prepare(f: string): Promise<DifferentialAlgorithm> {
        this.maple = new maple.MapleEngine("D:\\programs\\maple\\bin.X86_64_WINDOWS\\cmaple.exe")
        this.df = await this.maple.eval("D(x->" + f + ")")
        return this;
    }
    Run(x: number): Promise<number> {
        return this.maple.evalf(this.df + "(" + x + ")").then(parseFloat)
    }
}