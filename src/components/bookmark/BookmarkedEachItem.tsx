import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { bookmarkDataInterface } from '../../types/bookmark';


const BookmarkedEachItem = ({bookmarkId,bookmarkOgImg,bookmarkTitle} : bookmarkDataInterface) => {
  
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({id : bookmarkId });
 

  return(
    <>    
        <div className="w-[180px] h-[180px] relative bg-cover bg-center border-black border-[1px] rounded-lg"
             style={{ backgroundImage: `url(${bookmarkOgImg})`,
                      backgroundSize: 'contain', // 이미지를 컨테이너에 맞추기
                      backgroundRepeat: 'no-repeat', // 반복 방지
                      transform: CSS.Transform.toString(transform), 
                      transition: transition ? transition : undefined
                    }}
                        ref={setNodeRef} {...attributes} {...listeners}>
        </div>
        <span className="absolute w-[181px] h-[34px] text-center py-3">{bookmarkTitle}</span>
    </>

  );
}

export default BookmarkedEachItem;