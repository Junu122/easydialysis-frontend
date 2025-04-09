import React from 'react'
import { Wrench, HandPlatter,Heart } from "lucide-react";
const LoadingAnimation = ({loadingProgress}) => {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
          <div className="relative mb-8">
            {/* Pulsing circles */}
            <div className="absolute inset-0 rounded-full bg-pink-500/30 animate-ping"></div>
            <div className="absolute inset-0 rounded-full bg-white/20 animate-pulse"></div>
            
            {/* Heart beat animation */}
            <div className="relative h-28 w-28 flex items-center justify-center">
              <Heart className="h-16 w-16 text-white animate-pulse" strokeWidth={1.5} />
              
              {/* Animated circle around icon */}
              <svg className="absolute inset-0 h-full w-full animate-spin-slow" viewBox="0 0 100 100">
                <circle 
                  cx="50" cy="50" r="45" 
                  stroke="white" 
                  strokeWidth="2"
                  strokeDasharray="10,5"
                  fill="none" 
                />
              </svg>
              
              {/* Small orbiting icons */}
              <div className="absolute h-10 w-10 animate-orbit" style={{ animationDuration: '3s' }}>
              
                <Wrench className="h-6 w-6 text-pink-700 absolute -top-3 -left-3" />
              </div>
              <div className="absolute h-10 w-10 animate-orbit" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>
              <HandPlatter className="h-6 w-6 text-pink-700 absolute -bottom-3 -right-3" />
              </div>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-pink-700 mb-3 tracking-wide">Services</h1>
          <p className="text-white/80 mb-8 text-center max-w-sm">Loading our services..</p>
          
          {/* Progress bar */}
          <div className="w-64 md:w-80 h-2 bg-pink-400 rounded-full overflow-hidden mb-2">
            <div 
              className="h-full bg-pink-800 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${loadingProgress}%` }}  
            ></div>
          </div>
          <p className="text-pink-700 text-sm">{Math.round(loadingProgress)}%</p>
          
          {/* Animated dots */}
          <div className="flex space-x-2 mt-8">
            <div className="w-3 h-3 bg-pink-900 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="w-3 h-3 bg-pink-900 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 bg-pink-900 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
  )
}

export default LoadingAnimation
