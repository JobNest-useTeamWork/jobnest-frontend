import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { bookmarkDataInterface } from '../../types/bookmark';
import { HiOutlineBookmarkAlt } from "react-icons/hi";

const BookmarkedEachItem = ({bookmarkId, bookmarkOgImg, bookmarkTitle}: bookmarkDataInterface) => {
  
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({id: bookmarkId});
 
  const ogImg = (bookmarkOgImg !== "이미지 없음") ? bookmarkOgImg : null;

  return (
    <>    
      <div className="w-[180px] h-[180px] relative bg-cover bg-center border-slate-400 border-[1px] rounded-2xl"
           style={{ 
             backgroundImage: ogImg ? `url(${ogImg})` : 'none',
             backgroundSize: 'contain',
             backgroundRepeat: 'no-repeat',
             transform: CSS.Transform.toString(transform), 
             transition: transition ? transition : undefined
           }}
           ref={setNodeRef} {...attributes} {...listeners}>
        
        {!ogImg && (
          <div className="flex justify-center items-center w-full h-full">
            <HiOutlineBookmarkAlt className="w-[80px] h-[80px]" 
                                  style={{ color: '#cbd5e1', strokeWidth: '1' }}/>
          </div>
        )}
      </div>
      <span className="absolute w-[181px] h-[34px] text-center py-3">{bookmarkTitle}</span>
    </>
  );
}

export default BookmarkedEachItem;
