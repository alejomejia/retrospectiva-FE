import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api'

const api = new WooCommerceRestApi({
  url: 'http://localhost:8080/nextjs-woo/',
  consumerKey: process.env.WOOCOMMERCE_KEY!,
  consumerSecret: process.env.WOOCOMMERCE_SECRET!,
  version: 'wc/v3',
})

export async function fetchWooCommerceProducts() {
  try {
    const response = await api.get('products')
    return response
  } catch (error: any) {
    throw new Error(error)
  }
}
