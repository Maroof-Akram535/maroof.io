import '../styles/globals.css'
import Layout from '../components/Layout/index';
import { ChakraProvider } from '@chakra-ui/react';
import Footer from "../components/Footer/index";
function MyApp({ Component, pageProps }) {
   return (
      <ChakraProvider>
         <Layout>
            <Component {...pageProps} />
            <Footer />
         </Layout>
      </ChakraProvider>
   )
}

export default MyApp
