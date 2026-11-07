/* ===== NEST MART — données partagées ===== */
const I18N = {
  fr:{
    top_about:"À propos de nous", top_track:"Suivi de commande", top_help:"Besoin d'aide ? Appelez-nous :", lang:"Français",
    search_cat:"Toutes les catégories", search_ph:"Rechercher des articles...",
    ic_compare:"Comparer", ic_wish:"Liste de souhaits", ic_cart:"Panier", ic_account:"Compte",
    allcat:"Parcourir toutes les catégories", nav_home:"Maison", nav_shop:"Boutique", nav_stores:"Magasins", nav_blog:"Blog", nav_faq:"FAQ", nav_contact:"Contact",
    hero_t:"Légumes frais à prix réduit", hero_p:"Économisez jusqu'à 50 % sur votre première commande", hero_btn:"Acheter maintenant",
    promo1_t:"Fraîcheur et propreté au quotidien", promo2_t:"Les meilleurs produits biologiques en ligne",
    cats_t:"Principales catégories", popular_t:"Produits populaires", deals_t:"Offres du jour", new_t:"Nouveaux produits",
    sold_by:"Vendu par", add:"Ajouter", added:"Ajouté ${ic('check')}", articles:"articles", found:"Nous avons trouvé", for_you:"articles pour vous !",
    filter:"Filtres", show:"Montrer", sort:"Trier par", sort_def:"Défaut", sort_price:"Prix croissant", sort_rated:"Mieux notés",
    news_t:"Restez chez vous et faites vos courses quotidiennes dans notre magasin.", news_ph:"Saisissez votre adresse e-mail", news_btn:"S'abonner",
    svc1:"Meilleurs prix et offres", svc1d:"Commandes de 65 700 FCFA ou plus", svc2:"Livraison gratuite", svc2d:"Service 24h/24 et 7j/7", svc3:"Offre du jour exceptionnelle", svc3d:"Inscrivez-vous", svc4:"Large assortiment", svc4d:"Méga réductions", svc5:"Retours faciles", svc5d:"Délai de 30 jours",
    f_co:"Entreprise", f_cat:"Catégories", f_info:"Information", f_app:"Installer l'application", f_tag:"Modèle de site génial pour épicerie",
    f_addr:"Adresse", f_call:"Appelez-nous", f_mail:"Courriel", f_hours:"Horaires : 10h00 - 18h00, lundi au samedi",
    rights:"© 2026 Qui Market. Tous droits réservés.", follow:"Suivez-nous", sub15:"Jusqu'à 15 % de réduction sur votre premier abonnement",
    cart_empty:"Votre panier est vide", cart_total:"Total", cart_go:"Voir le panier",
    acc_orders:"Mes commandes", acc_coupons:"Mes bons de réduction", acc_wish:"Ma liste de souhaits", acc_title:"Mon compte",
    coupon1:"-15 % sur votre première commande", coupon2:"Livraison gratuite dès 65 700 FCFA", coupon3:"-10 % sur les fruits et légumes",
    dash_orders:"Commandes", dash_sales:"Ventes (FCFA)", dash_products:"Produits", dash_customers:"Clients",
    super_title:"Super Admin — vue globale", super_stores:"Boutiques", super_products:"Produits totaux", super_orders:"Commandes totales", super_revenue:"Revenu total (FCFA)",
    th_id:"Référence", th_client:"Client", th_prod:"Produit", th_amount:"Montant", th_status:"Statut", th_date:"Date", th_store:"Boutique", th_name:"Nom", th_price:"Prix", th_stock:"Stock",
    s_ok:"Livrée", s_wait:"En attente", s_ship:"Expédiée",
    crumbs_home:"Maison", page_stores:"Magasins", page_blog:"Blog", page_faq:"FAQ", page_contact:"Contact",
    stores_search:"Rechercher une boutique...", stores_count:"Nous avons maintenant", stores_sup:"boutiques.",
    since:"Depuis", products_n:"produits", verified:"Vérifié",
    blog_search:"Rechercher...", blog_cats:"Catégories", blog_trend:"Tendances actuelles", blog_tags:"Étiquettes populaires",
    faq_t:"Questions fréquentes", faq_ship:"Expédition", faq_pay:"Paiement", faq_ord:"Commandes et retours",
    contact_map:"Carte — 502 New St, Brighton, Australie", contact_write:"Écrivez-nous", contact_sub:"N'hésitez pas à nous contacter pour toute question.",
    c_name:"Votre nom", c_mail:"Votre courriel", c_addr:"Votre adresse", c_phone:"Votre téléphone", c_subj:"Sujet", c_msg:"Votre message", c_accept:"J'accepte les conditions d'utilisation et la politique de confidentialité", c_send:"Envoyer un message", c_ok:"Message envoyé — merci !",
    pd_stock:"produits disponibles", pd_addcart:"Ajouter au panier", pd_buy:"Acheter maintenant", pd_share:"Partagez ceci",
    pd_desc:"Produit frais sélectionné avec soin. Emballage soigné, livraison rapide et paiement à la livraison disponible.",
    cat_fruits:"Fruits & légumes", cat_epicerie:"Épicerie", cat_boissons:"Boissons", cat_lait:"Laiterie", cat_boul:"Boulangerie", cat_hyg:"Hygiène & maison",
    b1:"Bureau Mondial", b2:"Young Shop", b3:"Magasin Mondial",
    b1d:"Épicerie fine et produits du quotidien", b2d:"Fruits, légumes et bio frais", b3d:"Boissons, laiterie et boulangerie",
    view_store:"Visiter la boutique", back_home:"Retour à l'accueil", no_res:"Aucun produit trouvé", qty:"Quantité", weight:"Poids", box:"Boîte"
  },
  en:{
    top_about:"About us", top_track:"Track order", top_help:"Need help? Call us:", lang:"English",
    search_cat:"All categories", search_ph:"Search for items...",
    ic_compare:"Compare", ic_wish:"Wishlist", ic_cart:"Cart", ic_account:"Account",
    allcat:"Browse all categories", nav_home:"Home", nav_shop:"Shop", nav_stores:"Stores", nav_blog:"Blog", nav_faq:"FAQ", nav_contact:"Contact",
    hero_t:"Fresh vegetables at reduced prices", hero_p:"Save up to 50% on your first order", hero_btn:"Shop now",
    promo1_t:"Freshness and cleanliness every day", promo2_t:"The best organic products online",
    cats_t:"Top categories", popular_t:"Popular products", deals_t:"Deals of the day", new_t:"New products",
    sold_by:"Sold by", add:"Add", added:"Added ${ic('check')}", articles:"items", found:"We found", for_you:"items for you!",
    filter:"Filters", show:"Show", sort:"Sort by", sort_def:"Default", sort_price:"Price: low to high", sort_rated:"Top rated",
    news_t:"Stay home and do your daily shopping in our store.", news_ph:"Enter your e-mail address", news_btn:"Subscribe",
    svc1:"Best prices & offers", svc1d:"Orders of 100,000 XOF or more", svc2:"Free delivery", svc2d:"24/7 service", svc3:"Great daily deal", svc3d:"Sign up", svc4:"Wide assortment", svc4d:"Mega deals", svc5:"Easy returns", svc5d:"Within 30 days",
    f_co:"Company", f_cat:"Categories", f_info:"Information", f_app:"Get the app", f_tag:"Great grocery website template",
    f_addr:"Address", f_call:"Call us", f_mail:"E-mail", f_hours:"Hours: 10:00 - 18:00, Monday to Saturday",
    rights:"© 2026 Qui Market. All rights reserved.", follow:"Follow us", sub15:"Up to 15% off your first subscription",
    cart_empty:"Your cart is empty", cart_total:"Total", cart_go:"View cart",
    acc_orders:"My orders", acc_coupons:"My coupons", acc_wish:"My wishlist", acc_title:"My account",
    coupon1:"-15% off your first order", coupon2:"Free shipping over 100,000 XOF", coupon3:"-10% on fruits & vegetables",
    dash_orders:"Orders", dash_sales:"Sales (XOF)", dash_products:"Products", dash_customers:"Customers",
    super_title:"Super Admin — global view", super_stores:"Stores", super_products:"Total products", super_orders:"Total orders", super_revenue:"Total revenue (XOF)",
    th_id:"Reference", th_client:"Customer", th_prod:"Product", th_amount:"Amount", th_status:"Status", th_date:"Date", th_store:"Store", th_name:"Name", th_price:"Price", th_stock:"Stock",
    s_ok:"Delivered", s_wait:"Pending", s_ship:"Shipped",
    crumbs_home:"Home", page_stores:"Stores", page_blog:"Blog", page_faq:"FAQ", page_contact:"Contact",
    stores_search:"Search a store...", stores_count:"We now have", stores_sup:"stores.",
    since:"Since", products_n:"products", verified:"Verified",
    blog_search:"Search...", blog_cats:"Categories", blog_trend:"Trending now", blog_tags:"Popular tags",
    faq_t:"Frequently asked questions", faq_ship:"Shipping", faq_pay:"Payment", faq_ord:"Orders & returns",
    contact_map:"Map — 502 New St, Brighton, Australia", contact_write:"Write to us", contact_sub:"Feel free to contact us for any question.",
    c_name:"Your name", c_mail:"Your e-mail", c_addr:"Your address", c_phone:"Your phone", c_subj:"Subject", c_msg:"Your message", c_accept:"I accept the terms and privacy policy", c_send:"Send message", c_ok:"Message sent — thank you!",
    pd_stock:"items in stock", pd_addcart:"Add to cart", pd_buy:"Buy now", pd_share:"Share this",
    pd_desc:"Carefully selected fresh product. Neat packaging, fast delivery and cash on delivery available.",
    cat_fruits:"Fruits & vegetables", cat_epicerie:"Grocery", cat_boissons:"Drinks", cat_lait:"Dairy", cat_boul:"Bakery", cat_hyg:"Home & hygiene",
    b1:"World Office", b2:"Young Shop", b3:"World Store",
    b1d:"Fine grocery and everyday products", b2d:"Fresh fruit, vegetables and organic", b3d:"Drinks, dairy and bakery",
    view_store:"Visit store", back_home:"Back to home", no_res:"No product found", qty:"Quantity", weight:"Weight", box:"Box"
  }
};

const CATS = {
  fruits:{fr:"Fruits & légumes",en:"Fruits & vegetables",img:"assets/cat_fruits.jpg"},
  epicerie:{fr:"Épicerie",en:"Grocery",img:"assets/cat_epicerie.jpg"},
  boissons:{fr:"Boissons",en:"Drinks",img:"assets/cat_boissons.jpg"},
  laiterie:{fr:"Laiterie",en:"Dairy",img:"assets/cat_laiterie.jpg"},
  boulangerie:{fr:"Boulangerie",en:"Bakery",img:"assets/cat_boulangerie.jpg"},
  hygiene:{fr:"Hygiène & maison",en:"Home & hygiene",img:"assets/cat_hygiene.jpg"}
};

const BOUTIQUES = [
  {id:"b1",fr:"Bureau Mondial",en:"World Office",img:"assets/boutique1.jpg",since:2024,products:9,rating:4.5,reviews:90,addr:"123 Main Street, Los Angeles, Californie",phone:"+1 1123456789",desc_fr:"Épicerie fine et produits du quotidien",desc_en:"Fine grocery and everyday products"},
  {id:"b2",fr:"Young Shop",en:"Young Shop",img:"assets/boutique2.jpg",since:2026,products:9,rating:4.8,reviews:50,addr:"456 Oak Avenue, Houston, Texas",phone:"+1 1234567901",desc_fr:"Fruits, légumes et bio frais",desc_en:"Fresh fruit, vegetables and organic"},
  {id:"b3",fr:"Magasin Mondial",en:"World Store",img:"assets/boutique3.jpg",since:2026,products:6,rating:4.6,reviews:100,addr:"321 Maple Drive, New York, NY",phone:"+1 1456789012",desc_fr:"Boissons, laiterie et boulangerie",desc_en:"Drinks, dairy and bakery"}
];

/* 24 produits : [img, cat, boutique, nom fr, nom en, prix FCFA, ancien prix, badge, étoiles, avis] */
const PRODUCTS = [
  {img:"assets/p01.jpg",cat:"fruits",shop:"b2",fr:"Tomates fraîches 1 kg",en:"Fresh tomatoes 1 kg",price:"1 310 FCFA",old:"2 620 FCFA",badge:"-50%",stars:4,rev:10},
  {img:"assets/p02.jpg",cat:"fruits",shop:"b2",fr:"Bananes mûres 1 kg",en:"Ripe bananas 1 kg",price:"980 FCFA",old:"1 970 FCFA",badge:"-50%",stars:4,rev:10},
  {img:"assets/p03.jpg",cat:"fruits",shop:"b2",fr:"Brocoli frais",en:"Fresh broccoli",price:"1 640 FCFA",old:null,badge:"Chaud",stars:4,rev:10},
  {img:"assets/p04.jpg",cat:"epicerie",shop:"b1",fr:"Huile d'olive extra vierge 1 L",en:"Extra virgin olive oil 1 L",price:"6 560 FCFA",old:"8 850 FCFA",badge:"-26%",stars:5,rev:12},
  {img:"assets/p05.jpg",cat:"epicerie",shop:"b1",fr:"Riz blanc parfumé 5 kg",en:"Fragrant white rice 5 kg",price:"4 920 FCFA",old:null,badge:null,stars:4,rev:8},
  {img:"assets/p06.jpg",cat:"epicerie",shop:"b1",fr:"Pâtes italiennes assorties",en:"Assorted Italian pasta",price:"2 300 FCFA",old:"2 950 FCFA",badge:"-22%",stars:4,rev:6},
  {img:"assets/p07.jpg",cat:"boissons",shop:"b3",fr:"Jus d'orange frais 1 L",en:"Fresh orange juice 1 L",price:"1 970 FCFA",old:"2 620 FCFA",badge:"-25%",stars:5,rev:14},
  {img:"assets/p08.jpg",cat:"boissons",shop:"b3",fr:"Eau minérale pétillante 1,5 L",en:"Sparkling mineral water 1.5 L",price:"820 FCFA",old:null,badge:"Nouveau",stars:4,rev:5},
  {img:"assets/p09.jpg",cat:"laiterie",shop:"b3",fr:"Lait entier frais 1 L",en:"Fresh whole milk 1 L",price:"1 150 FCFA",old:"1 640 FCFA",badge:"-30%",stars:5,rev:20},
  {img:"assets/p10.jpg",cat:"laiterie",shop:"b3",fr:"Fromage affiné en portion",en:"Aged cheese portion",price:"3 280 FCFA",old:null,badge:null,stars:4,rev:9},
  {img:"assets/p11.jpg",cat:"boulangerie",shop:"b3",fr:"Baguette tradition",en:"Traditional baguette",price:"660 FCFA",old:"990 FCFA",badge:"-33%",stars:5,rev:30},
  {img:"assets/p12.jpg",cat:"boulangerie",shop:"b3",fr:"Croissants pur beurre x4",en:"Butter croissants x4",price:"2 620 FCFA",old:null,badge:"Chaud",stars:4,rev:11},
  {img:"assets/p13.jpg",cat:"hygiene",shop:"b1",fr:"Savon naturel artisanal",en:"Natural handmade soap",price:"1 310 FCFA",old:"2 300 FCFA",badge:"-43%",stars:4,rev:7},
  {img:"assets/p14.jpg",cat:"hygiene",shop:"b1",fr:"Shampoing doux bio 300 ml",en:"Gentle organic shampoo 300 ml",price:"2 950 FCFA",old:null,badge:"Nouveau",stars:5,rev:15},
  {img:"assets/p15.jpg",cat:"fruits",shop:"b2",fr:"Pommes rouges 1 kg",en:"Red apples 1 kg",price:"1 640 FCFA",old:"3 280 FCFA",badge:"-50%",stars:4,rev:8},
  {img:"assets/p16.jpg",cat:"fruits",shop:"b2",fr:"Fraises fraîches 500 g",en:"Fresh strawberries 500 g",price:"2 620 FCFA",old:null,badge:"Vente",stars:5,rev:18},
  {img:"assets/p17.jpg",cat:"epicerie",shop:"b1",fr:"Miel pur 500 g",en:"Pure honey 500 g",price:"5 900 FCFA",old:"7 870 FCFA",badge:"-25%",stars:5,rev:22},
  {img:"assets/p18.jpg",cat:"epicerie",shop:"b1",fr:"Café torréfié 250 g",en:"Ground coffee 250 g",price:"3 940 FCFA",old:null,badge:null,stars:4,rev:10},
  {img:"assets/p19.jpg",cat:"boissons",shop:"b3",fr:"Jus de mangue 1 L",en:"Mango juice 1 L",price:"2 300 FCFA",old:"2 950 FCFA",badge:"-22%",stars:4,rev:9},
  {img:"assets/p20.jpg",cat:"laiterie",shop:"b3",fr:"Yaourt nature x8",en:"Plain yogurt x8",price:"2 620 FCFA",old:null,badge:"Nouveau",stars:4,rev:6},
  {img:"assets/p21.jpg",cat:"boulangerie",shop:"b3",fr:"Pain de campagne 500 g",en:"Country loaf 500 g",price:"1 970 FCFA",old:"2 620 FCFA",badge:"-25%",stars:5,rev:13},
  {img:"assets/p22.jpg",cat:"hygiene",shop:"b1",fr:"Lessive écologique 2 L",en:"Eco laundry detergent 2 L",price:"4 590 FCFA",old:"6 560 FCFA",badge:"-30%",stars:4,rev:8},
  {img:"assets/p23.jpg",cat:"fruits",shop:"b2",fr:"Carottes nouvelles 1 kg",en:"Fresh carrots 1 kg",price:"1 150 FCFA",old:null,badge:null,stars:4,rev:5},
  {img:"assets/p24.jpg",cat:"epicerie",shop:"b1",fr:"Thé vert bio boîte x20",en:"Organic green tea box x20",price:"2 620 FCFA",old:"3 940 FCFA",badge:"-33%",stars:5,rev:16}
];

const ORDERS = [
  {ref:"NM-3841",cli:"A. Kouassi",prod:{fr:"Tomates fraîches 1 kg",en:"Fresh tomatoes 1 kg"},shop:"b2",amt:"1 310 FCFA",st:"s_ok",date:"06/11/2026"},
  {ref:"NM-3840",cli:"M. Traoré",prod:{fr:"Huile d'olive 1 L",en:"Olive oil 1 L"},shop:"b1",amt:"6 560 FCFA",st:"s_ship",date:"06/11/2026"},
  {ref:"NM-3839",cli:"F. Diallo",prod:{fr:"Lait entier 1 L",en:"Whole milk 1 L"},shop:"b3",amt:"1 150 FCFA",st:"s_wait",date:"05/11/2026"},
  {ref:"NM-3838",cli:"S. Bamba",prod:{fr:"Bananes 1 kg",en:"Bananas 1 kg"},shop:"b2",amt:"980 FCFA",st:"s_ok",date:"05/11/2026"},
  {ref:"NM-3837",cli:"K. Ouattara",prod:{fr:"Miel pur 500 g",en:"Pure honey 500 g"},shop:"b1",amt:"5 900 FCFA",st:"s_ship",date:"04/11/2026"}
];

let lang = localStorage.getItem("nm-lang") || "fr";
function t(k){ return I18N[lang][k] || k; }
function stars(n){ let s=""; for(let i=1;i<=5;i++) s += i<=n?"★":"☆"; return s; }
function badgeHTML(b){
  if(!b) return "";
  const cls = b==="Chaud"?"hot":b==="Nouveau"?"new":b==="Vente"?"sale":"promo";
  return `<span class="badge ${cls}">${b}</span>`;
}
function productCard(p){
  const shop = BOUTIQUES.find(b=>b.id===p.shop);
  return `<div class="pcard">${badgeHTML(p.badge)}
    <a class="img" href="produit.html?i=${PRODUCTS.indexOf(p)}"><img src="${p.img}" alt="" loading="lazy">
      <span class="hacts">
        <button title="Aperçu rapide" onclick="event.preventDefault();quickView(${PRODUCTS.indexOf(p)})">${ic('eye')}</button>
        <button title="Liste de souhaits" onclick="event.preventDefault();addWish(${PRODUCTS.indexOf(p)},this)">${ic('heart')}</button>
        <button title="Comparer" onclick="event.preventDefault();addCompare(${PRODUCTS.indexOf(p)},this)">${ic('compare')}</button>
      </span></a>
    <div class="body">
      <span class="cat">${CATS[p.cat][lang]}</span>
      <a class="nm" href="produit.html?i=${PRODUCTS.indexOf(p)}">${p[lang]}</a>
      <div class="stars">${stars(p.stars)} <span>(${p.rev})</span></div>
      <div class="seller">${t("sold_by")} <a href="boutique.html?id=${p.shop}">${shop[lang]}</a></div>
      <div><span class="price">${p.price}</span>${p.old?`<span class="old">${p.old}</span>`:""}</div>
      <button class="add" onclick="addToCart(${PRODUCTS.indexOf(p)})">${ic('cart')} ${t("add")}</button>
    </div></div>`;
}
/* panier */
function getCart(){ return JSON.parse(localStorage.getItem("nm-cart")||"[]"); }
function addToCart(i){
  const c = getCart(); c.push(i); localStorage.setItem("nm-cart", JSON.stringify(c));
  const b = document.getElementById("cartCount"); if(b) b.textContent = c.length; const b2 = document.getElementById("bnavCart"); if(b2) b2.textContent = c.length;
  const btns = document.querySelectorAll(".add"); 
}
function cartCount(){ return getCart().length; }
function getWish(){ return JSON.parse(localStorage.getItem("nm-wish")||"[]"); }
function addWish(i,btn){ const w=getWish(); if(!w.includes(i)){ w.push(i); localStorage.setItem("nm-wish",JSON.stringify(w)); const c=document.getElementById("wishCount"); if(c) c.textContent=w.length; if(btn){btn.style.background="var(--green)";btn.style.color="#fff";} } }
function addCompare(i,btn){ let c=JSON.parse(localStorage.getItem("nm-comp")||"[]"); if(!c.includes(i)){ c.push(i); localStorage.setItem("nm-comp",JSON.stringify(c)); if(btn){btn.style.background="var(--orange)";btn.style.color="#fff";} } }
function quickView(i){
  const p = PRODUCTS[i], shop = BOUTIQUES.find(b=>b.id===p.shop);
  document.body.insertAdjacentHTML("beforeend", `
  <div class="modal-bg open" id="qvBg" onclick="if(event.target===this)this.remove()">
    <div class="modal">
      <button class="x" onclick="document.getElementById('qvBg').remove()">${ic('×')}</button>
      <div class="mimg"><img src="${p.img}" alt=""></div>
      <div class="mbody">
        <span style="font-size:11px;color:var(--muted)">${CATS[p.cat][lang]}</span>
        <h2>${p[lang]}</h2>
        <div class="stars">${stars(p.stars)} <span style="color:var(--muted)">(${p.rev} avis)</span></div>
        <div style="margin:8px 0"><span class="price">${p.price}</span>${p.old?`<span class="old">${p.old}</span>`:""}${p.badge&&p.badge.includes("%")?`<span style="color:var(--orange);font-size:12px;font-weight:700;margin-left:8px">${p.badge} de réduction</span>`:""}</div>
        <div style="font-size:12px;color:var(--muted)">${t("sold_by")} <a href="boutique.html?id=${p.shop}" style="color:var(--green);font-weight:700">${shop[lang]}</a></div>
        <p class="desc">${t("pd_desc")}</p>
        <ul class="gar"><li>${ic('check')} Garantie 1 an</li><li>${ic('check')} Retour 30 jours</li><li>${ic('check')} Paiement à la livraison</li></ul>
        <div class="opts">
          <div class="opt"><label>${t("weight")}:</label><select><option>1 kg</option><option>500 g</option><option>2 kg</option></select></div>
          <div class="opt"><label>${t("box")}:</label><select><option>1 boîte</option><option>2 boîtes</option><option>5 boîtes</option></select></div>
        </div>
        <div class="stock">${ic('check')} 18 ${t("pd_stock")}</div>
        <div style="display:flex;gap:10px;align-items:center;margin-top:14px;flex-wrap:wrap">
          <span class="qty"><button onclick="qvQty(-1)">−</button><span id="qvq">1</span><button onclick="qvQty(1)">+</button></span>
          <button class="btn" onclick="addToCart(${i});this.innerHTML='${ic('check')} ${t("added")}'">${ic('cart')} ${t("pd_addcart")}</button>
          <button class="btn blue">${t("pd_buy")}</button>
          <button class="btn ghost">${ic('heart')}</button>
        </div>
        <div style="margin-top:14px;font-size:11px;color:var(--muted)">${t("pd_share")}: &nbsp; ${ic('×')}  ${ic('mail')}</div>
      </div>
    </div>
  </div>`);
}
let qvN = 1;
function qvQty(d){ qvN = Math.max(1, qvN+d); const el=document.getElementById("qvq"); if(el) el.textContent=qvN; }

/* header / footer communs */
function headerHTML(active){
  return `<div class="topbar"><div class="wrap">
    <div><a href="#">${t("top_about")}</a><a href="compte.html">${t("top_track")}</a></div>
    <div>${t("top_help")} <span class="phone">1900 - 888</span> &nbsp;|&nbsp; ${ic('globe')} ${t("lang")} &nbsp;|&nbsp; FCFA ▾</div>
  </div></div>
  <header><div class="hd">
    <a class="logo" href="index.html">${ic('basket')} Qui<small>MARKET &amp; GROCERY</small></a>
    <form class="searchbox" onsubmit="location.href='produits.html?q='+encodeURIComponent(this.q.value);return false">
      <select><option>${t("search_cat")}</option>${Object.values(CATS).map(c=>`<option>${c[lang]}</option>`).join("")}</select>
      <input name="q" placeholder="${t("search_ph")}"><button>${ic('search')}</button>
    </form>
    <div class="hd-icons">
      <a href="comparer.html" data-lbl="Comparer"><span class="ic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1e2b33" stroke-width="1.6"><path d="M12 3v18M5 7h14M5 7l-2.5 6a3 3 0 0 0 5 0L5 7zm14 0l-2.5 6a3 3 0 0 0 5 0L19 7zM8 21h8"/></svg></span><span class="cnt" id="cmpCount">${(JSON.parse(localStorage.getItem("nm-comp")||"[]")).length}</span>${t("ic_compare")}</a>
      <a href="souhaits.html" data-lbl="Souhaits"><span class="ic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1e2b33" stroke-width="1.6"><path d="M12 20s-7-4.5-9-9c-1.2-2.8.6-6 3.8-6 2 0 3.5 1.2 5.2 3.2C13.7 6.2 15.2 5 17.2 5c3.2 0 5 3.2 3.8 6-2 4.5-9 9-9 9z"/></svg></span><span class="cnt" id="wishCount">${getWish().length}</span>${t("ic_wish")}</a>
      <a href="panier.html" data-lbl="Panier"><span class="ic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1e2b33" stroke-width="1.6"><circle cx="9" cy="20" r="1.4"/><circle cx="17" cy="20" r="1.4"/><path d="M3 4h2l2.4 11h10.2l2-8H6"/></svg></span><span class="cnt" id="cartCount">${cartCount()}</span>${t("ic_cart")}</a>
      <a href="compte.html" data-lbl="Compte"><span class="ic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1e2b33" stroke-width="1.6"><circle cx="12" cy="8" r="3.6"/><path d="M4.5 20c1.5-3.5 4.3-5 7.5-5s6 1.5 7.5 5"/></svg></span>${t("ic_account")}</a>
    </div>
  </div></header>
  <nav><div class="wrap">
    <button class="burger" onclick="document.querySelector('nav .links').classList.toggle('open')">${ic("grid",22,"#fff")}</button>
    <span class="allcat">${ic('grid')} ${t("allcat")}</span>
    <ul class="links">
      <li><a href="index.html" class="${active==='home'?'active':''}">${ic('home')} ${t("nav_home")}</a></li>
      <li><a href="produits.html" class="${active==='shop'?'active':''}">${ic('bag')} ${t("nav_shop")}</a></li>
      <li><a href="magasins.html" class="${active==='stores'?'active':''}">${ic('store')} ${t("nav_stores")}</a></li>
      <li><a href="blog.html" class="${active==='blog'?'active':''}">${ic('pencil')} ${t("nav_blog")}</a></li>
      <li><a href="faq.html" class="${active==='faq'?'active':''}">${ic('faq')} ${t("nav_faq")}</a></li>
      <li><a href="contact.html" class="${active==='contact'?'active':''}">${ic('mail')} ${t("nav_contact")}</a></li>
    </ul>
    <div class="assist">${ic('headset')}<b>1900 - 888</b>Centre d'assistance 24h/24 et 7j/7</div>
  </div></nav>`;
}
function footerHTML(){
  return `<div class="wrap">
    <div class="newsletter"><h2>${t("news_t")}</h2>
      <form onsubmit="event.preventDefault();this.innerHTML='<b style=&quot;color:var(--green-d)&quot;>'+ic('check',16,'#1f7a4a')+' Merci !</b>'">
        <input type="email" required placeholder="${t("news_ph")}"><button class="btn">${t("news_btn")}</button>
      </form></div>
    <div class="services">
      <div class="svc"><span class="ic">${ic('tag')}</span><div><b>${t("svc1")}</b><span>${t("svc1d")}</span></div></div>
      <div class="svc"><span class="ic">${ic('truck')}</span><div><b>${t("svc2")}</b><span>${t("svc2d")}</span></div></div>
      <div class="svc"><span class="ic">${ic('gift')}</span><div><b>${t("svc3")}</b><span>${t("svc3d")}</span></div></div>
      <div class="svc"><span class="ic">${ic('box')}</span><div><b>${t("svc4")}</b><span>${t("svc4d")}</span></div></div>
      <div class="svc"><span class="ic">${ic('ret')}</span><div><b>${t("svc5")}</b><span>${t("svc5d")}</span></div></div>
    </div>
  </div>
  <footer><div class="wrap">
    <div class="fcols">
      <div><a class="logo" href="index.html">${ic('basket')} Qui<small>MARKET &amp; GROCERY</small></a>
        <p>${t("f_tag")}</p>
        <p>${ic('pin')} ${t("f_addr")} : 502 New St, Brighton, Australie</p>
        <p>${ic('phone')} ${t("f_call")} : +225 07 00 00 00 00</p>
        <p>${ic('mail')} ${t("f_mail")} : sale@quimarket.com</p>
        <p>${ic('clock')} ${t("f_hours")}</p></div>
      <div><h5>${t("f_co")}</h5><a href="#">${t("top_about")}</a><a href="magasins.html">${t("nav_stores")}</a><a href="contact.html">${t("nav_contact")}</a><a href="compte.html">${t("ic_account")}</a></div>
      <div><h5>${t("f_cat")}</h5>${Object.keys(CATS).map(c=>`<a href="produits.html?cat=${c}">${CATS[c][lang]}</a>`).join("")}</div>
      <div><h5>${t("f_info")}</h5><a href="faq.html">${t("nav_faq")}</a><a href="contact.html">${t("nav_contact")}</a><a href="compte.html">${t("top_track")}</a><a href="#">Politique de confidentialité</a></div>
      <div><h5>${t("f_app")}</h5><p>${ic('mobile')} App Store &nbsp; ▶️ Google Play</p><p>${ic('card')} VISA · Mastercard · Amex · Mobile Money</p></div>
    </div>
    <div class="fbase"><span>${t("rights")}</span><span>${ic('phone')} 1900 - 888</span><span>${t("follow")}: f ${ic('X')} in ▶</span></div>
  </div></footer>`;
}
function injectChrome(active){
  document.body.insertAdjacentHTML("afterbegin", headerHTML(active));
  document.body.insertAdjacentHTML("beforeend", footerHTML());
  document.body.insertAdjacentHTML("beforeend", `
  <div class="bnav">
    <a href="index.html" class="${active==='home'?'on':''}"><span data-ic="home" data-size="22"></span>Maison</a>
    <a href="produits.html" class="${active==='shop'?'on':''}"><span data-ic="grid" data-size="22"></span>Boutique</a>
    <a href="panier.html"><span data-ic="cart" data-size="22"></span><span class="cnt" id="bnavCart">${cartCount()}</span>Panier</a>
    <a href="produits.html" onclick="event.preventDefault();document.querySelector('.searchbox input').focus();window.scrollTo({top:0});"><span data-ic="search" data-size="22"></span>Recherche</a>
    <a href="compte.html"><span data-ic="user" data-size="22"></span>Compte</a>
  </div>`);
  applyLang();
}
function applyLang(){
  document.documentElement.lang = lang;
  document.querySelectorAll; // noop
}
function setLang(l){ lang=l; localStorage.setItem("nm-lang", l); location.reload(); }
