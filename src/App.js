import Products from "./components/Shop/Products";
import Layout from "./components/Layout/Layout";
import Cart from "./components/Cart/Cart";
import { useSelector } from "react-redux";

function App() {
  const isShowed = useSelector((state) => state.ui.cartIsVisible);

  return (
    <Layout>
      {isShowed && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
