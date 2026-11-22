document.getElementById('f').addEventListener('change',function(e){
  var file=e.target.files&&e.target.files[0];if(!file)return;
  var r=new FileReader();
  r.onload=function(){var a=document.querySelector('.avatar');var ph=document.getElementById('ph');if(ph)ph.remove();var i=a.querySelector('img')||document.createElement('img');i.src=r.result;a.prepend(i);};
  r.readAsDataURL(file);
});
