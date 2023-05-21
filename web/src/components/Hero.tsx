import Image from 'next/image'
import Link from 'next/link'
import nlwLogo from '../assets/nlw-spacetime-logo.svg'

export function Hero() {
  return (
    <div className="space-y-10 md:space-y-5">
      <div className="flex w-full items-center justify-center md:justify-start">
        <Image
          src={nlwLogo}
          alt=""
          className="mt-8 h-16 w-60 md:mt-0 md:h-[48px] md:w-[161px]"
        />
      </div>
      <div className="w-full space-y-1 md:max-w-[420px] ">
        <h1 className="text-3xl font-bold leading-tight text-gray-50 md:text-5xl">
          Sua cápsula do tempo
        </h1>
        <p className=" text-lg leading-relaxed">
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </p>
      </div>

      <div className="flex w-full items-center justify-center md:justify-start">
        <Link
          href="/memories/new"
          className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black transition-colors hover:bg-green-600"
        >
          CADASTRAR LEMBRANÇA
        </Link>
      </div>
    </div>
  )
}
