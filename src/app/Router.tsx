import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '@/stores/authStore';

// Placeholder components - will be implemented later
const LoadingScreen = () => <div>Loading...</div>;
const LoginPage = () => <div>Login Page</div>;
const SignupPage = () => <div>Signup Page</div>;
const OnboardingPage = () => <div>Onboarding Page</div>;
const FeedPage = () => <div>Feed Page</div>;
const ChatPage = () => <div>Chat Page</div>;
const ChatRoomPage = () => <div>Chat Room Page</div>;
const MatchesPage = () => <div>Matches Page</div>;
const ProfilePage = () => <div>Profile Page</div>;

const ProtectedRoute = () => {
  const { session, isLoading } = useAuthStore();

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!session) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

const MainLayout = () => (
  <div className="mobile-frame">
    <Outlet />
  </div>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        element: <ProtectedRoute />,
        children: [
          { index: true, element: <Navigate to="/feed" replace /> },
          { path: 'feed', element: <FeedPage /> },
          { path: 'chat', element: <ChatPage /> },
          { path: 'chat/:roomId', element: <ChatRoomPage /> },
          { path: 'matches', element: <MatchesPage /> },
          { path: 'profile', element: <ProfilePage /> },
        ],
      },
      { path: 'login', element: <LoginPage /> },
      { path: 'signup/*', element: <SignupPage /> },
      { path: 'onboarding/*', element: <OnboardingPage /> },
    ],
  },
]);
