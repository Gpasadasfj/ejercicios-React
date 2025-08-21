import PrintHello from "../components/PrintHello";
import Counter from "../components/Counter";
import UserCardList from "../components/UserCardList";
import PrintProducts from "../components/PrintProducts";
import { useTheme } from "../hooks/useTheme";
import TextArea from "./textArea";
import ToDoList from "./ToDoList";
import { MultipleCounter } from "./MultipleCounter";
import { FormList } from "./Form";
import { TrafficLights } from "./TrafficLights";

export default function Dashboard() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const style = {
    backgroundColor: theme === "light" ? "white" : "black",
    color: theme === "light" ? "black" : "white",
  };

  return (
    <>
      <div style={style}>
        <button onClick={toggleTheme}>Cambiar tema</button>
        <div>
          <PrintHello />
          <Counter />
        </div>

        <div>
          <UserCardList />
        </div>

        <div>
          <PrintProducts />
        </div>

        <div>
          <TextArea />
        </div>

        <div>
          <ToDoList />
        </div>

        <div>
          <MultipleCounter />
        </div>

        <div>
          <FormList />
        </div>

        <div>
          <TrafficLights />
        </div>
      </div>
    </>
  );
}
