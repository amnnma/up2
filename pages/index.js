import SectionQuiz from '../components/SectionQuiz'
import SectionMap from '../components/SectionMap'
import SectionIntro from '../components/SectionIntro'
import SectionIntroblue from '../components/SectionIntroblue'
import SectionWaste  from '../components/SectionWaste'
import SectionUpcycleIntro from '../components/SectionUpcycleIntro'
import SectionMaterial from '../components/SectionMaterial'
import SectionCardflip from '../components/SectionCardflip'
import SectionFooter from '../components/SectionFooter'
export default function Home() {

  return (
    <>
      <SectionIntro />
      <SectionIntroblue />
      <SectionUpcycleIntro />
      <SectionMap />
      <SectionWaste />
      <SectionCardflip />
      <SectionMaterial />
      <SectionQuiz />
      <SectionFooter />
    </>
  )
}
