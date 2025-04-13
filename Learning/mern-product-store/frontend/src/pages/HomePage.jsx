// import { BsFillXDiamondFill } from 'react-icons/bs';
import { useEffect } from 'react';
import { useProductStore } from '../store/product';
const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  console.log(products);

  function trimProductName(name) {
    if (name.length > 11) {
      return name.slice(0, 15) + '...';
    } else {
      return name;
    }
  }

  return (
    <div style={{width: '100%'}}>
      <div style={{width: '85%', minHeight: '500px', margin: '2rem auto', backgroundColor: '#262626', padding: '2rem 0', borderRadius: '1rem', boxShadow: '0 0 10px rgb(0, 0, 0)'}}>
        <div>
          <h1 style={{textAlign: 'center', color: '#00ccff'}}>Current Products</h1>
        </div>
        {products.length === 0 ? (
          <div style={{margin: '1rem auto 0 auto', textAlign: 'center', color: '#ffffff'}}>
            <p style={{fontSize: '1.5rem'}}>No products found.</p>
          </div>
          ) : (
            <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', marginTop: '1rem'}}>
              {products.map((product) => (
              <div style={{padding: '2rem', backgroundColor: '#1a1a1a', borderRadius: '1rem', boxShadow: '0 0 10px rgb(0, 0, 0)'}} key={product._id}>
                <div>
                  <img src={product.image} alt='product image' style={{width: '200px', height: '150px', objectFit: 'cover', borderRadius: '1rem'}} />
                </div>
                <div style={{marginTop: '1rem'}}>
                  <h1 style={{fontSize: '1.5rem', color: '#ffffff'}}>{trimProductName(product.name)}</h1>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem'}}>
                  <h1 style={{fontSize: '1rem', color: '#00ccff'}}>${product.price}</h1>
                  <button style={{fontsize: '1rem', border: 'none', outline: 'none', padding: '0.5rem', borderRadius: '0.5rem'}}>Add to Cart</button>
                </div>
              </div>
          ))}
        </div>)}
      </div>
    </div>
  );
};

export default HomePage;