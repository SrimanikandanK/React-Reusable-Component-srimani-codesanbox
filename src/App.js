import "./styles.css";
import Card from "./CardComponent";
import Button from "./ButtonComponent";
import Button2 from "./ButtonComponentPart2";
import UseRefComponent from "./UseRefComponent";
import UseMemoComponent from "./UseMemoComponent";
import TodoApp from "./TodoApp";
import TodoListApplication from "./TodoListApplication";

export default function App() {
  return (
    <div className="App">
      <h1>Reusable component's</h1>
      <h2>Reusable card component</h2>
      <Card border="1px solid blue">
        <h3>Title Inside Card</h3>
        <p>This is a paragraph inside the card.</p>
      </Card>

      <h2>Resuable button component</h2>

      {/* Type 1 Reusable button component */}
      <div className="button-container">
        {/* Type 1 Reusable button component */}
        <Button color="Red" onClick={() => alert("Primary Clicked")}>
          <span>Srimani</span>
          <i> (with icon)</i>
        </Button>

        {/* Type 2 Reusable Button Component */}
        <Button2>
          <span>Cancel</span>
          <i> (with icon)</i>
        </Button2>
      </div>
      <TodoListApplication />
    </div>
  );
}
