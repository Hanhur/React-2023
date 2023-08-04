import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import('../pages/Home'));
const Dogs = lazy(() => import('../pages/Dogs'));
const DogDetails = lazy(() => import('../pages/DogDetails'));
const Gallery = lazy(() => import('../components/Gallery'));
const SubBreeds = lazy(() => import('../components/SubBreeds'));
const Layout = lazy(() => import('../components/Layout'));

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="dogs" element={<Dogs />} />
                <Route path="dogs/:dogId" element={<DogDetails />}>
                    <Route path="subbreeds" element={<SubBreeds />} />
                    <Route path="gallery" element={<Gallery />} />
                </Route>
            </Route>
        </Routes>
    );
}
