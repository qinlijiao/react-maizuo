(function(window){var svgSprite='<svg><symbol id="icon-xialacaidan" viewBox="0 0 1024 1024"><path d="M953.856 311.901091 512 744.657455 70.144 311.901091l33.210182-32.558545L512 679.563636l408.645818-400.221091L953.856 311.901091z"  ></path></symbol><symbol id="icon-caidan" viewBox="0 0 1024 1024"><path d="M104.056937 234.811934l809.254078 0c22.343891 0 40.46255-18.11559 40.46255-40.46255 0-22.347984-18.119683-40.46255-40.46255-40.46255L104.056937 153.886833c-22.347984 0-40.46255 18.11559-40.46255 40.46255C63.594387 216.696344 81.708953 234.811934 104.056937 234.811934zM913.311015 477.587236 104.056937 477.587236c-22.347984 0-40.46255 18.11559-40.46255 40.46255 0 22.343891 18.11559 40.46255 40.46255 40.46255l809.254078 0c22.343891 0 40.46255-18.119683 40.46255-40.46255C953.773566 495.702825 935.653883 477.587236 913.311015 477.587236zM913.311015 801.289686 104.056937 801.289686c-22.347984 0-40.46255 18.11559-40.46255 40.46255 0 22.347984 18.11559 40.46255 40.46255 40.46255l809.254078 0c22.343891 0 40.46255-18.11559 40.46255-40.46255C953.773566 819.404252 935.653883 801.289686 913.311015 801.289686z"  ></path></symbol><symbol id="icon-dingwei" viewBox="0 0 1024 1024"><path d="M512 608.732942c-112.952312 0-204.845025-91.892713-204.845025-204.834793s91.892713-204.845025 204.845025-204.845025S716.845025 290.945837 716.845025 403.898149s-91.892713 204.834792-204.845025 204.834793z m0-360.346325c-85.742655 0-155.542231 69.758644-155.542231 155.542231s69.758644 155.542231 155.542231 155.542232 155.542231-69.758644 155.542231-155.542232-69.799576-155.531998-155.542231-155.531998z"  ></path><path d="M512 1005.120038a24.66163 24.66163 0 0 1-17.846424-41.699644c0.890275-0.931207 89.580046-94.236079 178.699604-212.182116 114.364472-151.346684 174.811048-271.462126 174.811048-347.340129 0-185.095255-150.579206-335.643762-335.643762-335.643762s-335.643762 150.579206-335.643762 335.643762c0 62.053164 40.348883 185.463645 232.566335 420.925931a24.671863 24.671863 0 0 1-38.22041 31.221009C208.968941 657.98457 126.981812 505.870408 126.981812 403.898149c0-212.304913 172.723508-385.018188 385.018188-385.018187S897.018188 191.593237 897.018188 403.898149c0 73.524403-45.977056 177.880961-136.652037 310.173722-94.502139 137.869769-200.311788 251.732822-230.49926 283.393852a24.5593 24.5593 0 0 1-17.866891 7.654315z"  ></path></symbol><symbol id="icon-womorenzhuangtai" viewBox="0 0 1024 1024"><path d="M847.404467 1024H217.25062c-58.441687 0-104.17866-48.277916-104.17866-104.17866 0-188.029777 152.456576-340.486352 340.486353-340.486352h157.538461c188.029777 0 340.486352 152.456576 340.486353 340.486352 2.540943 55.900744-45.736973 104.17866-104.17866 104.17866z m-236.307693-393.846154h-157.538461c-160.079404 0-289.667494 129.588089-289.667494 289.667494 0 27.950372 22.868486 53.359801 53.359801 53.359801h630.153847c27.950372 0 53.359801-22.868486 53.359801-53.359801 0-160.079404-129.588089-289.667494-289.667494-289.667494z m-78.769231-78.769231c-144.833747 0-261.717122-116.883375-261.717121-261.717121S387.493797 25.409429 532.327543 25.409429s261.717122 116.883375 261.717122 261.717122-116.883375 264.258065-261.717122 264.258064z m0-472.615384c-116.883375 0-210.898263 94.014888-210.898263 210.898263s94.014888 210.898263 210.898263 210.898263c116.883375 0 210.898263-94.014888 210.898263-210.898263s-94.014888-210.898263-210.898263-210.898263z" fill="" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)