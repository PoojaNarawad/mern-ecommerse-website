import { Link } from "react-router-dom"
import ProductCard from "../Components/product-card"


const Home = () => {

  const addToCartHandler = () => {};
  return (
    <div className="home">
      <section></section>


      <h1>Latest Products
        <Link to="/search" className="findmore">More</Link>
      </h1>

      <main>
        <ProductCard
        productId="adshsdhj" 
        name="MacbookPro"
        Price={4545}
        stock={1343}
        handler={addToCartHandler}
        photo="https://m.media-amazon.com/images/I/71vFKBpKakL._SX522_.jpg"
        />
      </main>
    </div>
  )
}

export default Home