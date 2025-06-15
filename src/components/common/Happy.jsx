import Lottie from 'lottie-react'
import happy from '../../assets/Animations/happy.json'

const Happy = () => {
  return (
    <div className="w-full mx-auto min-h-screen flex justify-center items-center bg-red-500">
        <Lottie animationData={happy}/>
    </div>
  )
}

export default Happy