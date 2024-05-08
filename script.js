const url="https://api.github.com/users";
const searchText=document.getElementById("search_text");
const githubList=document.querySelector(".main_card");
const searchButton=document.querySelector("#search_btn");
var x="";
const btnn=document.querySelector("#btn");
searchButton.addEventListener("click",function(){
    x =searchText.value;
    fetchData();
    console.log("button click");
});


//  document.addEventListener("keydown",function(e){

//     search_value=e.target.value;

// })


async function fetchData(){
    // var a =searchText.value;
try{
    const response= await fetch(url);
    const result=await response.json();
    let html=[];

    result.filter((element)=> {
        console.log(x);
        if(x==="" ){
            return element;
        }
        else{
            return x=== element.login;
        }       
    }).map(element => {
        // console.log(element);
        html=html+  ` <div class="card">
        <h2>${element.login}</h2>
        <img src="${element.avatar_url}" alt="login">
    <button ><a href="${element.html_url}" target="_blank"> See more</a> </button> 
    </div>
`
    });

githubList.innerHTML=html;
}

catch(error){
    console.log("error",error);
    githubList.innerHTML= `<h2>something went wrong </h2>`;
    // console.log(error);
}    

}
const btn=document.querySelector("#btn");
window.addEventListener("load",fetchData);
// fetchData();

// btnn.addEventListener("click",fetchData);




//  const url="https://api.github.com/users";
//  const inputText=document.getElementById("search_text");
//  const rrrr=document.getElementById("rrr");
//  const btn=document.getElementById("search_btn");
//  const txt=document.getElementsByClassName("github_list");


//  btn.addEventListener("click",()=>{
//     const gitSearch=inputText.value.trim();
//     console.log(gitSearch);
//     rrrr.innerHTML+=" "+gitSearch;
//  })

//  // now fetch the api

//  async function fetchapi(){ // fetch api function

//     const response=await fetch(url);
//     const result=await response.json();
//     console.log(result);g
//  }

//  fetchapi();
