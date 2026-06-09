import { useState, useEffect, useRef } from "react";

/* ── helpers ── */
function useInView(t = 0.1) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: t });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return [ref, v];
}
const an = (v, d = 0, dir = "u") => ({
  opacity: v ? 1 : 0,
  transform: v ? "translate(0)" : dir === "l" ? "translateX(-30px)" : dir === "r" ? "translateX(30px)" : "translateY(30px)",
  transition: `opacity .7s ${d}s ease, transform .7s ${d}s ease`,
});
const YEL_SQ = (w=180) => `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${w}' height='8'%3E%3Cpath d='M0,5 Q${w*.25},0 ${w*.5},5 Q${w*.75},10 ${w},5' stroke='%23FBBF24' stroke-width='2.5' fill='none'/%3E%3C/svg%3E") repeat-x center/auto 8px`;
const HL_GREEN = { background:"#6EE7B7", borderRadius:8, padding:"2px 10px", display:"inline" };
const HL_PINK  = { background:"#F9A8D4", borderRadius:8, padding:"2px 6px",  display:"inline" };
const Squig = ({w=180,style={}})=>(
  <span style={{position:"absolute",bottom:-5,left:0,right:0,height:6,background:YEL_SQ(w),display:"block",...style}}/>
);

/* ── NAV ── */
function Nav(){
  const [s,setS]=useState(false);
  useEffect(()=>{const h=()=>setS(window.scrollY>30);window.addEventListener("scroll",h,{passive:true});return()=>window.removeEventListener("scroll",h);},[]);
  return(
    <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:100,padding:"18px 48px",display:"flex",alignItems:"center",justifyContent:"space-between",background:s?"rgba(255,255,255,.96)":"transparent",boxShadow:s?"0 1px 0 rgba(0,0,0,.08)":"none",transition:"background .4s,box-shadow .4s"}}>
      <span style={{fontFamily:"'Syne',sans-serif",fontSize:20,fontWeight:700}}>Elementum</span>
      <div style={{display:"flex",gap:40,position:"absolute",left:"50%",transform:"translateX(-50%)"}}>
        {["Studio","Services","Contact","FAQs"].map(l=>(
          <a key={l} href="#" style={{fontFamily:"'Space Grotesk',sans-serif",fontSize:14,color:"#111",textDecoration:"none",transition:"opacity .2s"}}
            onMouseEnter={e=>e.target.style.opacity=".4"} onMouseLeave={e=>e.target.style.opacity="1"}>{l}</a>
        ))}
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:5,cursor:"pointer"}}>
        <span style={{width:24,height:1.5,background:"#111",display:"block",borderRadius:2}}/>
        <span style={{width:24,height:1.5,background:"#111",display:"block",borderRadius:2}}/>
      </div>
    </nav>
  );
}

/* ── HERO ── */
const PHOTOS=[
  {src:"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=220&h=220&fit=crop&crop=face",w:108,bottom:0,left:"2%"},
  {src:"https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=220&h=220&fit=crop&crop=face",w:126,bottom:30,left:"14%"},
  {src:"https://images.unsplash.com/photo-1552058544-f2b08422138a?w=220&h=220&fit=crop&crop=face",w:148,top:0,left:"27%"},
  {src:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=220&h=220&fit=crop&crop=face",w:118,bottom:15,left:"44%"},
  {src:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=220&h=220&fit=crop&crop=face",w:138,bottom:0,left:"57%"},
  {src:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=220&h=220&fit=crop&crop=face",w:112,top:18,left:"71%"},
  {src:"https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=220&h=220&fit=crop&crop=face",w:130,bottom:10,left:"84%"},
];
function Hero(){
  return(
    <section style={{minHeight:"100vh",background:"#fff",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"100px 48px 60px",position:"relative",overflow:"hidden",textAlign:"center"}}>
      {/* wavy lines left */}
      <svg style={{position:"absolute",left:55,top:"35%",width:90,height:240,pointerEvents:"none",zIndex:0}} viewBox="0 0 90 240" fill="none">
        <path d="M65,8 Q15,55 65,100 Q115,145 42,190 Q12,210 28,238" stroke="#111" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <path d="M45,8 Q-5,55 45,100 Q95,145 22,190 Q-8,210 8,238" stroke="#E84545" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity=".6"/>
      </svg>
      {/* purple teardrop */}
      <div style={{position:"absolute",right:72,top:195,width:58,height:85,background:"#7C3AED",borderRadius:"50% 50% 40% 40%/55% 55% 45% 45%",transform:"rotate(18deg)",pointerEvents:"none"}}/>

      <h1 style={{fontFamily:"'Syne',sans-serif",fontSize:"clamp(50px,7.5vw,96px)",fontWeight:800,lineHeight:1.03,color:"#111",maxWidth:1000,animation:"fadeUp .8s ease both",letterSpacing:-1,position:"relative",zIndex:2}}>
        The <span style={{position:"relative",display:"inline"}}><span style={{position:"relative"}}>thinkers<Squig w={180}/></span></span> and<br/>
        doers were <span style={{...HL_PINK}}>changing</span><br/>
        the <span style={{...HL_GREEN}}>status</span> Quo with
      </h1>
      <p style={{fontFamily:"'Space Grotesk',sans-serif",fontSize:15,color:"#666",maxWidth:500,lineHeight:1.7,marginTop:22,position:"relative",zIndex:2,animation:"fadeUp .8s .12s ease both"}}>
        We are a team of strategists, designers, communicators, researchers. Together, we believe that progress only happens when you refuse to play things safe.
      </p>
      <div style={{position:"relative",width:"100%",height:240,marginTop:64,animation:"fadeIn .9s .25s ease both"}}>
        {PHOTOS.map((p,i)=>(
          <div key={i} style={{position:"absolute",width:p.w,height:p.w,...(p.top!==undefined?{top:p.top}:{}),...(p.bottom!==undefined?{bottom:p.bottom}:{}),left:p.left,borderRadius:"50%",overflow:"hidden",border:"4px solid #fff",boxShadow:"0 8px 28px rgba(0,0,0,.14)",cursor:"pointer",transition:"transform .3s"}}
            onMouseEnter={e=>e.currentTarget.style.transform="scale(1.09) translateY(-6px)"}
            onMouseLeave={e=>e.currentTarget.style.transform="none"}>
            <img src={p.src} alt="" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
          </div>
        ))}
      </div>
      <style>{`@keyframes fadeUp{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:translateY(0)}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}`}</style>
    </section>
  );
}

/* ── ABOUT ── */
function About(){
  const [ref,v]=useInView();
  return(
    <section ref={ref} style={{padding:"100px 72px",background:"#fff",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",top:-80,right:-80,width:340,height:340,background:"radial-gradient(circle,rgba(252,113,94,.14) 0%,transparent 68%)",pointerEvents:"none"}}/>
      <div style={{position:"absolute",top:50,right:45,width:72,height:72,background:"#E84545",pointerEvents:"none"}}/>
      <div style={{maxWidth:1100,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr",gap:80,alignItems:"flex-start",position:"relative",zIndex:2}}>
        <div style={an(v,0,"l")}>
          <h2 style={{fontFamily:"'Syne',sans-serif",fontSize:"clamp(30px,4.2vw,50px)",fontWeight:700,color:"#111",lineHeight:1.15,marginBottom:20,letterSpacing:-.5}}>
            <span style={{position:"relative",display:"inline-block"}}>Tomorrow<Squig w={160}/></span> should<br/>
            be better than <span style={{...HL_GREEN}}>today</span>
          </h2>
          <p style={{fontSize:14,color:"#666",lineHeight:1.75,maxWidth:400}}>We are a team of strategists, designers communicators, researchers. Together, we believe that progress only happens when you refuse to play things safe.</p>
          <a href="#" style={{display:"inline-flex",alignItems:"center",gap:12,fontSize:13,fontWeight:500,color:"#111",borderBottom:"1px solid #111",paddingBottom:2,marginTop:20,textDecoration:"none",transition:"color .2s,border-color .2s"}}
            onMouseEnter={e=>{e.currentTarget.style.color="#E84545";e.currentTarget.style.borderColor="#E84545";}}
            onMouseLeave={e=>{e.currentTarget.style.color="#111";e.currentTarget.style.borderColor="#111";}}>Read more ——→</a>
        </div>
        <div style={{...an(v,.15,"r"),display:"flex",justifyContent:"flex-end",alignItems:"flex-start"}}>
          <img style={{width:380,height:380,borderRadius:"50%",objectFit:"cover",boxShadow:"0 16px 48px rgba(0,0,0,.12)",display:"block"}} src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=760&h=760&fit=crop" alt="Team"/>
        </div>
      </div>
      {/* wavy red connector */}
      <svg style={{position:"absolute",bottom:-80,right:100,width:420,height:180,pointerEvents:"none",zIndex:10,overflow:"visible"}} viewBox="0 0 420 180" fill="none">
        <path d="M380,0 Q340,80 240,120 Q140,160 40,140 Q0,132 10,180" stroke="#E84545" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      </svg>
    </section>
  );
}

/* ── PROGRESS ── */
function Progress(){
  const [ref,v]=useInView();
  return(
    <section ref={ref} style={{padding:"140px 72px 100px",background:"#fff",position:"relative"}}>
      <div style={{position:"absolute",top:90,left:90,width:0,height:0,borderLeft:"26px solid transparent",borderRight:"26px solid transparent",borderBottom:"46px solid #E84545",pointerEvents:"none"}}/>
      <div style={{position:"absolute",bottom:60,left:170,width:0,height:0,borderLeft:"44px solid transparent",borderRight:"44px solid transparent",borderBottom:"76px solid #E84545",pointerEvents:"none"}}/>
      <div style={{maxWidth:1100,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr",gap:80,alignItems:"center",position:"relative",zIndex:2}}>
        <div style={{...an(v,0,"l"),display:"flex",justifyContent:"flex-start"}}>
          <img style={{width:370,height:370,borderRadius:"50%",objectFit:"cover",boxShadow:"0 16px 48px rgba(0,0,0,.12)",display:"block"}} src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=740&h=740&fit=crop" alt="Progress"/>
        </div>
        <div style={an(v,.15,"r")}>
          <h2 style={{fontFamily:"'Syne',sans-serif",fontSize:"clamp(30px,4.2vw,50px)",fontWeight:700,color:"#111",lineHeight:1.15,marginBottom:20,letterSpacing:-.5}}>
            <span style={{...HL_GREEN}}>See</span> how we can<br/>
            help you <span style={{position:"relative",display:"inline-block"}}>progress<Squig w={160}/></span>
          </h2>
          <p style={{fontSize:14,color:"#666",lineHeight:1.75,maxWidth:400}}>We add a layer of fearless insights and action that allows change makers to accelerate their progress in areas such as brand, design, digital, comms and social research.</p>
          <a href="#" style={{display:"inline-flex",alignItems:"center",gap:12,fontSize:13,fontWeight:500,color:"#111",borderBottom:"1px solid #111",paddingBottom:2,marginTop:20,textDecoration:"none",transition:"color .2s,border-color .2s"}}
            onMouseEnter={e=>{e.currentTarget.style.color="#E84545";e.currentTarget.style.borderColor="#E84545";}}
            onMouseLeave={e=>{e.currentTarget.style.color="#111";e.currentTarget.style.borderColor="#111";}}>Read more ——→</a>
        </div>
      </div>
    </section>
  );
}

/* ── SERVICES ── */
const SVCS=[
  {cat:"Office of multiple\ninterest content",title:"Collaborative & partnership"},
  {cat:"The hanger US Air force\ndigital experimental",title:"We talk about our weight"},
  {cat:"Delta faucet content,\nsocial, digital",title:"Piloting digital confidence"},
];
function Services(){
  const [ref,v]=useInView(.1);
  const [hov,setHov]=useState(null);
  return(
    <section ref={ref} style={{padding:"100px 72px",background:"#fff"}}>
      <div style={{maxWidth:1100,margin:"0 auto"}}>
        <h2 style={{fontFamily:"'Syne',sans-serif",fontSize:"clamp(40px,6.5vw,80px)",fontWeight:800,color:"#111",lineHeight:1.05,marginBottom:64,letterSpacing:-1.5,...an(v)}}>
          What we <span style={{...HL_GREEN,fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit"}}>can</span><br/>
          <span style={{position:"relative",display:"inline-block"}}>offer<Squig w={140}/></span> you!
        </h2>
        {SVCS.map((s,i)=>(
          <div key={i} onMouseEnter={()=>setHov(i)} onMouseLeave={()=>setHov(null)}
            style={{display:"grid",gridTemplateColumns:"210px 1fr 50px",alignItems:"center",gap:24,padding:"22px 0",borderTop:"1px solid #e4e4e4",...(i===SVCS.length-1?{borderBottom:"1px solid #e4e4e4"}:{}),cursor:"pointer",...an(v,.05+i*.1)}}>
            <div style={{fontSize:11.5,color:"#aaa",lineHeight:1.55,whiteSpace:"pre-line"}}>{s.cat}</div>
            <div style={{fontFamily:"'Syne',sans-serif",fontSize:"clamp(18px,2.5vw,28px)",fontWeight:600,color:hov===i?"#E84545":"#111",transition:"color .2s",letterSpacing:-.3}}>{s.title}</div>
            <span style={{fontSize:20,color:"#444",justifySelf:"end",transition:"transform .2s",transform:hov===i?"translateX(6px)":"none",display:"block"}}>→</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── TESTIMONIALS ── */
function Testimonials(){
  const [ref,v]=useInView(.1);
  const LP=[
    {src:"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=120&h=120&fit=crop&crop=face",s:62,ml:10,mb:14,as:"flex-end"},
    {src:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&h=120&fit=crop&crop=face",s:82,ml:0,mb:14,as:"flex-start"},
    {src:"https://images.unsplash.com/photo-1554151228-14d9def656e4?w=120&h=120&fit=crop&crop=face",s:58,ml:18,mb:0,as:"flex-end"},
  ];
  const RP=[
    {src:"https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=120&h=120&fit=crop&crop=face",s:70,ml:10,mb:14,as:"flex-start"},
    {src:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=face",s:56,ml:0,mb:14,as:"flex-end"},
    {src:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face",s:88,ml:4,mb:0,as:"flex-start"},
  ];
  return(
    <section ref={ref} style={{padding:"100px 72px",background:"#fff"}}>
      <div style={{maxWidth:1100,margin:"0 auto"}}>
        <h2 style={{fontFamily:"'Syne',sans-serif",fontSize:"clamp(26px,3.8vw,44px)",fontWeight:700,color:"#111",textAlign:"center",letterSpacing:-.5,marginBottom:64,...an(v)}}>
          <span style={{...HL_GREEN,fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit"}}>What</span> our customer<br/>
          says <span style={{position:"relative",display:"inline-block"}}>About Us<Squig w={140}/></span>
        </h2>
        <div style={{display:"grid",gridTemplateColumns:"130px 1fr 160px",gap:32,alignItems:"center",...an(v,.12)}}>
          <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end"}}>
            {LP.map((p,i)=><img key={i} src={p.src} alt="" style={{width:p.s,height:p.s,borderRadius:"50%",objectFit:"cover",border:"3px solid #fff",boxShadow:"0 4px 14px rgba(0,0,0,.1)",marginBottom:p.mb,marginLeft:p.ml,alignSelf:p.as}}/>)}
          </div>
          <div style={{background:"#f7f7f7",borderRadius:14,padding:"32px 36px",position:"relative"}}>
            <div style={{fontFamily:"Georgia,serif",fontSize:40,color:"#ccc",lineHeight:1,marginBottom:12}}>"</div>
            <p style={{fontSize:13.5,color:"#444",lineHeight:1.8,textAlign:"center"}}>Elementum delivered the site within the timeline as they requested. In the end, the client found a 50% increase in traffic within days since its launch. They also had an impressive ability to use technologies that the company hasn't used, which have also proved to be easy to use and reliable.</p>
            <div style={{position:"absolute",bottom:18,right:22,fontFamily:"Georgia,serif",fontSize:40,color:"#ccc",lineHeight:1}}>"</div>
          </div>
          <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start"}}>
            {RP.map((p,i)=><img key={i} src={p.src} alt="" style={{width:p.s,height:p.s,borderRadius:"50%",objectFit:"cover",border:"3px solid #fff",boxShadow:"0 4px 14px rgba(0,0,0,.1)",marginBottom:p.mb,marginLeft:p.ml,alignSelf:p.as}}/>)}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── NEWSLETTER ── */
function Newsletter(){
  const [ref,v]=useInView();
  return(
    <section ref={ref} style={{background:"#C8F0D8",padding:"72px 48px 56px",textAlign:"center",position:"relative",overflow:"hidden"}}>
      <svg style={{position:"absolute",top:0,left:"50%",transform:"translateX(-10%)",width:175,pointerEvents:"none"}} viewBox="0 0 175 72" fill="none">
        <path d="M42,10 Q58,48 24,65" stroke="#E84545" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
        <path d="M24,65 L13,63 L19,54" stroke="#E84545" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M88,4 Q108,42 72,60" stroke="#E84545" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
        <path d="M72,60 L61,57 L68,48" stroke="#E84545" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
      <div style={{position:"absolute",right:55,top:"50%",width:76,height:116,background:"#7C3AED",clipPath:"polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)",transform:"translateY(-50%)",pointerEvents:"none"}}/>
      <div style={{position:"relative",zIndex:2,paddingTop:44,...an(v)}}>
        <h2 style={{fontFamily:"'Syne',sans-serif",fontSize:"clamp(38px,6vw,72px)",fontWeight:800,color:"#111",lineHeight:1.08,letterSpacing:-1.5,marginBottom:14}}>Subscribe to<br/>our newsletter</h2>
        <p style={{fontSize:14,color:"#444",marginBottom:40}}>To make your stay special and even more memorable</p>
        <button style={{background:"#111",color:"#fff",border:"none",padding:"15px 46px",borderRadius:50,fontFamily:"'Space Grotesk',sans-serif",fontSize:15,fontWeight:600,cursor:"pointer",transition:"background .2s"}}
          onMouseEnter={e=>e.target.style.background="#E84545"}
          onMouseLeave={e=>e.target.style.background="#111"}>Subscribe Now</button>
      </div>
    </section>
  );
}

/* ── FOOTER ── */
function Footer(){
  const COLS=[
    {h:"Company",links:["Home","Studio","Service","Blog"]},
    {h:"Terms & Policies",links:["Privacy Policy","Terms & Conditions","Explore","Accessibility"]},
    {h:"Follow Us",links:["Instagram","LinkedIn","Youtube","Twitter"]},
    {h:"Terms & Policies",info:["1498w Fluton ste, STE 2D Chicago, IL 63867.","(123) 456789000","info@elementum.com"]},
  ];
  return(
    <footer style={{background:"#C8F0D8",borderTop:"1px solid rgba(0,0,0,.1)",padding:"0 72px 48px"}}>
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:48,maxWidth:1100,margin:"0 auto",padding:"48px 0",borderBottom:"1px solid rgba(0,0,0,.1)"}}>
        {COLS.map((c,i)=>(
          <div key={i}>
            <div style={{fontFamily:"'Syne',sans-serif",fontSize:17,fontWeight:700,color:"#111",marginBottom:22}}>{c.h}</div>
            {c.links ? c.links.map(l=>(
              <a key={l} href="#" style={{display:"block",fontSize:14,color:"#444",marginBottom:12,textDecoration:"none",transition:"color .2s"}}
                onMouseEnter={e=>e.target.style.color="#E84545"} onMouseLeave={e=>e.target.style.color="#444"}>{l}</a>
            )) : c.info.map((t,j)=><p key={j} style={{fontSize:14,color:"#444",marginBottom:10,lineHeight:1.55}}>{t}</p>)}
          </div>
        ))}
      </div>
      <p style={{textAlign:"center",fontSize:13,color:"#555",paddingTop:24,maxWidth:1100,margin:"0 auto"}}>©2023 Elementum. All rights reserved</p>
    </footer>
  );
}

export default function App(){
  return <><Nav/><Hero/><About/><Progress/><Services/><Testimonials/><Newsletter/><Footer/></>;
}


