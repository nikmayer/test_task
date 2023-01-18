import Card from './components/Card/Card';
import products from './data/products.json';

const App = () => {
  return (
    <div className="app">
      <div className="wrapper">
        <h1 className="header">Ты сегодня покормил кота?</h1>
        <div className="cards">
          {products.products.map((product) => (
            <Card
              key={product.id}
              name={product.name}
              description={product.description}
              weight={product.weight}
              disabled={product.disabled}
              servings={product.servings}
              giftCount={product.giftCount}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
