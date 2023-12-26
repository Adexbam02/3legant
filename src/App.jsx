import "./App.css";
import {
  Navbar2,
  Navbar,
  Header,
  Show,
  NewArrivals,
  Fact,
  ProductCard,
} from "./components/index.js";

function App() {
  return (
    <>
      <Navbar2 />
      <Navbar />
      <Header />
      <Show />
      <NewArrivals />
      <Fact />
      <ProductCard />
    </>
  );
}

export default App;
