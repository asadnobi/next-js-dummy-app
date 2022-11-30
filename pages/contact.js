import Head from 'next/head'
import Image from 'next/image'
import MainLayout from '../components/layouts/main'
import styles from './../styles/contact.module.scss'

export default function Page() {
  return (
    <>
      <MainLayout>
      <div className={styles.contact_Page}>
        <div className={`container my-4 ${styles.mainsection}`}>
          <div className={`${styles.left} ${styles.whitepanel}`}>
            <div className={styles.panel}>
              <p className={styles.texttitle}><span className="">Our History</span></p>
              <p className={styles.textdesc}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text.</p>
            </div>
            <div className={styles.panel}>
              <p className={styles.texttitle}><span>Gallery</span></p>
              <div className={styles.homeGallery}>
                
              </div>
            </div>
            <div className={styles.panel}>
              <p className={styles.texttitle}><span>Our Opening Hours</span></p>
              <ul className={styles.schedule}>
                <li>
                  <p className={styles.dayname}>Sunday</p>
                  <p className={styles.day_time}>10am to 8pm</p>
                </li>
                <li>
                  <p className={styles.dayname}>Monday</p>
                  <p className={styles.day_time}>10am to 8pm</p>
                </li>
                <li>
                  <p className={styles.dayname}>Tuesday</p>
                  <p className={styles.day_time}>10am to 8pm</p>
                </li>
                <li>
                  <p className={styles.dayname}>Wednesday</p>
                  <p className={styles.day_time}>10am to 8pm</p>
                </li>
                <li>
                  <p className={styles.dayname}>Friday</p>
                  <p className={styles.day_time}>10am to 8pm</p>
                </li>
                <li>
                  <p className={styles.dayname}>Saturday</p>
                  <p className={styles.day_time}>10am to 8pm</p>
                </li>
              </ul>
            </div>
            <div className={styles.panel}>
              <p className={styles.texttitle}><span>Upcoming Events</span></p>
              <div className="row d-flex">
                <div className="col-lg-6 col-12 mb-3 events">
                  <Image src='https://rsquare2014.com/wp-content/uploads/2017/02/External-Events-banner_2.png' alt="logo" width={400} height={300} style={{height: 'auto', width: '100%'}} />
                  <p className="mb-0 lh-120 p-2 bg-light">
                    <span className="float-end mt-1"><a href='#' className="btn btn-sm btn-primary text-uppercase">JOIN</a></span>
                    <span className="bold-500 text-capitalize ellipse-1">LIVE Walk in London</span>
                    <span className="text-75">A tranquil walk through one of the most emblematic areas of London that is often missed by many visitors: the south Bank of the river Thames. In this lively area of the city anything can happen! The tour highlights include the view of Tower Bridge, walking by many emblematic bridges of London including the Millennium Bridge, and seeing lesser known sights such as Southwark cathedral, the Globe Theatre or the Tate Modern.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.right} ${styles.whitepanel}`}>
            <div className={styles.panel}>
              <div className={styles.box}>
                <p className={styles.texttitle}><span>Contact</span></p>
                <p className={styles.textsubtitle}><i className="flaticon-phone-call icon"></i>
                  <a href="#">01681-1122233</a>
                </p>
              </div>
              <div className={styles.box}>
                <p className={styles.texttitle}><span>Address</span></p>
                <p className={styles.textsubtitle}><i className="flaticon-location icon"></i>
                  <span>Blue Triangle Garden Club</span>
                </p>
              </div>
              <div className={styles.box}>
                <p className={styles.texttitle}><span>Email</span></p>
                <p className={styles.textsubtitle}><i className="flaticon-email icon"></i>
                  <a href="">example@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <iframe src="" width="100%" height="400px" frameborder="0" allowfullscreen></iframe> */}
      </div>
      </MainLayout>
    </>
  )
}

