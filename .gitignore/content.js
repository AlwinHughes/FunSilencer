
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
	document.getElementById('backgroundAudio').muted = true; 
	document.getElementById('backgroundAudioButton').remove();
});
