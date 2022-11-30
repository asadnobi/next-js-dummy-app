import Head from 'next/head'
import Image from 'next/image'
import MainLayout from '../components/layouts/main'

export default function Page() {
  return (
    <>
      <MainLayout>
        <div className='wrapper'>
          <Image src='/images/banner.jpg' alt="" width={1000} height={600} style={{width: '100%', height: 'auto'}} />
          <div className='container py-5'>
            <div className="row text-center">
              <div className="col-12 mb-4">
                <div className="row justify-content-md-center">
                  <div className='col-4'>
                    <h5 className='text-uppercase text-primary fw-semi font-monospace'>What we serve</h5>
                    <h1 className='text-capitalize'>Your favourite food delivery partner</h1>
                  </div>
                </div>
              </div>
              <div className='col-12'>
                <div className="row">
                  <div className="col">
                    <Image src='/images/d1.jpg' alt="" width={200} height={200} />
                    <h2>Easy to Order</h2>
                    <p>You only need a few step to ordering food.</p>
                  </div>
                  <div className="col">
                    <Image src='/images/d2.jpg' alt="" width={200} height={200} />
                    <h2>Fastest Delivery</h2>
                    <p>Delivery that is always ontime even faster.</p>
                  </div>
                  <div className="col">
                    <Image src='/images/d3.jpg' alt="" width={200} height={200} />
                    <h2>Best Quality</h2>
                    <p>Not only fast, quality also important for us.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='row my-5'>
              <Image src='/images/footer.jpg' alt="" width={1000} height={400} style={{width: '100%', height: 'auto'}} />
            </div>
          </div>
        </div>
      </MainLayout>
      <style jsx>{`
        .wrapper {background-color: white}
      `}
      </style>
    </>
  )
}

