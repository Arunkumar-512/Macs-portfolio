import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';

import { Docs, Navbar, Welcome } from '#components'
import { Terminal } from '#windows';

gsap.registerPlugin(Draggable);
 
const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Docs />
      
      <Terminal />
    </main>
  )
}

export default App