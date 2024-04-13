// ----------------------------------------------------------------------

const ROOTS = {
  AUTH: '/auth',
  DASHBOARD: '/dashboard',
};

// ----------------------------------------------------------------------

export const paths = {
  minimalUI: 'https://mui.com/store/items/minimal-dashboard/',
  // AUTH
  auth: {
    jwt: {
      login: `${ROOTS.AUTH}/jwt/login`,
      register: `${ROOTS.AUTH}/jwt/register`,
    },
  },
  // DASHBOARD
  dashboard: {
    root: ROOTS.DASHBOARD,
    home: `${ROOTS.DASHBOARD}/home`,
    aboutUs: `${ROOTS.DASHBOARD}/aboutUs`,
    contactUs: `${ROOTS.DASHBOARD}/contactUs`,
    group: {
      root: `${ROOTS.DASHBOARD}/group`,
      addTrip: `${ROOTS.DASHBOARD}/group/addTrip`,
      reimbursement: `${ROOTS.DASHBOARD}/group/reimbursement`,
      status: `${ROOTS.DASHBOARD}/group/status`,
      approval: `${ROOTS.DASHBOARD}/group/approval`,
    },
  },
};
