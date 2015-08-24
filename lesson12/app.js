// Lesson 12.
// WAS in the lesson
            var fs = require ('fs');
            fs.writeFileSync('corn1.txt', "Corn is good, corn is life");
            console.log(fs.readFileSync("corn1.txt").toString());


//// NEW. TEST ANOTHER METHOD OF MODEL "FS"
            // Create new file for experiment
            fs.writeFileSync('corn2.txt', "Corn is good, corn is life");
            console.log(fs.readFileSync("corn2.txt").toString());
            fs.writeFileSync('corn3.txt', "Corn is good, corn is life");
            console.log(fs.readFileSync("corn3.txt").toString());

            //fs.rename(oldPath, newPath, callback);
            fs.rename('corn2.txt', 'newcorn2.txt', function (err) {
                if (err) throw err;
                console.log('renamed complete corn2 to newcorn2');
            });

            //fs.unlinkSync(path)
            fs.unlink('corn3.txt', function (err) {
                if (err) throw err;
                console.log('successfully deleted corn3');
            });
            //fs.closeSync(fd)
            //fs.closeSync("./test.js");

// WAS in the lesson
var path = require('path');
var websiteHome = "Desktop/Bucky//thenewboston/index.html";
var websiteAbout = "Desktop/Bucky/thenewboston/about.html";
 console.log("normalize",path.normalize(websiteHome));
//console.log("ss",path.normalize('/foo/bar//baz/asdf/quux/..'));
console.log("dirname",path.dirname(websiteAbout));
console.log("basename",path.basename(websiteAbout));
console.log("extname",path.extname(websiteAbout));

// NEW
        //path.parse(pathString);
        console.log("parse",path.parse(websiteAbout));
        //path.format(pathObject);
        path.format({
            root : "/",
            dir : "/home/user/dir",
            base : "file.txt",
            ext : ".txt",
            name : "file"
        });
         //path.isAbsolute(path);
        console.log('isAbsolute',path.isAbsolute("/test."));

// WAS
//setInterval(function() {
//    console.log("beef");
//}, 2000);

console.log('dirname __',__dirname);
console.log('filename __',__filename);