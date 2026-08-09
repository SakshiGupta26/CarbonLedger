import React from 'react'
import Hero from '../../features/home/compontents/Hero'
import Stats from '../../features/home/compontents/Stats'
import ProblemSolution from '../../features/home/compontents/ProblemSolution'
import FeaturedProjects from '../../features/home/compontents/FeaturedProjects'
import Lifecycle from '../../features/home/compontents/Lifecycle'

const Home = () => {
  return (
    <div>
      <Hero />
      <Stats />
      <ProblemSolution />
      <FeaturedProjects />
      <Lifecycle />
    </div>
  )
}

export default Home