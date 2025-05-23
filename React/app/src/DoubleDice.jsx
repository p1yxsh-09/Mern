// first approach

// export default function DoubleDice() {
//   const randNum1 = Math.floor(Math.random() * 6) + 1;
//   const randNum2 = Math.floor(Math.random() * 6) + 1;
//   const result =
//     randNum1 === randNum2 ? "You rolled a double!" : "You rolled a single!";

//   return (
//     <div>
//       <h2>{result}</h2>
//       <p>Num1 : {randNum1}</p>
//       <p>Num2 : {randNum2}</p>
//     </div>
//   );
// }

// another approach

// export default function DoubleDice() {
//   const randNum1 = Math.floor(Math.random() * 6) + 1;
//   const randNum2 = Math.floor(Math.random() * 6) + 1;
//   return (
//     <div>
//       <h2>
//         {randNum1 === randNum2
//           ? "You rolled a double!"
//           : "You rolled a single!"}
//       </h2>
//       <p>Num1 : {randNum1}</p>
//       <p>Num2 : {randNum2}</p>
//     </div>
//   );
// }

//  another best approach

// export default function DoubleDice() {
//   const randNum1 = Math.floor(Math.random() * 6) + 1;
//   const randNum2 = Math.floor(Math.random() * 6) + 1;
//   return (
//     <div>
//       <h2>Double Die Challenge</h2>
//       {randNum1 === randNum2 ? <h2>You Win</h2> : null}
//       <p>Num1 : {randNum1}</p>
//       <p>Num2 : {randNum2}</p>
//     </div>
//   );
// }

// another approach
export default function DoubleDice() {
  const randNum1 = Math.floor(Math.random() * 6) + 1;
  const randNum2 = Math.floor(Math.random() * 6) + 1;
  return (
    <div>
      <h2>Double Dice Challenge</h2>
      {randNum1 === randNum2 && <h3>You Win</h3>}
      <p>Num1 : {randNum1}</p>
      <p>Num2 : {randNum2}</p>
    </div>
  );
}
