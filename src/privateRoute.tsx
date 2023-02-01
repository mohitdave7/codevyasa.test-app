import {
    Navigate,
    RouteProps,
  } from 'react-router-dom';
  
  export function PrivateRoute({ children }: RouteProps): JSX.Element {
    const isLoggedIn = localStorage.getItem('Authentication') as string // check cookie or local storage etc.
    return (
      <>
        {isLoggedIn === "true"
          ? children
          : <Navigate to="/login"/>
        }
      </>
    );
  }