import React from 'react'
import crypto from "../assets/projectpics/crypto.png";
import crown from "../assets/projectpics/crowncloth.png";
import goals from "../assets/projectpics/goalsetter.png";
import chat from "../assets/projectpics/chatroom.png";

const Portfolio = () => {
       
    const portfolios = [
          {
            id: 1,
            name: 'Goal Set&Execute CRUD App',
            src: goals,
            demo:'https://goalsetandexecute.netlify.app/',
            code:'https://github.com/sakshamgitrepo/goal-setnexecute-frontend'

          },
          {
            id: 2,
            name: 'E Commerce Clothing',
            src: crown,
            demo:'https://sk-crown-clothing.netlify.app/',
            code:'https://github.com/sakshamgitrepo/E-Commerce-Website'

          },
          {
            id: 3,
            name: 'CryptoCoins Dashboard',
             src: crypto,
             demo:'https://cryptocoins-dashboard.netlify.app/',
             code:'https://github.com/sakshamgitrepo/cryptocoins-dashboard-app'

          },
          // {
          //   id: 4,
          //   name:'Recipe App',
          //   src: reactWeather,
          //   demo:'',
          //   code:''
            
          // },
          {
            id: 5,
            name:'Chatroom App',
            src: chat,
            demo:'https://chatroom-arena.netlify.app/',
            code:'https://github.com/sakshamgitrepo/Realtime-chat-app'
          },
        
        ];
      
  return (
    <div
      name="projects"
      className=" portfolio w-full text-white md:h-screen "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex  flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-4">Check out some of my work right here </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id,name,src,code,demo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <h4 className='p-2 font-bold'>{name}</h4>
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demo} target='_blank' rel="noreferrer"><button className="w-1/2 px-6 py-2 m-2 duration-200 hover:scale-105">
                  Demo
                </button></a>
               <a href={code} target='_blank' rel="noreferrer"><button className="w-1/2 px-6 py-2 m-2 duration-200 hover:scale-105">
                  Code
                </button></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio