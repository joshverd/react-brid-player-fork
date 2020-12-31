export default {
  injectPlayerScript,
  removeBridPlayerInstance,
}

function injectPlayerScript(
  {
    onLoadCallback,
    scriptSrc,
    uniqueScriptID,
  } : {
    onLoadCallback: () => void,
    scriptSrc: string,
    uniqueScriptID: string,
  },
) {
  // Create a script element
  const bridPlayerScript = document.createElement('script');

  // Set the script element's tags
  bridPlayerScript.id = uniqueScriptID;
  bridPlayerScript.src = scriptSrc;
  bridPlayerScript.onload = onLoadCallback;

  // Add the script to the HTML <head>
  document.head.appendChild(bridPlayerScript);
}

function removeBridPlayerInstance(playerID: string) {
  window.$bp(playerID)?.destroy(true);

  delete window.$bp;
}
