
export interface manageModalInterface {
    closeModal : () => void;
    //handleCheckedItems : (items : bookmarkDataInterface[]) => void;
    gridItems?: bookmarkDataInterface[]; // 부모로부터 받은 그리드 항목
}



export interface bookmarkDataInterface {
    bookmarkId : string;
    bookmarkTitle : string;
    bookmarkURL : string;
    bookmarkOgImg : string;
    checked : boolean;
}

