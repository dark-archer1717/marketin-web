import {
  HomeIcon,
  CogIcon,
  LockClosedIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
} from '@heroicons/react/outline'

const features = [
  {
    name: 'Home Broadband Internet'
    ,
    description: 'Sohag Technology is providing one of the fastest broadband internet and network solutions throughout Dhaka, reliable for both gamers and regular users',
    icon: HomeIcon,
  },
  {
    name: 'Accessible Technical Support',
    description: 'We are offering swift and knowledgeable assistance for all your connectivity needs. Experience seamless browsing with our dedicated 24/7 support team."',
    icon: LockClosedIcon,
  },
  {
    name: 'Dedicated Server Hosting',
    description: 'Get a dedicated server hosted on your end to complete your daily needs with efficient network routing and configuration. For more information please contact',
    icon: RefreshIcon,
  },
  {
    name: 'Dedicated Internet',
    description: 'Dedicated internet connectivity with multiple upstream support and multiple backup links to ensure 99.9% uptime.',
    icon: CogIcon,
  },
  {
    name: 'Data Connectivity',
    description: 'Sohag Technology offers various solutions for Data connectivity. Keeping our system updated with the latest technologies, we ensure the most efficient data connectivity solutions for our clients.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Fast FTP Server Support',
    description: '120 Mbps download speed for FTP servers to ensure user satisfaction 24/7.',
    icon: ServerIcon,
  },
]


export default function Feature() {
  return (
    <div className="relative bg-white py-16 sm:py-24 lg:py-32" id="feature">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-base font-semibold uppercase tracking-wider text-indigo-600 "></h2>
        <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Everything you need for your daily need
        </p>
        <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
          Providing one of the best internet service in Dhaka City.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="mt-5 text-lg leading-6 font-medium text-gray-900">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-3 shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">{feature.name}</h3>
                    <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
