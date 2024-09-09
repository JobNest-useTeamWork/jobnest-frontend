import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface GridItemProps {
  id: number;
  url : string;
  img : string;
  title : string;
}

const BookmarkedEachItem = ({id,url,img,title} : GridItemProps) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  // const style = {
  //   transform: CSS.Transform.toString(transform),
  //   transition: transition ? transition : undefined,
  // };

  return(
    <>    
        <div className="w-[180px] h-[180px] relative bg-cover bg-center border-black border-[1px]"
             style={{ backgroundImage: `url(${img})`,transform: CSS.Transform.toString(transform), transition: transition ? transition : undefined}}
                        ref={setNodeRef} {...attributes} {...listeners}>
        </div>
        <button className="absolute w-[181px] h-[34px] text-center">{title}</button>
    </>

  );
}

export default BookmarkedEachItem;