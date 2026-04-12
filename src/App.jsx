import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

import { Docs, Home, Navbar, Welcome } from "#components";
import {
  Contact,
  Finder,
  Image,
  Photos,
  Resume,
  Safari,
  Terminal,
  Text,
  Archive
} from "#windows";

import useWindowStore from "#store/window";

gsap.registerPlugin(Draggable);

const App = () => {
  const { windows } = useWindowStore();

  return (
    <main>
      <Navbar />
      <Welcome />
      <Docs />

      {/* 🔥 ONLY RENDER WHEN OPEN */}
      {windows.terminal.isOpen && <Terminal />}
      {windows.safari.isOpen && <Safari />}
      {windows.resume.isOpen && <Resume />}
      {windows.finder.isOpen && <Finder />}
      {windows.txtfile.isOpen && <Text />}
      {windows.imgfile.isOpen && <Image />}
      {windows.contact.isOpen && <Contact />}
      {windows.photos.isOpen && <Photos />}
      {windows.archive.isOpen && <Archive />}

      <Home />
    </main>
  );
};

export default App;
