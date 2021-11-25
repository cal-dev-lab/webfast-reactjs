import React from "react";

function Faq() {
  return (
	  <div className="flex min-h-screen bg-gradient-to-r from-indigo-500 to-indigo-700">
	  <div className="mx-auto text-center items-center text-2xl lg:text-4xl font-bold text-white grid place-items-center h-screen px-10">FAQ</div>
	  	<div className="w-full mx-auto flex p-10 space-x-between gap-8 grid grid-cols-1 md:grid-cols-2">
	  		<div className="">
	  			<div className="ml-4 p-4 mt-10 mb-10 bg-white rounded-2xl">
	  				<div className="text-2xl text-gray-700 font-bold">Q. Can I leave at any time?</div>
	  				<div className="text-md mt-2 text-gray-500">A. Yes, we offer a contract as a "pay-as-you-go" - no strings attached!</div>	
	  			</div>
	  			<div className="ml-4 p-4 bg-white mb-10 rounded-2xl">
	  				<div className="text-2xl text-gray-700 font-bold">Q. Is there a fixed term?</div>
	  				<div className="text-md mt-2 text-gray-500">
	  					A. No! We believe our loyal customers require free-will to be their creative best. We do not want to see you go but we value your time spent with us.
	  				</div>
	  			</div>	
	  		</div>
	  		<div className="bg-yellow-500"></div>
	  	</div>
	  </div>
  );
}

export default Faq;
