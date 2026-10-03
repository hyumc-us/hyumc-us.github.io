/* 공통 영역(아이콘·헤더·푸터) 주입. 병원 서버에서는 공통 include로 대체 가능 */
(function(){
  var b=document.body, root=b.getAttribute('data-root')||'', cur=b.getAttribute('data-page');
  var sprite='<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>'+
  '<symbol id="i-home" viewBox="0 0 48 48"><path d="M24 6 4 23h6v18h28V23h6z"/><rect class="a" x="20" y="28" width="8" height="13"/></symbol>'+
  '<symbol id="i-exam" viewBox="0 0 48 48"><rect x="9" y="8" width="30" height="35" rx="3"/><rect class="a" x="16" y="4" width="16" height="9" rx="2"/><path class="a" d="M15 22h18v3H15zm0 8h18v3H15z"/></symbol>'+
  '<symbol id="i-check" viewBox="0 0 48 48"><circle cx="24" cy="24" r="20"/><path class="a" d="M13 24.5l3-3 5 5 11-11.5 3 3L21 33z"/></symbol>'+
  '<symbol id="i-faq" viewBox="0 0 48 48"><path d="M8 7h32a3 3 0 0 1 3 3v22a3 3 0 0 1-3 3H27l-9 8v-8H8a3 3 0 0 1-3-3V10a3 3 0 0 1 3-3z"/><circle class="a" cx="15" cy="21" r="3"/><circle class="a" cx="24" cy="21" r="3"/><circle class="a" cx="33" cy="21" r="3"/></symbol>'+
  '<symbol id="i-floor" viewBox="0 0 48 48"><path d="M24 3 3 14l21 12 21-12z"/><path class="a" d="M3 19l21 12 21-12v5L24 36 3 24z"/><path d="M3 28l21 12 21-12v5L24 45 3 33z"/></symbol>'+
  '<symbol id="i-pin" viewBox="0 0 48 48"><path d="M24 3a14 14 0 0 0-14 14c0 10 14 28 14 28s14-18 14-28A14 14 0 0 0 24 3z"/><circle class="a" cx="24" cy="17" r="6"/></symbol>'+
  '<symbol id="i-phone" viewBox="0 0 48 48"><path d="M13 4h8l3 11-5 3a24 24 0 0 0 11 11l3-5 11 3v8a4 4 0 0 1-4 4C22 39 9 26 9 8a4 4 0 0 1 4-4z"/></symbol>'+
  '<symbol id="i-clock" viewBox="0 0 48 48"><circle cx="24" cy="24" r="20"/><path class="a" d="M22 12h4v11l7 4-2 3-9-5z"/></symbol>'+
  '<symbol id="i-subway" viewBox="0 0 48 48"><rect x="9" y="4" width="30" height="32" rx="7"/><rect class="a" x="14" y="10" width="20" height="10" rx="2"/><circle class="a" cx="17" cy="28" r="2.5"/><circle class="a" cx="31" cy="28" r="2.5"/><path d="M13 44l5-7h12l5 7h-4l-1-2H18l-1 2z"/></symbol>'+
  '<symbol id="i-bus" viewBox="0 0 48 48"><rect x="6" y="7" width="36" height="30" rx="5"/><rect class="a" x="10" y="12" width="28" height="11"/><circle class="a" cx="15" cy="30" r="2.5"/><circle class="a" cx="33" cy="30" r="2.5"/><rect x="11" y="37" width="6" height="6"/><rect x="31" y="37" width="6" height="6"/></symbol>'+
  '<symbol id="i-car" viewBox="0 0 48 48"><path d="M10 20l4-10h20l4 10h3a2 2 0 0 1 2 2v13H5V22a2 2 0 0 1 2-2z"/><path class="a" d="M16 14h16l2 6H14z"/><circle class="a" cx="14" cy="28" r="2.5"/><circle class="a" cx="34" cy="28" r="2.5"/></symbol>'+
  '<symbol id="i-receipt" viewBox="0 0 48 48"><path d="M10 4h28v40l-5-3-5 3-4-3-4 3-5-3-5 3z"/><path class="a" d="M16 14h16v3H16zm0 8h16v3H16zm0 8h10v3H16z"/></symbol>'+
  '<symbol id="i-probe" viewBox="0 0 48 48"><rect x="17" y="3" width="14" height="25" rx="5"/><path class="a" d="M19.5 11h9v4h-9z"/><path d="M9 33a22 22 0 0 1 30 0l-3 3a17.5 17.5 0 0 0-24 0z"/><path d="M16 40a12 12 0 0 1 16 0l-3 3a7.5 7.5 0 0 0-10 0z"/></symbol>'+
  '<symbol id="i-report" viewBox="0 0 48 48"><rect x="8" y="4" width="30" height="40" rx="3"/><path class="a" d="M14 14h18v3H14zm0 8h18v3H14z"/><circle class="a" cx="36" cy="36" r="9"/><path class="s2" d="M32 36l3 3 5-6"/></symbol>'+
  '<symbol id="i-shield" viewBox="0 0 48 48"><path d="M24 3l17 6v12c0 12-8 20-17 24C15 41 7 33 7 21V9z"/><path class="a" d="M16.5 24l5 5 10.5-11.5-3-3-7.5 8.5-2-2z"/></symbol>'+
  '<symbol id="i-heart" viewBox="0 0 48 48"><path d="M24 43S5 31 5 17a9.5 9.5 0 0 1 19-4 9.5 9.5 0 0 1 19 4c0 14-19 26-19 26z"/></symbol>'+
  '<symbol id="i-live" viewBox="0 0 48 48"><rect x="4" y="7" width="40" height="29" rx="4"/><path d="M15 44h18v-3H15z"/><path class="s" d="M9 22h7l4-8 6 16 4-8h9"/></symbol>'+
  '<symbol id="i-scan" viewBox="0 0 48 48"><rect x="4" y="6" width="40" height="31" rx="4"/><path class="a" d="M24 11 12.5 31.5a13 13 0 0 0 23 0z"/><path class="s2" d="M17 29a9 9 0 0 0 14 0M20.5 23a5 5 0 0 0 7 0"/><path d="M15 41h18v3H15z"/></symbol>'+
  '<symbol id="i-baby" viewBox="0 0 48 48"><circle cx="5.5" cy="27" r="3.5"/><circle cx="42.5" cy="27" r="3.5"/><circle cx="24" cy="26" r="19"/><circle class="a" cx="17" cy="26" r="2.6"/><circle class="a" cx="31" cy="26" r="2.6"/><path class="s" d="M18.5 33.5c3.2 3 7.8 3 11 0"/><path class="s" d="M19 7.5c1.2-3.2 5-4.4 7-2.2 1.2 1.3.8 3.2-.6 4"/></symbol>'+
  '</defs></svg>';
  function ic(id){return '<svg class="ic" aria-hidden="true"><use href="#'+id+'"/></svg>';}
  var items=[['home','홈','','i-home'],['exam','검사안내','exam/','i-exam'],['faq','자주 묻는 질문','faq/','i-faq'],['location','위치','location/','i-floor'],['directions','오시는 길','directions/','i-pin']];
  var nav=items.map(function(i){
    return '<a href="'+(root+i[2]||'./')+'"'+(i[0]===cur?' aria-current="page"':'')+'>'+ic(i[3])+i[1]+'</a>';
  }).join('');
  var head=''+
  '<header class="top"><div class="top-in"><a href="'+(root||'./')+'"><img class="logo" src="'+root+'img/logo_w.png" alt="한양대학교병원"></a>'+
  '<div class="dept"><div class="d-t"><b>영상의학과 초음파실</b><small>ULTRASOUND ROOM</small></div></div>'+
  '<a class="tel" href="tel:0222908114">'+ic('i-phone')+'02-2290-8114</a></div>'+
  '<nav class="tabs" aria-label="메뉴">'+nav+'</nav></header>';
  var title=b.getAttribute('data-title');
  if(title){
    head+='<section class="pbanner"><div class="pb-in"><h2>'+title+'</h2><p>HANYANG UNIVERSITY SEOUL HOSPITAL</p></div>'+
    '<div class="pb-bar"><div class="wrap"><a class="hm" href="'+root+'" aria-label="홈">H</a><span>초음파실 안내</span><span class="sep">›</span><span class="cur">'+title+'</span></div></div></section>';
  }
  var H='https://seoul.hyumc.com';
  function links(a){return a.map(function(x){return '<a href="'+x[1]+'" target="_blank" rel="noopener">'+x[0]+'</a>';}).join('');}
  var rela=[['한양대학교의료원',H+'/hyumc/'],['한양대학교구리병원','https://guri.hyumc.com/'],['한양대학교류마티스병원',H+'/rheumatism/'],['한양대학교국제병원',H+'/international/'],['한양대학교암병원',H+'/tp/cancer/'],['의학연구원','https://bri.hyumc.com/'],['인재채용','https://hyumc.recruiter.co.kr/career/home'],['장례식장','http://hyfuneral.co.kr/'],['발전기금','https://fund.hyumc.com/home/kor/main.do'],['입찰공고',H+'/board/commBoardBidList.do']];
  var pol=[['개인정보처리방침',H+'/conts/110006000000000.do'],['환자의 권리와 의무',H+'/conts/110007000000000.do'],['회원약관',H+'/conts/110008000000000.do'],['윤리강령',H+'/conts/110009000000000.do'],['제증명 의무기록사본 발급',H+'/conts/102008002000000.do'],['비급여진료비',H+'/hospital/treatmentList.do'],['홈페이지 이용문의',H+'/board/commBoardFaqList.do']];
  var dept=[['영상의학과',H+'/deptMenu/frtProc.do?deptNo=241'],['비뇨의학과',H+'/deptMenu/frtProc.do?deptNo=228'],['산부인과',H+'/deptMenu/frtProc.do?deptNo=229'],['한양대학교병원 홈',H+'/']];
  var SV='<svg viewBox="0 0 32 32" width="34" height="34" aria-hidden="true">';
  var SNSI={
    ft_sns02:SV+'<ellipse cx="16" cy="14" rx="13" ry="10.5" fill="#fff"/><path d="M8 21l-1.5 7 8-4.6z" fill="#fff"/><text x="16" y="17.2" text-anchor="middle" font-family="Arial,sans-serif" font-weight="800" font-size="8.6" fill="#2f3746">TALK</text></svg>',
    ft_sns05:SV+'<path fill="#fff" d="M17.5 29V17.6h3.8l.6-4.4h-4.4v-2.8c0-1.3.4-2.1 2.2-2.1h2.3V4.4c-.4-.1-1.8-.2-3.4-.2-3.4 0-5.6 2-5.600 5.700v3.300H9v4.400h4V29z"/></svg>',
    ft_sns01:SV+'<rect x="3" y="7" width="26" height="18" rx="5.5" fill="#fff"/><path d="M13.500 12v8l7-4z" fill="#2f3746"/></svg>',
    ft_sns04:SV+'<text x="16" y="25" text-anchor="middle" font-family="Arial,sans-serif" font-weight="800" font-size="28" fill="#fff">b</text></svg>'
  };
  var sns=[['카카오톡','https://pf.kakao.com/_WxgaRu','ft_sns02'],['페이스북','https://www.facebook.com/hyumc','ft_sns05'],['유튜브','https://www.youtube.com/HYUnivMedical','ft_sns01'],['블로그','https://blog.naver.com/hyumc-pr','ft_sns04']];
  var foot='<footer class="ft"><div class="ft1"><div class="ft-in"><div class="rela">'+links(rela)+'</div>'+
    '<a class="ftcall" href="tel:0222908114"><i>'+ic('i-phone')+'</i>02-2290-8114</a>'+
    '<div class="sns">'+sns.map(function(s){return '<a href="'+s[1]+'" target="_blank" rel="noopener" aria-label="'+s[0]+'" title="'+s[0]+'">'+SNSI[s[2]]+'</a>';}).join('')+'</div></div></div>'+
    '<div class="ft2"><div class="ft-in"><div class="ft2l"><div class="policy">'+links(pol)+'</div>'+
    '<div class="addr2"><p>(04763) 서울특별시 성동구 왕십리로 222-1 &nbsp; TEL.<a class="tl" href="tel:0222908114">02-2290-8114</a></p><p class="cp">Copyright © 2026 Hanyang University Medical Center All right Reserved.</p></div>'+
    '<div class="certi"><img src="'+root+'img/ft_rela01.png" alt="보건복지부 의료기관 인증"><img src="'+root+'img/ft_rela02.png" alt="의료정보시스템(EMR, OCS) 인증"></div></div>'+
    '<div class="ft2r"><details class="ddm"><summary>진료과·센터</summary><div>'+links(dept)+'</div></details>'+
    '<details class="ddm"><summary>관련사이트</summary><div>'+links(rela.slice(0,6))+'</div></details></div></div></div></footer>';
  b.insertAdjacentHTML('afterbegin',sprite+head);
  b.insertAdjacentHTML('beforeend',foot);
  window.icon=ic;
  /* 우측 빠른 메뉴 (PC 1320px 이상) + 맨 위로 버튼 */
  var up='<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M6 15l6-6 6 6" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var fab='<aside class="fab" aria-label="빠른 메뉴"><button type="button" class="fab-top"><span class="up">'+up+'</span>TOP</button>'+
    '<a href="'+root+'exam/">'+ic('i-exam')+'검사안내</a>'+
    '<a href="'+root+'location/">'+ic('i-floor')+'초음파실<br>위치</a>'+
    '<a href="'+root+'directions/">'+ic('i-pin')+'오시는 길</a>'+
    '<a href="tel:0222908114">'+ic('i-phone')+'전화문의</a></aside>'+
    '<button type="button" class="totop" aria-label="맨 위로">'+up+'</button>';
  b.insertAdjacentHTML('beforeend',fab);
  function toTop(){window.scrollTo({top:0,behavior:'smooth'});}
  [].forEach.call(document.querySelectorAll('.fab-top,.totop'),function(e){e.addEventListener('click',toTop);});
  var tt=document.querySelector('.totop');
  function onScroll(){tt.classList.toggle('show',window.scrollY>300);}
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();
  window.hydrate=function(r){(r||document).querySelectorAll('[data-i]:not([data-h])').forEach(function(e){e.setAttribute('data-h','1');e.insertAdjacentHTML('afterbegin',ic(e.getAttribute('data-i')));});};window.hydrate(document);
})();
