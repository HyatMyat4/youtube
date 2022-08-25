const menulineTag =document.querySelector(".menuline");
const inlineTag =document.querySelector(".inline")
const SideBarTag =document.querySelector(".SideBar")
const topimgcontainerTag =document.querySelector(".top-imgcontainer")
const marginleftTag =document.querySelector(".marginleft")
const VideoContainerChildTag =document.querySelector(".VideoContainerChild")
const sidebar2Tag =document.querySelector(".sidebar2")
const MainVideoContainerTag =document.querySelector(".MainVideoContainer")
let counterEvent = 0 ;
topimgcontainerTag.addEventListener("click", () => {
    sidebar2Tag.classList.remove("sidebar2none");
    menulineTag.classList.add("paddinganimation");
    inlineTag.classList.remove("anaimationnone");
    SideBarTag.classList.add("displayezfix")    
    MainVideoContainerTag.classList.add("MainVideoContainer2")
    VideoContainerChildTag.classList.add("ischangewidth337")
     counterEvent += 1 ;
     
if (counterEvent === 2  ) {    
    sidebar2Tag.classList.add("sidebar2none");
        menulineTag.classList.remove("paddinganimation");
        inlineTag.classList.add("anaimationnone");
        SideBarTag.classList.remove("displayezfix")     
        MainVideoContainerTag.classList.remove("MainVideoContainer2")    
        VideoContainerChildTag.classList.remove("ischangewidth337")
    counterEvent = 0 ;

}
});
 


const AllTagName = [
{"TagName" : "Gaming",
"Taglink" : "https://www.youtube.com/results?search_query=Gamimg"
},
{"TagName" :  "Live" ,
"Taglink" : "https://www.youtube.com/results?search_query=Lives"
 },
{"TagName" :  "Css" ,
"Taglink" : ""
},
{"TagName" :  "Building",
"Taglink" : ""
 },
{"TagName" :  "RacingWheel",
"Taglink" : ""
 },
{"TagName" :  "Supercar", 
"Taglink" : ""},
{"TagName" :  "Sportcar",
"Taglink" : "" 
 },
{"TagName" :   "Drawing",
"Taglink" : ""
},
{"TagName" :  "Trucks",
"Taglink" : ""
},
{"TagName" :  "Valorant",
"Taglink" : ""
},
{"TagName" :  "Unboxing",
"Taglink" : ""
},
{"TagName" :  "Computer Application",
"Taglink" : ""
},
{"TagName" :  "Comsumer Electronics",
"Taglink" : ""
},
{"TagName" :  "Minecraft",
"Taglink" : ""
},

]

AllTagName.forEach(element => {
    marginleftTag.innerHTML += `

    <a class="change" href="${element.Taglink}">
    <div class="Allbutton topcolourz ">
        ${element.TagName}
       </div>                   
</a>

`
});




