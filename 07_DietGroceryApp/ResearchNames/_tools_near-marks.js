const fs=require('fs');const {norm,sleep}=require('./check.js');
const fin={HushPlate:'hush plate',StillFork:'still fork',Fetchfork:'fetch fork',Nourcart:'nour cart',SatietyCart:'satiety cart',Satietta:'satietta',Quartermeal:'quarter meal',Lessplate:'less plate',Pantrysteward:'pantry steward',Satiora:'satiora',Provendi:'provendi',Pantrova:'pantrova',Leanvia:'leanvia',CartPilot:'cart pilot',QuietPlate:'quiet plate',SteadyCart:'steady cart',Mealsteward:'meal steward',Kitchenward:'kitchen ward',Plenticart:'plenti cart',GLPlate:'glp plate',Hushcart:'hush cart',Enoughly:'enoughly',Grocient:'grocient',Morselly:'morselly'};
const rel=c=>/0(09|35|39|42|44|29|30|31|43|05)/.test(c);
(async()=>{const out={};for(const [name,words] of Object.entries(fin)){
 const n=norm(name);
 const qs=[`${n}~1`, words.split(' ').length>1?`"${words}"`:`${n}*`];
 const q={query:{bool:{should:qs.map(s=>({query_string:{query:s,fields:['wordmark'],default_operator:'AND'}}))}},size:40,_source:['wordmark','alive','ownerName','internationalClass']};
 const r=await fetch('https://tmsearch.uspto.gov/prod-stage-v1-0-0/tmsearch',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(q)});
 const j=await r.json();const hits=(j.hits?.hits||[]).map(h=>h.source).filter(s=>s.alive&&s.wordmark);
 const near=hits.map(s=>`${s.wordmark} [${(s.internationalClass||[]).join(',')}]`);
 // site check
 let site='';try{const h=await fetch('https://'+n.toLowerCase()+'.com',{signal:AbortSignal.timeout(12000),redirect:'follow'});const t=await h.text();site=`${h.status} ${(t.match(/<title[^>]*>([^<]{0,80})/i)||[])[1]||''}`.trim();}catch(e){site='no site/unreachable';}
 out[name]={near,site};console.log(name,'| TM near:',near.slice(0,6).join('; ')||'none','| site:',site);await sleep(300);}
fs.writeFileSync('deep.json',JSON.stringify(out,null,1));})();
