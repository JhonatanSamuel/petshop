import { About } from "./_components/about";
import { Footer } from "./_components/footer";
import { Hero } from "./_components/hero";
import { Services } from "./_components/services";
import { Testimonials } from "./_components/testimonials";

export const metadata = {
  title: '4 patas', // O título da aba
  description: 'Descrição do meu projeto',
}

export default function Home() {
  
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Footer />

    </main>
  );
}