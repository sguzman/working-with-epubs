const epubAPI = require('epub');

const filePath = 'The Cathedral and the Bazaar - Eric S. Raymond.epub';
const epub = new epubAPI(filePath);

let finalObj = {};

epub.on('done', function () {
    console.log(finalObj);
})

epub.on("end", function(){
    finalObj.metadata = epub.metadata;
    finalObj.chapters = [];

    epub.flow.forEach(function(chapter){
        finalObj.chapters.push(chapter);
    });

    epub.emit('done');
});

epub.parse();
