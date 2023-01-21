self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll([
                "./",
                "./src/owl.carousel.min.css",
                "./src/owl.theme.default.min.css",
                "./src/master.css",
                "./src/jquery.min.js",
                "./src/owl.carousel.min.js",
                "./src/app.js",
                "./images/logo512.png",
                "./images/en/apple.jpg",
                "./images/en/ball.jpg",
                "./images/en/cat.jpg",
                "./images/en/dog.jpg",
                "./images/en/egg.jpg",
                "./images/en/fish.gif",
                "./images/en/goat.jpg",
                "./images/en/hen.jpg",
                "./images/en/icecream.jpg",
                "./images/en/jackal.jpg",
                "./images/en/key.png",
                "./images/en/leg.jpg",
                "./images/en/moon.jpg",
                "./images/en/nose.jpg",
                "./images/en/orange.jpg",
                "./images/en/pineapple.jpg",
                "./images/en/quran.jpg",
                "./images/en/rocket.gif",
                "./images/en/snail.jpg",
                "./images/en/tree.png",
                "./images/en/umbrella.gif",
                "./images/en/vulture.jpg",
                "./images/en/window.jpg",
                "./images/en/xray.jpg",
                "./images/en/yak.jpg",
                "./images/en/zebra.gif",
                "./sounds/en/a.m4a",
                "./sounds/en/b.m4a",
                "./sounds/en/c.m4a",
                "./sounds/en/d.m4a",
                "./sounds/en/e.m4a",
                "./sounds/en/f.m4a",
                "./sounds/en/g.m4a",
                "./sounds/en/h.m4a",
                "./sounds/en/i.m4a",
                "./sounds/en/j.m4a",
                "./sounds/en/k.m4a",
                "./sounds/en/l.m4a",
                "./sounds/en/m.m4a",
                "./sounds/en/n.m4a",
                "./sounds/en/o.m4a",
                "./sounds/en/p.m4a",
                "./sounds/en/q.m4a",
                "./sounds/en/r.m4a",
                "./sounds/en/s.m4a",
                "./sounds/en/t.m4a",
                "./sounds/en/u.m4a",
                "./sounds/en/v.m4a",
                "./sounds/en/w.m4a",
                "./sounds/en/x.m4a",
                "./sounds/en/y.m4a",
                "./sounds/en/z.m4a"
            ]);
        })
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});