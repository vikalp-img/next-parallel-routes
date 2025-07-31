import Sidebar from '@/components/Sidebar'


function layout({children, products, revenue, users}) {


  return (
    <div>
      <div>
        {children}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 max-w-screen-xl mx-auto">
        {/* Left column */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          {/* Users */}
          <div className="bg-gray-800 rounded p-4 shadow text-white min-h-[200px] lg:min-h-[250px]">
            <h2 className="text-xl font-semibold mb-2">{users}</h2>
            
          </div>
          {/* Products */}
          <div className="bg-gray-800 rounded p-4 shadow text-white min-h-[200px] lg:min-h-[250px]">
            <h2 className="text-xl font-semibold mb-2">{products}</h2>
            
          </div>
        </div>

        {/* Right column */}
        <div className="bg-gray-800 rounded p-4 shadow text-white min-h-[420px] lg:min-h-[520px]">
          <h2 className="text-xl font-semibold mb-2">{revenue}</h2>
          
        </div>
      </div>
    </div>
  );
}

export default layout;
