import Image from 'next/image'

import { Container } from '../components/Container'
import avatarImage1 from '/public/image/avatars/avatar-1.png'
import avatarImage2 from '/public/image/avatars/avatar-2.png'
import avatarImage3 from '/public/image/avatars/avatar-3.png'
import avatarImage4 from '/public/image/avatars/avatar-4.png'
import avatarImage5 from '/public/image/avatars/avatar-5.png'

const testimonials = [
  [
    {
      content:
        'Sohag Technology is providing the best internet service in the country. I am very happy with their service. I would recommend it to everyone.',
      author: {
        name: 'Annonymous User',

        image: avatarImage1,
      },
    },
    {
      content:
        'I have been using Sohag Technology for a long time now and I am very happy with their service. I would recommend it to everyone. I am very happy with their service. I would recommend it to everyone.',
      author: {
        name: 'Annonymous User',

        image: avatarImage4,
      },
    },
  ],
  [
    {
      content:
        'The best part about Sohag Technology is that they are always there for you. I have never faced any problem with their service. I am very happy with their service. I would recommend it to everyone.',
      author: {
        name: 'Annonymous User',

        image: avatarImage5,
      },
    },
    {
      content:
        'There are so many things I had to do with my old internet service provider that I don’t have to do with Sohag Technology. It’s like a breath of fresh air. I can finally focus on my business.',
      author: {
        name: 'Annonymous User',

        image: avatarImage2,
      },
    },
  ],
  [
    {
      content:
        'It’s so easy to use, and it’s so fast. I can’t believe I didn’t switch to Sohag Technology sooner. I would recommend it to everyone. I am very happy with their service. I would recommend it to everyone.',
      author: {
        name: 'Annonymous User',

        image: avatarImage3,
      },
    },
    {
      content:
        'This is the best internet service I have ever used. Fast and reliable internet service. I am very happy with their service. I would recommend it to everyone.',
      author: {
        name: 'Annonymous User',
        image: avatarImage4,
      },
    }
  ],
]

function QuoteIcon(props) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  )
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Loved by people citywide.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Our service is so simple that people can’t help but fall in love
            with it. Simplicity is easy when you just skip tons of
            mission-critical features.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <QuoteIcon className="absolute left-6 top-6 fill-slate-100" />
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            {testimonial.author.name}
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            {testimonial.author.role}
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          <Image
                            className="h-14 w-14 object-cover"
                            src={testimonial.author.image}
                            alt=""
                            width={56}
                            height={56}
                          />
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
