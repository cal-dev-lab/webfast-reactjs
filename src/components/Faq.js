import React from "react";

function Faq() {
	return (
		<div className="mt-10 mb-20">
			<div className="text-center px-2 top-0 mb-10 items-center font-light text-4xl py-4 ">
				<div data-aos="fade-up" clasName="mb-4">
					Frequently Asked{" "}
					<a
						href="/#"
						className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 underline"
					>
						Questions
					</a>
				</div>
				<p data-aos="fade-up" className="mt-4 text-sm md:text-lg text-gray-700 px-4">
					To keep our phone lines free for more urgent enquiries, we have some frequently asked questions to help with any general questions you may have.
				</p>
			</div>
		{/* Questions */}
			<div className="w-screen mx-auto gap-2 px-20 md:px-30 grid grid-cols-1 md:grid-cols-2">
				<div className="">
					<div data-aos="fade-up" className="p-4">
						<div className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">Can I leave at any time?</div>
						<div className="text-md mt-2 text-gray-500">
							Yes, we offer a contract as a "pay-as-you-go" - no strings attached!
							You are free to leave at any time but your contract will expire until the end of your billing period.
						</div>	
					</div>
					<div data-aos="fade-up" className="p-4">
						<div className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">Is there a fixed term?</div>
						<div className="text-md mt-2 text-gray-500">
							No! We believe our loyal customers require free-will to be their creative best. We do not want to see our customers go but we value their time spent with us.
						</div>
					</div>	
				</div>
				<div className="">
					<div data-aos="fade-up" className="p-4 ">
						<div className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">I'm out of memory!</div>
						<div className="text-md mt-2 text-gray-500">
							We recommend upgrading to one of our plans on offer.
							Memory can be upgraded to your requirements at an additional fee.
						</div>
					</div>
					<div data-aos="fade-up" className="p-4">
						<div className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">Can I FTP?</div>
						<div className="text-md mt-2 text-gray-500">
							Yes, our servers are setup for you to be able to use a FTP client to connect to your server or it can be
							accessed in your cPanel where that will also display your FTP details.
						</div>
					</div>	
				</div>
			</div>
		</div>
);
}

export default Faq;
