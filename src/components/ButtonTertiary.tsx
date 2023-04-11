import Image from 'next/image'

export function ButtonTertiary() {
  return (
    <div className="w-full">
      <button className="bg-transparent-500 text-white px-6 py-3 w-full rounded-full mb-4 outline-none ">
        DEFAULT TERTIARY
      </button>

      <button className="bg-transparent-500 text-white px-6 py-3 w-full rounded-full mb-4 outline-none transition-all hover:bg-violet-300 ">
        HOVER TERTIARY
      </button>
      <button className="bg-transparent-500 text-white px-6 py-3 w-full rounded-full mb-4 outline-none focus:ring-2 focus:ring-violet-100 ">
        FOCUS TERTIARY
      </button>
      <button className="bg-transparent-500 text-white px-6 py-3 w-full rounded-full mb-4 outline-none opacity-50 cursor-not-allowed">
        DISABLE TERTIARY
      </button>
      <button className="flex items-center justify-center gap-2 bg-transparent-500 text-white px-6 py-3 w-full  mb-4  outline-none rounded-full cursor-progress">
        <div className="w-4 h-4 border-b-2 border-l-2 border-r-2 border-white rounded-full animate-spin"></div>
        LOADING TERTIARY
      </button>

      <button className="flex items-center justify-center gap-2 bg-transparent-500 text-white px-6 py-3 w-full outline-none rounded-full cursor-all-scroll">
        MOVALHE TERTIARY
      </button>
    </div>
  )
}
