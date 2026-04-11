import { WindowControls } from '#components';
import { gallery, photosLinks } from '#constants';
import WindowWrapper from '#hoc/WindowWrapper';
import useWindowStore from '#store/window';
import { Mail, Search } from 'lucide-react';

const Photos = () => {
  const { openWindow } = useWindowStore();

  return (
    <>
      {/* HEADER */}
      <div id='window-header'>
        <WindowControls target="photos" />

        <div className='w-full flex justify-end items-center gap-3 text-gray-500'>
          <Mail className='icon' />
          <Search className='icon' />
        </div>
      </div>

      {/* BODY */}
      <div className='flex w-full h-full'>

        {/* SIDEBAR */}
        <div className='sidebar'>
          <h2 className="text-sm font-semibold text-gray-500 mb-2">Photos</h2>

          <ul>
            {photosLinks.map(({ id, icon, title }) => (
              <li key={id}>
                <img src={icon} alt={title} />
                <p>{title}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* GALLERY */}
        <div className='gallery w-full overflow-auto'>
          <ul>
            {gallery.map(({ id, img }) => (
              <li
                key={id}
                onClick={() =>
                  openWindow("imgfile", {
                    id,
                    name: "Gallery image",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    imageUrl: img, // ✅ FIXED HERE
                  })
                }
              >
                <img
                  src={img}
                  alt={`Gallery image ${id}`}
                  className="cursor-pointer hover:scale-105 transition"
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