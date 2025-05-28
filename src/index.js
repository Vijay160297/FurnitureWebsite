import ReactDOM from 'react-dom/client'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import NoPage from './pages/NoPage'
import Contact from './pages/Contact'
import Register from './pages/Register'
import ProductPage from './pages/ProductPage'
import Login from  './pages/Login'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function App()
{
    return (
        <BrowserRouter>
           <Routes>
            <Route path="/" element={<Layout />}>
             <Route index element={<Home />} />
             <Route path="contact" element={<Contact />} />
             <Route path="register" element={<Register />} />
             <Route path="Login" element={ < Login />} />
             <Route path="productpage" element={<ProductPage />} />
             <Route path="*" element={<NoPage />} />
            </Route>
           </Routes>
        </BrowserRouter>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)