const navdata = `
                <h1>
                  <a href="../html/index.html">bsparkes</a>
                </h1>
                <ul>

                  <li><a href="../html/VCWall.html">The VC Wall</a></li>
                  <li><a href="../html/fancyVCWall.html">The fancy VC Wall</a></li>
                  <li><a href="../html/metaethics.html">Metaethics</a></li>
                  <li><a href="../html/buggle.html">buggle</a></li>
                  <li><a href="http://stanford.edu/~declan/ssp">The School of Strong Philosophy</a></li>
                  <li><a href="https://gitlab.com/bsparkes">gitlab</a></li>
                  <li><a href="https://stanford.academia.edu/bsparkes">academia.edu</a></li>
                </ul>
                `;

// thanks to https://www.sitepoint.com/jquery-document-ready-plain-javascript/
var callback = function(){
    document.getElementById('navigation').innerHTML = navdata;
};
if (
    document.readyState === "complete" ||
        (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
    callback();
} else {
    document.addEventListener("DOMContentLoaded", callback);
}
