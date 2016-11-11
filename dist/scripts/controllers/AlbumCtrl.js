(function() {
    function AlbumCtrl() {
      this.albumData = angular.copy(albumPicasso);



      this.foo = "Tara"
    }

    angular
      .module('blocJams')
      .controller('AlbumCtrl', AlbumCtrl);
})();
