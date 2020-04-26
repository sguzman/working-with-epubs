const epubAPI = require('epub');
const cheerio = require('cheerio');

const filePath = 'The Cathedral and the Bazaar - Eric S. Raymond.epub';
const epub = new epubAPI(filePath);

epub.on("end", function(){
    // epub is now usable
    console.log(epub.metadata);
    epub.flow.forEach(function(chapter){
        console.log(chapter);
    });


});

epub.parse();
