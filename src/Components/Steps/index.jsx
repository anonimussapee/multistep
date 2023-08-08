const Steps = ({number, stepNumber, stepName}) =>{
  return (
    <div className='flex w-[20rem] h-[6rem] smMax:w-0 smMax:h-0 items-center gap-3 active:focus_button'>
      <label htmlFor={number}>
        <input className='hidden'  type='radio' name='steps' id={`step${number}`} />
        <span className='w-[4rem] h-[4rem] rounded-full border-white border-[1px] bg-transparent text-center text-white block '>{number}</span>
      </label>

      <div className='flex flex-col smMax:hidden smMax:w-0 smMax:h-0'>
        <span className=''>{stepNumber}</span>
        <span className='font-bold smMax:hidden'>{stepName}</span>
      </div>
    </div>
  )
}
export {Steps}