import AnswerCard from './Component/AnswerCard.jsx';
import Card from './Component/Card.jsx';
import Plasma from './Plasma.jsx';




function App() {

  return (
    <>
   
  <div  style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100dvh',  background: '#000000' }}>
     <Plasma 
        color="#f2ff3b"
        speed={0.6}
        direction="forward"
        scale={1.1}
        opacity={0.4}
        mouseInteractive={false}
      />
  </div>

     <div className="relative z-10 flex flex-col items-center justify-center min-h-screen space-y-8">
        <Card />
        <AnswerCard />
      </div>


      <div className="absolute bottom-4 w-full ">
          <p className="text-center text-gray-500 dark:text-gray-400">
            Create By <a className="text-blue-600 dark:text-sky-400" href="https://aljazikb.github.io/myPortfolio">Aljazy Banaemah</a>
          </p>
      </div>

   </>

  )
}

export default App
