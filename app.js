
(function(){
  var bar=document.querySelector('.progress');
  if(bar){
    var onScroll=function(){
      var h=document.documentElement;
      var max=h.scrollHeight-h.clientHeight;
      bar.style.width=(max>0?(h.scrollTop/max*100):0)+'%';
    };
    window.addEventListener('scroll',onScroll,{passive:true});
    onScroll();
  }
  var topBtn=document.querySelector('.top-btn');
  if(topBtn){
    window.addEventListener('scroll',function(){
      topBtn.classList.toggle('show',window.scrollY>600);
    },{passive:true});
    topBtn.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'});});
  }
  document.querySelectorAll('[data-copy]').forEach(function(btn){
    btn.addEventListener('click',function(){
      var wrap=btn.closest('.code-wrap');
      var code=wrap?wrap.querySelector('code'):null;
      if(!code) return;
      var text=code.innerText;
      function done(){var old=btn.textContent; btn.textContent='已复制'; setTimeout(function(){btn.textContent=old;},1200);}
      if(navigator.clipboard && navigator.clipboard.writeText){
        navigator.clipboard.writeText(text).then(done).catch(function(){fallback(text,done);});
      }else{fallback(text,done);}
    });
  });
  function fallback(text,done){
    var ta=document.createElement('textarea');
    ta.value=text; ta.style.position='fixed'; ta.style.opacity='0';
    document.body.appendChild(ta); ta.select();
    try{document.execCommand('copy'); done();}catch(e){}
    document.body.removeChild(ta);
  }
})();
