
let trump = (() => {

  let arr = [];

  return {
    getShort: (url) => {

      return $.ajax({
        method: 'GET',
        dataType:'json',
        Origin:'https://api.tronalddump.io',
        url:url,
        success: (resp) => {
          console.log(resp);
        }
      });
    }
  };
})();



trump.getShort("https://api.tronalddump.io/random/quote");
