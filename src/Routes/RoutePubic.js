import { Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import PostDetail from "../Pages/Posts/PostDetail";
import Url from "../Services/Helpers/Url";

const url = new Url();

export const routePublic = (
  <>
    <Route path={url.home} end element={<Home />} />
    <Route path={url.about} end element={<About />} />
    <Route path={url.post} end element={<PostDetail />} />
  </>
);
