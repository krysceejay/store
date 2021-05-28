import React from 'react'
import Layout from '../components/layouts/Layout'

const Home = () => {
  return (
    <Layout title="Home">
        <div className="w-full h-screen -mt-10 bg-banner-img bg-no-repeat bg-cover bg-center relative">
          <div className="flex flex-col justify-center items-start h-full px-20 overlay">
            <p className="text-bannerxl font-thin leading-none">
              LIVE FOR
              <span className="block text-white font-bold">FASHION</span>
            </p>
            <h3 className="text-white text-2xl tracking-wide">SAVE UP TO 50%</h3>
            <a className="btn btn-blue mt-8 font-semibold text-sm tracking-widest">
              SHOP NOW
            </a>
          </div>
        </div>
        <section className="py-24">
          <div className="grid gap-8 grid-cols-3 px-20">
            <div className="flex flex-col">
              <div className="flex-1 mb-4">
                <img className="w-full h-full object-cover" src="/img/woman.png" />
              </div>
              <div className="flex-1 mt-4">
                <img className="w-full h-full object-cover" src="/img/woman1.png" />
              </div>
            </div>
            <div className="h-96">
              <img className="w-full h-full object-cover" src="/img/bag.png" />
            </div>
            <div className="flex flex-col">
              <div className="flex-1 mb-4">
                <img className="w-full h-full object-cover" src="/img/woman4.png" />
              </div>
              <div className="flex-1 mt-4">
                <img className="w-full h-full object-cover" src="/img/kids.png" />
              </div>
            </div>
          </div>
        </section>
    </Layout>
  )
}

export default Home
