// Load GitHub oauth clientid and clientsecret from locally stored file
let creds;
let github;

(async function loadGitHubClient() {
    const response = await fetch('secrets.json');
    creds = await response.json();
    console.debug('GitHub Client Credentials loaded');
    github = new GitHub(creds["github"]["clientid"], creds["github"]["clientsecret"]);
})();

document.getElementById('searchUser').addEventListener('keyup', ev => {
    const userText = ev.target.value;

    if (userText !== '') {
        github.getUser(userText)
            .then(data => {
                console.log(data);
            });
    }
});

document.getElementById('loginBtn').addEventListener('click', ev => {

});
