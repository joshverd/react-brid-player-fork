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
  // CheckGet all script elements from the document
  const allScriptElements = Array.from(document.getElementsByTagName('script'));

  const doesScriptAlreadyExist = allScriptElements.some(script => {
    if(script.src === scriptSrc) return true;

    return false;
  });

  // If the script already exists, no need to inject it again. Just run the callback function
  //
  // Originally, we did not have this check in place. Without it, loading this script in repeatedly will be a memory leak and can cause the site to run out of memory and crash.
  if(doesScriptAlreadyExist) return onLoadCallback();

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
  const player = window.$bp;

  if(player) player(playerID)?.destroy();
}
