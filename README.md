**Una capa de abstracción de API unificada, segura y agnóstica para aplicaciones modernas.**

open-bridge-core es una biblioteca ligera en TypeScript diseñada para **eliminar la fricción al integrar, cambiar y mantener APIs de terceros**. En lugar de forzar a tu aplicación a acoplarse a los SDKs específicos de cada proveedor, este núcleo actúa como un puente universal. Define tus contratos de datos una vez e integra servicios de pagos, mensajería o autenticación de manera intercambiable sin alterar la lógica de tu negocio.

---

### 🚀 Características Clave

* **Abstracción Total de Proveedores:** Cambia de proveedor de servicios (por ejemplo, de una pasarela de pago a otra) modificando únicamente una línea de configuración, sin tocar el código base.
* **Tipado Estricto (Type Safety):** Aprovecha el poder de TypeScript con inferencia de tipos automática tanto para las peticiones (*requests*) como para las respuestas (*responses*), minimizando los errores en tiempo de ejecución.
* **Resiliencia de Red Nativa:** Incluye por defecto middleware configurable para reintentos automáticos con retroceso exponencial (*exponential backoff*), disyuntores (*circuit breakers*) y gestión de límites de tarifa (*rate-limiting*).
* **Diseñado para el Edge:** Arquitectura ultraligera sin dependencias pesadas, optimizada para ejecutarse en entornos modernos como Vercel Edge Functions, Cloudflare Workers y Node.js.

---

### 📦 ¿Qué problema resuelve?

Cuando una aplicación crece, suele llenarse de múltiples SDKs heterogéneos. Cada proveedor gestiona los errores, la autenticación y las estructuras de datos de manera diferente. Si un proveedor cambia su API de forma inesperada, migrar a una alternativa puede costar semanas de refactorización.

**open-bridge-core introduce una interfaz unificada:**
1. Traduce las peticiones entrantes a un formato estandarizado.
2. Gestiona la comunicación con la API externa de manera segura y resiliente.
3. Devuelve los datos normalizados bajo el mismo formato, sin importar qué proveedor responda por detrás.
