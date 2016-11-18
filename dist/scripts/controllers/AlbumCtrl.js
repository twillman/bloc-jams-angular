(function() {
    function AlbumCtrl(Fixtures) {
      this.albumData = Fixtures.getAlbum();



      this.foo = "Tara"
    }

    angular
      .module('blocJams')
      .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
})();
