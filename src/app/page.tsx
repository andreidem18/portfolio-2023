"use client"

import PageAnimation from '@/components/_shared/page-animation/page-animation.component'
import Presentation from '@/components/app/presentation/presentation.component'
import Services from '@/components/app/services/services.component'
import Testimonials from '@/components/app/testimonials/testimonials.component'
import Head from 'next/head'
import Image from 'next/image';

export default function Home() {


  return (
    <>
      <Head>
        <title>Andrés Mendoza</title>
      </Head>
      <PageAnimation>
        <div className='page-container'>
          <Presentation />
          <Services />
          <Testimonials />
        </div>
      </PageAnimation>
    </>
  )
}
