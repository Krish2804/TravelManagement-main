import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// auth
import { AuthGuard } from 'src/auth/guard';
// layouts
import DashboardLayout from 'src/layouts/dashboard';
// components
import { LoadingScreen } from 'src/components/loading-screen';

// ----------------------------------------------------------------------

const HomePage = lazy(() => import('src/pages/dashboard/home'));
const PageAboutUs = lazy(() => import('src/pages/dashboard/aboutUs'));
const PageContactUs = lazy(() => import('src/pages/dashboard/contactUs'));
const PageAddTrip = lazy(() => import('src/pages/dashboard/addTrip'));
const PageReimbursement = lazy(() => import('src/pages/dashboard/reimbursement'));
const PageStatus = lazy(() => import('src/pages/dashboard/status'));
const PageApproval = lazy(() => import('src/pages/dashboard/approval'));

// ----------------------------------------------------------------------

export const dashboardRoutes = [
  {
    path: 'dashboard',
    element: (
      <AuthGuard>
        <DashboardLayout>
          <Suspense fallback={<LoadingScreen />}>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      </AuthGuard>
    ),
    children: [
      { element: <HomePage />, index: true },
      { path: 'aboutUs', element: <PageAboutUs /> },
      { path: 'contactUs', element: <PageContactUs /> },
      {
        path: 'group',
        children: [
          { element: <PageAddTrip />, index: true },
          { path: 'reimbursement', element: <PageReimbursement /> },
          { path: 'status', element: <PageStatus /> },
          { path: 'approval', element: <PageApproval /> },
        ],
      },
    ],
  },
];
