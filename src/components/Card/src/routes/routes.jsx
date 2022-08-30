import Card from "../components/Card/index";
import { Route, Routes } from "react-router-dom";

function RoutesSite() {
    return (
        <Routes>
            <Route path='/product/:id' element={<Card />} />
        </Routes>
    );
}
export default RoutesSite;