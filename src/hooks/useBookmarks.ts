import { bookmarkDataInterface } from "../types/bookmark";

const PERSONAL_BOOKMARKS_KEY = 'personalBookmarks';



//get BookmarkList
export const getBookmarks = () : bookmarkDataInterface[] => {
    const savedBookmarks = localStorage.getItem(PERSONAL_BOOKMARKS_KEY);
    return savedBookmarks ? JSON.parse(savedBookmarks) : [];
}

//save bookmarks
export const saveBookmarks = (bookmarks : bookmarkDataInterface[]) => {
    console.log("Saving bookmarks:", bookmarks); // 저장하려는 데이터를 확인
    localStorage.setItem(PERSONAL_BOOKMARKS_KEY, JSON.stringify(bookmarks));
    return bookmarks;
}
