import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import GooglePlayStore from '../assets/images/GooglePlay'
import AppStore from '../assets/images/AppStore'


const Home: NextPage = () => {
  return (
    <div className="bg-black">
      <Head>
        <title>SolzNfts</title>
        <meta name="description" content="NFT marplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black h-[100vh] flex flex-col md:justify-center">


        <div className="md:container px-[24px] mx-auto mt-[40px] xl:mt-0">
          <div >
            <nav className="">
              <Image
                src="/SOLZNFT.png"
                alt="logo"
                width={195}
                height={84}
              />
            </nav>
          </div>
          <div>

          </div>


          <div className="flex flex-col-reverse md:flex-row justify-between">
            <div className="flex  flex-col justify-around w-full md:w-1/2 " data-aos="fade-up"

              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
            >
              <h1 className="text-white text-[26px] md:text-[60px] font-[700]">
                Discover and sell latest NFT’s with your finger snap.
                </h1>
              <div className="flex flex-col md:flex-row ">
                <div className="mx-auto md:mx-0 mt-[20px] cursor-pointer">

                  <AppStore />
                </div>
                <div className='md:ml-[80px] mt-[20px] mx-auto cursor-pointer'>
                  <GooglePlayStore />

                </div>
              </div>

            </div>
            <div className="w-1/2 my-auto  ml-[-10px] w-[350px] h-[400px] md:w-[837px] md:h-[782px] overflow-hidden relative  flex flex-end" data-aos="fade-down"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
            >
              <div className="">
                <img
                  src="/IphoneMockup.svg"
                  alt="Picture of the author"
                  className="mr-[-20px] my-auto absolute md:right-[-10%] overflow-hidden"
                  width={837}
                  height={782}
                />
              </div>


            </div>

          </div>

        </div>
      </main>


    </div>
  )
}

export default Home
