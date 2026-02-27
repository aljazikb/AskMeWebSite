import './App.css'
import AnswerCard from './Component/AnswerCard.jsx';
import Card from './Component/Card.jsx';


function App() {

  return (
    <>
    <div  className=" mt-15 justify-items-center min-h-screen flex flex-col">
      <Card />
      <AnswerCard />

        <div className=" mt-auto ">
          <p className="text-center text-gray-500 dark:text-gray-400">Build By <a className="text-blue-600 dark:text-sky-400" href="https://aljazikb.github.io/myPortfolio">Aljazy Banaemah</a></p>
        </div>

  </div>
   </>
  )
}

export default App
