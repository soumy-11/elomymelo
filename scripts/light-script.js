
// for last-line balance
const artCon = document.querySelector('.art-out');
function insertAndMeasureSpan(paraTag) 
{
    const spanElement = document.createElement('span');
    paraTag.appendChild(spanElement); const spanRect = spanElement.getBoundingClientRect();
    const leftCoordinate = spanRect.left + window.pageXOffset;

    paraTag.removeChild(spanElement);
    return { leftCoordinate };
}

function handleFirstCondition(paraTag, comparewidth, modWidth) 
{
    let padding = 15; let leftCoordinate;
    paraTag.style.paddingRight = padding + "px";
    ({ leftCoordinate } = insertAndMeasureSpan(paraTag));
    while (leftCoordinate < (comparewidth - modWidth) && padding <= 70) { 
    padding += 5; paraTag.style.paddingRight = padding + "px";
    ({ leftCoordinate } = insertAndMeasureSpan(paraTag)); }
}

function processParagraph(paraTag, rectAC) 
{
    let modWidth, comparewidth; paraTag.style.paddingRight = "";
    const { leftCoordinate } = insertAndMeasureSpan(paraTag); var widthIn = window.matchMedia("(max-width: 615px)").matches;
    if (widthIn) { modWidth = window.innerWidth * 0.07; comparewidth = window.innerWidth / 2; }
    if (!widthIn) { modWidth = rectAC.width * 0.22; 
    comparewidth = (rectAC.width / 2) + rectAC.left; }

    if (leftCoordinate < (comparewidth - modWidth)) {
    handleFirstCondition(paraTag, comparewidth, modWidth); }
}

function detectCharacter() 
{
    // the main function called first 
    const rectAC = artCon.getBoundingClientRect();
    const divElement = document.getElementById("art-text");
    const pTags = divElement.querySelectorAll("p"); pTags.forEach(p => {
    p.classList.add("art-para-new"); processParagraph(p, rectAC); });
}
detectCharacter();

window.addEventListener('resize', trigPad); 
function trigPad()
{
	clearTimeout(window.resized); window.resized = setTimeout(() => {
	detectCharacter(); }, 1700);
}
