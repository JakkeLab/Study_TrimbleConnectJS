import * as TC from "./node_modules/trimble-connect-workspace-api/dist/es/trimbleconnect.workspace.api.js";

console.log("+API+");

const API = await TC.connect(
  document.getElementById("viewer"),
  (event, args) => {
    console.log(event, args);
  }
);

const tokenActivated = "";

const connectReuslt = await API.embed.setTokens({
  accessToken: tokenActivated,
});

const initViewResult = await API.embed.init3DViewer({
  projectId: "",
});
