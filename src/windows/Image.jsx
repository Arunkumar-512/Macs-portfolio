import { WindowControls } from '#components';
import WindowWrapper from '#hoc/WindowWrapper';
import useWindowStore from '#store/window'
import React from 'react'

const Image = () => {
  const { windows } = useWindowStore();

  // ✅ FIX: access file properly
  const file = windows.imgfile?.data?.file;

  if (!file) return null;

  return (
    <>
      <div id='window-header'>
        <WindowControls target="imgfile" />
        <h2>{file.name}</h2>
      </div>

      <div className='p-5 bg-white'>
        {file.imageUrl && (
          <div className='w-full'>
            <img 
              src={file.imageUrl}
              alt={file.name}
              className='w-full h-auto max-h-[70vh] object-contain rounded' 
            />
          </div>
        )}
      </div>
    </>
  )
}

const ImageWindow = WindowWrapper(Image, "imgfile")
export default ImageWindow;