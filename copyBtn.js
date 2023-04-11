const copyButton = document.getElementById("copyButton");
const message = document.getElementById("message");


// JavaScript
copyButton.addEventListener("click", () => {
    // Select and copy text to clipboard
    const range = document.createRange();
    range.selectNode(message);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    // ...

    // Change button content to 'Copied!'
    copyButton.innerHTML = '<i class="fa-solid fa-check"></i>';

    // Reset button content after 1 second
    setTimeout(() => {
        copyButton.innerHTML = "<i class='fa-solid fa-copy'> Copy</i>";
    }, 1000);
});