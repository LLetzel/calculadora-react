// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <h1>Calculadora</h1>
//       {/* <div className="calculadora">
//         <input type="text" id='display'/>
//         <div id="buttons">
//           <button onclick="clearDisplay()">AC</button>
//           <button onclick="appendNumber(7)">1</button>
//           <button onclick="appendNumber(8)">2</button>
//           <button onclick="appendNumber(9)">3</button>
//           <button onclick="appendOperator('+')">+</button>
//           <button onclick="appendNumber(4)">4</button>
//           <button onclick="appendNumber(5)">5</button>
//           <button onclick="appendNumber(6)">6</button>
//           <button onclick="appendOperator('-')">-</button>
//           <button onclick="appendNumber(7)">7</button>
//           <button onclick="appendNumber(8)">8</button>
//           <button onclick="appendNumber(9)">9</button>
//           <button onclick="appendOperator('*')">*</button>
//           <button onclick="appendNumber(0)">0</button>
//           <button onclick="appendOperator('/')">/</button>
//           <button onclick="calculateResult()">=</button>
//         </div>
//       </div> */}
//     </>
//   )
// }


import Calculator from '/Temp/react/calculadora/calculadora-react/src/components/Calculator'
import './App.css';

function App() {

  return (
    <>
      <h1>Calculadora</h1>
      <Calculator />
    </>
  )
}

export default App
