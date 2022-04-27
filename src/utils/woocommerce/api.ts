import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api'

const isDevelopmentEnv = process.env.NODE_ENV === 'development'

const developmentConfig = {
  url: process.env.DEV_WOOCOMMERCE_API_URL!,
  consumerKey: process.env.DEV_WOOCOMMERCE_KEY!,
  consumerSecret: process.env.DEV_WOOCOMMERCE_SECRET!,
}

const productionConfig = {
  url: process.env.PROD_WOOCOMMERCE_API_URL!,
  consumerKey: process.env.PROD_WOOCOMMERCE_KEY!,
  consumerSecret: process.env.PROD_WOOCOMMERCE_SECRET!,
}

const apiConfig = isDevelopmentEnv ? developmentConfig : productionConfig

const api = new WooCommerceRestApi({ ...apiConfig, version: 'wc/v3' })

export default api
