import './App.css';
import {NextUIProvider} from "@nextui-org/react";

function App() {
  return (
      <NextUIProvider>
          <div className="bg-blue-500 text-white p-4">
              <h1 className="text-3xl font-bold">Hello, Tailwinds</h1>
          </div>
      </NextUIProvider>
  );
}

export default App;
