</head>
<body>

    <div class="page-transition-overlay" id="page-transition"></div>

    <header class="header">
        <div class="container header-container">
            <a href="index.php" class="logo">NAERDEX</a>
            <nav class="nav" id="nav" role="navigation" aria-label="Navegación principal">
                <a href="novedades.php" class="nav-link<?php echo ($currentPage === 'novedades') ? ' active' : ''; ?>">Novedades</a>
                <a href="hombre.php" class="nav-link<?php echo ($currentPage === 'hombre') ? ' active' : ''; ?>">Hombre</a>
                <a href="mujer.php" class="nav-link<?php echo ($currentPage === 'mujer') ? ' active' : ''; ?>">Mujer</a>
                <a href="ofertas.php" class="nav-link sale-link<?php echo ($currentPage === 'ofertas') ? ' active' : ''; ?>">Ofertas</a>
            </nav>
            <div class="header-actions">
                <button class="icon-btn search-btn" aria-label="Buscar">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </button>
                <button class="icon-btn mobile-menu-btn" id="mobile-menu-btn" aria-label="Abrir menú" aria-expanded="false">
                    <svg class="menu-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    <svg class="close-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
            </div>
        </div>
    </header>

    <div class="mobile-overlay" id="mobile-overlay"></div>

    <div class="search-overlay" id="search-overlay" role="dialog" aria-label="Buscar productos">
        <button class="search-close" aria-label="Cerrar búsqueda">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
        <input type="text" class="search-input" placeholder="Buscar productos, categorías..." autocomplete="off">
        <div class="search-results"></div>
    </div>
