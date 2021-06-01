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
            <a className="btn btn-banner mt-8 font-semibold text-sm tracking-widest">
              SHOP NOW
            </a>
          </div>
        </div>
        <section className="pt-24">
          <div className="grid gap-8 grid-cols-3 px-20">
            <div className="flex flex-col">
              <div className="flex-1 mb-4 relative overflow-hidden">
                <img className="w-full h-full object-cover" src="/img/woman.png" />
                <div className="absolute top-1/2 left-10 w-1/2 p-5 transform -translate-y-1/2">
                  <h4 className="uppercase text-xl font-semibold tracking-wide">Outerwear</h4>
                  <h2 className="font-bold uppercase text-3xl py-1">New</h2>
                  <h4 className="uppercase text-xl font-semibold tracking-wide">Collection</h4>
                  <a className="btn btn-cat tracking-wider mt-5">Shop Now</a>
                </div>
              </div>
              <div className="flex-1 mt-4 relative overflow-hidden">
                <img className="w-full h-full object-cover" src="/img/woman1.png" />
                <div className="absolute top-1/2 left-10 w-1/2 p-5 transform -translate-y-1/2">
                  <h4 className="uppercase text-xl font-semibold tracking-wide">Summer</h4>
                  <h2 className="font-bold uppercase text-3xl py-1">Hot</h2>
                  <h4 className="uppercase text-xl font-semibold tracking-wide">Collection</h4>
                  <a className="btn btn-cat tracking-wider mt-5">Shop Now</a>
                </div>
              </div>
            </div>
            <div className="h-96 relative overflow-hidden">
              <img className="w-full h-full object-cover" src="/img/bag.png" />
              <div className="absolute bottom-0 left-10 p-5 w-4/5 transform -translate-y-2/25">
                  <h2 className="uppercase text-4xl font-extrabold tracking-wide">10% OFFER</h2>
                  <h4 className="uppercase text-xl font-semibold tracking-wide">Collection</h4>
                  <a className="btn btn-cat tracking-wider mt-5">Shop Now</a>
                </div>
            </div>
            <div className="flex flex-col">
              <div className="flex-1 mb-4 relative overflow-hidden">
                <img className="w-full h-full object-cover" src="/img/woman4.png" />
                <div className="absolute top-1/2 left-10 w-1/2 p-5 transform -translate-y-1/2">
                  <h2 className="font-bold uppercase text-3xl py-1">New</h2>
                  <h4 className="uppercase text-xl font-semibold tracking-wide">Arrival</h4>
                  <a className="btn btn-cat tracking-wider mt-5">Shop Now</a>
                </div>
              </div>
              <div className="flex-1 mt-4 relative overflow-hidden">
                <img className="w-full h-full object-cover" src="/img/kids.png" />
                <div className="absolute top-1/2 left-10 w-1/2 p-5 transform -translate-y-1/2">
                  <h2 className="font-bold uppercase text-3xl py-1">Hot</h2>
                  <h4 className="uppercase text-xl font-semibold tracking-wide">Offer</h4>
                  <a className="btn btn-cat tracking-wider mt-5">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-24">
          <div className="text-center">
            <h2 className="text-4xl font-semibold uppercase">Hot Items</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
        </section>
    </Layout>
  )
}

export default Home
