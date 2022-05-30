import Categories from '../components/Categories';
import Hero from '../components/Hero';
import OrderToday from '../components/OrderToday';

export default function IndexPage() {
  return (
    <>
      <Hero
        title="Come inside!"
        subtitle="Check out available products and functionality."
        heroStyles="index-hero"
        textStyles="index-hero-text"
      />
      {/* create account, add items to cart, search for items */}
      <Categories />;
      <OrderToday />
    </>
  );
}
