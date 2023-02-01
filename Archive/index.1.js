const express= require("express");
const bodyParser= require("body-parser");
const axios = require('axios');
const scan = require('./routes/scan');

const app= express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');


const port= process.env.port || 4000;
app.use('/scan', scan);
// let baseUrl= "";
// let perPage= 2;
// let page= 1;
// let totalData;
// let errorMessage= '';

// app.get('/', (req, res) => {
//     try{
//         const completeUrl = `${req.protocol}://${req.hostname}:${port}`;
//         baseUrl= completeUrl;
//         res.render('index', {errorMessage, baseUrl, data:'', searchTerm: '', token: ''})
//     }catch(e){
//         errorMessage= e.message;
//     }
// })

// app.post('/git-action', async (req, res) =>{
//     try{
//         let {searchTerm, token}= req.body;
        
//         let gitRepoList= await searchApiCall(token, searchTerm, perPage, page);

//         totalData= gitRepoList.data.total_count;
        
//         res.render('index', {baseUrl, totalData, data: gitRepoList.data, searchTerm, token, current: page, pages: Math.ceil(totalData / perPage)})
//     }catch(e){
//         errorMessage= e.message;
//     }
    
    
// })

// app.get('/git-pagination/:page/:searchTerm/:token', async (req, res) =>{
//     try{
//         let {page,searchTerm, token}= req.params;
       
//         let gitRepoList= await searchApiCall(token, searchTerm, perPage, page);
        
//         res.render('index', {baseUrl, totalData, data: gitRepoList.data, searchTerm, token, current: page, pages: Math.ceil(totalData / perPage)});
//     }catch(e){
//         errorMessage= e.message;     
//     }
    
    
// })

// const searchApiCall= async (token, searchTerm, perPage, page) =>{
//     return new Promise(async (resolve, reject) =>{
//         try{
//             let options = {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                     Accept:'application/vnd.github+json'
//                 }
//             };
    
//             let gitRepoList= await axios.get(`https://api.github.com/search/repositories?q=${searchTerm}&&per_page=${perPage}&&page=${page}`, options);
//             resolve(gitRepoList);

//         }catch(e){
//             reject(e);
//         }
       

//     })
// }

app.listen(port, () => {
    console.log(`Listening port ${port}`);
    
})