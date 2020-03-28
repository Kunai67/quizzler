// HELPER FUNCTION TO DECODE HTML ELEMENTS FROM THE JSON
export default function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}