import React from 'react';

function LearnMore() {
    return (
        <div className="bg-gray-50">
            <div className="max-w-7xl mx-auto py-12 p-10 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    <span className="block">Want to experience the way forward?</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">Try us out for 30 days free.</span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="inline-flex rounded-md shadow">
                        <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-tr from-red-500 to-pink-500 hover:bg-gradient-to-tr hover:from-pink-500 hover:to-red-500 transition  duration-300">
                            Get started
                        </a>
                    </div>
                <div className="ml-3 inline-flex rounded-md shadow">
                    <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 bg-white">
                        Learn more
                    </a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default LearnMore
