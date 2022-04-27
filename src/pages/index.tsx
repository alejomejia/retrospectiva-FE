import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { getProducts } from 'utils/woocommerce/products'

import { Product } from 'utils/types/woocomerce'

interface HomeProps {
  products: Product[]
}

const Home: NextPage = ({ products }: any) => {
  console.log({ products })

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>Retrospectiva Home</main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const wooCommerceProducts = await getProducts().catch((error) =>
    console.error(error)
  )

  if (!wooCommerceProducts) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      products: wooCommerceProducts.data,
    },
    // revalidate: 60 // regenerate page with new data fetch after 60 seconds
  }
}

export default Home
