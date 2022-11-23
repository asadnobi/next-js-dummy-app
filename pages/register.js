import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  first_name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('FirstName is required'),
  last_name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('LastName is required'),
  mobile_no: Yup.string().required('Mobile no is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Too Short!').max(50, 'Too Long!').required('Password is required'),
  confirmPassword: Yup.string().required('Password is required').oneOf([Yup.ref('password'), ''], 'Passwords must match')
});

export default function Page() {
  const router = useRouter()
  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      mobile_no: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // const response = await fetch('/api/login-user', {
      //   method: 'POST',
      //   headers: {'Content-Type': 'application/json'},
      //   body: JSON.stringify(object)
      // })
      // const data = await response.json();
      console.log(values)
    },
  });
  const loginRoute = (e) => {
    e.preventDefault()
    router.push('login')
  }


  return (
    <div className="container d-grid min-vh-100 py-5">
      <div className="row justify-content-center align-self-center">
        <div style={{maxWidth: '500px'}}>
          <div className="card">
            <div className="card-body">
              <div className="text-center mb-3">
                <Image src="/images/company-logo.png" alt="logo" width={200} height={80} />
                <h2 className="title">Sign Up</h2>
                <h6 className="desc">You can login in to any partner restaurant using your login credentials wherever you see the Devoret Logo.</h6>
              </div>
              <form onSubmit={formik.handleSubmit}>
                <div className="row">
                  <div className="form-group col mb-3">
                    <input type="text" name="first_name" placeholder="Fast Name" 
                    onChange={formik.handleChange} value={formik.values.first_name}
                    className={`form-control form-control-lg ${formik.errors.first_name && formik.touched.first_name ? 'is-invalid' : ''}`} />
                    {formik.errors.first_name && formik.touched.first_name ? <div className="invalid-feedback">{formik.errors.first_name}</div> : null}
                  </div>
                  <div className="form-group col mb-3">
                    <input type="text" name="last_name" placeholder="Last Name" 
                    onChange={formik.handleChange} value={formik.values.last_name}
                    className={`form-control form-control-lg ${formik.errors.last_name && formik.touched.last_name ? 'is-invalid' : ''}`} />
                    {formik.errors.last_name && formik.touched.last_name ? <div className="invalid-feedback">{formik.errors.last_name}</div> : null}
                  </div>
                </div>
                <div className="form-group col mb-3">
                  <input type="email" name="email" placeholder="Email Address" 
                  onChange={formik.handleChange} value={formik.values.email}
                  className={`form-control form-control-lg ${formik.errors.email && formik.touched.email ? 'is-invalid' : ''}`} />
                  {formik.errors.email && formik.touched.email ? <div className="invalid-feedback">{formik.errors.email}</div> : null}
                </div>
                <div className="input-group input-group-lg col mb-3 mobile">
                  <input type="tel" name="mobile_no" placeholder="Mobile No"
                  onChange={formik.handleChange} value={formik.values.mobile_no}
                  className={`form-control form-control-lg ${formik.errors.mobile_no && formik.touched.mobile_no ? 'is-invalid' : ''}`} />
                  {formik.errors.mobile_no && formik.touched.mobile_no ? <div className="invalid-feedback">{formik.errors.mobile_no}</div> : null}
                </div>
                <div className="row">
                  <div className="form-group col mb-3">
                    <input type="text" name="password" placeholder="Password"
                    onChange={formik.handleChange} value={formik.values.password}
                    className={`form-control form-control-lg ${formik.errors.password && formik.touched.password ? 'is-invalid' : ''}`}  />
                    {formik.errors.password && formik.touched.password ? <div className="invalid-feedback">{formik.errors.password}</div> : null}
                  </div>
                  <div className="form-group col mb-3">
                    <input type="text" name="confirmPassword" placeholder="Confirm Password"
                    onChange={formik.handleChange} value={formik.values.confirmPassword}
                    className={`form-control form-control-lg ${formik.errors.confirmPassword && formik.touched.confirmPassword ? 'is-invalid' : ''}`}  />
                    {formik.errors.confirmPassword && formik.touched.confirmPassword ? <div className="invalid-feedback">{formik.errors.confirmPassword}</div> : null}
                  </div>
                </div>
                <div className="form-check mb-3">
                <label>
                  <input type="checkbox" name="terms_and_condition" 
                  className={`form-check-input ${formik.errors.first_name && formik.touched.first_name ? 'is-invalid' : ''}`}/>
                  I agree to accept all terms & conditions
                </label>
                </div>
                <button type="submit" className="btn btn-lg btn-success w-100">SIGN UP</button>
                <div className="text-center mt-2">
                  <a href='login'>Already have an account?</a>
                  <button type="button" className="btn btn-sm btn-outline-primary ms-2" onClick={loginRoute}>Sign In</button>
                </div>
              </form>
            </div>
          </div>
          <div className="divider-with-line text-center text-muted">OR</div>
          <div className="d-grid gap-3 mt-3">
            <button type="button" className="w-100 btn btn-lg btn-outline-primary">Google</button>
            <button type="button" className="w-100 btn btn-lg btn-outline-primary">Facebook</button>
          </div>
        </div>
      </div>
    </div>
  )
}