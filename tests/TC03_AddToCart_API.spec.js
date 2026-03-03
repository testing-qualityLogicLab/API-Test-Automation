const {test, expect} = require('@playwright/test'); // 1) import the required libaraies

test(`TC03_AddToCart_API`, async ({ request })=> 
{
 const homeRes = await request.get('https://www.cloudberrystore.services/');
 expect(homeRes.ok).toBeTruthy();
 
 // Got to product page
 const productRes = await request.get('https://www.cloudberrystore.services/index.php?route=product/product&language=en-gb&product_id=47&path=18');
expect(productRes.ok).toBeTruthy();

// 3) Build delivery date (same format used in UI: yyyy-mm-dd)
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 5);

  const mm = String(deliveryDate.getMonth() + 1).padStart(2, '0');
  const dd = String(deliveryDate.getDate()).padStart(2, '0');
  const yyyy = String(deliveryDate.getFullYear());
  const formattedDeliveryDate = `${yyyy}-${mm}-${dd}`;

  //Call the exact Add to cart API endpoint
  const addToCartRes = await request.post('https://www.cloudberrystore.services/index.php?route=checkout/cart.add&language=en-gb',
{
  form: 
  {   
    product_id: '47',
    quantity: '1',
    'option[225]': formattedDeliveryDate,

  },

  headers:
 {
  'x-requested-with': 'XMLHttpRequest',
  'accept': 'application/json, text/javascript, */*; q=0.01',
  'content-type': 'application/x-www-form-urlencoded'
 }, 
},
);
 
//Verify 
expect(addToCartRes.ok).toBeTruthy();

// 6) Verify cart contains the product (server-side validation)
  const cartRes = await request.get(
    'https://www.cloudberrystore.services/index.php?route=checkout/cart&language=en-gb'
  );
  expect(cartRes.ok()).toBeTruthy();

  const cartHtml = await cartRes.text();
  expect(cartHtml).toContain('HP LP3065');

});