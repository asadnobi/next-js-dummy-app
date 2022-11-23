import Image from 'next/image';
import { useEffect, useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router'
import { clearUser } from '../store/reducers/userSlice';
import { useSession, signOut } from "next-auth/react"

export default function Header () {
  const router = useRouter();
  const dispatch = useDispatch();
  const [user, setUser] = useState({isLogged: false});
  const userSelctor = useSelector((state) => state.user)

  const {data: session} = useSession();
  
  useEffect(() => {
    if(userSelctor) setUser(userSelctor);
  })

  const logout = async () => {
    // await dispatch(clearUser());
    // router.push('/');
    signOut()
  } 
  

  return (
    <Navbar expand="lg" style={{background: '#fef5f6'}}>
      <div className="container">
        <a className="navbar-brand" href=''>
          <Image src='/images/company-logo.png' alt="logo" width={150} height={75} style={{height: '60px', width: 'auto'}} />
        </a>
        <Navbar.Toggle aria-controls="top-menu" />
        <Navbar.Collapse id="top-menu">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">Why Us?</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href='about'>About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Conatct</a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="btn rounded-pill" href="#">
                <i className='icon-search'></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="btn rounded-pill" href="#" style={{position: 'relative', marginRight: '1em'}}>
                <i className='icon-cart'></i>
                <Badge style={{position: 'absolute', right: '-10px'}}>6</Badge>
              </a>
            </li>
            <li className="nav-item">
              {session ?
                <a className="btn btn-primary rounded-pill" onClick={logout}>
                  <i className='icon-exit start-icon'></i> Logout
                </a>
              :
                <a className="btn btn-primary rounded-pill" href='login'>
                  <i className='icon-enter start-icon'></i> Login
                </a>
              }
            </li>
          </ul>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}
