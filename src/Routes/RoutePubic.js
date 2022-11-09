import { Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import PostDetail from "../Pages/Posts/PostDetail";
import Posts from "../Pages/Posts/Posts";
import Search from "../Pages/Posts/Search";
import Url from "../Services/Helpers/Url";

const url = new Url();

export const routePublic = (
  <>
    <Route path={url.home} end element={<Home />} />
    <Route path={url.about} end element={<About />} />
    <Route path={url.post} end element={<PostDetail />} />
    <Route path={url.category} end element={<Posts />} />
    <Route path={url.search} end element={<Search />} />
  </>
);
