import FrontHeader from "./FrontHeader";
import FrontFooter from "./FrontFooter";
import { Outlet } from "react-router-dom";

const FrontLayout = () => {
    return(
        <>
        <FrontHeader />
        <Outlet />
        <FrontFooter />
        </>
    )
}

export default FrontLayout;