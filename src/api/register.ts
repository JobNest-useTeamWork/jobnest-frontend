import { SearchRegisterInputs } from "../types/register";

const BASE_URL = "http://35.193.35.53";

export const searchRegister = async (search: SearchRegisterInputs) => {
  search.address = "궁동 401-2";

  try {
    const response = await fetch(`${BASE_URL}/juso/search`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        juso: search.address,
        page_no: 5,
      }),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("error", error);
  }
};

export const checkOpenedRegister = async () => {
  try {
    const response = await fetch(`${BASE_URL}/pdf-list`, {
      method: "GET",
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("error", error);
  }
};
