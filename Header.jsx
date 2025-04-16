import React from "react";
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  const [openNav, setOpenNav] = React.useState(false);

  const navItems = ["TRANG CHỦ", "GIỚI THIỆU", "DỊCH VỤ", "BẢNG TIN"];

  return (
    <header className="bg-white shadow-md">
      {/* Top Section */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Text */}
          <div className="flex items-center space-x-4">
            <img
              src="/src/assets/images/logo.jpg"
              alt="Logo"
              className="h-30 w-30"
            />
            <div className="text-3xl font-bold text-blue-600">
              Viện Phát triển Khoa học Công nghệ và Giáo dục
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-2">
            <div className="relative w-120">
              <input
                type="text"
                placeholder="Search..."
                className="pl-4 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 w-full"
              />
              <MagnifyingGlassIcon className="h-5 w-5 text-blue-500 absolute right-3 top-2.5" />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="bg-blue-600">
        <nav className="container mx-auto px-4 py-2 flex justify-center space-x-6 text-white">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="hover:underline text-sm font-medium"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
