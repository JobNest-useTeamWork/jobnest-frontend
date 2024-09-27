import {
  GoogleLogin,
  CredentialResponse,
  useGoogleLogin,
} from "@react-oauth/google";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { CalendarEvent } from "../types/todotypes";

const CALENDAR_URL = "https://www.googleapis.com/calendar/v3/calendars";
const TOKEN_URL = "https://oauth2.googleapis.com/token";
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET;
const REDIRECT_URL = import.meta.env.VITE_DOMAIN_URL;

export const getUserEmail = (): string => {
  const token = localStorage.getItem("googleToken");
  if (token) {
    const decodedToken = jwtDecode<{ email: string }>(token);
    return decodedToken.email;
  }

  console.log("No token found");
  return "";
};

export const getGoogleCalendarList = async (
  token: string
): Promise<unknown> => {
  try {
    const response = await axios.get(
      `${CALENDAR_URL}/users/me/calendarList?access_token=${token}`
    );
    console.log(response);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getGoogleCalendarEvents = async (
  token: string,
  calendarId: string
): Promise<unknown> => {
  try {
    const response = await axios.get(
      `${CALENDAR_URL}/${calendarId}/events?access_token=${token}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllEvents = async (
  token: string,
  calendarId: string
): Promise<CalendarEvent[]> => {
  try {
    const response = await axios.get(
      `${CALENDAR_URL}/${calendarId}/events?access_token=${token}`
    );
    return response.data.items;
  } catch (error) {
    // TODO: implement get access token from refresh token
    console.log(error);
    throw error;
  }
};

export const createGoogleCalendarEvent = async (
  token: string,
  calendarId: string,
  event: CalendarEvent
) => {
  const response = await axios.post(
    `${CALENDAR_URL}/${calendarId}/events?access_token=${token}`,
    event
  );
  return response.data;
};

export const updateGoogleCalendarEvent = async (
  token: string,
  calendarId: string,
  eventId: string,
  event: CalendarEvent
) => {
  const response = await axios.put(
    `${CALENDAR_URL}/${calendarId}/events/${eventId}?access_token=${token}`,
    event
  );
  return response.data;
};

export const deleteGoogleCalendarEvent = async (
  token: string,
  calendarId: string,
  eventId: string
) => {
  const response = await axios.delete(
    `${CALENDAR_URL}/${calendarId}/events/${eventId}?access_token=${token}`
  );
  return response.data;
};

export const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem("googleRefreshToken");
  if (!refreshToken) {
    console.error("No refresh token available");
    return null;
  }

  try {
    const response = await axios.post(TOKEN_URL, {
      content_type: "application/x-www-form-urlencoded",
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      refresh_token: refreshToken,
      grant_type: "refresh_token",
    });
    console.log("Refresh Token Response:", response.data);
    const newToken = response.data.access_token;
    localStorage.setItem("googleToken", newToken);
    return newToken;
  } catch (error) {
    console.error("Error refreshing access token:", error);
    return null;
  }
};

export const GoogleLoginComponent = () => {
  const googleLogin = useGoogleLogin({
    flow: "auth-code",
    scope: "https://www.googleapis.com/auth/calendar",
    onSuccess: async (codeResponse) => {
      let access_token = localStorage.getItem("googleAccessToken");
      if (!access_token) {
        const tokenResponse = await axios.post(TOKEN_URL, {
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
          code: codeResponse.code,
          grant_type: "authorization_code",
          redirect_uri: REDIRECT_URL,
        });
        const { access_token: newAccessToken, refresh_token } =
          tokenResponse.data;
        console.log(newAccessToken);
        access_token = newAccessToken;
        localStorage.setItem("googleAccessToken", newAccessToken);
        localStorage.setItem("googleRefreshToken", refresh_token);
      }
    },
    onError: (errorResponse) => console.log(errorResponse),
  });

  return (
    <GoogleLogin
      auto_select={true}
      onSuccess={(credentialResponse: CredentialResponse) => {
        console.log(credentialResponse);
        if (credentialResponse.credential) {
          localStorage.setItem("googleToken", credentialResponse.credential);
          localStorage.setItem(
            "googleRefreshToken",
            credentialResponse.credential
          );
          googleLogin();
        }
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};
