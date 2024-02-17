import { CheckIcon } from '@heroicons/react/solid'

const tiers = [
  {
    name: 'Basic',
    href: '/contact',
    packageSize: 10,
    priceMonthly: ' 500',
    description: 'Choose a package and start your internet journey',
    includedFeatures: ['Unlimited BDIX Bandwidth', '4K Youtube and Facebook Stream.', '24/7 Phone and Online Support.'],
  },
  {
    name: 'Balanced',
    href: '/contact',
    packageSize: 16,
    priceMonthly: 800,
    description: 'Choose a package and start your internet journey',
    includedFeatures: [
      'Unlimited BDIX Bandwidth.',
      '4K Youtube and Facebook Stream.',
      'IPv6 Public IP Only',
      '24 / 7 Phone and Online Support',
    ],
  },
  {
    name: 'Gamer',
    href: '/contact',
    packageSize: 20,
    priceMonthly: 1000,
    description: 'Choose a package and start your internet journey',
    includedFeatures: [
      'Unlimited BDIX Bandwidth.',
      '4K Youtube and Facebook Stream.',
      'IPv6 Public IP Only',
      '24 / 7 Phone and Online Support',
    ],
  },
  {
    name: 'Heavy User',
    href: '/contact',
    packageSize: 25,
    priceMonthly: 1200,
    description: 'Choose a package and start your internet journey',
    includedFeatures: [
      'Unlimited BDIX Bandwidth.',
      '4K Youtube and Facebook Stream.',
      'IPv6 Public IP Only',
      '24 / 7 Phone and Online Support',
    ],
  },
  {
    name: 'Extra Heavy User',
    href: '/contact',
    packageSize: 30,
    priceMonthly: 1500,
    description: 'Choose a package and start your internet journey',
    includedFeatures: [
      'Unlimited BDIX Bandwidth.',
      '4K Youtube and Facebook Stream.',
      'IPv6 Public IP Only',
      '24 / 7 Phone and Online Support',
    ],
  },
  {
    name: 'Ultimate User',
    href: '/contact',
    packageSize: 40,
    priceMonthly: 1800,
    description: 'Choose a package and start your internet journey',
    includedFeatures: [
      'Unlimited BDIX Bandwidth.',
      '4K Youtube and Facebook Stream.',
      'IPv6 Public IP Only',
      '24 / 7 Phone and Online Support',
    ],
  },
  {
    name: 'Gigachad User',
    href: '/contact',
    packageSize: 64,
    priceMonthly: 2500,
    description: 'Choose a package and start your internet journey',
    includedFeatures: [
      'Unlimited BDIX Bandwidth.',
      '4K Youtube and Facebook Stream.',
      'IPv6 Public IP Only',
      '24 / 7 Phone and Online Support',
    ],
  },

]

export default function Extendedprice() {
  return (
    <div className="shadow">
      <div className="bg-white lg:shadow-md" id="pricing">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="flex-auto">
            <h1 className="text-5xl font-extrabold text-gray-900 sm:text-left">Pricing Plans</h1>
            <p className="mt-5 text-xl text-gray-500 sm:text-left">
              Choose a package that suits your budget & business.
            </p>
          </div>
          {/* <div className="flex justify-end md:mt-0 sm:mt-0">
            <a href="pricing">
              <button className="px-4 py-3 rounded-lg bg-blue-600 hover:bg-gray-900 text-white shadow-xl">
                All Packages
              </button>
            </a>
          </div> */}

          <div className="mt-10 space-y-3 sm:mt-14 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
            {tiers.map((tier) => (
              <div key={tier.name} className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
                <div className="p-6" >
                  <p className='mt-8'>
                    {tier.packageSize} Mbps </p>
                  <h2 className="text-lg leading-6 font-medium text-gray-900">{tier.name}</h2>
                  <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                  <p className="mt-8">
                    <span className="text-4xl font-extrabold text-gray-900">TK{tier.priceMonthly}</span>{' '}
                    <span className="text-base font-medium text-gray-500">/mo</span>
                  </p>
                  <a
                    href={tier.href}
                    className="mt-8 block w-full bg-blue-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
                  >
                    Buy {tier.name}
                  </a>
                </div>
                <div className="pt-6 pb-8 px-6">
                  <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">Whats included</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {tier.includedFeatures.map((feature) => (
                      <li key={feature} className="flex space-x-3">
                        <CheckIcon className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                        <span className="text-sm text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
