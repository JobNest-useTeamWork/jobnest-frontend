import { gapi } from "gapi-script";

const CLIENT_ID =
  "851060147388-buk6h7qbd73n8a5de82vh6en17h4vvr5.apps.googleusercontent.com";
const API_KEY = "AIzaSyAup6YXbC4T9H_FO62Qo2d9lXCe0ajdYcU";
const DISCOVERY_DOC =
  "https://www.googleapis.com/discovery/v1/apis/tasks/v1/rest";
const SCOPES = "https://www.googleapis.com/auth/tasks.readonly";

export const initializeGoogleAuth = () => {
  return new Promise<void>((resolve, reject) => {
    gapi.load("client:auth2", async () => {
      try {
        await gapi.client.init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: [DISCOVERY_DOC],
          scope: SCOPES,
        });
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  });
};

export const signIn = () => {
  return gapi.auth2.getAuthInstance().signIn();
};

export const signOut = () => {
  return gapi.auth2.getAuthInstance().signOut();
};

export const isSignedIn = () => {
  return gapi.auth2.getAuthInstance().isSignedIn.get();
};

export const fetchGoogleTasks = async () => {
  if (!gapi.client.tasks) {
    await gapi.client.load("tasks", "v1");
  }
  const response = await gapi.client.tasks.tasks.list({
    tasklist: "@default",
  });
  return response.result.items;
};
