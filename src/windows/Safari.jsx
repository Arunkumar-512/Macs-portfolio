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
      {/* HEADER */}
      <div id='window-header' className="max-sm:px-2 max-sm:gap-2">
        <WindowControls target="safari" />

        <PanelLeft className='ml-4 icon max-sm:hidden' />

        <div className='flex items-center gap-1 ml-3 max-sm:ml-1'>
          <ChevronLeft className='icon max-sm:w-4' />
          <ChevronRight className='icon max-sm:w-4' />
        </div>

        {/* SEARCH */}
        <div className='flex-1 flex items-center gap-2 max-sm:gap-1'>
          <ShieldHalf className='icon max-sm:hidden' />

          <div className='search'>
            <Search className='icon max-sm:w-4' />

            <input
              type='text'
              placeholder='Search'
              className='flex-1'
            />
          </div>
        </div>

        {/* ACTIONS */}
        <div className='flex items-center gap-3 max-sm:gap-2'>
          <Share className='icon max-sm:w-4' />
          <Plus className='icon max-sm:w-4' />
          <Copy className='icon max-sm:w-4' />
        </div>
      </div>

      {/* BLOG */}
      <div className='blog'>
        <h2>My Developer Blog</h2>

        <div className='space-y-6 max-sm:space-y-4'>
          {blogPosts.map(({ id, image, title, date, link }) => (
            <div key={id} className='blog-post'>
              
              <div className='col-span-2'>
                <img src={image} alt={title} />
              </div>

              <div className='content'>
                <p>{date}</p>
                <h3>{title}</h3>

                <a href={link} target="_blank" rel="noreferrer">
                  check out the full post
                  <MoveRight className='icon-hover' />
                </a>
              </div>

            </div>
          ))}
        </div>
      </div>
    </>
  )
}

const SafariWindow = WindowWrapper(Safari, "safari")
export default SafariWindow