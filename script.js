console.log('Hello!');
/*document.getElementById('generate').addEventListener('click', function () {
  var text = document.getElementById('text').value;
  if (text) {
    var qrcode = new QRCode(document.getElementById('qrcode'), {
      text: text,
      width: 128,
      height: 128,
    });
  }
});*/

var qrcode = new QRCode(document.getElementById('qrcode'), {
  text: 'jumia.com.ng',
  width: 250,
  height: 250,
});
