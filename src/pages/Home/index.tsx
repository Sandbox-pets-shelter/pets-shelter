import { Cooperation } from '../../components/widgets'
import { Sponsors } from '../../components/widgets'
import { NeedHelp } from '../../components/widgets'
import { HomelessPet } from '../../components/widgets'
import { HappyStories } from '../../components/widgets'
import { MainFirst } from '../../components/widgets'

export const Home = () => {

  return (
    <div>
      <MainFirst/>
      <HomelessPet/>
      <HappyStories/>
      <NeedHelp/>
      <Cooperation/>
      <Sponsors/>
    </div>
  )
}