import Shopping from "./component/Shopping";

const data = [
  { id: 1, item: "eggs", qty: 12, completed: false },
  { id: 2, item: "milk", qty: 1, completed: true },
  { id: 3, item: "fruits", qty: 23, completed: true },
  { id: 4, item: "Vegetables", qty: 20, completed: false },
  { id: 5, item: "bread", qty: 2, completed: true },
  { id: 6, item: "water", qty: 22, completed: true },
];

function App() {
  return (
    <>
      <h1>Shopping List</h1>
      <Shopping items={data} />
    </>
  );
}

export default App;
