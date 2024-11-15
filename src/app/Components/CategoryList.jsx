import Image from "next/image";
import React from "react";

const CategoryList = ({ categoryList }) => {
  return (
    <div className="mt-5">
      <h2 className="text-primary text-2xl font-bold">Shop by Category</h2>
      <div className="grid grid-cols-3 md:grid-cols-4 sm:grid-cols-6 lg:grid-cols-7 items-center gap-5">
        {categoryList.map((category, index) => (
          <div key={index} className="flex flex-col items-center gap-2 p-3 rounded-lg mt-2 bg-green-50 group cursor-pointer hover:bg-green-100">
            <Image
              src={
                process.env.NEXT_PUBLIC_BACKEND_BASE_URL + category.icon[0]?.url
              }
              width={80}
              height={80}
              className="w-24 h-20 md:w-20 sm:h-16 sm:w-18 group-hover:scale-125 transition-all ease-in"
              alt="category-list"
            />
            <h2 className="text-green-800">{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
