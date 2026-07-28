export const ROUTES = {
  home: '/',
  notFound: '/404',

  product: {
    index: '/product',
    details: '/product/:slug',

    detailsPath: (slug) => `/product/${slug}`,
  },

  checkout: {
    index: '/checkout',
    details: '/checkout/:orderId',

    detailsPath: (orderId) => `/checkout/${orderId}`,
  },

  auth: {
    login: '/login',
    register: '/register',
    forgotPassword: '/forgot-password',
    resetPassword: '/reset-password',
  },

  account: {
    index: '/account',

    // relativo (para children)
    myInfo: 'my-info',
    orders: {
      index: 'orders',
      details: 'orders/details/:orderId',

      // helpers ABSOLUTO (para navigate)
      detailsPath: (orderId) => `/account/orders/details/${orderId}`,
    },
  },

  admin: {
    index: '/admin',
  },
};
