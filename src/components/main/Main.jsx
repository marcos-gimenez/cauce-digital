import { About } from './about/About';
import { Contact } from './contact/Contact';
import { Hero } from './hero/Hero';
import { Services } from './services/Services';

export default function Main() {
  return (
    <>
      <Hero></Hero>
      <Services></Services>
      <About></About>
      <Contact></Contact>
    </>
  );
}
