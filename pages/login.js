import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { login } from '../services/http.services';
import { addUser } from '../store/reducers/userSlice';
import { signIn } from "next-auth/react"

export default function Page() {
  const router = useRouter();
  const dispatch = useDispatch();
  // form validation rules 
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'invalid password').max(50, 'invalid password').required('Password is required')
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;
  
  async function loginAuth ({email, password}) {
    const status = await signIn('credentials', {email, password}) 
    if(status.ok) router.push(status.url);
  }
  function registerRoute (e) {
    e.preventDefault()
    router.push('register')
  }

  const handleGithubSignin = () => {
    signIn('github')
  }


  return (
    <div className="container d-grid min-vh-100 py-5">
      <div className="row justify-content-center align-self-center">
        <div style={{maxWidth: '500px'}}>
          <div className="card">
            <div className="card-body">
              <div className="text-center mb-3">
                <Image src="/images/company-logo.png" alt="logo" width={200} height={80} />
                <h2 className="title">Sign In</h2>
                <h6 className="desc">You can login in to any partner restaurant using your login credentials wherever you see the Devoret Logo.</h6>
              </div>
              <form onSubmit={handleSubmit(loginAuth)}>
                <div className="form-group mb-3">
                  <label className="form-control-label">Email / Mobile number</label>
                  <input name="email" type="email" {...register('email')} className={`form-control form-control-lg text-lowercase ${errors.email ? 'is-invalid' : ''}`} placeholder="" />
                  <div className="invalid-feedback">{errors.email?.message}</div>
                </div>
                <div className="form-group mb-3">
                  <label className="form-control-label">Password</label>
                  <input name="password" type="password" {...register('password')} className={`form-control form-control-lg text-lowercase ${errors.password ? 'is-invalid' : ''}`} placeholder="" />
                  <div className="invalid-feedback">{errors.password?.message}</div>
                </div>
                <button type="submit" disabled={formState.isSubmitting} className="btn btn-lg btn-success w-100">SIGN IN</button>
                <div className="text-center mt-2">
                  <a href='register'>Don’t have an account?</a>
                  <button className="btn btn-sm btn-outline-primary ms-2" onClick={registerRoute}>Sign Up</button>
                </div>
              </form>
            </div>
          </div>
          <div className="divider-with-line text-center text-muted">OR</div>
          <div className="d-grid gap-3 mt-3">
            <button type="button" className="w-100 btn btn-lg btn-outline-primary" onClick={handleGithubSignin}>GitHub</button>
            <button type="button" className="w-100 btn btn-lg btn-outline-primary">Google</button>
            <button type="button" className="w-100 btn btn-lg btn-outline-primary">Facebook</button>
          </div>
        </div>
      </div>
    </div>
  )
}