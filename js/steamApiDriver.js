let apiKey = 'AB44F70760666744F75F355E1AA1A255';

let d = {
    userProfileId: "76561199095238169",
    gameId: 730,
    version: 1,
    interface: "ISteamUserStats",
}

function generateUrl(interface = d.interface, method = d.method, version = d.version, userProfileId = d.userProfileId)
{
    return `https://cors-anywhere.herokuapp.com/http://api.steampowered.com/${interface}/${method}/v000${version}/?key=${apiKey}&steamids=${userProfileId}`; 
}

async function getUserProfile()
{
    // let url = generateUrl("ISteamUser", "GetPlayerSummaries", 2);
    // const response = await fetch(url, {
    //     method: "GET", // *GET, POST, PUT, DELETE, etc.
    //     mode: "cors", // no-cors, *cors, same-origin
    //     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    //     headers: {
    //         "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    //         "Content-Type": "application/json",
    //         // "Access-Control-Allow-Origin": "http://127.0.0.1",
    //         // 'Content-Type': 'application/x-www-form-urlencoded',
    //     },
    //     // referrerPolicy: "strict-origin-when-cross-origin", // no-referrer, *client
    //     // body: JSON.stringify(data), // body data type must match "Content-Type" header
    // });

    // return await response.json();
    return {"response":{"players":[{"steamid":"76561199095238169","communityvisibilitystate":3,"profilestate":1,"personaname":"-HAKO","commentpermission":1,"profileurl":"https://steamcommunity.com/id/ha_ko/","avatar":"https://avatars.steamstatic.com/ea5ddb514a41d18fd6076e4b37f22639e8cb36bd.jpg","avatarmedium":"https://avatars.steamstatic.com/ea5ddb514a41d18fd6076e4b37f22639e8cb36bd_medium.jpg","avatarfull":"https://avatars.steamstatic.com/ea5ddb514a41d18fd6076e4b37f22639e8cb36bd_full.jpg","avatarhash":"ea5ddb514a41d18fd6076e4b37f22639e8cb36bd","lastlogoff":1739307674,"personastate":0,"primaryclanid":"103582791472765557","timecreated":1601578155,"personastateflags":0}]}};
}