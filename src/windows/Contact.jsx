import { WindowControls } from '#components'
import { socials } from '#constants'
import WindowWrapper from '#hoc/WindowWrapper'
import clsx from 'clsx'

const Contact = () => {
  return (
    <div className="flex flex-col h-full bg-white/90 backdrop-blur-md overflow-hidden">
      {/* HEADER: Always stays at the top */}
      <div 
        id='window-header' 
        className="flex items-center px-4 py-2 border-b bg-gray-50/50 shrink-0"
      >
        <WindowControls target="contact" />
        <h2 className="text-sm font-bold text-gray-700 ml-4">Contact Me</h2>
      </div>

      {/* BODY: Scrollable area */}
      <div className="flex-1 overflow-y-auto custom-contact-scrollbar">
        <div className='contact-body p-8 max-sm:p-6 flex flex-col items-center'>
          
          {/* PROFILE */}
          <div className='profile flex flex-col items-center text-center max-w-sm'>
            <div className="relative group">
              <img 
                src='/images/bunty2.jpeg' 
                alt='Arun' 
                className='avatar w-24 h-24 max-sm:w-20 max-sm:h-20 rounded-full object-cover border-4 border-white shadow-lg transition-transform duration-500 group-hover:scale-105'
              />
              <div className="absolute inset-0 rounded-full shadow-inner pointer-events-none" />
            </div>

            <h3 className="text-xl font-extrabold mt-4 text-gray-900 max-sm:text-lg tracking-tight">
              Let's Connect
            </h3>

            <p className='desc text-sm text-gray-500 mt-2 leading-relaxed max-sm:text-xs'>
              Got an idea? A bug to squash? Or just wanna talk tech? I'm in.
            </p>

            <a 
              href="mailto:arunkumar283512@gmail.com"
              className='email mt-4 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold hover:bg-blue-100 transition-colors border border-blue-100'
            >
              arunkumar283512@gmail.com
            </a>
          </div>

          {/* SOCIALS: Adaptive Grid */}
          <ul className='socials grid grid-cols-2 max-sm:grid-cols-1 gap-3 w-full mt-10 max-sm:mt-8'>
            {socials.map(({ id, bg, link, icon, text }) => (
              <li 
                key={id} 
                className="rounded-xl overflow-hidden shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
                style={{ backgroundColor: bg }}
              >
                <a
                  href={link}
                  target='_blank'
                  className="flex items-center gap-3 px-4 py-3 text-white no-underline"
                  rel='noopener noreferrer'
                >
                  <img src={icon} alt={text} className="w-5 h-5 object-contain brightness-0 invert" />
                  <p className="text-sm font-bold tracking-wide">{text}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-contact-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-contact-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-contact-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
        .custom-contact-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #cbd5e1;
        }
      `}} />
    </div>
  )
}

const ContactWindow = WindowWrapper(Contact, "contact")
export default ContactWindow