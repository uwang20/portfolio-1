import React  from 'react'
import Head from 'next/head'
import {useRouter} from 'next/router'

import SmoothScrollLayout from '../SmoothScrollLayout'
import Footer from '../../components/Footer'
import Menu from './Menu'
import MenuBar from './MenuBar'

import {useMenuState,useRouterState} from '../../store/useStore'
import ModalNotification from '../../components/ModalNotification'
import NoisyForegroundDesign from '../../components/NoisyForegroundDesign'
const menuList = [
  {
      id: 0,
      name: 'home',
      url: '/',
      routeName: 'Home'
  },
  {
      id: 1,
      name: 'portfolio',
      url: '/portfolio',
      routeName: 'Portfolio'
  },
  {
      id: 2,
      name: 'about me',
      url: '/about-me',
      routeName: 'About me'
  }
]
function MainLayout({children}) {
  const router = useRouter()
  const title = menuList.find(menu => menu.url === router.pathname.replace('/[slug]','')).routeName
  return (
    <main className="main bg-[#EAE7D6]">
        <Head>
            <title>{`${title} | JC Onciangco`}</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <NoisyForegroundDesign />
        <ModalNotification />
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