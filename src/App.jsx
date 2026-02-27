import AnswerCard from './Component/AnswerCard.jsx';
import Card from './Component/Card.jsx';
import Background from './background.jsx';




function App() {

  return (
    <>
   
  <div className="w-full min-h-screen flex flex-col justify-start items-center bg-black overflow-hidden">
     <div className="absolute inset-0 ">
      <Background 
        colorStops={["#7cff67","#B19EEF","#5227FF"]}
        blend={0.5}
        amplitude={1.0}
        speed={1}/>

     </div>
     <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6">
        <Card />
        <AnswerCard />
      </div>


         <div className="absolute bottom-4 w-full">
        <p className="text-center text-gray-500 dark:text-gray-400">
          Create By <a className="text-blue-600 dark:text-sky-400" href="https://aljazikb.github.io/myPortfolio">Aljazy Banaemah</a>
        </p>
      </div>
    
    
</div>
   </>

  )
}

export default App
