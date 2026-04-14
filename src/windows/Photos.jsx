import { WindowControls } from '#components';
import { gallery, photosLinks } from '#constants';
import WindowWrapper from '#hoc/WindowWrapper';
import useWindowStore from '#store/window';
import { Mail, Search } from 'lucide-react';

const Photos = () => {
  const { openWindow } = useWindowStore();

  return (
    <>
      {/* HEADER: Standardized height and mobile positioning */}
      <div id='window-header' className="flex items-center justify-between px-4 py-2 bg-white/80 backdrop-blur-md border-b max-sm:fixed max-sm:top-0 max-sm:w-full max-sm:z-10">
        <WindowControls target="photos" />

        <div className='flex justify-end items-center gap-4 text-gray-500'>
          <Search size={18} className='cursor-pointer hover:text-blue-500 transition-colors' />
          <Mail size={18} className='cursor-pointer hover:text-blue-500 transition-colors' />
        </div>
      </div>

      {/* BODY: Responsive Flex Direction */}
      {/* Added max-sm:pt-14 to account for the fixed mobile header */}
      <div className='flex w-full h-full flex-row max-sm:flex-col max-sm:pt-14'>

        {/* SIDEBAR: Horizontal scroll on mobile, vertical on desktop */}
        <div className='sidebar'>
          <h2>Photos</h2>
          <ul>
            {photosLinks.map(({ id, icon, title }) => (
              <li 
                key={id} 
                className={id === 'library' ? 'active' : ''} // Example: marking first item active
              >
                <img src={icon} alt={title} />
                <p>{title}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* GALLERY: Independent scroll area */}
        <div className='gallery'>
          <ul>
            {gallery.map(({ id, img }) => (
              <li
                key={id}
                className="relative group"
                onClick={() =>
                  openWindow("imgfile", {
                    id,
                    name: "Gallery image",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    imageUrl: img,
                  })
                }
              >
                <img
                  src={img}
                  alt={`Gallery image ${id}`}
                  loading="lazy"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const PhotosWindow = WindowWrapper(Photos, "photos");
export default PhotosWindow;