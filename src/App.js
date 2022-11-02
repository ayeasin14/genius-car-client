
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Routes/Routes';

function App({ children }) {


  return (
    <div className='max-w-screen-xl	mx-auto'>
      <RouterProvider router={router}>
        {children}
      </RouterProvider>
    </div>
  );
}

export default App;
