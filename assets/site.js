(() => {
  "use strict";
  const ROOT = "./";
  const BACKUP_CONTENT = {"brand":{"name":"K Cabinetry","logo":"media/k-cabinetry-original-logo.webp","tagline":"Turnkey Cabinetry & Countertops for Multifamily Construction · NATIONWIDE","phone":"(470) 243-8599","email":"info@kcabinetry.net","address":"The Bluffs, 7800 Austell Rd, Austell, GA 30168","hours":"Monday–Friday · 8:30 AM – 4:30 PM","instagram":"","facebook":""},"hero":{"eyebrow":"MULTIFAMILY CABINETRY & COUNTERTOP SUBCONTRACTOR","title":"Multifamily cabinetry. Built for the job.","description":"K Cabinetry provides complete cabinetry and countertop packages for multifamily projects. We manage estimating, shop drawings, material procurement, delivery, installation and punch-list completion—giving general contractors and developers one accountable partner for both scopes.","image":"media/1792958174752-64a1f02e-7325-4f5e-b0dd-7706e120acd8.png","ctaLabel":"Explore our scopes"},"home":{"introLabel":"BUILT FOR MULTIFAMILY","introTitle":"A trade partner focused on the bigger picture.","introText":"From unit kitchens and bathrooms to shared spaces, we support multifamily teams with clear scope coordination, finish consistency and practical communication through the construction process.","introImage":"media/photo-1600607687920-4e2a09cf159d.jpg","productsTitle":"Scope-focused cabinetry & surfaces.","productsText":"Explore the cabinet, vanity and countertop scopes we support for multifamily construction.","valueTitle":"Built around construction schedules and project teams.","benefits":[{"number":"01","title":"Multifamily focus","body":"A scope-driven approach to repetitive unit layouts, coordinated finish packages and project requirements."},{"number":"02","title":"GC & developer coordination","body":"Clear communication around plans, specifications, material choices and site coordination."},{"number":"03","title":"Practical execution","body":"Attention to details, punch items and the needs of phased multifamily construction."}],"projectsTitle":"Multifamily finish inspiration.","projectsText":"Illustrative material and design directions for apartments, townhomes and shared spaces. Images shown are inspiration, not verified K Cabinetry projects.","ctaTitle":"Have a multifamily project to bid?","ctaText":"Send your project location, plans, unit count, target schedule and cabinetry or countertop scope. Our team can review the opportunity.","ctaImage":"media/1792960754265-chatgpt-image-oct-25-2026-04-37-34-pm.png"},"products":[{"id":"unit-kitchens","category":"01 / UNIT KITCHENS","title":"Apartment & Multifamily Kitchen Cabinets","short":"Consistent finishes across repeated unit types.","description":"Cabinetry scope coordination for multifamily kitchens, with attention to floor plans, cabinet schedules, finish selections and practical installation requirements.","image":"media/k-cabinetry-kitchen.webp","features":"Apartment and multifamily kitchens\nUnit-type cabinet layouts\nFinish and hardware coordination"},{"id":"bath-vanities","category":"02 / UNIT BATHROOMS","title":"Bathroom Vanities","short":"Vanity scopes aligned with project specifications.","description":"Bathroom cabinetry and vanity planning for multiple unit types, designed around coordinated dimensions, finish packages and countertop interfaces.","image":"media/k-cabinetry-bathroom-vanity.webp","features":"Standard and accessible-unit considerations\nVanity finishes and dimensions\nCoordination with countertops and plumbing"},{"id":"countertops","category":"03 / COUNTERTOPS","title":"Kitchen & Vanity Countertops","short":"A consistent finish across units and phases.","description":"Countertop scope support for unit kitchens, vanities and applicable common areas, with attention to material selections, edge details and installation coordination.","image":"media/k-cabinetry-countertops.webp","features":"Kitchen and vanity applications\nMaterial and finish selections\nField and trade coordination"},{"id":"common-areas","category":"04 / SHARED SPACES","title":"Clubhouse & Common-Area Cabinetry","short":"Coordinated millwork for resident amenities.","description":"Discuss cabinetry and surface requirements for leasing offices, amenity spaces and other shared-area scopes included in your project documents.","image":"media/k-cabinetry-clubhouse.webp","features":"Amenity and leasing spaces\nDesign/specification coordination\nProject-specific scope reviews"}],"projects":[{"title":"Modern Apartment Kitchens","category":"Kitchen Cabinetry","description":"Cabinet door profiles, durable finishes, efficient storage and coordinated countertop selections for multifamily residences.","image":"media/k-cabinetry-kitchen.webp"},{"title":"Bathroom Vanity Solutions","category":"Bathroom Vanities","description":"Vanity cabinetry and countertop combinations with clean lines, practical storage and durable finishes.","image":"media/k-cabinetry-bathroom-vanity.webp"},{"title":"Countertop Finishes","category":"Countertops","description":"Quartz and stone-look surfaces selected to complement cabinetry across kitchens, bathrooms and amenity spaces.","image":"media/k-cabinetry-countertops.webp"},{"title":"Shared-Space Millwork","category":"Clubhouse & Common Areas","description":"Built-in cabinetry, beverage stations and coordinated millwork concepts for multifamily amenity environments.","image":"media/k-cabinetry-clubhouse.webp"}],"about":{"eyebrow":"ABOUT / MULTIFAMILY SUBCONTRACTING","title":"Focused on multifamily cabinetry scopes.","intro":"K Cabinetry serves multifamily project teams as a cabinetry and countertop subcontracting partner. We approach each opportunity through construction documents, scope alignment and ongoing team coordination.","image":"media/photo-1600566753086-00f18fb6b3ea.jpg","storyTitle":"A subcontractor mindset. A project-team approach.","storyText":"Our conversations start with drawings, unit mix, schedules, materials and the details that matter to general contractors and developers. We aim to make our trade scope easier to define, coordinate and deliver. Contact us to review project requirements and capabilities.","steps":[{"number":"01","title":"Review the bid package","description":"Share plans, unit schedules, specifications and relevant bid dates."},{"number":"02","title":"Align on scope & selections","description":"Discuss cabinets, countertops, finish packages and coordination requirements."},{"number":"03","title":"Plan project coordination","description":"Confirm next steps around submittals, scheduling, site conditions and installation scope where applicable."}]},"contact":{"eyebrow":"MULTIFAMILY BID OPPORTUNITIES","title":"Bring us your next project.","introduction":"General contractors, developers and project managers: send your multifamily cabinetry or countertop scope for review. Include the job location, unit count, plans and target timeline if available.","formEndpoint":"https://projects.kcabinetry.net/api/leads/8fef0c6e45524259974c96808b01e831","note":"Helpful details: company, project name, job address, number of units, bid due date, anticipated start and links to drawings/specifications. Please don't include confidential plans in this unencrypted form."},"settings":{"announcement":"Turnkey Cabinetry & Countertops for Multifamily Construction · NATIONWIDE","announcementEnabled":true,"design":{"accent":"#caa967","background":"#fefdfa","dark":"#12140f","cream":"#f5f3ed","headingFont":"Playfair Display","bodyFont":"DM Sans","customCSS":""},"navigation":[{"label":"Home","page":"home","visible":true},{"label":"Scope of Work","page":"products","visible":true},{"label":"Our Approach","page":"about","visible":true},{"label":"Design Reference","page":"projects","visible":true},{"label":"Request a Bid","page":"contact","visible":true},{"label":"Our Products","page":"catalog","visible":true}],"sections":{"ticker":true,"intro":true,"collections":true,"benefits":true,"projects":true,"cta":true},"buttons":{"heroSecondary":"Discuss a project","cta":"Send project details","quote":"Request a bid"},"seo":{"homeTitle":"Multifamily Cabinets & Countertops | Subcontractor","homeDescription":"K Cabinetry supports multifamily construction projects in Georgia as a cabinetry and countertop subcontractor for general contractors, developers, and project teams.","productsTitle":"Multifamily Cabinetry & Countertop Scopes","productsDescription":"Review apartment kitchen cabinets, bathroom vanities, unit countertops and common-area cabinetry scopes.","projectsTitle":"Multifamily Finish & Design Reference","projectsDescription":"Illustrative multifamily kitchen, bath and amenity finish references. Photos are design inspiration, not verified completed projects.","aboutTitle":"Multifamily Subcontracting Approach","aboutDescription":"Learn how K Cabinetry approaches multifamily cabinetry and countertop construction scopes and project team coordination.","contactTitle":"Request a Multifamily Cabinetry Bid","contactDescription":"Discuss multifamily cabinetry and countertop bid opportunities with K Cabinetry."},"sectionOrder":["ticker","intro","collections","benefits","projects","cta"],"customBlocks":[],"pageBlocks":{"home":[],"products":[],"projects":[],"about":[],"contact":[],"catalog":[],"cabinets":[]},"pages":[],"designCanvas":{"enabled":true,"elements":[]},"textOverrides":{"catalog":{"text-30":"LEARN MORE\n↗"}}},"catalog":[{"name":"New Caledonia","material":"Granite","group":"Group 1","description":"Granite slab color reference.","image":"media/granite-new-caledonia.jpg"},{"name":"Dallas White","material":"Granite","group":"Group 2","description":"Granite slab color reference.","image":"media/granite-dallas-white.jpg"},{"name":"Luna Pearl","material":"Granite","group":"Group 1","description":"Granite slab color reference.","image":"media/granite-luna-pearl.jpg"},{"name":"Black Pearl","material":"Granite","group":"Group 2","description":"Granite slab color reference.","image":"media/1793035439595-item-img-25127-black-pearl-dual-3388-1-6358-uc.jpg"},{"name":"Viscon White","material":"Granite","group":"Group 2","description":"Granite slab color reference.","image":"media/1793035676647-item-img-23366-viscon-white-3207-5-2415-uc.jpg"},{"name":"Blue Dunes","material":"Granite","group":"Group 2","description":"Granite slab color reference.","image":"media/1793035706838-item-img-24726-blue-dunes-3057-4-790-uc.jpg"},{"name":"Elusive White","material":"Quartz","group":"Group 1","description":"Quartz slab color reference.","image":"media/1793036073972-item-img-100011-elusivewhite-33.jpg"},{"name":"Olympic","material":"Quartz","group":"Group 1","description":"Quartz slab color reference.","image":"media/1793036237098-item-img-100018-olympic-31.jpg"},{"name":"Crystal","material":"Quartz","group":"Group 1","description":"Quartz slab color reference.","image":"media/1793036270034-item-img-242351-crystal-mq.jpg"},{"name":"Feather White","material":"Quartz","group":"Group 1","description":"Quartz slab color reference.","image":"media/1793036310432-item-img-100013-featherwhite-34.jpg"},{"name":"Steel Grey","material":"Granite","group":"Group 1","description":"Granite slab color reference.","image":"media/1793037502666-item-img-24788-steel-grey-3052-3-6376-uc.jpg"},{"name":"Designer White","material":"Quartz","group":"Group 2","description":"Quartz slab color reference.","image":"media/1793039327517-item-img-65754-designer-white-mq-close-up.jpg"},{"name":"Chinook Grey","material":"Quartz","group":"Group 2","description":"Quartz slab color reference.","image":"media/1793039516579-item-img-65753-chinookgrey-25.jpg"},{"name":"Carrara Deluxe","material":"Quartz","group":"Group 2","description":"Quartz slab color reference.","image":"media/1793039568196-item-img-128060-carrara-deluxe-1.jpg"}],"cabinetCatalog":[{"name":"Modern Shaker Kitchen Cabinets","group":"Kitchen Cabinets","description":"Apartment kitchen cabinet reference.","image":"media/k-cabinetry-kitchen.webp"},{"name":"Contemporary Bathroom Vanity Cabinets","group":"Bathroom Vanities","description":"Multifamily vanity cabinetry reference.","image":"media/k-cabinetry-bathroom-vanity.webp"}],"cabinetConstruction":{"eyebrow":"BUILT FOR MULTIFAMILY PROJECTS","title":"Cabinet Construction Details","intro":"Construction specifications for our plywood cabinet boxes, Shaker-style doors, hardware and installation-ready components.","details":[{"title":"Cabinet Box","description":"1/2\" plywood box with white melamine finish","image":"media/spec-cabinet-box.webp"},{"title":"Cabinet Back","description":"Full 1/2\" plywood back, one-sided","image":"media/spec-cabinet-back.webp"},{"title":"Cabinet End Panel","description":"Matching color ends as doors","image":"media/spec-cabinet-end-panel.webp"},{"title":"Box Assembly","description":"Pre-glued bore and dowel construction","image":"media/spec-box-assembly.webp"},{"title":"Door Panel","description":"Shaker style","image":"media/spec-door-panel.webp"},{"title":"Door Style","description":"Full overlay","image":"media/spec-door-style.webp"},{"title":"Cabinet Finish","description":"Paint / stain","image":"media/spec-cabinet-finish.webp"},{"title":"Hinges","description":"Concealed soft-close hinges","image":"media/spec-hinges.webp"},{"title":"Shelves","description":"1/2\" plywood shelves matching the cabinet box","image":"media/spec-shelves.webp"},{"title":"Toe Kick","description":"1/2\" thick plywood removable toe kick","image":"media/spec-toe-kick.webp"},{"title":"Drawers","description":"5/8\" plywood dovetail drawer box, soft-close drawer guides with full extension","image":"media/1793044039553-modern-dovetail-drawer-feature.png"}],"note1":"Fillers, scribe and toe kicks will be matched with the door colors.","note2":"Hardware pulls will be provided as per specifications."},"cabinetConfigurator":{"title":"Build Your Cabinet Finish","intro":"Select cabinet construction, door style and a finish to preview a coordinated cabinet look. Confirm exact specifications and physical samples with our team.","materials":[{"name":"Particle Board","level":"","description":"Economical cabinet-box construction for value-driven multifamily programs."},{"name":"Plywood","level":"","description":"Premium cabinet-box option; 1/2\" plywood construction with white melamine finish."}],"doorStyles":[{"name":"Shaker","description":"Classic recessed-panel door"},{"name":"Slab","description":"Clean, modern flat-panel door"},{"name":"Slim Shaker","description":"Narrow-frame contemporary door"}],"colors":[{"name":"Shaker Espresso","hex":"#33211f","image":"media/cabinet-finish-0.webp"},{"name":"Navy Blue","hex":"#34394d","image":"media/cabinet-finish-1.webp"},{"name":"Iron Black","hex":"#202329","image":"media/cabinet-finish-2.webp"},{"name":"Treasure Chest","hex":"#bd9066","image":"media/cabinet-finish-3.webp"},{"name":"Ashton Green","hex":"#535e51","image":"media/cabinet-finish-4.webp"},{"name":"Smokey Ash","hex":"#51504d","image":"media/cabinet-finish-5.webp"},{"name":"Luna Grey","hex":"#cdc8c5","image":"media/cabinet-finish-6.webp"},{"name":"Rustic Wood","hex":"#69534a","image":"media/cabinet-finish-7.webp"},{"name":"Saga Breeze","hex":"#929f90","image":"media/cabinet-finish-8.webp"},{"name":"Double Smokey Grey","hex":"#535451","image":"media/cabinet-finish-9.webp"},{"name":"Double Dove White","hex":"#ebe8e5","image":"media/cabinet-finish-10.webp"}]}};
  const applySettings = d => {
    const s=d.settings||{},design=s.design||{},root=document.documentElement;
    const colors={accent:"--gold",background:"--paper",dark:"--black",cream:"--cream"};
    Object.entries(colors).forEach(([field,variable])=>{
      const value=design[field];if(/^#[0-9a-f]{6}$/i.test(value||""))root.style.setProperty(variable,value);
    });
    const fonts={"Playfair Display":'"Playfair Display",Georgia,serif',"DM Sans":'"DM Sans",Arial,sans',"Manrope":'"Manrope",Arial,sans',Georgia:'Georgia,serif',Arial:'Arial,sans-serif'};
    if(fonts[design.headingFont])root.style.setProperty("--serif",fonts[design.headingFont]);
    if(fonts[design.bodyFont])root.style.setProperty("--sans",fonts[design.bodyFont]);
    const styleText=String(design.customCSS||"");
    if(styleText && styleText.length<10000){
      const style=document.createElement("style");style.id="k-custom-style";style.textContent=styleText;document.head.appendChild(style);
    }
    const metadata=s.seo||{},prefix={home:"home",products:"products",projects:"projects",about:"about",contact:"contact"}[page]||"home";
    const title=metadata[prefix+"Title"],desc=metadata[prefix+"Description"];
    if(title)document.title=String(title)+" | K Cabinetry";
    if(desc){document.querySelector('meta[name="description"]')?.setAttribute("content",desc);document.querySelector('meta[property="og:description"]')?.setAttribute("content",desc);}
    if(title)document.querySelector('meta[property="og:title"]')?.setAttribute("content",String(title)+" | K Cabinetry");
  };

  const customBlockMarkup = b => {
    const type=String(b.type||"text"),heading=esc(b.title||""),body=esc(b.body||""),id=esc(b.id||"");
    const image=safeImage(b.image||"");
    const buttonText=esc(b.buttonText||""),buttonUrl=String(b.buttonUrl||"").trim();
    const safeLink=/^(https:\/\/|\.\/|#|\/)/i.test(buttonUrl)?esc(buttonUrl):"./request-a-bid.html";
    const action=buttonText?'<a class="btn" href="'+safeLink+'">'+buttonText+' <span aria-hidden="true">↗</span></a>':"";
    const common='<div class="custom-section-copy"><p class="eyebrow dark">K CABINETRY / FEATURE</p><h2 class="title">'+heading+'</h2><p class="section-copy">'+body+'</p>'+action+'</div>';
    const motion=["none","fade","float","zoom","slide"].includes(b.motion)?b.motion:"none";
    const motionClass=' motion-'+motion;
    if(type==="animated")return '<section class="section custom-block custom-motion-block'+motionClass+'" data-custom-id="'+id+'"><div class="shell custom-image-grid">'+
      (image?'<img src="'+image+'" alt="'+heading+'" loading="lazy">':"")+common+'</div></section>';
    if(type==="video"){
      let video="";
      const value=String(b.video||"").trim();
      const youtube=value.match(/^https:\/\/(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})(?:[&#?].*)?$/);
      if(youtube)video='<iframe loading="lazy" title="'+heading+'" src="https://www.youtube-nocookie.com/embed/'+youtube[1]+'" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>';
      else if(/^https:\/\/.+\.mp4(?:\?.*)?$/i.test(value))video='<video controls playsinline preload="metadata" src="'+esc(value)+'"></video>';
      return '<section class="section custom-block custom-video-block" data-custom-id="'+id+'"><div class="shell">'+common+'<div class="custom-video">'+video+'</div></div></section>';
    }
    if(type==="slider"){
      const photos=String(b.images||"").split(/\n/).map(v=>safeImage(v.trim())).filter(Boolean).slice(0,12);
      return '<section class="section custom-block custom-slider-block" data-custom-id="'+id+'"><div class="shell">'+common+
      '<div class="custom-slides" aria-label="'+heading+'">'+photos.map((src,i)=>'<img src="'+src+'" alt="'+heading+' photo '+(i+1)+'" loading="lazy">').join('')+'</div></div></section>';
    }
    if(type==="columns")return '<section class="section custom-block custom-columns" data-custom-id="'+id+'"><div class="shell custom-two-columns">'+common+'<div class="section-copy">'+body+'</div></div></section>';
    if(type==="marquee")return '<div class="custom-block custom-marquee" data-custom-id="'+id+'"><div class="marquee-track"><span>'+heading+' — '+body+' — '+heading+' — '+body+'</span></div></div>';
    if(type==="image")return '<section class="section custom-block custom-image-block" data-custom-id="'+id+'"><div class="shell custom-image-grid">'+(image?'<img src="'+image+'" alt="'+heading+'" loading="lazy">':"")+common+'</div></section>';
    if(type==="banner")return '<section class="section custom-block custom-banner" data-custom-id="'+id+'"'+(image?' style="background-image:linear-gradient(#10170dcc,#10170dcc),url(&quot;'+image+'&quot;)"':'')+'><div class="shell">'+common+'</div></section>';
    if(type==="spacer")return '<div class="custom-block custom-spacer" data-custom-id="'+id+'" aria-hidden="true"></div>';
    return '<section class="section custom-block custom-text-block" data-custom-id="'+id+'"><div class="shell">'+common+'</div></section>';
  };
  const arrangeSections = d => {
    const order=page==="home"?(d.settings?.sectionOrder||[]):(d.settings?.pageBlocks?.[page==="custom"?"custom:"+pageSlug:page]||[]);
    const main=$("#main");if(!main)return;
    const selectors={ticker:".ticker",intro:".intro",collections:".collections",benefits:".benefits",projects:"section.projects",cta:".cta-photo"};
    const nodes={};if(page==="home")Object.entries(selectors).forEach(([key,selector])=>nodes[key]=main.querySelector(selector));
    for(const block of (d.settings?.customBlocks||[])){
      if(!block||(block.page||"home")!==(page==="custom"?"custom:"+pageSlug:page)||!/^custom-[a-z0-9-]+$/.test(block.id||""))continue;
      const template=document.createElement("template");template.innerHTML=customBlockMarkup(block);
      const element=template.content.firstElementChild;if(!element)continue;
      main.appendChild(element);nodes[block.id]=element;
    }
    const hero=main.querySelector(".hero");
    let preceding=page==="home"?hero:main.lastElementChild;
    for(const id of [...new Set([...order,...Object.keys(nodes)])]){
      const node=nodes[id];if(!node)continue;
      preceding.after(node);preceding=node;
    }
  };
  const applyVisibility = d => {
    const sections=d.settings?.sections||{};
    const selectors={ticker:".ticker",intro:".intro",collections:".collections",benefits:".benefits",projects:"section.projects",cta:".cta-photo"};
    Object.entries(selectors).forEach(([key,selector])=>{if(sections[key]===false)document.querySelector(selector)?.remove();});
    (d.settings?.customBlocks||[]).forEach(b=>{if(b.visible===false)document.querySelector('[data-custom-id="'+b.id+'"]')?.remove();});
  };

  const $ = (selector, root=document) => root.querySelector(selector);
  const esc = value => String(value ?? "").replace(/[&<>"']/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[c]));
  const safeImage = value => {
    const s=String(value||"").trim();
    return (/^https:\/\//i.test(s) || /^(?:\.\/)?(?:media|assets)\/[a-z\d_./ -]+\.(?:png|jpe?g|webp|avif|gif|svg)$/i.test(s)) ? esc(s) : "";
  };
  const textLines = value => esc(value).replace(/\n/g, "<br>");
  const photo = (src,alt="",cls="",loading="lazy") => '<img class="'+cls+'" src="'+safeImage(src)+'" alt="'+esc(alt)+'" loading="'+loading+'" referrerpolicy="no-referrer">';
  const link = (href,label,outline=false) => '<a class="btn'+(outline?' btn-outline':'')+'" href="'+esc(href)+'">'+esc(label)+' <span aria-hidden="true">↗</span></a>';
  const anchor = (href,label) => '<a class="text-link" href="'+esc(href)+'">'+esc(label)+' <span aria-hidden="true">↗</span></a>';
  const eyebrow = (text,dark=false) => '<p class="eyebrow'+(dark?' dark':'')+'">'+esc(text)+'</p>';
  const page = document.body.dataset.page || "home";
  const pageSlug=new URLSearchParams(location.search).get("slug")||"";
  const urlFor = name => name==="home"?"./index.html":name.startsWith("custom:")?"./page.html?slug="+encodeURIComponent(name.slice(7)):"./"+({products:"scope-of-work",catalog:"products",about:"our-approach",projects:"design-reference",contact:"request-a-bid"}[name]||name)+".html";
  const navItems=[["home","Home"],["about","About"],["products","Products"],["projects","Inspiration"],["contact","Contact"]];
  const header = d => {
    const b=d.brand||{};
    const menu=[...(d.settings?.navigation||navItems.map(([page,label])=>({page,label,visible:true}))),...(d.settings?.pages||[]).filter(p=>p.visible!==false).map(p=>({page:"custom:"+p.slug,label:p.navLabel||p.title,visible:true}))].filter(item=>item.visible!==false).map(item=>[item.page,item.label]).map(([id,label])=>id==="catalog"?'<div class="nav-dropdown"><a class="nav-parent" href="./products.html">Our Products ▾</a><div class="nav-submenu"><a href="./products.html">Countertops</a><a href="./cabinets.html">Cabinets</a></div></div>':'<a href="'+urlFor(id)+'" class="'+(page===id?'active':'')+'">'+esc(label)+'</a>').join("");
    return (d.settings?.announcementEnabled===false?"":'<div class="topline">'+esc(d.settings?.announcement||"Thoughtful design • Cabinets & countertops • Georgia")+'</div>')+
      '<header class="header" id="header"><div class="shell header-inner"><a class="brand" href="./index.html" aria-label="K Cabinetry home">'+photo(b.logo,"K Cabinetry gold emblem","logo","eager")+
      '<span class="brand-wordmark">K CABINETRY<small>FINE INTERIORS</small></span></a>'+
      '<button type="button" class="menu-toggle" id="menu-toggle" aria-controls="primary-navigation" aria-expanded="false">Menu <span aria-hidden="true">☰</span></button>'+
      '<nav class="nav" id="primary-navigation" aria-label="Main navigation">'+menu+'<a href="https://projects.kcabinetry.net/" class="login-nav-link">Login</a></nav>'+link("./request-a-bid.html",d.settings?.buttons?.quote||"Request a quote").replace('class="btn"','class="btn head-action"')+
      '</div></header>';
  };
  const footer = d => {
    const b=d.brand||{};
    return '<footer class="footer"><div class="shell"><div class="footer-top"><div>'+
      '<a class="brand" href="./index.html">'+photo(b.logo,"K Cabinetry gold emblem","logo")+ '<span class="brand-wordmark">K CABINETRY<small>FINE INTERIORS</small></span></a>'+
      '<p class="footer-copy">'+esc(b.tagline)+'</p></div>'+
      '<div><h4>Explore</h4><div class="footer-links">'+(d.settings?.navigation||navItems.map(([page,label])=>({page,label,visible:true}))).filter(item=>item.visible!==false).map(item=>[item.page,item.label]).map(([id,l])=>'<a href="'+urlFor(id)+'">'+l+'</a>').join('')+'</div></div>'+
      '<div><h4>Contact</h4><p><a href="tel:'+esc(String(b.phone||"").replace(/[^+\d]/g,""))+'">'+esc(b.phone)+'</a><br>'+
      '<a href="mailto:'+esc(b.email)+'">'+esc(b.email)+'</a></p><p>'+esc(b.address)+'</p></div>'+
      '<div><h4>Showroom hours</h4><p>'+esc(b.hours)+'</p><p><a href="./request-a-bid.html">Plan a visit ↗</a></p></div></div>'+
      '<div class="footer-bottom"><span>© <span id="year"></span> K Cabinetry. All rights reserved.</span><span>Multifamily cabinetry &amp; countertop subcontracting</span></div>'+
      '</div></footer>';
  };
  const pageHero=(label,title,image) => '<section class="pagehero">'+photo(image,title,'','eager')+'<div class="shell">'+eyebrow(label)+'<h1 class="title">'+esc(title)+'</h1></div></section>';
  const productCard=(p) => '<a class="product-card reveal" href="./scope-of-work.html#'+esc(p.id)+'"><div class="photo">'+photo(p.image,p.title)+'</div><span class="round-arrow" aria-hidden="true">↗</span><div class="product-card-info"><div class="meta">'+esc(p.category)+'</div><h3>'+esc(p.title)+'</h3><p class="desc">'+esc(p.short)+'</p>'+anchor('./scope-of-work.html#'+p.id,'Discover the collection')+'</div></a>';
  const projectCard=(p) => '<a href="./design-reference.html" class="project-card reveal">'+photo(p.image,p.title)+'<div class="project-caption"><div><small>'+esc(p.category)+'</small><h3>'+esc(p.title)+'</h3></div><b aria-hidden="true">↗</b></div></a>';
  const cta=(d)=>{const h=d.home||{};return '<section class="cta-photo">'+photo(h.ctaImage||d.hero?.image,"Beautiful interior")+
      '<div class="shell cta-inner">'+eyebrow("LET'S MAKE IT HAPPEN")+'<h2 class="title">'+esc(h.ctaTitle||"Let's bring your vision to life.")+'</h2><p>'+esc(h.ctaText||"We would love to hear about your project.")+'</p>'+link("./request-a-bid.html",d.settings?.buttons?.cta||"Get in touch")+'</div></section>';};
  const home = d =>{
    const h=d.home||{}, hero=d.hero||{}, products=d.products||[], projects=d.projects||[], benefits=h.benefits||[];
    return '<section class="hero">'+photo(hero.image,"Elegant K Cabinetry kitchen interior","hero-img","eager")+
      '<div class="shell hero-inner"><div class="hero-content">'+eyebrow(hero.eyebrow)+'<h1 class="display">'+esc(hero.title)+'</h1>'+
      '<p class="hero-desc">'+esc(hero.description)+'</p><div class="hero-actions">'+link("./scope-of-work.html",hero.ctaLabel||"Explore collections")+
      link("./request-a-bid.html",d.settings?.buttons?.heroSecondary||"Let's talk about your project",true)+'</div></div></div><div class="hero-side">MULTIFAMILY CABINETRY & COUNTERTOPS — K CABINETRY</div><div class="hero-bottom"></div></section>'+
      '<div class="ticker"><div class="shell ticker-inner"><div class="ticker-item"><span>✦</span> Unit kitchen cabinetry</div><div class="ticker-item"><span>✦</span> Vanity & countertop scopes</div><div class="ticker-item"><span>✦</span> GC coordination</div></div></div>'+
      '<section class="section intro"><div class="shell intro-grid"><div class="intro-copy reveal">'+eyebrow(h.introLabel,true)+'<h2 class="title">'+esc(h.introTitle)+'</h2>'+
      '<p class="section-copy">'+esc(h.introText)+'</p>'+anchor("./our-approach.html","Our subcontracting approach")+'</div><div class="image-frame reveal">'+photo(h.introImage,"Warm architectural interior")+
      '<div class="image-badge"><span>KC</span><small>Multifamily<br>scope partner</small></div></div></div></section>'+
      '<section class="section collections"><div class="shell"><div class="section-head">'+
      '<div>'+eyebrow("THE COLLECTIONS",true)+'<h2 class="title">'+esc(h.productsTitle)+'</h2><p class="section-copy">'+esc(h.productsText)+'</p></div>'+anchor("./scope-of-work.html","View all products")+'</div>'+
      '<div class="collection-grid">'+products.slice(0,3).map(productCard).join('')+'</div></div></section>'+
      '<section class="section benefits"><div class="shell"><div class="benefits-heading">'+eyebrow("THE K CABINETRY DIFFERENCE")+'<h2 class="title">'+esc(h.valueTitle)+'</h2></div>'+
      '<div class="benefit-grid">'+benefits.map(b=>'<article class="benefit reveal"><span class="benefit-num">'+esc(b.number)+'</span><h3>'+esc(b.title)+'</h3><p>'+esc(b.body)+'</p></article>').join('')+'</div></div></section>'+
      '<section class="section projects"><div class="shell"><div class="section-head"><div>'+eyebrow("SPACES TO INSPIRE",true)+'<h2 class="title">'+esc(h.projectsTitle)+'</h2>'+
      '<p class="section-copy">'+esc(h.projectsText)+'</p></div>'+anchor("./design-reference.html","More inspiration")+'</div><div class="project-grid">'+projects.slice(0,2).map(projectCard).join('')+'</div></div></section>'+cta(d);
  };
  const cabinetConstruction = d => {
 const specs=d.cabinetConstruction||{},details=specs.details||[];
 return '<section class="cab-construction"><div class="shell"><div class="cab-heading">'+eyebrow(specs.eyebrow||"CABINET CONSTRUCTION",true)+'<h2 class="title">'+esc(specs.title||"Cabinet Construction Details")+'</h2><p class="section-copy">'+esc(specs.intro||"")+'</p></div><div class="cab-spec-grid">'+details.map((item,i)=>'<article class="cab-spec"><div class="cab-spec-media">'+photo(item.image,item.title+" — "+item.description)+'</div><div class="cab-spec-content"><span class="cab-spec-num">'+String(i+1).padStart(2,"0")+'</span><h3>'+esc(item.title)+'</h3><p>'+esc(item.description)+'</p></div></article>').join("")+'</div><div class="cab-spec-notes"><p>* '+esc(specs.note1||"")+'</p><p>* '+esc(specs.note2||"")+'</p></div><div class="cab-spec-cta"><h3>Planning a multifamily cabinetry scope?</h3><p>Send your drawings, specifications and schedule to discuss the project.</p>'+anchor("./request-a-bid.html","Request a bid")+'</div></div></section>';
};
const cabinetConfigurator = d => {
 const conf=d.cabinetConfigurator||{},styles=conf.doorStyles||[],materials=conf.materials||[],colors=conf.colors||[];
 return '<section class="cab-config"><div class="shell"><div class="cab-config-heading">'+eyebrow("INTERACTIVE FINISH SELECTOR",true)+'<h2 class="title">'+esc(conf.title||"Customize Your Cabinet")+'</h2><p class="section-copy">'+esc(conf.intro||"")+'</p></div><div class="cab-config-layout"><div class="cab-config-controls"><div class="cab-config-step"><h3><span>01</span> Cabinet box construction</h3><div class="cab-option-row" id="cab-materials">'+materials.map((x,i)=>'<button type="button" data-cab-material="'+i+'" class="'+(i===0?"is-selected":"")+'"><strong>'+esc(x.name)+'</strong><small>'+esc(x.level)+'</small></button>').join("")+'</div><p id="cab-material-desc" class="cab-option-description"></p></div><div class="cab-config-step"><h3><span>02</span> Door style</h3><div class="cab-option-row" id="cab-styles">'+styles.map((x,i)=>'<button type="button" data-cab-style="'+i+'" class="'+(i===0?"is-selected":"")+'">'+esc(x.name)+'</button>').join("")+'</div></div><div class="cab-config-step"><h3><span>03</span> Choose your finish</h3><div class="cab-color-grid">'+colors.map((x,i)=>'<button type="button" data-cab-color="'+i+'" class="cab-color-option '+(i===0?"is-selected":"")+'" title="'+esc(x.name)+'"><span class="cab-color-thumb" style="background-color:'+esc(x.hex)+';background-image:url('+esc(safeImage(x.image))+')"></span><span>'+esc(x.name)+'</span></button>').join("")+'</div></div></div><div class="cab-preview-panel"><div class="cab-preview-topline">LIVE COLOR PREVIEW</div><div class="cab-preview-stage"><div class="cab-sample-door" id="cab-sample-door"><div class="cab-sample-panel"></div></div></div><h3 id="cab-preview-name"></h3><p id="cab-preview-selection"></p><p class="cab-preview-disclaimer">Digital color previews are illustrative. Actual color, wood grain, and finish may vary. Please approve physical samples and specifications before ordering.</p></div></div></div></section>';
};
const initCabinetConfigurator = d => {
 const conf=d.cabinetConfigurator||{},colors=conf.colors||[],styles=conf.doorStyles||[],materials=conf.materials||[];
 const root=document.querySelector(".cab-config");if(!root||!colors.length)return;
 let mat=0,style=0,color=0;
 const update=()=>{
   root.querySelectorAll("[data-cab-material]").forEach(b=>{const on=Number(b.dataset.cabMaterial)===mat;b.classList.toggle("is-selected",on);b.setAttribute("aria-pressed",String(on));});
   root.querySelectorAll("[data-cab-style]").forEach(b=>{const on=Number(b.dataset.cabStyle)===style;b.classList.toggle("is-selected",on);b.setAttribute("aria-pressed",String(on));});
   root.querySelectorAll("[data-cab-color]").forEach(b=>{const on=Number(b.dataset.cabColor)===color;b.classList.toggle("is-selected",on);b.setAttribute("aria-pressed",String(on));});
   const shade=colors[color],door=root.querySelector("#cab-sample-door");door.style.setProperty("--door-shade",/^#[0-9a-f]{6}$/i.test(shade.hex)?shade.hex:"#eeeeee");
   door.style.setProperty("--door-grain",'url("'+safeImage(shade.image)+'")');
   door.classList.toggle("is-slab",/slab/i.test(styles[style]?.name||""));
   door.classList.toggle("is-slim",/slim/i.test(styles[style]?.name||""));
   root.querySelector("#cab-preview-name").textContent=shade.name;
   root.querySelector("#cab-preview-selection").textContent=(materials[mat]?.name||"")+" · "+(styles[style]?.name||"");
   root.querySelector("#cab-material-desc").textContent=materials[mat]?.description||"";
 };
 root.querySelectorAll("[data-cab-material]").forEach(b=>b.onclick=()=>{mat=Number(b.dataset.cabMaterial);update();});
 root.querySelectorAll("[data-cab-style]").forEach(b=>b.onclick=()=>{style=Number(b.dataset.cabStyle);update();});
 root.querySelectorAll("[data-cab-color]").forEach(b=>b.onclick=()=>{color=Number(b.dataset.cabColor);update();});
 update();
};
const cabinets = d => pageHero("K CABINETRY / PRODUCTS","Cabinet Collections",d.products?.[0]?.image)+'<section class="page-intro"><div class="shell">'+eyebrow("CABINET PRODUCTS",true)+'<h2 class="title">Cabinets for multifamily spaces.</h2><p class="section-copy">Explore cabinet collections and finish directions for multifamily projects.</p></div></section>'+'<section class="stone-catalog"><div class="shell"><div class="stone-grid">'+(d.cabinetCatalog||[]).map(p=>'<article class="stone-card"><div class="stone-image">'+photo(p.image,p.name)+'</div><div class="stone-card-info"><p class="eyebrow">'+esc(p.group||"Cabinets")+'</p><h3>'+esc(p.name)+'</h3><p>'+esc(p.description||"")+'</p></div></article>').join("")+'</div></div></section>'+cabinetConfigurator(d)+cabinetConstruction(d)+cta(d);
const catalog = d => pageHero("K CABINETRY / MATERIAL SELECTIONS","Our Products",d.products?.[2]?.image)+
  '<section class="page-intro"><div class="shell">'+eyebrow("COUNTERTOP MATERIALS",true)+'<h2 class="title">Browse granite & quartz.</h2><p class="section-copy">Explore our countertop finish references by material and collection. Final material availability and specifications are confirmed for each project.</p></div></section>'+
  '<section class="stone-catalog"><div class="shell"><div class="stone-tabs" role="tablist" aria-label="Countertop material"><button type="button" class="stone-tab active" role="tab" aria-selected="true" data-stone-tab="Granite">Granite</button><button type="button" class="stone-tab" role="tab" aria-selected="false" data-stone-tab="Quartz">Quartz</button></div><div id="stone-results"></div></div></section>'+cta(d);
const initCatalog = d => {
 const root=document.getElementById("stone-results");if(!root)return;
 let current="Granite";
 const repaint=()=>{
   document.querySelectorAll("[data-stone-tab]").forEach(b=>{const selected=b.dataset.stoneTab===current;b.classList.toggle("active",selected);b.setAttribute("aria-selected",String(selected));});
   const items=(d.catalog||[]).filter(p=>p.material===current);
   const groups=[...new Set(items.map(p=>p.group||"Group 1"))];
   root.innerHTML=groups.length?groups.map(g=>'<div class="stone-group"><div class="stone-group-heading">'+eyebrow(g,true)+'<h2>'+esc(current)+' — '+esc(g)+'</h2></div><div class="stone-grid">'+items.filter(p=>(p.group||"Group 1")===g).map(p=>'<article class="stone-card"><div class="stone-image">'+photo(p.image,p.name)+'</div><div class="stone-card-info"><h3>'+esc(p.name)+'</h3><p>'+esc(p.description||"")+'</p></div></article>').join("")+'</div></div>').join(""):'<div class="stone-empty"><h2>'+esc(current)+' samples coming soon</h2><p>Our team can discuss '+esc(current.toLowerCase())+' options for your project. New swatches can be added in the Products Catalog editor.</p></div>';
 };
 document.querySelectorAll("[data-stone-tab]").forEach(b=>b.addEventListener("click",()=>{current=b.dataset.stoneTab;repaint();initCatalogEditor(d);}));
 repaint();
};
  const products = d => pageHero("K CABINETRY / MULTIFAMILY SCOPES","What we do.",d.hero?.image)+
    '<section class="page-intro"><div class="shell">'+eyebrow("CABINETRY & COUNTERTOP SCOPES",true)+'<h2 class="title">Designed for multifamily project requirements.</h2>'+
    '<p class="section-copy">Explore our unit kitchen, vanity, countertop and common-area scope categories for multifamily construction.</p></div></section>'+
    '<section class="product-list"><div class="shell">'+(d.products||[]).map(p=>'<article class="product-row reveal" id="'+esc(p.id)+'">'+
    '<div class="product-photo">'+photo(p.image,p.title)+'</div><div class="product-info">'+eyebrow(p.category,true)+'<h2>'+esc(p.title)+'</h2>'+
    '<p class="subtitle">'+esc(p.short)+'</p><p>'+esc(p.description)+'</p><ul class="feature-list">'+String(p.features||"").split('\n').filter(Boolean).map(s=>'<li>'+esc(s)+'</li>').join('')+
    '</ul>'+anchor("./request-a-bid.html","Discuss this scope")+'</div></article>').join('')+'</div></section>'+cta(d);
  const projects = d => {
    const categories=["All",...new Set((d.projects||[]).map(p=>p.category).filter(Boolean))];
    return pageHero("K CABINETRY / FINISH REFERENCES","Multifamily finish references.",d.home?.introImage||d.hero?.image)+
      '<section class="page-intro"><div class="shell">'+eyebrow("DESIGN REFERENCE",true)+'<h2 class="title">Design directions for multifamily spaces.</h2>'+
      '<p class="section-copy">A curated collection of design inspiration. These editorial inspiration images are illustrative, not a verified portfolio of completed K Cabinetry installations.</p></div></section>'+
      '<section class="shell"><div class="gallery-controls" role="group" aria-label="Filter inspiration by category">'+
      categories.map((c,i)=>'<button type="button" class="filter-btn'+(i===0?' active':'')+'" data-filter="'+esc(c)+'" aria-pressed="'+(i===0?'true':'false')+'">'+esc(c)+'</button>').join('')+
      '</div><div class="gallery-grid">'+(d.projects||[]).map(p=>'<figure class="gallery-card reveal" data-category="'+esc(p.category)+'"><div class="photo">'+photo(p.image,p.title)+'</div><figcaption><span class="kicker">'+esc(p.category)+'</span><h3>'+esc(p.title)+'</h3><p>'+esc(p.description)+'</p></figcaption></figure>').join('')+
      '</div></section>'+cta(d);
  };
  const about = d => {
    const a=d.about||{};
    return pageHero(a.eyebrow||"OUR STORY",a.title,d.home?.introImage||d.hero?.image)+
      '<section class="shell story"><div class="story-photo reveal">'+photo(a.image,"Beautiful K Cabinetry design inspiration")+'</div><div class="reveal">'+
      eyebrow("THE WAY WE WORK",true)+'<h2 class="title">'+esc(a.storyTitle)+'</h2><p>'+esc(a.intro)+'</p><p>'+esc(a.storyText)+'</p>'+
      anchor("./request-a-bid.html","Discuss your project")+'</div></section>'+
      '<section class="section steps"><div class="shell">'+eyebrow("OUR APPROACH",true)+'<h2 class="title">From bid documents to trade coordination.</h2>'+
      '<div class="step-grid">'+(a.steps||[]).map(s=>'<article class="step reveal"><span class="num">'+esc(s.number)+'</span><h3>'+esc(s.title)+'</h3><p>'+esc(s.description)+'</p></article>').join('')+
      '</div></div></section>'+cta(d);
  };
  const contact = d => {
    const b=d.brand||{}, c=d.contact||{};
    return pageHero(c.eyebrow||"GET IN TOUCH","Let's talk.",d.home?.ctaImage||d.hero?.image)+
      '<section class="shell contact-wrap"><div class="contact-details">'+eyebrow("VISIT OR CONNECT",true)+'<h2 class="title">'+esc(c.title)+'</h2>'+
      '<p class="section-copy">'+esc(c.introduction)+'</p><div class="contact-line"><h3>Call us</h3><a href="tel:'+esc(String(b.phone||"").replace(/[^+\d]/g,""))+'">'+esc(b.phone)+'</a></div>'+
      '<div class="contact-line"><h3>Email us</h3><a href="mailto:'+esc(b.email)+'">'+esc(b.email)+'</a></div>'+
      '<div class="contact-line"><h3>Find us</h3><p>'+esc(b.address)+'</p><p>'+esc(b.hours)+'</p></div></div>'+
      '<form class="contact-form" id="inquiry-form"><h2>Request a scope review.</h2><p>'+esc(c.note)+'</p>'+
      '<div class="form-grid"><div class="field"><label for="name">Your name *</label><input id="name" name="name" autocomplete="name" required></div>'+
      '<div class="field"><label for="email">Email address *</label><input id="email" name="email" type="email" autocomplete="email" required></div>'+
      '<div class="field"><label for="phone">Phone number</label><input id="phone" name="phone" type="tel" autocomplete="tel"></div>'+
      '<div class="field"><label for="type">Scope needed</label><select id="type" name="project"><option>Multifamily kitchen cabinets</option><option>Bathroom vanities</option><option>Countertops</option><option>Multiple scopes / bid package</option><option>Common areas</option></select></div>'+
      '<div class="field full"><label for="message">Project name, company, location, unit count and bid timeline *</label><textarea id="message" name="message" required></textarea></div></div>'+
      '<div class="hp-field" aria-hidden="true"><label for="site-website">Leave this field blank</label><input id="site-website" name="website" tabindex="-1" autocomplete="off"></div>'+
      '<button class="btn" type="submit">Prepare bid inquiry <span aria-hidden="true">↗</span></button><div class="form-status" role="status" aria-live="polite"></div>'+
      '<p class="tiny">Without a configured form service, this opens your email application to send the inquiry. No message is stored on the website.</p></form></section>';
  };

  const canvasOverlay = d => {
    const conf=d.settings?.designCanvas;if(!conf?.enabled)return;
    const items=(conf.elements||[]).filter(x=>x&&x.visible!==false);
    const main=$("#main");if(!main||!items.length)return;
    const layer=document.createElement("div");layer.className="canvas-layer";layer.setAttribute("aria-label","Designed elements");
    items.forEach(item=>{
      const el=document.createElement(item.type==="image"?"img":item.type==="button"?"a":"div");
      el.className="canvas-element motion-"+(["none","float","fade","zoom","slide"].includes(item.motion)?item.motion:"none");
      el.dataset.canvasId=String(item.id||"");
      const n=(v,min,max,fallback)=>Math.min(max,Math.max(min,Number.isFinite(Number(v))?Number(v):fallback));
      el.style.left=n(item.x,0,100,10)+"%";el.style.top=n(item.y,0,100,20)+"%";
      el.style.width=n(item.width,5,100,30)+"%";
      el.style.fontSize=n(item.fontSize,10,96,28)+"px";
      el.style.color=/^#[0-9a-f]{6}$/i.test(item.color||"")?item.color:"#ffffff";
      if(item.type==="image"){el.src=String(item.src||"");el.alt=String(item.text||"Decorative image");el.loading="lazy";el.style.objectFit="contain";}
      else {el.textContent=String(item.text||"New element");if(item.type==="button"){el.href=/^(https:\/\/|\.\/|#)/.test(item.href||"")?item.href:"./request-a-bid.html";el.classList.add("btn");}}
      layer.appendChild(el);
    });
    main.prepend(layer);main.classList.add("canvas-main");
  };
  const customPage=d=>{
    const p=(d.settings?.pages||[]).find(x=>x.slug===pageSlug&&x.visible!==false);
    if(!p)return '<section class="section"><div class="shell"><h1>Page not found</h1><p><a href="./index.html">Return home</a></p></div></section>';
    const img=safeImage(p.image);
    return '<section class="section"><div class="shell"><p class="eyebrow dark">'+esc(p.eyebrow||"K CABINETRY")+'</p><h1 class="title">'+esc(p.title)+'</h1><p class="section-copy">'+esc(p.intro)+'</p>'+
    (img?'<img style="max-width:100%;max-height:550px;object-fit:cover;margin-top:40px" src="'+img+'" alt="'+esc(p.title)+'">':"")+'</div></section>';
  };
  const enablePencilEditing = d => {
    if(new URLSearchParams(location.search).get("preview")!=="1"||window.parent===window)return;
    const fields=[];
    const map={
      home:[[".hero .display","hero.title"],[".hero-desc","hero.description"],[".intro .title","home.introTitle"],[".intro .section-copy","home.introText"],[".collections .title","home.productsTitle"],[".benefits .title","home.valueTitle"],["section.projects .title","home.projectsTitle"],[".cta-photo .title","home.ctaTitle"]],
      about:[[".story .title","about.storyTitle"],[".story p","about.intro"]],
      contact:[[".contact-details .title","contact.title"],[".contact-details .section-copy","contact.introduction"]]
    };
    fields.push(...(map[page]||[]));
    (d.products||[]).forEach((v,i)=>{if(page==="products")fields.push(["#"+CSS.escape(v.id)+" .product-info h2","products."+i+".title"],["#"+CSS.escape(v.id)+" .product-info .subtitle","products."+i+".short"]);});
    (d.settings?.customBlocks||[]).forEach((block,i)=>{
      if((block.page||"home")!==page)return;
      const part='[data-custom-id="'+block.id+'"]';
      fields.push([part+" .title","settings.customBlocks."+i+".title"],[part+" .section-copy","settings.customBlocks."+i+".body"]);
    });
    for(const [selector,path] of fields){
      const target=document.querySelector(selector);if(!target)continue;
      const wrapper=document.createElement("span");wrapper.className="pencil-wrap";
      target.parentNode.insertBefore(wrapper,target);wrapper.appendChild(target);
      const button=document.createElement("button");button.type="button";button.className="pencil-edit";button.textContent="✎";button.title="Edit this content";button.setAttribute("aria-label","Edit "+path);
      wrapper.appendChild(button);
      button.addEventListener("click",event=>{
        event.preventDefault();event.stopPropagation();
        const was=target.textContent;
        target.contentEditable="true";target.focus();
        const selection=window.getSelection();const range=document.createRange();range.selectNodeContents(target);selection.removeAllRanges();selection.addRange(range);
        const save=()=>{
          target.contentEditable="false";target.removeEventListener("blur",save);
          const value=target.innerText.trim();if(value&&value!==was)window.parent.postMessage({type:"K_CABINETRY_INLINE_EDIT",path,value},location.origin);
        };
        target.addEventListener("blur",save);
        target.addEventListener("keydown",e=>{if(e.key==="Escape"){target.textContent=was;target.blur();}if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();target.blur();}});
      });
    }
  };
  const enableAllTextEditing = d => {
    const key=page==="custom"?"custom:"+pageSlug:page;
    const nodes=document.querySelectorAll("#site h1,#site h2,#site h3,#site p,#site a,#site .eyebrow,#site .ticker-item");
    const editor=new URLSearchParams(location.search).get("preview")==="1"&&window.parent!==window;
    let index=0;
    nodes.forEach(node=>{
      if(node.closest(".pencil-wrap, form")||node.querySelector("a,button,img"))return;
      const id="text-"+index++;
      const value=d.settings?.textOverrides?.[key]?.[id];
      if(typeof value==="string")node.textContent=value;
      if(!editor)return;
      const wrap=document.createElement("span");wrap.className="pencil-wrap";
      node.parentNode.insertBefore(wrap,node);wrap.appendChild(node);
      const btn=document.createElement("button");btn.type="button";btn.className="pencil-edit";btn.textContent="✎";btn.title="Edit text";
      wrap.append(btn);
      btn.addEventListener("click",ev=>{
        ev.preventDefault();ev.stopPropagation();
        const old=node.textContent;node.contentEditable="true";node.focus();
        const save=()=>{
          node.removeEventListener("blur",save);node.contentEditable="false";
          const value=node.innerText.trim();
          if(value&&value!==old)window.parent.postMessage({type:"K_CABINETRY_INLINE_EDIT",path:"settings.textOverrides."+key+"."+id,value},location.origin);
        };
        node.addEventListener("blur",save);
        node.addEventListener("keydown",e=>{if(e.key==="Escape"){node.textContent=old;node.blur()}if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();node.blur()}});
      });
    });
  };
  
  const initCatalogEditor = d => {
    const editor=new URLSearchParams(location.search).get("preview")==="1"&&window.parent!==window;
    if(!editor||!["catalog","cabinets"].includes(page))return;
    const key=page==="catalog"?"catalog":"cabinetCatalog";
    const root=document.querySelector(".stone-catalog .shell");if(!root)return;
    root.querySelector(".catalog-preview-toolbar")?.remove();
    const toolbar=document.createElement("div");toolbar.className="catalog-preview-toolbar";toolbar.innerHTML='<strong>Product image sections</strong><button type="button" data-catalog-add>+ Add product / image</button>';
    root.prepend(toolbar);
    toolbar.querySelector("button").onclick=()=>window.parent.postMessage({type:"K_CABINETRY_CATALOG_ACTION",action:"add",key,material:document.querySelector(".stone-tab.active")?.dataset.stoneTab||"Granite"},location.origin);
    root.querySelectorAll(".stone-card").forEach(card=>{
      const title=card.querySelector("h3")?.textContent||"";
      const idx=(d[key]||[]).findIndex(item=>item.name===title);
      if(idx<0)return;
      const controls=document.createElement("div");controls.className="catalog-card-actions";
      controls.innerHTML='<button type="button" data-edit>Edit / replace image</button><button type="button" data-remove>Remove</button>';
      card.style.position="relative";card.append(controls);
      controls.querySelector("[data-edit]").onclick=()=>window.parent.postMessage({type:"K_CABINETRY_CATALOG_ACTION",action:"edit",key,index:idx},location.origin);
      controls.querySelector("[data-remove]").onclick=()=>window.parent.postMessage({type:"K_CABINETRY_CATALOG_ACTION",action:"remove",key,index:idx},location.origin);
    });
  };
const render = async (previewData=null) => {
    try {
      let d=previewData;
      if(!d){try{const response=await fetch(ROOT+"content/site.json?v="+Date.now(),{cache:"no-store"});if(!response.ok)throw Error("HTTP "+response.status);d=await response.json();}catch(loadError){console.warn("Using bundled K Cabinetry content fallback:",loadError);d=BACKUP_CONTENT;}}
      applySettings(d);
      if(page==="custom"){const custom=(d.settings?.pages||[]).find(x=>x.slug===pageSlug);if(custom){document.title=(custom.seoTitle||custom.title)+" | K Cabinetry";document.querySelector('meta[name="description"]')?.setAttribute("content",custom.description||"");}}
      const sections={home,products,catalog,cabinets,projects,about,contact,custom:customPage};
      $("#site").innerHTML=header(d)+'<main id="main">'+(sections[page]||home)(d)+'</main>'+footer(d);
      if(page==="catalog")initCatalog(d);
      if(page==="cabinets")initCabinetConfigurator(d);
      initCatalogEditor(d);
      arrangeSections(d);
      applyVisibility(d);
      canvasOverlay(d);
      enableAllTextEditing(d);
      $("#year").textContent=new Date().getFullYear();
      const head=$("#header"),toggle=$("#menu-toggle");
      const sticky=()=>head.classList.toggle("scrolled",scrollY>65);
      addEventListener("scroll",sticky,{passive:true});sticky();
      toggle.addEventListener("click",()=>{
        const isOpen=head.classList.toggle("menu-open");
        toggle.setAttribute("aria-expanded",String(isOpen));
      });
      document.addEventListener("keydown",ev=>{if(ev.key==="Escape"){head.classList.remove("menu-open");toggle.setAttribute("aria-expanded","false");}});
      if("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches){
        const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("shown");io.unobserve(e.target);}}),{threshold:.08});
        document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
      } else document.querySelectorAll(".reveal").forEach(el=>el.classList.add("shown"));
      document.querySelectorAll(".filter-btn").forEach(button=>button.addEventListener("click",()=>{
        const cat=button.dataset.filter;
        document.querySelectorAll(".filter-btn").forEach(el=>{const sel=el===button;el.classList.toggle("active",sel);el.setAttribute("aria-pressed",String(sel));});
        document.querySelectorAll(".gallery-card").forEach(el=>{el.hidden=cat!=="All" && el.dataset.category!==cat;el.style.display=el.hidden?"none":"";});
      }));
      const form=$("#inquiry-form");
      if(form) form.addEventListener("submit",async e=>{
        e.preventDefault();
        if(!form.reportValidity()) return;
        const values=Object.fromEntries(new FormData(form).entries());
        const status=$(".form-status",form), endpoint=String(d.contact?.formEndpoint||"").trim();
        if(/^https:\/\//i.test(endpoint)){
          const btn=$("button[type=submit]",form);btn.disabled=true;status.textContent="Sending your inquiry…";
          try {
            const r=await fetch(endpoint,{method:"POST",body:JSON.stringify(values),headers:{"Accept":"application/json","Content-Type":"application/json"}});
            if(!r.ok) throw Error("Form service returned "+r.status);
            status.textContent="Thank you. Your inquiry was submitted.";form.reset();
          }catch(err){status.textContent=String(err?.message||"").includes("429")?"Too many attempts. Please try again later or email "+d.brand.email+".":"Couldn't submit automatically. Please email "+d.brand.email+"."; }
          finally{btn.disabled=false;}
        }else{
          const subject="K Cabinetry inquiry — "+values.project;
          const body=["Name: "+values.name,"Email: "+values.email,"Phone: "+(values.phone||"Not provided"),"Project: "+values.project,"","Details:",values.message].join("\n");
          const mail="mailto:"+encodeURIComponent(d.brand.email)+"?subject="+encodeURIComponent(subject)+"&body="+encodeURIComponent(body);
          status.textContent="Online submission is not configured. Please email us directly using the message prepared by your email app.";
          window.location.href=mail;
        }
      });
    } catch (error) {
      console.error("Site content error:", error);
      $("#site").innerHTML='<main class="loading"><h1>K Cabinetry</h1><p>We could not load the website content. Please refresh or contact <a href="mailto:info@kcabinetry.net">info@kcabinetry.net</a>.</p></main>';
    }
  };
  if(new URLSearchParams(location.search).get("preview")==="1" && window.parent!==window){
    window.addEventListener("message",event=>{
      if(event.origin!==location.origin||event.source!==window.parent||event.data?.type!=="K_CABINETRY_PREVIEW")return;
      if(!event.data.payload || typeof event.data.payload!=="object")return;
      render(event.data.payload);
    });
  }
  render();
})();