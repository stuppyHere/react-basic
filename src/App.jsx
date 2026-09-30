import ProductCard from "./ProductCard";

function App() {
  let products = [
    {
      name: "Classic Zinger Box",
      price: 799,
      description:
        "American Classic Zinger, 2pc Hot Wings, Regular Fries, Pepsi regular",
    },
    {
      name: "Veg Zinger Meal",
      price: 629,
      description: "Veg Zinger, Regular Fries, Pepsi Regular",
    },
  ]

  let productList = products.map((product) => (
    <ProductCard
      name={product.name}
      description={product.description}
      price={product.price}
    />
  ));

  return (
    <>
    {
      productList
    }
    </>
  );
}

export default App;
