import { BrowserRouter, Routes, Route } from "react-router-dom"
import Main_Routes from "./Main_Routes"

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                {Main_Routes.map((route) => {
                    return <Route path={route.path} element={route.page} key={route.path} />
                })}
            </Routes>
        </BrowserRouter>
    )
}
