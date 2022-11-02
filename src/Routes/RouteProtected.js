import { Route } from "react-router-dom";
import Profiles from '../Pages/Profiles/Profiles';
import { AuthMiddleware } from "../Middlewares/AuthMiddleware";

export const routeProtected = (
    <>
      <Route element={<AuthMiddleware />}>
        <Route path='/ca-nhan' element={<Profiles />}/>
      </Route>
    </>
  );
  