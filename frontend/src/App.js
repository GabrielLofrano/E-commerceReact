import data from "./data";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="/">Shoes Shop</a>
      </header>
      <main>
        <h1>Featured Products</h1>
        <div className="products">
          {data.products.map((product) => (
            <div className="product" key={product.id}>
              <a href={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
              />
              </a>
              <div className="productInfo">
                <a href={`/product/${product.id}`}>
                <p>{product.name}</p>
                </a>
                <p><strong>${product.price}</strong></p>
                <button>Comprar!</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
