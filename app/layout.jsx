import '@/assets/styles/globals.css'
import Navbar from '@/components/Navbar.jsx'

export const metadata = {
 title: 'propertyPulse | Find the perfect rental',
 description: 'Find your dream rental property',
 keywords: 'rental, find rentals, find properties',
}

const MainLayout = ({ children }) => {
 return (
  <html lang="en">
   <body>
    <Navbar />
    <main>{children}</main>
   </body>
  </html>
 )
}
export default MainLayout
