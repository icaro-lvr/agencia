import Head from "next/head"
import "./globals.css";
import {Poppins} from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
        <Head>
        <title>Componente</title>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

        <body className={poppins.className}>
               
      
        {children}     
        
            
      </body>
    </html>
  );
}

