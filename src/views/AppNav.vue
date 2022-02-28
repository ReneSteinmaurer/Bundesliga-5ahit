<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a
          class="navbar-brand"
          href="https://www.bundesliga.com/de/bundesliga"
          target="_blank"
        >
          <img
            src="https://www.bundesliga.com/assets/logo/bundesliga_pos.svg"
            alt="Deutsche BLiga"
            height="15"
          />
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link
                to="/"
                class="nav-item nav-link"
                active-class="active"
                exact
              >
                Home
              </router-link>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://www.bundesliga.at/de/"
                target="_blank"
                >Österreichische BLiga
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Interessantes
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Alle Teams</a></li>
                <li><a class="dropdown-item" href="#">Torschützen</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Spieleinteilung</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a
                class="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
                >Zusatz</a
              >
            </li>
            <li class="nav-item">
              <router-link
                to="/about"
                class="nav-item nav-link"
                active-class="active"
                exact
              >
                About
              </router-link>
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  setup() {},
};
</script>
