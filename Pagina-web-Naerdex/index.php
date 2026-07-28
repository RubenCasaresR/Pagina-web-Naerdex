<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Naerdex | Elevate Your Stride</title>
    <meta name="description" content="Naerdex - Calzado de alto rendimiento y estilo urbano. Descubre nuestra colección 2026 de sneakers, botas y calzado deportivo para hombre, mujer y kids. Envío gratis en compras superiores a $1500.">
    <meta property="og:title" content="Naerdex | Elevate Your Stride">
    <meta property="og:description" content="Calzado de alto rendimiento y estilo urbano. Colección 2026 disponible.">
    <meta property="og:type" content="website">
    <meta property="og:image" content="https://images.pexels.com/photos/18155790/pexels-photo-18155790.jpeg?auto=compress&cs=tinysrgb&w=1200">
    <meta property="og:url" content="https://naerdex.com">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Naerdex | Elevate Your Stride">
    <meta name="twitter:description" content="Calzado de alto rendimiento y estilo urbano. Colección 2026 disponible.">
    <meta name="twitter:image" content="https://images.pexels.com/photos/18155790/pexels-photo-18155790.jpeg?auto=compress&cs=tinysrgb&w=1200">
    <link rel="canonical" href="https://naerdex.com">
    <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='12' fill='%23111111'/%3E%3Ctext x='50%25' y='54%25' text-anchor='middle' dominant-baseline='middle' font-family='Arial,Helvetica,sans-serif' font-size='42' font-weight='900' fill='white'%3EN%3C/text%3E%3C/svg%3E">
    <link rel="preload" as="image" href="https://images.pexels.com/photos/18155790/pexels-photo-18155790.jpeg?auto=compress&cs=tinysrgb&w=1600">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Naerdex",
        "url": "https://naerdex.com",
        "description": "Calzado de alto rendimiento y estilo urbano."
    }
    </script>
<?php $currentPage = 'inicio'; include 'includes/header.php'; ?>

    <!-- Hero -->
    <section class="hero" id="top" style="background-image: url('https://images.pexels.com/photos/18155790/pexels-photo-18155790.jpeg?auto=compress&cs=tinysrgb&w=1600')">
        <div class="container hero-inner">
            <div class="hero-text fade-in">
                <span class="hero-label">Colección 2026</span>
                <h1 class="hero-title">Pisa<br>Fuerte.</h1>
                <div class="hero-line"></div>
                <p class="hero-description">Ingeniería y diseño en cada modelo. Comodidad sin compromisos para quienes no se detienen.</p>
                <a href="#shop" class="hero-link">Explorar la colección →</a>
            </div>
        </div>
    </section>

    <!-- Categorías -->
    <section class="categories-section" id="categories">
        <div class="container">
            <div class="categories-grid fade-in">
                <a href="hombre.html" class="cat-card cat-card-large" aria-label="Ver productos para hombre">
                    <div class="cat-card-image">
                        <img src="https://images.pexels.com/photos/8248705/pexels-photo-8248705.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Calzado para hombre" loading="lazy">
                    </div>
                    <div class="cat-card-info">
                        <span class="cat-card-label">Hombre</span>
                        <span class="cat-card-link">Ver todo →</span>
                    </div>
                </a>
                <a href="mujer.html" class="cat-card cat-card-tall" aria-label="Ver productos para mujer">
                    <div class="cat-card-image">
                        <img src="https://images.pexels.com/photos/4271563/pexels-photo-4271563.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Calzado para mujer" loading="lazy">
                    </div>
                    <div class="cat-card-info">
                        <span class="cat-card-label">Mujer</span>
                        <span class="cat-card-link">Ver todo →</span>
                    </div>
                </a>
            </div>
            <a href="novedades.html" class="cat-banner fade-in" aria-label="Ver novedades">
                <div class="cat-banner-image">
                    <img src="https://images.pexels.com/photos/26837733/pexels-photo-26837733.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Novedades Naerdex" loading="lazy">
                </div>
                <div class="cat-banner-info">
                    <span class="cat-banner-label">Novedades</span>
                    <span class="cat-banner-link">Descubrir →</span>
                </div>
            </a>
        </div>
    </section>

    <!-- Productos Destacados -->
    <main class="container shop-section" id="shop">
        <div class="shop-header">
            <div class="section-header-text">
                <span class="section-label">Destacados</span>
                <h2 class="section-title">Lo Más Nuevo</h2>
            </div>
            <div class="filters" id="filter-container">
                <button class="filter-btn active" data-filter="all">Todos</button>
                <button class="filter-btn" data-filter="sneaker">Sneakers</button>
                <button class="filter-btn" data-filter="bota">Botas</button>
            </div>
            <div class="display-count-wrap">
                <span class="display-count-label">Mostrar:</span>
                <select class="display-count-select" id="display-count">
                    <option value="12" selected>12</option>
                    <option value="24">24</option>
                    <option value="48">48</option>
                    <option value="all">Todos</option>
                </select>
            </div>
        </div>
        <div class="product-grid" id="product-list"></div>
        <div class="price-filters" id="price-filter-container">
            <button class="price-filter-btn active" data-price="all">Todos los precios</button>
            <button class="price-filter-btn" data-price="under1500">Menos de $1,500</button>
            <button class="price-filter-btn" data-price="1500-2500">$1,500 - $2,500</button>
            <button class="price-filter-btn" data-price="over2500">Más de $2,500</button>
        </div>
    </main>

    <!-- Beneficios -->
    <section class="benefits-inline">
        <div class="container">
            <div class="benefits-row fade-in">
                <div class="benefit-col">
                    <h4>Envío Gratis</h4>
                    <p>En pedidos superiores a $1500</p>
                </div>
                <div class="benefit-separator"></div>
                <div class="benefit-col">
                    <h4>Pago Seguro</h4>
                    <p>100% garantizado y cifrado</p>
                </div>
                <div class="benefit-separator"></div>
                <div class="benefit-col">
                    <h4>30 Días</h4>
                    <p>Para cambios y devoluciones</p>
                </div>
            </div>
        </div>
    </section>

<?php include 'includes/footer.php'; ?>
