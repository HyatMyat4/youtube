const TopSearchTag = document.querySelector(".TopSearch");
const ResultContainerTag = document.querySelector(".ResultContainer");
const SearchiconTag = document.querySelector(".Searchicon");
const secondTopTag =document.querySelector(".secondTop");
const videoiteamcontainerTag =document.getElementsByClassName("videoiteamcontainer")[0];
const productNameTag =document.getElementsByClassName("productName")[0];
const searchresultmidcontainerTag =document.querySelector(".searchresultmidcontainer");
const masterresultTag =document.querySelector(".masterresult");
let inputValue = "" ;
let  filterVideoName = [] ;
TopSearchTag.addEventListener("keyup", (event) => {
    
if ( 
event.key === "ArrowDown" ||
event.key === "ArrowUp" ||
event.key === "Enter" 
  ) {   
navigatevideo(event.key);
return;
};
ResultContainerTag.innerHTML = "" ;
inputValue =event.target.value.toLowerCase();
if(inputValue.length === 0  ) {
return
}
filterVideoName = Video.filter( (Videosz) => {    
return Videosz.channelName.toLowerCase().includes(inputValue);

});
const VideoToshow  = filterVideoName.length > 0 ;
if ( VideoToshow ) {
    
    for(let i = 0 ; i < filterVideoName.length ; i++) {
        
        const videoiscontainer =document.createElement("div")
        videoiscontainer.id = filterVideoName[i].id;
        videoiscontainer.classList.add("videoiteamcontainer")
      

        const VideoisName =document.createElement("div")
        VideoisName.classList.add("productName");
        VideoisName.append(filterVideoName[i].channelName)

        const videoimage =document.createElement("img")
        videoimage.classList.add("isvdimg")
        videoimage.src= filterVideoName[i].Video;

        videoiscontainer.append(VideoisName,videoimage)
        ResultContainerTag.append(videoiscontainer);
    }
   
}
});

let indextoselect = -1 ;
const navigatevideo = (key) => {
if (key === "ArrowDown"   ) {    
    indextoselect += 1 ;    
const videotoselect = filterVideoName[indextoselect].id.toString();
const videotoselectcontainer =document.getElementById(videotoselect)
console.log(videotoselectcontainer)
}else if ( key === "ArrowUp"  ) {
   

}else{

    
}

}
const searchlink = "https://www.youtube.com/results?search_query="
SearchiconTag.addEventListener("click", (event  ) => {
    if( TopSearchTag.value.length  ) {
        location.href = searchlink+ TopSearchTag.value;
        ResultContainerTag.innerHTML = "" ;
        TopSearchTag.value = "" ;
    
    }
   
  
   console.log(inputValue) 
  
});
TopSearchTag.addEventListener("keypress",(e) => {
if(e.key === 'Enter' ){
    if (TopSearchTag.value.length) {
        location.href = searchlink+ TopSearchTag.value;
        ResultContainerTag.innerHTML = "" ;
        TopSearchTag.value = "" ;
    }
   
}

})
ResultContainerTag.addEventListener("click", (event) => {
   let resultid = event.target.id.toString() ;   
    console.log(resultid)
    ResultContainerTag.innerHTML = "" ;
    TopSearchTag.value = "" ;
    maxchildTag.classList.add("searchnone") 
    secondTopTag.classList.add("searchnone")
    searchresultmidcontainerTag.classList.remove("searchnone")   

   
   filterVideonext2id = Video.filter( (Videosz1) => {    
            return  Videosz1.id.toString() == resultid ;
            
            });
   
        console.log("is finish",filterVideonext2id)

       masterresultTag.innerHTML += `
       <a class="vvts2 resultwidth" href="${filterVideonext2id[0].Videolink}" >
       <img class="childimg" src=" ${filterVideonext2id[0].Video} " >      
       <div class="textconmtainer">
           <span class="isblocking isname ">${filterVideonext2id[0].videoName} </span> 
           <span class="isblocking viewstopmargin">${filterVideonext2id[0].channelName}</span>
           <div class="imgchannelname">
               <img class="videologo isinline videologo2" src="${filterVideonext2id[0].ChannelPprofail}" >
               <span class="view isinline channename" >${filterVideonext2id[0].channelName}</span>   
           </div>
           
       </div>       
          
    
    
    `
Video.forEach( vvd => {
    
    masterresultTag.innerHTML += `
       <a class="vvts2 resultwidth" href="${vvd.Videolink}" >
       <img class="childimg" src=" ${vvd.Video} " >      
       <div class="textconmtainer">
           <span class="isblocking isname ">${vvd.videoName} </span> 
           <span class="isblocking viewstopmargin">${vvd.channelName}</span>
           <div class="imgchannelname">
               <img class="videologo isinline videologo2" src="${vvd.ChannelPprofail}" >
               <span class="view isinline channename" >${vvd.channelName}</span>   
           </div>
           
       </div>       
          
    
    
    `

});



/*SearchiconTag.addEventListener("click", () => {
    console.log("it working")


})*/
  




      





})
