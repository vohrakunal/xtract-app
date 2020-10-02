import React, {lazy, Suspense } from 'react';
import { Redirect, Switch, useLocation} from 'react-router-dom';



import ProtectedRoute from './components/ProtectedRoute'
import PublicRoute from './components/PublicRoute'



// const Login = lazy(() => import('./views/Login'));
const Signup = lazy(() => import('./views/Signup'));

const Login = lazy(() => import('./views/Login'));

function App() {
  const location = useLocation();

  
  const pages = [
    {
      pageLink:'/signup',
      view:Signup,
      displayName:'Signup',
      protected:false,

    },
    {
      pageLink:'/login',
      view:Login,
      displayName:'Login',
      protected:false,

    },
    

  ]
  
  
  return(
    <div className="App">
          <Suspense fallback={<div />}>
          <Switch location={location}>
                {pages.map((page, index) => {
                    if(page.protected === true){
                      return(
                        <ProtectedRoute
                          path={page.pageLink}
                          render={({match}) => <page.view />}
                          key={index}
                        /> 
                      );
                    }
                    else{
                    return(
                      <PublicRoute
                        path={page.pageLink}
                        render={({match}) => <page.view />}
                        key={index}
                      />
                      );
                    }
                  })}
          <Redirect to="/signup" />
        </Switch>
        </Suspense>


    </div>
  );
}




export default App;
