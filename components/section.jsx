/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import About from '/public/image/about.jpg';
import { Button } from '../components/Button';

export default function Section() {
  return (
    <div>
      <section className="overflow-hidden pt-10 lg:pt-20 pb-12 lg:pb-16 xl:pb-24">
        <div className="container mx-auto">
          <div className="-mx-2 lg:flex items-center justify-between">
            <div className="w-full lg:w-1/2 px-2">
              <div className="lg:flex lg:items-center">
                <div className="w-full lg:w-2/3">
                  <div className="py-3">
                    <Image
                      src={About}
                      width={600}
                      height={700}
                      layout="responsive"
                      alt="about.jpg"
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-2 mt-6 lg:mt-0">
              <div className="mt-6 lg:mt-0">
                <span className="text-primary mb-4 block text-xl lg:text-2xl font-semibold">
                  Why Choose Us
                </span>
                <div className="py-4">
                  <div className="max-w-xl mx-auto text-black">
                    {/* Rest of the content */}
                    <p className="text-lg mb-8">At <b>Sohag Technology</b>, we understand that choosing the right internet service provider is a significant decision that impacts your connectivity, productivity, and entertainment. Here's why we believe we are the ideal choice for all your internet needs:</p>
                    <ul className="list-disc pl-6">
                      <li className="mb-2">Blazing Fast Speeds: We deliver lightning-fast internet speeds that ensure seamless streaming, lag-free gaming, and smooth browsing.</li>
                      <li className="mb-2">Reliable Connectivity: Our robust network infrastructure is designed for reliability, providing a stable connection even during peak usage times.</li>
                      <li className="mb-2">Exceptional Customer Support: Our friendly and knowledgeable support team is available 24/7 to assist you.</li>
                      <li className="mb-2">Flexible Plans: We offer a range of plans to cater to various usage requirements and budgets.</li>
                      <li className="mb-2">Cutting-Edge Technology: We constantly invest in upgrading our infrastructure to bring you the best services.</li>
                      <li className="mb-2">Transparent Pricing: Our pricing is straightforward, and we believe in building trust through transparency.</li>
                      <li className="mb-2">Local Community Focus: We're part of your community and take pride in contributing to local initiatives.</li>
                      <li className="mb-2">Secure Network: We implement robust security measures to safeguard your personal information.</li>
                      <li className="mb-2">Easy Installation: Our installation process is quick and hassle-free.</li>
                      <li className="mb-2">Proven Track Record: With a strong history of delivering high-quality internet services, we have earned the trust of countless satisfied customers.</li>
                    </ul>
                    <p className="text-lg mb-8">When you choose <b>Sohag Technology</b>, you're getting a partner dedicated to enhancing your online experiences. Join us today and experience the difference for yourself. Your journey to a better-connected future starts here.</p>
                  </div>
                </div>
                <Button>Get Started</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
