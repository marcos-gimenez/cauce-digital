import { About } from './about/About';
import { CauceMed } from './caucemed/CauceMed';
import { Contact } from './contact/Contact';
import { Hero } from './hero/Hero';
import { WorkProcess } from './process/WorkProcess';
import { Sectors } from './sectors/Sectors';
import { Services } from './services/Services';

export default function Main() {
  return (
    <>
      <Hero></Hero>
      <Services></Services>
      <Sectors></Sectors>
      <CauceMed></CauceMed>
      <WorkProcess></WorkProcess>
      <About></About>
      <Contact></Contact>
    </>
  );
}
