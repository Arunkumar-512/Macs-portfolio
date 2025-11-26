import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';

import { Docs, Navbar, Welcome } from '#components'
import {  Contact, Finder, Image, Resume, Safari, Terminal,Text } from '#windows';

gsap.registerPlugin(Draggable);
 
const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Docs />
      
      <Terminal />
      <Safari />
      <Resume />

      <Finder />
      <Text />
      <Image />
      <Contact />
    </main>
  )
}

export default App