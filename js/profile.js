let userProfile = {
    id: 0,
    avatarUrl: '',

}

loadUserProfile()
async function loadUserProfile()
{
    let response = await getUserProfile();
    let userProfile = response.response.players[0];
    console.log(userProfile);

    document.getElementById('avatar').style.backgroundImage = `url(${userProfile.avatarfull})`;
    document.getElementById('nickname').innerText = userProfile.personaname;
}

