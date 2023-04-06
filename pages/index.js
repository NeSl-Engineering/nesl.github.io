import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube
} from 'react-icons/ai';
import Image from 'next/image';
import deved from '../public/dev-ed-wave.png';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';
import {useState} from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>NeSL Portofolio</title>
        <meta name='description' content='NeSL Portfolio Page' />
        <link rel="stylesheet" href="/favicon.ico" />
      </Head>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons dark:text-white'>developedbynazar</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick={() => {setDarkMode(!darkMode)}} className='cursor-pointer text-2xl dark:text-white'/>
              </li>
              <li><a href="" className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 py-2 rounded-md ml-8'>LinkedIn</a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>NeSL</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-gray-100'>Innovative Solutions</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-400'>Unlock the Possibilities of Technology - Harness
               Your IT Potential for a Brighter Future!
            </p>
            <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
              <AiFillTwitterCircle />
              <AiFillLinkedin />
              <AiFillYoutube />
            </div>
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
            <Image src={deved} layout='fill' objectFit='cover' />
          </div>
        </section>

        <section>
          <div className='mt-10'>
            <h3 className='text-3xl py-1 dark:text-gray-100'>Services we offer</h3>
            <p className='text-md py-2 leading-8 text-gray-80 dark:text-gray-300'>
              We understand that your IT needs are unique and evolving.
              That's why we offer <span className="text-teal-500">tailored solutions  </span>   
              to help you unlock your digital potential and make the most of your
              technology investments. Our <span className="text-teal-500">experienced team </span>
              is dedicated to understanding your business needs and providing the
              best solutions for you. With our <span className="text-teal-500">comprehensive </span>
              range of <span className="text-teal-500">services and expertise </span>, you can trust us to help you succeed.
            </p>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-500'>
              Unlock Your Digital Potential with IT - Tailored Solutions for a Brighter Future!
            </p>
          </div>
          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-700'>
              <Image className=' m-auto' src={design} width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-gray-100'>Beautiful Designs</h3>
              <p className="py-2 dark:text-gray-200">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className='py-4 text-teal-600 dark:text-gray-200'>Design Tools We Use</h4>
              <p className='text-gray-800 py-1 dark:text-gray-400'>Photoshop</p>
              <p className='text-gray-800 py-1 dark:text-gray-400'>Illustrator</p>
              <p className='text-gray-800 py-1 dark:text-gray-400'>Figma</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-700'>
              <Image className=' m-auto' src={consulting} width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-gray-100 '>Consulting</h3>
              <p className="py-2 dark:text-gray-200">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className='py-4 text-teal-600 dark:text-gray-200'>Design Tools We Use</h4>
              <p className='text-gray-800 py-1 dark:text-gray-400'>Photoshop</p>
              <p className='text-gray-800 py-1 dark:text-gray-400'>Illustrator</p>
              <p className='text-gray-800 py-1 dark:text-gray-400'>Figma</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-700'>
              <Image className=' m-auto' src={code} width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-gray-100'>
                Code your dream project
              </h3>
              <p className="py-2 dark:text-gray-200">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className='py-4 text-teal-600 dark:text-gray-200'>Design Tools We Use</h4>
              <p className='text-gray-800 py-1 dark:text-gray-400'>Photoshop</p>
              <p className='text-gray-800 py-1 dark:text-gray-400'>Illustrator</p>
              <p className='text-gray-800 py-1 dark:text-gray-400'>Figma</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-gray-100'>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-gray-80 dark:text-gray-300'>
              We understand that your IT needs are unique and evolving.
              That's why we offer <span className="text-teal-500">tailored solutions  </span>   
              to help you unlock your digital potential and make the most of your
              technology investments. Our <span className="text-teal-500">experienced team </span>
              is dedicated to understanding your business needs and providing the
              best solutions for you. With our <span className="text-teal-500">comprehensive </span>
              range of <span className="text-teal-500">services and expertise </span>, you can trust us to help you succeed.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-500">
              We offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row ld:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <Image 
                src={web1}
                className='rounded-lg object-cover'
                width={'100%'}
                height={'100%'}
                layout='responsive'
              />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web2}
              className='rounded-lg object-cover'
                width={'100%'}
                height={'100%'}
                layout='responsive'
              />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web3}
                className='rounded-lg object-cover'
                width={'100%'}
                height={'100%'}
                layout='responsive'
              />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web4}
                className='rounded-lg object-cover'
                width={'100%'}
                height={'100%'}
                layout='responsive'
              />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web5}
                className='rounded-lg object-cover'
                width={'100%'}
                height={'100%'}
                layout='responsive'
              />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web6}
                className='rounded-lg object-cover'
                width={'100%'}
                height={'100%'}
                layout='responsive'
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
