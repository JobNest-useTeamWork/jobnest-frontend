
const PERSONAL_BOOKMARKS_KEY = 'personalBookmarks';

export interface BookmarkInterface {
    id : number;
    url : string;
    img : string;
    title : string;
}

//get BookmarkList
export const getBookmarks = () : BookmarkInterface[] => {
    const savedBookmarks = localStorage.getItem(PERSONAL_BOOKMARKS_KEY);
    return savedBookmarks ? JSON.parse(savedBookmarks) : [];
}

//save bookmarks
export const saveBookmarks = (bookmarks : BookmarkInterface[]) => {
    localStorage.setItem(PERSONAL_BOOKMARKS_KEY, JSON.stringify(bookmarks));
    return bookmarks;
}
