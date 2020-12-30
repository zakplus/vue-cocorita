class VueMock {
  static use(plugin, options) {
    plugin.install(VueMock, options);
  }
}

export default VueMock;
