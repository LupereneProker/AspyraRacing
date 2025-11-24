document.querySelectorAll('a').forEach(a=>{
 a.addEventListener('click',e=>{
   const url=a.getAttribute('href');
   if(!url.endsWith('.html')) return;
   e.preventDefault();
   document.body.classList.add('page-exit');
   setTimeout(()=>{window.location.href=url;},380);
 });
});