var userLang = navigator.language || navigator.userLanguage;

var surat = 'al_fatihah,al_baqarah,ali_imran,an_nisa,al_maidah,al_anam,al_araf,al_anfal,at_taubah,yunus,hud,yusuf,ar_rad,ibrahim,al_hijr,an_nahl,al_isra,al_kahfi,maryam,taha,al_anbiya,al_hajj,al_muminun,an_nur,al_furqan,asy_syuara,an_naml,al_qasas,al_ankabut,ar_rum,luqman,as_sajdah,al_ahzab,saba,fatir,yasin,as_saffat,sad,az_zumar,gafir,fussilat,asy_syura,az_zukhruf,ad_dukhan,al_jasiyah,al_ahqaf,muhammad,al_fath,al_hujurat,qaf,az_zariyat,at_tur,an_najm,al_qamar,ar_rahman,al_waqiah,al_hadid,al_mujadilah,al_hasyr,al_mumtahanah,as_saff,al_jumuah,al_munafiqun,at_tagabun,at_talaq,at_tahrim,al_mulk,al_qalam,al_haqqah,al_maarij,nuh,al_jinn,al_muzzammil,al_muddassir,al_qiyamah,al_insan,al_mursalat,an_naba,an_naziat,abasa,at_takwir,al_infitar,al_mutaffifin,al_insyiqaq,al_buruj,at_tariq,al_ala,al_gasyiyah,al_fajr,al_balad,asy_syams,al_lail,ad_duha,asy_syarh,at_tin,al_alaq,al_qadr,al_bayyinah,al_zalzalah,al_adiyat,al_qariah,at_takasur,al_asr,al_humazah,al_fil,quraisy,al_maun,al_kausar,al_kafirun,an_nasr,al_lahab,al_ikhlas,al_falaq,an_nas';

var file = "001 Al Fatihaah,002 Al Baqoroh,003 Ali 'Imroon,004 An Nisaa',005 Al Maa'idah,006 Al An'aam,007 Al A'raaf,008 Al Anfaal,009 At Taubah,010 Yuunus,011 Huud,012 Yuusuf,013 Ar Ra'du,014 Ibrahim,015 Al Hijr,016 An Nahl,017 Al Israa',018 Al Kahfi,019 Maryam,020 Thooha,021 Al Anbiyaa,022 Al Haj,023 Al Mu'minuun,024 An Nuur,025 Al Furqoon,026 Asy Syu'aro,027 An Naml,028 Al Qoshosh,029 Al 'Ankabuut,030 Ar Ruum,031 Luqmaan,032 As Sajadah,033 Al Ahzaab,034 Saba',035 Faathir,036 Yaasiin,037 Ash Shooffaat,038 Shood,039 Az Zumar,040 Ghoofir,041 Fushshilat,042 Asy Syuro,043 Az Zukhruf,044 Ad Duhaan,045 Al Jaatsiyah,046 Al Ahqaf,047 Muhammad,048 Al Fath,049 Al Hujurot,050 Qoof,051 Adz Dzaariyat,052 Thuur,053 An Najm,054 Al Qomar,055 Ar Rohmaan,056 Al Waaqi'ah,057 Al Hadiid,058 Al Mujaadilah,059 Al Hasyr,060.Al Mumtahanahfix,061.Ash Shaff,062.Al Jumu'ah,063.Al Munafiqun,064.At Taghabun,065.At Talaq,066.At Tahrim,067.Al Mulk,068.Al Qalam,069.Al Haqqah,070.Al Ma'arij,071 Nuh,072 Al Jin,073 Al Muzzammil,074 Al Muddatsir,075 Al Qiyamah,076 Al Insaan,077.Al Mursalat,078 An Naba`,079 An Naazi'aat,080 'Abasa,081 At Takwiir,082 Al Infithoor,083 Al Muthoffifiin,084 Al Insyiqooq,085 Al Buruuj,086 Ath Thooriq,087 Al A'laa,088 Al Ghoosyiyah,089 Al Fajr,090 Al Balad,091 Asy Syams,092 Al Lail,093 Adh Dhuha,094 An Nasyroh,095 At Tiin,096 Al 'Alaq,097 Al Qodr,098 Al Bayyinah,099 Al Zalzalah,100 Al 'Aadiyaat,101 Al Qoori'ah,102 At Takaatsur,103 Al 'Ashr,104 Al Humazah,105 Al Fiil,106 Quroisy,107 Al Maa'uun,108 Al Kautsar,109 Al Kaafiruun,110 An Nashr,111 Al Masad,112 Al Ikhlas,113 Al Falaq,114 An Naas,115 Do'a Khattam"

var juz = '1.1,2.142,2.253,3.92,4.24,4.148,5.83,6.111,7.88,8.41,9.94,11.6,12.53,15.2,17.1,18.75,21.1,23.1,25.21,27.60,29.45,33.31,36.22,39.32,41.47,46.1,51.31,58.1,67.1,78.1';

var madaniyah = 'al_baqarah,ali_imran,an_nisa,al_maidah,al_anfal,at_taubah,al_hajj,an_nur,al_ahzab,muhammad,al_fath,al_hujurat,ar_rahman,al_hadid,al_mujadilah,al_hasyr,al_mumtahanah,as_saff,al_jumuah,al_munafiqun,at_tagabun,at_talaq,at_tahrim,al_insan,al_bayyinah,al_zalzalah,an_nasr';

var source = Base64.decode('aHR0cHM6Ly9wbGF5Lm15LmlkL2hhZml6L2hxLmpz');
var au_surat = source+'/mishary_rashid/'; //default: http://tafsirqu.com/murotal/mishary_rashid/
var au_ayat = source+'/murotal/afasy/'; //default: http://tafsirqu.com/murotal/afasy/
/*
var scriptElem = document.createElement('script');
scriptElem.src = Base64.decode('aHR0cHM6Ly9wbGF5Lm15LmlkL2hhZml6L2hxLmpz')+'?'+new Date().getTime();
document.getElementsByTagName('head')[0].appendChild(scriptElem);
*/
var arr_juz = juz.split(',');
var arr_madaniyah = madaniyah.split(',');
var arr_files = file.split(',');

function no_juz(kode){
var n = arr_juz.includes(kode);
var posisi = arr_juz.indexOf(kode)+1;
if(n==true){
return "juz "+posisi;
}else{
return "";
}
}

function turun(surat){
var n = arr_madaniyah.includes(surat);

if(n==true){
return "madaniyah";
}else{
return "makkiyah";
}
}

if(localStorage.getItem('set_latin')===null){localStorage.setItem('set_latin','checked')};
if(localStorage.getItem('set_arti')===null){localStorage.setItem('set_arti','checked')};
if(localStorage.getItem('set_latar')===null){localStorage.setItem('set_latar','no_bg')};

var arr_surat = surat.split(',');
var ol_surat;
var bismi;

window.location.hash='';
muat(localStorage.getItem('buka'));

function muat(hash){
document.getElementsByClassName('surat')[0].innerHTML = '';

var buka = hash.replace(/surat_/g,'');
var mulai;
if(buka===null){
	mulai= 0;
	}else{
	mulai = Number(arr_surat.indexOf(buka.replace(/_\d+/g,'')));
	}
	
for(var i = mulai; i <= mulai; i++) {
	var url = au_surat+arr_files[i]+'.mp3';
	
	if(arr_surat[i]!='at_taubah' && i!=0){bismi = '<p style="background: '+getColor()+'" class="bismillah">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</p>';}else{bismi='';}
    //ol_surat += 
    ol_surat = 
	'<header class="nama_surat" id=surat_'+arr_surat[i]+'>'+
	'<span onclick="PlayPause(&apos;au1&apos;,&apos;'+url+'&apos;)" style="opacity: 30%;margin-top: 3px;right: 85px;" class="play" onclick="play_m(this);"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="blue"><path d="M2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1zm2.765 5.576A.5.5 0 0 0 6 7v5a.5.5 0 0 0 .765.424l4-2.5a.5.5 0 0 0 0-.848l-4-2.5z"/><path d="M1.5 14.5A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5h-13zm13-1a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5h-13A.5.5 0 0 0 1 6v7a.5.5 0 0 0 .5.5h13z"/></g></svg></span></span>'+
	'<h1 class="page-title">'+Number(i+1)+'. '+arr_surat[i].replace(/_/g,' ')+' <sup class="ay_sup">'+window[arr_surat[i]].length+' ayat</sup><sup class="tu_sup">'+turun(arr_surat[i])+'</sup></h1></header>'+bismi+
	'<ol id='+arr_surat[i]+'></ol>';
	
	generate_surat(arr_surat[i],window[arr_surat[i]]); //parameter function dengan array object
    
	//generate_surat('al_fatihah',al_fatihah);
}
document.getElementsByClassName('surat')[0].innerHTML = ol_surat.replace(/undefined/gm,'');
}

function generate_surat(nama,arr){ //nama string, nama array (harus sama)
var keys = Object.keys(arr);
var kode;
var isi_surat = "";
var s_latin, s_arti, s_latar;
var awal, depan, s_hafal, s_hafiz, s_ayat;
var arti_id,arti_en,artinya,ket_hafal;

if(localStorage.getItem('set_hafiz')=='1'){
var ket;
	if(userLang=='id-ID'){
	ket = '</span><b> Mode Hafiz:</b><br>&#x2714; Hanya menampilkan kata depan saja, untuk melihat selengkapnya ketuk pada ayat <br>&#x2714; Ceklis pada tombol &#9745; Hafal untuk menandai hafalan';
	}
	else{
	ket ='</span><b> Hafiz Mode: </b><br>&#x2714; Only display the preposition only, to see the full verse tap on the verse <br>&#x2714; Checkmark &#9745; Memorized to mark memorization'
	}
	
	mui_dialog('<span style="color:gold;font-size:20px;">'+el('hafiz').innerHTML+ket);
	el('hafiz').setAttribute('data-toggled','1');
	el('hafiz').style.backgroundColor='gold';
	s_ayat='none';
	s_hafiz='block';
	localStorage.setItem('set_latin','0');
	localStorage.setItem('set_arti','0');
}
else{
	el('hafiz').setAttribute('data-toggled','0');
	el('hafiz').removeAttribute('style');
	s_ayat='block';
	s_hafiz='none';
	}

if(localStorage.getItem('set_latin')=='checked'){s_latin="block"}else{s_latin="none"};
if(localStorage.getItem('set_arti')=='checked'){s_arti="block"}else{s_arti="none"};
if(localStorage.getItem('set_latar')=='bg_adem'){s_latar="bg_adem"}else{s_latar="no_bg"};
  
  var tanwin = 'ً ٌ ٍ ً';
  var ikhfa = /(([ًٌٍ]+[ا|ى|ۙ]\s+|نْ|نْ\s+|ٌ\s+|ً\s+|ٍ\s+|(ًٌٍ))[ك|ق|ف|ظ|ط|ض|ص|ش|س|ز|ذ|د|ج|ث|ت])/g;
  var iqlab = /((نْ|نْ\s+|نْۢ\s+|ٌ\s+|ً\s+|ٍ\s+|(ًٌٍ))[ب])/g;
  var bigunah = /(([ًٌٍ]+[ا|ى|ۙ]\s+|نْ|نْ\s+|ٌ\s+|ً\s+|ٍ\s+|(ًٌٍ))[و|م|ن|ي])/g;
  var bilagunah = /(([ًٌٍ]+[ا|ى|ۙ]\s+|نْ|نْ\s+|ٌ\s+|ً\s+|ٍ\s+|(ًٌٍ))[ل|ر])/g;
  var mimi = /((مْ|مْ\s+)[م])/g;
  var ifa_safawi = /((مْ|مْ\s+)[ب])/g;
  var gunah = /([ن|م]+ّ)/g;
  var qalqalah = /(([ق|ط|د|ج|ب][ْ|ّ])|([ق|ط|د|ج|ب][ٍٍ|ِ|ْ|ّ|ٌ|ُ|ً|َ][ۗ|ۘ|ۖ|ۛ|ۚ|ۙ]))/g
  var rep1 = `<u class="ikhfa" onclick='tajwid(this.className)'>$1</u>`;
  var rep2 = `<u class="iqlab" onclick='tajwid(this.className)'>$1</u>`;
  var rep3 = `<u class="bigunah" onclick='tajwid(this.className)'>$1</u>`;
  var rep4 = `<u class="bilagunah" onclick='tajwid(this.className)'>$1</u>`;
  var rep5 = `<u class="mimi" onclick='tajwid(this.className)'>$1</u>`;
  var rep6 = `<u class="ifa_safawi" onclick='tajwid(this.className)'>$1</u>`;
  var rep7 = `<u class="gunah" onclick='tajwid(this.className)'>$1</u>`;
  var rep8 = `<u class="qalqalah" onclick='tajwid(this.className)'>$1</u>`;

//https://stackoverflow.com/questions/7695997/split-the-sentences-by-and-remove-surrounding-spaces
for(var i = 0; i < arr.length; i++) {
	arti_id=arr[i].at;
	arti_en=window['en_'+pad(Number(arr_surat.indexOf(nama)+1),3)][i];
	kode = Number(arr_surat.indexOf(nama)+1)+'.'+arr[i].id;
	file = pad(Number(arr_surat.indexOf(nama)+1),3)+pad(arr[i].id,3)+'.mp3';
	awal = arr[i].ar.trim().replace(/۞/g,'').trim();
	depan = awal.split(" ").map(item => item.trim())[0]+' . . .'; //mengambil ayat depan saja
	if(localStorage.getItem('hz_'+kode)!=null && localStorage.getItem('hz_'+kode)=='1'){s_hafal='checked'}else{s_hafal=''}
	if(userLang=='id-ID'){artinya=arti_id,ket_hafal='Hafal';}else{artinya=arti_en,ket_hafal='Memorized';}
	
    isi_surat += 
	'<li onclick="klik_ayat(&apos;'+nama+'_'+arr[i].id+'&apos;,&apos;'+file+'&apos;);" id='+nama+'_'+arr[i].id+' style="background: '+getColor()+'" class="'+s_latar+'">'+
	'<sup class="no_ayat">'+kode+' '+no_juz(kode)+'</sup>'+
	'<div class="mui-checkbox" style="display:'+s_hafiz+'"><label><input id="'+kode+'" onclick="hafal(this.id)" type="checkbox" '+s_hafal+'>'+ket_hafal+'</label><span class="hafiz" onclick="show_ayat(this);" style="display:'+s_hafiz+'">'+depan+'</span></div>'+
	'<span class="ayat" title="'+nama+' ayat '+arr[i].id+'" style="display:'+s_ayat+'">'+arr[i].ar.replace(ikhfa, rep1).replace(iqlab, rep2).replace(bigunah, rep3).replace(bilagunah, rep4).replace(mimi, rep5).replace(ifa_safawi, rep6).replace(gunah, rep7).replace(qalqalah, rep8)+'</span>'+
	'<span class="bacaan" style="display:'+s_latin+'">'+arr[i].bc+'</span>'+
	'<span class="arti" style="display:'+s_arti+'">'+artinya+'</span>'+
	'</li>';
	if(arr.length - 1 === i) {
	//console.log('render '+nama+' berhasil');
	}
}
setTimeout(function(){
document.getElementById(nama).innerHTML = isi_surat;
}, 1000); 
//console.log(arr);
}

function generate_hafalan(){
	if(userLang=='id-ID'){
	ket =['Pencapaian Hafalan'];
	}
	else{
	ket =['Achievement of Memorization'];
	}
	var isi_hafalan='',persen='0',jumlah='0',nama,total,grand_total=Number('0');
for(var i = 0; i < arr_surat.length; i++) {
	nama=Number(i+1)+'. '+capitalizeName(arr_surat[i].replace(/_/g,' '));
	total=window[arr_surat[i]].length;
	jumlah=filterkeyname('hz_'+Number(i+1)+'.').length;
	persen=(Number(jumlah/total)*Number(100)).toFixed(1);
	isi_hafalan += '<li><div class="progress" style="background-size:'+persen+'% 100% !important;"><b>'+nama+'</b><br>'+jumlah+'/'+total+' ('+persen+'%)</div> </li>';
	grand_total += Number(total);
}
	pencapaian = filterkeyname('hz_').length;
	persentase = (Number(pencapaian/grand_total)*Number(100)).toFixed(1);
	document.getElementById('hafalan').innerHTML='<b>'+ket[0]+' ('+persentase+'%)</b><br><ul id="progress">'+isi_hafalan.replace(/undefined/gm,'')+'</ul>';
}
generate_hafalan();

function go_hash(hash_value){
	var tagar = hash_value.replace(/surat_/,'');
	var ayat = tagar.match(/\d+/g);
	window.location.hash='';
	//window.location.hash=hash_value;
	if(hash_value!='hafalan'){
	localStorage.setItem('buka',tagar);
	muat(tagar);
	//console.log(ayat);
	if(ayat!=null){
		setTimeout(function(){
		window.location.replace('index.html#'+tagar.replace(/\d+/g,'')+Number(ayat-1));
		},1000)
	}else{
		setTimeout(function(){
		window.scrollTo(0, 0);
		},1000)
	}
	}else{
document.getElementsByClassName('surat')[0].innerHTML = '';
	window.location.replace('index.html#'+tagar);
	autocomplete_result.style.display='none';
	}
}
function getColor(){
  return "hsl(" + 360 * Math.random() + ',' +
             (25 + 70 * Math.random()) + '%,' + 
             (85 + 10 * Math.random()) + '%)'
}

function hapus_el(elem) {
	var els = document.querySelectorAll(elem);
  for (var i = 0; i < els.length; i++) {
    els[i].remove();
  }
}

function show_el(elem) {
	//el('loading').style.display='block';
	var els = document.querySelectorAll(elem);
  for (var i = 0; i < els.length; i++) {
    els[i].style.display='block';
	/*console.log('show');
	if(els.length - 1 === i) {
	el('loading').style.display='none';
	}*/
  }
}

function hide_el(elem) {
	//document.getElementById('loading').style.display='block';
	var els = document.querySelectorAll(elem);
  for (var i = 0; i < els.length; i++) {
    els[i].style.display='none';
	/*console.log('hide');
	if(els.length - 1 === i) {
	document.getElementById('loading').style.display='none';
	}*/
  }
}

function hapus_atr(elem,att) {
	var els = document.querySelectorAll(elem);
  for (var i = 0; i < els.length; i++) {
    els[i].removeAttribute(att);
  }
}

function set_atr(elem,att,val) {
	var els = document.querySelectorAll(elem);
  for (var i = 0; i < els.length; i++) {
    els[i].setAttribute(att,val);
  }
}
//hapus_el('.bacaan');
//hapus_el('.arti');
/*
function search(e) {
	let searched = document.getElementById("search").value.trim();
  if (searched !== "") {
  	let text = document.getElementById("text").innerHTML;
  	let re = new RegExp(searched,"g"); // search for all instances
		let newText = text.replace(re, `<mark>${searched}</mark>`);
		document.getElementById("text").innerHTML = newText;
  }
}*/

function popupClearAndHide() {
  autocomplete_result.innerHTML = "";
  autocomplete_result.style.display = "none";
  document.getElementById("search").value ='';
}

RegExp.escape = function (s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};

function updPopup() {
var ket,arti;
	if(userLang=='id-ID'){
	ket =['Terakhir Dibaca','ayat'];
	}
	else{
	ket =['Last read','verses'];
	}
	
  if(!search.value) {
    popupClearAndHide();
    return;
  }
  //var a = new RegExp("^" + search.value.replace(/ /g,'_'), "i");
  var a = new RegExp(RegExp.escape(search.value.replace(/ /g,'_')), "i");
  for(var x = 0, b = document.createDocumentFragment(), c = false; x < arr_surat.length; x++) {
	  
	if(userLang=='id-ID'){
	arti = surah[x][3];
	}
	else{
	arti = surah[x][7];
	}
	
    if(a.test(arr_surat[x])) {
      c = true;
      var d = document.createElement("p");
	  var go =arr_surat[x].replace(/ /g,'_').toLowerCase();
      d.innerHTML = '<b>'+Number(x+1)+'. '+arr_surat[x].replace(/_/g,' ')+'</b> '+surah[x][2]+' ('+arti+') '+window[arr_surat[x]].length+' '+ket[1];
      d.setAttribute("onclick", "go_hash('surat_"+go+"');autocomplete_result.innerHTML='';autocomplete_result.style.display='none';");
      b.appendChild(d);
    }
  }
  if(c == true) {
  var terakhir = '<p onclick="terakhir_baca();">&#182; <b>'+ket[0]+'</b></p>';
    autocomplete_result.innerHTML = "";
    autocomplete_result.style.display = "block";
    autocomplete_result.appendChild(b);
    return;
  }
  popupClearAndHide();
}
function fokus(){
	document.getElementById("search").click();
}
search.addEventListener("keyup", updPopup);
search.addEventListener("change", updPopup);
search.addEventListener("focus", updPopup_show);
document.getElementById("nav-trigger").nextElementSibling.addEventListener("click", popupClearAndHide);


	if(userLang=='id-ID'){
	document.getElementById('search').setAttribute('placeholder','Ketik nama surat & pilih hasil pencarian.');
	}
	else{
	document.getElementById('search').setAttribute('placeholder','Type surah name & select search result.');
	}
	
function updPopup_show() {
var ket,arti;
	if(userLang=='id-ID'){
	ket =['Terakhir Dibaca','ayat'];
	}
	else{
	ket =['Last read','verses'];
	}
  //var a = new RegExp("^" + search.value.replace(/ /g,'_'), "i");
  var a = new RegExp(RegExp.escape(search.value.replace(/ /g,'_')), "i");
  for(var x = 0, b = document.createDocumentFragment(), c = false; x < arr_surat.length; x++) {
	  
	if(userLang=='id-ID'){
	arti = surah[x][3];
	}
	else{
	arti = surah[x][7];
	}
	
    if(a.test(arr_surat[x])) {
      c = true;
      var d = document.createElement("p");
	  var go =arr_surat[x].replace(/ /g,'_').toLowerCase();
      d.innerHTML = '<b>'+Number(x+1)+'. '+arr_surat[x].replace(/_/g,' ')+'</b> '+surah[x][2]+' ('+arti+') '+window[arr_surat[x]].length+' '+ket[1];
      d.setAttribute("onclick", "go_hash('surat_"+go+"');autocomplete_result.innerHTML='';autocomplete_result.style.display='none';");
      b.appendChild(d);
    }
  }
  var terakhir = '<p onclick="terakhir_baca();">&#182; <b>'+ket[0]+'</b></p>';
    autocomplete_result.innerHTML = "";
    autocomplete_result.style.display = "block";
    autocomplete_result.appendChild(b);
	autocomplete_result.innerHTML=terakhir+autocomplete_result.innerHTML;
    return;
}

function toggle_set_latar(id) {
  let toggleButton = document.getElementById(id);
  if (toggleButton.checked) {
    toggleButton.checked = true;
	localStorage.setItem(id,'no_bg'); 
	document.querySelectorAll('ol > li').forEach(item => {
		item.className='no_bg';
	})
  } else {
    toggleButton.checked = false;
	localStorage.setItem(id,'bg_adem');
	document.querySelectorAll('ol > li').forEach(item => {
		item.className='bg_adem';
	})
  }
}

function toggle_set_color(id) {
  let toggleButton = document.getElementById(id);
  if (toggleButton.checked) {
    toggleButton.checked = true;
	localStorage.setItem(id,'0'); 
	document.querySelectorAll('ol > li > span > u').forEach(item => {
		//item.setAttribute('style','');
		item.removeAttribute('style');
	})
  } else {
    toggleButton.checked = false;
	localStorage.setItem(id,'c_black');
	document.querySelectorAll('ol > li > span > u').forEach(item => {
		item.setAttribute('style','color:black !important;');
	})
  }
}

/*fungsi untuk show/hide https://stackoverflow.com/a/21070237/4063684*/
function toggle(id, elements, specifiedDisplay) {
  let toggleButton = document.getElementById(id);
  var element, index;

  elements = elements.length ? elements : [elements];
  for (index = 0; index < elements.length; index++) {
    element = elements[index];

    if (isElementHidden(element)) {
    toggleButton.checked = true;
	localStorage.setItem(id,'checked');
      element.style.display = '';

      // If the element is still hidden after removing the inline display
      if (isElementHidden(element)) {
        element.style.display = specifiedDisplay || 'block';
      }
    } else {
    toggleButton.checked = false;
	localStorage.setItem(id,'0');
      element.style.display = 'none';
    }
  }
  function isElementHidden (element) {
    return window.getComputedStyle(element, null).getPropertyValue('display') === 'none';
  }
}

function notif_ayat(el){
var ket;
	if(userLang=='id-ID'){
	ket = 'Cari di surat '+capitalizeName(localStorage.getItem('buka').replace(/_/g,' '))+'..!';
	}
	else{
	ket = 'Search in surah '+capitalizeName(localStorage.getItem('buka').replace(/_/g,' '))+'..!';
	}
	
	if(el.textContent!='X'){
		if(localStorage.getItem('set_hafiz')=='1'){
			localStorage.setItem('set_hafiz','0');
			localStorage.setItem('set_arti','checked');
			alert(ket);
			//window.location.replace('index.html');
			muat(localStorage.getItem('buka'));
		}else{
			localStorage.setItem('set_arti','checked');
			show_el('.arti');
			alert(ket);
			//mui_dialog('&#x2714; Untuk pergi ke surat ketik: <b>no_surat</b>+titik+<b>no_ayat</b> <br>contoh: <b style="color:red">7.204</b><br>&#x2714; Untuk pergi ke juz ketik: <b>juz</b>+spasi+<b>no_juz</b><br>contoh: <b style="color:red">juz 30</b>');
		}
	}
}

/*fungsi untuk gulir otomatis*/
var shouldScroll = false;

function scroll() {
  if (!shouldScroll) {
    return;
  }
  window.scrollBy(0, 1);
  setTimeout(scroll, 120);
}

document.getElementById('gulir').addEventListener('click', function() {
  this.innerHTML = (this.dataset.toggled ^= 1) ? '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M10 18a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v12zm7 0a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v12z" fill="white" fill-rule="evenodd"/></svg>' : '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M16.939 10.939L12 15.879l-4.939-4.94l-2.122 2.122L12 20.121l7.061-7.06z" fill="black"/><path d="M16.939 3.939L12 8.879l-4.939-4.94l-2.122 2.122L12 13.121l7.061-7.06z" fill="black"/></svg>';
  shouldScroll = !shouldScroll;
  scroll();
});

/*fungsi untuk show/hide*/
var hafiz;
if(localStorage.getItem('set_hafiz')=='1'){
	hafiz = true;
}else{hafiz = false;}

function hafizin() {
	if(userLang=='id-ID'){
	ket = ['Mode normal aktif','Mode hafiz diaktifkan'];
	}
	else{
	ket = ['Normal mode enabled','Hafiz mode enabled'];
	}
  if (!hafiz) {
	  /*
	  hide_el('.hafiz');
	  show_el('.ayat');
	  */
	  alert(ket[0]);
	  localStorage.setItem('set_hafiz','0');
	  //console.log('nonaktif');
	  //window.location.replace('index.html');
	  muat(localStorage.getItem('buka'));
    return;
  }
  hafizin;
	  /*
	  hide_el('.ayat');
	  show_el('.hafiz');
	  if(localStorage.getItem('set_latin')=='1'){
		hide_el('.bacaan');}
	  if(localStorage.getItem('set_arti')=='1'){
		hide_el('.arti');
	  }
	  */
	  alert(ket[1]);
	  localStorage.setItem('set_latin','0');
	  localStorage.setItem('set_arti','0');
	  localStorage.setItem('set_hafiz','1');
	  //window.location.replace('index.html');
	  muat(localStorage.getItem('buka'));
	  //console.log('aktif');
}

document.getElementById('hafiz').addEventListener('click', function() {
  this.style.backgroundColor = (this.dataset.toggled ^= 1) ? "gold" : "none";
  hafiz = !hafiz;
  hafizin();
});

function hafal(id){
	elm = document.getElementById(id);
  if (elm.checked) 
  {
	localStorage.setItem('hz_'+id,'1');
  } else {
	localStorage.removeItem('hz_'+id);
  }
  generate_hafalan();
}

	var cs_bacaan = document.getElementsByClassName('bacaan')[0];
	var cs_arti = document.getElementsByClassName('arti')[0];

document.getElementById('atur').addEventListener('click', function() {
	pengaturan();
});

/*fungsi cek tekan lama longclick https://stackoverflow.com/a/60207895/4063684*/
function onLongPress(element, callback) {
  let timer;

  element.addEventListener('touchstart', () => { 
    timer = setTimeout(() => {
      timer = null;
      callback();
    }, 500);
  });

  function cancel() {
    clearTimeout(timer);
  }

  element.addEventListener('touchend', cancel);
  element.addEventListener('touchmove', cancel);
}

setTimeout(function(){
document.querySelectorAll('.arti').forEach(item => {
  item.addEventListener('click', event => {
    //alert(item.textContent);
  })
})

document.querySelectorAll('ol > li').forEach(item => {
	onLongPress(item, () => {
	alert('Ayat ini ditandai sebagai Terakhir Baca');
	localStorage.setItem('terakhir_baca',item.id);
});
})
}, 9000); 

function tandai(hash){
var ket;
	if(userLang=='id-ID'){
	ket =['Ayat ini ditandai sebagai Terakhir Baca'];
	}
	else{
	ket =['This verse is marked as Last Read'];
	}
	alert(ket[0]);
	localStorage.setItem('terakhir_baca',hash);
}

function terakhir_baca(){
var ket;
	if(userLang=='id-ID'){
	ket =['Terakhir dibaca','Belum ada ayat yang ditandai sebagai Terakhir Baca \nSilahkan ketuk pada salah satu ayat untuk menandai'];
	}
	else{
	ket =['Last read','There are no verses marked as Last Read. \nPlease tap on a verse to mark it'];
	}
	
	var latest=localStorage.getItem('terakhir_baca');
	if(latest!=null){
	alert(ket[0]+' '+capitalizeName(latest.replace(/_/g,' ')));
	go_hash(latest);
	}else{
	alert(ket[1]);
	}
	autocomplete_result.innerHTML='';autocomplete_result.style.display='none';
}

document.getElementById('tanda').addEventListener('click', function() {
	terakhir_baca();
});

document.getElementById('capaian').addEventListener('click', function() {
	go_hash('hafalan');
});

function capitalizeName(name) {
  return name.replace(/\b(\w)/g, s => s.toUpperCase());
}
updPopup_show();

function clearID() {
    if (arguments.length > 0) {
        for (var i = 0; i < arguments.length; i++) {
            document.getElementById(arguments[i]).value = "";
        }
    }
}

function hapus_atr(elem, att) {
    var els = document.querySelectorAll(elem);
    for (var i = 0; i < els.length; i++) {
        els[i].removeAttribute(att);
    }
}

function el(id) {
    return document.getElementById(id);
}

function els(cl, n) {
    return document.getElementsByClassName(cl)[n];
}
function close_mui_dialog(){
	el = document.getElementById('mui-overlay');
	if(el!=null){el.remove();}
	document.body.removeAttribute('class');
}

function mui_dialog(message, command, title = '') {
    // initialize modal element
    var close = ";this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);document.body.removeAttribute(&apos;class&apos;)";
    var ads = ";admob.interstitial.prepare();admob.interstitial.show();";
    var modalEl = document.createElement('div');
    modalEl.style.width = '300px';
    modalEl.style.minHeight = '170px';
    modalEl.style.margin = 'auto';
    modalEl.style.padding = '15px';
    modalEl.style.position = 'absolute';
    modalEl.style.top = '50%';
    modalEl.style.left = '50%';
    modalEl.style.transform = 'translate(-50%, -50%)';
    modalEl.style.backgroundColor = '#fff';
    modalEl.innerHTML += '<div class="mui-container"><div class="mui--text-title">' + title + '</div><br><div class="mui--text-body2">' + message + '</div></div>';
    //modalEl.innerHTML += '<button class="mui-btn mui-btn--flat mui-btn--primary" style="float:right;background-color:#eee;margin-left:5px;" onclick=' + command + close + '><strong>OK</strong></button>';
    if (command != null && command !== 0) {
        modalEl.innerHTML += '<button class="mui-btn mui-btn--flat" style="float:right;background-color:#eee;" onclick=' + close + ads +'><strong>Cancel</strong></button>';
    }
    // show modal
    mui.overlay('on', modalEl);
}
var txt_selected;
function getSelectionText() {
    var text = "";
    var activeEl = document.activeElement;
    var activeElTagName = activeEl ? activeEl.tagName.toLowerCase() : null;
    if (
      (activeElTagName == "textarea") || (activeElTagName == "input" &&
      /^(?:text|search|password|tel|url)$/i.test(activeEl.type)) &&
      (typeof activeEl.selectionStart == "number")
    ) {
        text = activeEl.value.slice(activeEl.selectionStart, activeEl.selectionEnd);
    } else if (window.getSelection) {
        text = window.getSelection().toString();
    }
    return text;
}

document.onmouseup = document.onkeyup = document.onselectionchange = function() {
  txt_selected = getSelectionText();
};

function show_ayat(el){
	var ayat = el.parentNode.parentNode.getElementsByClassName('ayat')[0];
	//console.log(ayat.innerHTML);
	ayat.style.display = (ayat.dataset.toggled ^= 1) ? "block" : "none";
	el.style.color = (el.dataset.toggled ^= 1) ? "gold" : "black";
}

function klik_ayat(id,file){
var ket;
	if(userLang=='id-ID'){
	ket =['Play ayat','Play Surat','Tandai sebagai Terakhir Baca','Salin Ayat','Bagikan Ayat'];
	}
	else{
	ket =['Play verse','Play surah','Mark as Last Read','Copy verse','Share verse'];
	}
	
	if(localStorage.getItem('set_hafiz')=='1'){
		//console.log('mode_hafiz');
	}
	else{
		var nama= capitalizeName(id.replace(/_/g,' '));
		var url1 = au_ayat+file;
		var no_srt = Number(arr_surat.indexOf(id.replace(/_\d+/g,'')));
		var url2 = au_surat+arr_files[no_srt]+'.mp3';
		
		//pad(Number(i+1), 3);
		var play_btn = '<span style="position:relative;margin:0px;font-size:15px;color:blue;" class="play" onclick="PlayPause(&apos;au1&apos;,&apos;'+url1+'&apos;);close_mui_dialog()"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18zm0 2c6.075 0 11-4.925 11-11S18.075 1 12 1S1 5.925 1 12s4.925 11 11 11z" fill="blue"/><path d="M16 12l-6 4.33V7.67L16 12z" fill="blue"/></g></svg> '+ket[0]+'</span>';
		var play_btn_all = '<span style="position:relative;margin:0px;font-size:15px;color:blue;" class="play_all" onclick="PlayPause(&apos;au1&apos;,&apos;'+url2+'&apos;);close_mui_dialog()"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="blue"><path d="M2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1zm2.765 5.576A.5.5 0 0 0 6 7v5a.5.5 0 0 0 .765.424l4-2.5a.5.5 0 0 0 0-.848l-4-2.5z"/><path d="M1.5 14.5A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5h-13zm13-1a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5h-13A.5.5 0 0 0 1 6v7a.5.5 0 0 0 .5.5h13z"/></g></svg> '+ket[1]+'</span>'
		
    mui_dialog("<b>"+nama+"</b><br><br>"+play_btn+"<br><br>"+play_btn_all+"<br><br><a onclick=tandai('"+id+"');close_mui_dialog()>&#182; "+ket[2]+"</a><br><br>"+
	"<a onclick=salin('"+id+"');close_mui_dialog()>&#10063; "+ket[3]+"</a><br><br>"+
	"<a onclick=bagikan('"+id+"');close_mui_dialog()>&#10149; "+ket[4]+"</a><br>"+
	"&nbsp;")
	}
}
function salin(id){
	var isi;
	if(txt_selected==''){
    isi = 'QS: '+Array.from(document.getElementById(id).children, ({textContent}) => textContent.trim()).filter(Boolean).join('\r\n');
	arr_isi = isi.split('\r\n');
	saring = arr_isi.filter((x, i) => i !== 1);
	isi = saring.join('\r\n');
	}else{isi=txt_selected}
    if((/Mobi|Android/i.test(navigator.userAgent))){
    cordova.plugins.clipboard.copy(isi);
    alert('telah disalin')
    }else{alert(isi);}
}
function bagikan(id){
	var isi;
	if(txt_selected==''){
    isi = 'QS: '+Array.from(document.getElementById(id).children, ({textContent}) => textContent.trim()).filter(Boolean).join('\r\n');
	arr_isi = isi.split('\r\n');
	saring = arr_isi.filter((x, i) => i !== 1);
	isi = saring.join('\r\n');
	}else{isi=txt_selected}
    if((/Mobi|Android/i.test(navigator.userAgent))){
    window.plugins.socialsharing.share(isi)
    }else{alert(isi);}
}

//https://stackoverflow.com/a/57127781/4063684
const toggleCSSclasses = (el, ...cls) => cls.map(cl => el.classList.toggle(cl));

const toggleClass = (el, className) => el.classList.toggle(className);

function ganti_bg(id){
//toggleCSSclasses(document.querySelector("ol > li"), "no_bg");
toggleClass(document.querySelector('ol > li > span > u'), '.c_black');
}

function pengaturan(){
var ket;
	if(userLang=='id-ID'){
	ket =['Pengaturan','Tampilkan Latin Arab','Tampilkan Terjemahan','Warna Latar Acak','Tajwid'];
	}
	else{
	ket =['Settings','Show Latin Arabic','Show Translation','Random Background Color','Tajweed'];
	}
	
var s_latar,s_tajwid;
var about = '<sub>&#169; App Develop by: <b>Hedi Herdiana</b><br>Support: aahedi@gmail.com</sub>';
if(localStorage.getItem('set_latar')=='no_bg'){s_latar='checked'}else{s_latar='0';}
if(localStorage.getItem('set_tajwid')=='c_black'){s_tajwid='0'}else{s_tajwid='checked';}
var latin = '<div class="mui-checkbox"><label><input id="set_latin" onclick="toggle(this.id,document.querySelectorAll(&apos;.bacaan&apos;))" type="checkbox" '+localStorage.getItem('set_latin')+'>'+ket[1]+'</label> </div>';
var arti = '<div class="mui-checkbox"><label><input id="set_arti" onclick="toggle(this.id,document.querySelectorAll(&apos;.arti&apos;))"  type="checkbox" '+localStorage.getItem('set_arti')+'>'+ket[2]+'</label> </div>';
var latar = '<div class="mui-checkbox"><label><input id="set_latar" onclick="toggle_set_latar(this.id)"  type="checkbox" '+s_latar+'>'+ket[3]+'</label> </div>';
var tajwid = '<div class="mui-checkbox"><label><input id="set_tajwid" onclick="toggle_set_color(this.id)"  type="checkbox" '+s_tajwid+'>'+ket[4]+'</label> </div>';

    mui_dialog("<b>"+ket[0]+"</b>"+
	latin+arti+latar+tajwid+about+
	"<br>&nbsp;")
	/*
  toggle(document.querySelectorAll('.bacaan'));
  toggle(document.querySelectorAll('.arti'));
  */
}

function filterkeyname(string){
	var filtered = [];
	for (var i = 0; i < localStorage.length; i++) {

  // set iteration key name
  var key = localStorage.key(i);

  // use key name to retrieve the corresponding value
  var value = localStorage.getItem(key);

  // console.log the iteration key and value
  //console.log('Key: ' + key + ', Value: ' + value);
  
   if(key.indexOf(string) > -1){
	   filtered.push(key);
   };
}
return filtered;
}

function PlayPause(id,s) {
	var ket;
	if(userLang=='id-ID'){
	ket = 'tidak bisa diputar, silahkan nyalakan internet anda';
	}
	else{
	ket = 'can not be played, please turn on your internet';
	}

	var filename = s.split('/').pop();
	var sound = document.getElementById(id);
	sound.src = s;
	sound.volume = 1;
	sound.loop = true;
	sound.onerror = function(){ alert(filename+' tidak bisa diputar silahkan nyalakan internet anda'); };
	// Show loading animation.
	var playPromise = sound.paused ? sound.play() : sound.pause();

	if (playPromise !== undefined) {
		playPromise.then(_ => {})
			.catch(error => {});
	}

}

function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}

function tajwid_ket(isi){
	  if(localStorage.getItem('set_hafiz')=='1'){
		  return mui_dialog(isi);
	  }else{
		  var regex = /(<([^>]+)>)/ig;
		  result = isi.replace(regex, "");
		  return alert(result);
	  }
}
  function tajwid(nama){
	  var n;
	  if(localStorage.getItem('set_hafiz')=='1'){
		  n = '<br>';
	  }else{
		  n= '\n\r';
	  }
	  
	if(userLang=='id-ID'){
	
	  if(nama=='ikhfa'){
		  tajwid_ket('<b style="color:red;">Ikhfa</b> artinya samar-samar. (seperti bunyi <i>ng</i> dalam bahasa Indonesia).'+n+
		  'Hurufnya ada 15, yaitu :'+n+
		  'ك ق ف ظ ط ض ص ش س ز ذ د ج ث ت'+n+
		  'Ikhfa adalah apabila ada <i>nun mati</i> atau <i>tanwin</i> bertemu dengan salah satu hurufnya, maka dibacanya samar-samar.'
		  )
	  }
	  else if(nama=='iqlab'){
		  tajwid_ket('<b style="color:blue;">Iqlab</b> artinya mengganti (mengganti huruf nun ke huruf mim).'+n+
		  'Hurufnya ada 1, yaitu : ب'+n+
		  'Iqlab adalah apabila huruf <i>nun mati atau tanwin</i> bertemu dengan huruf Ba’, maka dibacanya balem.'
		  )
	  }
	  else if(nama=='bigunah'){
		  tajwid_ket('<b style="color:purple;">Idgham Bigunnah</b> artinya dengan dengung (menahan huruf yang masuk sebanyak 2 harkat)'+n+
		  'Hurufnya ada 4, yaitu :(يمنو)    ي م ن و'+n+
		  'Idgham bigunnah adalah apabila ada huruf <i>nun mati atau tanwin</i> bertemu dengan salah satu hurufnya, maka dibacanya harus berdengung.'
		  )
	  }
	  else if(nama=='bilagunah'){
		  tajwid_ket('<b style="color:gray;">Idgham Bilagunnah</b> Artinya : tidak dengan dengung.'+n+
		  'Hurufnya ada 2, yaitu : ر ل'+n+
		  'Idgham bilagunnah adalah apabila ada <i>nun mati atau tanwin</i> bertemu dengan salah satu hurufnya, maka dibacanya tidak berdengung.'
		  )
	  }
	  else if(nama=='mimi'){
		  tajwid_ket('<b style="color:yellowgreen;">Idgham Mimi</b> Mutajanisain artinya yang sejenis'+n+
		  'Hurufnya ada 1, yaitu :   م'+n+
		  'Idgham Mimi adalah apabila ada <i>mim mati</i> bertemu dengan <i>mim hidup</i>, maka dibacanya harus berdengung.'
		  )
	  }
	  else if(nama=='ifa_safawi'){
		  tajwid_ket('<b style="color:deeppink;">Ikhfa Safawi</b> Hurufnya ada 1, yaitu :   ب'+n+
		  'Ikhfa Safawi adalah apabila ada <i>mim mati</i> bertemu dengan huruf <i>ba’ hidup</i>, maka dibacanya harus berdengung.'
		  )
	  }
	  else if(nama=='gunah'){
		  tajwid_ket('<b style="color:darkorange;">Gunnah Masydidah</b> artinya ditahan lama karena <i>tasydid</i>.'+n+
		  'Hurufnya ada 2, yaitu : مّ , نّ'+n+
		  'Apabila terdapat <i>nun siddah dan atau mim siddah</i> sebelum huruf hijaiyyah berharkat, maka dibacanya bergunnah (ditahan sepanjang 3 harkat).'
		  )
	  }
	  else if(nama=='qalqalah'){
		  tajwid_ket('<b style="color:green;">Qalqalah</b> artinya kerongkongan (huruf hijaiyyah yang mati, diceklokkan).'+n+
		  'Hurufnya ada 5, yaitu : ق ط د ج ب'+n+
		  'Qolqolah dibagi menjadi 2, yaitu :'+n+
		  '1. Qolqolah Sughra ( سغرى  )'+n+
		  'Sughra artinya : ringan (kecil).'+n+
		  'Qolqolah Sughra adalah apabila ada salah satu huruf qolqolah mati karena sukun, maka dibacanya diceklokkan.'+n+
		  'Contohnya :'+n+
		  'لقدْ , حبْل , طلق ,  أطْعمهم ,  أجْر'+n+
		  '2. Qolqolah Kubra ( قبرﻯ  )'+n+
		  'Kubra artinya : dahsyat (besar).'+n+
		  'Qolqolah Kubra adalah apabila ada salah satu huruf qolqolah mati di akhir kalimat (karena waqof), maka dibacanya diceklokkan.'
		  )
	  }
	  
	}
	else{
		
		if (nama == 'ikhfa') {
			tajwid_ket('<b style = "color: red;"> Ikhfa </b> means vague. (like the sound <i> ang </i> in English).' + n +
				'There are 15 letters, namely:' + n +
				'ك ق ف ظ ط ض ص ش س ز ذ د ج ث ت' + n +
				'Ikhfa is if a <i> nun mati or tanwin </i> meets one of the letters, then it will be vaguely read. '
			)
		} else if (nama == 'iqlab') {
			tajwid_ket('<b style = "color: blue;"> Iqlab </b> means changing (changing the letter nun to the letter meem).' + n +
				'The letter has 1, namely: ب' + n +
				'Iqlab is when the letter <i> nun death or tanwin </i> meets the letter Ba, then it is read balem. '
			)
		} else if (nama == 'bigunah') {
			tajwid_ket('<b style = "color: purple;"> Idgham Bigunnah </b> means by buzzing (holding 2 digits of incoming letters)' + n +
				'There are 4 letters, namely: (يمنو) ي م ن و' + n +
				'Idgham bigunnah is if a letter <i> nun mati or tanwin </i> meets one of the letters, then it must be read buzzing.'
			)
		} else if (nama == 'bilagunah') {
			tajwid_ket('<b style = "color: gray;"> Idgham Bilagunnah </b> Meaning: not with a drone.' + n +
				'There are 2 letters, namely: ر ل' + n +
				'Idgham bilagunnah is if there is <i> nun mati or tanwin </i> meeting one of the letters, then it will not be read buzzing.'
			)
		} else if (nama == 'mimi') {
			tajwid_ket('<b style = "color: yellowgreen;"> Idgham meemi </b> Mutajanisain means the same' + n +
				'There is 1 letter, namely: م' + n +
				'Idgham meemee is if there is a dead meem who meets a live meem, then the reading must be buzzing.'
			)
		} else if (nama == 'ifa_safawi') {
			tajwid_ket('<b style = "color: deeppink;"> Ikhfa Safawi </b> There is 1 letter, namely: ب' + n +
				'Ikhfa Safawi is if there is a <i> dead meem </i> meets the letter" ba "alive </i>, then the reading must be buzzing.'
			)
		} else if (nama == 'gunah') {
			tajwid_ket('<b style = "color: darkorange;"> Gunnah Masydidah </b> means being detained for a long time because of <i> tasydid </i>.' + n +
				'There are 2 letters, namely: مّ, نّ' + n +
				'If there is <i> nun siddah or meem siddah </i> before the hijaiyyah letter has a dignity, then it is read useless (held for 3 digits). '
			)
		} else if (nama == 'qalqalah') {
			tajwid_ket('<b style = "color: green;"> Qalqalah </b> means the throat (hijaiyyah letters that are dead, choked).' + n +
				'There are 5 letters, namely: ق ط د ج ب' + n +
				'Qolqolah is divided into 2, namely:' + n +
				'1. Qolqolah Sughra (سغرى) ' + n +
				'Sughra means: light (small).' + n +
				'Sughras Qolqolah is if one of the qolqolah letters dies because of breadfruit, then it is read it is blocked.' + n +
				'For example:' + n +
				'لقدْ, حبْل, طلق, أطْعمهم, أجْر' + n +
				'2. Qolqolah Kubra (قبرﻯ) ' + n +
				'Kubra means: terrible (big).' + n +
				'Qolqolah Kubra is if one of the qolqolah letters dies at the end of a sentence (because of waqof), then reading it is blocked.'
			)
		}
		
	}
  }
