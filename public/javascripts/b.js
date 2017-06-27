/**
 * Created by shiqian on 2016/12/20.
 */
console.log(3443443)
function onselectimage() {
  var data = new FormData();
  var files = document.getElementsByName('#upload').files;
  if(files){
    data.append("file", files[0]);
  }
  $.ajax({
    url: 'http://localhost:3011/upload' ,
    type: 'POST',
    data: data,
    async: false,
    cache: false,
    contentType: 'multipart/form-data;',
    processData: false,
    success: function (returndata) {
      // alert(returndata);
    },
    error: function (returndata) {
      // alert(returndata);
    }
  });
}
function doUpload() {
  var formData = new FormData($( "#uploadForm" )[0]);
  $.ajax({
    url: 'http://localhost:3011/upload',
    type: 'POST',
    data: formData,
    async: false,
    cache: false,
    contentType: false,
    processData: false,
    success: function (returndata) {
      alert(returndata);
    },
    error: function (returndata) {
      alert(returndata);
    }
  });
}