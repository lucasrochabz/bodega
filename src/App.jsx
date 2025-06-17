import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext.jsx';
import routes from './routes/index.jsx';

const router = createBrowserRouter(routes);

const App = () => {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
};

export default App;
