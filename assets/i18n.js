/* 다국어(한국어·English·Русский·Монгол) 전환: 페이지 문구를 사전(i18n-data.js)으로 치환 */
(function(){
  var LANGS={ko:'한국어',en:'English',ru:'Русский',mn:'Монгол'};
  var CODE={ko:'KO',en:'EN',ru:'RU',mn:'MN'};
  var ORDER=['ko','en','ru','mn'];
  function getLang(){
    try{
      var q=new URLSearchParams(location.search).get('lang');
      if(q&&LANGS[q]){localStorage.setItem('lang',q);return q;}
      var s=localStorage.getItem('lang');
      if(s&&LANGS[s])return s;
    }catch(e){}
    return 'ko';
  }
  var lang=getLang();
  document.documentElement.setAttribute('lang',lang);
  var col=ORDER.indexOf(lang);              // 사전 열 번호 (0=한국어)
  var dict={};
  if(col>0&&window.I18N_ROWS){window.I18N_ROWS.forEach(function(r){if(r[col])dict[r[0]]=r[col];});}

  function norm(s){return s.replace(/\s+/g,' ').trim();}
  var SVG_PREFIX=/^(\s*<svg[\s\S]*?<\/svg>)+/;
  function isCand(el){
    var t=el.tagName;
    if(t==='SCRIPT'||t==='STYLE'||t==='NOSCRIPT'||t==='svg'&&false)return false;
    for(var n=el.firstChild;n;n=n.nextSibling){
      if(n.nodeType===3&&/[가-힣]/.test(n.nodeValue))return true;
    }
    return false;
  }
  function walk(el){
    if(el.nodeType!==1)return;
    var tag=el.tagName.toLowerCase();
    if(tag==='script'||tag==='style'||tag==='noscript'||el.classList.contains('lang-m'))return;
    ['aria-label','alt','title'].forEach(function(a){
      var v=el.getAttribute&&el.getAttribute(a);
      if(v&&dict[norm(v)])el.setAttribute(a,dict[norm(v)]);
    });
    if(isCand(el)){
      var html=el.innerHTML,m=html.match(SVG_PREFIX),prefix=m?m[0]:'',rest=html.slice(prefix.length);
      var key=norm(rest);
      var nk=el.closest&&el.closest('nav.tabs')?dict['N:'+key]:undefined;
      if(nk!==undefined){el.innerHTML=prefix+nk;return;}
      if(dict[key]!==undefined){el.innerHTML=prefix+dict[key];return;}
    }
    for(var c=el.firstElementChild;c;c=c.nextElementSibling)walk(c);
  }
  function apply(root){
    if(col<1)return;
    walk(root||document.body);
  }
  window.i18nApply=apply;
  window.i18nLang=lang;

  function ready(f){document.readyState==='loading'?document.addEventListener('DOMContentLoaded',f):f();}
  ready(function(){
    if(col>0){
      var tk='T:'+norm(document.title);if(dict[tk])document.title=dict[tk];
      apply(document.body);
      var mw=document.querySelector('.map-wrap');
      if(mw&&window.MutationObserver){
        var busy=false,tm;
        new MutationObserver(function(){
          if(busy)return;clearTimeout(tm);
          tm=setTimeout(function(){busy=true;apply(mw);busy=false;},150);
        }).observe(mw,{childList:true,subtree:true});
      }
    }
    document.documentElement.classList.remove('i18n-wait');
    /* 언어 선택 메뉴 */
    var b=document.querySelector('.lang-b'),menu=document.querySelector('.lang-m');
    if(b&&menu){
      b.textContent=CODE[lang];
      b.addEventListener('click',function(e){e.stopPropagation();var r=b.getBoundingClientRect();menu.style.top=(r.bottom+6)+'px';menu.style.right=Math.max(8,document.documentElement.clientWidth-r.right)+'px';menu.classList.toggle('open');});window.addEventListener('scroll',function(){menu.classList.remove('open');},{passive:true});
      document.addEventListener('click',function(){menu.classList.remove('open');});
      [].forEach.call(menu.querySelectorAll('[data-l]'),function(a){
        if(a.getAttribute('data-l')===lang)a.setAttribute('aria-current','true');
        a.addEventListener('click',function(e){
          e.preventDefault();
          try{localStorage.setItem('lang',a.getAttribute('data-l'));}catch(x){}
          location.href=location.pathname+location.hash;
        });
      });
    }
  });
  setTimeout(function(){document.documentElement.classList.remove('i18n-wait');},2500);
})();
