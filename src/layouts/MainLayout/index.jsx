import React  from 'react'
import Head from 'next/head'

import SmoothScrollLayout from '../SmoothScrollLayout'
import Footer from '../../components/Footer'
import Menu from './Menu'
import MenuBar from './MenuBar'

import {useMenuState,useRouterState} from '../../store/useStore'
import NoisyForegroundDesign from '../../components/NoisyForegroundDesign'

function MainLayout({children}) {
  const isMenuOpen = useMenuState(state => state.isMenuOpen)
  const currentRoute = useRouterState(state => state.currentRoute)
  console.log(isMenuOpen)

  return (
    <main className="main bg-[#EAE7D6]">
        <Head>
            <title>{`${currentRoute} | JC Onciangco`}</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <NoisyForegroundDesign />
        <Menu />
        <MenuBar />
        <SmoothScrollLayout>
            <div className="w-full"></div>
            <div className="content">
                {children}
            </div>
          <Footer />
        </SmoothScrollLayout>
    </main>
  )
}

export default MainLayout