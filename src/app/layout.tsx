import '../globalStyles/globals.css'
import '../globalStyles/grid-system.css'
import '../globalStyles/utility-classes.css'

import ReduxProvider from '@/redux/ReduxProvider'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Navbar from '@/components/_shared/navbar/navbar.component'
import Footer from '@/components/_shared/footer/footer.component'
// import SettingsButtons from '@/components/_shared/settings-buttons/settings-buttons.component'
import ThemeProvider from '@/components/_shared/theme-provider/theme-provider.component'
import dynamic from 'next/dynamic'

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Andrés Mendoza',
  description: 'Andrés Mendoza\'s web developer portfolio',
}

const SettingsButtons = dynamic(() => import('@/components/_shared/settings-buttons/settings-buttons.component'), { ssr: false })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <ReduxProvider>
        <body className={poppins.className}>
          <ThemeProvider>
            <div className="main-container">
              <Navbar key='navbar' />
              {children}
              <Footer key='footer' />
            </div>
          </ThemeProvider>
          <SettingsButtons />
        </body>
      </ReduxProvider>
    </html>
  )
}

