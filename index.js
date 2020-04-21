const epubAPI = require('epub');
const cheerio = require('cheerio');

const filePath = 'The Cathedral and the Bazaar - Eric S. Raymond.epub'
const epub = new epubAPI(filePath);

epub.on("end", function(){
    // epub is now usable
    epub.flow.forEach(function(chapter){
        console.log(chapter);
        epub.getChapter(chapter.id, function(err, text){
            console.log(text);
        });
    });


});

epub.parse();
