<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Novedades | Naerdex</title>
    <meta name="description" content="Los últimos lanzamientos de Naerdex. Descubre los modelos más recientes de sneakers, botas y calzado deportivo.">
    <meta property="og:title" content="Novedades | Naerdex">
    <meta property="og:description" content="Los últimos lanzamientos de Naerdex. Descubre lo nuevo.">
    <meta property="og:type" content="website">
    <meta property="og:image" content="https://images.pexels.com/photos/18155790/pexels-photo-18155790.jpeg?auto=compress&cs=tinysrgb&w=1200">
    <meta property="og:url" content="https://naerdex.com/novedades.php">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Novedades | Naerdex">
    <meta name="twitter:description" content="Los últimos lanzamientos de Naerdex. Descubre los modelos más recientes de sneakers, botas y calzado deportivo.">
    <meta name="twitter:image" content="https://images.pexels.com/photos/18155790/pexels-photo-18155790.jpeg?auto=compress&cs=tinysrgb&w=1200">
    <link rel="canonical" href="https://naerdex.com/novedades.php">
    <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='12' fill='%23111111'/%3E%3Ctext x='50%25' y='54%25' text-anchor='middle' dominant-baseline='middle' font-family='Arial,Helvetica,sans-serif' font-size='42' font-weight='900' fill='white'%3EN%3C/text%3E%3C/svg%3E">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
<?php $currentPage = 'novedades'; include 'includes/header.php'; ?>

    <section class="page-hero page-hero-new">
        <div class="hero-content fade-in">
            <span class="hero-subtitle">Recién Llegados</span>
            <h1 class="hero-title">Acaba de Llegar</h1>
            <p class="hero-description">Los lanzamientos más recientes. Sé de los primeros en estrenar.</p>
        </div>
    </section>

    <main class="container shop-section">
        <div class="shop-header">
            <div>
                <h2 class="section-title">Novedades</h2>
                <p class="section-subtitle" style="margin-left:0;margin-top:8px;">12 productos nuevos</p>
            </div>
            <div class="filters">
                <button class="filter-btn active" data-filter="all">Todos</button>
                <button class="filter-btn" data-filter="sneaker">Sneakers</button>
                <button class="filter-btn" data-filter="bota">Botas</button>
            </div>
            <div class="price-filters">
                <button class="price-filter-btn active" data-price="all">Todos los precios</button>
                <button class="price-filter-btn" data-price="under1500">Menos de $1,500</button>
                <button class="price-filter-btn" data-price="1500-2500">$1,500 - $2,500</button>
                <button class="price-filter-btn" data-price="over2500">Más de $2,500</button>
            </div>
        </div>
        <div class="product-grid" id="product-list"></div>
    </main>

<?php include 'includes/footer.php'; ?>
