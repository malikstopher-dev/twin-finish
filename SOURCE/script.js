
const toggle=document.querySelector('.nav-toggle');const nav=document.querySelector('.nav-links');if(toggle){toggle.addEventListener('click',()=>nav.classList.toggle('open'));}
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav?.classList.remove('open')));
const filters=document.querySelectorAll('.filter');const projects=document.querySelectorAll('.project');filters.forEach(btn=>btn.addEventListener('click',()=>{filters.forEach(b=>b.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;projects.forEach(p=>p.classList.toggle('hidden',f!=='all'&&!p.dataset.cat.includes(f)));}));
const form=document.querySelector('#contactForm');if(form){form.addEventListener('submit',e=>{e.preventDefault();document.querySelector('#formMessage').textContent='Thanks. This demo form is ready to connect to email, WhatsApp or a backend when the site goes live.';});}
