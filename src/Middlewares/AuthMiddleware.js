import { Outlet, Navigate } from "react-router-dom"

export const isLogin = true;

export const AuthMiddleware = () => {
    return isLogin ? <Outlet />: <Navigate to={'/login'} />
}