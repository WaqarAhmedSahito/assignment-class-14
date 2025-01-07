import Header from "./Components/header";
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <Header />
            <div className="bg-gradient-to-b from-indigo-200 via-white to-indigo-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20">
                    <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-800 text-center mb-4">
                        Welcome to JSONPlaceholder Explorer
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-600 text-center mb-8 sm:mb-12">
                        Seamlessly browse through mock data with ease
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        <div className="group bg-white p-4 sm:p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
                            <h2 className="text-xl sm:text-2xl font-semibold text-indigo-600 mb-2 group-hover:text-indigo-700">
                                Users 👤
                            </h2>
                            <p className="text-gray-600 mb-4">Explore user profiles</p>
                            <Link
                                href="/Users"
                                className="inline-block text-indigo-600 font-medium hover:underline"
                            >
                                View More →
                            </Link>
                        </div>
                        <div className="group bg-white p-4 sm:p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
                            <h2 className="text-xl sm:text-2xl font-semibold text-pink-600 mb-2 group-hover:text-pink-700">
                                Posts 📮
                            </h2>
                            <p className="text-gray-600 mb-4">Read amazing posts</p>
                            <Link
                                href="/Posts"
                                className="inline-block text-pink-600 font-medium hover:underline"
                            >
                                View More →
                            </Link>
                        </div>
                        <div className="group bg-white p-4 sm:p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
                            <h2 className="text-xl sm:text-2xl font-semibold text-green-600 mb-2 group-hover:text-green-700">
                                Comments 💬
                            </h2>
                            <p className="text-gray-600 mb-4">Join the conversation</p>
                            <Link
                                href="/Comments"
                                className="inline-block text-green-600 font-medium hover:underline"
                            >
                                View More →
                            </Link>
                        </div>
                        <div className="group bg-white p-4 sm:p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
                            <h2 className="text-xl sm:text-2xl font-semibold text-yellow-600 mb-2 group-hover:text-yellow-700">
                                Todos 📝
                            </h2>
                            <p className="text-gray-600 mb-4">Manage your tasks</p>
                            <Link
                                href="/Todos"
                                className="inline-block text-yellow-600 font-medium hover:underline"
                            >
                                View More →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}