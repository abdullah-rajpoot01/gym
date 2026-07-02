import { ArrowRight, ArrowUp, Clock, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import { useGym } from '@/context/use-gym';

const Location = () => {
  const { gymName, phone, googleMapShareLink, googleMapPinUrl, loading, address, email } = useGym();
  if (loading) return null;
  return (
    <section className="py-16 md:py-24 px-4 overflow-x-hidden">
      <div className="site-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div data-aos="fade-right">
          <div className="bg-primary/20 max-w-35 text-center rounded-full text-primary border border-primary/80">Location</div>
          <h2 className="mt-5 text-balance font-heading text-4xl font-black uppercase leading-[0.94] text-foreground sm:text-5xl">
            Find<span className="text-primary"> {gymName}</span> GYM
          </h2>
          <div className="mt-8 grid gap-5 text-sm text-foreground/90">
            <a
              href={googleMapShareLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 transition hover:text-foreground"
            >
              <MapPin className='size-4' />
              <span>
                {address}
              </span>
            </a>
            <a
              href={`tel:+${phone}`}
              className="flex gap-4 transition hover:text-foreground"
            >
              <Phone className='size-4' />
              <span>+{phone}</span>
            </a>
            <div className="flex gap-4">
              <Clock className='size-4' />
              <div className="space-y-3">
                <div>
                  <div className="font-bold text-foreground">For Gents</div>
                  <div>Morning: 6:30 AM to 9:30 AM</div>
                  <div>Evening: 5:00 PM to 11:00 PM</div>
                </div>
                <div>
                  <div className="font-bold text-foreground">For Female</div>
                  <div>Morning: 10:00 AM to 12:30 PM</div>
                </div>
              </div>
            </div>
          </div>
          <Link
            href={googleMapShareLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className='mt-2' >   Get Directions
              <ArrowRight className='size-4' /></Button>
          </Link>
        </div>
        <div data-aos="fade-left" className="overflow-hidden relative  border border-foreground/10 bg-black">
          <iframe
            src={googleMapPinUrl}
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 460 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Iron Heaven location map"
          />
          <Link className="absolute inset-0 bg-black/5 z-10" href={googleMapShareLink}/>
          <div className="absolute bottom-0 sm:bottom-2 max-w-full sm:max-w-[80%]  border border-primary/25 bg-black/80 px-4 py-3 text-sm z-5">
              <div className="font-heading font-black uppercase text-white text-sm">
                {address}
              </div>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-primary flex gap-2  items-center">
                Health / Fitness <ArrowUp className='size-4  rotate-30' />
              </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Location