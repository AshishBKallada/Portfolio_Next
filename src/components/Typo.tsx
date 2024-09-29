'use client';

import React, { useEffect, useState } from 'react';
import { Card, Carousel } from './ui/apple-cards-carousel';
import { CardDemo } from './ui/CardDemo';
import { TypewriterEffectDemo } from './ui/Typewriter';
import { SparklesPreview } from './ui/sparkles-preview';
import { ThreeDCardDemo } from './ui/3dCardDemo';
import Header from './ui/Header';
import { BackgroundBeamsWithCollision } from './ui/beam-background';
import MyComponent from './Test/Fly';


function Typo() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const items2 = [
    <Card
      key={1}
      card={{
        src: "/vr.webp",
        title: "Relaxing at the Beach",
        category: "Travel",
        content: (
          <p>
            Enjoy the serene view of a beautiful beach with golden sands and
            crystal clear waters. Perfect for a summer getaway!
          </p>
        ),
      }}
      index={0}
      layout
    />,
    <Card
      key={2}
      card={{
        src: "/apple.webp",
        title: "Mountain Adventure",
        category: "Adventure",
        content: (
          <p>
            Challenge yourself with an adventurous hike up the Rocky Mountains,
            where the views will leave you breathless.
          </p>
        ),
      }}
      index={1}
      layout
    />,
    <Card
      key={3}
      card={{
        src: "/applevision.webp",
        title: "City Lights",
        category: "Urban Exploration",
        content: (
          <p>
            Explore the vibrant city life, from towering skyscrapers to bustling
            streets filled with culture and energy.
          </p>
        ),
      }}
      index={2}
      layout
    />,
    <Card
      key={4}
      card={{
        src: "/applemap.webp",
        title: "Forest Escape",
        category: "Nature",
        content: (
          <p>
            Immerse yourself in the tranquility of a dense forest, surrounded by
            lush greenery and the sounds of nature.
          </p>
        ),
      }}
      index={3}
      layout
    />,
    <Card
      key={5}
      card={{
        src: "/photography.webp",
        title: "Desert Safari",
        category: "Adventure",
        content: (
          <p>
            Take an exciting desert safari, exploring the vast dunes and
            experiencing the beauty of a desert sunset.
          </p>
        ),
      }}
      index={4}
      layout
    />,
  ];

  return (
    <div>
      <MyComponent />
      <Header />
      <div className="flex flex-col md:flex-row items-center justify-center h-auto md:h-[500px] mx-6 md:mx-24 relative">
  <div className="relative">
    <img className="h-[500px] w-[500px] object-cover" src="/profile.png" alt="" />
    {isScrolled && (
      <div className="absolute inset-0 bg-black opacity-50" />
    )}
    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent" />
  </div>
  <p className={`zolina-bold text-lg md:text-3xl max-w-full md:max-w-[760px] mx-auto my-6 md:my-auto text-center ${isScrolled ? "text-gray-500" : "bg-gradient-to-b from-white to-transparent bg-clip-text text-transparent"}`}>
    "Driven by a relentless passion for coding, I craft dynamic, user-centric web experiences that merge innovation with precision. With every line of code, I aim to build impactful digital solutions that inspire and elevate the user journey."
  </p>
</div>


      <CardDemo />

      <Carousel items={items2} />


      <SparklesPreview />
      <div className='mx-auto flex flex-col gap-6'>
      

        <div className=' flex flex-col gap-10'>
          <div className=" flex flex-col max-w-[1200px] mx-auto p-1 mt-[50px] rounded-xl">
            <div className=" flex flex-col md:flex-row items-center md:items-start gap-10">
              <div className='image bg-black -mt-36'>
                <ThreeDCardDemo image={'/bassheadsthumbnail.png'} />
              </div>

              <div className=" w-full grid md:w-2/3 px-4 text-white gap-4">
                <h3 className="text-2xl font-semibold ">BASSHEADS &nbsp;&nbsp;(E-COMMERCE PLATFORM)</h3>
                <p className="text-md max-w-[660px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas animi quos
                  explicabo consectetur, doloribus esse necessitatibus, voluptatum
                  incidunt exercitationem nisi assumenda deserunt voluptas debitis amet.
                </p>
                <span className='border-2 border-white p-2 w-[100px]'>LIVE DEMO</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col max-w-[1200px] mx-auto p-1 rounded-xl">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
              <div className="w-full grid md:w-2/3 px-4 text-white gap-4">
                <h3 className="text-2xl font-semibold mb-2">GRAMHIVE &nbsp;&nbsp;(SOCIAL MEDIA PLATFORM)</h3>
                <p className="text-md max-w-[660px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas animi quos
                  explicabo consectetur, doloribus esse necessitatibus, voluptatum
                  incidunt exercitationem nisi assumenda deserunt voluptas debitis amet.
                </p>
                <span className='border-2 border-white p-2 w-[100px]'>LIVE DEMO</span>

              </div>
              <div className='image bg-black -mt-36'>

                <ThreeDCardDemo image={'/gramhivethumb.png'} />

              </div>
            </div>
          </div>

          <div className="flex flex-col max-w-[1200px] mx-auto p-1 rounded-xl">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
              <div className='image bg-black -mt-36'>
                <ThreeDCardDemo image={'/weatherifythumbnail.jpg'} />
              </div>

              <div className="w-full grid md:w-2/3 px-4 text-white gap-4">
                <h3 className="text-2xl font-semibold mb-2">WEATHERIFY </h3>
                <p className="text-md max-w-[660px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas animi quos
                  explicabo consectetur, doloribus esse necessitatibus, voluptatum
                  incidunt exercitationem nisi assumenda deserunt voluptas debitis amet.
                </p>
                <span className='border-2 border-white p-2 w-[100px]'>LIVE DEMO</span>

              </div>
            </div>
          </div>
        </div>

        </div>

        <BackgroundBeamsWithCollision>

      <TypewriterEffectDemo />
      </BackgroundBeamsWithCollision>


    </div>

  );
}

export default Typo;
