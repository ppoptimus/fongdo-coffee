import { useState } from "react";
import Headbar from "./component/headbar";
import { Route, Routes } from "react-router-dom";
import Oreders from "./component/orders";
import Dashboard from "./component/dashboard";
import Productlist from "./component/productlist";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Headbar />
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/order" element={<Oreders />} />
          <Route path="/productlist" element={<Productlist />} />

        </Routes>
      </div>
    </>
  );
}

export default App;
