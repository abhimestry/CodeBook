import { useTitle } from "../../Hooks/useTitle";
import { Hero } from "./components/Hero"
import { FeaturedProducts } from "./components/FeaturedProducts"
import { Faq } from "./components/Faq";
import { Testimonials } from "./components/Testimonials";

export const HomePage = () => {
  useTitle("Explore E-Books Collection")
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Testimonials />
      <Faq />
    </main>
  )
}
