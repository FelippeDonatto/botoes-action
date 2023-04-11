import { Button } from '@/components/Button'

export default function Buttons() {
  return (
    <main className="flex flex-col justify-center items-center w-full max-w-[1054px] mx-auto h-screen">
      <div className="flex flex-col justify-center items-center gap-4 w-full  max-w-[350px]">
        <h2 className="font-bold text-[32px] leading-[100%]">
          Teste os botões
        </h2>
        <p className="font-normal text-lg w-full max-w-[320px] mt-2 mb-24 text-violet-100 text-center">
          Interaja com os botões e observe a mudança de aparência e de cursores
        </p>
      </div>

      <div className="flex gap-4 w-full max-w-[1054px]">
        <Button bg="primary" type="button">
          BUTTON COMPONENT
        </Button>

        <Button bg="primary" type="button" hover="hover:bg-violet-300">
          HOVER COMPONENT
        </Button>

        <Button bg="primary" type="button" focus='focus:ring-2 focus:ring-violet-100 '>
          FOCUS COMPONENT
        </Button>
      </div>
    </main>
  )
}
