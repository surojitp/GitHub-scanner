const axios = require('axios');

exports.scanApi = async (page, token, per_page) => {
    return new Promise(async (resolve, reject) =>{
        let perPage= per_page ? per_page : 2;
        try{
            let options = {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept:'application/vnd.github+json'
                }
            };

            // let gitRepoList= await axios.get(`https://api.github.com/search/repositories?q=${searchTerm}&&per_page=${perPage}&&page=${page}`, options);
            let gitRepoList= await axios.get(`https://api.github.com/user/repos?per_page=${perPage}&&page=${page}`, options);
            
            resolve(gitRepoList.data);

        }catch(e){
            reject(e);
        }
    })
}

exports.workflowApi = async (user, repo, token) => {
    return new Promise(async (resolve, reject) =>{
        try{
            let options = {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept:'application/vnd.github+json'
                }
            };
            
            let gitWorkflow= await axios.get(`https://api.github.com/repos/${user}/${repo}/actions/workflows`, options);
            
            resolve(gitWorkflow.data);

        }catch(e){
            reject(e);
        }
    })
}