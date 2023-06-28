import Image from 'next/image'
import Review from '../component/testimonial'
import MainHero from '../component/mainhero'
import HeroP from '../component/HeroP'
import TwoService from '../component/twoservice'
import Features from '../component/feature'
import Stats from '../component/stats'



















export default function Home() {
  return (


<>
<HeroP/>
{/* <MainHero/> */}
<TwoService/>
<Stats/>
<Features/>
<Review/>
</>
  )
}
