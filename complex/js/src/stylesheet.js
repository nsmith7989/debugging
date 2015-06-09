var styleSheet = (function () {
    // Create the <style> tag
    var style = document.createElement("style");

    // WebKit hack :(
    style.appendChild(document.createTextNode(""));

    // Add the <style> element to the page
    document.head.appendChild(style);

    return style.sheet;
})();

//add the strikethrough rule for completed
styleSheet.insertRule(".complete { text-decoration: line-through; color: green }", 0);
//add cursor pointer
styleSheet.insertRule("span {cursor: pointer}", 0);

export default styleSheet;