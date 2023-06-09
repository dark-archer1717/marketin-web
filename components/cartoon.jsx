/* eslint-disable react/no-unknown-property */
import React from 'react'
import Image from 'next/image'

export default function Cartoon() {
  return (
    <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
      <div className="flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Lets talk!</h2>
          <div className="dark:text-gray-400">Vivamus in nisl metus? Phasellus.</div>
        </div>
        <div
          style={{ width: '100%', height: '100%', position: 'relative' }}>
          <Image
            src="/assets/svg/doodle.svg"
            layout="fill" alt="image"
            objectFit='contain'
            className="p-6 h-52 md:h-64"
          />
        </div>
      </div>

      <form noValidate="" className="space-y-6 ng-untouched ng-pristine ng-valid">
        <div>
          <label for="name" className="text-sm">Full Name</label>
          <input id="name" type="text" placeholder="" className="w-full p-3 rounded dark:bg-black-800" />
        </div>
        <div>
          <label for="email" className="text-sm">Email</label>
          <input id="email" type="email" className="w-full p-3 rounded dark:bg-black-800" />
        </div>
        <div>
          <label for="message" className="text-sm">Message</label>
          <textarea id="message" rows="3" className="w-full p-3 rounded dark:bg-black-800"></textarea>
        </div>
        <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-400 dark:text-black-900">Send Message</button>
      </form>
    </div>
  )
}
