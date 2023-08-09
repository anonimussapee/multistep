import './App.css'
import bgSlidebarMb from '../../assets/bg-sidebar-mobile.svg'
import { Steps } from '../../Components/Steps'
import { useSteps } from '../../Components/useSteps'

const App = () => {

  const {step, onStep1, onStep2, onStep3, onStep4} = useSteps()
  return (
    <section className='w-full h-[100vh] text-[1.8rem]'>
      <div className='main--all-container'>
        <div className='main--slidebar-container relative'>
          <img src={bgSlidebarMb} alt="fondo white" className='min-w-[320px] w-[100vw] max-w-[700px] '/>
          <div className='buttons-container flex justify-evenly gap-10  smMax:w-[300px] smMax:h-[65px] border-[2px] border-black'>
            
            <Steps step={step} btnAction={onStep1} number={1} stepNumber={'Step 1'} stepName={'YOUR INFO'}/>
            <Steps step={step} btnAction={onStep2} number={2} stepNumber={'Step 2'} stepName={'SELECT PLAN'}/>
            <Steps step={step} btnAction={onStep3} number={3} stepNumber={'Step 3'} stepName={'ADD ONS'}/>
            <Steps step={step} btnAction={onStep4} number={4} stepNumber={'Step 4'} stepName={'SUMMARY'}/>

          </div>
        </div>
      </div>
    
    </section>
  )
}

export {App}
