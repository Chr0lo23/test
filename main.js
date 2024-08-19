var unityInstance = null;

function onTelegramAuth(user) {
  console.log("User data received:", user); // Debug: Verifică datele
  if (unityInstance !== null) {
    unityInstance.SendMessage('TelegramAuthHandler', 'ProcessUserData', JSON.stringify(user));
  } else {
    console.error("Unity instance is not available.");
  }
}

document.addEventListener("DOMContentLoaded", function() {
  // Crearea instanței Unity
  createUnityInstance(document.querySelector("#unity-canvas"), {
    dataUrl: "Build/Test.data",
    frameworkUrl: "Build/Test.framework.js",
    codeUrl: "Build/Test.wasm",
    streamingAssetsUrl: "StreamingAssets",
    companyName: "DefaultCompany",
    productName: "My project (3)",
    productVersion: "0.1",
  }).then(function(instance) {
    unityInstance = instance;
  });
});
