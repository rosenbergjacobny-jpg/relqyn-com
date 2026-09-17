(function(){
  const key='relqyn-cart';
  let cart=[];
  try{cart=JSON.parse(localStorage.getItem(key)||'[]')}catch(e){cart=[]}
  const $=s=>document.querySelector(s), $$=s=>Array.from(document.querySelectorAll(s));
  const money=n=>'$'+Number(n).toFixed(2);
  function save(){try{localStorage.setItem(key,JSON.stringify(cart))}catch(e){}render()}
  function add(item){const found=cart.find(x=>x.name===item.name); if(found) found.qty+=item.qty||1; else cart.push({...item,qty:item.qty||1}); save(); toast(item.name+' added to cart');}
  function render(){
    const count=cart.reduce((n,x)=>n+x.qty,0); $$('.cart-count').forEach(el=>el.textContent=count);
    const list=$('#cart-items'), total=$('#cart-total'); if(!list)return;
    if(!cart.length){list.innerHTML='<p class="empty-cart">Your cart is ready for a better clean.</p>'; total.textContent=money(0); return}
    list.innerHTML=cart.map((x,i)=>`<div class="cart-item"><div><strong>${x.name}</strong><small>${x.qty} × ${money(x.price)}</small></div><button class="remove-item" data-index="${i}" aria-label="Remove ${x.name}">×</button></div>`).join('');
    total.textContent=money(cart.reduce((n,x)=>n+x.price*x.qty,0));
    $$('.remove-item').forEach(b=>b.addEventListener('click',()=>{cart.splice(Number(b.dataset.index),1);save()}));
  }
  function toast(msg){let el=$('.toast');if(!el){el=document.createElement('div');el.className='toast';document.body.appendChild(el)}el.textContent=msg;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),2200)}
  $$('.add-to-cart').forEach(btn=>btn.addEventListener('click',()=>{const card=btn.closest('[data-product]')||document.body;add({name:card.dataset.name||btn.dataset.name||'Relqyn product',price:Number(card.dataset.price||btn.dataset.price||0),qty:Number($('#quantity')?.value||1)})}));
  $$('.buy-now').forEach(btn=>btn.addEventListener('click',()=>{const card=btn.closest('[data-product]')||document.body;add({name:card.dataset.name||btn.dataset.name||'Relqyn product',price:Number(card.dataset.price||btn.dataset.price||0),qty:Number($('#quantity')?.value||1)});$('#cart-drawer')?.classList.add('open')}));
  $$('.cart-open').forEach(b=>b.addEventListener('click',()=>$('#cart-drawer')?.classList.add('open')));
  $$('.cart-close').forEach(b=>b.addEventListener('click',()=>$('#cart-drawer')?.classList.remove('open')));
  $('#menu-button')?.addEventListener('click',()=>$('#nav-links')?.classList.toggle('open'));
  $('#quantity-minus')?.addEventListener('click',()=>{const q=$('#quantity');q.value=Math.max(1,Number(q.value)-1)});
  $('#quantity-plus')?.addEventListener('click',()=>{const q=$('#quantity');q.value=Number(q.value)+1});
  $('#checkout')?.addEventListener('click',()=>toast('Demo checkout — connect your storefront to accept payment.'));
  render();
})();
