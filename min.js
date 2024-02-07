 var img1 = 'media/0.jpg';
 var img2 = 'media/11.jpg';
var img = document.querySelector('.img1');
var on = document.querySelector('#btn-on');
var off = document.querySelector('#btn-off');

off.addEventListener('click',function(){
  img.src = img1;
});
on.addEventListener('click',function(){
  img.src = img2;
});