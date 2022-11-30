import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { signIn } from "next-auth/react"
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'invalid password').max(50, 'invalid password').required('Password is required')
});

export default function Page() {
  const router = useRouter();
  const form = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      signInCredential(values);
    },
  });
  const signInCredential = (logindata) => {
    signIn('credentials', logindata);
  };
  const signInGithub = () => {
    signIn('github', {redirect: false});
  };
  const signInGoogle = () => {
    signIn('google', {redirect: false});
  };
  
  function registerRoute (e) {
    e.preventDefault()
    router.push('register')
  }



  return (
    <>
      <Head>
        <title>Sign In | Enjoy you favourites from largest marketplace of food by login with your credentials</title>
      </Head>
      <div className="container d-grid min-vh-100 py-5">
        <div className="row justify-content-center align-self-center">
          <div style={{maxWidth: '500px'}}>
            <div className="card">
              <div className="card-body">
                <div className="text-center mb-3">
                  <Image src="/images/company-logo.png" alt="logo" width={200} height={80} />
                  <h2 className="title">Sign In</h2>
                  <h6 className="desc">Enjoy you favourites from largest marketplace of food by login with your credentials</h6>
                </div>
                <form onSubmit={form.handleSubmit}>
                  <div className="form-group mb-3">
                    <label className="form-control-label">Email address</label>
                    <input name="email" type="email"placeholder="" 
                    onChange={form.handleChange} value={form.values.email}
                    className={`form-control form-control-lg ${form.errors.email && form.touched.email ? 'is-invalid' : ''}`} />
                    {form.errors.email && form.touched.email ? <div className="invalid-feedback">{form.errors.email}</div> : null}
                  </div>
                  <div className="form-group mb-3">
                    <label className="form-control-label">Password</label>
                    <input name="password" type="password" placeholder="Password"
                    onChange={form.handleChange} value={form.values.password}
                    className={`form-control form-control-lg ${form.errors.password && form.touched.password ? 'is-invalid' : ''}`}  />
                    {form.errors.password && form.touched.password ? <div className="invalid-feedback">{form.errors.password}</div> : null}
                  </div>
                  <button type="submit" className="btn btn-lg btn-success w-100">SIGN IN</button>
                  <div className="text-center mt-2">
                    <a href='register'>Don’t have an account?</a>
                    <button className="btn btn-sm btn-outline-primary ms-2" onClick={registerRoute}>Sign Up</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="divider-with-line text-center text-muted">OR</div>
            <div className="d-grid gap-3 mt-3">
              <button type="button" className="w-100 btn btn-lg btn-outline-primary" onClick={signInGoogle}>Google</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}