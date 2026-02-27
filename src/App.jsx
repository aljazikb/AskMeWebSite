import AnswerCard from './Component/AnswerCard.jsx';
import Card from './Component/Card.jsx';
import Background from './background.jsx';




function App() {

  return (
    <>
   
<div className="w-full min-h-screen relative bg-black overflow-hidden ">

    <Background className="absolute inset-0 -z-10"
      colorStops={["#7cff67","#B19EEF","#5227FF"]}
      blend={0.5}
      amplitude={1.0}
      speed={1}
    />

  
    <div className="relative flex flex-col items-center justify-center min-h-screen space-y-6 py-20">
      <Card />
      <AnswerCard />
    </div>

   
    <div className="w-full pb-4">
      <p className="text-center text-gray-500 dark:text-gray-400">
        Create By{" "}
        <a className="text-blue-600 dark:text-sky-400" href="https://aljazikb.github.io/myPortfolio">
          Aljazy Banaemah
        </a>
      </p>
    </div>

</div>
   </>

  )
}

export default App
