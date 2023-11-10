import { Transition } from "@headlessui/react";
import { useState } from "react";
import "./App.css";

function App() {
  // Define isShowing and setIsShowing in the outer function scope
  const [isShowing, setIsShowing] = useState(false);

  return (
    <>
      <button onClick={() => setIsShowing((isShowing) => !isShowing)}>
        Toggle
      </button>
      <Transition
        show={isShowing}
        enter="transition-opacity duration-75"
        enterFrom="opacity-40"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-40"
      >
        <div>
          I will fade in and out
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos quod
            ipsa corporis asperiores iure est, doloribus ipsum veniam! Inventore
            et a earum minima quo aperiam ad autem, illo perferendis incidunt?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos quod
            ipsa corporis asperiores iure est, doloribus ipsum veniam! Inventore
            et a earum minima quo aperiam ad autem, illo perferendis incidunt?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos quod
            ipsa corporis asperiores iure est, doloribus ipsum veniam! Inventore
            et a earum minima quo aperiam ad autem, illo perferendis incidunt?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos quod
            ipsa corporis asperiores iure est, doloribus ipsum veniam! Inventore
            et a earum minima quo aperiam ad autem, illo perferendis incidunt?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos quod
            ipsa corporis asperiores iure est, doloribus ipsum veniam! Inventore
            et a earum minima quo aperiam ad autem, illo perferendis incidunt?
          </p>
        </div>
      </Transition>
    </>
  );
}

export default App;
