<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hombre | Naerdex</title>
    <meta name="description" content="Colección de calzado masculino Naerdex. Sneakers, botas y calzado deportivo de alto rendimiento para hombre.">
    <meta property="og:title" content="Hombre | Naerdex">
    <meta property="og:description" content="Colección de calzado masculino Naerdex. Sneakers, botas y calzado deportivo.">
    <meta property="og:type" content="website">
    <link rel="canonical" href="https://naerdex.com/hombre.html">
    <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='12' fill='%23111111'/%3E%3Ctext x='50%25' y='54%25' text-anchor='middle' dominant-baseline='middle' font-family='Arial,Helvetica,sans-serif' font-size='42' font-weight='900' fill='white'%3EN%3C/text%3E%3C/svg%3E">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
<?php $currentPage = 'hombre'; include 'includes/header.php'; ?>

    <section class="page-hero page-hero-men">
        <div class="hero-content fade-in">
            <span class="hero-subtitle">Colección Masculina</span>
            <h1 class="hero-title">Diseñado para Dominar</h1>
            <p class="hero-description">Calzado de alto rendimiento construido para quienes lideran el camino.</p>
        </div>
    </section>

    <main class="container shop-section">
        <div class="shop-header">
            <div>
                <h2 class="section-title">Hombre</h2>
                <p class="section-subtitle" style="margin-left:0;margin-top:8px;">10 productos disponibles</p>
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
    </main>

<?php include 'includes/footer.php'; ?>
