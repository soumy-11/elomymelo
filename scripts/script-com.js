
console.log("async-check"); 
function changeover()
{
  document.getElementById("CATEGORIES").style.color = "rgba(0,0,0,1)";
  document.getElementById("Rectangle_9").style.fill = "rgba(255,119,119,1)";
  document.getElementsByClassName("Rectangle_9")[0].style.filter = "drop-shadow(0px 15px 40px rgba(255,119,119,0.6))";
  document.getElementById("cat-menu").style.visibility = "visible";
  document.getElementById("about-me-main").style.visibility = "hidden";
  document.getElementById("ABOUT_ME").style.color = "";
  document.getElementById("Rectangle_7").style.fill = "";
  document.getElementsByClassName("Rectangle_7")[0].style.filter = "";
  document.getElementById("REVIEWS").style.color = "";
  document.getElementById("Rectangle_8").style.fill = "";
  document.getElementsByClassName("Rectangle_8")[0].style.filter = "";
  document.getElementById("reviews-main").style.visibility = "hidden";
  document.getElementById("cat-cross").style.visibility = "visible";
  document.getElementById("about-cross").style.visibility = "hidden";
  document.getElementById("reviews-cross").style.visibility = "hidden";
  document.getElementById("menu-pointer").style.visibility = "visible";
  document.getElementById("menu-pointer-review").style.visibility = "hidden";
  document.getElementById("menu-pointer-about").style.visibility = "hidden";
}
function changeout() {  }

function catclickmainappear()
{
  document.getElementById("cat-menu").style.visibility = "visible";
}
function reviewclickmainappear()
{
  document.getElementById("reviews-main").style.visibility = "visible";
}
function aboutclickmainappear()
{
  document.getElementById("about-me-main").style.visibility = "visible";
}

function changefirst()
{
  document.getElementById("ABOUT_ME").style.color = "rgba(0,0,0,1)";
  document.getElementById("Rectangle_7").style.fill = "rgba(255,119,119,1)";
  document.getElementsByClassName("Rectangle_7")[0].style.filter = "drop-shadow(0px 15px 40px rgba(255,119,119,0.6))";
  document.getElementById("about-me-main").style.visibility = "visible";
  document.getElementById("cat-menu").style.visibility = "hidden";
  document.getElementById("submenu-phones").style.visibility = "hidden";
  document.getElementById("submenu-speakers").style.visibility = "hidden";
  document.getElementById("submenu-earbuds").style.visibility = "hidden";
  document.getElementById("submenu-accessories").style.visibility = "hidden";
  document.getElementById("CATEGORIES").style.color = "";
  document.getElementById("Rectangle_9").style.fill = "";
  document.getElementsByClassName("Rectangle_9")[0].style.filter = "";
  document.getElementById("REVIEWS").style.color = "";
  document.getElementById("Rectangle_8").style.fill = "";
  document.getElementsByClassName("Rectangle_8")[0].style.filter = "";
  document.getElementById("reviews-main").style.visibility = "hidden";
  document.getElementById("about-cross").style.visibility = "visible";
  document.getElementById("cat-cross").style.visibility = "hidden";
  document.getElementById("reviews-cross").style.visibility = "hidden";
  document.getElementById("speakers-style").style.border = "";
  document.getElementById("earbuds-style").style.border = "";
  document.getElementById("phones-style").style.border = "";
  document.getElementById("accessories-style").style.border = "";
  document.getElementById("menu-pointer").style.visibility = "hidden";
  document.getElementById("menu-pointer-review").style.visibility = "hidden";
  document.getElementById("menu-pointer-about").style.visibility = "visible";
}
function changesecond() {  }

function scrollmethod() 
{
	  if (window.matchMedia("(max-width: 615px)").matches) 
    { mybutton = document.getElementById("scroll-top-button"); }
    if (document.documentElement.scrollTop > 200) { mybutton.style.display = "block"; } 
    if (window.matchMedia("(max-height: 496px)").matches) { mybutton.style.display = "none"; } 
    if (document.documentElement.scrollTop < 200) { mybutton.style.display = "none"; }  
}

  var timer = null; 
  function scrolltrick() 
  { doso(); if(timer !== null) { clearTimeout(timer); }
  timer = setTimeout(function() { doso(); }, 2000); }
  setTimeout(doso, 3000); // setTimeout(doso, 0); 

  // adding the event listeners 
  window.addEventListener('scroll', scrolltrick, false); 
  window.addEventListener('resize', doso, false); 

  var isdesk = (navigator.userAgent.match(/Win32|Win64|Windows|Macintosh|MacIntel|MacPPC|Mac68K/i)); 
  if(!isdesk) { window.removeEventListener('scroll', scrolltrick, false);
  window.removeEventListener('resize', doso, false); }

  function doso()
  {
    lopp = document.getElementById("Web_1920__1");
    hope = lopp.clientHeight; const meme = document.body.scrollHeight;
    const keke = hope/meme; const scsc = window.scrollY;
    var scmx = (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    // console.log("meme scroll-height = ", meme); console.log("scsc scroll-y = ", scsc); 
    // console.log("scmx max-scroll-y = ", scmx);   

    var innr = window.innerHeight; // console.log("innr inner-height = ", innr);
    var scbb = scmx - scsc; var finn = scsc * keke; 
    var nunn = scbb * keke; var cscs = innr * keke; 
    var alttrigr = 8924/keke - innr; // console.log(keke);
    var topo = nunn + cscs - 250;
    
    if (window.matchMedia("(min-width: 615px)").matches) 
    {
        document.getElementById("footer-id").style.display = "block";
    }
    if (window.matchMedia("(max-width: 615px)").matches) 
    {
        document.body.style.transform = "none";
        document.getElementById("footer-id").style.display = "none";
    }
    if (window.matchMedia("(min-width: 1041px)").matches && window.matchMedia("(max-width: 1241.99px)").matches) 
    {
        // document.body.style.transform = "scale(0.920)";
        var finn = scsc * keke * 1.087;
        var nunn = scbb * keke * 1.087;
        var cscs = innr * keke * 1.087; 
        var alttrigr = (8924/keke) * 0.920 - innr;
        var topo = nunn + cscs - 200;
    }
    if (window.matchMedia("(min-width: 1242px)").matches && window.matchMedia("(max-width: 1500.99px)").matches) 
    {
        // document.body.style.transform = "scale(0.860)";
        var finn = scsc * keke * 1.1625;
        var nunn = scbb * keke * 1.1625;
        var cscs = innr * keke * 1.1625;
        var alttrigr = (8924/keke) * 0.860 - innr;
        var topo = nunn + cscs - 200;
    }
    if (window.matchMedia("(min-width: 1501px)").matches) 
    {
        // document.body.style.transform = "scale(0.80)";
        var finn = scsc * keke * 1.250;
        var nunn = scbb * keke * 1.250;
        var cscs = innr * keke * 1.250;
        var alttrigr = (8924/keke) * 0.80 - innr;
        var topo = nunn + cscs - 200;
    }

    // console.log("from-resize-doso");
    // console.log("alttrigr trigger-point-cmnts = ", alttrigr);
    // console.log("nunn bottom-fix = ", nunn); 
    // console.log("finn top-fix = ", finn);
  
    if(scsc > alttrigr && window.matchMedia("(min-width: 615px)").matches && isdesk)
    {
        var xoxo = nunn;
        var voso = nunn + 932 + 114;
        var momo = nunn + 932 + 880 + 110;
        var koko = nunn + 932 + 1850 + 880 + 102; 
        document.getElementById("out-cmnt").style.top = "auto";
        document.getElementById("out-cmnt").style.bottom = xoxo + "px";
        document.getElementById("ads-vertical-two").style.top = "auto";
        document.getElementById("ads-vertical-two").style.bottom = voso + "px";
        document.getElementById("hot-dvs-sctn").style.top = "auto";
        document.getElementById("hot-dvs-sctn").style.bottom = momo + "px";
        document.getElementById("ads-vertical-one").style.top = "auto";
        document.getElementById("ads-vertical-one").style.bottom = koko + "px";
        document.getElementById("top-pos").style.top = "auto";
        document.getElementById("top-pos").style.bottom = topo + "px";
        document.getElementById("top-pos").style.visibility = "visible";
    }
    if(scsc < alttrigr && window.matchMedia("(min-width: 615px)").matches && isdesk)
    {
        document.getElementById("out-cmnt").style.top = "7954px";
        document.getElementById("hot-dvs-sctn").style.top = "5226px";
        document.getElementById("ads-vertical-one").style.top = "3350px";
        document.getElementById("ads-vertical-two").style.top = "7077px"; 
        document.getElementById("top-pos").style.top = "8934px"; 
    } 
    if(nunn < 100 && window.matchMedia("(min-width: 615px)").matches && isdesk)
    {
        document.getElementById("last-dab").style.visibility = "hidden";
    }
    if(nunn > 100 && window.matchMedia("(min-width: 615px)").matches && isdesk)
    {
        document.getElementById("last-dab").style.visibility = "visible";
    }
  } 

function scrolltotop() 
{
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

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

  function outsideclick()
  { 

  document.getElementById('about-me-main');
  document.getElementById('cat-menu');
  document.getElementById('submenu-phones');
  document.getElementById('submenu-speakers');
  document.getElementById('submenu-earbuds');
  document.getElementById('submenu-accessories');

  document.onclick = function(e)
  {
    if(e.target.id !== 'about-me-main' && e.target.id !== 'about-me' && e.target.id !== 'about-site' && e.target.id !== 'privacy-policy' && e.target.id !== 'contact' && e.target.id !== 'cat-menu' && e.target.id !== 'submenu-accessories' && e.target.id !== 'submenu-earbuds' && e.target.id !== 'submenu-speakers' && e.target.id !== 'submenu-phones' && e.target.id !== 'phones-style' && e.target.id !== 'speakers-style' && e.target.id !== 'earbuds-style' && e.target.id !== 'accessories-style' && e.target.id !== 'next-icon' && e.target.id !== 'reviews-main' && e.target.id !== 'cat-hover' && e.target.id !== 'reviews-hover' && e.target.id !== 'about-me-hover' && e.target.id !== 'btn-post' && e.target.id !== 'ID3380378_exploration_zoom_mag')
    {
      //element clicked wasn't the div; hide the div
      document.getElementById("about-me-main").style.visibility = 'hidden';
      document.getElementById("ABOUT_ME").style.color = "";
      document.getElementById("Rectangle_7").style.fill = "";
      document.getElementsByClassName("Rectangle_7")[0].style.filter = "";
      document.getElementById("CATEGORIES").style.color = "";
      document.getElementById("Rectangle_9").style.fill = "";
      document.getElementsByClassName("Rectangle_9")[0].style.filter = "";
      document.getElementById("cat-menu").style.visibility = "hidden";
      document.getElementById("submenu-phones").style.visibility = "hidden";
      document.getElementById("submenu-speakers").style.visibility = "hidden";
      document.getElementById("submenu-earbuds").style.visibility = "hidden";
      document.getElementById("submenu-accessories").style.visibility = "hidden";
      document.getElementById("reviews-main").style.visibility = "hidden";
      document.getElementById("REVIEWS").style.color = "";
      document.getElementById("Rectangle_8").style.fill = "";
      document.getElementsByClassName("Rectangle_8")[0].style.filter = "";
      document.getElementById("cat-cross").style.visibility = "hidden";
      document.getElementById("about-cross").style.visibility = "hidden";
      document.getElementById("reviews-cross").style.visibility = "hidden";
      document.getElementById("thank-you").style.visibility = "hidden";
      document.getElementById("speakers-style").style.border = "";
      document.getElementById("earbuds-style").style.border = "";
      document.getElementById("phones-style").style.border = "";
      document.getElementById("accessories-style").style.border = "";
      document.getElementById("search-tip-text").style.visibility = "";
      document.getElementById("menu-pointer").style.visibility = "hidden";
      document.getElementById("menu-pointer-review").style.visibility = "hidden";
      document.getElementById("menu-pointer-about").style.visibility = "hidden"; 
    }
  };
};

var outcheck = outsideclick();

function changeabouton()
{
  document.getElementById("about-me").style.border = "6px rgba(255,119,119,0.5) solid";
}
function changeaboutout()
{
  document.getElementById("about-me").style.border = "";
}

function changesiteon()
{
  document.getElementById("about-site").style.border = "6px rgba(255,119,119,0.5) solid";  
}
function changesiteout()
{
  document.getElementById("about-site").style.border = "";
}

function changeprivacyon()
{
  document.getElementById("privacy-policy").style.border = "6px rgba(255,119,119,0.5) solid";  
}
function changeprivacyout()
{
  document.getElementById("privacy-policy").style.border = "";
}

function changecontacton()
{
  document.getElementById("contact").style.border = "6px rgba(255,119,119,0.5) solid";  
}
function changecontactout()
{
  document.getElementById("contact").style.border = "";
}

function changephoneon()
{
    document.getElementById("submenu-phones").style.visibility = "visible";
    document.getElementById("submenu-earbuds").style.visibility = "hidden";
    document.getElementById("submenu-accessories").style.visibility = "hidden";
    document.getElementById("submenu-speakers").style.visibility = "hidden";
    document.getElementById("phones-style").style.border = "6px rgba(255,119,119,0.5) solid";
    document.getElementById("speakers-style").style.border = "";
	  document.getElementById("earbuds-style").style.border = "";
	  document.getElementById("accessories-style").style.border = "";
    document.getElementById("article-links").style.visibility = "visible";
}
function changephoneout()
{
	document.getElementById("submenu-phones").style.visibility = "visible";
	document.getElementById("article-links").style.visibility = "";
}
function subphoneclickappear()
{
	document.getElementById("submenu-phones").style.visibility = "visible";
}

function changespeakeron()
{
    document.getElementById("submenu-speakers").style.visibility = "visible";
    document.getElementById("submenu-phones").style.visibility = "hidden";
    document.getElementById("submenu-earbuds").style.visibility = "hidden";
    document.getElementById("submenu-accessories").style.visibility = "hidden";
    document.getElementById("speakers-style").style.border = "6px rgba(255,119,119,0.5) solid";
    document.getElementById("phones-style").style.border = "";
	  document.getElementById("earbuds-style").style.border = "";
	  document.getElementById("accessories-style").style.border = "";
}
function changespeakerout()
{
	document.getElementById("submenu-speakers").style.visibility = "visible";
}

function changeearbudon()
{
    document.getElementById("submenu-earbuds").style.visibility = "visible";
    document.getElementById("submenu-speakers").style.visibility = "hidden";
    document.getElementById("submenu-phones").style.visibility = "hidden";
    document.getElementById("submenu-accessories").style.visibility = "hidden";
    document.getElementById("earbuds-style").style.border = "6px rgba(255,119,119,0.5) solid";
    document.getElementById("speakers-style").style.border = "";
	  document.getElementById("phones-style").style.border = "";
	  document.getElementById("accessories-style").style.border = "";
}
function changeearbudout()
{
	document.getElementById("submenu-earbuds").style.visibility = "visible";
}

function changeaccessoryon()
{
    document.getElementById("submenu-accessories").style.visibility = "visible";
    document.getElementById("submenu-earbuds").style.visibility = "hidden";
    document.getElementById("submenu-speakers").style.visibility = "hidden";
    document.getElementById("submenu-phones").style.visibility = "hidden";
    document.getElementById("accessories-style").style.border = "6px rgba(255,119,119,0.5) solid";
    document.getElementById("speakers-style").style.border = "";
	  document.getElementById("earbuds-style").style.border = "";
	  document.getElementById("phones-style").style.border = "";
}
function changeaccessoryout()
{
	document.getElementById("submenu-accessories").style.visibility = "visible";
}

function changereviewon()
{
    document.getElementById("reviews-main").style.visibility = "visible";
    document.getElementById("REVIEWS").style.color = "rgba(0,0,0,1)";
    document.getElementById("Rectangle_8").style.fill = "rgba(255,119,119,1)";
    document.getElementsByClassName("Rectangle_8")[0].style.filter = "drop-shadow(0px 15px 40px rgba(255,119,119,0.6))";
    document.getElementById("ABOUT_ME").style.color = "";
    document.getElementById("Rectangle_7").style.fill = "";
    document.getElementsByClassName("Rectangle_7")[0].style.filter = "";
    document.getElementById("CATEGORIES").style.color = "";
    document.getElementById("Rectangle_9").style.fill = "";
    document.getElementsByClassName("Rectangle_9")[0].style.filter = "";
    document.getElementById("cat-menu").style.visibility = "hidden";
    document.getElementById("submenu-phones").style.visibility = "hidden";
    document.getElementById("submenu-speakers").style.visibility = "hidden";
    document.getElementById("submenu-earbuds").style.visibility = "hidden";
    document.getElementById("submenu-accessories").style.visibility = "hidden";
    document.getElementById("about-me-main").style.visibility = "hidden";
    document.getElementById("reviews-cross").style.visibility = "visible";
    document.getElementById("cat-cross").style.visibility = "hidden";
    document.getElementById("about-cross").style.visibility = "hidden";
    document.getElementById("speakers-style").style.border = "";
    document.getElementById("earbuds-style").style.border = "";
    document.getElementById("phones-style").style.border = "";
    document.getElementById("accessories-style").style.border = "";
    document.getElementById("menu-pointer").style.visibility = "hidden";
    document.getElementById("menu-pointer-review").style.visibility = "visible";
    document.getElementById("menu-pointer-about").style.visibility = "hidden";     
}
function changereviewout() {  }

function reviewoneon()
{
	document.getElementById("review-one").style.border = "6px rgba(255,119,119,0.5) solid";
	document.getElementById("review-one-tip-text").style.visibility = "visible";
}
function reviewoneout()
{
	document.getElementById("review-one").style.border = "";
	document.getElementById("review-one-tip-text").style.visibility = "";
}

function reviewtwoon()
{
	document.getElementById("review-two").style.border = "6px rgba(255,119,119,0.5) solid";
	document.getElementById("review-two-tip-text").style.visibility = "visible";
}
function reviewtwoout()
{
	document.getElementById("review-two").style.border = "";
	document.getElementById("review-two-tip-text").style.visibility = "";
}

function reviewthreeon()
{
    document.getElementById("review-three").style.border = "6px rgba(255,119,119,0.5) solid";
    document.getElementById("review-three-tip-text").style.visibility = "visible";
}
function reviewthreeout()
{
    document.getElementById("review-three").style.border = "";
    document.getElementById("review-three-tip-text").style.visibility = "";
}

function reviewfouron()
{
    document.getElementById("review-four").style.border = "6px rgba(255,119,119,0.5) solid";
    document.getElementById("review-four-tip-text").style.visibility = "visible";
}
function reviewfourout()
{
    document.getElementById("review-four").style.border = "";
    document.getElementById("review-four-tip-text").style.visibility = "";
}

function reviewsallon()
{
    document.getElementById("reviews-all").style.border = "4px rgba(255,119,119,0.4) solid";
    document.getElementById("reviews-all").style.color = "rgba(0,0,0,0.60)";
    document.getElementById("reviews-all-tip-text").style.visibility = "visible";
}
function reviewsallout()
{
    document.getElementById("reviews-all").style.border = "";
    document.getElementById("reviews-all").style.color = "";
    document.getElementById("reviews-all-tip-text").style.visibility = "";
}

function thanksappear()
{
    document.getElementById("thank-you").style.visibility = "visible";
    setTimeout(function() 
    {
        alert('Your Feedback has been sent successfully.');

    }, 1000); 
}

function blankfieldson()
{
	document.getElementById("blank-fields").style.visibility = "visible";
}
function blankfieldsout()
{
	document.getElementById("blank-fields").style.visibility = "";
}

function popcrosstipon()
{
	document.getElementById("cross-tip-text").style.visibility = "visible";
}
function popcrosstipout()
{
	document.getElementById("cross-tip-text").style.visibility = "";
}

function searchtips()
{
	document.getElementById("search-tip-text").style.visibility = "visible";
}

function toppickson()
{
	document.getElementById("top-picks-text").style.visibility = "visible";
}
function toppicksout()
{
	document.getElementById("top-picks-text").style.visibility = "";
}

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

   timer2 = setInterval(function() 
   {  
       if (window.matchMedia("(min-width: 615px)").matches) 
       {
           document.getElementById("ads-v1-in").style.minHeight = "612px";
           // document.getElementById("ads-v2-in").style.minHeight = "262px";
       }
       if (window.matchMedia("(max-width: 615px)").matches) 
       {
           document.getElementById("ads-v1-in").style.display = "none";
       }

   }, 500); 

   setTimeout(() => { clearInterval(timer2); }, 5000); 
   // document ends here ---------

