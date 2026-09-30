/* Service worker mínimo: permite instalar o painel como aplicativo.
   Não guarda dados offline; tudo continua vindo do Firebase. */
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
