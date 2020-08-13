export default function swDev() {
    //For Push Notification
    const webpush = require('web-push');
    // VAPID keys should only be generated only once.
    const vapidKeys = webpush.generateVAPIDKeys();
    function urlBase64ToUint8Array(base64String) {
        const padding = '='.repeat((4 - base64String.length % 4) % 4);
        const base64 = (base64String + padding)
            .replace(/-/g, '+')
            .replace(/_/g, '/');

        const rawData = window.atob(base64);
        const outputArray = new Uint8Array(rawData.length);

        for (let i = 0; i < rawData.length; ++i) {
            outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
    }
    function determineAppServerKey() {
        var vapidPublicKey = "BAkedfRNJ-53BJuk5yUg9Ji6uR9qpJ5Jm9LF2irGwg59hF6IBTUO_NAZnk8CFmzESMfC2FJSWk1VYIakebdAVnk";
        return urlBase64ToUint8Array(vapidPublicKey);
    }
    //For Seervice worker registration
    let swDev = `${process.env.PUBLIC_URL}/sw.js`
    navigator.serviceWorker.register(swDev).then(async (response) => {
        //For Enable Notification
        const subscrition = await response.pushManager.getSubscription();
        return response.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: determineAppServerKey()
        });
    })
        .catch((err) => {
            console.log('Error', err)
        })
}   