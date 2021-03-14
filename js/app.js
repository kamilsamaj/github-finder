// Load GitHub oauth clientid and clientsecret from locally stored file
let creds;
let github;
const ui = new UI();

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
                if (data.profile.message === 'Not Found') {
                    // show alert
                    ui.showAlert('User not found', 'alert alert-danger');
                } else {
                    console.log(data);
                    ui.showProfile(data.profile);
                }
            });
    } else {
        // Clear profile
        ui.clearProfile();
    }
});

document.getElementById('loginBtn').addEventListener('click', ev => {

});
