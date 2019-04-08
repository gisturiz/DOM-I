// Header

var navTitles = ["Services", "Product", "Vision", "Features", "About", "Contact"];

var navigation = document.querySelectorAll("nav a");
for (var i = 0; i < navigation.length; i++) {
    navigation[i].innerHTML = navTitles[i];
}

const logoImg = document.querySelector('#logo-img');
logoImg.src = 'img/logo.png';

//CTA

const ctaHeading = document.querySelector('.cta-text h1');
ctaHeading.textContent = "DOM Is Awesome";

const ctaButton = document.querySelector('.cta .cta-text button');
ctaButton.textContent = "Get Started";

const ctaImg = document.querySelector('#cta-img');
ctaImg.src = 'img/header-img.png';

// Main Content
    // Top Content

var topHeaders = ["Features", "About"];

const topContent = document.querySelectorAll('.top-content .text-content h4');
for (var i = 0; i < topContent.length; i++) {
    topContent[i].innerHTML = topHeaders[i];
}

var topParagraphs = ["Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.", "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."];

const topContentParagraph = document.querySelectorAll('.top-content .text-content p');
for (var i = 0; i < topContentParagraph.length; i++) {
    topContentParagraph[i].innerHTML = topParagraphs[i];
}

const middleImg = document.querySelector('#middle-img');
middleImg.src = 'img/mid-page-accent.jpg';

    // Middle Content

var bottomHeaders = ["Services", "Product", "Vision"];

const bottomContent = document.querySelectorAll('.bottom-content .text-content h4');
for (var i = 0; i < bottomContent.length; i++) {
    bottomContent[i].innerHTML = bottomHeaders[i];
}

var bottomParagraphs = ["Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.", "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.", "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."];

const bottomContentParagraph = document.querySelectorAll('.bottom-content .text-content p');
for (var i = 0; i < bottomContentParagraph.length; i++) {
    bottomContentParagraph[i].innerHTML = bottomParagraphs[i];
}

// Contact

const contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = "Contact";

var contactInfo = ["123 Way 456 Street<br>Somewhere, USA", "1 (888) 888-8888", "sales@greatidea.io"];

const contactParagraphs = document.querySelectorAll('.contact p');
for (var i = 0; i < contactParagraphs.length; i++) {
    contactParagraphs[i].innerHTML = contactInfo[i];
}

// Footer

const footer = document.querySelector('.footer p');
footer.textContent = "Copyright Great Idea! 2018";