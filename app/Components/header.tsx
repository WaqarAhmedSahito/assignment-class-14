import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <div className="bg-blue-600 text-white py-4 px-8 shadow-md">
            <div className="flex justify-between items-center">
                <div className="text-xl font-bold">ASSIGNMENT 14</div>
                <nav>
                    <ul className="flex space-x-6">
                    <li><Link href="/" className="hover:text-yellow-300">Home</Link></li>
                        <li><Link href="/Users" className="hover:text-yellow-300">Users</Link></li>
                        <li><Link href="/Posts" className="hover:text-yellow-300">Posts</Link></li>
                        <li><Link href="/Comments" className="hover:text-yellow-300">Comments</Link></li>
                        <li><Link href="/Todos" className="hover:text-yellow-300">Todos</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;
