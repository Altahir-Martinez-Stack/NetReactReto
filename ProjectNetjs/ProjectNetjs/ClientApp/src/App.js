import { Routes, Route, NavLink } from 'react-router-dom';
import './css/App.css';
import sidebarData from './sidebarData';
import Receipt from './pages/Receipt'
import Pdf from './pages/Pdf'
import Users from './pages/Users'
import Home from './pages/Home'

function App() {
    return (
        <>
            <div className="App">
                <div className="sidedar-container">
                    <ul className="nav-list">
                        {sidebarData.map((item, index) => {
                            return (
                                <li className="nav-item" key={index}>
                                    <NavLink to={item.path} className={({ isActive }) => ["nav-link", isActive ? "active" : null].join("")}>
                                        <span>{ item.title }</span>
                                    </NavLink>

                                </li>
                            )
                        }) }
                    </ul>
                </div>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/Receipt" element={<Receipt></Receipt>}></Route>
                    <Route path="/Users" element={<Users></Users>}></Route>
                    <Route path="/Pdf" element={<Pdf></Pdf>}></Route>
                </Routes>
            </div>
        </>
    )
}

export default App;