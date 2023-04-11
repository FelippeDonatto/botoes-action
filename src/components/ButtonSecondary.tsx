import Image from 'next/image'
import menu from '/public/menu.png'

export function ButtonSecondary() {
  return (
    <div className="w-full">
      <button className="bg-gray-700 text-white px-6 py-3 w-full rounded-full mb-4 outline-none cursor-default">
        DEFAULT SECONDARY
      </button>

      <button className="bg-gray-700 text-white px-6 py-3 w-full rounded-full mb-4 outline-none transition-all hover:bg-gray-500 cursor-default">
        HOVER SECONDARY
      </button>

      <button className="bg-gray-700 text-white px-6 py-3 w-full rounded-full mb-4 outline-none focus:ring-2 focus:ring-violet-100 cursor-default">
        FOCUS SECONDARY
      </button>

      <button className="bg-gray-700 text-white px-6 py-3 w-full rounded-full mb-4 outline-none opacity-50 cursor-not-allowed">
        DISABLE SECONDARY
      </button>

      <button className="flex items-center justify-center gap-2 bg-gray-700 text-white px-6 py-3 w-full  mb-4  outline-none rounded-full cursor-progress">
        <div className="w-4 h-4 border-b-2 border-l-2 border-r-2 border-white rounded-full animate-spin"></div>
        LOADING SECONDARY
      </button>

      <button className="flex items-center justify-center gap-2 bg-gray-700 text-white px-6 py-3 w-full outline-none rounded-full cursor-move">
        <Image src={menu} alt="" />
        MOVALHE SECONDARY
      </button>
    </div>
  )
}
