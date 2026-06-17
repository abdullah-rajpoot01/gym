import { Button } from './ui/button'
import Image from 'next/image'
import Link from 'next/link'
interface CTAProps {
  gymName: string;
phone:string;
  city: string;
}
const CTA = ({ gymName, city,phone }: CTAProps) => {
  return (
    <section>
      <div data-aos="fade-right" className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="bg-gray-100 p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-xl text-center flex flex-col">
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                {gymName} Gym – Best Unisex Fitness Center for Men & Women in {city}
              </h2>
              <p className="hidden text-gray-700 sm:mt-4 sm:block">
                {gymName} Gym in {city} offers a safe and modern fitness space for both men and women. With separate areas, expert trainers, and affordable plans, it's the perfect place for cardio, strength training, and weight loss. Join now to start your fitness journey!
              </p> pexels-binyaminmellish-17840
              <Link href={`/contact-us?name=${gymName}&city=${city}&phone=${phone}`} className="mt-4 md:mt-8 hover:animate-pulsing hover:animate-iteration-count-infinite">
                <Button>
                  Get Started Today
                </Button>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
            <div className='relative w-full h-full'>
              <Image fill
                alt=""
                src="/gym/pexels-jimmyelizarraras-28455433.jpg"
                className=" object-cover"
              />
            </div>
            <div className='relative w-full aspect-square md:aspect-auto'>
              <Image fill
                alt=""
                src="/gym/pexels-mknouman-18502146.jpg"
                className="object-cover "
              />
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default CTA