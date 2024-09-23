import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { bookmarkDataInterface } from '../../types/bookmark';
import  defaultLogoImg from "../../assets/logo.png";


const BookmarkedEachItem = ({bookmarkId,bookmarkOgImg,bookmarkTitle} : bookmarkDataInterface) => {
  
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({id : bookmarkId });
  const imgUrl = (bookmarkOgImg === "URL 없음") ? defaultLogoImg : bookmarkOgImg ;

  return(
    <>    
        <div className="w-[180px] h-[180px] relative bg-cover bg-center border-black border-[1px] rounded-lg"
             style={{ backgroundImage: `url(${imgUrl})`,
                      backgroundSize: 'contain', // 이미지를 컨테이너에 맞추기
                      backgroundRepeat: 'no-repeat', // 반복 방지
                      transform: CSS.Transform.toString(transform), 
                      transition: transition ? transition : undefined
                    }}
                        ref={setNodeRef} {...attributes} {...listeners}>
        </div>
        <button className="absolute w-[181px] h-[34px] text-center">{bookmarkTitle}</button>
    </>

  );
}

export default BookmarkedEachItem;