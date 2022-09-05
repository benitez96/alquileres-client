import Image from "next/image"

export const Header = () => {

  return (
    <header className='relative h-[400px]'>
      <Image
        src='/england_photo.jpg'
        layout="fill"
        priority
        className='-z-10 object-cover'
      />
      <div className='absolute flex justify-end w-full p-5 gap-3'>
        <button
          className="border-2 border-red-secondary hover:bg-transparent hover:text-red-secondary p-1 bg-red-secondary text-neutral-light rounded-md px-4 font-bold"
        >
          Publicar — $500
        </button>
        <button
          className="border-2 border-neutral-light hover:bg-transparent hover:text-neutral-light p-1 bg-neutral-light text-neutral-primary rounded-md px-4 font-bold"
        >
          Ingresar
        </button>
      </div>
      <div className='flex text-2xl justify-center items-center bg-black bg-opacity-40 h-full'>
        <div className='text-white row-span-2 text-center self-center'>
          <span className='font-semibold'>Alquilar</span><span className='font-extrabold'> .COM</span>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className='absolute -bottom-[5vw]'>
        <path className='fill-neutral-light' d="M1440,21.2101911 L1440,120 L0,120 L0,21.2101911 C120,35.0700637 240,42 360,42 C480,42 600,35.0700637 720,21.2101911 C808.32779,12.416393 874.573633,6.87702029 918.737528,4.59207306 C972.491685,1.8109458 1026.24584,0.420382166 1080,0.420382166 C1200,0.420382166 1320,7.35031846 1440,21.2101911 Z"></path>
      </svg>
    </header>
  )
}
