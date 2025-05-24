// export default function ColorList({ colors }) {
//   const lis = colors.map((e) => <li>{e}</li>);
//   return (
//     <div>
//       <p>Color List</p>
//       <ul>{lis}</ul>
//     </div>
//   );
// }

// better approcach

export default function ColorList({ colors }) {
  return (
    <div>
      <p>Color List</p>
      <ul className="bg-red-100 text-[#fff] w-[100px] sm: md: lg: xl: 2xl:">
        {colors.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
    </div>
  );
}
