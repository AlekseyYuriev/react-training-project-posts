import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../router/routes";
import { useContext } from "react";
import { AuthContext } from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {

   const {isAuth, isLoading} = useContext(AuthContext);

   if(isLoading) {
      return <Loader />
   }

   return (
      <Routes>
         {isAuth
            ?  privateRoutes.map(route => 
               <Route 
                  element={route.component} 
                  path={route.path} 
                  exact={route.exact}
                  key={route.path}
               />
            )
            :  publicRoutes.map(route => 
               <Route 
                  element={route.component} 
                  path={route.path} 
                  exact={route.exact}
                  key={route.path}
               />
            )
         }
      </Routes>
   )
}

export default AppRouter;