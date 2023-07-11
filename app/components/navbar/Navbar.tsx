'use client';
import React from 'react'
import Container from '../Container'
import Logo from './Logo'
import Search from './Search'
import UserMenu from './UserMenu'
import { SafeUser } from '@/app/types';
import Categories from './Categories';
import { useRouter } from 'next/navigation';

interface NavbarProps {
  currentUser?: SafeUser | null;
}

export default function Navbar({ currentUser }: NavbarProps) {
  const router = useRouter();
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
}
