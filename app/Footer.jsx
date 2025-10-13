import Image from 'next/image';
import { Facebook, Mail, MessageCircle } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Dynamically get the current year

  return (
    <footer className="bg-purple-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
          <div className="flex justify-center sm:justify-start">
            <div className="relative w-32 h-32">
              <Image
                src="https://i.ibb.co/99tSZyY0/scti-logo.jpg"
                alt="SCTI Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Useful Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {[
                { name: 'Home', route: '/' },
                { name: 'Programs', route: '/programs' },
                { name: 'Gallery', route: '/gallery' },
                { name: 'Announcement', route: '/announcements' },
                { name: 'Contact', route: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.route} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Courses</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {[
                { name: 'B tech Ed. IT', route: '/programs' },
                { name: 'B tech Ed. Civil', route: '/programs' },
                { name: 'Diploma in Civil', route: '/programs' },
                 { name: 'Diploma in Agriculture', route: '/programs' },
               
              ].map((course) => (
                <li key={course.name}>
                  <a href={course.route} className="hover:text-white transition-colors">
                    {course.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <p className="text-sm text-gray-300 leading-relaxed max-w-xs mx-auto sm:mx-0">
              Sindhuli Community Technical Institute
              <br />
              Nunthala, Sindhuli
              <br />
              <a
                href="tel:047520365"
                className="hover:text-yellow-300 block mt-1 transition-colors"
              >
                047520365
              </a>
              <a
                href="tel:+9779843546519"
                className="hover:text-yellow-300 block mt-1 transition-colors"
              >
                +977-9843546519
              </a>
              <a
                href="tel:+977981656877"
                className="hover:text-yellow-300 block mt-1 transition-colors"
              >
                +977-981656877
              </a>
              <a
                href="mailto:scti.sindhuli@gmail.com"
                className="hover:text-yellow-300 block mt-1 transition-colors"
              >
                scti.sindhuli@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <div className="flex justify-center gap-4 mb-4">
            {[
              {
                href: 'https://www.facebook.com/profile.php?id=100053642767299',
                icon: <Facebook size={20} />,
                bg: 'bg-[#1877F2]',
                label: 'Facebook',
              },
              {
                href: 'https://www.tiktok.com/@scti_sindhuli?_t=ZS-8zRVmsXaZzG&_r=1',
                icon: <FaTiktok size={20} />,
                bg: 'bg-gradient-to-br from-pink-500 to-purple-600',
                label: 'TikTok',
              },
              {
                href: 'https://wa.me/+9779843546519',
                icon: <MessageCircle size={20} />,
                bg: 'bg-[#25D366]',
                label: 'WhatsApp',
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.bg} rounded-full p-2 hover:scale-105 transition-transform`}
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
          <p className="text-xs text-gray-400 max-w-md mx-auto px-4 sm:px-0">
            © {currentYear} SCTI College. Designed by{' '}
            <a
              
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition-colors"
            >
              Muna Basnet
            </a>
          
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;