import Image from 'next/image'

export function ButtonPrimary() {
  return (
    <div className="w-full">
      <button className="bg-violet-500 text-white px-6 py-3 w-full rounded-full mb-4 outline-none cursor-default">
        DEFAULT PRIMARY
      </button>

      <button className="bg-violet-500 text-white px-6 py-3 w-full rounded-full mb-4 outline-none transition-all hover:bg-violet-300 cursor-default">
        HOVER PRIMARY
      </button>

      <button className="bg-violet-500 text-white px-6 py-3 w-full rounded-full mb-4 outline-none focus:ring-2 focus:ring-violet-100 cursor-default">
        FOCUS PRIMARY
      </button>

      <button className="bg-violet-500 text-white px-6 py-3 w-full rounded-full mb-4 outline-none opacity-50 cursor-not-allowed">
        DISABLE PRIMARY
      </button>

      <button className="flex items-center justify-center gap-2 bg-violet-500 text-white px-6 py-3 w-full  mb-4  outline-none rounded-full cursor-progress">
        <div className="w-4 h-4 border-b-2 border-l-2 border-r-2 border-white rounded-full animate-spin"></div>
        LOADING PRIMARY
      </button>

      <button className="flex items-center justify-center gap-2 bg-violet-500 text-white px-6 py-3 w-full outline-none rounded-full cursor-move">
        MOVALHE PRIMARY
      </button>
    </div>
  )
}
