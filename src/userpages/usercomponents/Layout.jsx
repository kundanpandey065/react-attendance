import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";



const Layout = () => {
    return(
        <>
        <Header />
            <main style={{ minHeight: "83vh", padding: "20px" }}>
                <Outlet />   {/* Yahan pe child routes render honge */}
            </main>
        <Footer />
        </>
    )
}

export default Layout;