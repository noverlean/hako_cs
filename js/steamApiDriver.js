let d = {
    apiKey: 'CR92TRMYKUJ2K1F7',
    userProfileId: "76561199095238169",
    gameId: 730,
}

function generateUrl(userProfileId = d.userProfileId)
{
    return `https://www.steamwebapi.com/steam/api/profile?id=${userProfileId}&key=${d.apiKey}`; 
}
// https://cors-anywhere.herokuapp.com/
async function getUserProfile()
{
    let url = generateUrl();
    const response = await fetch(url, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "Content-Type": "application/json",
            // "Access-Control-Allow-Origin": "http://127.0.0.1",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        // referrerPolicy: "strict-origin-when-cross-origin", // no-referrer, *client
        // body: JSON.stringify(data), // body data type must match "Content-Type" header
    });

    return await response.json();
    // return {"response":{"players":[{"steamid":"76561199095238169","communityvisibilitystate":3,"profilestate":1,"personaname":"-HAKO","commentpermission":1,"profileurl":"https://steamcommunity.com/id/ha_ko/","avatar":"https://avatars.steamstatic.com/ea5ddb514a41d18fd6076e4b37f22639e8cb36bd.jpg","avatarmedium":"https://avatars.steamstatic.com/ea5ddb514a41d18fd6076e4b37f22639e8cb36bd_medium.jpg","avatarfull":"https://avatars.steamstatic.com/ea5ddb514a41d18fd6076e4b37f22639e8cb36bd_full.jpg","avatarhash":"ea5ddb514a41d18fd6076e4b37f22639e8cb36bd","lastlogoff":1739307674,"personastate":0,"primaryclanid":"103582791472765557","timecreated":1601578155,"personastateflags":0}]}};
}

async function getPlayTime()
{
    return {"response":{"game_count":5,"games":[{"appid":365670,"playtime_forever":715,"playtime_windows_forever":715,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1732963260,"playtime_disconnected":0},{"appid":863550,"playtime_forever":31,"playtime_windows_forever":31,"playtime_mac_forever":0,"playtime_linux_forever":1,"playtime_deck_forever":0,"rtime_last_played":1674424927,"playtime_disconnected":0},{"appid":730,"playtime_2weeks":2652,"playtime_forever":138016,"playtime_windows_forever":131600,"playtime_mac_forever":0,"playtime_linux_forever":6413,"playtime_deck_forever":0,"rtime_last_played":1739476558,"playtime_disconnected":893},{"appid":2923300,"playtime_forever":358,"playtime_windows_forever":358,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1732788416,"playtime_disconnected":1},{"appid":2977660,"playtime_forever":13,"playtime_windows_forever":13,"playtime_mac_forever":0,"playtime_linux_forever":0,"playtime_deck_forever":0,"rtime_last_played":1719416789,"playtime_disconnected":0}]}};
}