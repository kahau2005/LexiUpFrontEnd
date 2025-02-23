import ContinueLearning from '@/app/components/home/tabs/home/ContinueLearning'
import InfoCard from '@/app/components/home/tabs/home/InfoCard'
import Popular from '@/app/components/home/tabs/home/Popular'
import React from 'react'

export default function Home() {
  return (
    <div>
      <InfoCard/>
      <Popular/>
      <ContinueLearning/>
    </div>
  )
}
