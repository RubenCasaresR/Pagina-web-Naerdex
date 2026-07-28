<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FAQs | Naerdex</title>
    <meta name="description" content="Respuestas a las preguntas más frecuentes sobre Naerdex, la plataforma que conecta compradores con vendedores de calzado y estilo urbano.">
    <meta property="og:title" content="FAQs | Naerdex">
    <meta property="og:description" content="Respuestas a preguntas frecuentes sobre Naerdex, la plataforma que conecta compradores con vendedores.">
    <meta property="og:type" content="website">
    <meta property="og:image" content="https://images.pexels.com/photos/18155790/pexels-photo-18155790.jpeg?auto=compress&cs=tinysrgb&w=1200">
    <meta property="og:url" content="https://naerdex.com/faqs.php">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="FAQs | Naerdex">
    <meta name="twitter:description" content="Respuestas a preguntas frecuentes sobre Naerdex, la plataforma que conecta compradores con vendedores.">
    <meta name="twitter:image" content="https://images.pexels.com/photos/18155790/pexels-photo-18155790.jpeg?auto=compress&cs=tinysrgb&w=1200">
    <link rel="canonical" href="https://naerdex.com/faqs.php">
    <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='12' fill='%23111111'/%3E%3Ctext x='50%25' y='54%25' text-anchor='middle' dominant-baseline='middle' font-family='Arial,Helvetica,sans-serif' font-size='42' font-weight='900' fill='white'%3EN%3C/text%3E%3C/svg%3E">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <?php $currentPage = 'faqs'; include 'includes/header.php'; ?>

    <section class="page-hero-small">
        <div class="hero-content fade-in">
            <span class="hero-subtitle">Ayuda</span>
            <h1 class="hero-title">Preguntas Frecuentes</h1>
        </div>
    </section>

    <main class="container page-content">
        <p style="text-align:center;max-width:600px;margin:0 auto 40px;">Encuentra respuestas a las preguntas más comunes. Si no encuentras lo que buscas, no dudes en contactarnos.</p>
        
        <div class="faq-list">
            <div class="faq-item active">
                <div class="faq-question" onclick="this.parentElement.classList.toggle('active')">
                    ¿Cómo funciona Naerdex?
                    <span class="faq-toggle">+</span>
                </div>
                <div class="faq-answer">Naerdex es una plataforma que conecta compradores con vendedores de calzado. Cada vendedor publica sus productos y establece sus propios precios, políticas de envío y devolución. Nosotros facilitamos la comunicación y la transacción entre ambas partes.</div>
            </div>
            <div class="faq-item">
                <div class="faq-question" onclick="this.parentElement.classList.toggle('active')">
                    ¿Cuánto tiempo tarda el envío?
                    <span class="faq-toggle">+</span>
                </div>
                <div class="faq-answer">El tiempo de entrega depende de cada vendedor y su política de envío. En la página de cada producto encontrarás los plazos estimados y las zonas de cobertura. Si tienes dudas, puedes contactar al vendedor directamente a través de la plataforma.</div>
            </div>
            <div class="faq-item">
                <div class="faq-question" onclick="this.parentElement.classList.toggle('active')">
                    ¿Cómo puedo rastrear mi pedido?
                    <span class="faq-toggle">+</span>
                </div>
                <div class="faq-answer">Una vez que el vendedor realice el envío, recibirás un correo con los datos de seguimiento. Si no lo recibes, puedes contactar al vendedor a través de nuestra plataforma para obtener actualizaciones.</div>
            </div>
            <div class="faq-item">
                <div class="faq-question" onclick="this.parentElement.classList.toggle('active')">
                    ¿Cuál es la política de devoluciones?
                    <span class="faq-toggle">+</span>
                </div>
                <div class="faq-answer">Las devoluciones se rigen por la política de cada vendedor. Antes de comprar, revisa los términos de devolución en la página del producto. Si necesitas gestionar una devolución, contacta al vendedor directamente y él te indicará el proceso a seguir.</div>
            </div>
            <div class="faq-item">
                <div class="faq-question" onclick="this.parentElement.classList.toggle('active')">
                    ¿Cómo sé qué talla usar?
                    <span class="faq-toggle">+</span>
                </div>
                <div class="faq-answer">Puedes consultar nuestra guía de tallas general disponible en la sección de <a href="tallas.php">Tallas</a>. Recuerda que cada vendedor puede tener variaciones, por lo que también recomendamos revisar las indicaciones específicas en la página de cada producto.</div>
            </div>
            <div class="faq-item">
                <div class="faq-question" onclick="this.parentElement.classList.toggle('active')">
                    ¿Cómo puedo contactar a un vendedor?
                    <span class="faq-toggle">+</span>
                </div>
                <div class="faq-answer">Puedes contactar al vendedor a través de los medios dispuestos en la página de cada producto. Si tienes algún problema con la comunicación, puedes escribirnos desde nuestra página de <a href="contacto.php">contacto</a> y te ayudaremos a establecer el contacto.</div>
            </div>
            <div class="faq-item">
                <div class="faq-question" onclick="this.parentElement.classList.toggle('active')">
                    ¿Qué hago si tengo un problema con mi pedido?
                    <span class="faq-toggle">+</span>
                </div>
                <div class="faq-answer">Si tienes algún problema con tu pedido, te recomendamos contactar primero al vendedor para resolverlo directamente. Si no obtienes respuesta o necesitas asistencia adicional, contáctanos y actuaremos como intermediarios para facilitar la solución.</div>
            </div>
        </div>
    </main>

    <script>
        document.querySelectorAll('.faq-question').forEach(function(q) {
            q.addEventListener('click', function() {
                this.parentElement.classList.toggle('active');
            });
        });
    </script>

    <?php include 'includes/footer.php'; ?>
</body>
</html>
