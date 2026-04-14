import { WindowControls } from '#components'
import { blogPosts } from '#constants'
import WindowWrapper from '#hoc/WindowWrapper'
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  MoveRight,
  PanelLeft,
  Plus,
  Search,
  Share,
  ShieldHalf
} from 'lucide-react'
import clsx from 'clsx'

const Safari = () => {
  return (
    <div className="flex flex-col h-full bg-white overflow-hidden">
      {/* HEADER */}
      <div 
        id='window-header' 
        className="flex items-center gap-2 px-4 py-2 bg-gray-50/80 backdrop-blur-md border-b shrink-0 z-20"
      >
        <WindowControls target="safari" />

        <PanelLeft className='ml-4 icon max-sm:hidden cursor-pointer hover:text-blue-500 transition-colors' />

        <div className='flex items-center gap-1 ml-3 max-sm:ml-1'>
          <ChevronLeft className='icon max-sm:size-3.5' />
          <ChevronRight className='icon max-sm:size-3.5 opacity-30' />
        </div>

        {/* SEARCH / ADDRESS BAR */}
        <div className='flex-1 flex items-center justify-center'>
          <div className='group flex items-center gap-2 bg-gray-200/50 rounded-lg px-3 py-1.5 w-full max-w-md transition-all focus-within:bg-white focus-within:ring-1 focus-within:ring-blue-400 max-sm:py-0.5'>
            <ShieldHalf size={12} className='text-green-600 max-sm:hidden' />
            <Search size={12} className='text-gray-400' />
            <input
              type='text'
              readOnly
              value='arun-kumar.dev/blog'
              className='flex-1 outline-none bg-transparent text-[13px] max-sm:text-[10px] text-center font-medium text-gray-600'
            />
          </div>
        </div>

        <div className='flex items-center gap-3 max-sm:gap-2'>
          <Share size={16} className='icon' />
          <Plus size={16} className='icon' />
          <Copy size={16} className='icon max-sm:hidden' />
        </div>
      </div>

      {/* BLOG CONTENT */}
      <div className='flex-1 overflow-y-auto custom-scrollbar bg-white'>
        <div className="max-w-3xl mx-auto p-8 max-sm:p-5">
          <div className="mb-10 max-sm:mb-6">
            <h2 className="text-3xl font-extrabold text-gray-900 max-sm:text-xl tracking-tight">
              Developer Blog
            </h2>
            <p className="text-gray-500 text-sm mt-1 max-sm:text-xs">Thoughts on Code & Design</p>
          </div>

          <div className='flex flex-col gap-10 max-sm:gap-6'>
            {blogPosts.map(({ id, image, title, date, link }) => (
              <div 
                key={id} 
                className='grid grid-cols-12 gap-6 items-start max-sm:flex max-sm:items-center max-sm:gap-4 group cursor-pointer'
                onClick={() => window.open(link, "_blank")}
              >
                
                {/* IMAGE CONTAINER - Sized down for mobile */}
                <div className='col-span-4 max-sm:w-20 max-sm:h-20 max-sm:shrink-0 overflow-hidden rounded-xl bg-gray-50 border border-gray-100 shadow-sm'>
                  <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full aspect-square sm:aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* TEXT CONTENT */}
                <div className='col-span-8 flex flex-col gap-1 max-sm:flex-1'>
                  <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">{date}</p>
                  <h3 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors max-sm:text-sm max-sm:line-clamp-2">
                    {title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 mt-2 max-sm:hidden">
                    Read Story
                    <MoveRight size={14} className='transition-transform duration-300 group-hover:translate-x-1' />
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scrollbar styling */}
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #cbd5e1; }
      `}} />
    </div>
  )
}

const SafariWindow = WindowWrapper(Safari, "safari")
export default SafariWindow