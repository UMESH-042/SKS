import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  Truck,
  PenToolIcon as Tools,
  Shield,
  Hammer,
  Wrench,
  MessageSquare,
} from "lucide-react"
import MobileMenu from "@/components/mobile-menu"
import CopyrightYear from "@/components/copyright-year"
import { HeroButtons, AboutButton, GalleryButton } from "@/components/action-buttons"
import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-900/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-amber-500" />
            <span className="text-xl font-bold">SKS Repairing Works</span>
          </div>
          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            <Link href="#home" className="text-sm font-medium hover:text-amber-500 transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-amber-500 transition-colors">
              About
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-amber-500 transition-colors">
              Services
            </Link>
            <Link href="#gallery" className="text-sm font-medium hover:text-amber-500 transition-colors">
              Gallery
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-amber-500 transition-colors">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-amber-500 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center">
            <Button
              variant="outline"
              className="hidden md:flex border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-zinc-900 text-xs lg:text-sm whitespace-nowrap"
            >
              <PhoneCall className="mr-2 h-4 w-4" /> 6355108714
            </Button>
            <MobileMenu />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10" />
        <div
          className="h-[500px] md:h-[600px] bg-cover bg-center"
          // style={{ backgroundImage: "url('/placeholder.svg?height=600&width=1200&text=Welding+Sparks')" }}
    
          style={{ backgroundImage: "url('/images/welding1.jpeg')" }}

        >
          <div className="container relative z-20 flex h-full flex-col justify-center px-4 sm:px-6">
            <div className="max-w-2xl space-y-4 md:space-y-6">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                SKS Repairing Works
              </h1>
              <p className="text-lg sm:text-xl text-zinc-300">Specialists in Truck Cabin Building & Body Repairing</p>
              <HeroButtons />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-zinc-900">
        <div className="container px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">About SKS Repairing Works</h2>
              <div className="h-1 w-20 bg-amber-500 mb-6 md:mb-8"></div>
              <p className="text-zinc-300 mb-6">
                Shree Kalika Show Repairing (SKS Repairing Works) was founded by Mr. Rambaj Chauhan with a vision to
                provide exceptional welding and truck body repair services. What started as a small workshop has now
                grown into a trusted name in the industry.
              </p>
              <p className="text-zinc-300 mb-6">
                With over 15 years of experience, Mr. Chauhan has built a reputation for quality craftsmanship,
                reliability, and attention to detail. Our team specializes in building truck cabins for major brands
                like TATA and Ashok Leyland from scratch.
              </p>
              <p className="text-zinc-300 mb-8">
                What sets us apart is our commitment to using the finest materials, advanced welding techniques, and our
                dedication to meeting deadlines. Every project is handled with the same level of care and precision,
                whether it's a small repair or a complete cabin build.
              </p>
              <AboutButton />
            </div>
            <div className="relative mt-8 lg:mt-0">
              <div className="absolute -top-4 -left-4 w-16 md:w-24 h-16 md:h-24 bg-amber-500 rounded-lg opacity-20"></div>
              <img
                src="/images/welding.jpeg"
                alt="Welding workshop"
                className="rounded-lg relative z-10 w-full h-auto"
              />
              <div className="absolute -bottom-4 -right-4 w-16 md:w-24 h-16 md:h-24 bg-amber-500 rounded-lg opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-zinc-800">
        <div className="container px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold">Our Services</h2>
            <div className="mt-2 h-1 w-20 bg-amber-500 mx-auto"></div>
            <p className="mt-4 text-zinc-300 max-w-2xl mx-auto">
              Professional welding and truck body repair services with precision and quality
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-700 hover:border-amber-500 transition-colors h-full">
              <Truck className="h-8 w-8 md:h-10 md:w-10 text-amber-500 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3">Custom Truck Cabin Fabrication</h3>
              <p className="text-zinc-400 text-sm md:text-base">
                Custom-built truck cabins for TATA, Ashok Leyland, and other commercial vehicles from scratch.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-700 hover:border-amber-500 transition-colors h-full">
              <Sparkles className="h-8 w-8 md:h-10 md:w-10 text-amber-500 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3">Electric Welding</h3>
              <p className="text-zinc-400 text-sm md:text-base">
                Professional electric welding services for all types of metal structures and repairs.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-700 hover:border-amber-500 transition-colors h-full">
              <Tools className="h-8 w-8 md:h-10 md:w-10 text-amber-500 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3">Gas Welding</h3>
              <p className="text-zinc-400 text-sm md:text-base">
                Specialized gas welding for precise and clean welds on various metal surfaces.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-700 hover:border-amber-500 transition-colors h-full">
              <Hammer className="h-8 w-8 md:h-10 md:w-10 text-amber-500 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3">Body Repair & Denting</h3>
              <p className="text-zinc-400 text-sm md:text-base">
                Complete truck body repair, denting, and restoration services to extend vehicle life.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-700 hover:border-amber-500 transition-colors h-full">
              <Wrench className="h-8 w-8 md:h-10 md:w-10 text-amber-500 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3">Custom Modifications</h3>
              <p className="text-zinc-400 text-sm md:text-base">
                Bespoke metal fabrication and modifications for commercial vehicles and industrial applications.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-700 hover:border-amber-500 transition-colors h-full">
              <Shield className="h-8 w-8 md:h-10 md:w-10 text-amber-500 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3">Preventive Maintenance</h3>
              <p className="text-zinc-400 text-sm md:text-base">
                Regular inspection and maintenance services to prevent costly repairs and extend vehicle lifespan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Truck Brands Section */}
      <section className="py-16 md:py-24 bg-zinc-900">
        <div className="container px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold">Truck Brands We Specialize In</h2>
            <div className="mt-2 h-1 w-20 bg-amber-500 mx-auto"></div>
            <p className="mt-4 text-zinc-300 max-w-2xl mx-auto">
              We have extensive experience working with all major truck brands
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {["TATA", "Ashok Leyland", "Mahindra", "Eicher"].map((brand) => (
              <div key={brand} className="bg-zinc-800 p-6 rounded-lg flex flex-col items-center justify-center">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-zinc-700 rounded-full flex items-center justify-center mb-4">
                  <Truck className="h-8 w-8 md:h-12 md:w-12 text-amber-500" />
                </div>
                <h3 className="text-base md:text-xl font-bold text-center">{brand}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      

     {/* Gallery Section */}
<section id="gallery" className="py-16 md:py-24 bg-zinc-800">
  <div className="container px-4 sm:px-6">
    <div className="text-center mb-12 md:mb-16">
      <h2 className="text-2xl md:text-3xl font-bold">Our Work</h2>
      <div className="mt-2 h-1 w-20 bg-amber-500 mx-auto"></div>
      <p className="mt-4 text-zinc-300 max-w-2xl mx-auto">
        Take a look at some of our recent projects and completed work
      </p>
    </div>

    {/** Declare the actual images to show here */}
    {(() => {
      const galleryImages = [
        { title: "Truck Cabin Build", file: "welding.jpeg" },
        { title: "Welding Process", file: "welding1.jpeg" },
        { title: "Completed Cabin", file: "welding.jpeg" },
        { title: "Body Repair", file: "welding1.jpeg" },
        { title: "Workshop Action", file: "welding.jpeg" },
        { title: "Before-After Repair", file: "welding1.jpeg" },
      ];

      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((item, index) => (
            <div key={index} className="overflow-hidden rounded-lg group relative">
              <img
                src={`/images/${item.file}`} // Make sure images are in `public/images/`
                alt={item.title}
                className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4">
                  <h3 className="text-base md:text-lg font-bold">{item.title}</h3>
                  <p className="text-xs md:text-sm text-zinc-300">Professional craftsmanship</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    })()}

    <div className="text-center mt-10 md:mt-12">
      <GalleryButton />
    </div>
  </div>
</section>

      {/* <section id="gallery" className="py-16 md:py-24 bg-zinc-800">
        <div className="container px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold">Our Work</h2>
            <div className="mt-2 h-1 w-20 bg-amber-500 mx-auto"></div>
            <p className="mt-4 text-zinc-300 max-w-2xl mx-auto">
              Take a look at some of our recent projects and completed work
            </p>
          </div>
          

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Truck Cabin Build",
              "Welding Process",
              "Completed Cabin",
              "Body Repair",
              "Workshop Action",
              "Before-After Repair",
            ].map((item, index) => (
              <div key={index} className="overflow-hidden rounded-lg group relative">
                <img
                  src={`/placeholder.svg?height=300&width=400&text=${item.replace(" ", "+")}`}
                  alt={item}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <h3 className="text-base md:text-lg font-bold">{item}</h3>
                    <p className="text-xs md:text-sm text-zinc-300">Professional craftsmanship</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 md:mt-12">
            <GalleryButton />
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 bg-zinc-900">
        <div className="container px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold">Customer Testimonials</h2>
            <div className="mt-2 h-1 w-20 bg-amber-500 mx-auto"></div>
            <p className="mt-4 text-zinc-300 max-w-2xl mx-auto">
              What our satisfied customers have to say about our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                name: "Rajesh Kumar",
                company: "RK Transport",
                text: "SKS Repairing Works built a custom cabin for my TATA truck that exceeded all my expectations. The quality of welding and attention to detail is outstanding.",
              },
              {
                name: "Sunil Patel",
                company: "Patel Logistics",
                text: "I've been taking my fleet to Rambaj for over 5 years now. His team always delivers quality repairs on time and at a fair price. Highly recommended!",
              },
              {
                name: "Amit Singh",
                company: "AS Carriers",
                text: "The body repair work they did on my accident-damaged truck was flawless. You can't even tell it was ever damaged. Professional service from start to finish.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 h-full">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-amber-500/20 flex items-center justify-center mr-4">
                    <MessageSquare className="h-5 w-5 md:h-6 md:w-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm md:text-base">{testimonial.name}</h3>
                    <p className="text-xs md:text-sm text-zinc-400">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-zinc-300 italic text-sm md:text-base">"{testimonial.text}"</p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="#F59E0B"
                      className="mr-1 w-3 h-3 md:w-4 md:h-4"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-zinc-800">
        <div className="container px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold">Contact Us</h2>
            <div className="mt-2 h-1 w-20 bg-amber-500 mx-auto"></div>
            <p className="mt-4 text-zinc-300 max-w-2xl mx-auto">
              Get in touch with us for all your welding and truck body repair needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12">
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-amber-500/10 p-3 rounded-lg">
                  <PhoneCall className="h-5 w-5 md:h-6 md:w-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold">Phone</h3>
                  <p className="text-zinc-300 text-sm md:text-base">+91 6355108714</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-500/10 p-3 rounded-lg">
                  <Mail className="h-5 w-5 md:h-6 md:w-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold">Email</h3>
                  <p className="text-zinc-300 text-sm md:text-base">contact@sksrepairingworks.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-500/10 p-3 rounded-lg">
                  <MapPin className="h-5 w-5 md:h-6 md:w-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold">Location</h3>
                  <p className="text-zinc-300 text-sm md:text-base">
                    Shree Kalika Show Repairing
                    <br />
                    <a
                      href="https://g.co/kgs/Dzp3ZSE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-500 hover:underline"
                    >
                      View on Google Maps
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-500/10 p-3 rounded-lg">
                  <Clock className="h-5 w-5 md:h-6 md:w-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold">Business Hours</h3>
                  <p className="text-zinc-300 text-sm md:text-base">
                    Monday - Saturday: 9:00 AM - 7:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="text-base md:text-lg font-bold mb-4">Owner</h3>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-zinc-700 flex items-center justify-center text-xl md:text-2xl font-bold text-amber-500">
                    RC
                  </div>
                  <div>
                    <p className="font-bold text-base md:text-lg">Rambaj Chauhan</p>
                    <p className="text-zinc-300 text-sm md:text-base">Proprietor</p>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              {/* <div className="mt-6 rounded-lg overflow-hidden h-[200px] sm:h-[250px] md:h-[300px] bg-zinc-700 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-zinc-400 text-sm md:text-base">Google Map Embed</p>
                  <a
                    href="https://g.co/kgs/Dzp3ZSE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0"
                  >
                    <span className="sr-only">Open in Google Maps</span>
                  </a>
                </div>
              </div> */}
              <div className="mt-6 rounded-lg overflow-hidden h-[200px] sm:h-[250px] md:h-[300px] bg-zinc-700 relative">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.781064091915!2d73.13670107384367!3d22.399609539291248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcb84428f9a71%3A0xc451f839bae6017f!2sSHRI%20KALIKA%20SHOW%20REPAIRING!5e0!3m2!1sen!2sin!4v1743979084153!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    // allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="absolute inset-0"
  ></iframe>
</div>

            </div>

            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-700">
              <h3 className="text-lg md:text-xl font-bold mb-6">Send Us a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Chat Button */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
        <a
          href="https://wa.me/916355108714"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-lg transition-colors"
          aria-label="Chat on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 md:w-7 md:h-7"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-zinc-950 py-12 md:py-16 border-t border-zinc-800">
        <div className="container px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="h-5 w-5 md:h-6 md:w-6 text-amber-500" />
                <span className="text-lg md:text-xl font-bold">SKS Repairing Works</span>
              </div>
              <p className="text-zinc-400 mb-6 text-sm md:text-base">
                Specialists in Truck Cabin Building & Body Repairing
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-amber-500 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 md:h-5 md:w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-amber-500 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 md:h-5 md:w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-amber-500 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 md:h-5 md:w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-amber-500 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 md:h-5 md:w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#home"
                    className="text-zinc-400 hover:text-amber-500 transition-colors text-sm md:text-base"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="text-zinc-400 hover:text-amber-500 transition-colors text-sm md:text-base"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-zinc-400 hover:text-amber-500 transition-colors text-sm md:text-base"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#gallery"
                    className="text-zinc-400 hover:text-amber-500 transition-colors text-sm md:text-base"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="#testimonials"
                    className="text-zinc-400 hover:text-amber-500 transition-colors text-sm md:text-base"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-zinc-400 hover:text-amber-500 transition-colors text-sm md:text-base"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold mb-4">Contact Information</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <PhoneCall className="h-4 w-4 md:h-5 md:w-5 text-amber-500 mt-0.5" />
                  <span className="text-zinc-400 text-sm md:text-base">+91 6355108714</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-4 w-4 md:h-5 md:w-5 text-amber-500 mt-0.5" />
                  <span className="text-zinc-400 text-sm md:text-base">contact@sksrepairingworks.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 md:h-5 md:w-5 text-amber-500 mt-0.5" />
                  <span className="text-zinc-400 text-sm md:text-base">
                    <a
                      href="https://g.co/kgs/Dzp3ZSE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-amber-500"
                    >
                      View on Google Maps
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-zinc-800 mt-10 md:mt-12 pt-6 text-center text-zinc-500 text-xs md:text-sm">
            <p>
              © <CopyrightYear /> Shree Kalika Show Repairing (SKS Repairing Works). All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
