const ButtonChangeStep = ({name,action, colorNone}) => {
  return (
    <button className={`w-[120px] h-[40px] font-bold rounded-xl ${colorNone ? 'bg-transparent text-gray-600 ' : 'bg-[--marine_blue] text-white'}`} onClick={()=>action()}> 
      {name}
    </button>
  )
}
export {ButtonChangeStep}