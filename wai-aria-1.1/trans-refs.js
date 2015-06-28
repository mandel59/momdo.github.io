/*
  Japanese translation Reference
  2013-12-11 ver.
  (2015-06-24 customized.)

  Copyright (c) 2013
      Makoto Mizukami,
        <http://makotom.org/>
      momdo
        <http://momdo.s35.xrea.com/>.

  licence: GNU-GPL-3.0-or-later
  // @source: http://www.gnu.org/licenses/gpl-3.0.html
*/

// DOM 構築後に実行
addEventListener("DOMContentLoaded", function(){
	// URL リスト
	// ID : {URL | [URL, ...]}, ...
	var refList = {
RFC2119: [ 'http://www.ipa.go.jp/security/rfc/RFC2119JA.html',
    'http://www.studyinghttp.net/rfc_ja/rfc2119',
    'http://www.cam.hi-ho.ne.jp/mendoxi/rfc/rfc2119j.html',
    'http://www.asahi-net.or.jp/~sd5a-ucd/rfc-j/rfc-2119j.html',
    'http://www.t-net.ne.jp/~cyfis/rfc/format/rfc2119_ja.html'
],
"WAI-ARIA-10": 'http://momdo.github.io/wai-aria/',
CSS2: 'http://momdo.github.io/css2/cover.html',
"DOM-Level-2-Core": [ 'http://www.y-adagio.com/public/standards/tr_dom2_core/expanded-toc.html',
	'http://www2u.biglobe.ne.jp/~oz-07ams/2003/Core/index.html',
],
HTML401: 'http://www.asahi-net.or.jp/~sd5a-ucd/rec-html401j/cover.html',
HTML5: 'http://momdo.github.io/html5/Overview.html',
"OWL-FEATURES": 'http://www.asahi-net.or.jp/~ax2s-kmtn/internet/rec-owl-features-20040210.html',
"RDF-CONCEPTS": 'http://www.asahi-net.or.jp/~ax2s-kmtn/internet/rdf/rdf-concepts.html',
"RDF-SCHEMA": 'http://www.asahi-net.or.jp/~ax2s-kmtn/internet/rdf/REC-rdf-schema-20140225.html',
RFC3986: 'http://www.eonet.ne.jp/~h-hash/rfc_ja/rfc3986.ja.html',
//svg: 'http://www.hcn.zaq.ne.jp/___/SVG11-2nd/',
WCAG20: 'http://waic.jp/docs/WCAG20/Overview.html',
XHTML11: ['http://msugai.fc2web.com/web/W3C/XHTML11/xhtml11.html',
    'http://www.doraneko.org/webauth/xhtml11/20010531/Overview.html',
],
"XML-NAMES": 'http://www.hcn.zaq.ne.jp/___/XML/Namespaces-ja.html',

	};

	(function(){
		var id = "", dd = null, urlType = "";	// 変数の初期化
		var insertA = function(parent, href, text){	// a を挿入する手順
			var span = document.createElement("span"),
			a = document.createElement("a");

			span.className = "ref-secure";	// TODO: 適宜変更

			a.setAttribute("href", href);
			a.appendChild(document.createTextNode(text));
			if(text.match(/訳$/) || text.match(/1$/)){ //最初だけ（強引に）マッチング
            	span.appendChild(document.createElement("br"));
			}
			span.setAttribute("style", "margin-right:5px;");
			span.appendChild(a);
			return parent.nextElementSibling.appendChild(span); //parent.appendChild(span);
		};

		for(id in refList){	// リストを巡回
			if(refList.hasOwnProperty(id)){	// "おまじない"
				if(dd = document.getElementById("bib-" + id)){	// 当該 ID を持つ要素があることを最初に確認
					urlType = typeof refList[id];

					if(urlType === typeof ""){	// URL が1個だけのとき
						insertA(dd, refList[id], "日本語訳");
					}else if(urlType === typeof []){	// URL が複数あるとき
						refList[id].forEach(function(url, key){	// URL の複数指定を巡回
							insertA(dd, url, "日本語訳" + (key + 1).toString());
						});
					}
				}
			}
		}
	})();
}, false);
