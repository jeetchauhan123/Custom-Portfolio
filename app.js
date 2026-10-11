(()=>{
const D=PORTFOLIO,P=D.profile,$=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const hue=s=>[...s].reduce((a,c)=>a*31+c.charCodeAt(0),7)%360;
const dl=i=>`style="--dl:${i*90}ms"`;
const links=(l=[])=>(l=l.filter(x=>x.url)).length?`<div class="links">${l.map(x=>`<a href="${esc(x.url)}" target="_blank" rel="noopener noreferrer">${esc(x.label)} ↗</a>`).join("")}</div>`:"";
const tags=t=>t?.length?`<div class="tags">${t.map(x=>`<span class="tag">${esc(x)}</span>`).join("")}</div>`:"";
const ul=b=>b?.length?`<ul>${b.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`:"";
const jobs=(a=[])=>`<div class="tl">${a.map((j,i)=>`<article class="card spot rv" ${dl(0)}><h3>${esc(j.title)}</h3><div class="meta"><span>${esc(j.org)}</span><span>${esc(j.location||"")}</span><span class="when">${esc(j.period)}</span></div>${ul(j.bullets)}${tags(j.tags)}${links(j.links)}</article>`).join("")}</div>`;
const IC={a:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M8 4h8v5a4 4 0 0 1-8 0z"/><path d="M8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8 21h8M10 17h4"/></svg>`,c:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="9" r="5.5"/><path d="M8.5 14 7 21l5-3 5 3-1.5-7"/><path d="m9.8 9 1.6 1.6L14.4 7.6"/></svg>`};
const proj=p=>`<article class="card spot feat rv"><div class="vis" style="--h:${p.hue||hue(p.name)}">${p.image?`<img src="${esc(p.image)}" alt="${esc(p.name)} preview" loading="lazy">`:`<span class="win"><i></i><i></i><i></i></span><em>${esc(p.name[0])}</em>`}</div><div><h3>${esc(p.name)}</h3><p class="tg">${esc(p.tagline)}</p>${p.description?`<p>${esc(p.description)}</p>`:""}${ul(p.highlights)}${tags(p.tags)}${links(p.links)}</div></article>`;
const mini=(p,i)=>`<article class="card spot" style="--dl:${i*70}ms"><h3>${esc(p.name)}</h3><p style="color:var(--mute);margin:.3rem 0 0">${esc(p.tagline)}</p>${tags(p.tags)}${links(p.links)}</article>`;
const S={
 about:()=>`<div class="about"><div class="rv">${P.about.map(t=>`<p>${esc(t)}</p>`).join("")}</div><div class="card spot facts rv" ${dl(2)}>${P.facts.map(f=>`<div><small>${esc(f.label)}</small><b>${esc(f.value)}</b></div>`).join("")}</div></div>`,
 experience:()=>jobs(D.experience),
 projects:()=>{const f=D.projects.filter(p=>p.featured),o=D.projects.filter(p=>!p.featured);return f.map(proj).join("")+(o.length?`<div class="more" id="more"><div><div class="arch"><div class="chips" id="chips"></div><div class="mini" id="mini"></div><div class="pager" id="pager"></div></div></div></div><div class="center"><button class="btn" id="mbtn" aria-expanded="false">Show all projects (${o.length} more)</button></div>`:"")},
 skills:()=>`<svg width="0" height="0"><defs><linearGradient id="gr"><stop offset="0" stop-color="#7b8cff"/><stop offset="1" stop-color="#ff8a9b"/></linearGradient></defs></svg><div class="sk"><div class="sk-tabs" role="tablist">${D.skills.map((l,i)=>`<button role="tab" class="${i?"":"on"}" data-i="${i}"><b>${esc(l.name)}</b><small>${esc(l.blurb)}</small></button>`).join("")}</div><div class="sk-panel" id="skp" aria-live="polite"></div></div>`,
 education:()=>`<div class="edu">${D.education.map((e,i)=>`<article class="card spot rv" ${dl(i)}><span class="wm" aria-hidden="true">${esc(e.short||"")}</span><div class="lv">${esc(e.level||"")}</div><h3>${esc(e.title)}</h3><div class="org"><b>${esc(e.org)}</b><br><span>${esc(e.location)}</span></div><span class="when">${esc(e.from)} – ${esc(e.to)}</span><p>${esc(e.note)}</p>${links(e.links)}</article>`).join("")}</div>`,
 certifications:()=>`<p class="count">${D.certifications.length} credentials and counting</p><div class="certs">${D.certifications.map((c,i)=>`<article class="card cert tilt rv" ${dl(i%4)} style="--h:${hue(c.title+c.issuer)}"><div class="ch"><div class="ci">${IC[c.kind==="Award"?"a":"c"]}</div><span class="kb">${esc(c.kind||"Certification")}</span></div><h3>${esc(c.title)}</h3><span class="k">${esc(c.issuer)}${c.year?" · "+esc(c.year):""}</span>${links(c.links)}</article>`).join("")}</div>`
};
const TITLES={about:"About",experience:"Experience",projects:"Featured projects",skills:"Skills",education:"Education",certifications:"Certifications"};
Object.entries(D.custom||{}).forEach(([id,c])=>{S[id]=()=>jobs(c.items);TITLES[id]=c.title;D.intro[id]=c.intro||""});

const ini=P.name.split(" ");
$("#pre").innerHTML=[...P.name].map((c,i)=>`<span style="animation-delay:${i*50}ms">${c===" "?"&nbsp;":esc(c)}</span>`).join("");
document.title=`${P.name} | ${P.roles[0]}`;$("#brand").textContent=P.name;
const soc=(D.socials||[]).filter(s=>s.url).map(s=>`<a class="btn" href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.label)}</a>`).join("");
const all=D.skills.flatMap(l=>l.items.map(i=>i.name)),mq=[...all,...all].map(x=>`<span>${esc(x)}</span>`).join("");
let h=`<div class="hero"><div class="status rv"><i></i>${P.openToWork?"Open to new opportunities":"Currently booked"}</div>
<h1 class="obs" aria-label="${esc(P.name)}"><span class="ln"><span>${esc(ini[0])}</span></span><span class="ln"><span>${esc(ini.slice(1).join(" "))}</span></span></h1>
<p class="role rv" ${dl(3)}>I'm a <b id="role"></b><i></i></p><p class="lead rv" ${dl(4)}>${esc(P.tagline)}</p>
<div class="row rv" ${dl(5)}>${P.resume?`<a class="btn pri mag" href="${esc(P.resume)}" target="_blank" rel="noopener noreferrer">View resume ↗</a>`:""}<a class="btn mag" href="#contact">Get in touch</a>${soc}</div>
<div class="stats">${D.stats.map((s,i)=>`<div class="rv" ${dl(i+4)}><b data-n="${s.value}" data-s="${esc(s.suffix||"")}">0</b><span>${esc(s.label)}</span></div>`).join("")}</div></div>
<div class="marq"><div>${mq}</div></div>`;
const nav=[];
D.order.forEach(id=>{if(!S[id])return;nav.push(id);h+=`<section id="${id}"><h2 class="rv">${esc(TITLES[id])}</h2><p class="sub rv" ${dl(1)}>${esc(D.intro?.[id]||"")}</p>${S[id]()}</section>`});
const rows=[{l:"Email",v:P.email,u:"mailto:"+P.email},P.phone&&{l:"Phone",v:P.phone,u:"tel:"+P.phone.replace(/\s/g,"")},...(D.socials||[]).filter(s=>s.url).map(s=>({l:s.label,v:s.url.replace(/^https?:\/\/(www\.)?/,""),u:s.url,x:1}))].filter(Boolean);
const fw=Array(3).fill(`<span>Let's build together</span><span>✦</span>`).join("");
h+=`<footer id="contact"><div class="fm" aria-hidden="true"><div>${fw}${fw}</div></div><div class="fin"><div class="fgrid"><div><h2 class="rv">Have an idea? Let's make it real.</h2><p class="sub rv">Whether it's a role, a project or just a question about how something was built, my inbox is open.</p>
<div class="row rv"><a class="btn pri mag" href="mailto:${esc(P.email)}">Say hello</a><button class="btn" id="copy">Copy email</button>${P.resume?`<a class="btn" href="${esc(P.resume)}" target="_blank" rel="noopener noreferrer">Resume ↗</a>`:""}</div>
<div class="status rv"><i></i>${P.openToWork?"Available for new roles":"Currently booked"}</div></div>
<div class="cl rv">${rows.map(r=>`<a href="${esc(r.u)}"${r.x?` target="_blank" rel="noopener noreferrer"`:""}><div><small>${esc(r.l)}</small><b>${esc(r.v)}</b></div><span>↗</span></a>`).join("")}</div></div>
<div class="fcols"><div class="fb"><b>${esc(P.name)}</b><p>${esc(P.roles[0])} from ${esc(P.location)}.</p><p>Thanks for scrolling all the way down.</p></div>
<div><h4>Explore</h4>${nav.map(id=>`<a href="#${id}">${esc(TITLES[id])}</a>`).join("")}</div>
<div><h4>Right now</h4><p>${esc(P.location)}</p><p>Local time: <span id="clock"></span></p></div></div>
<div class="fbot"><span>© ${new Date().getFullYear()} ${esc(P.name)}</span><span>Built with HTML, CSS and JavaScript, driven by one data file.</span><button class="top" id="up" aria-label="Back to top">↑</button></div></div></footer>`;
$("main").innerHTML=h;
$("#nav").innerHTML=nav.map(id=>`<a href="#${id}">${esc(TITLES[id].replace("Featured ",""))}</a>`).join("")+`<a href="#contact">Contact</a>`;

// theme
const root=document.documentElement;let th="dark";try{th=localStorage.getItem("th")||(matchMedia("(prefers-color-scheme:light)").matches?"light":"dark")}catch(e){}
root.dataset.theme=th;$("#theme").onclick=()=>{th=th==="dark"?"light":"dark";root.dataset.theme=th;try{localStorage.setItem("th",th)}catch(e){}};

// skills
const paint=i=>{const p=$("#skp"),C=213.6;p.innerHTML=D.skills[i].items.map((s,k)=>`<div class="card spot" style="--dl:${k*70}ms${s.color?`;--gc:${s.color}`:""}"><div class="ring"><svg viewBox="0 0 80 80"><circle class="t" cx="40" cy="40" r="34"/><circle class="v" cx="40" cy="40" r="34" stroke-dasharray="${C}" stroke-dashoffset="${C}" data-o="${C*(1-s.level/100)}"/></svg><span>${s.icon?`<i class="ico ${esc(s.icon)}"></i>`:`<i class="ico mono">${esc(s.mono||s.name.slice(0,2))}</i>`}</span></div><b>${esc(s.name)}</b><small>${esc(s.note||"")}</small></div>`).join("");
 requestAnimationFrame(()=>requestAnimationFrame(()=>$$(".v",p).forEach(c=>c.style.strokeDashoffset=c.dataset.o)))};
if($("#skp")){paint(0);$$(".sk-tabs button").forEach(b=>b.onclick=()=>{$$(".sk-tabs button").forEach(x=>x.classList.toggle("on",x===b));paint(+b.dataset.i)})}

// projects archive: tag filters + pages
const mb=$("#mbtn");if(mb){const o=D.projects.filter(p=>!p.featured),n=o.length,PER=6,cnt={};let f="All",pg=0;
 o.forEach(p=>(p.tags||[]).forEach(t=>cnt[t]=(cnt[t]||0)+1));const tg=Object.keys(cnt).sort((x,y)=>cnt[y]-cnt[x]).slice(0,8);
 const draw=()=>{const l=o.filter(p=>f==="All"||(p.tags||[]).includes(f)),pages=Math.max(1,Math.ceil(l.length/PER));pg=Math.min(pg,pages-1);
  $("#chips").innerHTML=n>PER?["All",...tg].map(t=>`<button class="chip${t===f?" on":""}" data-t="${esc(t)}">${esc(t)}</button>`).join(""):"";
  $("#mini").innerHTML=l.slice(pg*PER,pg*PER+PER).map(mini).join("");
  $("#pager").innerHTML=pages>1?`<button ${pg?"":"disabled"} data-d="-1" aria-label="Previous page">‹</button><span>${pg+1} / ${pages}</span><button ${pg<pages-1?"":"disabled"} data-d="1" aria-label="Next page">›</button>`:"";
  $$(".chip").forEach(b=>b.onclick=()=>{f=b.dataset.t;pg=0;draw()});$$("#pager button").forEach(b=>b.onclick=()=>{pg+=+b.dataset.d;draw()})};
 draw();mb.onclick=()=>{const op=$("#more").classList.toggle("open");mb.setAttribute("aria-expanded",op);mb.textContent=op?"Show fewer projects":`Show all projects (${n} more)`}}

// footer bits
$("#copy").onclick=async e=>{try{await navigator.clipboard.writeText(P.email);e.target.textContent="Copied ✓"}catch(x){e.target.textContent="Press Ctrl+C on the address"}setTimeout(()=>e.target.textContent="Copy email",2000)};
$("#up").onclick=()=>scrollTo({top:0,behavior:"smooth"});
const clock=()=>{try{$("#clock").textContent=new Date().toLocaleTimeString([],{timeZone:P.timezone,hour:"2-digit",minute:"2-digit"})}catch(e){}};clock();setInterval(clock,30000);

// role typer
const rs=P.roles;let ri=0,ci=0,del=false;const re=$("#role");
(function tick(){const w=rs[ri];ci+=del?-1:1;re.textContent=w.slice(0,ci);let t=del?40:80;if(!del&&ci===w.length){del=true;t=1400}else if(del&&ci===0){del=false;ri=(ri+1)%rs.length;t=300}setTimeout(tick,t)})();

// counters
const count=e=>{const n=+e.dataset.n,s=e.dataset.s,t0=performance.now();(function f(t){const k=Math.min(1,(t-t0)/1600),v=Math.round(n*(1-Math.pow(1-k,4)));e.textContent=v+s;if(k<1)requestAnimationFrame(f)})(t0)};

// reveal, start after preloader
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add("in");$$("[data-n]",e.target).forEach(count);if(e.target.dataset.n)count(e.target);io.unobserve(e.target)}),{threshold:.15});
setTimeout(()=>{$("#pre").classList.add("go");$$(".rv,.obs").forEach(e=>io.observe(e));setTimeout(()=>$("#pre").remove(),1200)},1400);

// scroll: progress, timeline, nav spy
const secs=$$("section"),links_=$$("#nav a"),bar=$("#bar");
const onS=()=>{const h=document.documentElement,m=h.scrollHeight-innerHeight;bar.style.transform=`scaleX(${m?scrollY/m:0})`;
 $$(".tl").forEach(t=>{const r=t.getBoundingClientRect();t.style.setProperty("--p",Math.min(1,Math.max(0,(innerHeight*.6-r.top)/r.height)))});
 let cur="";secs.forEach(s=>{if(s.getBoundingClientRect().top<innerHeight*.4)cur=s.id});if(innerHeight+scrollY>=h.scrollHeight-40)cur="contact";
 links_.forEach(a=>a.classList.toggle("on",a.hash==="#"+cur))};
let tk=false;addEventListener("scroll",()=>{if(!tk){tk=true;requestAnimationFrame(()=>{onS();tk=false})}},{passive:true});onS();

// pointer effects: spotlight, tilt, magnetic
document.addEventListener("pointermove",e=>{
 const c=e.target.closest?.(".spot,.tilt");if(c){const r=c.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;c.style.setProperty("--x",x+"px");c.style.setProperty("--y",y+"px");
  if(c.classList.contains("tilt"))c.style.transform=`rotateY(${(x/r.width-.5)*14}deg) rotateX(${-(y/r.height-.5)*14}deg) translateZ(8px)`}
 $$(".tilt").forEach(t=>{if(t!==c)t.style.transform=""});
 const m=e.target.closest?.(".mag");$$(".mag").forEach(b=>{if(b===m){const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.25}px,${(e.clientY-r.top-r.height/2)*.35}px)`}else b.style.transform=""})});
})();
