export const DeploymentTypes = {
    fe: 'FRONTEND',
    be: 'BACKEND',
};

export const  SourceType= {
    default:'AUTOMATEX',
    public:'PUBLIC',
    file:'FILE_UPLOAD',
    gitlab:'GITLAB',
    github:'GITHUB'
}


export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));