import { ButtonPrimary } from '@/components/ButtonPrimary'
import { ButtonSecondary } from '@/components/ButtonSecondary'
import { ButtonTertiary } from '@/components/ButtonTertiary'

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center w-full max-w-[1054px] mx-auto h-screen max-md:mt-80">
      <div className="flex flex-col justify-center items-center gap-4 w-full  max-w-[350px]">
        <h2 className="font-bold text-[32px] leading-[100%]">
          Teste os botões
        </h2>
        <p className="font-normal text-lg w-full max-w-[320px] mt-2 mb-24 text-violet-100 text-center">
          Interaja com os botões e observe a mudança de aparência e de cursores
        </p>
      </div>

      <div className="flex gap-4 w-full max-w-[1054px] max-md:flex-col max-md:px-4">
        <ButtonPrimary />
        <ButtonSecondary />
        <ButtonTertiary />
      </div>
    </main>
  )
}
