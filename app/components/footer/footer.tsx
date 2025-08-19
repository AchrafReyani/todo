import React from "react";

export default function Footer() {
  return (
    <footer
      className="w-full py-4 flex justify-center items-center border-t mt-8 text-gray-600 text-sm gap-2
      fixed bottom-0 left-0 bg-white z-50"
      style={{
        boxShadow: "0 -2px 8px rgba(0,0,0,0.03)",
      }}
    >
      <span>©2025 Made by Achraf Reyani</span>
      <a
        href="https://github.com/achrafreyani/untitled-todo-project"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center hover:text-black transition"
        aria-label="GitHub"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          fill="currentColor"
          viewBox="0 0 24 24"
          className="ml-1"
        >
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.582 0-.288-.012-1.243-.017-2.252-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.606-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.804 5.625-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.699.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      </a>
    </footer>
  );
}