'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { mockAccounts } from '../mockData/MockData';
import Header from '../header/Header';
import { FaArrowRightLong } from 'react-icons/fa6';
import Image from 'next/image';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userAccount = mockAccounts.find(account => account.holder.username === username);
    if (!userAccount) {
      setError('User not found');
      return;
    }
    if (userAccount.holder.password !== password) {
      setError('Invalid password');
      return;
    }
    // Store user data in localStorage
    localStorage.setItem('loggedInUser', JSON.stringify(userAccount));
    router.push('/dashboard');
  };

  const date = new Date();
  const hour = date.getHours();

  return (
    <div className="relative h-screen">
      <Header />
      <div className="pl-8 py-8 pb-5 min-h-[60px] font-bold text-[32px] text-[#002E3C] flex items-center justify-start">
        <p>Login</p>
      </div>
      <div className="bg-[white] p-4 pt-0 pb-[50px]">
        <div className="">{error && <p className="text-[20px] text-center mx-auto max-w-[200px] rounded-md flex items-center justify-center text-red-600">{error}</p>}</div>

        <div className="bg-white mx-auto max-w-[380px] rounded-xl w-full py-7 pt-0">
          <form onSubmit={handleLogin}>
            <div className="flex flex-col">
              <div className="flex flex-col gap-3 mb-10">
                <input
                  type="text"
                  value={username}
                  placeholder="Benutzername/Teilnehmernummer"
                  className="p-4 pb-2 pl-0 placeholder:text-[#002E3C]/40 text-[#002E3C] bg-transparent border-b-2 border-[#506C74]/50 outline-none"
                  onChange={e => setUsername(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-3">
                <input
                  type="password"
                  value={password}
                  placeholder="Passwort/PIN"
                  className="p-4 pb-2 pl-0 placeholder:text-[#002E3C]/40 text-[#002E3C] bg-transparent border-b-2 border-[#506C74]/50 outline-none"
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-full items-center justify-between gap-2 mt-8">
                <button type="submit" className="p-4 flex items-center justify-center gap-2 bg-[#FFD700] w-full text-[#002530] font-semibold rounded-full">
                  Login <FaArrowRightLong />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <footer className="bg-[#002E3C] w-full flex flex-col items-center justify-center absolute left-0 right-0 bottom-0 p-4 py-10 pb-0">
        <Image src="https://i.imgur.com/1e4c8K1.jpeg" width={230} height={28} className="w-[250px]" alt="logo" />
        <p className="text-[#DBE2E5] text-sm">Die Bank an Ihrer Seite</p>
        <hr className='border border-[#294750] w-full my-7' />
      </footer>
    </div>
  );
}
