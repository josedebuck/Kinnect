import React from 'react';


import Sidebar from "@/components/layout/Sidebar"

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="h-screen bg-black">
    <div className="container h-full mx-auto max-w-[600px] xl:px-30">
      <div className="grid center h-full">
          <Sidebar />
          <div 
            className="
            col-span-3 
            lg:col-span-2 
            border-x-[1px] 
            border-neutral-800
          ">
            {children}
          </div>
        </div>
     </div>
    </div>
  )
}

export default Layout;