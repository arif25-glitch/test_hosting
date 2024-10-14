"use client";

import Image from 'next/image';
import React, { useState } from 'react';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle login logic here
    if (username === 'admin' && password === 'admin123') {
      window.location.href = '/admin_dashboard';
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group py-2">
                  <h2 className='text-center mt-4'>LOGIN ADMIN</h2>
                </div>
                <div className='form-group text-center'>
                  <Image src={'/lib/img/logo1.png'}
                    alt='Logo'
                    width={250}
                    height={250} />
                </div>
                <div className="form-group py-2">
                  <label htmlFor="email">Masukkan username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group py-2">
                  <label htmlFor="password">Masukkan Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary mt-4">
                  Masuk
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};