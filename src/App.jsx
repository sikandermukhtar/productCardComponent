
import './App.css'
import ProductCard from "./components/ProductCard.jsx";
import Prime_Metamoon_ProductDetail_front_2000x from './assets/Prime_Metamoon_ProductDetail_front_2000x.webp';
import Prime_Metamoon_ProductDetail_side_600x from './assets/Prime_Metamoon_ProductDetail_side_600x.webp';
import Prime_Metamoon_ProductDetail_back_600x from './assets/Prime_Metamoon_ProductDetail_back_600x.webp';

function App() {

  const products = [
    {
      id: 1,
      title: 'Meta Moon',
      description: 'Prime Meta Moon Drink is a revolutionary beverage designed to elevate your hydration experience to cosmic levels. This drink combines cutting-edge science with natural ingredients to provide not only refreshment but also a boost in performance and well-being. Infused with essential vitamins, minerals, and electrolytes, Prime Meta Moon Drink ensures optimal hydration, making it ideal for athletes, busy professionals, and anyone seeking a healthier lifestyle.\n' +
          '\n' +
          'The formulation of Prime Meta Moon Drink is carefully crafted to include adaptogens and nootropics, which help in enhancing mental clarity, focus, and resilience against stress.' +
          '\n' +
          'Packaged in sleek, eco-friendly bottles, Prime Meta Moon Drink is designed for convenience and sustainability. Whether you are hitting the gym, tackling a challenging work project, or simply enjoying a moment of relaxation, Prime Meta Moon Drink is your go-to choice for a superior hydration solution. Embrace the future of beverages and let Prime Meta Moon Drink take you to new heights.',
      subTitle: 'Hydration',
      packSize: "12PK",
      price: 29.99,
      subscriptionPrice: 28.49,
      subscriptionBenefit: 'SUBSCRIBE TO RECEIVE 5% OFF EACH DELIVERY.',
      images: [Prime_Metamoon_ProductDetail_front_2000x, Prime_Metamoon_ProductDetail_side_600x, Prime_Metamoon_ProductDetail_back_600x],
      features: ['Zero added sugar',
                  '20 Calories', '10% Coconut Water',
                  'BCAAs + B Vitamins',
                  'Antioxidants + Electrolytes',
                  'Caffeine-Free'],
      rating: 4.5,
      reviewCount: 120,
      reviews: [{
          reviewerName: "James Bond",
          reviewText: "Amazing",
          starCount: 4
      }, {
        reviewerName: "Jon Snow",
        reviewText: "Loved this new flavour",
        starCount: 5
      }, {
        reviewerName: "Philip Gallangar",
        reviewText: "Average, not value to money",
        starCount: 3
      }

      ]
    }
  ];

  return (
    <>
      {products.map((product)=> (
        <ProductCard
            key={product.id}
            title={product.title}
            subTitle={product.subTitle}
            description={product.description}
            price={product.price}
            packSize={product.packSize}
            subscriptionPrice={product.subscriptionPrice}
            subscriptionBenefit={product.subscriptionBenefit}
            images={product.images}
            features={product.features}
            rating={product.rating}
            reviewCount={product.reviewCount}
            reviews={product.reviews}
        />
      ))}
    </>
  )
}

export default App
