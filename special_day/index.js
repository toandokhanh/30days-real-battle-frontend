// var imgFile = document.getElementById('submitfile');
// if (imgFile.files && imgFile.files[0]) {
//     var width;
//     var height;
//     var fileSize;
//     var reader = new FileReader();
//     reader.onload = function(event) {
//         var dataUri = event.target.result,
//         img = document.createElement("img");
//         img.src = dataUri;
//         width = img.width;
//         height = img.height;
//         fileSize = imgFile.files[0].size;
//         alert(width);
//         alert(height);
//         alert(fileSize);
//    };
//    reader.onerror = function(event) {
//        console.error("File could not be read! Code " + event.target.error.code);
//    };
//    reader.readAsDataURL(imgFile.files[0]);
// }