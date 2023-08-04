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
                <Outlet />
            </main>
            <footer>
                Footer
            </footer>
        </div>
    );
}

export default Layout;