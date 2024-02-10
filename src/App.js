import NavBar from './NavBar';
import Card from './Card'
import { Outlet, createBrowserRouter } from 'react-router-dom';
import About from './About';
import Error from './Error';
import Contact from './Contact';
import Cart from './Cart';
import { Provider } from 'react-redux';
import appStore from './utils/appStore'
import RecommendedRes from './RecommendedRes';

function App() {
  return (
  
 
      <Provider store={appStore}>
    <NavBar/>
    <Outlet/>
    </Provider>
    
   
  );
}
export const appRouter = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    children: [{
      path:"/",
      element: <Card/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/Contact",
      element:<Contact/>
    },
    {
      path:"/Cart",
      element:<Cart/>
    },
    {
      path :'/restraunt/:resId',
      element :<RecommendedRes />
    }
    ],
    errorElement:<Error/>
  }
])

export default App;
