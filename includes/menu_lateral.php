<?php
header( 'Content-type: text/html; charset=iso-8859-1' );
?>

<div data-scroll-to-active="true" class="main-menu menu-fixed menu-dark menu-accordion menu-shadow">
  <div class="main-menu-content">
    <ul id="main-menu-navigation" data-menu="menu-navigation" class="navigation navigation-main">
      <li <?php if ($secc == "bienvenida") {echo "class='active'";} ?>>
        <a href="bienvenida.php"><span data-i18n="" class="menu-title">Inicio</span></a>
      </li>
      <li <?php if ($secc == "mapa") {echo "class='active'";} ?>>
        <a href="mapa.php"><span data-i18n="" class="menu-title">Mapa</span></a>
      </li>
      <li <?php if ($secc == "estacion") {echo "class='active'";} ?>>
        <a href="estacion.php"><span data-i18n="" class="menu-title">Estación</span></a>
      </li>
      <li <?php if ($secc == "menu") {echo "class='active'";} ?>>
        <a href="menu.php"><span data-i18n="" class="menu-title">Menu</span></a>
      </li>
    </ul>
  </div>
</div>