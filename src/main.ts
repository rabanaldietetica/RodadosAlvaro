import './style.css'

const wa = 'https://wa.me/5491159070744'
const tel = 'tel:43040744'
const maps = 'https://www.google.com/maps/search/?api=1&query=Av.+Entre+Rios+1224+CABA'

const productos = [
  {
    nombre: 'Repuestos para motocicletas',
    imagen: '/images/foto-repuestos-01.jpg',
    texto: 'Repuestos originales y alternativos de máxima durabilidad.',
    consulta: 'Hola, quiero consultar por repuestos para mi moto.'
  },
  {
    nombre: 'Accesorios y componentes',
    imagen: '/images/fotos-repuestos-02.jpg',
    texto: 'Equipá tu moto con componentes seleccionados para cada necesidad.',
    consulta: 'Hola, quiero consultar por accesorios y componentes.'
  },
  {
    nombre: 'Cascos y equipamiento',
    imagen: '/images/cascos.jpg',
    texto: 'Protección y equipamiento para acompañarte en cada recorrido.',
    consulta: 'Hola, quiero consultar por cascos y equipamiento.'
  },
  {
    nombre: 'Aceites y lubricantes',
    imagen: '/images/aceites.jpg',
    texto: 'Productos para el cuidado y el rendimiento de tu motor.',
    consulta: 'Hola, quiero consultar por aceites y lubricantes.'
  },
]

const servicios = [
  {
    n: '01',
    titulo: 'Service oficial y programado',
    texto: 'Cambios de aceite, filtros, revisión de niveles y chequeo general según los estándares del fabricante.'
  },
  {
    n: '02',
    titulo: 'Transmisión y frenos',
    texto: 'Cadenas, coronas, piñones, pastillas, discos y purgado de sistemas hidráulicos.'
  },
  {
    n: '03',
    titulo: 'Suspensión y dirección',
    texto: 'Reparación y service de barrales, amortiguadores y alineación para una conducción estable.'
  },
  {
    n: '04',
    titulo: 'Electricidad y electrónica',
    texto: 'Diagnóstico computarizado, instalaciones, tableros, sistemas de carga y encendido.'
  },
  {
    n: '05',
    titulo: 'Reparaciones de motor',
    texto: 'Ajustes, rectificaciones, control de válvulas y puesta a punto con precisión.'
  },
  {
    n: '06',
    titulo: 'Escaneo y diagnóstico',
    texto: 'Evaluación técnica mediante escáner para orientar el diagnóstico de tu motocicleta.'
  }
]

const tarjetasProductos = productos.map((p, i) => `
  <article class="product-card reveal">
    <button class="product-image zoom-image" data-image="${p.imagen}" data-alt="${p.nombre}" aria-label="Ampliar ${p.nombre}">
      <img src="${p.imagen}" alt="${p.nombre}" loading="lazy">
      <span class="image-index">0${i + 1}</span>
      <span class="image-zoom">VER IMAGEN ↗</span>
    </button>
    <p class="illustrative-caption">Imagen ilustrativa</p>
    <div class="product-body">
      <span class="micro-label">RODADOS ÁLVARO / ${String(i + 1).padStart(2, '0')}</span>
      <h3>${p.nombre}</h3>
      <p>${p.texto}</p>
      <a class="line-link" href="${wa}?text=${encodeURIComponent(p.consulta)}" target="_blank" rel="noopener">CONSULTAR POR WHATSAPP <b>↗</b></a>
    </div>
  </article>
`).join('')

const tarjetasServicios = servicios.map((s) => `
  <article class="service-card reveal">
    <div class="service-card-top"><span>${s.n} / SERVICE</span><span class="service-cross">✳</span></div>
    <h3>${s.titulo}</h3>
    <p>${s.texto}</p>
    <a class="line-link" href="${wa}?text=${encodeURIComponent('Hola, quiero consultar por: ' + s.titulo)}" target="_blank" rel="noopener">CONSULTAR SERVICIO <b>↗</b></a>
  </article>
`).join('')

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="site-shell">

    <div class="utility-bar">
      <span><i></i> REPUESTOS · ACCESORIOS · TALLER MECÁNICO</span>
      <a href="${tel}">LLAMANOS: 4304-0744</a>
    </div>

    <header class="header">
      <a href="#inicio" class="header-brand" aria-label="Rodados Álvaro, inicio">
        <img src="/images/logo.jpg" alt="Rodados Álvaro">
      </a>
      <button class="menu-toggle" aria-label="Abrir menú" aria-expanded="false">☰</button>
      <nav class="navigation" aria-label="Navegación principal">
        <a href="#inicio">INICIO</a>
        <a href="#repuestos">REPUESTOS</a>
        <a href="#taller">TALLER</a>
        <a href="#accidentes">ACCIDENTES / SEGUROS</a>
        <a href="#nosotros">QUIÉNES SOMOS</a>
        <a class="nav-cta" href="#contacto">CONTACTO <b>↗</b></a>
      </nav>
    </header>

    <main>
      <section class="hero" id="inicio">
        <div class="hero-topline"><span>BUENOS AIRES · ARGENTINA</span><span>PERFORMANCE / PARTS / SERVICE</span></div>

        <div class="hero-logo-panel">
          <div class="logo-frame">
            <span class="frame-corner corner-tl"></span>
            <span class="frame-corner corner-tr"></span>
            <span class="frame-corner corner-bl"></span>
            <span class="frame-corner corner-br"></span>
            <img class="hero-logo" src="/images/logo.jpg" alt="Logo oficial de Rodados Álvaro">
          </div>
          <div class="hero-phones" aria-label="Teléfonos de Rodados Álvaro">
            <a href="tel:43040744"><span>☎</span> 4304-0744</a>
            <a href="tel:1159070744"><span>☎</span> 11-5907-0744</a>
          </div>
        </div>

        <div class="hero-copy">
          <div class="hero-eyebrow"><span></span> MOTO PARTS · MECHANICAL WORKSHOP</div>
          <h1>PASIÓN Y POTENCIA<br>SOBRE <em>DOS RUEDAS.</em></h1>
          <h2>Todo para tu moto en un solo lugar</h2>
          <p>En el mundo del motociclismo, cada kilómetro cuenta y cada detalle importa. Sabemos que tu moto no es solo un medio de transporte; es tu compañera de ruta, tu herramienta de trabajo o tu máxima expresión de libertad. Por eso, hemos creado un espacio pensado exclusivamente para quienes llevan el motor en la sangre.</p>
          <!-- RODADOS_ALVARO_MERCADOLIBRE_V1: BOTON INICIAL -->
          <div class="ml-button-wrap">
            <a class="mercadolibre-button" href="https://listado.mercadolibre.com.ar/alvaro-rodados" target="_blank" rel="noopener noreferrer" aria-label="Comprar los productos de Rodados Álvaro en Mercado Libre">
              <svg class="ml-handshake" viewBox="0 0 64 42" aria-hidden="true">
                <ellipse cx="32" cy="21" rx="29" ry="18" fill="#fff" stroke="#2D3277" stroke-width="2.5"/>
                <path d="M12 18l8-6 8 1 5 5-5 5-5-3-5 5-6-7zm40 0l-8-6-8 1-5 5 5 5 5-3 5 5 6-7z" fill="#2D3277"/>
                <path d="M23 18l7 7 4-3 5 4 4-4-8-8-6 1-6 3z" fill="#fff" stroke="#2D3277" stroke-width="1.7" stroke-linejoin="round"/>
                <path d="M27 23l5 5m2-3l4 4m1-7l3 3" fill="none" stroke="#2D3277" stroke-width="2" stroke-linecap="round"/>
              </svg>
              <span>COMPRAR LOS PRODUCTOS EN <strong>MERCADOLIBRE</strong></span>
              <span class="ml-button-arrow">↗</span>
            </a>
          </div>
          <div class="hero-actions">
            <a class="button button-primary" href="#repuestos">EXPLORAR REPUESTOS <span>↗</span></a>
            <a class="button button-secondary" href="${wa}?text=${encodeURIComponent('Hola Rodados Álvaro, quiero hacer una consulta.')}" target="_blank" rel="noopener">CONSULTAR POR WHATSAPP</a>
          </div>
          <div class="hero-bottomline"><span>01 — REPUESTOS MULTIMARCA</span><span>02 — MECÁNICA INTEGRAL</span><span>03 — ASESORAMIENTO TÉCNICO</span></div>
        </div>
        <div class="hero-side-mark">R / A — MOTORCYCLE DIVISION</div>
      </section>

      <section class="business-cover section-pad" id="portada">
        <div class="cover-heading">
          <span class="micro-label">RODADOS ÁLVARO / NUESTRAS INSTALACIONES</span>
          <h2>CONOCÉ <em>NUESTRO NEGOCIO.</em></h2>
          <p>Repuestos, accesorios y servicio mecánico para acompañarte en cada kilómetro.</p>
        </div>
        <button class="business-cover-button zoom-image" data-image="/images/portada-negocio.png" data-alt="" aria-label="Ampliar la portada de Rodados Álvaro">
          <img src="/images/portada-negocio.png" alt="Portada del negocio Rodados Álvaro" loading="eager">
          <span class="business-cover-hint">TOCÁ LA FOTO PARA AMPLIAR ↗</span>
        </button>
      </section>

      <div class="race-strip" aria-label="Servicios de Rodados Álvaro">
        <div class="race-strip-track">
          <span class="marquee-text" aria-live="polite">REPUESTOS MULTIMARCA</span>
        </div>
      </div>

      <section class="intro-section section-pad">
        <div class="section-code reveal"><span>01 / NUESTRA FILOSOFÍA</span><span>R.A. — EST. MOTORCYCLE</span></div>
        <div class="intro-grid">
          <div class="intro-title reveal">
            <span class="micro-label">PENSADO PARA MOTOCICLISTAS</span>
            <h2>LA RUTA<br>NO <em>ESPERA.</em></h2>
            <div class="slant-rule"></div>
          </div>
          <div class="intro-copy reveal">
            <h3>Tu moto merece<br>estar a la altura.</h3>
            <p>Combinamos un catálogo especializado de repuestos multimarca con un taller mecánico integral equipado para devolverle a tu moto su rendimiento óptimo. Ya sea que busques esa pieza exacta para una reparación específica o prefieras dejar tu máquina en manos de expertos para un service completo, aquí encontrarás la respuesta que necesitas.</p>
            <p>Navegá por nuestra tienda online para descubrir componentes de máxima durabilidad o agendá tu turno en nuestro taller. Calidad, velocidad y asesoramiento técnico real para que nunca bajes la marcha.</p>
            <a class="line-link" href="${wa}?text=${encodeURIComponent('Hola, quiero asesoramiento técnico para mi moto.')}" target="_blank" rel="noopener">HABLÁ CON NUESTRO EQUIPO <b>↗</b></a>
          </div>
        </div>
      </section>

      <section class="products-section section-pad" id="repuestos">
        <div class="section-heading reveal">
          <div>
            <span class="micro-label"><i></i> COMPONENTES / EQUIPAMIENTO / LUBRICACIÓN</span>
            <h2>REPUESTOS QUE<br>RESPONDEN A <em>LA EXIGENCIA.</em></h2>
          </div>
          <p>Repuestos originales y alternativos de máxima durabilidad. Calidad, asesoramiento y soluciones para seguir sumando kilómetros.</p>
        </div>

        <div class="products-intro reveal">
          <h3>Repuestos originales y alternativos de máxima durabilidad</h3>
          <p>Una falla mecánica a mitad de camino o una pieza de baja calidad pueden arruinar tu día. Para evitarlo, ponemos a tu disposición un stock rigurosamente seleccionado de repuestos para motocicletas de todas las marcas y segmentos del mercado.</p>
          <p>Ya sea que necesites componentes de motor, elementos de transmisión, partes de carrocería, accesorios de iluminación o insumos de desgaste rápido, en nuestra tienda online encontrás lo que buscás con la garantía de marcas líderes.</p>
          <p>¿No estás seguro de qué pieza es compatible con tu modelo? Nuestro equipo de asesores técnicos está disponible para guiarte en tu compra, evitando errores y asegurando que obtengas exactamente el repuesto que tu moto necesita. Comprá fácil, recibí rápido y equipá tu vehículo con confianza.</p>
        </div>


        <section class="parts-catalog" id="catalogo">
          <div class="parts-catalog-heading">
            <span class="micro-label">GUÍA DE COMPONENTES / RODADOS ÁLVARO</span>
            <figure class="catalog-illustrative-figure">
              <img class="catalog-pistons-image" src="/images/pistones.jpg" alt="Pistones y componentes del motor" loading="lazy">
              <figcaption class="illustrative-caption">Imagen ilustrativa</figcaption>
            </figure>
    <h3>ENCONTRÁ EL REPUESTO<br>QUE <em>NECESITA TU MOTO.</em></h3>
            <p>Consultá por marca, modelo, cilindrada y año. Nuestro equipo puede orientarte sobre la pieza compatible y su disponibilidad.</p>
          </div>

          <article class="parts-row">
            <div><h4>MOTOR Y COMPONENTES INTERNOS</h4><p>Pistones, aros, cilindros, tapas de cilindro, válvulas, guías, resortes, árboles de levas, balancines, cadenas y tensores de distribución, cigüeñales, bielas, cojinetes, rulemanes, retenes, juntas, bombas de aceite y componentes de refrigeración.</p></div>
            <a href="${wa}?text=Hola%2C%20consulto%20por%20repuestos%20de%20motor%20para%20mi%20moto." target="_blank" rel="noopener">CONSULTAR ↗</a>
          </article>
          <article class="parts-row">
            <div><h4>TRANSMISIÓN Y EMBRAGUE</h4><p>Cadenas, coronas, piñones, kits de transmisión, correas, poleas, discos y campanas de embrague, separadores, resortes, cubos, cables, selectores y componentes de caja de cambios.</p></div>
            <a href="${wa}?text=Hola%2C%20consulto%20por%20transmisi%C3%B3n%20o%20embrague%20para%20mi%20moto." target="_blank" rel="noopener">CONSULTAR ↗</a>
          </article>
          <div class="parts-whatsapp-pair">
            <span>¿Necesitás alguno de estos repuestos?</span>
            <a href="${wa}?text=${encodeURIComponent('Hola, consulto por repuestos para mi moto. ¿Me pueden asesorar?')}" target="_blank" rel="noopener">
              <span class="pair-wa-icon">◉</span>
              <span>WhatsApp 11-5907-0744</span>
              <b>CONSULTAR ↗</b>
            </a>
          </div>
          <article class="parts-row">
            <div><h4>FRENOS</h4><p>Pastillas, zapatas, discos, campanas, cálipers, bombas, manijas, depósitos, mangueras, líquido de frenos, sensores ABS, interruptores y kits de reparación.</p></div>
            <a href="${wa}?text=Hola%2C%20consulto%20por%20repuestos%20de%20freno%20para%20mi%20moto." target="_blank" rel="noopener">CONSULTAR ↗</a>
          </article>
          <article class="parts-row">
            <div><h4>SUSPENSIÓN, DIRECCIÓN Y RUEDAS</h4><p>Barrales, retenes de horquilla, resortes, amortiguadores, bieletas, rodamientos de dirección, tijas, manubrios, llantas, aros, rayos, cubiertas, cámaras, válvulas, rulemanes y ejes.</p></div>
            <a href="${wa}?text=Hola%2C%20consulto%20por%20suspensi%C3%B3n%2C%20direcci%C3%B3n%20o%20ruedas%20para%20mi%20moto." target="_blank" rel="noopener">CONSULTAR ↗</a>
          </article>
          <div class="parts-whatsapp-pair">
            <span>¿Necesitás alguno de estos repuestos?</span>
            <a href="${wa}?text=${encodeURIComponent('Hola, consulto por repuestos para mi moto. ¿Me pueden asesorar?')}" target="_blank" rel="noopener">
              <span class="pair-wa-icon">◉</span>
              <span>WhatsApp 11-5907-0744</span>
              <b>CONSULTAR ↗</b>
            </a>
          </div>
          <article class="parts-row">
            <div><h4>ELECTRICIDAD Y ENCENDIDO</h4><p>Baterías, bujías, bobinas, CDI, ECU, reguladores, estatores, alternadores, motores de arranque, relés, fusibles, cableado, conectores, sensores, tableros, ópticas, faros, guiños y luces traseras.</p></div>
            <a href="${wa}?text=Hola%2C%20consulto%20por%20repuestos%20el%C3%A9ctricos%20para%20mi%20moto." target="_blank" rel="noopener">CONSULTAR ↗</a>
          </article>
          <article class="parts-row">
            <div><h4>CARBURACIÓN, INYECCIÓN Y COMBUSTIBLE</h4><p>Carburadores, chicleres, flotantes, agujas, kits de reparación, filtros de aire y combustible, cuerpos de aceleración, inyectores, bombas, reguladores de presión, mangueras, tanques y tapas.</p></div>
            <a href="${wa}?text=Hola%2C%20consulto%20por%20carburaci%C3%B3n%20o%20inyecci%C3%B3n%20para%20mi%20moto." target="_blank" rel="noopener">CONSULTAR ↗</a>
          </article>
          <div class="parts-whatsapp-pair">
            <span>¿Necesitás alguno de estos repuestos?</span>
            <a href="${wa}?text=${encodeURIComponent('Hola, consulto por repuestos para mi moto. ¿Me pueden asesorar?')}" target="_blank" rel="noopener">
              <span class="pair-wa-icon">◉</span>
              <span>WhatsApp 11-5907-0744</span>
              <b>CONSULTAR ↗</b>
            </a>
          </div>
          <article class="parts-row">
            <div><h4>ESCAPE Y ADMISIÓN</h4><p>Escapes, silenciadores, colectores, juntas, soportes, catalizadores, toberas, cajas de filtro, conductos de aire, abrazaderas y protectores térmicos.</p></div>
            <a href="${wa}?text=Hola%2C%20consulto%20por%20escape%20o%20admisi%C3%B3n%20para%20mi%20moto." target="_blank" rel="noopener">CONSULTAR ↗</a>
          </article>
          <article class="parts-row">
            <div><h4>CARROCERÍA Y ESTRUCTURA</h4><p>Guardabarros, carenados, cachas, tapas laterales, colines, piezas de tanque, asientos, soportes, parrillas, caballetes, patas laterales, tornillería, grampas y piezas de chasis.</p></div>
            <a href="${wa}?text=Hola%2C%20consulto%20por%20carrocer%C3%ADa%20o%20estructura%20para%20mi%20moto." target="_blank" rel="noopener">CONSULTAR ↗</a>
          </article>
          <div class="parts-whatsapp-pair">
            <span>¿Necesitás alguno de estos repuestos?</span>
            <a href="${wa}?text=${encodeURIComponent('Hola, consulto por repuestos para mi moto. ¿Me pueden asesorar?')}" target="_blank" rel="noopener">
              <span class="pair-wa-icon">◉</span>
              <span>WhatsApp 11-5907-0744</span>
              <b>CONSULTAR ↗</b>
            </a>
          </div>
          <article class="parts-row">
            <div><h4>COMANDOS Y CONTROLES</h4><p>Manijas de freno y embrague, puños, aceleradores, cables, espejos, manubrios, pedalines, pedales de cambio y freno, comandos de luces, bocinas, trabas y cerraduras.</p></div>
            <a href="${wa}?text=Hola%2C%20consulto%20por%20comandos%20y%20controles%20para%20mi%20moto." target="_blank" rel="noopener">CONSULTAR ↗</a>
          </article>
          <article class="parts-row">
            <div><h4>ACEITES, FILTROS Y MANTENIMIENTO</h4><p>Aceites de motor, lubricantes de cadena, refrigerantes, líquido de frenos, filtros de aceite, aire y combustible, grasas, limpiadores, aditivos y productos de mantenimiento.</p></div>
            <a href="${wa}?text=Hola%2C%20consulto%20por%20aceites%2C%20filtros%20y%20mantenimiento." target="_blank" rel="noopener">CONSULTAR ↗</a>
          </article>
          <div class="parts-whatsapp-pair">
            <span>¿Necesitás alguno de estos repuestos?</span>
            <a href="${wa}?text=${encodeURIComponent('Hola, consulto por repuestos para mi moto. ¿Me pueden asesorar?')}" target="_blank" rel="noopener">
              <span class="pair-wa-icon">◉</span>
              <span>WhatsApp 11-5907-0744</span>
              <b>CONSULTAR ↗</b>
            </a>
          </div>
          <article class="parts-row">
            <div><h4>ACCESORIOS Y EQUIPAMIENTO</h4><p>Cascos, guantes, camperas, botas, baúles, alforjas, soportes para celular, cargadores USB, alarmas, trabadiscos, cadenas antirrobo, parabrisas, defensas, sliders y protectores.</p></div>
            <a href="${wa}?text=Hola%2C%20consulto%20por%20accesorios%20y%20equipamiento%20para%20mi%20moto." target="_blank" rel="noopener">CONSULTAR ↗</a>
          </article>
          <article class="parts-row">
            <div><h4>TORNILLERÍA Y CONSUMIBLES</h4><p>Tornillos, tuercas, arandelas, bulones, pasadores, chavetas, abrazaderas, precintos, juntas tóricas, retenes, resortes, clips, terminales eléctricos y kits de fijación.</p></div>
            <a href="${wa}?text=Hola%2C%20consulto%20por%20torniller%C3%ADa%20o%20consumibles%20para%20mi%20moto." target="_blank" rel="noopener">CONSULTAR ↗</a>
          </article>
          <div class="parts-whatsapp-pair">
            <span>¿Necesitás alguno de estos repuestos?</span>
            <a href="${wa}?text=${encodeURIComponent('Hola, consulto por repuestos para mi moto. ¿Me pueden asesorar?')}" target="_blank" rel="noopener">
              <span class="pair-wa-icon">◉</span>
              <span>WhatsApp 11-5907-0744</span>
              <b>CONSULTAR ↗</b>
            </a>
          </div>
          <p class="parts-catalog-note">La compatibilidad y disponibilidad se confirman según marca, modelo, año y versión de la motocicleta.</p>
        </section>

        <div class="product-grid">${tarjetasProductos}</div>
        <div class="product-contact reveal">
          <div><span class="micro-label">¿BUSCÁS UNA PIEZA ESPECÍFICA?</span><h3>Consultá compatibilidad y disponibilidad.</h3></div>
          <a class="button button-primary" href="${wa}?text=${encodeURIComponent('Hola, busco un repuesto para mi moto. ¿Me pueden asesorar?')}" target="_blank" rel="noopener">CONSULTAR AHORA ↗</a>
        </div>
      </section>

      <section class="workshop-section" id="taller">
<div class="workshop-content section-pad">
          <span class="micro-label"><i></i> ÁREA TÉCNICA / 02</span>
          <h2>TALLER MECÁNICO<br>INTEGRAL: <em>PRECISIÓN.</em></h2>
          <h3>Precisión, tecnología y experiencia</h3>
          <p>El mantenimiento preventivo y correctivo es la clave para alargar la vida útil de tu moto y garantizar tu seguridad en cualquier camino. En nuestro taller combinamos herramientas de diagnóstico con la experiencia de mecánicos especializados en baja, mediana y alta cilindrada.</p>
          <p>Brindamos un servicio integral que cubre las necesidades de tu vehículo:</p>
          <div class="service-grid">${tarjetasServicios}</div>
          <div class="workshop-guarantee">
            <span class="guarantee-symbol">✓</span>
            <div><h4>TRANSPARENCIA EN CADA TRABAJO</h4><p>Te informamos el presupuesto antes de iniciar cualquier trabajo y te devolvemos las piezas reemplazadas para que tengas total tranquilidad.</p></div>
          </div>
          <a class="button button-primary" href="${wa}?text=${encodeURIComponent('Hola, quiero consultar por un service o reparación para mi moto.')}" target="_blank" rel="noopener">CONSULTAR POR MI MOTO ↗</a>
        </div>
      </section>

      <section class="accident-section section-pad" id="accidentes">
        <div class="accident-topline"><span>ÁREA ESPECIALIZADA / 04</span><span>ACCIDENTES · PRESUPUESTOS · REPARACIÓN</span></div>
        <div class="accident-layout">
          <div class="accident-heading reveal">
            <span class="micro-label"><i></i> SERVICIO PARA MOTOS SINIESTRADAS</span>
            <h2>¿TU MOTO<br>SUFRIÓ UN <em>ACCIDENTE?</em></h2>
            <img class="accident-photo-image" src="/images/accidente.jpg" alt="Servicio de reparación de motos siniestradas tras un accidente" loading="lazy">
            <div class="accident-stamp">EVALUACIÓN<br><strong>+ REPARACIÓN</strong></div>
          </div>
          <div class="accident-copy reveal">
            <h3>Del presupuesto a la reparación: te acompañamos en el proceso.</h3>
            <p>Un accidente puede traer muchas dudas. En Rodados Álvaro evaluamos los daños de tu motocicleta y te orientamos sobre los trabajos necesarios para recuperarla.</p>
            <div class="accident-feature">
              <span>01</span>
              <div><h4>PRESUPUESTOS PARA SEGUROS</h4><p>Revisamos los daños y preparamos un presupuesto de reparación para que puedas presentarlo ante tu compañía aseguradora.</p></div>
            </div>
            <div class="accident-feature">
              <span>02</span>
              <div><h4>REPARACIÓN DE TU MOTOCICLETA</h4><p>Nos encargamos de los trabajos mecánicos y de la reparación de los componentes dañados que correspondan, según la evaluación del vehículo.</p></div>
            </div>
            <div class="accident-feature">
              <span>03</span>
              <div><h4>ASESORAMIENTO DIRECTO</h4><p>Te explicamos los daños detectados, los repuestos necesarios y el alcance del trabajo antes de avanzar con la reparación.</p></div>
            </div>
            <p class="accident-note">La aprobación del presupuesto y la cobertura de los trabajos dependen de la evaluación y las condiciones de cada aseguradora.</p>
            <a class="button button-primary" href="${wa}?text=Hola%20Rodados%20%C3%81lvaro%2C%20tuve%20un%20accidente%20con%20mi%20moto%20y%20necesito%20consultar%20por%20un%20presupuesto%20para%20presentar%20al%20seguro%20y%20la%20reparaci%C3%B3n. " target="_blank" rel="noopener">CONSULTAR POR ACCIDENTE ↗</a>
          </div>
        </div>
      </section>

      <section class="about-section section-pad" id="nosotros">
  <div class="about-copy reveal">
          <span class="micro-label"><i></i> QUIÉNES SOMOS / 03</span>
          <h2>MÁS QUE MECÁNICOS<br>Y VENDEDORES,<br>SOMOS <em>MOTOCICLISTAS.</em></h2>
          <h3>Como vos.</h3>
          <p>Nuestra historia nació de la misma pasión que te impulsa a salir a la ruta todos los días. Fundamos este espacio con un objetivo claro: ofrecer una solución integral, honesta y de alta calidad para la comunidad motociclista.</p>
          <p>Entendemos la frustración de buscar un repuesto y no encontrarlo, o de llevar el vehículo a un taller y no recibir la atención transparente que merecés. Por eso nos propusimos hacer las cosas de otra manera. Contamos con un equipo de mecánicos apasionados y especializados, respaldados por un stock permanente de repuestos nacionales e importados de primera línea.</p>
          <p>Cada moto que ingresa a nuestro taller recibe el mismo cuidado y exigencia que le daríamos a la nuestra. Creemos en el trabajo bien hecho, en el diagnóstico preciso y en construir una relación de confianza a largo plazo con cada cliente. Tu seguridad en el camino es nuestro mayor compromiso.</p>
          <a class="line-link" href="${wa}?text=${encodeURIComponent('Hola Rodados Álvaro, quiero conocer más sobre sus servicios.')}" target="_blank" rel="noopener">CONOCÉ NUESTROS SERVICIOS <b>↗</b></a>
        </div>
      </section>

      <section class="contact-section section-pad" id="contacto">
        <div class="contact-heading reveal">
          <span class="micro-label"><i></i> EL PRÓXIMO PASO EMPIEZA ACÁ</span>
          <h2>PREPARÁ TU MOTO.<br><em>SEGUÍ TU CAMINO.</em></h2>
        </div>
        <div class="contact-grid">
          <div class="contact-block reveal">
            <span class="contact-label">VISITANOS</span>
            <h3>Rodados Álvaro</h3>
            <p>Av. Entre Ríos 1224<br>Ciudad Autónoma de Buenos Aires</p>
            <a class="button button-secondary" href="${maps}" target="_blank" rel="noopener">CÓMO LLEGAR ↗</a>
          </div>
          <div class="contact-block reveal">
            <span class="contact-label">CONTACTO DIRECTO</span>
            <a class="contact-number" href="${tel}">4304-0744</a>
            <span class="contact-label">WHATSAPP</span>
            <a class="contact-number contact-green" href="${wa}" target="_blank" rel="noopener">11-5907-0744 ↗</a>
            <p>Consultanos por repuestos, accesorios, escaneo y mecánica.</p>
          </div>
          <div class="contact-block contact-hours reveal">
            <span class="contact-label">HORARIOS DE ATENCIÓN</span>
            <h3>Te esperamos</h3>
            <div class="hours-row"><span>Lunes a viernes</span><strong>09:00–19:00</strong></div>
            <div class="hours-row"><span>Sábados</span><strong>09:00–17:00</strong></div>
            <div class="hours-row hours-closed"><span>Domingos</span><strong>CERRADO</strong></div>
            <a class="facebook-link" href="https://www.facebook.com/rodadosalvaro/" target="_blank" rel="noopener"><span class="facebook-mark">f</span> SEGUINOS EN FACEBOOK ↗</a>
          </div>
          <div class="contact-logo reveal"><img src="/images/logo.jpg" alt="Rodados Álvaro"><span>RACING SPIRIT. REAL SERVICE.</span></div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <a class="footer-logo" href="#inicio"><img src="/images/logo.jpg" alt="Rodados Álvaro"></a>
      <div class="footer-tagline"><strong>RODADOS <em>ÁLVARO</em></strong><span>REPUESTOS · ACCESORIOS · TALLER</span></div>
      <a class="footer-facebook" href="https://www.facebook.com/rodadosalvaro/" target="_blank" rel="noopener">FACEBOOK ↗</a>
      <a href="#inicio" class="footer-up">VOLVER ARRIBA ↑</a>
      <section class="payment-methods" aria-label="Medios de pago">
        <div class="payment-heading">
          <span class="micro-label">PAGÁ COMO TE QUEDE MÁS CÓMODO</span>
          <h3>ACEPTAMOS <em>TODOS LOS MEDIOS DE PAGO</em></h3>
          <p>Consultanos por las opciones disponibles al momento de tu compra.</p>
        </div>
        <div class="payment-logos">
          <div class="payment-logo payment-mp"><span class="mp-symbol">MP</span><strong>mercado pago</strong></div>
          <span class="payment-logo payment-visa">VISA</span>
          <span class="payment-logo payment-master"><i></i><i></i><b>mastercard</b></span>
          <span class="payment-logo payment-transfer"><span>↔</span><b>TRANSFERENCIA</b></span>
          <span class="payment-logo payment-cash"><span>$</span><b>EFECTIVO</b></span>
        </div>
        <div class="payment-alias">
          <div class="alias-copy">
            <span>ALIAS MERCADO PAGO</span>
            <strong>A.RSRL</strong>
            <small>Titular: Rodados Álvaro S.R.L.</small>
          </div>
          <button class="copy-alias-btn" type="button" data-copy-alias="A.RSRL">COPIAR ALIAS ▣</button>
          <p class="copy-alias-status" aria-live="polite"></p>
        </div>
      </section>
      <!-- RODADOS_ALVARO_MERCADOLIBRE_V1: BOTON FINAL -->
          <!-- RODADOS_ALVARO_MERCADOLIBRE_V1: BOTON INICIAL -->
          <div class="ml-button-wrap">
            <a class="mercadolibre-button" href="https://listado.mercadolibre.com.ar/alvaro-rodados" target="_blank" rel="noopener noreferrer" aria-label="Comprar los productos de Rodados Álvaro en Mercado Libre">
              <svg class="ml-handshake" viewBox="0 0 64 42" aria-hidden="true">
                <ellipse cx="32" cy="21" rx="29" ry="18" fill="#fff" stroke="#2D3277" stroke-width="2.5"/>
                <path d="M12 18l8-6 8 1 5 5-5 5-5-3-5 5-6-7zm40 0l-8-6-8 1-5 5 5 5 5-3 5 5 6-7z" fill="#2D3277"/>
                <path d="M23 18l7 7 4-3 5 4 4-4-8-8-6 1-6 3z" fill="#fff" stroke="#2D3277" stroke-width="1.7" stroke-linejoin="round"/>
                <path d="M27 23l5 5m2-3l4 4m1-7l3 3" fill="none" stroke="#2D3277" stroke-width="2" stroke-linecap="round"/>
              </svg>
              <span>COMPRAR LOS PRODUCTOS EN <strong>MERCADOLIBRE</strong></span>
              <span class="ml-button-arrow">↗</span>
            </a>
          </div>
      <div class="footer-bottom"><span>© ${new Date().getFullYear()} RODADOS ÁLVARO</span><span>AV. ENTRE RÍOS 1224 · CABA</span><span>PASIÓN POR LAS MOTOS.</span></div>
    </footer>
  </div>

  <a class="floating-wa" href="${wa}" target="_blank" rel="noopener" aria-label="Contactar por WhatsApp">
    <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3.2A12.5 12.5 0 0 0 5.25 22.1L3.5 28.5l6.55-1.7A12.5 12.5 0 1 0 16 3.2Zm0 22.8a10.2 10.2 0 0 1-5.2-1.43l-.37-.22-3.88 1.02 1.04-3.78-.24-.39A10.25 10.25 0 1 1 16 26Zm5.62-7.68c-.3-.15-1.78-.88-2.05-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.18.2-.35.23-.65.08-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.68-2.08-.18-.3-.02-.46.13-.6.13-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.67-1.63-.92-2.23-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35Z"/></svg>
  </a>

  <div class="lightbox" id="lightbox" aria-hidden="true">
    <button class="lightbox-close" aria-label="Cerrar imagen">×</button>
    <img src="" alt="">
    <span></span>
  </div>
`

const menuButton = document.querySelector<HTMLButtonElement>('.menu-toggle')
const navigation = document.querySelector<HTMLElement>('.navigation')

menuButton?.addEventListener('click', () => {
  const open = navigation?.classList.toggle('is-open') ?? false
  menuButton.setAttribute('aria-expanded', String(open))
  menuButton.textContent = open ? '×' : '☰'
})

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('is-open')
    menuButton?.setAttribute('aria-expanded', 'false')
    if (menuButton) menuButton.textContent = '☰'
  })
})

const lightbox = document.querySelector<HTMLDivElement>('#lightbox')
const lightboxImg = lightbox?.querySelector<HTMLImageElement>('img')
const lightboxText = lightbox?.querySelector<HTMLElement>('span')

function closeLightbox() {
  lightbox?.classList.remove('is-open')
  lightbox?.setAttribute('aria-hidden', 'true')
  document.body.classList.remove('lightbox-active')
}

document.querySelectorAll<HTMLButtonElement>('.zoom-image').forEach((button) => {
  button.addEventListener('click', () => {
    if (!lightbox || !lightboxImg) return
    lightboxImg.src = button.dataset.image || ''
    lightboxImg.alt = button.dataset.alt || ''
    if (lightboxText) lightboxText.textContent = button.dataset.alt || ''
    lightbox.classList.add('is-open')
    lightbox.setAttribute('aria-hidden', 'false')
    document.body.classList.add('lightbox-active')
  })
})

lightbox?.querySelector('.lightbox-close')?.addEventListener('click', closeLightbox)
lightbox?.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox()
})
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeLightbox()
})

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
      observer.unobserve(entry.target)
    }
  })
}, { threshold: 0.08 })

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

// RODADOS_ALVARO_MARQUESINA_LETRA_A_LETRA
(() => {
  const el = document.querySelector<HTMLElement>('.marquee-text');
  if (!el) return;

  const phrases = [
    'REPUESTOS MULTIMARCA',
    'MECÁNICA INTEGRAL',
    'ESCANEO Y DIAGNÓSTICO',
    'ACCESORIOS Y EQUIPAMIENTO',
    'PRESUPUESTOS POR CHOQUE'
  ];

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function animatePhrase() {
    const phrase = phrases[phraseIndex];

    if (reducedMotion) {
      el!.textContent = phrase;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      window.setTimeout(animatePhrase, 2800);
      return;
    }

    el!.textContent = phrase.slice(0, charIndex);

    let delay = deleting ? 28 : 72;

    if (!deleting && charIndex < phrase.length) {
      charIndex++;
    } else if (!deleting) {
      delay = 1450;
      deleting = true;
    } else if (charIndex > 0) {
      charIndex--;
    } else {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      delay = 250;
    }

    window.setTimeout(animatePhrase, delay);
  }

  animatePhrase();
})();
