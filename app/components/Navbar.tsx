import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LoginButton from "./NavbarButtons/LoginButton";
import UserNavMenu from "./NavbarButtons/UserNavMenu";

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Left side */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="logo"
                width={144}
                height={30}
                className="h-auto w-auto hover:opacity-90 transition-opacity"
                priority
              />
            </Link>
          </div>

            {/* Auth Section */}
            {session?.user ? (
              <div className="flex items-center space-x-4">
                <Link 
                  href="/startup/create" 
                  className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-md font-medium transition-all duration-200 flex items-center gap-2 shadow-sm hover:shadow-md"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                  Create
                </Link>
                <UserNavMenu
                  user={{
                    id: session.user.id || '',
                    name: session.user.name ?? null,
                    email: session.user.email ?? null,
                    image: session.user.image ?? null,
                  }}
                />
              </div>
            ) : (
              <LoginButton />
            )}
          </div>
        </div>
    </header>
  );
};

export default Navbar;