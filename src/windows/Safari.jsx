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

const Safari = () => {
  return (
    <>
      {/* HEADER: Sticky on mobile to keep the "browser" feel */}
      <div 
        id='window-header' 
        className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-md border-b max-sm:fixed max-sm:top-0 max-sm:w-full max-sm:z-20 max-sm:px-2"
      >
        <WindowControls target="safari" />

        {/* Desktop Sidebar Toggle */}
        <PanelLeft className='ml-4 icon max-sm:hidden cursor-pointer hover:text-blue-500 transition-colors' />

        <div className='flex items-center gap-1 ml-3 max-sm:ml-1'>
          <ChevronLeft className='icon max-sm:w-4 max-sm:h-4' />
          <ChevronRight className='icon max-sm:w-4 max-sm:h-4 opacity-50' /> {/* Example disabled state */}
        </div>

        {/* SEARCH / ADDRESS BAR */}
        <div className='flex-1 flex items-center justify-center'>
          <div className='search group flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-1.5 w-full max-w-md transition-all focus-within:bg-white focus-within:ring-1 focus-within:ring-blue-400 max-sm:gap-1 max-sm:py-1'>
            <ShieldHalf size={14} className='text-green-600 max-sm:hidden' />
            <Search size={14} className='text-gray-400 group-focus-within:hidden' />

            <input
              type='text'
              defaultValue='arun-kumar.dev/blog'
              className='flex-1 outline-none bg-transparent text-sm max-sm:text-[10px] text-center'
            />
          </div>
        </div>

        {/* ACTIONS: Condensed for mobile */}
        <div className='flex items-center gap-3 max-sm:gap-1.5'>
          <Share size={18} className='icon max-sm:w-4 max-sm:h-4' />
          <Plus size={18} className='icon max-sm:w-4 max-sm:h-4' />
          <Copy size={18} className='icon max-sm:hidden' /> {/* Hidden on mobile to save space */}
        </div>
      </div>

      {/* BLOG CONTENT: Scrollable area */}
      <div className='blog overflow-y-auto h-full bg-white max-sm:pt-16'>
        <div className="max-w-4xl mx-auto p-8 max-sm:p-4">
          <h2 className="text-3xl font-bold mb-8 max-sm:text-2xl max-sm:mb-6">My Developer Blog</h2>

          <div className='flex flex-col gap-8 max-sm:gap-6'>
            {blogPosts.map(({ id, image, title, date, link }) => (
              <div 
                key={id} 
                className='grid grid-cols-5 gap-6 items-center max-sm:flex max-sm:flex-col max-sm:gap-3 group'
              >
                
                {/* IMAGE CONTAINER */}
                <div className='col-span-2 overflow-hidden rounded-xl bg-gray-100 border border-gray-100 shadow-sm'>
                  <img 
                    src={image} 
                    alt={title} 
                    className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* TEXT CONTENT */}
                <div className='col-span-3 flex flex-col gap-2'>
                  <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest">{date}</p>
                  <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors max-sm:text-lg">
                    {title}
                  </h3>

                  <a 
                    href={link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-black mt-2 transition-colors"
                  >
                    Read full post
                    <MoveRight size={16} className='transition-transform duration-300 group-hover:translate-x-1' />
                  </a>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

const SafariWindow = WindowWrapper(Safari, "safari")
export default SafariWindow