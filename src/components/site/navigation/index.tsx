import { ModeToggle } from '@/components/global/mode-toggle'
import { UserButton } from '@clerk/nextjs'
import { User } from '@clerk/nextjs/server'
import { getAuthUserDetails } from '@/lib/queries'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import React from 'react'

type Props = {
  user?: null | User
}

const Navigation = async ({ user }: Props) => {
  const userInfo = await getAuthUserDetails();
  return (
    <div className="fixed top-0 right-0 left-0 p-4 flex items-center justify-between z-10">
      <aside className="flex items-center gap-2">
        <Image
          src={'./assets/plura-logo.svg'}
          width={40}
          height={40}
          alt="plur logo"
        />
        <span className="text-xl font-bold"> Plura.</span>
      </aside>
      <nav className="hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
        <ul className="flex items-center justify-center gap-8">
          <Link href={'#'}>Pricing</Link>
          <Link href={'#'}>About</Link>
          <Link href={'#'}>Documentation</Link>
          <Link href={'#'}>Features</Link>
        </ul>
      </nav>
      <aside className="flex gap-2 items-center">
        <Link
          href={'/agency'}
          className={clsx('text-white p-2 px-4', {
            'bg-primary rounded-md hover:bg-primary/80': !userInfo
          })}
        >
          {userInfo ? 'Dashboard' : 'Login'}
        </Link>
        <UserButton />
        <ModeToggle />
      </aside>
    </div>
  )
}

export default Navigation
