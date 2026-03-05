export const ROUTES = {
  home: '/',
  notFound: '/404',

  product: {
    base: '/product',
    details: (id = ':productId') => `/product/${id}`,
  },

  checkout: {
    base: '/checkout',
  },

  auth: {
    login: '/login',
    register: '/register',
    forgotPassword: '/forgot-password',
    resetPassword: '/reset-password',
  },

  account: {
    base: '/account',

    // relativo (para children)
    myInfo: 'my-info',
    orders: 'orders',
    orderDetails: 'orders/details/:orderId',

    // helpers ABSOLUTO (para navigate)
    goToOrderDetails: (orderId) => `/account/orders/details/${orderId}`,
  },

  admin: {
    base: '/admin',
  },
};
