import React from 'react'
import Image from 'next/image'
import About from '../public/image/about.jpg'

export default function section() {
  return (
    <div>
      <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap items-center justify-between">
            <div className="w-full px-4 lg:w-6/12">
              <div className="-mx-3 flex items-center sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    {
                      <Image
                        src={About}
                        width={1400}
                        height={1500}
                        layout="responsive"
                        fill={true}
                        alt="blank.jpg"
                        className="w-full rounded-2xl "
                      />
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="text-primary mb-2 block text-lg font-semibold">
                  Why Choose Us
                </span>
                <h2 className="text-dark mb-8 text-3xl font-bold sm:text-4xl">
                  Make your customers happy by giving services.
                </h2>
                <p className="text-body-color mb-8 text-base">
                  It is a long established fact that a reader will be distracted by
                  the readable content of a page when looking at its layout. The point
                  of using Lorem Ipsum is that it has a more-or-less.
                </p>
                <p className="text-body-color mb-12 text-base">
                  A domain name is one of the first steps to establishing your brand.
                  Secure a consistent brand image with a domain name that matches your
                  business.
                </p>
                <a
                  href="javascript:void(0)"
                  className="bg-primary inline-flex items-center justify-center rounded-lg py-4 px-10 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
