import React from 'react'
import TopicBox from '../components/TopicBox'
import Content from '../components/Content'

export default function Home() {


  return (
    <div>
    <h1>HOME_PAGE</h1>
      <TopicBox food ="Kottu" price="900"/>
      <TopicBox food ="Rice" price="800"/>
      <TopicBox food ="hopper" price="150"/>
        
      <Content/>
    </div>
  )
}
