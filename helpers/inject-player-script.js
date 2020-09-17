function injectPlayerScript({
  context,
  onLoadCallback,
  scriptSrc,
  uniqueScriptId
}) {
  const bridPlayerScript = context.createElement("script");
  bridPlayerScript.id = uniqueScriptId;
  bridPlayerScript.src = scriptSrc;
  bridPlayerScript.onload = onLoadCallback;

  context.head.appendChild(bridPlayerScript);
}

export default injectPlayerScript;
