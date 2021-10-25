import Head from "next/head"

import Header from "Components/Header"
import Sidebar from 'Components/Sidebar'
import SidebarTopics from 'Components/SidebarTopics'


import {
  HomeContainer,
  Main
} from 'Pages/home/styles'


export default function Home() {
  return (
    <HomeContainer>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Sidebar />
      <Main >
        <div>
          <h1 style={{color: '#959595'}}>Civil Cultural</h1>
        </div>
      </Main>
      <SidebarTopics />
    </HomeContainer>
  )
}