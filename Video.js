const maxchildTag =document.querySelector(".maxchild")

let apikey="AIzaSyDGhJw6Mv0-MnQG6OF-HY19etcvhPleRBQ";
let videokey = "https://www.googleapis.com/youtube/v3/videos?";
let channel = "https://www.googleapis.com/youtube/v3/channels?";

fetch( videokey+new URLSearchParams({
   key :apikey,
   part : "snippet,statistics",   
   chart : 'mostPopular',
   maxResults : 1000, 
   regionCode : "Us"
}) ).then(res => res.json())
.then( data => {  
   data.items.forEach(  item =>{
     Channelicon(item);
    console.log("iteam is",data)  
   })
   
})
.catch( (err) => {
console.log("is", err)
})

const Channelicon = (Vddata) => {
   fetch( channel+new URLSearchParams({  
      key:apikey,
      part: 'snippet',
      id: Vddata.snippet.channelId,
   
     
   }))   
   .then( res => res.json())
   .then( data => {
     
      Vddata.channelThumbnails = data.items[0].snippet.thumbnails.default.url;
      VideoArry(Vddata)
    console.log(data)
   })
}
/////////////////////////////////

let isViewMonth = "";
 

const VideoArry = (data ) => {
   if( data.statistics.viewCount < 1000000 ){
      isViewMonth =data.statistics.viewCount < 1000000 ?Math.floor(data.statistics.viewCount.toString()/1000) + "K views . 1 years ago" :data.statistics.viewCount ;
         }else if( data.statistics.viewCount  >= 1000000 ) {
            isViewMonth =data.statistics.viewCount >= 1000000 ?Math.floor(data.statistics.viewCount.toString()/ 1000000 )  + "M views 2 years ago ." :data.statistics.viewCount ;

         }


   maxchildTag.innerHTML += `
    
   
   <a class="vvts2 vvt4 iijk " href="https://youtube.com/watch?v=${data.id}" >
       <img class="childimg" src="${data.snippet.thumbnails.medium.url}" >
       <div class="VideoinfoTag">
           <h6 class="ddf channelprofail1 "><img class="videologo" src="${data.channelThumbnails}" ></h6>
           <h4 class="ddf"><span class="VideoTitle h4width">${data.snippet.title}
            <span class="view " >${data.snippet.channelTitle}</span>         
           <span class="view">${isViewMonth} </span>
       </h4>
           
            
       </div>
      
   </a>



`


}

setTimeout(() => {
   isChangeVideo('Ch')
   
},5000)
setTimeout(() => {
   isChangeVideo('Ae')
   
},9000)
setTimeout(() => {
   isChangeVideo('No')
   
},9000)
const isChangeVideo = (io) => {
   fetch( videokey+new URLSearchParams({
      key :apikey,
      part : "snippet,statistics",   
      chart : 'mostPopular',
      maxResults : 1000, 
      regionCode : io
   }) ).then(res => res.json())
   .then( data => {  
      data.items.forEach(  item =>{
        Channelicon2(item);
       console.log("iteam is",data)  
      })
      
   })
   .catch( (err) => {
   console.log("is", err)
   })
   
   const Channelicon2 = (Vddata) => {
      fetch( channel+new URLSearchParams({  
         key:apikey,
         part: 'snippet',
         id: Vddata.snippet.channelId,
      
        
      }))   
      .then( res => res.json())
      .then( data => {
        
         Vddata.channelThumbnails = data.items[0].snippet.thumbnails.default.url;
         VideoArry2(Vddata)
       console.log(data)
      })
   }
   
   
   
   let isViewMonth2 = "";
    
   
   const VideoArry2 = (data ) => {
      if( data.statistics.viewCount < 1000000 ){
         isViewMonth2 =data.statistics.viewCount < 1000000 ?Math.floor(data.statistics.viewCount.toString()/1000) + "K views . 9 month ago" :data.statistics.viewCount ;
            }else if( data.statistics.viewCount  >= 1000000 ) {
               isViewMonth2 =data.statistics.viewCount >= 1000000 ?Math.floor(data.statistics.viewCount.toString()/ 1000000 )  + "M views . 3 years ago" :data.statistics.viewCount ;
   
            }
   
   
      maxchildTag.innerHTML += `
       
      
      <a class="vvts2 vvt4 iijk " href="https://youtube.com/watch?v=${data.id}" >
          <img class="childimg" src="${data.snippet.thumbnails.medium.url}" >
          <div class="VideoinfoTag">
              <h6 class="ddf channelprofail1 "><img class="videologo" src="${data.channelThumbnails}" ></h6>
              <h4 class="ddf"><span class="VideoTitle h4width">${data.snippet.title}
               <span class="view " >${data.snippet.channelTitle}</span>         
              <span class="view">${isViewMonth2} </span>
          </h4>
              
               
          </div>
         
      </a>
   
   
   
   `
   
   
   }
};











const Video =  [
   {
  "id"    : 1 ,
"Video" : " fontend.jpg",
"videoName" : " Myanmar Web Developer - Episode 94 - Summary ",
"channelName" :  " MSquare Programming  " ,
"ViewMonth" : " 3.1K views . 10 months ago ",
"Videolink" : " https://youtu.be/9HmpcMnpHJE ",
"ChannelPprofail" : "Msquare.jpg  ",

   },
 {
   "id"    : 2 ,
"Video" : " mrbestisland.png ",
"videoName" : " I Gave My 100,000,000th Subscriber An Island ",
"channelName" :  "  MrBeast" ,
"ViewMonth" : " 53M views . 9 days ago ",
"Videolink" : " https://youtu.be/2isYuQZMbdU ",
"ChannelPprofail" : " MrBeastprofail.jpg ",
 },
 {
   "id"    : 3 ,
    "Video" : " justinbaber.jpg ",
    "videoName" : " Justin Bieber - Baby (Official Music Video) ft. Ludacris ",
    "channelName" :  "  Justin Bieber" ,
    "ViewMonth" : " 2.8B views . 12 years ago",
    "Videolink" : "  https://youtu.be/kffacxfA7G4 ",
    "ChannelPprofail" : " justambaberprofail.jpg ",
     },
 {
   "id"    : 4 ,
        "Video" : " derniere.jpg",
        "videoName" : " Indila - Dernière Danse (Clip Officiel) ",
        "channelName" :  " Indila" ,
        "ViewMonth" : "  911M views . 8 years ago ",
        "Videolink" : "  https://youtu.be/K5KAc5CoCuk ",
        "ChannelPprofail" : " derniereprofail.jpg ",
 },
 {
   "id"    : 5 ,
    "Video" : " Mafia.jpg",
    "videoName" : " *MAFIA* | Aggressive Mafia Trap Rap Beat Instrumental | Mafya Müziği | Prod by Pasha Music",
    "channelName" :  "Pasha Music " ,
    "ViewMonth" : " 32M views . 2 years ago",
    "Videolink" : " https://youtu.be/hrEu_1sHgI4 ",
    "ChannelPprofail" : " Medifamusic.jpg ",
     },
     {
      "id"    : 6 ,
        "Video" : "Dhara.jfif  ",
        "videoName" : " DHARIA - Sugar & Brownies (by Monoir) [Official Video] ",
        "channelName" :  "Thrace Music" ,
        "ViewMonth" : " 431M views . 3 years ago",
        "Videolink" : "  https://youtu.be/y2tEPmwWEiI ",
        "ChannelPprofail" : "dharaprofail.jpg ",
         },

         {
            "id"    : 7 ,
            "Video" : " 4kvideo.jpg ",
            "videoName" : " WhistlinDiesel's TT Lamborghini x TT R8 [4K] ",
            "channelName" :  " Woyshnis Media " ,
            "ViewMonth" : " 822K views . 3 months ago",
            "Videolink" : " https://youtu.be/Y4DLlC3clPU ",
            "ChannelPprofail" : " 4k.jpg ",
             },

             {
               "id"    : 8 ,
                "Video" : " AngelFalls.jpg ",
                "videoName" : " Venezuela | Cinematic FPV over Angel Falls ",
                "channelName" :  " Ellis van Jason" ,
                "ViewMonth" : " 521K views . 1 year ago ",
                "Videolink" : " https://youtu.be/oetS-gGjaSM  ",
                "ChannelPprofail" : " FPVAngel.jpg ",
                 },

  {
   "id"    : 9 ,
   "Video" : "failsprofail.jpg ",
   "videoName" : "EXPENSIVE FAILS! ",
 "channelName" :  " CubeHub01" ,
  "ViewMonth" : "6.2M views . 1 month ago ",
   "Videolink" : " https://youtu.be/wA5JDqSXZXI  ",
   "ChannelPprofail" : "Fails.jpg ",
    },
    {
      "id"    : 10 ,
        "Video" : "HackingMovie2.jpg ",
        "videoName" : " Best Hacking Scenes In Movies ",
        "channelName" :  "MovieZ4U" ,
        "ViewMonth" : " 2.2M views . 3 years ago",
        "Videolink" : " https://youtu.be/j7BVMYcdPxs ",
        "ChannelPprofail" : "HackingMovie.jpg ",
         },
 {
   "id"    : 11 ,
"Video" : "babydriver.jpg ",
"videoName" : "Ploua - XZEEZ Remix (Baby Driver) ",
"channelName" :  " Mr. Yash Official " ,
"ViewMonth" : " 57M views . 4 months ago",
"Videolink" : " https://youtu.be/BfrzqEBA5mo  ",
"ChannelPprofail" : "babydriverpro.jpg ",
 },
 {
   "id"    : 12 ,
    "Video" : "Alexander.jpg ",
    "videoName" : " Alexander Rybak - Fairytale (Ambassador TikTok Remix) Shang Chi [Fight Scene] ",
    "channelName" :  " GANGSTER CITY " ,
    "ViewMonth" : "41M views . 4 months ago ",
    "Videolink" : " https://youtu.be/jpDYA7lTKIU   ",
    "ChannelPprofail" : "Ganster.jpg ",
 },
 {
   "id"    : 13 ,
    "Video" : " lovely.jfif ",
    "videoName" : " Billie Eilish, Khalid - lovely",
    "channelName" :  " Billie Eilish " ,
    "ViewMonth" : "1.6B views . 4 years ago ",
    "Videolink" : " https://youtu.be/V1Pl8CzNzCw ",
    "ChannelPprofail" : " billie.jpg ",
 },
 {
   "id"    : 14 ,
    "Video" : "HackerLambo.jpg ",
    "videoName" : "Meg & Dia - Monster (Starix Remix) / La Casa De Papel Free Fire / Money Heist ",
    "channelName" :  "GANGSTER CITY " ,
    "ViewMonth" : "21M views . 1 year ago ",
    "Videolink" : " https://youtu.be/rKDRPVWtHuw ",
    "ChannelPprofail" : " Ganster.jpg ",
 },

 {
   "id"    : 15 ,
   "Video" : " jssummary.jpg ",
   "videoName" : " Myanmar Web Developer - Episode 60 - JavaScript Summary   ",
   "channelName" :  "  MSquare Programming " ,
   "ViewMonth" : " 13M views . 1 year ago  ",
   "Videolink" : "  https://youtu.be/piFE4NGY1BQ ",
   "ChannelPprofail" : " Msquare.jpg ",
   
      },
      {
         "id"    : 16 ,
         "Video" : " ybsvieo.jpg",
         "videoName" : " I Survived 36 Hours In A Transparent Kayak ",
         "channelName" :  "   YBS Youngbloods " ,
         "ViewMonth" : "1.3M views . 7 days ago  ",
         "Videolink" : " https://youtu.be/-Qd0JdXpSuo ",
         "ChannelPprofail" : " ybs.jpg  ",
         
            },
 {
   "id"    : 17 ,
   "Video" : " gtr.jfif ",
   "videoName" : " Flame Spitting R35 GTR in [4K]  ",
   "channelName" :  " Woyshnis Media " ,
   "ViewMonth" : " 5.4M views . 1 year ago  ",
   "Videolink" : " https://youtu.be/vlDOjTaaEdA ",
   "ChannelPprofail" : " 4k.jpg   ",
   
      },
      
      {
         "id"    : 18 ,
         "Video" : " nicereact.jpg",
         "videoName" : " React Course - Beginner's Tutorial for React JavaScript Library [2022] ",
         "channelName" :  " freeCodeCamp.org " ,
         "ViewMonth" : "1.3M views . 7 months ago  ",
         "Videolink" : " https://youtu.be/bMknfKXIFA8 ",
         "ChannelPprofail" : "free.org.jpg  ",
         
            },      
            {
               "id"    : 19 ,
               "Video" : "iitztimmy.jpg ",
               "videoName" : " THE EVA IS BACK.. AND BROKEN??s ",
               "channelName" :  " iiTzTimmy " ,
               "ViewMonth" : " 374K views . 1 day ago  ",
               "Videolink" : " https://youtu.be/smyccdz66Uws ",
               "ChannelPprofail" : " timmy.jpg  ",
               
                  },      
                  {
                    "id"    : 20 ,
                    "Video" : " msquaresalary.jpg",
                    "videoName" : " Popular အဖြစ်ဆုံး Programming Languages နှင့် လစာ ",
                    "channelName" :  "  MSquare Programming  " ,
                    "ViewMonth" : " 45K views . 2 years ago  ",
                    "Videolink" : " https://youtu.be/h3P2df0WtdIs ",
                    "ChannelPprofail" : " Msquare.jpg  ",
                    
                       },




                          {
               "id"    : 21 ,
               "Video" : " git.jpg ",
               "videoName" : " Myanmar Web Developer - Episode 104 - Git merge ",
               "channelName" :  "  MSquare Programming  " ,
               "ViewMonth" : " 9M views . 8 days ago  ",
               "Videolink" : " https://youtu.be/c5fwYgBZzKE",
               "ChannelPprofail" : " Msquare.jpg  ",
               
                  },
                  {
                    "id"    : 22 ,
                    "Video" : " uk.jpg ",
                    "videoName" : "Epic FPV Drone Flying UK! ",
                    "channelName" :  "  Magic FPVo  ",
                    "ViewMonth" : " 1M views . 7 months ago",
                    "Videolink" : " https://youtu.be/nsI2eMFEvkc",
                    "ChannelPprofail" : "  mgfpv.jpg ",
                    
                       },
                       {
                        "id"    : 23 ,
                     "Video" : " mrbestshark.jpg",
                     "videoName" : " Would You Swim With Sharks For $100,000?",
                     "channelName" :  "  MrBeast" ,
                     "ViewMonth" : " 82M views . 4 months ago",
                     "Videolink" : " https://youtu.be/2isYuQZMbdU ",
                     "ChannelPprofail" : " MrBeastprofail.jpg ",
                      },
]



let changelineindex = 0 ;

   Video.forEach(  videos => {
    
      maxchildTag.innerHTML += `
       
      
      <a class="vvts2 vvt4 iijk " href="${videos.Videolink}" >
          <img class="childimg" src="${videos.Video}" >
          <div class="VideoinfoTag">
              <h6 class="ddf channelprofail1 "><img class="videologo" src="${videos.ChannelPprofail}" ></h6>
              <h4 class="ddf"><span class="VideoTitle h4width">${videos.videoName}
               <span class="view " >${videos.channelName}</span>         
              </span> <span class="view"> ${videos.ViewMonth}</span>
          </h4>
              
               
          </div>
         
      </a>
   
   
   
   `
   
   
   
   
   });





