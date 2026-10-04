document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const el=document.querySelector(a.getAttribute('href'));if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'})}}));
document.querySelectorAll('.filter-btn').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const filter=btn.dataset.filter;document.querySelectorAll('.project-card').forEach(card=>{card.classList.toggle('is-hidden',filter!=='all'&&card.dataset.category!==filter)})}));

const contactForm=document.getElementById('contactForm');
if(contactForm) contactForm.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(contactForm);const subject=encodeURIComponent(d.get('subject'));const body=encodeURIComponent('Name: '+d.get('name')+'\nEmail: '+d.get('email')+'\n\n'+d.get('message'));window.location.href='mailto:Suggukarthik@gmail.com?subject='+subject+'&body='+body;});
