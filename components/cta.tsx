import { Button } from './ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { useGym } from '@/context/use-gym';

const CTA = () => {
  const gymParams = useGym();
  const { gymName, city, createRoute } = gymParams;
  return (
    <section>
      <div data-aos="fade-right" className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="bg-card p-8 md:p-12 lg:px-16 lg:py-24 border border-primary shadow">
            <div className="mx-auto max-w-xl text-center flex flex-col">
              <h2 className="text-2xl font-bold text-card-foreground md:text-3xl">
                <strong className='text-primary'>{gymName}</strong> Gym – Best Unisex Fitness Center for Men & Women in {city}
              </h2>
              <p className="hidden text-card-foreground/80 sm:mt-4 sm:block">
                {gymName} Gym in {city} offers a safe and modern fitness space for both men and women. With separate areas, expert trainers, and affordable plans, it's the perfect place for cardio, strength training, and weight loss. Join now to start your fitness journey!
              </p>
              <Link href={createRoute("contact-us")} className="mt-4 md:mt-8 hover:animate-pulsing hover:animate-iteration-count-infinite">
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