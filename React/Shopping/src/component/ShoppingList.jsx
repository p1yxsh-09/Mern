export default function ShoppingList({ item, qty, completed }) {
  const styles = {
    color: completed ? "grey" : "red",
    textDecoration: completed ? "line-through" : null,
  };
  return (
    <li style={styles}>
      {item}-{qty}
    </li>
  );
}
