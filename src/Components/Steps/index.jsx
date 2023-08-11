

const Steps = ({step, number, stepNumber, stepName, btnAction}) =>{

  let stepActive = step[`step${number}`] 
  return (
    <div className='flex flex-row sm:w-[20rem] smMax:w-auto h-[6rem] items-center gap-3  relative' onClick={()=>{
      btnAction()
    }}>        
      <button className={`w-[4rem] h-[4rem] rounded-full  text-center font-semibold  ${stepActive ? 'focus_button text-[#02295a]' : 'bg-transparent text-white border-white  border-[1px] ' }`} >{number}</button>
      <div className='flex flex-col smMax:hidden smMax:w-0 smMax:h-0'>
        <span className=''>{stepNumber}</span>
        <span className='font-bold smMax:hidden'>{stepName}</span>
      </div>
    </div>
  )
}
export {Steps}