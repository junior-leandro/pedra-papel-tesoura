import Image from 'next/image'

import logo from "../assets/logo.svg";
import triangle from "../assets/bg-triangle.svg";

import paper from "../assets/icon-paper.svg";
import scissor from "../assets/icon-scissors.svg";
import rock from "../assets/icon-rock.svg";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col justify-center items-center">
      <div className='flex items-center justify-between w-10/12 border-2 border-buttons-bg/50 rounded-lg p-2 absolute top-10 max-w-[1000px]'>
        <div>
          <Image src={logo} alt="Logo" width={120} 
          className='pl-3 lg:p-4'/>
        </div>
        <div className='bg-buttons-bg rounded-lg flex flex-col justify-center items-center py-2 px-4'>
          <span className='font-bold text-xs'>SCORE</span>
          <span className='font-bold text-4xl'>12</span>
        </div>
      </div>

      <div className='flex flex-col items-center mt-40 lg:mt-96'>
        <Image src={triangle} alt="Triangle" width={250} className='absolute z-0'/>
        <button 
        className='rounded-full shadow-[inset_0_5px_#C1C1C1] bg-buttons-bg border-[14px] border-blue-paper w-[120px] h-[120px] lg:w-[180px] lg:h-[180px] flex justify-center items-center relative -top-10 lg:-top-20 -left-24 lg:-left-32'>
        <Image src={paper} alt="Paper" className='p-2 w-16 lg:w-24'/>
        </button>
        <button 
        className='rounded-full shadow-[inset_0_5px_#C1C1C1] bg-buttons-bg border-[14px] border-yellow-scissor w-[120px] h-[120px] lg:w-[180px] lg:h-[180px] flex justify-center items-center relative -top-40 left-24 lg:-top-64 lg:left-32'>
        <Image src={scissor} alt="Scissor" className='p-2 w-16 lg:w-24'/>
        </button>
        <button 
        className='rounded-full shadow-[inset_0_5px_#C1C1C1] bg-buttons-bg border-[14px] lg:border-[20px] border-red-rock w-[120px] h-[120px] lg:w-[180px] lg:h-[180px] flex justify-center items-center relative -top-32 lg:-top-60'>
        <Image src={rock} alt="Rock" className='p-2 w-16 lg:w-24'/>
        </button>

      </div>
      <div className='lg:-top-56 relative w-11/12 max-w-[1440px] flex justify-center lg:justify-end'>
        <button className='border-2 border-buttons-bg/50 rounded-lg px-8 py-1 text-white'> RULES </button>
      </div>
    </main>
  )
}
