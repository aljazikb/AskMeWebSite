
export function Card() {
  return (
    <div className=" dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5 ">
      <div>
        <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
          <svg className="h-6 w-6 stroke-white">
            {/* ... */}
          </svg>
        </span>
      </div>
      <h1 className="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight">Ask Me </h1>

      <div  className="flex  h-15 space-x-4 ">
      <input type="text" placeholder=" Type your question here..."
       className=" w-5/6 mt-4  rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" />
      <button className=" w-1/6 mt-4  rounded-md bg-indigo-500 text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        Ask
      </button>

      </div>
      
      <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
        Ask me anything you want, and I will do my best to provide you with a helpful answer.
      </p>
       </div>
    
  )
}

export default Card


