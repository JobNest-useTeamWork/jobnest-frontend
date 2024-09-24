
export const bookmarkDataFetch = async(url : string) => {
 
    try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/crolls`, {
            method : 'POST',
            headers : {
                'Content-Type': 'application/json',
            },
            body : JSON.stringify({url})
        });

        if(!response.ok) {
            throw new Error(`Failed to fetch metadata1: ${response.status}`);
        }

        const data = await response.json();
        console.log('Fetched metadata:', data);

        //HTML parsing -> 썸네일, 이름 추출
        const parser = new DOMParser();
        const doc = parser.parseFromString(data.result, 'text/html');

         // XPath로 title 태그 추출
         const title = doc.evaluate('//title', doc, null, XPathResult.STRING_TYPE, null).stringValue || '제목 없음';

         // XPath로 og:url 메타 태그 추출
         const ogUrl = doc.evaluate('//meta[@property="og:url"]/@content', doc, null, XPathResult.STRING_TYPE, null).stringValue || 'URL 없음';
 
         // XPath로 og:image 메타 태그 추출
         const ogImage = doc.evaluate('//meta[@property="og:image"]/@content', doc, null, XPathResult.STRING_TYPE, null).stringValue || '이미지 없음';
 
        //  console.log('Title:', title);
        //  console.log('OG URL:', ogUrl);
        //  console.log('OG Image:', ogImage);
         return {
            bookmarkId : Date.now().toString(),
            bookmarkTitle : title, 
            bookmarkURL : ogUrl, 
            bookmarkOgImg : ogImage
         };


    } catch (error) {
        console.error('Error fetching site metadata2:', error);
    }
}