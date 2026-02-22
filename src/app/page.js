import style from "./page.module.css";
import Banner from "./comps/sectionBanner/page.jsx";
import SectionExperiencia from "./comps/sectionExperiencia/page.jsx";
import Rodape from "./comps/sectionRodape/rodape.jsx";

export default function Home() {
  return ( 
    <>
   
    <Banner/>
    <SectionExperiencia/>
    <Rodape/>
    </>
  );
}