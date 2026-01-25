import { Route, Routes } from 'react-router-dom';
import PaginaInicial from '../pages/PaginaInicial';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<PaginaInicial />} />
        </Routes>
    );
}