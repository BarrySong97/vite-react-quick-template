import { useRoutes } from 'react-router-dom';
import routes from '~react-pages';
import { Suspense } from 'react';

function App() {
  return <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>;
}

export default App;
