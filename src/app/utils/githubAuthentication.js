// utils/githubAuthentication.js

const initiateGitHubAuthentication = () => {
    const clientId = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;
    console.log('GitHub Client ID:', clientId);

    const redirectUri = encodeURIComponent(`${window.location.origin}/user/createWithGithub`);

    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user`;

    window.location.href = githubAuthUrl;
};

export default initiateGitHubAuthentication;

