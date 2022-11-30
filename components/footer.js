import Image from 'next/image';
import Form from 'react-bootstrap/Form';

function Footer () {
  return (
    <>
      <div className='footer'>
        <div className="container py-5">
          <div className="row">
            <div className="col">
              <p className='mb-4'>
                <a href="#">
                  <Image src='/images/company-logo.png' alt="logo" width={150} height={75} style={{height: '60px', width: 'auto'}} />
                </a>
              </p>
              <p className='fs-5 text-muted'>Our job is to filling your tummy with delicious food and with fast and free delivery.</p>
            </div>
            <div className="col-auto">
              <h4 className='fw-semibold'>About</h4>
              <hr />
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Menu</a></li>
              </ul>
            </div>
            <div className="col-auto">
              <h4 className='fw-semibold'>Company</h4>
              <hr />
              <ul>
                <li><a href="#">Why Us</a></li>
                <li><a href="#">Partner With Us</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
            <div className="col-auto">
              <h4 className='fw-semibold'>Support</h4>
              <hr />
              <ul>
                <li><a href="#">Account</a></li>
                <li><a href="#">Support Center</a></li>
                <li><a href="#">Feedback</a></li>
                <li><a href="#">Find Us</a></li>
              </ul>
            </div>
            <div className="col">
              <h4 className='fw-semibold'>Get In Touch</h4>
              <hr />
              <p>Question or Feedback?<br />We would love to hear from you.</p>
              <Form>
                <div className='input-group'>
                  <Form.Control type="email" placeholder="Email address" style={{border: 0}} />
                  <span className="input-group-text">
                    <i className="icon-rocket"></i>
                  </span>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .footer {background-color: white;}
        hr {min-width: 175px; border: 0; margin: 0.5em 0;}
        ul {list-style: none; padding: 0; margin: 0;}
        ul li {margin-bottom: 5px;}
        ul li a {color: currentColor; text-decoration: none; font-size: 110%;}
        ul li a:hover {color: var(--bs-primary);}
        .input-group {border-radius: 50rem; overflow: hidden; border: 1px solid var(--bs-gray-300);}
        .input-group .input-group-text {background: transparent; color: var(--bs-primary); border: 0;}
      `}</style>
    </>
  )
}

export default Footer