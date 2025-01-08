'use client'

import { Check, Mail, MessageCircle, MessagesSquare } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import type { GlobeMethods } from 'react-globe.gl'
import { useEffect, useRef } from 'react'

const Globe = dynamic(() => import('react-globe.gl'), { ssr: false })

export default function LandingPage() {
  const globeRef = useRef<GlobeMethods>();

  useEffect(() => {
    if (globeRef.current) {
      // Set initial rotation and appearance
      const controls = globeRef.current.controls();
      controls.enableZoom = false; // Disable zoom
      controls.enablePan = false;  // Disable panning
      controls.minDistance = 200;  // Set fixed distance
      controls.maxDistance = 200;  // Set fixed distance
      controls.autoRotate = true;  // Enable auto-rotation
      controls.autoRotateSpeed = 0.5; // Set rotation speed
      controls.enableDamping = true; // Add smooth damping effect
      controls.dampingFactor = 0.1; // Set damping factor for smooth rotation

      // Set to bright daylight appearance
      globeRef.current.pointOfView({
        altitude: 2.5,
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-6xl px-4 py-8">
        {/* Graph */}
        <div className="mb-12 h-[300px] w-full rounded-lg bg-gradient-to-b from-blue-50/50">
          <svg
            className="h-full w-full"
            viewBox="0 0 800 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,150 C100,150 200,150 300,145 C400,140 500,120 600,80 C700,40 800,20 900,0"
              stroke="rgb(59, 130, 246)"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Grow Your Career</h2>
          <p className="text-xl text-gray-600 mb-12">Join our network of talented Filipino VAs and connect with clients who value your expertise.</p>
        </div>

        {/* Countdown */}
        <div className="mb-12 flex justify-center gap-8">
          <div className="text-center">
            <div className="text-6xl font-bold text-blue-500">1</div>
            <div className="text-sm uppercase text-gray-600">Discord Community to Join</div>
            <div className="text-xs text-gray-600"></div>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold text-blue-500">7</div>
            <div className="text-sm uppercase text-gray-600">Channels for Job Updates</div>
            <div className="text-xs text-gray-600"></div>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold text-blue-500">365</div>
            <div className="text-sm uppercase text-gray-600">Days of Ongoing Projects</div>
            <div className="text-xs text-gray-600"></div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-8 text-center">
          <p className="mb-4">
            Starting <span className="font-semibold">January 1st</span>, we&apos;re opening more doors for VAs in the Philippines seeking meaningful work with businesses in the USA, NZ, and AU. VIAA&apos;s new Discord server connects you with companies looking for skilled professionals—whether you excel in lead generation, media buying, customer support, or general assistance. Our proven approach and growing network help you secure consistent opportunities and higher earnings.
          </p>
          <p className="mb-4">
            Are you a pro? We want to hear from you!
          </p>
          <p>
            Join the forward-thinking VAs already transforming how they land projects. <span className="font-semibold">Secure your spot with VIAA today</span>.
          </p>
        </div>

        {/* Contact Buttons */}
        <div className="mb-16 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="mailto:callum.viaa@gmail.com?subject=Support%20Request&body=Hi%20Callum,%0D%0A%0D%0AI%20need%20help%20with..."
            className="flex items-center justify-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Mail className="h-5 w-5" />
            <span>Email us</span>
          </a>
          <a
            href="https://wa.me/61487216747?text=Hi%20Callum,%20I%20need%20help%20with..."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
            <span>WhatsApp</span>
          </a>
          <a
            href="https://discord.gg/JMByZAMK"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#5865F2] text-white px-6 py-3 rounded-lg hover:bg-[#4752C4] transition-colors"
          >
            <MessagesSquare className="h-5 w-5" />
            <span>Discord</span>
          </a>
        </div>

        {/* Our Clients Section */}
        <div className="mt-24">
          <h2 className="text-center text-3xl font-bold text-gray-900 mb-12">Our <span className="text-blue-500">Clients</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[...Array(12)].map((_, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                {/* Default Image */}
                <Image
                  src={`/images/clients/success-story${index + 1}.png`}
                  alt={`Success Story ${index + 1}`}
                  fill
                  className="object-cover transition-opacity duration-300 group-hover:opacity-0"
                />
                {/* Hover Image */}
                <Image
                  src={`/images/clients/success-story${index + 1}-hover.png`}
                  alt={`Success Story ${index + 1} Hover`}
                  fill
                  className="object-cover absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mt-16">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">Rates</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Pro Plan */}
            <div className="rounded-xl bg-white p-8 shadow-lg ring-1 ring-gray-200 transition-all hover:shadow-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-8">Card 1</h3>
              <div className="flex items-baseline mb-8">
                <span className="text-6xl font-bold text-gray-900">$5</span>
                <span className="ml-2 text-xl text-gray-600">p/h usd</span>
              </div>
              <ul className="mt-8 space-y-4">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-blue-500" />
                  <span className="ml-2">Payments made through Wise</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-blue-500" />
                  <span className="ml-2">Same day payments</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-blue-500" />
                  <span className="ml-2">Access to Claude training</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-blue-500" />
                  <span className="ml-2">Access to ChatGPT training</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-blue-500" />
                  <span className="ml-2">Whatsapp group for daily comms</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-blue-500" />
                  <span className="ml-2">Formal Contract Agreements</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-blue-500" />
                  <span className="ml-2">Multiple/ongoing Job Opportunities</span>
                </li>
              </ul>
              <div className="mt-8">
                <a
                  href="#top"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="block w-full rounded-lg px-6 py-4 text-center text-sm font-semibold text-white transition-colors hover:bg-opacity-90"
                  style={{ backgroundColor: '#1a56db' }}
                >
                  Get Started
                </a>
              </div>
            </div>

            {/* Standard Plan */}
            <div className="rounded-xl bg-white p-8 shadow-lg ring-1 ring-gray-200 transition-all hover:shadow-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-8">Card 2</h3>
              <div className="flex items-baseline mb-8">
                <span className="text-6xl font-bold text-gray-900">$5.50</span>
                <span className="ml-2 text-xl text-gray-600">p/h usd</span>
              </div>
              <ul className="mt-8 space-y-4">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-blue-500" />
                  <span className="ml-2">Payments made through Wise</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-blue-500" />
                  <span className="ml-2">Same day payments</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-blue-500" />
                  <span className="ml-2">Access to Claude training</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-blue-500" />
                  <span className="ml-2">Access to ChatGPT training</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-blue-500" />
                  <span className="ml-2">Whatsapp group for daily comms</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-blue-500" />
                  <span className="ml-2">Formal Contract Agreements</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-blue-500" />
                  <span className="ml-2">Multiple/ongoing Job Opportunities</span>
                </li>
              </ul>
              <div className="mt-8">
                <a
                  href="#top"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="block w-full rounded-lg px-6 py-4 text-center text-sm font-semibold text-white transition-colors hover:bg-opacity-90"
                  style={{ backgroundColor: '#1a56db' }}
                >
                  Get Started
                </a>
              </div>
            </div>

            {/* Lite Plan */}
            <div className="rounded-xl bg-white p-8 shadow-lg ring-1 ring-gray-200 transition-all hover:shadow-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-8">Card 3</h3>
              <div className="flex items-baseline mb-8">
                <span className="text-6xl font-bold text-gray-900">$6</span>
                <span className="ml-2 text-xl text-gray-600">p/h usd</span>
              </div>
              <ul className="mt-8 space-y-4">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-blue-500" />
                  <span className="ml-2">Payments made through Wise</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-blue-500" />
                  <span className="ml-2">Same day payments</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-blue-500" />
                  <span className="ml-2">Access to Claude training</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-blue-500" />
                  <span className="ml-2">Access to ChatGPT training</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-blue-500" />
                  <span className="ml-2">Whatsapp group for daily comms</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-blue-500" />
                  <span className="ml-2">Formal Contract Agreements</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-blue-500" />
                  <span className="ml-2">Multiple/ongoing Job Opportunities</span>
                </li>
              </ul>
              <div className="mt-8">
                <a
                  href="#top"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="block w-full rounded-lg px-6 py-4 text-center text-sm font-semibold text-white transition-colors hover:bg-opacity-90"
                  style={{ backgroundColor: '#1a56db' }}
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Career Growth Section */}
        <div className="mt-32 relative">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mt-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Grow Your Career</h2>
              <div className="space-y-12">
                <p className="text-lg text-gray-600">
                  Join our network of talented Filipino VAs and connect with clients who value your expertise.
                </p>
                
                <div className="text-gray-700 mb-12">
                  <h3 className="text-2xl mb-6">Our expertise includes:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-600">
                      <Check className="mr-2 h-5 w-5 text-blue-500" />
                      Lead Generation Specialists
                    </li>
                    <li className="flex items-center text-gray-600">
                      <Check className="mr-2 h-5 w-5 text-blue-500" />
                      Customer Support Teams
                    </li>
                    <li className="flex items-center text-gray-600">
                      <Check className="mr-2 h-5 w-5 text-blue-500" />
                      Executive Assistants
                    </li>
                  </ul>
                </div>

                <div className="flex gap-12">
                  <div>
                    <div className="text-4xl font-bold text-blue-500">8+</div>
                    <div className="text-gray-600">Global Regions</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-blue-500">200+</div>
                    <div className="text-gray-600">Success Stories</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative aspect-square w-full overflow-hidden flex items-center justify-center bg-transparent">
              <div className="w-full h-full">
                <Globe
                  ref={globeRef}
                  globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                  bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                  width={600}
                  height={600}
                  backgroundColor="rgba(0,0,0,0)"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-24">
          <h2 className="text-center text-3xl font-bold text-gray-900 mb-12">What our <span className="text-blue-500">VA&apos;s</span> say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-gray-600 mb-6">Working with Callum at VIAA was an exceptional experience. He demonstrated outstanding hands-on support throughout the entire process, from our initial meeting through to successfully matching me with an amazing company/client. His personalized guidance and commitment to his clients&apos; success truly sets him apart.</p>
              <div className="flex items-center">
                <div>
                  <h3 className="font-semibold text-gray-900">Cydell</h3>
                  <p className="text-sm text-gray-500">Nov 10, 2024</p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-gray-600 mb-6">The interview process doesn&apos;t look or sound like an interview at all! It&apos;s just like you&apos;re talking to a friend who you haven&apos;t met for a long time and giving life updates. The process was fast—I was hired just 3 days after our get-to-know meeting! So glad I met Callum and joined his company.</p>
              <div className="flex items-center">
                <div>
                  <h3 className="font-semibold text-gray-900">Allen</h3>
                  <p className="text-sm text-gray-500">Nov 10, 2024</p>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-gray-600 mb-6">Working with VIAA is far better than working with other outsourcing agencies. Callum not only matches you with clients, but he is also there every step of the way to assist from onboarding to offboarding. He guides me and my clients, offering valuable insights. My experience with Callum has been so positive that it inspires me to keep working on building my career.</p>
              <div className="flex items-center">
                <div>
                  <h3 className="font-semibold text-gray-900">Henry</h3>
                  <p className="text-sm text-gray-500">Nov 8, 2024</p>
                </div>
              </div>
            </div>

            {/* Review 4 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-gray-600 mb-6">Choosing to work with VIAA has been one of the best career decisions I&apos;ve made. I initially hesitated when my brother recommended VIAA, as I hadn&apos;t heard of the company before. But from the moment I was interviewed by the owner, Callum, I was impressed. His genuine commitment to supporting his team is unmatched.</p>
              <div className="flex items-center">
                <div>
                  <h3 className="font-semibold text-gray-900">Ivan</h3>
                  <p className="text-sm text-gray-500">Nov 8, 2024</p>
                </div>
              </div>
            </div>

            {/* Review 5 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-gray-600 mb-6">I&apos;ve had the pleasure of working under Callum, the founder of VIAA, and it&apos;s been a truly exceptional experience. Callum genuinely cares about his team&apos;s well-being, going above and beyond to ensure everyone feels supported. He is always proactive in checking in with each team member to see if there&apos;s anything they need, which fosters a supportive and effective work environment.</p>
              <div className="flex items-center">
                <div>
                  <h3 className="font-semibold text-gray-900">Mark</h3>
                  <p className="text-sm text-gray-500">Nov 8, 2024</p>
                </div>
              </div>
            </div>

            {/* Review 6 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-gray-600 mb-6">VIAA&apos;s VAs have been instrumental for Geeknowsleads, consistently booking more client meetings and boosting LinkedIn engagement. Their proactive approach and quality service have allowed us to focus on growth, knowing our client outreach is in expert hands.</p>
              <div className="flex items-center">
                <div>
                  <h3 className="font-semibold text-gray-900">Geeno</h3>
                  <p className="text-sm text-gray-500">Nov 2, 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-24 border-t pt-12">
          <div className="grid gap-12 md:grid-cols-3">
            {/* Logo Section */}
            <div>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 2L2 7L12 12L22 7L12 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="font-bold">VIAA</span>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Scale your business with VIAA in 2025!
              </p>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="mb-4 text-sm font-semibold text-gray-600">Follow Us</h3>
              <div className="space-y-2">
                <Link 
                  href="https://www.linkedin.com/in/callum-runnerstrum-63660828b/" 
                  className="block text-sm text-gray-600 hover:text-gray-900"
                >
                  LinkedIn
                </Link>
              </div>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="mb-4 text-sm font-semibold text-gray-600">Legal</h3>
              <div className="space-y-2">
                <Link href="#" className="block text-sm text-gray-600 hover:text-gray-900">
                  Terms and Conditions
                </Link>
                <Link href="#" className="block text-sm text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t pt-8 text-center text-sm text-gray-600">
            &copy; 2025 VIAA. All rights reserved
          </div>
        </footer>
      </main>
    </div>
  )
}
