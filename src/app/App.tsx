import { RouterProvider } from 'react-router-dom';
import { Providers } from './providers';
import { router } from './Router';

import '@/styles/reset.css';
import '@/styles/globals.css';
import '@/styles/animations.css';

function App() {
  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  );
}

export default App;
