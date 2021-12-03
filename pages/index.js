import SectionMap from "../components/SectionMap";
import SectionIntro from "../components/SectionIntro";
import SectionIntroblue from "../components/SectionIntroblue";
import SectionIntroblue2 from "../components/SectionIntroblue2";
import SectionIntroblue3 from "../components/SectionIntroblue3";
import SectionWaste from "../components/SectionWaste";
import SectionWaste2 from "../components/SectionWaste2";
import SectionWaste3 from "../components/SectionWaste3";
import SectionWaste4 from "../components/SectionWaste4";
import SectionWaste5 from "../components/SectionWaste5";
import SectionWaste6 from "../components/SectionWaste6";
import SectionWaste7 from "../components/SectionWaste7";
import SectionWaste8 from "../components/SectionWaste8";
import SectionWaste9 from "../components/SectionWaste9";
import SectionUpcycleIntro from "../components/SectionUpcycleIntro";
import SectionQuiz from "../components/SectionQuiz";
import SectionMaterial from "../components/SectionMaterial";
import SectionMaterial2 from "../components/SectionMaterial2";
import SectionCardflip from "../components/SectionCardflip";
import SectionCardflip2 from "../components/SectionCardflip2";
import SectionFooter from "../components/SectionFooter";
import SectionFooter2 from "../components/SectionFooter2";
import Header from "./Header";
import Sixth from "../components/Sixth";
export default function Home() {
  return (
            <>
              <Header />
              <SectionIntro/>
              <SectionIntroblue/>
              <SectionUpcycleIntro />
              <Sixth />
              <SectionMap  />
              <SectionWaste />
              <SectionWaste2 />
              <SectionWaste3 />
              <SectionWaste4 />
              <SectionWaste5 />
              <SectionWaste6 />
              <SectionWaste7 />
              <SectionWaste8 />
              <SectionWaste9 />
              <SectionCardflip />
              <SectionCardflip2 />
              <SectionMaterial />
              <SectionFooter />
            </>
  );
}
