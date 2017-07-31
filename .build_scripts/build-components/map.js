var _ = require('lodash');
'use-strict'
module.exports = function (lexList) {
  /*
   * map list of keys in map bock to objects matching
   * the k,v in said map block.
   */
  function mapParamsFinder(mdContents) {
    return [
      'name: ','attribution: ', 'baseLayer: ',
      'maxZoom: ', 'initialZoom: ', 'longitude: ',
      'latitude: ' ,'accessToken: ', 'height: '
    ].map((elKey) => {
      let matchObj = {}
      let match = mdContents.filter((mdContent) => {
        return mdContent.match(elKey)
      })
      if (match[0]) {
        match = match[0].split(elKey)[1];
      }
      matchObj[elKey.split(':')[0]] = match;
      return matchObj;
    })
  }
  // assign mappedComponents to mapComponentFinder, then reduce
  // list of objects to one big object
  let mapParams = _.reduce(
    mapParamsFinder(lexList),
    (mappedParamsObj, mappedParam) => {
      return _.assign(mappedParamsObj, mappedParam)
    }, {}
  )
  console.log(mapParams)
  // fill null values with defaults
  if (!mapParams.attribution) {
    mapParams.attribution = '© Development Seed';
  }
  if (!mapParams.latitude) {
    mapParams.latitude = 0;
  }
  if (!mapParams.longitude) {
    mapParams.longitude = 0;
  }
  if (!mapParams.maxZoom) {
    mapParams.maxZoom = 18;
  }
  if (!mapParams.initialZoom) {
    mapParams.initialZoom = 12;
  }
  if (!mapParams.baseLayer) {
    baseLayer = 'https://api.tiles.mapbox.com/v4/{id}/mapbox.streets/{x}/{y}.png?';
  }
  if (!mapParams.height) {
   mapParams.height = 180;
  }
  // return map html
  return [
    `<style> #` + mapParams.name + ` { height: ` + mapParams.height + `px; } </style>
    <div id="` + mapParams.name + `"></div>
    <script> var mymap = L.map("` + mapParams.name + `").setView([` + mapParams.latitude + `, ` + mapParams.longitude + `], ` + mapParams.initialZoom + `);
    L.tileLayer("` + mapParams.baseLayer + `?access_token={accessToken}", {
      attribution: '` + mapParams.attribution + `',
      maxZoom: ` + mapParams.maxZoom + `,
      accessToken:'` + mapParams.accessToken + `'
    }).addTo(mymap);
    </script>`
  ]
};
