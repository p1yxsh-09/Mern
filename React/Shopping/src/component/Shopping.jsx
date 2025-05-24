import ShoppingList from "./ShoppingList";

export default function Shopping({ items }) {
  return (
    <>
      {items.map((e) => (
        <ShoppingList key={e.id} {...e} />
      ))}
    </>
  );
}

// export default function Shopping({ items }) {
//   return (
//     <>
//       {items.map((e) => (
//         <ShoppingList
//           key={e.id}
//           item={e.item}
//           qty={e.qty}
//           completed={e.completed}
//         />
//       ))}
//     </>
//   );
// }
