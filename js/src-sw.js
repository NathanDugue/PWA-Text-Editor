const { offlineFallback, warmStrategyCache } = require('workbox-recipes');
const { CacheFirst } = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require ('workbox-expiration');
const { precacheAndRoute } = require('workbox-preaching/precacheAndRoute');

precacheAndRoute(self.__WB_MANIFEST);

const pageCache = new CacheFirst({
    cacheName: 'page-cache',
    plugins: [
        new CacheableResponsePlugin({
            statuses: [0,200],
}),
        new ExpirationPlugin({
            maxAgeSeconds: 30 * 24 * 60 * 60,
        }),
    ],
});

registerRoute(({ request }) => request.mode === 'navigate', pageCache);

// Implement cache
registerRoute(
    new registerRoute({
        cacheName: 'assetCache',
        plugins: [
            new CacheableResponsePlugin({
                statuses: [0,200],
            }),
        ],
    }),
);
