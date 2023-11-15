import Image from 'next/image'

import logo from "../assets/logo.svg";
import triangle from "../assets/bg-triangle.svg";

import paper from "../assets/icon-paper.svg";
import scissor from "../assets/icon-scissors.svg";
import rock from "../assets/icon-rock.svg";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col justify-center items-center">
      <div className='flex items-center justify-between w-10/12 border-2 border-buttons-bg rounded-lg p-2 absolute top-10'>
        <div>
          <Image src={logo} alt="Logo" width={100} 
          className='pl-3'/>
        </div>
        <div className='bg-white rounded-lg flex flex-col justify-center items-center py-2 px-4'>
          <span className='font-bold text-xs'>SCORE</span>
          <span className='font-bold text-4xl'>12</span>
        </div>
      </div>

      <div className='flex flex-col items-center mt-40'>
        <Image src={triangle} alt="Triangle" width={250} className='absolute'/>
        <button 
        className='rounded-full shadow-[inset_0_5px_#C1C1C] bg-white border-[14px] border-blue-paper w-[120px] h-[120px] flex justify-center items-center relative -top-10 -left-24'>
        <Image src={paper} alt="Paper" width={60} height={60} className='p-2'/>
        </button>
        <button 
        className='rounded-full shadow-[inset_0_5px_#C1C1C1] bg-white border-[14px] border-yellow-scissor w-[120px] h-[120px] flex justify-center items-center relative -top-40 left-24'>
        <Image src={scissor} alt="Scissor" />
        </button>
        <button 
        className='rounded-full shadow-[inset_0_5px_#C1C1C1] bg-white border-[14px] border-red-rock w-[120px] h-[120px] flex justify-center items-center relative -top-32'>
        <Image src={rock} alt="Rock" />
        </button>

      </div>
      <div>
        <button className='border-2 border-buttons-bg rounded-lg px-8 py-1 text-white'> RULES </button>
      </div>
    </main>
  )
}
