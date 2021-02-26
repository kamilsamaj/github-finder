class GitHub {
    constructor(clientid, clientsecret, idsecretb64) {
        this.clientid = clientid;
        this.clientsecret = clientsecret;
        this.idsecretb64 = idsecretb64;
    }

    async getUser(user) {
        const profileResponse = await fetch(
            `https://api.github.com/users/${user}`,
            {
                headers: {
                    'Authorization': `Basic ${this.idsecretb64}`
                }
            }
        );

        const profile = await profileResponse.json();

        return {
            profile
        };
    }
}
