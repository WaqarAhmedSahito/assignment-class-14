import Header from "./Components/header";
import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <div className="flex-1 bg-gradient-to-b from-indigo-200 via-white to-indigo-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20">
                    <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-800 text-center mb-4">
                        Welcome to JSONPlaceholder Explorer
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-600 text-center mb-8 sm:mb-12">
                        Seamlessly browse through mock data with ease
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        {[
                            {
                                title: "Users 👤",
                                description: "Explore user profiles",
                                href: "/Users",
                                color: "indigo",
                            },
                            {
                                title: "Posts 📮",
                                description: "Read amazing posts",
                                href: "/Posts",
                                color: "pink",
                            },
                            {
                                title: "Comments 💬",
                                description: "Join the conversation",
                                href: "/Comments",
                                color: "green",
                            },
                            {
                                title: "Todos 📝",
                                description: "Manage your tasks",
                                href: "/Todos",
                                color: "yellow",
                            },
                        ].map(({ title, description, href, color }, idx) => (
                            <div
                                key={idx}
                                className={`group bg-white p-4 sm:p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform`}
                            >
                                <h2
                                    className={`text-xl sm:text-2xl font-semibold text-${color}-600 mb-2 group-hover:text-${color}-700`}
                                >
                                    {title}
                                </h2>
                                <p className="text-gray-600 mb-4">{description}</p>
                                <Link
                                    href={href}
                                    className={`inline-block text-${color}-600 font-medium hover:underline`}
                                >
                                    View More →
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
     );
}
