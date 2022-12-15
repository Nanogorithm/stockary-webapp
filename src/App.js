import { Route, Routes } from "react-router-dom";
import "./App.css";
import Orders from "./Pages/Components/Orders/Orders";
import Products from "./Pages/Components/Products/Products";
import Overview from "./Pages/Components/Overview/Overview";
import Sidebar from "./Pages/Components/Sidebar/Sidebar";
import Customers from "./Pages/Components/Customers/Customers";
import AddProduct from './Pages/Components/Products/AddProduct'
import Category from "./Pages/Components/Products/Category/Category";
import AddCategory from "./Pages/Components/Products/Category/AddCategory";

function App() {
  return (
    <div className="App">
      <div>
        <Sidebar></Sidebar>
      </div>
      <div className="">
        <Routes>
          <Route path="/overview" element={<Overview></Overview>}></Route>
          <Route path="/products" element={<Products></Products>}></Route>
          <Route path="/customers" element={<Customers></Customers>}></Route>
          <Route
            path="/orders"
            element={<Orders className=""></Orders>}
          ></Route>
          <Route path="/addproduct" element={<AddProduct></AddProduct>}></Route>
          <Route path="/category" element={<Category></Category>}></Route>
          <Route path="/addcategory" element={<AddCategory></AddCategory>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
