	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";


var search = {
'q': null,
'begin_date'=null,
'end_date'=null,
'numRecords':null
};

search.q='cubs';
search.numRecords=5;

url += '?' + $.param({
  'api-key': "303feacf27714debb1f36c1c90507365",
  'q': "cubs",
  'begin_date': '',
  'end_date': '',
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
});

function constructURL()
{
	
}