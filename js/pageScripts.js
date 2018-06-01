const navdata = `
                <h1>
                  <a href="../html/index.html">bsparkes</a>
                </h1>
                <ul>

                  <li><a href="../html/VCWall.html">The VC Wall</a></li>
                  <li><a href="../html/fancyVCWall.html">The fancy VC Wall</a></li>
                  <li><a href="../html/metaethics.html">Metaethics</a></li>
                  <li><a href="http://stanford.edu/~declan/ssp">The School of Strong Philosophy</a></li>
                  <li><a href="https://github.com/bsparkes">github</a></li>
                  <li><a href="https://stanford.academia.edu/bsparkes">academia.edu</a></li>
                </ul>
                `;

$(document).ready(function() {
  $('#navigation').html(navdata);
});