function scaleMe2() {       
    var checkscale; // Declare the variable initially 
    var parentElementNew = document.querySelector('.fc-consent-root');
    var bodyOverflow = window.getComputedStyle(document.body).overflow; 
    var footerDiv = document.querySelector('.fc-footer.fc-dialog-restricted-content');

    if (parentElementNew || bodyOverflow === "hidden") { 
        window.scrollTo(0, 0); 
        document.body.style.overflow = "hidden"; 
        document.body.style.transform = "none"; 
        checkscale = "present"; // Correctly assign to the declared variable
    }

    if (!parentElementNew || bodyOverflow !== "hidden") { 
        document.body.style.overflow = "visible";
        if (checkscale === "present") { 
            if (window.matchMedia("(max-width: 615px)").matches) {
                document.body.style.transform = "none"; // for pos-fxd 
            }
            if (window.matchMedia("(min-width: 615px)").matches && window.matchMedia("(max-width: 1040.99px)").matches && bodyOverflow !== "hidden") {
                document.body.style.transform = "scale(1.0)";
            }
            if (window.matchMedia("(min-width: 1041px)").matches && window.matchMedia("(max-width: 1241.99px)").matches && bodyOverflow !== "hidden") {
                document.body.style.transform = "scale(0.920)";
            }
            if (window.matchMedia("(min-width: 1242px)").matches && window.matchMedia("(max-width: 1500.99px)").matches && bodyOverflow !== "hidden") {
                document.body.style.transform = "scale(0.860)";
            }
            if (window.matchMedia("(min-width: 1501px)").matches && bodyOverflow !== "hidden") {
                document.body.style.transform = "scale(0.80)";
            }
            console.log("Scale consent done");
        }
        document.body.style.transform = ""; 
    }

    if (footerDiv) { 
        var secondPTag = footerDiv.querySelector('p:nth-child(2)');
        if (secondPTag) { 
            secondPTag.innerText = 'Some vendors may process your personal data on the basis of legitimate interest, which you can object to by managing your options below. Look for a link at the bottom of this page or in our privacy policy where you can withdraw consent at anytime.'; 
        } // changing the inner text of the p tag of consent message  
    }

    console.log("Found scale me");

    const hostElement = document.querySelector('div[style*="color-scheme: initial"][style*="forced-color-adjust: initial"][style*="mask: initial"][style*="math-depth: initial"]');
    if (hostElement) {
        console.log("Found host elements", hostElement);
        if (hostElement.shadowRoot) {
            const regMessageInfo = hostElement.shadowRoot.querySelector('.ft-reg-message-info');
            const regBubble = hostElement.shadowRoot.querySelector('.ft-reg-bubble');
            const regBubbleCloseIcon = hostElement.shadowRoot.querySelector('.ft-reg-bubble-close-icon');
            const regButton = hostElement.shadowRoot.querySelector('.ft-styless-button');

            // Apply styles
            if (regMessageInfo) {
                regMessageInfo.style.display = 'none';
                regMessageInfo.style.setProperty('display', 'none', 'important');
            }
            if (regBubble) {
                regBubble.style.bottom = '10px';
                regBubble.style.setProperty('bottom', '10px', 'important');
                regBubble.style.paddingLeft = '20px';
                regBubble.style.setProperty('padding-left', '20px', 'important');
                regBubble.style.width = '250px';
                regBubble.style.setProperty('width', '250px', 'important');
                regBubble.style.borderRadius = '50px';
                regBubble.style.setProperty('border-radius', '50px', 'important');
            }
            if (regBubbleCloseIcon) {
                regBubbleCloseIcon.style.right = '15px';
                regBubbleCloseIcon.style.setProperty('right', '15px', 'important');
                regBubbleCloseIcon.style.position = 'absolute';
                regBubbleCloseIcon.style.setProperty('position', 'absolute', 'important');
                regBubbleCloseIcon.style.top = '13px';
                regBubbleCloseIcon.style.setProperty('top', '13px', 'important');
            }
            if (regButton) { 
                regButton.style.setProperty('border-radius', '55px', 'important'); 
            }
        }
        clearInterval(ftinterval); 
        console.log("Removed interval"); 
    }
}

const ftinterval = setInterval(scaleMe2, 1000); 
scaleMe2(); // Run the function immediately
