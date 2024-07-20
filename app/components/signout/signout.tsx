'use client'
import { auth } from '@/app/lib/firebase/clientApp';
import { signOut } from 'firebase/auth';
import React from 'react'
import { useRouter } from 'next/navigation';


const SignOutButton = () => {
    const router = useRouter();

    const handleSignout = async () => {
        await signOut(auth);
        router.push('/');
    }

    return (
        <button
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 hover:font-bold transition"
            onClick={handleSignout}
        >Sign Out</button>
    )
}

export default SignOutButton