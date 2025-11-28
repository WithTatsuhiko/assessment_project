import Home from "../pages/Home";
import Login from "../pages/Login";
import Not_Found from "../pages/Not_Found";
import SignUp from "../pages/SignUp";

interface IRoute {
    path: string;
    page: React.ReactElement
}
const Main_Routes: IRoute[] = [{ path: '/login', page: <Login /> }, { path: '/signup', page: <SignUp /> }, { path: '/', page: <Home /> }, { path: "*", page: <Not_Found /> }]

export default Main_Routes