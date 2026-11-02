
console.log("defer-script-check");
const bgmd = window.matchMedia("(min-width: 615px)").matches;
const smmd = window.matchMedia("(max-width: 615px)").matches;
function updateAdsAttributes() 
{
    // Find all elements with class --- 
    const dAdsCode = '<div class="ad-details-5"><span>AD</span></div><!-- Display horizontal --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3654432220074510" data-ad-format="fluid" data-ad-slot="6958590511" data-full-width-responsive="true"></ins>';
    const disAds = document.querySelectorAll('.dis-com');

    disAds.forEach((ad) => { 
    ad.innerHTML = dAdsCode; const element = ad.querySelector('ins');
    if (element && bgmd) { element.removeAttribute('data-ad-format');
    element.setAttribute('style', 'display:block;width:100%;height:250px');
    element.setAttribute('data-full-width-responsive', 'null'); } });

    function addScript(element) {
    var scriptElement = document.createElement('script'); scriptElement.type = 'text/javascript';
    scriptElement.textContent = '(adsbygoogle = window.adsbygoogle || []).push({});';
    element.appendChild(scriptElement); }

    disAds.forEach(function(element) {
    addScript(element); });

    // mutation observer code
    const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => { const element = mutation.target;
    if (element.getAttribute('data-ad-status') === 'unfilled') {
    element.parentElement.style.display = 'none'; } }); });

    disAds.forEach((ad) => {
    const element = ad.querySelector('ins');
    if (element) { observer.observe(element, { attributes: true, 
    attributeFilter: ['data-ad-status'] }); } });
}
updateAdsAttributes();
// call the important function

function observeSidebarAds()
{
    const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => { if (mutation.target.style.minHeight) {
    mutation.target.style.removeProperty("min-height"); } }); });

    document.querySelectorAll(".sidebar-ads").forEach(sidebar => {
    observer.observe(sidebar, { attributes: true, attributeFilter: ["style"] });
    sidebar.style.removeProperty("min-height"); });
}

const adsCode = `<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3654432220074510" data-ad-slot="5979513854" data-ad-format="auto" data-full-width-responsive="true"></ins>`
const ltArtStyle = '.latest_articles{inset-inline:0;width:max-content;position:relative;margin:0 auto;top:30px;padding:16px 35px 14px 35px;font-family:monospace;font-size:15px;border-radius:55px;background-color:#f0f4f8;color:#567ea7;font-weight:bolder}#before-article-01{position:relative;margin:5px;height:2px}.articles-common-lt-style{height:auto}.latest-art-pic-common{width:100%;height:auto;border-radius:14px 14px 5px 5px;aspect-ratio:auto 16/9;background:#f0f4f8}.art-head-common{text-align:center;margin:0 auto;font-weight:bolder;font-family:sans-serif;padding:15px 20px;border-radius:5px 5px 14px 14px;background-color:#f0f4f8;font-size:18px}.art-head-common a{color:#5881aa!important;text-decoration:none}.fixed-dis-phone,.fixed-dis-desk{position:relative;height:auto;min-height:200px;display:flex;justify-content:center;padding:12px 4px;background:#EAEAEA;border-radius:14px;width:auto}#more-info-after-2{border:3px #EAEAEA solid;padding:10px 13px 12px;text-align:center;font-family:sans-serif;width:73%;color:#6f6f6f;margin:0 auto 20px;font-size:15px;line-height:23px;border-radius:14px}.art-description-common{display:none}@media only screen and (max-width:615px){.fixed-dis-desk{display:none}.art-head-common{padding:12px 20px;font-size:16px}}@media only screen and (min-width:615px){#more-info-after-2{width:fit-content;display:inline-block;border:7px #f0f4f8 solid;font-size:17px}.latest_articles{top:20px}#before-article-01{margin:0px;height:0px}.fixed-dis-phone{display:none}}';
const ldrStyle = '@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.loader-container{width:64px;height:64px;position:absolute;top:30px;inset-inline:0;margin:auto}.spinner-anim{animation:spin 0.6s linear infinite;transform-origin:center}.svg-arc{stroke:#68ABD4;stroke-width:6;fill:none;stroke-linecap:round}'

// for sidebar ads loading process
function loadAd(adDiv)
{
    if (!adDiv) return; adDiv.innerHTML = '<div class="ad-details-5"><span>AD</span></div>' + adsCode; const script = document.createElement("script");
    script.textContent = "(adsbygoogle = window.adsbygoogle || []).push({});"; adDiv.appendChild(script);
}

if (bgmd && window.innerWidth > 1010) 
{
    const sideAds = document.querySelectorAll('.side-bars:not(.bar-smack) > .sidebar-ads');
    sideAds.forEach(el => { el.innerHTML = adsCode; const script = document.createElement('script');
    script.textContent = '(adsbygoogle = window.adsbygoogle || []).push({});';
    el.appendChild(script); }); // ads name Thin-bar-ads
}

// for detecting new news articles, h2 tags 
const rplsSec = document.getElementById('add-article-html');
const loadersvg = `<div class="loader-container"><svg viewBox="0 0 100 100" class="spinner-anim">
<circle cx="50" cy="50" r="8" fill="var(--lnk-clr)"/><path d="M 85.36 50 A 40 40 0 0 1 78.28 78.28" class="svg-arc" transform="rotate(10 50 50)"/>
<path d="M 85.36 50 A 40 40 0 0 1 78.28 78.28" class="svg-arc" transform="rotate(130 50 50)"/>
<path d="M 85.36 50 A 40 40 0 0 1 78.28 78.28" class="svg-arc" transform="rotate(250 50 50)"/>
</svg></div>` // for loader html insertion 

const URL_FEATURED = "https://docs.elomymelo.com/text-files/inside-article-div-1.txt";
const URL_POPULAR = "https://docs.elomymelo.com/text-files/inside-article-div-2.txt";

function cleanHtml(temp)
{
    const targetLink = [...temp.getElementsByTagName("a")].find(a =>
    a.href.split("/").pop() === location.href.split("/").pop());

    if (targetLink)
    {
        const div = targetLink.parentElement; const br = div?.nextElementSibling;
        if (br?.tagName === "BR") br.remove(); div?.remove();
    }
    else
    {
        const divs = temp.querySelectorAll(":scope > div");
        const lastDiv = divs[divs.length - 1];

        if (lastDiv)
        {
            const br = lastDiv.nextElementSibling; if (br?.tagName === "BR") 
            br.remove(); lastDiv.remove(); 
        }
    }
    return temp.innerHTML;
}

async function run(url, processor, section)
{
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const html = await response.text();
    const temp = document.createElement("div"); temp.innerHTML = html;
    const finalHTML = await processor(temp);
    section.innerHTML = finalHTML;
}

async function loadSection(id, url, processor)
{
    console.log(`${id} started:`, performance.now());
    const section = document.getElementById(id);
    if (!section) return;

    const style = document.createElement("style");
    style.textContent = ldrStyle; section.appendChild(style);
    section.insertAdjacentHTML("beforeend", loadersvg);

    for (let i = 0; i < 2; i++) {
    try { return await run(url, processor, section); }
    catch (err) { console.error(`Attempt ${i + 1} failed:`, err);

    if (i === 0) {
    await new Promise(res => setTimeout(res, 5000)); }
    else { section.innerHTML = `<div class="error-state" style="text-align:center">
    Sorry, the content you are looking for has failed to load
    </div>`; } } }
}

function loadFeatured()
{
    return loadSection(
        "featured",
        URL_FEATURED,
        async (temp) =>
        {
            return temp.innerHTML;
        }
    );
}

function loadPopular()
{
    return loadSection(
        "popular",
        URL_POPULAR,
        cleanHtml
    );
}

function loadRelated()
{
    return loadSection(
        "related",
        URL_POPULAR,
        cleanHtml
    );
}

function createAdDiv(parent) 
{
    const adDiv = document.createElement("div");
    adDiv.className = "sidebar-ads"; parent.appendChild(adDiv);
    loadAd(adDiv); return adDiv;
}

function createStickyDiv() 
{
    const stickyDiv = document.createElement("div");
    stickyDiv.className = "sd-sticky";
    return stickyDiv;
}

function hotSecDiv(parentDiv) 
{
    const div = document.createElement("div");
    div.className = "sdbar-contnt"; div.style.minHeight = "500px";
    parentDiv.appendChild(div); return div;
}

function commentDiv(parentDiv) 
{
    const div = document.createElement("div");
    div.className = "sdbar-contnt"; div.style.minHeight = "210px";
    parentDiv.appendChild(div); return div;
}

let initialHeight;
function rltdHeight()
{
    const artText = document.getElementById("art-text");
    const rltdOut = document.querySelector(".rltdOut");

    if (rltdOut && artText) {
    const rltdRect = rltdOut.getBoundingClientRect();
    const artRect = artText.getBoundingClientRect(); const rltdTop = rltdRect.top + window.scrollY;
    const artTop = artRect.top + window.scrollY; const rltdHeight = rltdRect.height;
    if (initialHeight === undefined) { initialHeight = rltdHeight; }

    const topDiff = rltdTop - artTop + 500; const artHeight = artText.offsetHeight;
    const newHeight = artHeight - topDiff; if (newHeight > initialHeight) {
    rltdOut.style.height = newHeight + "px"; } }
}

async function startLoads()
{
    const featuredPromise = loadFeatured(); const popularPromise = loadPopular();
    const sideBars = document.querySelectorAll('[class="side-bars"]'); 
    const sdBar1 = sideBars[0]; const sdBar2 = sideBars[1];

    const featuredDone = featuredPromise.then(() => { if (sdBar1) {
    createAdDiv(sdBar1); const guideDiv = document.createElement("div"); 
    guideDiv.className = "sdbar-contnt"; guideDiv.innerHTML = `<div class="top-label"><div class="label-text lt-top sdbar-lb-txt">
    <span>OUTLINE</span></div></div>`; const stickyDiv = createStickyDiv(); stickyDiv.appendChild(guideDiv); sdBar1.appendChild(stickyDiv);
    outline(guideDiv); secFtrObsrvr(); createAdDiv(stickyDiv); } });

    const popularDone = popularPromise.then(() => { if (sdBar2) {
    createAdDiv(sdBar2); hotSecDiv(sdBar2); const stickyDiv = document.createElement("div");
    stickyDiv.className = "rltdOut"; sdBar2.appendChild(stickyDiv); const rltdParent = document.createElement("div");
    rltdParent.className = "sdbar-contnt sd-sticky"; rltdParent.innerHTML = `<div class="top-label"><div class="label-text lt-top sdbar-lb-txt"><span>RELATED</span></div></div><div class="art-content" id="related"></div>`;
    stickyDiv.appendChild(rltdParent); loadRelated().then(() => { rltdHeight(); }); const stickyDiv2 = createStickyDiv(); stickyDiv2.style.marginTop = "-10px";
    sdBar2.appendChild(stickyDiv2); createAdDiv(stickyDiv2); commentDiv(stickyDiv2); } });

    await Promise.allSettled([featuredDone, popularDone]);
    observeSidebarAds();
}
startLoads();

function outline(container)
{
    const sections = document.querySelectorAll(".sections-new");
    const nav = document.createElement("nav"); nav.className = "content-outline";
    nav.setAttribute("aria-label", "Table of contents");
    const list = document.createElement("ul");
    list.className = "outline-list";

    sections.forEach(section => {
    const text = section.innerText.trim();
    const item = document.createElement("li"); item.className = "outline-item";
    item.onclick = () => scrollToSection(section, item);
    item.textContent = text; item.title = text;
    list.appendChild(item); });

    nav.appendChild(list);
    container.appendChild(nav);
}

let previousItem = null;
function scrollToSection(section, item)
{
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveItem(item);
}

function setActiveItem(item)
{
    if (!item || previousItem === item) return;
    if (previousItem)
    {
        previousItem.style.background = ""; previousItem.style.color = "";
        previousItem.style.border = "";
    }

    if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    item.style.background = "#c4d8ee"; item.style.color = "#404040";
    item.style.border = "3px solid #c4d8ee"; } else {
    item.style.background = "var(--hdr-clr)"; item.style.color = "black";
    item.style.border = "3px solid var(--hdr-clr)"; }
    previousItem = item;
}

const footer = document.querySelector("footer");
footer.style.height = footer.getBoundingClientRect().height + "px";
const fxFoot = document.querySelector(".top-sec.width-cut");
const banner = document.getElementById("bnr-img-contnr");

let fxd = false; let bnr = true; let ftr = false;
function updateFxFoot()
{
    const beFxd = !bnr && !ftr;
    if (beFxd === fxd) return; fxd = beFxd;
    const s = fxFoot.style;

    if (fxd)
    {
        s.width = "auto"; s.insetInline = "30px"; s.paddingBottom = "20px";
        s.position = "fixed"; s.zIndex = "10"; s.bottom = "-20px";
        s.animation = "ftpop 320ms cubic-bezier(.22,1,.36,1)";
    }
    else
    {
        s.paddingBottom = ""; s.animation = ""; s.insetInline = ""; s.position = "";
        s.zIndex = ""; s.bottom = ""; s.width = "";
    }
}

function secFtrObsrvr()
{
    const sections = document.querySelectorAll(".sections-new");
    const items = document.querySelectorAll(".outline-item");
    const sectionItems = new Map();

    sections.forEach((section, index) => {
    if (items[index]) sectionItems.set(section, items[index]); });

    const observer = new IntersectionObserver((entries) =>
    {
        for (const entry of entries)
        {
            if (entry.target === banner) bnr = entry.isIntersecting;
            else if (entry.target === footer) ftr = entry.isIntersecting;
            else if (entry.target.matches(".sections-new") && entry.isIntersecting) {
            setActiveItem(sectionItems.get(entry.target)); }
        }
        updateFxFoot();

    }, { threshold: 0 });

    [banner, footer, ...sections].forEach(el => {
    if (el) observer.observe(el); });
}

let ltrplsRetry;
function ltrplsSec() 
{
    const loaderStyle = document.createElement('style');
    loaderStyle.id = 'loader-style'; loaderStyle.textContent = ldrStyle;
    document.head.appendChild(loaderStyle); if(rplsSec) 
    { rplsSec.innerHTML = loadersvg; }

    fetch("https://docs.elomymelo.com/text-files/inside-article-div.txt")
    .then(response => response.text()).then(data => { if(rplsSec) { rplsSec.innerHTML = data;
    document.querySelectorAll('.side-bars.bar-smack').forEach(parent => {

    const child = parent.querySelector(':scope > div'); if (child) {
    child.classList.add('bar-color'); } }); document.getElementById('loader-style')?.remove();
    const phoneAd = rplsSec.querySelector(".fixed-dis-phone"); const deskAd = rplsSec.querySelector(".fixed-dis-desk");
    const script = document.createElement("script"); script.innerHTML = "(adsbygoogle = window.adsbygoogle || []).push({});";
    if (smmd) { deskAd?.querySelector("ins.adsbygoogle")?.remove(); phoneAd?.appendChild(script); } else {
    phoneAd?.querySelector("ins.adsbygoogle")?.remove(); deskAd?.appendChild(script); } }
    if (bgmd) { loadSideBars(); } }).catch(err => { console.error("My Check", err);
    if (!ltrplsRetry) { ltrplsRetry = true; ltrplsSec(); } });
}

let storeInterval;
if (rplsSec) 
{
    const intObserver = new IntersectionObserver((entries) => { entries.forEach(entry => {
    if (entry.isIntersecting) { ltrplsSec(); rltdHeight(); window.addEventListener('scroll', scrlDebounce, false); storeInterval = setInterval(removeTool, 2000);
    if (adlk1) { adlk1 = false; } if (adlkk2) { adlkk2 = false; } intObserver.disconnect(); } }); },
    { rootMargin: '0px 0px 500px 0px', threshold: 0 } ); intObserver.observe(rplsSec);
}

function removeTool()
{
    // console.log("checking the pop tool by google");
    const chromeEle = Array.from(document.querySelectorAll('div[style*="color-scheme: initial"][style*="forced-color-adjust: initial"][style*="mask: initial"][style*="math-depth: initial"]'));
    const safaEle = Array.from(document.querySelectorAll('div[style*="font-feature-settings: initial"][style*="font-kerning: initial"][style*="font-optical-sizing: initial"][style*="font-stretch: initial"]'));
    const edgeEle = Array.from(document.querySelectorAll('div[style*="animation-delay: 0s !important"][style*="animation-direction: normal !important"][style*="animation-duration: 0s !important"][style*="animation-fill-mode: none !important"]'));
    const hostElements = chromeEle.concat(edgeEle, safaEle); hostElements.forEach(hostElement => { alldynamic(hostElement); });

    function alldynamic(hostElement)
    {
       if (hostElement.shadowRoot) 
       {
           const shadowdom = hostElement.shadowRoot;
           const toolbar = shadowdom.getElementById('ft-floating-toolbar'); 
           const contain = shadowdom.querySelector('.ipr-container'); 

           if (toolbar || contain)
           {
               shadowdom.innerHTML = ''; shadowdom.host.remove();
               clearInterval(storeInterval); console.log("rmvd");
           }
        }
    }
}

// for go to top or bottom
function goDown() { window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' }); }
function goUp() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

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
    const { leftCoordinate } = insertAndMeasureSpan(paraTag); const inWdth = window.innerWidth;
    if (smmd) { modWidth = inWdth * 0.07; comparewidth = inWdth / 2; } if (!smmd) {
    modWidth = rectAC.width * 0.22; comparewidth = (rectAC.width / 2) + rectAC.left; }

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
// to add dynamic paddings

let adlk1 = false, adlkk2 = false;
const loadWidth = window.innerWidth; let szck, rzszck;
if (loadWidth > 615) { szck = 'desk'; } else { szck = 'phone'; }
window.addEventListener('resize', trigPad); 
function trigPad()
{
	clearTimeout(window.resized);
    window.resized = setTimeout(() => { detectCharacter(); }, 1700);

    const nowWidth = window.innerWidth;
    if (nowWidth > 615) { rzszck = 'desk'; } else { rzszck = 'phone'; }

    if (!adlk1 && ((nowWidth < loadWidth && Math.abs(nowWidth - loadWidth) > 20) || (nowWidth > loadWidth && szck !== rzszck))) {
    const adsdtp1 = document.querySelectorAll('.dis-com, .sidebar-ads'); adsdtp1.forEach(el => {
    el.style.display = 'none'; }); adlk1 = true; adlkk2 = false; }

    if (nowWidth >= loadWidth && szck === rzszck && !adlkk2) {
    const adsdtp1 = document.querySelectorAll('.dis-com, .sidebar-ads'); adsdtp1.forEach(el => {
    const insTag = el.querySelector('ins'); if (!insTag || insTag.getAttribute('data-ad-status') !== 'unfilled') {
    el.style.display = ''; } }); adlkk2 = true; adlk1 = false; }
}
