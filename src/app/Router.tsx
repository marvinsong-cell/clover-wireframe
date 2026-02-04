import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '@/stores/authStore';
import { OnboardingPage } from '@/pages/auth/OnboardingPage';
import { SignupPage } from '@/pages/auth/SignupPage';

// Placeholder components - will be implemented later
const LoadingScreen = () => (
  <div className="screen">
    <div className="screen-content center">
      <div className="animate-pulse">🍀</div>
      <p className="text-secondary">로딩 중...</p>
    </div>
  </div>
);

const FeedPage = () => <div className="screen"><div className="screen-content center"><p>Feed Page (준비 중)</p></div></div>;
const ChatPage = () => <div className="screen"><div className="screen-content center"><p>Chat Page (준비 중)</p></div></div>;
const ChatRoomPage = () => <div className="screen"><div className="screen-content center"><p>Chat Room (준비 중)</p></div></div>;
const MatchesPage = () => <div className="screen"><div className="screen-content center"><p>Matches Page (준비 중)</p></div></div>;
const ProfilePage = () => <div className="screen"><div className="screen-content center"><p>Profile Page (준비 중)</p></div></div>;

const ProtectedRoute = () => {
  const { session, isLoading } = useAuthStore();

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!session) {
    return <Navigate to="/onboarding" replace />;
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
      // 인증이 필요한 라우트
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
      // 인증이 필요 없는 라우트
      { path: 'onboarding', element: <OnboardingPage /> },
      { path: 'signup', element: <SignupPage /> },
    ],
  },
]);
