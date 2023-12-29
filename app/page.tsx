import Cell from "./_components/Cell";
import Cube from "./_components/Cube";
import Row from "./_components/Row";
import { rows } from "./_components/data";

export default function Home() {
  return (
    <main>
      <div className="container">
        <div className="row row-header">
          <h1>Variations of Incomplete Open Cubes</h1>
        </div>
        <div id="grid">
          {rows.map((row, index) => {
            return (
              <Row key={index}>
                {row.map((cell, index) => {
                  return (
                    <Cell key={index}>
                      {cell ? <Cube cube={cell} /> : null}
                    </Cell>
                  );
                })}
              </Row>
            );
          })}
        </div>
      </div>
      <div className="container description">
        <p>SOL LEWITT</p>
        <p>WALL DRAWINGS &amp; STRUCTURES</p>
        <p>THE LOCATION OF SIX GEOMETRIC FIGURES:</p>
        <p>VARIATIONS OF INCOMPLETE OPEN CUBES</p>
        <p>THE JOHN WEBER GALLERY</p>
        <p>420 W. BROADWAY NEW YORK</p>
        <p>OCTOBER 26 - NOVEMBER 20, 1974</p>
      </div>
    </main>
  );
}
