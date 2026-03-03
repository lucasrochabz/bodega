import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthProvider';
import { UserProvider } from './contexts/UserProvider';
import routes from './routes/index';

const router = createBrowserRouter(routes);

const App = () => {
  return (
    <AuthProvider>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </AuthProvider>
  );
};

export default App;
