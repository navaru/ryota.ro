<style>
  .loader {
    position: relative;
    width: 28ru;
    height: 28ru;
    border-right: 3px solid var(--color-dark-50);
    border-radius: 100%;
    animation: spinRight 800ms linear infinite;
    z-index: 10;
  }

  .loader:before,
  .loader:after {
    content: "";
    width: 24ru;
    height: 24ru;
    display: block;
    position: absolute;
    top: calc(50% - 12ru);
    left: calc(50% - 12ru);
    border-left: 2px solid var(--color-dark-50);
    border-radius: 100%;
    animation: spinLeft 800ms linear infinite;
  }

  .loader:after {
    width: 16ru;
    height: 16ru;
    top: calc(50% - 8ru);
    left: calc(50% - 8ru);
    border: 0;
    border-right: 1px solid var(--color-dark-50);
    animation: none;
  }

  @keyframes spinLeft {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(720deg);
    }
  }

  @keyframes spinRight {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
</style>

<b class="loader" />
