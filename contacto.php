<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contacto | Naerdex</title>
    <meta name="description" content="Contacta con Naerdex. Somos el puente entre compradores y vendedores de calzado. Estamos aquí para ayudarte con cualquier consulta.">
    <meta property="og:title" content="Contacto | Naerdex">
    <meta property="og:description" content="Contacta con Naerdex. Somos el puente entre compradores y vendedores de calzado. Estamos aquí para ayudarte.">
    <meta property="og:type" content="website">
    <meta property="og:image" content="https://images.pexels.com/photos/18155790/pexels-photo-18155790.jpeg?auto=compress&cs=tinysrgb&w=1200">
    <meta property="og:url" content="https://naerdex.com/contacto.php">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Contacto | Naerdex">
    <meta name="twitter:description" content="Contacta con Naerdex. Somos el puente entre compradores y vendedores de calzado.">
    <meta name="twitter:image" content="https://images.pexels.com/photos/18155790/pexels-photo-18155790.jpeg?auto=compress&cs=tinysrgb&w=1200">
    <link rel="canonical" href="https://naerdex.com/contacto.php">
    <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='12' fill='%23111111'/%3E%3Ctext x='50%25' y='54%25' text-anchor='middle' dominant-baseline='middle' font-family='Arial,Helvetica,sans-serif' font-size='42' font-weight='900' fill='white'%3EN%3C/text%3E%3C/svg%3E">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <?php $currentPage = 'contacto'; include 'includes/header.php'; ?>

    <section class="page-hero-small">
        <div class="hero-content fade-in">
            <span class="hero-subtitle">Contáctanos</span>
            <h1 class="hero-title">Contacto</h1>
        </div>
    </section>

    <main class="container page-content">
        <p style="text-align:center;max-width:600px;margin:0 auto 40px;">Somos el puente entre compradores y vendedores. Si tienes alguna consulta sobre un producto o pedido, te recomendamos contactar directamente al vendedor a través de los medios disponibles en la página del producto. Para cualquier otro asunto, estamos aquí para ayudarte.</p>
        <div class="content-grid">
            <div>
                <h2>Envíanos un Mensaje</h2>
                <form class="contact-form" id="contact-form">
                    <div class="form-group">
                        <label for="nombre">Nombre completo</label>
                        <input type="text" id="nombre" name="nombre" required placeholder="Tu nombre">
                    </div>
                    <div class="form-group">
                        <label for="email">Correo electrónico</label>
                        <input type="email" id="email" name="email" required placeholder="tu@email.com">
                    </div>
                    <div class="form-group">
                        <label for="asunto">Asunto</label>
                        <select id="asunto" name="asunto">
                            <option value="">Selecciona un asunto</option>
                            <option value="consulta">Consulta general</option>
                            <option value="pedido">Información de pedido</option>
                            <option value="vendedor">Contactar a un vendedor</option>
                            <option value="sugerencia">Sugerencia</option>
                            <option value="otro">Otro</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="mensaje">Mensaje</label>
                        <textarea id="mensaje" name="mensaje" required placeholder="Escribe tu mensaje aquí..."></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Enviar Mensaje</button>
                </form>
            </div>
            <div>
                <h2>Información de Contacto</h2>
                <ul class="contact-info-list">
                    <li>
                        <span class="info-icon">📧</span>
                        <div>
                            <strong>Correo Electrónico</strong>
                            hola@naerdex.com
                        </div>
                    </li>
                    <li>
                        <span class="info-icon">💬</span>
                        <div>
                            <strong>Consulta sobre un producto</strong>
                            Para temas relacionados con productos, envíos o devoluciones, contacta al vendedor directamente desde la página del producto.
                        </div>
                    </li>
                    <li>
                        <span class="info-icon">🕐</span>
                        <div>
                            <strong>Horario de Atención</strong>
                            [Horario de atención al cliente]
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </main>

    <?php include 'includes/footer.php'; ?>
</body>
</html>
