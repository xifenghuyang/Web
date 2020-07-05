var elasticsearch = require('elasticsearch');

// const localHost = window.location.host;
// console.log(localHost);
var client = new elasticsearch.Client({
  // host: localHost+'/es',
  host: 'http://192.168.9.103:1993/es',
  log: 'warning'
});

let fun = ()=>{
  client.ping({
    requestTimeout: 30000,
  }, function (error) {
    if (error) {
      console.error('elasticsearch cluster is down!');
    } else {
      console.log('All is well');
    }
  });
}

export default {
  fun
}
