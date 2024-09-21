import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { bookmarkDataInterface } from '../../hooks/useBookmarks';

const BookmarkedEachItem = ({bookmarkId,bookmarkOgImg,bookmarkTitle} : bookmarkDataInterface) => {
  
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({id : bookmarkId });

  return(
    <>    
        <div className="w-[180px] h-[180px] relative bg-cover bg-center border-black border-[1px]"
             style={{ backgroundImage: `url(${bookmarkOgImg})`,transform: CSS.Transform.toString(transform), transition: transition ? transition : undefined}}
                        ref={setNodeRef} {...attributes} {...listeners}>
        </div>
        <button className="absolute w-[181px] h-[34px] text-center">{bookmarkTitle}</button>
    </>

  );
}

export default BookmarkedEachItem;