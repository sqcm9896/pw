var push = require('web-push')

let vapidKeys = {
    publicKey: 'BBq19UH0kWsNfQo9l2Pwo3Kfwg_HKBPhmC60G_EImg5NMKunzG2ZgD86d9JNan12Wc0ipRTrHKgbQHYM2RHQYXo',
    privateKey: 'gBmt1QlBlqzWye65LJWVeEz1WXe2iHWG9O1KpyAkqzM'
}

push.setVapidDetails('mailto:a.moustafa93@hotmail.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {};
push.sendNotification(sub, 'test_Message');