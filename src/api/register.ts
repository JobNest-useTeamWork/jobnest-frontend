export const searchRegister = async (search: string, page_no: number) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/juso/search`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          juso: search,
          page_no: page_no,
        }),
      }
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("error", error);
  }
};

export const checkOpenedRegister = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/pdf-list`, {
      method: "GET",
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("error", error);
  }
};
