import React from 'react'
import Window from '../../applications/Window'

const Welcome = ({ onClose, onActive, coordinates, visible, title, content }) => {
  return (
    <>
        <Window title="Welcome"
                onClose={onClose} 
                icon=""
                onActive={onActive} 
                coordinates={coordinates}
                defaultSize={{width: 500, height: 300}}>
            <div className="p-2"> 
              <h1 className="text-4xl font-serif">Welcome to <span className="font-extrabold font-sans">Windows</span><span className="text-white font-sans">12</span></h1>
              <div className="flex w-full gap-2">
                <div className="bg-[#feffdf] w-11/12 h-52">
                  <img className="w-full h-full" src="/src/assets/tip/tip.png"></img>
                </div>
                <div className="flex flex-col w-1/2">
                    <div className="w-full border mb-1">
                        <div className="text-center border border-white border-b-black border-b-2 border-r-black border-r-2 hover:border-black hover:border-b-white hover:border-r-white hover:cursor-pointer p-1"><div className="border border-gray-300 hover:border-black hover:border-dotted w-auto">What's <span className="underline">N</span>ew?</div></div>
                    </div>
                    <div className="w-full border mb-8">
                        <div className="text-center border border-white border-b-black border-b-2 border-r-black border-r-2 hover:border-black hover:border-b-white hover:border-r-white hover:cursor-pointer p-1"><div className="border border-gray-300 hover:border-black hover:border-dotted w-auto"><span className="underline">O</span>nline Registration</div></div>
                    </div>
                    <div className="border-t-2 border-t-gray-200 pt-5">
                      <div className="w-full border ">
                          <div className="text-center border border-white border-b-black border-b-2 border-r-black border-r-2 hover:border-black hover:border-b-white hover:border-r-white hover:cursor-pointer p-1"><div className="border border-gray-300 hover:border-black hover:border-dotted w-auto">Close</div></div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
        </Window>
    </>
  )
}

export default Welcome
