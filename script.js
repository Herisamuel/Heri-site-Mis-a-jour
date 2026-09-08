const menu=document.querySelector('.menu'),nav=document.querySelector('.header nav');
menu?.addEventListener('click',()=>nav.classList.toggle('open'));

document.querySelectorAll('.filters button').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.filters button').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const f=btn.dataset.f;
    document.querySelectorAll('.grid figure').forEach(card=>{
      card.classList.toggle('hide',f!=='all' && card.dataset.c!==f);
    });
  });
});

let lang='fr';
document.getElementById('lang')?.addEventListener('click',()=>{
  lang=lang==='fr'?'en':'fr';
  document.documentElement.lang=lang;
  document.getElementById('lang').textContent=lang==='fr'?'EN':'FR';
  document.querySelectorAll('[data-fr]').forEach(el=>{
    el.innerHTML=el.dataset[lang];
  });
});

document.getElementById('contactForm')?.addEventListener('submit',e=>{
  e.preventDefault();
  const name=document.getElementById('name').value.trim();
  const email=document.getElementById('email').value.trim();
  const message=document.getElementById('message').value.trim();
  const subject=encodeURIComponent('Demande de projet — Portfolio Sam Heri');
  const body=encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\nProjet:\n${message}`);
  window.location.href=`mailto:samuelheri97@gmail.com?subject=${subject}&body=${body}`;
});