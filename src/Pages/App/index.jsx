import './App.css'
import bgSlidebarMb from '../../assets/bg-sidebar-mobile.svg'
import { Steps } from '../../Components/Steps'

const App = () => {

  return (
    <section className='w-full h-[100vh] text-[1.8rem]'>
      <div className='main--all-container'>
        <div className='main--slidebar-container relative'>
          <img src={bgSlidebarMb} alt="fondo white" className='min-w-[320px] w-[100vw] max-w-[700px]'/>
          <div className='buttons-conatiner flex gap-10  smMax:w-[310px] '>
            <Steps number={1} stepNumber={'Step 1'} stepName={'YOUR INFO'}/>
          </div>
        </div>
      </div>
    
    </section>
  )
}

export {App}
