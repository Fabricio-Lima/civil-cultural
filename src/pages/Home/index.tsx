import Head from "next/head"

import Header from "Components/Header"
import Sidebar from 'Components/Sidebar'
import SidebarTopics from 'Components/SidebarTopics'
import Footer from 'Components/Footer'


import {
  HomeContainer,
  Main
} from 'Pages/Home/styles'


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
          <h1 style={{color: 'var(--gray-100)'}}>Olá</h1>
        </div>
      </Main>
      <SidebarTopics />
      <Footer />
    </HomeContainer>
  )
}