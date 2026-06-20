import { ArrowRight, Clock, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

interface SectionProps {
  gymName: string;
  phone: string;
  city: string;
}

const Location = ({ gymName, city, phone }: SectionProps) => {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="site-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <div className="bg-primary/20 max-w-35 text-center rounded-full text-primary border border-primary/80">Location</div>
          <h2 className="mt-5 text-balance font-heading text-4xl font-black uppercase leading-[0.94] text-foreground sm:text-5xl">
            Find<span className="text-primary"> {gymName}</span> GYM
          </h2>
          <div className="mt-8 grid gap-5 text-sm text-foreground/90">
            <a
              href="https://www.google.com/maps?q=36.60212164144929,-119.46041557671056"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 transition hover:text-foreground"
            >
              <MapPin className='size-4' />
              <span>
                XYX Street Sector 2 Phase 1 , {city}
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
            href="https://www.google.com/maps?q=36.60212164144929,-119.46041557671056"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className='mt-2' >   Get Directions
              <ArrowRight className='size-4' /></Button>
          </Link>
        </div>
        <div className="overflow-hidden  border border-foreground/10 bg-black">
          <iframe
            src="https://www.google.com/maps?q=36.60212164144929,-119.46041557671056&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 460 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Iron Heaven location map"
          />
        </div>
      </div>
    </section>
  )
}

export default Location