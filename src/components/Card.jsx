import React from 'react'

function Card() {
  return (
    <div><div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md dark:bg-gray-800">
    <div className="p-6 bg-purple-300 dark:bg-gray-500 m-3  rounded-md">
      <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased dark:text-white">
        UI/UX Review Check
      </h5>
      <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased dark:text-white">
        The place is close to Barceloneta Beach and bus stop just 2 min by walk
        and near to "Naviglio" where you can enjoy the main night life in
        Barcelona.
      </p>
    </div>
    <div className="p-6 pt-0">
      <button
        className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        data-ripple-light="true"
      >
        Read More
      </button>
    </div>
  </div></div>
  )
}

export default Card