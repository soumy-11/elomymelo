
// document.addEventListener('DOMContentLoaded', updateLogo);
window.addEventListener('resize', updateLogo);
setTimeout(updateLogo, 50);
function updateLogo() 
{
      if (window.matchMedia("(min-width: 615px)").matches) 
      {
           const mypage = window.innerWidth; 
           document.getElementById("Web_1920__1").style.transform = "scale("+mypage/3554+")";
           document.getElementById("Web_1920__1").style.transformOrigin = "0 0";
           document.getElementById("Web_1920__1").style.width = "3554px";

           document.querySelectorAll(".dis-com").forEach(function(el) {
           el.style.left = "617px"; el.style.transform = "scale(2.25, 2.25)"; });
           document.querySelectorAll(".feed-com").forEach(function(el) {
           el.style.transform = "scale(2.45, 2.45)"; });
           document.getElementById("ads-v1-in").style.transform = "scale(2.72, 2.72)"; 
      }

      if (window.matchMedia("(max-width: 615px)").matches) 
      {
           const mypagephone = window.innerWidth; 
           document.getElementById("Web_1920__1").style.transform = "scale("+mypagephone/2358+")";
           document.getElementById("Web_1920__1").style.transformOrigin = "0 0";
           document.getElementById("Web_1920__1").style.width = "2358px";
           document.getElementById("Web_1920__1").style.overflow = "visible";

           document.querySelectorAll(".dis-com").forEach(function(el) {
           el.style.left = ""; el.style.transform = "scale(7.10, 7.10)"; });
           document.querySelectorAll(".feed-com").forEach(function(el) {
           el.style.transform = "scale(4.34, 4.34)"; });
      }

    if (window.matchMedia("(min-width: 615px)").matches) 
    { document.querySelectorAll(".last-extend").forEach(function(el) 
    { el.style.display = "none"; el.remove(); }); } 
    if (window.matchMedia("(max-width: 615px)").matches) { detectCharacter(); } 

    // Array of IDs
    var ids = ['ins-feed-one', 'ins-feed-two', 'ins-feed-three', 'ins-feed-four']; 
    // Function to update the style for multiple elements 
    function getAttributes() {
    ids.forEach(function(id) {
    var element = document.getElementById(id);
    if (element) 
        {
           // Get some attribute values 
           var parentDiv = element.parentNode;
           var childDivs = parentDiv.querySelectorAll('div'); var selectChild = childDivs[1];
           var value1 = element.getAttribute('data-ad-layout-key');
           var value3 = element.getAttribute('data-ad-status');
           // console.log("value 1 is = ", value1);
           if(value1 == '-co-n+45-2o+yn' && window.matchMedia("(max-width: 615px)").matches)
           {
              element.style.display = "none";
              parentDiv.style.display = "none";
           }
           if(value1 == '-co-n+45-2o+yn' && window.matchMedia("(min-width: 615px)").matches)
           {
              element.style.display = "block";
              parentDiv.style.display = "block";
              var selectNewChild = childDivs[0];
              selectNewChild.style.display = "none";
           }
           if(value1 == '-5c+c0-2e-5v+wq' && window.matchMedia("(min-width: 615px)").matches)
           {
              element.style.display = "none";
              parentDiv.style.display = "none";
           }
           if(value1 == '-5c+c0-2e-5v+wq' && window.matchMedia("(max-width: 615px)").matches)
           {
              element.style.display = "block";
              parentDiv.style.display = "block";
              selectChild.style.display = "none";
           }
           if(value1 == '-5c+c0-2e-5v+wq' && value3 == 'unfilled' && 
              window.matchMedia("(max-width: 615px)").matches)
           {
              parentDiv.style.display = "none";
           }
           if(value1 == '-co-n+45-2o+yn' && value3 == 'unfilled' && 
              window.matchMedia("(min-width: 615px)").matches)
           {
              parentDiv.style.display = "none";
           }
        }
     });
    }

    // Call the function to update all elements at once
    getAttributes();

    var ids = ['ins-dis-one', 'ins-dis-two', 'ins-dis-three'];
    function getMoreAttributes() {
    ids.forEach(function(id) {
    var element = document.getElementById(id);
    if (element) 
        {
           var parentDiv = element.parentNode;
           var childDivs = parentDiv.querySelectorAll('div'); var selectChild = childDivs[0];
           var value2 = element.getAttribute('data-full-width-responsive');
           var value4 = element.getAttribute('data-ad-status');
           // console.log("value 2 is = ", value2);
           if(value2 == 'null' && window.matchMedia("(max-width: 615px)").matches)
           {
              element.style.display = "none";
              parentDiv.style.display = "none";
           }
           if(value2 == 'null' && window.matchMedia("(min-width: 615px)").matches)
           {
              element.style.display = "block";
              parentDiv.style.display = "block";
              var selectNewChild = childDivs[1];
              selectNewChild.style.display = "none";
           }
           if(value2 == 'true' && window.matchMedia("(min-width: 615px)").matches)
           {
              element.style.display = "none";
              parentDiv.style.display = "none";
           }
           if(value2 == 'true' && window.matchMedia("(max-width: 615px)").matches)
           {
              element.style.display = "block";
              parentDiv.style.display = "block";
              selectChild.style.display = "none";
           }
           if(value2 == 'true' && value4 == 'unfilled' && 
              window.matchMedia("(max-width: 615px)").matches)
           {
              parentDiv.style.display = "none";
           }
           if(value2 == 'null' && value4 == 'unfilled' && 
              window.matchMedia("(min-width: 615px)").matches)
           {
              parentDiv.style.display = "none";
           }
        }
     });
    }

    // Call to update all elements at once
    getMoreAttributes(); 
}   

function detectCharacter() 
{
    if (window.matchMedia("(max-width: 615px)").matches) 
    {
        const divElement = document.getElementById("article-text-div");
        const pTags = divElement.querySelectorAll("p");
        
        // Loop through all the p tags and change span element's style using forEach method
        pTags.forEach((paraTag) => {

        // var lastCharacter = paraTag.textContent.trim().slice(-1);
        var spanElement = document.createElement('span');
        paraTag.appendChild(spanElement);

        var spanRect = spanElement.getBoundingClientRect();
        var leftCoordinate = spanRect.left + window.pageXOffset;
        paraTag.removeChild(spanElement);

        widthinner = window.innerWidth;
        multiplier = 2358/widthinner;
        comparewidth = widthinner/2;
        comparewidthtwo = widthinner - (widthinner * 0.278); 

        if(leftCoordinate < comparewidth)
        {
            var calwidth = (comparewidth - leftCoordinate + (widthinner * 0.1)) * multiplier; 
            var spanElement = document.createElement('span');
            spanElement.setAttribute("class", "last-extend");
            paraTag.appendChild(spanElement);

            // change some properties of each span element in loop
            spanElement.style.width = calwidth + "px";
            spanElement.style.display = "inline-block";
            
        }
        if(leftCoordinate > comparewidthtwo)
        {
            var calwidth = comparewidth * multiplier; 
            var spanElement = document.createElement('span');
            spanElement.setAttribute("class", "last-extend");
            paraTag.appendChild(spanElement);

            spanElement.style.width = calwidth + "px";
            spanElement.style.display = "inline-block";
            spanElement.style.marginLeft = "0px";
            
        } });
    }
}
// setTimeout(detectCharacter, 2000); 

