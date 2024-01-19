<script setup lang="ts">
import { format, differenceInDays, differenceInHours,
  differenceInMinutes, differenceInSeconds
} from 'date-fns'
import imageCorona from '../assets/images/corona.png'
import mariposaImg from '../assets/images/mariposa.png';
import audioTheNight from '../assets/audio/the_night.mp3';
import marcoLeft from '../assets/images/left-marco.png';
import marcoRight from '../assets/images/right-marco.png';
import cornaDorado from '../assets/images/corona-3.png';
import vestimenta from '../assets/images/vestimenta1.png';
import destellos from '../assets/images/destellos.png';
import espalda from '../assets/images/quince-espalda.jpg'
import quincernieraDama from '../assets/images/quinceaniera-dama.png'
import quinceEspalda from '../assets/images/quince-espalda-grande.png'

import rosasLeft from '../assets/images/rosas-left.png';
import rosasRight from '../assets/images/rosas-rigth.png';
import rosasCenter from '../assets/images/rosas-center.png';

import { onMounted, onUnmounted, ref } from 'vue';
const OFFSET = 5;
// const timeZone = 'America/United_States';
const dateEvent = new Date('2024-02-03T18:00:00.000Z');
// const dateEvent = utcToZonedTime(dateEventUTC, timeZone);

const countdown = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

const updateCountDown = () => {
  const now = new Date();
  now.setHours(now.getHours() - OFFSET);
  countdown.value.days =  differenceInDays(dateEvent, now);
  countdown.value.hours =  differenceInHours(dateEvent, now) % 24;
  countdown.value.minutes =  differenceInMinutes(dateEvent, now) % 60;
  countdown.value.seconds =  differenceInSeconds(dateEvent, now) % 60;
};

let intervalId: number | null = null;

onMounted(() => {
  updateCountDown();
  intervalId = setInterval(updateCountDown, 1000) as unknown as number;
});

onUnmounted(() => {
  if (intervalId !== null) {
    clearInterval(intervalId);
  }
});




</script>

<template>
  <main class="min-h-screen overflow-hidden">
    <section class="min-h-screen max-h-screen flex flex-col justify-center items-center py-10 relative">
      <!-- <img :src="rosasLeft" alt=""
        class="absolute top-0 -left-8 w-40 transform rotate-[40deg]"
      />

      <img :src="rosasRight" alt=""
        class="absolute top-0 -right-8 w-40 transform rotate-[-40deg]"
      /> -->

      <img :src="rosasCenter" alt=""
        class="absolute -top-10  w-[100%] transform rotate-[0deg] animate__animated animate__backInDown"
      />

      <div
        class="flex flex-col justify-center items-center space-y-4"
      >
        <img :src="imageCorona" alt="" class="w-20">
      <div>
        <div class="flex flex-col justify-center items-center h-full p-3">
        <span class="font-lora text-4xl font-semibold text-blue-electrico text-center animate__animated animate__bounceIn">
          ¡Queremos<br>celebrarlo contigo!
        </span>
        </div>
        <div class="space-x-2 flex justify-around animate__animated animate__bounceIn">
          <!-- Days -->
          <div class="inline-block text-center">
            <div class="text-3xl font-bold text-blue-electrico font-lora">
              {{ countdown.days }}
            </div>
            <div class="text-xs font-medium font-lora text-gray-500 uppercase">Días</div>
          </div>
          <!-- Hours -->
          <div class="inline-block text-center">
            <div class="text-3xl font-bold text-blue-electrico font-lora">
              {{ countdown.hours }}
            </div>
            <div class="text-xs font-medium font-lora text-gray-500 uppercase">Horas</div>
          </div>
          <!-- Minutes -->
          <div class="inline-block text-center">
            <div class="text-3xl font-bold text-blue-electrico font-lora">
              {{ countdown.minutes }}
            </div>
            <div class="text-xs font-medium font-lora text-gray-500 uppercase">Minutos</div>
          </div>
          <!-- Seconds -->
          <div class="inline-block text-center">
            <div class="text-3xl font-bold text-blue-electrico font-lora">
              {{ countdown.seconds }}
            </div>
            <div class="text-xs font-medium font-lora text-gray-500 uppercase">Segundos</div>
          </div>
        </div>
      </div>
      </div>
    </section>
    <section class="max-h-screen relative border-2 border-transparent">
      <img :src="marcoLeft" alt=""
        class="absolute top-0 left-1 w-2/5"
      />

      <img :src="marcoRight" alt=""
        class="absolute top-0 right-1 w-2/5"
      />

      <img :src="mariposaImg" alt=""
        class="absolute top-28 right-12 w-1/4 transform -rotate-[30deg]"
      />

      <div class="flex justify-center items-center mt-36">
        <div class="text-center">
        <h3 class="font-lora text-6xl font-light text-[#D3B66E]">Mis</h3>
        <h3 class="font-lora text-6xl font-light text-[#D3B66E]">15</h3>
        <h3 class="font-lora text-6xl font-light text-[#D3B66E]">Años</h3>
      </div>
      </div>

      <img :src="rosasLeft" alt=""
        class="absolute top-80 -left-24 w-3/4 transform -rotate-[40deg]"
      />

      <img :src="rosasLeft" alt=""
        class="absolute top-64 -right-24 w-3/4 transform rotate-[120deg]"
      />

      <img :src="destellos" alt=""
        class="absolute top-[12rem] -left-28 w-44 transform -rotate-[0deg]"
      />

      <div class="flex justify-center mt-24">
        <img :src="cornaDorado" alt=""
        class="w-2/4"
      />
      </div>
     
    </section>

    <section class="min-h-screen max-h-screen overflow-hidden relative">
      <div class="mt-2">
        <h3 class="font-humble text-5xl text-blue-electrico text-center">Ashley Cristel</h3>
        <p class="font-lora text-center font-semibold text-gray-700 text-sm mt-10">
        Al caer la noche en el cielo millones de estrellas <br>
        podrás contar...cada una de ellas será un deseo que<br>
        en mi corazón voy a guardar... dicen que la vida <br>
        es más bella si podemos cumplir lo que soñamos y <br>mi sueño es
        que compartas conmigo la noche de<br>mis 15 AÑOS.</p>

        
      </div>
      <div class="flex justify-center items-center mt-10 z-10 relative">
        <div class="h-80 w-80 rounded-full shadow-md border-[0.7rem] bg-gray-500 border-blue-electrico">
          <img :src="espalda" alt="" class="w-full h-full rounded-full"/>
        </div>
        <img :src="destellos" alt=""
          class="absolute -top-10 left-0 w-44 transform rotate-[0deg] -z-10"
        />
        <img :src="rosasLeft" alt=""
          class="absolute -bottom-10 -left-20 w-3/4 transform rotate-[-40deg] z-10"
        />
        <img :src="destellos" alt=""
          class="absolute bottom-0 right-0 w-44 transform rotate-[60deg] -z-10"
        />
      </div>


      <div
        class="flex justify-center items-center mt-7"
      >
      <p class="font-lora text-center text-sm font-semibold text-gray-700">
          Quiero invitarlos a compartir la magia de <br>
          una noche que será única y<br>
          sin duda inolvidable.
        </p>
      </div>
    </section>

    <section
      class="min-h-[80vh] max-h-screen relative "
    >
    <img :src="mariposaImg" alt=""
      class="absolute top-0 -left-5 w-20 transform rotate-[30deg]"
    />
    <img :src="mariposaImg" alt=""
      class="absolute top-14 left-8 w-20 transform rotate-[-20deg]"
    />
    <div class="absolute top-5 w-[80%] right-0">
       <div class="relative flex flex-col justify-center items-center ">
        <img :src="cornaDorado"
          alt=""
          class="w-32"
       />
        <h3 class="font-humble text-2xl text-blue-electrico text-center">
        La familia <br> Carita Mamani
      </h3>
      <p class="px-5 text-center font-lora font-semibold text-[13px] text-gray-700">
        Invitamos a ustedes a compartir la alegría de la celebración de los 15 años de nuestra hija:<br> <span class="text-lg text-gray-700 font-semibold">Ashley Cristel.</span>
      </p>
       </div>
     </div>
     <div
      class="absolute top-60 w-[80%] -right-0"
     >
      <div class="relative flex flex-col justify-center items-center">
        <h3
        class="font-humble text-4xl text-blue-electrico text-center mt-10"
      >
        Padrinos
      </h3>
      <span class="font-lora font-semibold text-gray-700 text-sm">Errol Pacheco Espinoza</span>
      <span class="font-lora font-semibold text-gray-700 text-sm">Patricia De la Cruz Quispe</span>
      </div>
     </div>

     <!-- <img :src="rosasCenter" alt=""
      class="absolute bottom-20 -left-24 w-3/4 transform rotate-[-90deg]"
    /> -->

    <img :src="rosasLeft" alt=""
      class="absolute bottom-32 -left-20 w-[20rem] transform rotate-[-60deg] max-w-none"
    />

    <!-- <img :src="rosasRight" alt=""
      class="absolute bottom-7 -left-32 w-3/4 transform rotate-[60deg]"
    /> -->

    <img :src="destellos" alt=""
      class="absolute bottom-20 -right-14 w-56 transform rotate-[20deg]"
    />

    </section>


    <section
      class="min-h-[89vh] max-h-screen relative"
    >

    <img :src="destellos" alt=""
      class="absolute -top-20 -left-44 w-56 transform rotate-[20deg]"
    />

    <img :src="destellos" alt=""
      class="absolute top-14 -right-40 w-56 transform rotate-[20deg]"
    />
    <img :src="mariposaImg" alt=""
      class="absolute -top-10 right-8 w-20 transform rotate-[-30deg]"
    />

    <img :src="destellos" alt=""
      class="absolute bottom-40 -right-14 w-44 transform rotate-[30deg]"
    />

    <img :src="mariposaImg" alt=""
      class="absolute bottom-[30rem] left-2 w-20 transform rotate-[30deg]"
    />

      <div
        class="flex flex-col justify-center items-center  w-[40%] mx-auto"
      >
        <h3
          class="font-humble text-4xl text-blue-electrico text-center mt-10"
        >
          Fecha
        </h3>
        <span class="font-lora text-lg text-center font-semibold text-gray-700">
        Sab. 03 de Febrero
      </span>
      </div>
      <div class="flex flex-col px-10 relative z-10">
        <h3
          class="font-humble text-4xl text-blue-electrico text-center mt-10 mb-4"
        >
          Recepción
        </h3>
        <span class="font-lora text-center font-semibold text-gray-700">
          Salón de Eventos "Luna de Abril"
        </span>
        <span class="font-lora text-center font-semibold text-gray-700">
          C. Colón 193, José Luis Bustamante y Rivero, Arequipa
        </span>
        <p class="font-lora text-center font-semibold text-gray-700">
          <span
            class="font-semibold"
          >
            Hora Recepción:
          </span> 6:00 pm
        </p>
        <div class="flex justify-center">
          <a href="https://maps.app.goo.gl/y3EqNnrXcq8cntwu5"
          target="_blank"
          class="px-2 py-2 border-2 bg-blue-electrico border-blue-electrico text-white font-medium rounded-md font-lora mt-4 hover:bg-white hover:text-blue-electrico transition-all duration-300"
        >
          <font-awesome-icon icon="location-dot" class="text-sm" />
           <span
            class="ml-2"
           >Ver Ubicación</span>
        </a>
        </div>
      </div>
      <div
        class="flex flex-col justify-center items-center mt-16 w-[40%] mx-auto"
      >
        <h3
          class="font-humble text-4xl text-blue-electrico text-center mt-10"
        >
          Vestimenta
        </h3>
        <span class="font-lora text-center text-gray-700 text-base font-semibold">
          Elegante
        </span>
        <img :src="vestimenta" alt="" class="w-20 mx-auto"/>

      </div>
      <img :src="rosasLeft" alt=""
        class="absolute bottom-20 -left-24 w-3/4 transform rotate-[-40deg]"
      />
    </section>
    <!-- <section
      class="min-h-screen overflow-hidden border-2 border-orange-400"
    >
      <div
        class="flex flex-col justify-center items-center mt-16 w-[40%] mx-auto"
      >
        <h3
          class="font-humble text-4xl text-blue-electrico text-center mt-10"
        >
          Mesa de Regalos
        </h3>
        <span
          class="font-lora text-center"
        >
          Tu presencia es el mejor regalo, pero si deseas darme un obsequio:
        </span>
      </div>
    </section> -->

    <section
      class="min-h-[20rem] relative"
    >
      <!-- <div class="h-80 w-[75%] border-[0.6rem] border-blue-electrico mx-auto mt-7 relative"> 
        <img :src="quinceEspalda" alt="" class="w-full h-full"/>
      
        <img :src="rosasLeft" alt=""
          class="absolute top-0 -left-32 w-[20rem] transform rotate-[-40deg] max-w-none"
        />
      </div> -->
      <div
        class="flex flex-col justify-center items-center w-[40%] mx-auto mt-10"
      >
        <span class="font-lora text-center text-gray-700 font-semibold">
          Por favor confirmar asistencia
        </span>
      </div>

      <div
        class="flex flex-col justify-center items-center mt-5 w-[40%] mx-auto"
      >
        <h3
          class="font-humble text-2xl text-blue-electrico text-center mt-10"
        >
          Martha Mamamni
        </h3>
        <a href="https://wa.link/a2vgto"
        class="px-2 py-2 bg-blue-electrico text-white rounded-md font-lora mt-4"
        >
          <font-awesome-icon icon="phone" class="text-sm" />
          <span
            class="ml-2"
          >
            931850004
          </span>
        </a>
      </div>

      <div
        class="flex flex-col justify-center items-center pb-32 w-[40%] mx-auto"
      >
        <span
          class="font-lora text-center text-gray-700 font-semibold text-sm mt-10"
        >
          Ultima fecha de confirmación: <br> 27 de Enero
        </span>
      </div>

      <img :src="mariposaImg" alt=""
        class="absolute top-5 left-4 w-20 transform rotate-[30deg]"
      />

      <img :src="destellos" alt=""
        class="absolute -top-10 -right-20 w-40 transform rotate-[0deg]"
      />

      <img :src="destellos" alt=""
        class="absolute bottom-32 -left-20 w-40 transform rotate-[0deg]"
      />

      <img :src="mariposaImg" alt=""
        class="absolute bottom-56 right-5 w-20 transform rotate-[-30deg]"
      />

      <!-- <img :src="destellos" alt=""
        class="absolute bottom-0 -left-20 w-56 transform rotate-[0deg]"
      /> -->
      <!-- <div
        class="flex flex-col justify-center items-center mt-5 w-[50%] mx-auto "
      >
        <h3
          class="font-humble text-4xl text-blue-electrico text-center mt-10"
        >
          Buzón de deseos
        </h3>
        <span
          class="font-lora text-center"
        >
          Dejale tus mejores deseos a Ashley
        </span>
      </div> -->

      <!-- <div
        class="flex flex-col justify-center items-center mt-5 w-[50%] mx-auto"
      >
        <h3
          class="font-humble text-4xl text-blue-electrico text-center mt-10"
        >
          Sugerencia de canciones
        </h3>
        <span
          class="font-lora text-center"
        >
          Comparte las canciones que no pueden faltar en la fiesta
        </span>
      </div> -->

      <!-- <div>
        
      </div> -->

      <img :src="rosasCenter" alt=""
        class="absolute -bottom-10 right-0 w-full transform rotate-[-180deg]"
      />
    </section>
    <!-- <section
      class="min-h-screen relative border-2 border-orange-700"
    >
      <h3
          class="font-humble text-5xl text-blue-electrico text-center mt-10"
        >
          ¡No faltes!
        </h3>
      <div
        class="flex flex-col justify-center items-center mt-5 w-[40%] mx-auto"
      >
      <i class="fa-solid fa-ticket"></i>
        <span>
          Revisar pases
        </span>
      </div>

      <img :src="rosasLeft" alt=""
        class="absolute -bottom-32 -left-10 w-3/4 transform rotate-[30deg]"
      />

      <img :src="rosasRight" alt=""
        class="absolute -bottom-32 -right-10 w-3/4 transform rotate-[-30deg]"
      />

    </section> -->
    <div class="hidden">
      <audio controls autoplay loop>
        <source :src="audioTheNight" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
    </div>
    <!-- <TheWelcome /> -->
  </main>
</template>
