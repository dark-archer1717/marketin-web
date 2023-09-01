import React from 'react';
import Image from 'next/image';

export default function Cartoon() {
  return (
    <div className="grid grid-cols-1 gap-8 px-4 py-8 mx-auto md:grid-cols-2 md:px-8 lg:px-16 xl:px-24 2xl:px-32 dark:bg-gray-800 dark:text-gray-100">
      <div className="flex flex-col justify-between space-y-4">
        <h2 className="text-3xl font-semibold lg:text-4xl">Lets Talk!</h2>
        <p className="text-gray-400">
          Have something on your mind? Reach out to us.
        </p>
      </div>
      <div className="relative w-full h-52 md:h-64">
        <Image
          src="/assets/svg/doodle.svg"
          alt="Image"
          layout="fill"
          objectFit="contain"
          className="p-6"
        />
      </div>
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            className="w-full p-3 rounded bg-gray-100 dark:bg-black-800"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full p-3 rounded bg-gray-100 dark:bg-black-800"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            rows="3"
            className="w-full p-3 rounded bg-gray-100 dark:bg-black-800"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full p-3 text-sm font-semibold text-white uppercase rounded bg-violet-400 dark:bg-violet-500"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
