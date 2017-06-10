
var akey='303feacf27714debb1f36c1c90507365';

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key="+akey+'&';


var search = {
'q': null,
'begin_date': null,
'end_date': null,
'numRecords': null
};

search.q='cubs';
search.numRecords=5;

constructURL();

$.ajax({
  url: url,
  method: 'GET'
}).done(function(result) {
  console.log(result);
});
console.log(search);

function constructURL()	
{
	var skey = Object.keys(search);
	for(i=0; i<skey.length; i++){
		if(search[skey[i]]!==null){
			url+=skey[i]+'='+search[skey[i]]+'&';
		}
	}
	
}