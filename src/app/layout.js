import Head from "next/head"
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
        <Head>
        <title>Componente</title>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

        <body>
               
      
        {children}     
        
            
      </body>
    </html>
  );
}

