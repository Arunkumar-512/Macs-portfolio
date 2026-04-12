import { WindowControls } from '#components'
import { socials } from '#constants'
import WindowWrapper from '#hoc/WindowWrapper'

const Contact = () => {
  return (
    <>
      {/* HEADER */}
      <div id='window-header'>
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>

      {/* CONTENT */}
      <div className='contact-body'>
        
        {/* PROFILE */}
        <div className='profile'>
          <img 
            src='/images/bunty2.jpeg' 
            alt='Arun' 
            className='avatar'
          />

          <h3>Let's Connect</h3>

          <p className='desc'>
            Got an idea? A bug to squash? Or just wanna talk tech? I'm in.
          </p>

          <p className='email'>
            arunkumar283512@gmail.com
          </p>
        </div>

        {/* SOCIALS */}
        <ul className='socials'>
          {socials.map(({ id, bg, link, icon, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a
                href={link}
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={icon} alt={text} />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>

      </div>
    </>
  )
}

const ContactWindow = WindowWrapper(Contact, "contact")
export default ContactWindow