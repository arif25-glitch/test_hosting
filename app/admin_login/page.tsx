"use client";

import Link from "next/link";

export default function Login() {

  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <form className="login100-form">
            <span className="login100-form-title p-b-26">
              Login Admin
            </span>
            <span className="login100-form-title p-b-48">
              <img src="lib/img/logo1.png" width="200px" height="200px" />
            </span>

            <div className="wrap-input100" data-validate="Masukkan username">
              <input className="input100" type="text" name="email" id="email" />
                <span className="focus-input100" data-placeholder="Username"></span>
            </div>

            <div className="wrap-input100" data-validate="Masukkan password">
              <span className="btn-show-pass">
                <i className="zmdi zmdi-eye"></i>
              </span>
              <input className="input100" type="password" name="pass" id="password" />
                <span className="focus-input100" data-placeholder="Password"></span>
            </div>

            <div className="container-login100-form-btn">
              <div className="wrap-login100-form-btn">
                <div className="login100-form-bgbtn"></div>
                <Link href={'/admin_dashboard'}>
                  <button className="login100-form-btn">
                    Login
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}