
// for other than windows and mac
var isdesk = (navigator.userAgent.match(/Win32|Win64|Windows|Macintosh|MacIntel|MacPPC|Mac68K/i)); 
// window.addEventListener('resize', upme); 
function upme()
{
    // checks if user is on a desktop device 
    if(window.matchMedia("(min-width: 615px)").matches && !isdesk)
    {
        document.getElementById("Web_1920__1").style.height = "2216px";
        document.getElementById("Web_1920__1").style.paddingBottom = "0px";
        document.getElementById("arts-con-id").style.position = "absolute";
        timer4 = setInterval(function() { // console.log("meme here"); 
        document.getElementById("arts-con-id").style.height = "6712px"; }, 0);
        setTimeout(() => { clearInterval(timer4); }, 4500); 
        document.getElementById("arts-con-id").style.overflowX = "hidden";
        document.getElementById("arts-con-id").style.overflowY = "scroll";
        document.getElementById("arts-con-id").style.paddingBottom = "0px";
        document.getElementById("main-art-id").style.position = "absolute";
        document.getElementById("footer-id").style.display = "block";
        document.getElementById("footer-id").style.position = "absolute";
        document.getElementById("footer-id").style.top = "7562px";
        document.getElementById("out-cmnt").style.top = "7074px";
        document.getElementById("ads-vertical-two").style.display = "none";
        document.getElementById("hoty-blnk").style.display = "none";
        document.getElementById("top-pos").style.display = "none";
        console.log("defer-dom-loaded"); 
    } 
}
upme(); // calling the upme function 

function scrollmethod() 
{
	if (window.matchMedia("(max-width: 615px)").matches) 
    { mybutton = document.getElementById("scroll-top-button"); }
    if (document.documentElement.scrollTop > 200) { mybutton.style.display = "block"; } 
    if (window.matchMedia("(max-height: 496px)").matches) { mybutton.style.display = "none"; } 
    if (document.documentElement.scrollTop < 200) { mybutton.style.display = "none"; }  
}
function scrolltotop() { window.scrollTo({ top: 0, behavior: 'smooth' }); } 

   function buttonfxd()
   { 	   
   	  document.getElementById("Web_1920__1").style.visibility = "visible";
   	  document.getElementById("top-check").style.visibility = "hidden";
   	  if (window.matchMedia("(max-width: 615px)").matches) 
   	  {
        const mypage = window.innerWidth * 0.12;
        const pagebot = window.innerWidth * 0.167;
        const pageright = window.innerWidth * 0.04;
        document.getElementById("scroll-top-button").style.setProperty('--set-size', mypage + "px");
        document.getElementById("scroll-top-button").style.setProperty('--set-bottom', pagebot + "px");
        document.getElementById("scroll-top-button").style.setProperty('--set-right', pageright + "px");
      }
      if (window.matchMedia("(max-width: 415px)").matches)
   	  {
        const mypage = window.innerWidth * 0.14;
        const pagebot = window.innerWidth * 0.190;
        const pageright = window.innerWidth * 0.04;
        document.getElementById("scroll-top-button").style.setProperty('--set-size', mypage + "px");
        document.getElementById("scroll-top-button").style.setProperty('--set-bottom', pagebot + "px");
        document.getElementById("scroll-top-button").style.setProperty('--set-right', pageright + "px");
      }
      if (window.matchMedia("(max-width: 415px)").matches && window.matchMedia("(max-height: 745px)").matches) 
   	  {
        const mypage = window.innerWidth * 0.13;
        const pagebot = window.innerWidth * 0.16;
        const pageright = window.innerWidth * 0.04;
        document.getElementById("scroll-top-button").style.setProperty('--set-size', mypage + "px");
        document.getElementById("scroll-top-button").style.setProperty('--set-bottom', pagebot + "px");
        document.getElementById("scroll-top-button").style.setProperty('--set-right', pageright + "px");
      }
   }

   timer1 = setInterval(buttonfxd, 500);
   setTimeout(() => { clearInterval(timer1); }, 5000);
   // window.addEventListener('resize', buttonfxd, false);

    function adsheights() {  
    // var checkh = window.innerWidth; 
    const feedAds = document.querySelectorAll('.feed-com');
    const displayAds = document.querySelectorAll('.dis-com'); 
    const media1 = window.matchMedia("(max-width: 615px)").matches; 
    const media2 = window.matchMedia("(min-width: 615px)").matches; 

    feedAds.forEach((feedAd, index) => {
    const feedAdHeight = feedAd.clientHeight;
    const nextbrele = feedAd.nextElementSibling;
    if (media1) { feedAd.style.setProperty('--set-margin', feedAdHeight + "px"); }
    if (media2) { feedAd.style.removeProperty('--set-margin'); }
    if (feedAdHeight > 10 && media1) { nextbrele.style.display = 'none'; }
    if (feedAdHeight < 10) { nextbrele.style.display = 'block'; } }); 

    displayAds.forEach((displayAd, index) => {
    const displayAdHeight = displayAd.clientHeight; 
    const nextelement = displayAd.nextElementSibling; 
    if (media1) { displayAd.style.setProperty('--set-margin', displayAdHeight + "px"); }
    if (media2) { displayAd.style.removeProperty('--set-margin'); }
    if (displayAdHeight > 10 && media1) { nextelement.style.display = 'none'; }
    if (displayAdHeight < 10) { nextelement.style.display = 'block'; } }); 
    /* console.log("here here"); */ }

   timer3 = setInterval(adsheights, 0);
   setTimeout(() => { clearInterval(timer3); }, 5000);
   setTimeout(() => { setInterval(() => { adsheights(); buttonfxd(); }, 1000); }, 5000); 
   // window.addEventListener('scroll', adsheights, false); 

