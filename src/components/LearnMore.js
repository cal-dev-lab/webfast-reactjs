import React from 'react'

function LearnMore() {
    return (
        <div class="bg-gray-50">
            <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    <span class="block">Want to experience the way forward?</span>
                    <span class="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">Try us out for 30 days free.</span>
                </h2>
                <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div class="inline-flex rounded-md shadow">
                        <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-tr from-red-500 to-pink-500 hover:bg-gradient-to-tr hover:from-pink-500 hover:to-red-500 transition  duration-300">
                            Get started
                        </a>
                    </div>
                <div class="ml-3 inline-flex rounded-md shadow">
                    <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 bg-white">
                        Learn more
                    </a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default LearnMore
