
//나중에 공통으로 빼기
export const BASE_URL = "http://35.193.35.53";

export const bookmarkDataFetch = async(url : string) => {
    console.log(url);

    try {
        const response = await fetch(`${BASE_URL}/crolls`, {
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


    } catch (error) {
        console.error('Error fetching site metadata2:', error);
    }
}