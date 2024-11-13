import { Button } from "@/components/ui/button";
import { LayoutGrid, Search, ShoppingBag } from "lucide-react";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="p-5 shadow-sm flex justify-between">
      <div className="flex items-center gap-8">
        <Image src="/logo.png" alt="logo" width={120} height={100} />
        <h2 className="md:flex gap-2 items-center bg-slate-200 border rounded-full p-2 px-10 hidden">
          <LayoutGrid className="h-5 w-5" />
          Category
        </h2>
        <div className="md:flex gap-3 items-center border rounded-full p-2 px-5 hidden">
          <Search />
          <input className="outline-none" type="text" placeholder="Search" />
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <h2 className="flex gap-2 items-center text-lg">
          <ShoppingBag /> 0
        </h2>
        <Button>Login</Button>
      </div>
    </div>
  );
};

export default Header;
