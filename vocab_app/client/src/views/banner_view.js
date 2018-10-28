const BannerView = function (container) {
  this.container = container;
};


BannerView.prototype.getSeason = function () {
  date = new Date();
  var mon = date.getMonth() + 1;
//just returns winter
// if (mon === 11||12||1){
//   return "Winter"
// }else if (mon===2||3||4) {
//   return "Spring"
// }else if (mon===5||6||7) {
//   return "Summer"
// }else{
//   return "Autumn"
// }

  var seasons = ['Winter','Winter','Spring','Spring','Spring','Summer','Summer','Summer','Autumn','Autumn','Autumn','Winter'];

  return seasons[mon];



};


module.exports = BannerView;
