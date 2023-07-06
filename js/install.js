const butInstall = document.getElementById('buttonInstall');

// Add an event handler to the 'beforeinstallprompt' event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    window.defferedPrompt = event;
    divInstall.classlist.toggle('hidden', false);
});

//Implement a click event handler on the 'butInstall' element
butInstall.addEventListener('click', async () => {
    const start = window.defferedPrompt;
    if (!start) {
        return;
    };
});

//Add an handler for the 'appinstalled' event
window.addEventListener('appinstalled', (event) => {
    window.defferedPrompt = null;
});