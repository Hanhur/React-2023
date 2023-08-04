import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <header>
                <nav>
                    <NavLink to="/">Домашняя</NavLink>
                    <NavLink to="/dogs">Колекция</NavLink>
                </nav>
            </header>
            <main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </main>
            <footer>
                Footer
            </footer>
        </div>
    );
}

export default Layout;