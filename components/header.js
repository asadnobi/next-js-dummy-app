import Image from 'next/image';
import Badge from 'react-bootstrap/Badge';
import Navbar from 'react-bootstrap/Navbar';
import { useRouter } from 'next/router'
import { useSession, signOut } from "next-auth/react"
import Link from 'next/link'

export default function Header () {
  const router = useRouter();
  const {data: session} = useSession();
  

  const logout = async () => {
    signOut();
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
              <Link className="nav-link" href="#">Why Us?</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href='/about'>About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contact">Contact</Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto flex-row">
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
                <a className="btn btn-primary rounded-pill w-100" onClick={logout}>
                  <i className='icon-exit start-icon'></i> Logout
                </a>
              :
                <a className="btn btn-primary rounded-pill w-100" href='login'>
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
