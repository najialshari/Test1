// import { useState } from 'react'
// import { Link } from 'react-router-dom'
import myLogo from '../images/logo.png'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    // const [colorHome, setColorHome] = useState('rgb(255, 255, 255)')
    // const [colorBlog, setColorBlog] = useState('rgb(204, 204, 204)')
    // const [oldHome, setOldHome] = useState('rgb(255, 255, 255)')
//     const [oldBlog, setOldBlog] = useState('rgb(204, 204, 204)')
// const blue = 'blue'
// const red = 'red'
//     const handleLinks = (e) => {
//         if (e.target.id === 'home') {
//             setColorHome('rgb(255, 255, 255)')
//             setColorBlog('rgb(204, 204, 204)')
//             setOldHome('rgb(255, 255, 255)')
//         } else {
//             setColorBlog('rgb(255, 255, 255)')
//             setColorHome('rgb(204, 204, 204)')
//             setOldBlog('rgb(255, 255, 255)')
//         }
         
//     }

//     const mouseEnter = (e) => {
//         if (e.target.id === 'home') {
//             setOldHome(colorHome)
//             setColorHome('rgb(0, 0, 255)')
//         } else {
//             setOldBlog(colorBlog)
//             setColorBlog('rgb(0, 0, 255)')
//         }
//     }
//     const mouseLeave = (e) => {
//         if (e.target.id === 'home') setColorHome(oldHome)
//         else setColorBlog(oldBlog)
//     }

    return (
        <div className='navContainer'>
            {/* mainContainer used to wrap all components with lower layer z-index 1  */}
            <nav className='navbar fixed-top bg-dark p-0'>
                <div className='container'>
                    <div className='col text-start py-1'>
                        <img src={myLogo} width="90px" height="60px" alt='...' />
                    </div>

                    <div className='links d-flex col-2 justify-content-end'>

                        <NavLink id='home' to='/' className={({ isActive }) => isActive? 'nav-link text-info' : 
                        'nav-link text-danger'}
                            // onMouseEnter={mouseEnter}
                            // onMouseLeave={mouseLeave}
                            // style={{ color: {isActive} ? 'blue' : 'red' }}
                            // onClick={handleLinks}
                        >Home</NavLink>

                        <NavLink id='blog' to='/blog' className={({ isActive }) => isActive? 'nav-link text-info' : 
                        'nav-link text-danger'} 
                            // onMouseEnter={mouseEnter}
                            // onMouseLeave={mouseLeave}
                            // style={{ color: colorBlog }}
                            // onClick={handleLinks}
                        >Blog</NavLink>

                    </div>
                </div>
            </nav>
        </div>)
}
export default Navbar