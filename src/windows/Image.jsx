import { WindowControls } from '#components';
import WindowWrapper from '#hoc/WindowWrapper';
import useWindowStore from '#store/window';

const Image = () => {
  const { windows } = useWindowStore();

  const data = windows.imgfile?.data;

  if (!data) return null;

  const {
    name = "Image",
    imageUrl,
    image,
    img
  } = data;

  const src = imageUrl || image || img;

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2>{name}</h2>
      </div>

      <div className="p-4 bg-white flex items-center justify-center h-full">
        {src ? (
          <img
            src={src}
            alt={name}
            className="max-w-full max-h-[80vh] object-contain"
          />
        ) : (
          <p className="text-gray-400 text-center">
            Image not found
          </p>
        )}
      </div>
    </>
  );
};

const ImageWindow = WindowWrapper(Image, "imgfile");
export default ImageWindow;