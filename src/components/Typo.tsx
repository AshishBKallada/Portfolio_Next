'use client';

import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import React, { useEffect } from 'react';
import SplitType from 'split-type';
import { FloatingDock } from './ui/FloatingDock';
import { IconHome, IconUser, IconSettings } from '@tabler/icons-react';
import { Card, Carousel } from './ui/apple-cards-carousel';
import { CardDemo } from './ui/CardDemo';
import { TypewriterEffectDemo } from './ui/Typewriter';
import { SparklesPreview } from './ui/sparkles-preview';
import { BackgroundBeamsWithCollision } from './ui/beam-background';

gsap.registerPlugin(ScrollTrigger);

function Typo() {
  useEffect(() => {
    const initSmoothScroll = () => {
      const lenis = new Lenis({
        lerp: 0.2,
        smooth: true,
      });

      lenis.on('scroll', () => ScrollTrigger.update());

      const raf = (time: number) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
    };

    const animateText = () => {
      const text = new SplitType('.target', { types: 'words, chars' });
      const chars = text.chars;

      if (chars) {
        chars.forEach((char) => {
          gsap.set(char.parentNode, { perspective: 500 });
        });

        gsap.fromTo(
          chars,
          {
            willChange: 'opacity, transform',
            opacity: 0.2,
            z: -800,
          },
          {
            ease: 'back.out(1.2)',
            opacity: 1,
            z: 0,
            stagger: 0.04,
            scrollTrigger: {
              trigger: '.target',
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      }
    };

    const init = () => {
      initSmoothScroll();
      animateText();
    };

    init();

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      gsap.killTweensOf('body');
    };
  }, []);

  const items = [
    { title: 'Home', icon: <IconHome />, href: '/' },
    { title: 'Profile', icon: <IconUser />, href: '/profile' },
    { title: 'Settings', icon: <IconSettings />, href: '/settings' },
    { title: 'Home', icon: <IconHome />, href: '/' },
    { title: 'Profile', icon: <IconUser />, href: '/profile' },
    { title: 'Settings', icon: <IconSettings />, href: '/settings' },
  ];
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
      <FloatingDock
        items={items}
        desktopClassName="sticky top-2 left-0 right-0 z-50 mx-auto w-[350px]"
        mobileClassName="sticky top-0 left-0 right-0 z-50 mx-auto"
      />
      <div className="flex flex-col md:flex-row items-center justify-center h-auto md:h-[500px] mx-6 md:mx-24 border-b-2 border-b-gray-500 relative">
      <BackgroundBeamsWithCollision>


        <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeVCq899cabVhILiez7X_1lOzqfxuSnZenVw&s')] bg-no-repeat bg-cover h-64 w-full md:h-96 md:w-96 my-6 md:my-auto"></div>
       <p className="italic text-lg md:text-3xl max-w-full md:max-w-[660px] mx-auto my-6 md:my-auto text-center">
  " Driven by a relentless passion for coding, I craft dynamic, user-centric web experiences that merge innovation with precision. With every line of code, I aim to build impactful digital solutions that inspire and elevate the user journey "
</p>

        </BackgroundBeamsWithCollision>

      </div>


      <div className="flex flex-col w-screen relative px-8 py-6 mt-[160px]">
        <h2 className="content_title text-[8vw] leading-[0.8] text-center grid gap-8">
          <span className="uppercase target">DREAM BIG</span>
          <span className="uppercase target">NEVER SETTLE</span>
          <span className="uppercase target mb-[100px]">NEVER QUIT</span>
        </h2>
      </div>

      <div className="flex flex-col w-screen relative px-8 py-6 mb-[70px]">
        <p className="max-w-[1260px] mx-auto my-8 text-[1.25rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione libero velit, iure quo magnam, odit ipsam rem laborum odio, obcaecati reprehenderit repudiandae voluptatem a. Aliquid et a molestiae fuga officiis?
        </p>
      </div>

      <div className='mx-auto flex flex-col gap-6'>
        <SparklesPreview />

    <div className='flex flex-col gap-10'>
        <div className="flex flex-col max-w-[1200px] mx-auto p-1 mt-[50px] rounded-xl">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            <div className="w-full md:w-1/3 h-full relative flex items-center justify-center">
              <Image
                src="/bassheadsthumbnail.png"
                alt="Project Thumbnail"
                width={500}
                height={500}
                className="mx-auto rounded-xl p-1"
              />
            </div>

            <div className="w-full md:w-2/3 p-4 text-white">
              <h3 className="text-2xl font-semibold mb-2">BASSHEADS &nbsp;&nbsp;(E-COMMERCE PLATFORM)</h3>
              <p className="text-md max-w-[660px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas animi quos
                explicabo consectetur, doloribus esse necessitatibus, voluptatum
                incidunt exercitationem nisi assumenda deserunt voluptas debitis amet.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col max-w-[1200px] mx-auto p-1 rounded-xl">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          <div className="w-full md:w-2/3 p-4 text-white">
              <h3 className="text-2xl font-semibold mb-2">GRAMHIVE &nbsp;&nbsp;(SOCIAL MEDIA PLATFORM)</h3>
              <p className="text-md max-w-[660px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas animi quos
                explicabo consectetur, doloribus esse necessitatibus, voluptatum
                incidunt exercitationem nisi assumenda deserunt voluptas debitis amet.
              </p>
            </div>
            <div className="w-full md:w-1/3 h-full relative flex items-center justify-center">
              <Image
                src="/gramhivethumb.png"
                alt="Project Thumbnail"
                width={500}
                height={500}
                className="mx-auto rounded-xl p-1"
              />
            </div>

            
          </div>
        </div>

        <div className="flex flex-col max-w-[1200px] mx-auto p-1 rounded-xl">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            <div className="w-full md:w-1/3 h-full relative flex items-center justify-center">
              <Image
                src="/weatherifythumbnail.jpg"
                alt="Project Thumbnail"
                width={500}
                height={500}
                className="mx-auto rounded-xl p-1"
              />
            </div>

            <div className="w-full md:w-2/3 p-4 text-white">
              <h3 className="text-2xl font-semibold mb-2">WEATHERIFY </h3>
              <p className="text-md max-w-[660px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas animi quos
                explicabo consectetur, doloribus esse necessitatibus, voluptatum
                incidunt exercitationem nisi assumenda deserunt voluptas debitis amet.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <CardDemo />
      <Carousel items={items2} />
      
      <TypewriterEffectDemo />
      </div>

  );
}

export default Typo;
