import { Navigation } from './components/Navigation.jsx'
import { font } from './font.js'
import './globals.css'



export default function RootLayout({ children }) {
  return (
    <html lang="en" className={font.className}>
      <head>
        <title>Mi first app whit NExt 14</title>
      </head>
      <body>
        <Navigation/>
          {children}
      </body>
    </html>
  )
}
