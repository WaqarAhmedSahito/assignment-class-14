"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu toggle

    return (
        <header className="bg-blue-600 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                {/* Logo or Title */}
                <div className="text-2xl font-bold">ASSIGNMENT 14</div>

                {/* Navigation Links */}
                <nav>
                    <ul className="hidden sm:flex space-x-6">
                        <li>
                            <Link href="/" className="hover:text-yellow-300">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/Users" className="hover:text-yellow-300">
                                Users
                            </Link>
                        </li>
                        <li>
                            <Link href="/Posts" className="hover:text-yellow-300">
                                Posts
                            </Link>
                        </li>
                        <li>
                            <Link href="/Comments" className="hover:text-yellow-300">
                                Comments
                            </Link>
                        </li>
                        <li>
                            <Link href="/Todos" className="hover:text-yellow-300">
                                Todos
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Mobile Menu */}
                <div className="sm:hidden relative">
                    <button
                        className="text-yellow-300 hover:text-yellow-400 focus:outline-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        ☰
                    </button>
                    {menuOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                            <Link href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                Home
                            </Link>
                            <Link href="/Users" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                Users
                            </Link>
                            <Link href="/Posts" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                Posts
                            </Link>
                            <Link href="/Comments" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                Comments
                            </Link>
                            <Link href="/Todos" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                Todos
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
