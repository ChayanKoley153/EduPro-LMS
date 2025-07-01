import React, { useState } from 'react';
import { GraduationCap, Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const user = false;

  return (
    <div className='bg-gray-900 z-50 w-full py-3 fixed top-0'>
      <div className='max-w-7xl mx-auto px-4 flex justify-between items-center'>
        {/* logo section */}
        <Link to="/">
          <div className='flex items-center gap-2'>
            <GraduationCap className='text-gray-300 w-8 h-8 md:w-10 md:h-10' />
            <h1 className='text-gray-300 text-2xl md:text-3xl font-bold'>EduPro</h1>
          </div>
        </Link>

        {/* Mobile Menu Icon */}
        <div className='md:hidden'>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <X className="text-white w-6 h-6" />
            ) : (
              <Menu className="text-white w-6 h-6" />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <nav className='hidden md:flex gap-7 text-xl items-center font-semibold text-white'>
          <Link to="/"><li className='cursor-pointer list-none'>Home</li></Link>
          <Link to="/courses"><li className='cursor-pointer list-none'>Courses</li></Link>
          {
            !user ? (
              <div className='flex gap-3'>
                <Link to="/login"><Button className="bg-blue-500 hover:bg-blue-600">Login</Button></Link>
                <Link to="/signup"><Button className="bg-gray-700 hover:bg-gray-800">Signup</Button></Link>
              </div>
            ) : (
              <div className='flex items-center gap-5'>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" className="cursor-pointer" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Button className="bg-blue-500 hover:bg-blue-600">Logout</Button>
              </div>
            )
          }
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='md:hidden bg-gray-800 py-4 px-4 text-white space-y-3'>
          <li className='list-none cursor-pointer'>Home</li>
          <li className='list-none cursor-pointer'>Courses</li>
          {
            !user ? (
              <div className='flex justify-center items-center flex-col gap-2'>
                <Button className="bg-blue-500 hover:bg-blue-600 w-full">Login</Button>
                <Button className="bg-gray-700 hover:bg-gray-800 w-full">Signup</Button>
              </div>
            ) : (
              <div className='flex items-center gap-3'>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" className="cursor-pointer" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Button className="bg-blue-500 hover:bg-blue-600">Logout</Button>
              </div>
            )
          }
        </div>
      )}
    </div>
  );
};

export default Navbar;
