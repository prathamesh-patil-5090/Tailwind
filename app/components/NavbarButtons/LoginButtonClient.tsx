"use client";

import { signIn } from "next-auth/react";

const LoginButtonClient = () => {
  return (
    <button
      onClick={() => signIn("github")}
      className="
        bg-black text-white 
        px-6 py-2 
        rounded-lg 
        font-medium 
        transition-all 
        duration-200 
        hover:bg-gray-800 
        hover:shadow-md 
        active:bg-gray-900 
        active:scale-95
        flex items-center justify-center
        gap-2
      "
    >
      <span>Login with GitHub</span>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M15 22v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M19 16v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M19 8v3a4 4 0 0 1-4 4h-2"></path>
      </svg>
    </button>
  );
};

export default LoginButtonClient;