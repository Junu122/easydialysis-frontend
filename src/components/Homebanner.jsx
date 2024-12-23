import { Section } from 'lucide-react'
import React from 'react'

const Homebanner = () => {
  return (
<section class="bg-bgimage bg-primary bg-cover bg-center bg-no-repeat h-[400px] md:h-[80vh] w-full flex items-center">
  <div class="container mx-auto px-6 md:px-20 text-center md:text-left pt-10">
    <div class="max-w-2xl mx-auto md:mx-0">
      <h1 class="text-4xl md:text-8xl font-bold text-primary opacity-90 leading-tight py-2 shadow-lg border-2 bg-white">
        DIALYSIS MADE EASY
      </h1>
      <h2 class="text-2xl md:text-4xl text-white mt-[10px] font-medium capitalize">
        Booking on your convenient
      </h2>
      <p class="mt-4 text-white text-sm md:text-base">
      Experience seamless dialysis care with our hassle-free booking system.
      </p>
      <button 
        class="mt-6 bg-transparent border-2 border-white text-white text-sm font-semibold px-6 py-2 rounded-lg hover:bg-white hover:text-primary transition-all">
        Book Now
      </button>
    </div>
  </div>
</section>



   
  )
}

export default Homebanner
