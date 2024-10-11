'use client'
import React, { useState } from 'react';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica de autenticação aqui
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="bg-primary-black border border-white p-8 rounded-lg shadow-lg m-4 w-full md:w-1/3">
        <h2 className="text-3xl font-brush mb-6 text-center text-white font-bold">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
                      <label htmlFor="email" className="block text-white text-xl  font-brush mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-primary-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-xl text-white font-brush mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-primary-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full  text-primary-black  font-bold font-inter py-2 px-4 rounded-3xl  bg-primary-green transition-colors duration-300"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
