class VueMock {
  static use(plugin, options) {
    console.log(plugin);
    plugin.install(VueMock, options);
  }
}

export default VueMock;
