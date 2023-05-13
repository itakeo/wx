this.addEventListener('fetch', function (event) {
	event.respondWith(
	  caches.match(event.request).then(res => {
		return res ||
		  fetch(event.request).then(responese => {
			  const responeseClone = responese.clone();
			  caches.open('sw_demo').then(cache => {
				if(responese.url.indexOf('itakeo') > 0) cache.put(event.request, responeseClone);
			  });
			  return responese;
			}).catch(err => {
			  console.log(err);
			});
	  })
	)
});

this.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('sw_demo').then(function (cache) {
      return cache.addAll([
		"./static/media/bg2.b07b4fbdbcf36617c19e.jpg",
		"./static/media/iconSprites.1cff6f3c7f0977396bdb.png",
		"./static/media/3.c8ea7f36cdea5415de74.jpg",
		"./static/media/wxPay.6cd3f588ded7e7790cbf.png",
		"./static/media/4.7e0e46ab1e2b617afc09.jpg",
		"./static/media/1.cb4d5c61406acd7a9d04.jpg",
		"./static/media/2.4c9a516a8acb4153df26.jpg",
		"./static/media/5.45702866699dc3a9028f.jpg",
		"./static/media/my.2215d4dec2793b8ae464.jpg",
		"./static/media/6.ba9862385e9c37efa4cd.jpg",
		"./static/media/7.72c1aac29e925c8a9192.jpg",
      ])
    })
	);
});

