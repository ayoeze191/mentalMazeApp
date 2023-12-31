import { challengergames, challengergametype } from '../../routes/Home/GamesData'


const ChallengerGames = () => {
  return (
    <div className='relative text-white px-[20px] mt-[96px] md:mt-[104px] md:pt-[96px] md:border-t-solid border-t-2 border-l-2 border-1 border-blue-50'>
        <h1 className='font-droid text-[16px] md:text-[32px]'>NEWLY UPLOADED GAME</h1>
        <div className="grid  grid-cols-2 md:grid-cols-3 gap-x-[15px] gap-y-[15px] md:gap-x-[45px] md:gap-y-[44px] py-12 w-full px-0 ">
        {
        challengergames.map((gam, index) => <Game {...gam} key={index} />
        )}
        </div>
    </div>
  )
}

export default ChallengerGames

const Game = ({vetted, image, title}:challengergametype) => {
  return (
    <div className="w-full relative">
      <img src={image} className='w-full bg-center' alt="" />
      <div className='absolute bottom-0 bg-black backdrop-blur-[2.2068965435028076px] h-[68px] w-full opacity-80 flex justify-between px-[17.65px] items-center'>
      <p className='font-droid text-[20px] leading-[23.61px]'>{title}</p>
      <button className='font-normal text-[14px] font-droid leading-[16.53px] bg-black px-[8px] py-[12px] rounded-[6px] border border-solid border-[#0D0D0D] opacity-80 backdrop-blur-[2.310344934463501px] w-[86px]  '>
        {vetted?"vetted":"VET NOW"}
      </button>
      </div>
    </div>
  )
}