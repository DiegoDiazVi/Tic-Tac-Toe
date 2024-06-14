import Square from "./Square";
import { TURNS } from "../utils/utils";


export default function Turns({ turn }) {
    return (
        <section className="turn">
            <Square isSelected={turn === TURNS.X}>
            {TURNS.X}
            </Square>
            <Square isSelected={turn === TURNS.O}>
            {TURNS.O}
            </Square>
        </section>
    )
}