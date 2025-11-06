import Image from 'next/image';
import { Facebook, MessageCircle } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-purple-200 via-white to-purple-100 text-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
          {/* Logo */}
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

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-purple-700">Useful Links</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {[
                { name: 'Home', route: '/' },
                { name: 'Programs', route: '/programs' },
                { name: 'Gallery', route: '/gallery' },
                { name: 'Contact', route: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.route}
                    className="hover:text-purple-700 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-purple-700">Courses</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {[
                { name: 'B Tech Ed. IT', route: '/programs' },
                { name: 'B Tech Ed. Civil', route: '/programs' },
                { name: 'Diploma in Civil', route: '/programs' },
                { name: 'Diploma in Agriculture', route: '/programs' },
              ].map((course) => (
                <li key={course.name}>
                  <a
                    href={course.route}
                    className="hover:text-purple-700 transition-colors"
                  >
                    {course.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-purple-700">Contact Info</h3>
            <p className="text-sm text-gray-600 leading-relaxed max-w-xs mx-auto sm:mx-0">
              Sindhuli Community Technical Institute
              <br />
              Nunthala, Sindhuli
              <br />
              <a
                href="tel:9854041424"
                className="hover:text-purple-700 block mt-1 transition-colors"
              >
                9854041424
              </a>
              
              <a
                href="mailto:scti.sindhuli@gmail.com"
                className="hover:text-purple-700 block mt-1 transition-colors"
              >
                scti.sindhuli@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 border-t border-gray-300 pt-6 text-center">
          <div className="flex justify-center gap-4 mb-4">
            {[
              {
                href: 'https://www.facebook.com/share/17P8JqtwoH/?mibextid=wwXIfr',
                icon: <Facebook size={20} />,
                bg: 'bg-gradient-to-br from-purple-500 to-purple-700 text-white',
                label: 'Facebook',
              },
              {
                href: 'https://www.tiktok.com/@scti_sindhuli?_r=1&_t=ZS-91AzLpNoN1k',
                icon: <FaTiktok size={20} />,
                bg: 'bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 text-white',
                label: 'TikTok',
              },
              {
                href: 'https://wa.me/+9779854041424',
                icon: <MessageCircle size={20} />,
                bg: 'bg-gradient-to-br from-green-400 to-green-600 text-white',
                label: 'WhatsApp',
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.bg} rounded-full p-3 hover:scale-110 transition-transform shadow-md`}
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
          <p className="text-sm text-gray-500 max-w-md mx-auto px-4 sm:px-0">
            © {currentYear} SCTI College. Designed by{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-purple-600 hover:text-purple-800 transition-colors"
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
