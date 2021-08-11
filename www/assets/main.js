var userLang = navigator["language"] || navigator["userLanguage"];
var surat = "al_fatihah,al_baqarah,ali_imran,an_nisa,al_maidah,al_anam,al_araf,al_anfal,at_taubah,yunus,hud,yusuf,ar_rad,ibrahim,al_hijr,an_nahl,al_isra,al_kahfi,maryam,taha,al_anbiya,al_hajj,al_muminun,an_nur,al_furqan,asy_syuara,an_naml,al_qasas,al_ankabut,ar_rum,luqman,as_sajdah,al_ahzab,saba,fatir,yasin,as_saffat,sad,az_zumar,gafir,fussilat,asy_syura,az_zukhruf,ad_dukhan,al_jasiyah,al_ahqaf,muhammad,al_fath,al_hujurat,qaf,az_zariyat,at_tur,an_najm,al_qamar,ar_rahman,al_waqiah,al_hadid,al_mujadilah,al_hasyr,al_mumtahanah,as_saff,al_jumuah,al_munafiqun,at_tagabun,at_talaq,at_tahrim,al_mulk,al_qalam,al_haqqah,al_maarij,nuh,al_jinn,al_muzzammil,al_muddassir,al_qiyamah,al_insan,al_mursalat,an_naba,an_naziat,abasa,at_takwir,al_infitar,al_mutaffifin,al_insyiqaq,al_buruj,at_tariq,al_ala,al_gasyiyah,al_fajr,al_balad,asy_syams,al_lail,ad_duha,asy_syarh,at_tin,al_alaq,al_qadr,al_bayyinah,al_zalzalah,al_adiyat,al_qariah,at_takasur,al_asr,al_humazah,al_fil,quraisy,al_maun,al_kausar,al_kafirun,an_nasr,al_lahab,al_ikhlas,al_falaq,an_nas";
var file = "001 Al Fatihaah,002 Al Baqoroh,003 Ali 'Imroon,004 An Nisaa',005 Al Maa'idah,006 Al An'aam,007 Al A'raaf,008 Al Anfaal,009 At Taubah,010 Yuunus,011 Huud,012 Yuusuf,013 Ar Ra'du,014 Ibrahim,015 Al Hijr,016 An Nahl,017 Al Israa',018 Al Kahfi,019 Maryam,020 Thooha,021 Al Anbiyaa,022 Al Haj,023 Al Mu'minuun,024 An Nuur,025 Al Furqoon,026 Asy Syu'aro,027 An Naml,028 Al Qoshosh,029 Al 'Ankabuut,030 Ar Ruum,031 Luqmaan,032 As Sajadah,033 Al Ahzaab,034 Saba',035 Faathir,036 Yaasiin,037 Ash Shooffaat,038 Shood,039 Az Zumar,040 Ghoofir,041 Fushshilat,042 Asy Syuro,043 Az Zukhruf,044 Ad Duhaan,045 Al Jaatsiyah,046 Al Ahqaf,047 Muhammad,048 Al Fath,049 Al Hujurot,050 Qoof,051 Adz Dzaariyat,052 Thuur,053 An Najm,054 Al Qomar,055 Ar Rohmaan,056 Al Waaqi'ah,057 Al Hadiid,058 Al Mujaadilah,059 Al Hasyr,060.Al Mumtahanahfix,061.Ash Shaff,062.Al Jumu'ah,063.Al Munafiqun,064.At Taghabun,065.At Talaq,066.At Tahrim,067.Al Mulk,068.Al Qalam,069.Al Haqqah,070.Al Ma'arij,071 Nuh,072 Al Jin,073 Al Muzzammil,074 Al Muddatsir,075 Al Qiyamah,076 Al Insaan,077.Al Mursalat,078 An Naba`,079 An Naazi'aat,080 'Abasa,081 At Takwiir,082 Al Infithoor,083 Al Muthoffifiin,084 Al Insyiqooq,085 Al Buruuj,086 Ath Thooriq,087 Al A'laa,088 Al Ghoosyiyah,089 Al Fajr,090 Al Balad,091 Asy Syams,092 Al Lail,093 Adh Dhuha,094 An Nasyroh,095 At Tiin,096 Al 'Alaq,097 Al Qodr,098 Al Bayyinah,099 Al Zalzalah,100 Al 'Aadiyaat,101 Al Qoori'ah,102 At Takaatsur,103 Al 'Ashr,104 Al Humazah,105 Al Fiil,106 Quroisy,107 Al Maa'uun,108 Al Kautsar,109 Al Kaafiruun,110 An Nashr,111 Al Masad,112 Al Ikhlas,113 Al Falaq,114 An Naas,115 Do'a Khattam";
var juz = "1.1,2.142,2.253,3.92,4.24,4.148,5.83,6.111,7.88,8.41,9.94,11.6,12.53,15.2,17.1,18.75,21.1,23.1,25.21,27.60,29.45,33.31,36.22,39.32,41.47,46.1,51.31,58.1,67.1,78.1";
var madaniyah = "al_baqarah,ali_imran,an_nisa,al_maidah,al_anfal,at_taubah,al_hajj,an_nur,al_ahzab,muhammad,al_fath,al_hujurat,ar_rahman,al_hadid,al_mujadilah,al_hasyr,al_mumtahanah,as_saff,al_jumuah,al_munafiqun,at_tagabun,at_talaq,at_tahrim,al_insan,al_bayyinah,al_zalzalah,an_nasr";
var source = Base64["decode"]("aHR0cHM6Ly9wbGF5Lm15LmlkL2hhZml6");
var au_surat = source + "/surat/";
var au_ayat = source + "/ayat/";
var arr_juz = juz["split"](",");
var arr_madaniyah = madaniyah["split"](",");
var arr_files = file["split"](",");

function no_juz(force) {
  var result = arr_juz["includes"](force);
  var spaceReplacer = arr_juz["indexOf"](force) + 1;
  return result == !![] ? "<b>juz " + spaceReplacer + "</b>" : "";
}

function latar_juz(force) {
  var result = arr_juz["includes"](force);
  var _0x1062dc = arr_juz["indexOf"](force) + 1;
  return result == !![] ? "background: gold;padding: 3px;" : "";
}

function turun(mmaModFeedbackAutomSyncedEvent) {
  var previousCursive = arr_madaniyah["includes"](
    mmaModFeedbackAutomSyncedEvent
  );
  return previousCursive == !![] ? "madaniyah" : "makkiyah";
}
if (localStorage["getItem"]("set_latin") === null) {
  localStorage["setItem"]("set_latin", "checked");
}
if (localStorage["getItem"]("set_arti") === null) {
  localStorage["setItem"]("set_arti", "checked");
}
if (localStorage["getItem"]("set_latar") === null) {
  localStorage["setItem"]("set_latar", "no_bg");
}
if (localStorage["getItem"]("contextmenu") === null) {
  localStorage["setItem"]("contextmenu", "checked");
}
var arr_surat = surat["split"](",");
var ol_surat;
var bismi;

function buka_hafalan() {
  document["getElementById"]("doa")["style"]["display"] =
    "none";
  document["getElementById"]("hafalan")["style"]["display"] =
    "block";
  document["getElementById"]("hafalan_juz")["style"]["display"] =
    "block";
  setTimeout(function () {
    go_hash("hafalan_juz");
  }, 100);
}

function muat(href, data) {
  function render() {
    var child;
    if (userLang == "id-ID") {
      child = "Lanjut ke Surat ";
    } else {
      child = "Next to Verse ";
    }
    var date = document["querySelectorAll"](".nama_surat")[
      document["querySelectorAll"](".nama_surat")["length"] - 1
    ]["id"]["replace"](/surat_/g, "");
    var enc_length = Number(arr_surat["indexOf"](date));
    var filter;
    if (enc_length < arr_surat["length"] - 1) {
      filter = arr_surat[enc_length + 1];
    } else {
      filter = arr_surat[0];
    }
    var e = document["createElement"]("button");
    e["innerHTML"] =
      child + capitalizeName(filter["replace"](/_/g, " "));
    e["setAttribute"]("onclick", "go_hash('" + filter + "')");
    e["setAttribute"]("style", "margin:10px;padding:5px;width:90%;");
    document["getElementsByClassName"]("surat")[0]["appendChild"](e);
  }
  document["getElementById"]("loading")["style"]["display"] =
    "block";
  document["getElementById"]("hafalan")["style"]["display"] = "none";
  document["getElementById"]("hafalan_juz")["style"]["display"] =
    "none";
  document["getElementsByClassName"]("surat")[0]["innerHTML"] = "";
  document["getElementsByClassName"]("surat")[0]["style"]["marginBottom"] =
    "30px";
  document["getElementsByClassName"]("surat")[0]["style"]["visibility"] =
    "hidden";
  var webColor;
  if (href != null) {
    webColor = href["replace"](/surat_/g, "");
  } else {
    webColor = "al_fatihah";
  }
  var n;
  var columnCount;
  if (data != null) {
    n = Number(get_surat_juz(data)[0] - 1);
    columnCount = get_surat_juz(data)["pop"]();
    var i = n;
    for (; i < columnCount; i++) {
      var spaceReplacer = au_surat + escape(arr_files[i]) + ".m4a";
      if (arr_surat[i] != "at_taubah" && i != 0) {
        bismi =
          '<p style="background: ' +
          getColor() +
          '" class="bismillah">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</p>';
      } else {
        bismi = "";
      }
      ol_surat =
        ol_surat +
        ("<hedi><header class=\"nama_surat\" id=surat_" +
          arr_surat[i] +
          ">" +
          "<span onclick=\"PlayPause(&apos;au1&apos;,&apos;" +
          spaceReplacer +
          '&apos;)" style="opacity: 30%;margin-top: 3px;right: 85px;" class="play" onclick="play_m(this);"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="blue"><path d="M2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1zm2.765 5.576A.5.5 0 0 0 6 7v5a.5.5 0 0 0 .765.424l4-2.5a.5.5 0 0 0 0-.848l-4-2.5z"/><path d="M1.5 14.5A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5h-13zm13-1a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5h-13A.5.5 0 0 0 1 6v7a.5.5 0 0 0 .5.5h13z"/></g></svg></span></span>' +
          "<h1 class=\"page-title\">" +
          Number(i + 1) +
          ". " +
          arr_surat[i]["replace"](/_/g, " ") +
          ' <sup class="ay_sup">' +
          window[arr_surat[i]]["length"] +
          " ayat</sup><sup class=\"tu_sup\">" +
          turun(arr_surat[i]) +
          "</sup></h1></header>" +
          bismi +
          "<ol id=" +
          arr_surat[i] +
          "></ol></hedi>");
      generate_surat(arr_surat[i], window[arr_surat[i]]);
    }
    setTimeout(function () {
      document["getElementsByClassName"]("surat")[0]
        ["querySelectorAll"]("hedi")
        ["forEach"](function (myPreferences, canCreateDiscussions) {
          if (!myPreferences["innerHTML"]["includes"]("</li>")) {
            myPreferences["remove"]();
          }
        });
      document["getElementsByClassName"]("surat")[0]["style"][
        "visibility"
      ] = "visible";
      document["getElementById"]("loading")["style"][
        "display"
      ] = "none";
    }, 1e3);
  } else {
    if (webColor === null) {
      n = 0;
      columnCount = n;
    } else {
      n = Number(arr_surat["indexOf"](webColor["replace"](/_\d+/g, "")));
      columnCount = n;
    }
    i = n;
    for (; i <= columnCount; i++) {
      spaceReplacer = au_surat + escape(arr_files[i]) + ".m4a";
      if (arr_surat[i] != "at_taubah" && i != 0) {
        bismi = "<p style=\"padding-top:40px;background: " + getColor() + "\" class=\"bismillah\">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</p>";
      } else {
        bismi = "<p style=\"padding-top:30px;\"></p>";
      }
      ol_surat =
        "<hedi><header class=\"nama_surat\" id=surat_" +
        arr_surat[i] +
        ' style="position:fixed;width:100%;z-index: 1;">' +
        "<span onclick=\"PlayPause(&apos;au1&apos;,&apos;" +
        spaceReplacer +
        "&apos;)\" style=\"opacity: 30%;margin-top: 3px;right: 85px;\" class=\"play\" onclick=\"play_m(this);\"><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" aria-hidden=\"true\" focusable=\"false\" width=\"1em\" height=\"1em\" style=\"-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 16 16\"><g fill=\"blue\"><path d=\"M2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1zm2.765 5.576A.5.5 0 0 0 6 7v5a.5.5 0 0 0 .765.424l4-2.5a.5.5 0 0 0 0-.848l-4-2.5z\"/><path d=\"M1.5 14.5A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5h-13zm13-1a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5h-13A.5.5 0 0 0 1 6v7a.5.5 0 0 0 .5.5h13z\"/></g></svg></span></span>" +
        "<h1 class=\"page-title\">" +
        Number(i + 1) +
        ". " +
        arr_surat[i]["replace"](/_/g, " ") +
        " <sup class=\"ay_sup\">" +
        window[arr_surat[i]]["length"] +
        " ayat</sup><sup class=\"tu_sup\">" +
        turun(arr_surat[i]) +
        "</sup></h1></header>" +
        bismi +
        "<ol id=" +
        arr_surat[i] +
        "></ol></hedi>";
      generate_surat(arr_surat[i], window[arr_surat[i]]);
    }
    document["getElementsByClassName"]("surat")[0]["style"][
      "visibility"
    ] = "visible";
    document["getElementById"]("loading")["style"]["display"] =
      "none";
  }
  document["getElementsByClassName"]("surat")[0]["innerHTML"] = ol_surat[
    "replace"
  ](/undefined/gm, "");
  render();
}

function generate_surat(name, obj) {
  var allObservablesForObject = Object["keys"](obj);
  var sep;
  var _0x53b925;
  var pix_color = "";
  var errroText;
  var authorWithColor;
  var dataToLog;
  var _upServersSorted;
  var _0x47ba2f;
  var namespace;
  var slackMessage;
  var zoneFileTemplate;
  var icon;
  var versionedName;
  var bps;
  var entry;
  var entryToSend;
  var alterTableOp;
  if (localStorage["getItem"]("set_ukuran") == "small") {
    versionedName = "1.4em";
  } else {
    if (localStorage["getItem"]("set_ukuran") == "medium") {
      versionedName = "1.9em";
    } else {
      if (localStorage["getItem"]("set_ukuran") == "large") {
        versionedName = "2.4em";
      } else {
        versionedName = "1.4em";
      }
    }
  }
  if (localStorage["getItem"]("set_hafiz") == "1") {
    var errroText;
    if (userLang == "id-ID") {
      errroText = "</span><b> Mode Hafiz:</b><br>&#x2714; Hanya menampilkan kata depan saja, untuk melihat selengkapnya ketuk pada ayat <br>&#x2714; Ceklis pada tombol &#9745; Hafal untuk menandai hafalan";
    } else {
      errroText =
        "</span><b> Hafiz Mode: </b><br>&#x2714; Only display the preposition only, to see the full verse tap on the verse <br>&#x2714; Checkmark &#9745; Memorized to mark memorization";
    }
    mui_dialog(
      "<span style=\"color:gold;font-size:20px;\">" +
        document["getElementById"]("hafiz")["innerHTML"] +
        errroText
    );
    document["getElementById"]("hafiz")["setAttribute"](
      "data-toggled",
      "1"
    );
    document["getElementById"]("hafiz")["style"][
      "backgroundColor"
    ] = "gold";
    zoneFileTemplate = "none";
    slackMessage = "block";
    icon = "unset";
    localStorage["setItem"]("set_latin", "0");
    localStorage["setItem"]("set_arti", "0");
  } else {
    document["getElementById"]("hafiz")["setAttribute"](
      "data-toggled",
      "0"
    );
    document["getElementById"]("hafiz")["removeAttribute"]("style");
    zoneFileTemplate = "block";
    slackMessage = "none";
    icon = "none";
  }
  if (localStorage["getItem"]("set_latin") == "checked") {
    errroText = "block";
  } else {
    errroText = "none";
  }
  if (localStorage["getItem"]("set_arti") == "checked") {
    authorWithColor = "block";
  } else {
    authorWithColor = "none";
  }
  if (localStorage["getItem"]("set_latar") == "bg_adem") {
    dataToLog = "bg_adem";
  } else {
    dataToLog = "no_bg";
  }
  var exactlyMatchedPattern = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" aria-hidden=\"true\" focusable=\"false\" width=\"1em\" height=\"1em\" style=\"-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 24 24\"><g fill=\"none\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18zm0 2c6.075 0 11-4.925 11-11S18.075 1 12 1S1 5.925 1 12s4.925 11 11 11z\" fill=\"blue\"></path><path d=\"M16 12l-6 4.33V7.67L16 12z\" fill=\"blue\"></path></g></svg>";
  var caMetric = "سَجَدَ وَجْهِي لِلَّذِي خَلْقَهُ وَصَوَّرَهُ وَشَقَّ سَمْعَهُ وَبَصَرَهُ فَتَبَارَكَ اللَّهُ أَحْسَنُ الْخَالِقِينَ";
  var eaMetric = "Wajahku bersujud kepada Rabb yang telah menciptakannya, yang membelah pendengarannya dan penglihatannya dengan daya dan kekuatan-Nya, maka Mahasuci Allâh sebaik-baik Pencipta";
  var _0x53abc6 = "ً ٌ ٍ ً";
  var wrapper =
    /(([\u064d\u064c\u064b]+[\u0627|\u0649|\u06d9]\s+|\u0646\u0652|\u0646\u0652\s+|\u064c\s+|\u064b\s+|\u064d\s+|(\u064c\u064b\u064d))[\u0643|\u0642|\u0641|\u0638|\u0637|\u0636|\u0635|\u0634|\u0633|\u0632|\u0630|\u062f|\u062c|\u062b|\u062a])/g;
  var tokensRegExp =
    /((\u0646\u0652|\u0627 \u06e2\u064b |\u0627\u06e2 |\u0646\u0652\s+|\u0646\u0652\u06e2\s+|\u064c\s+|\u064b\s+|\u064d\s+|[\u064d\u064c\u064b]\u06e2\s+|[\u064d\u064c\u064b]\u06e2|[\u064d\u064c\u064b])[\u0628])/g;
  var rcharset =
    /(([\u064d\u064c\u064b]+[\u0627|\u0649|\u06d9]\s+|\u0646\u0652|\u0646\u0652\s+|\u064c\s+|\u064b\s+|\u064d\s+|(\u064c\u064b\u064d))[\u0648|\u0645|\u0646|\u064a])/g;
  var rvolatile =
    /(([\u064d\u064c\u064b]+[\u0627|\u0649|\u06d9]\s+|\u0646\u0652|\u0646\u0652\s+|\u064c\s+|\u064b\s+|\u064d\s+|(\u064c\u064b\u064d))[\u0644|\u0631])/g;
  var rfilterName = /((\u0645\u0652|\u0645\u0652\s+)[\u0645])/g;
  var _digitExpr = /((\u0645\u0652|\u0645\u0652\s+)[\u0628])/g;
  var yieldRe = /([\u0646|\u0645]+\u0651)/g;
  var d =
    /(([\u0642|\u0637|\u062f|\u062c|\u0628][\u0652])|([\u0642|\u0637|\u062f|\u062c|\u0628][\u0651][\u064e|\u064b|\u064f|\u064c|\u0651|\u0650|\u064d][\u06d7|\u06d8|\u06d6|\u06db|\u06da|\u06d9])|([\u0642|\u0637|\u062f|\u062c|\u0628][\u064d\u064d|\u0650|\u0652|\u0651|\u064c|\u064f|\u064b|\u064e][\u06d7|\u06d8|\u06d6|\u06db|\u06da|\u06d9]))/g;
  var mm = "<u class=\"ikhfa\" onclick='tajwid(this.className)'>$1</u>";
  var artistTrack =
    "<u class=\"iqlab\" onclick='tajwid(this.className)'>$1</u>";
  var passedMsg = "<u class=\"bigunah\" onclick='tajwid(this.className)'>$1</u>";
  var CLUSTER_ID = "<u class=\"bilagunah\" onclick='tajwid(this.className)'>$1</u>";
  var DISK_FULL_NAME = "<u class=\"mimi\" onclick='tajwid(this.className)'>$1</u>";
  var flagStyle = "<u class=\"ifa_safawi\" onclick='tajwid(this.className)'>$1</u>";
  var _maskLayer = "<u class=\"gunah\" onclick='tajwid(this.className)'>$1</u>";
  var hh = "<u class=\"qalqalah\" onclick='tajwid(this.className)'>$1</u>";
  var i = 0;
  for (; i < obj["length"]; i++) {
    bps = obj[i]["at"];
    entry =
      window[
        "en_" + pad(Number(arr_surat["indexOf"](name) + 1), 3)
      ][i];
    sep = Number(arr_surat["indexOf"](name) + 1) + "." + obj[i]["id"];
    file =
      pad(Number(arr_surat["indexOf"](name) + 1), 3) +
      pad(obj[i]["id"], 3) +
      ".m4a";
    _upServersSorted = obj[i]["ar"]
      ["trim"]()
      ["replace"](/\u06de/g, "")
      ["trim"]();
    _0x47ba2f =
      _upServersSorted["split"](" ")["map"](function (result) {
        return result["trim"]();
      })[0] + " . . .";
    if (
      localStorage["getItem"]("hz_" + sep) != null &&
      localStorage["getItem"]("hz_" + sep) == "1"
    ) {
      namespace = "checked";
    } else {
      namespace = "";
    }
    if (userLang == "id-ID") {
      entryToSend = bps;
      alterTableOp = "Hafal";
    } else {
      entryToSend = entry;
      alterTableOp = "Memorized";
    }
    pix_color =
      pix_color +
      ("<li onclick=\"klik_ayat(&apos;" +
        name +
        "_" +
        obj[i]["id"] +
        "&apos;,&apos;" +
        file +
        "&apos;);\" id=" +
        name +
        "_" +
        obj[i]["id"] +
        " style=\"background: " +
        getColor() +
        "\" class=\"" +
        dataToLog +
        '">' +
        '<sup class="no_ayat" style="' +
        latar_juz(sep) +
        '">' +
        sep +
        " " +
        no_juz(sep) +
        "</sup>" +
        "<div class=\"mui-checkbox\"><label style=\"float: left !important;\"><input id=\"" +
        sep +
        "\" onclick=\"hafal(this.id)\" type=\"checkbox\" " +
        namespace +
        "><u style=\"text-decoration: none;margin-top:1px;display:" +
        slackMessage +
        '">' +
        alterTableOp +
        "</u></label><span class=\"hafiz\" onclick=\"show_ayat(this);\" style=\"display:" +
        slackMessage +
        '">' +
        _0x47ba2f +
        "</span></div>" +
        "<span class=\"ayat\" title=\"" +
        name +
        " ayat " +
        obj[i]["id"] +
        '" style="display:' +
        zoneFileTemplate +
        ";font-size:" +
        versionedName +
        '">' +
        obj[i]["ar"]
          ["replace"](wrapper, mm)
          ["replace"](tokensRegExp, artistTrack)
          ["replace"](rcharset, passedMsg)
          ["replace"](rvolatile, CLUSTER_ID)
          ["replace"](rfilterName, DISK_FULL_NAME)
          ["replace"](_digitExpr, flagStyle)
          ["replace"](yieldRe, _maskLayer)
          ["replace"](d, hh)
          ["replace"](
            /\u06e9/g,
            "<span style=\"color:chocolate; \"onclick=\"ayat_sajdah(&apos;" +
              caMetric +
              "&apos;,&apos;" +
              eaMetric +
              "&apos;)\">۩</span>"
          ) +
        '<span onclick="PlayPause(&apos;au1&apos;,&apos;' +
        au_ayat +
        file +
        "&apos;)\" class=\"putar\" style=\"display:" +
        icon +
        "\"> " +
        exactlyMatchedPattern +
        "</span></span>" +
        "<span class=\"bacaan\" style=\"display:" +
        errroText +
        '">' +
        obj[i]["bc"] +
        "</span>" +
        "<span class=\"arti\" style=\"display:" +
        authorWithColor +
        '">' +
        entryToSend +
        "</span>" +
        "</li>");
    if (obj["length"] - 1 === i) {
    }
  }
  setTimeout(function () {
    document["getElementById"](name)["innerHTML"] = pix_color;
  }, 1e3);
}

function ayat_sajdah(isSlidingUp, runCounter) {
  alert("Ayat Sajdah, disunnahkan Sujud Tilawah sambil berdoa:" + "\n\r" + isSlidingUp + "\n\r" + runCounter);
}

function generate_hafalan() {
  if (userLang == "id-ID") {
    ket = ["Pencapaian Hafalan"];
  } else {
    ket = ["Achievement of Memorization"];
  }
  var ret = "";
  var spaceReplacer = "0";
  var time = "0";
  var refPrefix;
  var count;
  var seconds = Number("0");
  var tagName = 0;
  for (; tagName < arr_surat["length"]; tagName++) {
    refPrefix =
      Number(tagName + 1) +
      ". " +
      capitalizeName(arr_surat[tagName]["replace"](/_/g, " "));
    count = window[arr_surat[tagName]]["length"];
    time = filterkeyname("hz_" + Number(tagName + 1) + ".")["length"];
    spaceReplacer = (Number(time / count) * Number(100))["toFixed"](1);
    ret =
      ret +
      ("<li onclick=\"go_hash(&apos;" +
        arr_surat[tagName] +
        "&apos;)\"><div class=\"progress\" style=\"background-size:" +
        spaceReplacer +
        "% 100% !important;\"><b>" +
        refPrefix +
        "</b><br>" +
        time +
        "/" +
        count +
        " (" +
        spaceReplacer +
        "%)</div> </li>");
    seconds = seconds + Number(count);
  }
  pencapaian = filterkeyname("hz_")["length"];
  persentase = (Number(pencapaian / seconds) * Number(100))["toFixed"](1);
  document["getElementById"]("hafalan")["innerHTML"] =
    "<b>" +
    ket[0] +
    " Surat (" +
    persentase +
    "%)</b><br><ul id=\"progress\">" +
    ret["replace"](/undefined/gm, "") +
    "</ul>";
}
generate_hafalan();

function generate_hafalan_juz() {
  var _0x2d6de5 = filterkeyname("hz_");
  if (userLang == "id-ID") {
    ket = ["Pencapaian Hafalan"];
  } else {
    ket = ["Achievement of Memorization"];
  }
  var ret = "";
  var _0x3b42d8 = "0";
  var time = "0";
  var _iso8859Str;
  var count;
  var seconds = Number("0");
  var _FOO_;
  var i = 0;
  for (; i < arr_juz["length"]; i++) {
    _FOO_ =
      arr_surat[Number(arr_juz[i]["split"](".")[0] - 1)] +
      "_" +
      arr_juz[i]["split"](".")["pop"]();
    _iso8859Str = "Juz " + Number(i + 1);
    count = db_juz[i]["length"];
    time = hitung_ayat_juz(i);
    _0x3b42d8 = (Number(time / count) * Number(100))["toFixed"](1);
    ret =
      ret +
      ("<li onclick=\"go_hash(&apos;" +
        _FOO_ +
        "&apos;,&apos;" +
        Number(i + 1) +
        '&apos;)"><div class="progress" style="background-size:' +
        _0x3b42d8 +
        '% 100% !important;"><b>' +
        _iso8859Str +
        "</b><br>" +
        time +
        "/" +
        count +
        " (" +
        _0x3b42d8 +
        "%)</div> </li>");
    seconds = seconds + Number(count);
  }
  pencapaian = filterkeyname("hz_")["length"];
  persentase = (Number(pencapaian / seconds) * Number(100))["toFixed"](1);
  document["getElementById"]("hafalan_juz")["innerHTML"] =
    "<b>" +
    ket[0] +
    " Juz (" +
    persentase +
    "%)</b><br><ul id=\"progress\">" +
    ret["replace"](/undefined/gm, "") +
    "</ul>";
}
generate_hafalan_juz();

function hitung_ayat_juz(itemSetIndex) {
  var rpm_traffic = db_juz[itemSetIndex];
  var start = "hz_";
  var Aerial = rpm_traffic["map"](function (packetLength) {
    return start + packetLength;
  });
  var AerialWithLabels = filterkeyname("hz_");
  var VALID_IMAGERY_SETS = [Aerial, AerialWithLabels];
  var initialViewModelData = VALID_IMAGERY_SETS["shift"]()["filter"](function (
    leftFence
  ) {
    return VALID_IMAGERY_SETS["every"](function (myPreferences) {
      return myPreferences["indexOf"](leftFence) !== -1;
    });
  });
  return initialViewModelData["length"];
}

function _toConsumableArray(arr) {
 if (Array.isArray(arr)) {
   var i = 0;
   var arr2 = Array(arr.length);
   for (; i < arr.length; i++) {
     arr2[i] = arr[i];
   }
   return arr2;
 } else {
   return Array.from(arr);
 }
}

function unique_arr(arr1) {
  return [].concat(_toConsumableArray(new Set(arr1)));
}

function get_surat_juz(s) {
  var arr_filter;
  return (
    (arr_filter = db_juz[Number(s - 1)]["map"](function (
      myPreferences
    ) {
      return myPreferences["split"](".")[0];
    })),
    unique_arr(arr_filter)
  );
}

function muat_juz(p_dom_object_id) {
  var m;
  var PL$53 = get_surat_juz(p_dom_object_id);
  console["log"](PL$53);
  var PL$54 = 0;
  for (; PL$54 < PL$53["length"]; PL$54++) {
    m = arr_surat[Number(PL$53[PL$54] - 1)];
    generate_surat(m, window[m]);
    console["log"](m);
  }
}

function go_hash(view, movementId) {
  var href = view["replace"](/surat_/, "");
  var line = href["match"](/\d+/g);
  var _0x431b3e = arr_surat["indexOf"](href["replace"](/_\d+/g, ""));
  if (view != "hafalan_juz" && view != "doa") {
    document["getElementById"]("doa")["style"]["display"] = "none";
    localStorage["setItem"]("buka", href);
    if (movementId != null) {
      muat(href, movementId);
    } else {
      muat(href);
    }
    if (line != null) {
      setTimeout(function () {
        window["location"]["replace"](
          "index.html#" + href["replace"](/\d+/g, "") + Number(line - 1)
        );
      }, 1e3);
    } else {
      setTimeout(function () {
        window["scrollTo"](0, 0);
      }, 1e3);
    }
  } else {
    document["getElementsByClassName"]("surat")[0]["innerHTML"] = "";
    window["location"]["replace"]("index.html#" + href);
    autocomplete_result["style"]["display"] = "none";
    setTimeout(function () {
      window["scrollTo"](0, 0);
    }, 200);
  }
}

function getColor() {
  return (
    "hsl(" +
    360 * Math["random"]() +
    "," +
    (25 + 70 * Math["random"]()) +
    "%," +
    (85 + 10 * Math["random"]()) +
    "%)"
  );
}

function hapus_el(name) {
  var receiver = document["querySelectorAll"](name);
  var p = 0;
  for (; p < receiver["length"]; p++) {
    receiver[p]["remove"]();
  }
}

function show_el(name) {
  var receiver = document["querySelectorAll"](name);
  var p = 0;
  for (; p < receiver["length"]; p++) {
    receiver[p]["style"]["display"] = "block";
  }
}

function hide_el(value) {
  var params = document["querySelectorAll"](value);
  var i = 0;
  for (; i < params["length"]; i++) {
    params[i]["style"]["display"] = "none";
  }
}

function hapus_atr(name, whenArray) {
  var PL$13 = document["querySelectorAll"](name);
  var PL$17 = 0;
  for (; PL$17 < PL$13["length"]; PL$17++) {
    PL$13[PL$17]["removeAttribute"](whenArray);
  }
}

function set_atr(name, isLocal, body) {
  var receiver = document["querySelectorAll"](name);
  var p = 0;
  for (; p < receiver["length"]; p++) {
    receiver[p]["setAttribute"](isLocal, body);
  }
}

function popupClearAndHide() {
  autocomplete_result["innerHTML"] = "";
  autocomplete_result["style"]["display"] = "none";
  document["getElementById"]("search")["value"] = "";
}
RegExp["escape"] = function (myPreferences) {
  return myPreferences["replace"](
    /[-\/\\^$*+?.()|[\]{}]/g,
    "\\_0x4dab9b(332)"
  );
};

function updPopup() {
  var _0x4218f7;
  var _0x13265c;
  if (userLang == "id-ID") {
    _0x4218f7 = ["Terakhir Dibaca", "ayat"];
  } else {
    _0x4218f7 = ["Last read", "verses"];
  }
  if (!search["value"]) {
    popupClearAndHide();
    return;
  }
  var route = new RegExp(
    RegExp["escape"](search["value"]["replace"](/ /g, "_")),
    "i"
  );
  var i = 0;
  var CustomTests = document["createDocumentFragment"]();
  var _0x335378 = ![];
  for (; i < arr_surat["length"]; i++) {
    if (userLang == "id-ID") {
      _0x13265c = surah[i][3];
    } else {
      _0x13265c = surah[i][7];
    }
    if (route["test"](arr_surat[i])) {
      _0x335378 = !![];
      var element = document["createElement"]("p");
      var _FOO_ = arr_surat[i]["replace"](/ /g, "_")["toLowerCase"]();
      element["innerHTML"] =
        "<b>" +
        Number(i + 1) +
        ". " +
        arr_surat[i]["replace"](/_/g, " ") +
        "</b> " +
        surah[i][2] +
        " (" +
        _0x13265c +
        ") " +
        window[arr_surat[i]]["length"] +
        " " +
        _0x4218f7[1];
      element["setAttribute"](
        "onclick",
        "go_hash('surat_" + _FOO_ + "');autocomplete_result.innerHTML='';autocomplete_result.style.display='none';"
      );
      CustomTests["appendChild"](element);
    }
  }
  if (_0x335378 == !![]) {
    var _0x3d4c61 =
      '<p onclick="terakhir_baca();">&#128214; <b>' +
      _0x4218f7[0] +
      "</b></p>";
    autocomplete_result["innerHTML"] = "";
    autocomplete_result["style"]["display"] = "block";
    autocomplete_result["appendChild"](CustomTests);
    return;
  }
  popupClearAndHide();
}

function fokus() {
  document["getElementById"]("search")["click"]();
}
search["addEventListener"]("keyup", updPopup),
  search["addEventListener"]("change", updPopup),
  search["addEventListener"]("focus", updPopup_show),
  document["getElementById"]("nav-trigger")["nextElementSibling"]["addEventListener"](
    "click",
    popupClearAndHide
  );
if (userLang == "id-ID") {
  document["getElementById"]("search")["setAttribute"](
    "placeholder",
    "Ketik nama surat & pilih"
  );
} else {
  document["getElementById"]("search")["setAttribute"](
    "placeholder",
    "Type surah name & select"
  );
}

function updPopup_show() {
  var r;
  var _0x58c7f2;
  if (userLang == "id-ID") {
    r = ["Terakhir Dibaca", "ayat", "Doa-doa di dalam al-Quran"];
  } else {
    r = ["Last read", "verses", "Prayers of the Quran"];
  }
  var e = new RegExp(
    RegExp["escape"](search["value"]["replace"](/ /g, "_")),
    "i"
  );
  var i = 0;
  var CustomTests = document["createDocumentFragment"]();
  var _0x5ee6d4 = ![];
  for (; i < arr_surat["length"]; i++) {
    if (userLang == "id-ID") {
      _0x58c7f2 = surah[i][3];
    } else {
      _0x58c7f2 = surah[i][7];
    }
    if (e["test"](arr_surat[i])) {
      _0x5ee6d4 = !![];
      var element = document["createElement"]("p");
      var _FOO_ = arr_surat[i]["replace"](/ /g, "_")["toLowerCase"]();
      element["innerHTML"] =
        "<b>" +
        Number(i + 1) +
        ". " +
        arr_surat[i]["replace"](/_/g, " ") +
        "</b> " +
        surah[i][2] +
        " (" +
        _0x58c7f2 +
        ") " +
        window[arr_surat[i]]["length"] +
        " " +
        r[1];
      element["setAttribute"](
        "onclick",
        "go_hash('surat_" + _FOO_ + "');autocomplete_result.innerHTML='';autocomplete_result.style.display='none';"
      );
      CustomTests["appendChild"](element);
    }
  }
  var groupNamePrefix = "<p onclick=\"terakhir_baca();\">&#128214; <b>" + r[0] + "</b></p>";
  var alignContentAlignItem = "<p onclick=\"doa_khatam();\">&#129330; <b>Doa Khatam Quran</b></p>";
  var dupeNameCount = "<p onclick=\"list_doa();\">&#129330; <b>" + r[2] + "</b></p>";
  autocomplete_result["innerHTML"] = "";
  autocomplete_result["style"]["display"] = "block";
  autocomplete_result["appendChild"](CustomTests);
  autocomplete_result["innerHTML"] =
    groupNamePrefix +
    alignContentAlignItem +
    dupeNameCount +
    autocomplete_result["innerHTML"];
  return;
}

function toggle_set_contextmenu(str) {
  var props = document["getElementById"](str);
  if (props["checked"]) {
    props["checked"] = !![];
    localStorage["setItem"](str, "checked");
  } else {
    props["checked"] = ![];
    localStorage["setItem"](str, "");
  }
}

function toggle_set_latar(str) {
  var rpm_traffic = document["getElementById"](str);
  if (rpm_traffic["checked"]) {
    rpm_traffic["checked"] = !![];
    localStorage["setItem"](str, "no_bg");
    document["querySelectorAll"]("ol > li")["forEach"](function (
      baseSnapshotAggregates
    ) {
      baseSnapshotAggregates["className"] = "no_bg";
    });
  } else {
    rpm_traffic["checked"] = ![];
    localStorage["setItem"](str, "bg_adem");
    document["querySelectorAll"]("ol > li")["forEach"](function (
      myPreferences
    ) {
      myPreferences["className"] = "bg_adem";
    });
  }
}

function toggle_set_color(str) {
  var props = document["getElementById"](str);
  if (props["checked"]) {
    props["checked"] = !![];
    localStorage["setItem"](str, "0");
    document["querySelectorAll"]("ol > li > span > u")["forEach"](function (
      myPreferences
    ) {
      myPreferences["removeAttribute"]("style");
    });
  } else {
    props["checked"] = ![];
    localStorage["setItem"](str, "c_black");
    document["querySelectorAll"]("ol > li > span > u")["forEach"](function (
      el
    ) {
      el["setAttribute"]("style", "color:black !important;");
    });
  }
}

function toggle(str, values, display) {
  function hide(data) {
    return (
      window["getComputedStyle"](data, null)["getPropertyValue"]("display") ===
      "none"
    );
  }
  var frontpageItems = document["getElementById"](str);
  var result;
  var i;
  values = values["length"] ? values : [values];
  i = 0;
  for (; i < values["length"]; i++) {
    result = values[i];
    if (hide(result)) {
      frontpageItems["checked"] = !![];
      localStorage["setItem"](str, "checked");
      result["style"]["display"] = "";
      if (hide(result)) {
        result["style"]["display"] = display || "block";
      }
    } else {
      frontpageItems["checked"] = ![];
      localStorage["setItem"](str, "0");
      result["style"]["display"] = "none";
    }
  }
}

function notif_ayat(myPreferences) {
  go_hash(localStorage["getItem"]("buka"));
  var anonUsersRooms;
  if (userLang == "id-ID") {
    anonUsersRooms =
      "Cari di surat " +
      capitalizeName(
        localStorage["getItem"]("buka")["replace"](/_/g, " ")
      ) +
      "..!";
  } else {
    anonUsersRooms =
      "Search in surah " +
      capitalizeName(
        localStorage["getItem"]("buka")["replace"](/_/g, " ")
      ) +
      "..!";
  }
  if (myPreferences["textContent"] != "X") {
    if (localStorage["getItem"]("set_hafiz") == "1") {
      localStorage["setItem"]("set_hafiz", "0");
      localStorage["setItem"]("set_arti", "checked");
      show_el(".arti");
      alert(anonUsersRooms);
      muat(localStorage["getItem"]("buka"));
    } else {
      localStorage["setItem"]("set_arti", "checked");
      show_el(".arti");
      alert(anonUsersRooms);
      setTimeout(function () {
        show_el(".arti");
      }, 100);
    }
  }
}
var shouldScroll = ![];

function scroll() {
  if (!shouldScroll) {
    return;
  }
  window["scrollBy"](0, 1);
  setTimeout(scroll, 120);
}
document["getElementById"]("gulir")["addEventListener"](
  "click",
  function () {
    this["innerHTML"] = (this["dataset"]["toggled"] ^= 1)
      ? "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" aria-hidden=\"true\" focusable=\"false\" width=\"1em\" height=\"1em\" style=\"-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 24 24\"><path d=\"M10 18a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v12zm7 0a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v12z\" fill=\"white\" fill-rule=\"evenodd\"/></svg>"
      : "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" aria-hidden=\"true\" focusable=\"false\" width=\"1em\" height=\"1em\" style=\"-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 24 24\"><path d=\"M16.939 10.939L12 15.879l-4.939-4.94l-2.122 2.122L12 20.121l7.061-7.06z\" fill=\"black\"/><path d=\"M16.939 3.939L12 8.879l-4.939-4.94l-2.122 2.122L12 13.121l7.061-7.06z\" fill=\"black\"/></svg>";
    shouldScroll = !shouldScroll;
    scroll();
  }
);
var hafiz;
if (localStorage["getItem"]("set_hafiz") == "1") {
  hafiz = !![];
} else {
  hafiz = ![];
}

function hafizin() {
  if (userLang == "id-ID") {
    ket = ["Mode normal aktif", "Mode hafiz diaktifkan"];
  } else {
    ket = ["Normal mode enabled", "Hafiz mode enabled"];
  }
  if (!hafiz) {
    alert(ket[0]);
    localStorage["setItem"]("set_hafiz", "0");
    muat(localStorage["getItem"]("buka"));
    return;
  }
  hafizin;
  alert(ket[1]);
  localStorage["setItem"]("set_latin", "0");
  localStorage["setItem"]("set_arti", "0");
  localStorage["setItem"]("set_hafiz", "1");
  muat(localStorage["getItem"]("buka"));
}
document["getElementById"]("hafiz")["addEventListener"](
  "click",
  function () {
    this["style"]["backgroundColor"] = (this["dataset"][
      "toggled"
    ] ^= 1)
      ? "gold"
      : "none";
    hafiz = !hafiz;
    hafizin();
  }
);

function hafal(name) {
  setTimeout(function () {
    close_mui_dialog();
  }, 10);
  var elm = document["getElementById"](name);
  if (elm["checked"]) {
    localStorage["setItem"]("hz_" + name, "1");
  } else {
    localStorage["removeItem"]("hz_" + name);
  }
  generate_hafalan();
  generate_hafalan_juz();
}
var cs_bacaan = document["getElementsByClassName"]("bacaan")[0];
var cs_arti = document["getElementsByClassName"]("arti")[0];
document["getElementById"]("atur")["addEventListener"](
  "click",
  function () {
    pengaturan();
  }
);

function onLongPress(el, cb) {
  function fn() {
    clearTimeout(_takingTooLongTimeout);
  }
  var _takingTooLongTimeout = void 0;
  el["addEventListener"]("touchstart", function () {
    _takingTooLongTimeout = setTimeout(function () {
      _takingTooLongTimeout = null;
      cb();
    }, 500);
  });
  el["addEventListener"]("touchend", fn);
  el["addEventListener"]("touchmove", fn);
}
setTimeout(function () {
  document["querySelectorAll"](".arti")["forEach"](function (
    myPreferences
  ) {
    myPreferences["addEventListener"](
      "click",
      function (canCreateDiscussions) {}
    );
  });
  document["querySelectorAll"]("ol > li")["forEach"](function (e) {
    onLongPress(e, function () {});
  });
}, 9e3);

function tandai(datum) {
  var tmp;
  if (userLang == "id-ID") {
    tmp = ["Ayat ini ditandai sebagai Terakhir Baca"];
  } else {
    tmp = ["This verse is marked as Last Read"];
  }
  alert(tmp[0]);
  localStorage["setItem"]("terakhir_baca", datum);
}

function terakhir_baca() {
  var tmp;
  if (userLang == "id-ID") {
    tmp = ["Terakhir dibaca", "Belum ada ayat yang ditandai sebagai Terakhir Baca \nSilahkan ketuk pada salah satu ayat untuk menandai"];
  } else {
    tmp = ["Last read", "There are no verses marked as Last Read. \nPlease tap on a verse to mark it"];
  }
  var str = localStorage["getItem"]("terakhir_baca");
  if (str != null) {
    alert(tmp[0] + " " + capitalizeName(str["replace"](/_/g, " ")));
    go_hash(str);
  } else {
    alert(tmp[1]);
  }
  autocomplete_result["innerHTML"] = "";
  autocomplete_result["style"]["display"] = "none";
}
document["getElementById"]("tanda")["addEventListener"]("click", function () {
  terakhir_baca();
}),
  document["getElementById"]("capaian")["addEventListener"](
    "click",
    function () {
      buka_hafalan();
    }
  ),
  document["getElementById"]("nav-trigger")["addEventListener"](
    "change",
    function () {
      if (document["getElementById"]("nav-trigger")["checked"] === !![]) {
        document["getElementById"]("search")["focus"]();
        document["getElementById"]("cool_find_btn")["style"]["display"] =
          "none";
      } else {
        document["getElementById"]("cool_find_btn")["style"][
          "display"
        ] = "block";
      }
    }
  );

function capitalizeName(myPreferences) {
  return myPreferences["replace"](/\b(\w)/g, function (myPreferences) {
    return myPreferences["toUpperCase"]();
  });
}

function clearID() {
  if (arguments["length"] > 0) {
    var i = 0;
    for (; i < arguments["length"]; i++) {
      document["getElementById"](arguments[i])["value"] = "";
    }
  }
}

function hapus_atr(name, whenArray) {
  var receiver = document["querySelectorAll"](name);
  var p = 0;
  for (; p < receiver["length"]; p++) {
    receiver[p]["removeAttribute"](whenArray);
  }
}

function el(name) {
  return document["getElementById"](name);
}

function els(query, path) {
  return document["getElementsByClassName"](query)[path];
}

function close_mui_dialog() {
  el = document["getElementById"]("mui-overlay");
  if (el != null) {
    el["remove"]();
  }
  document["body"]["removeAttribute"]("class");
}

function mui_dialog(url, width) {
  var activeTabWidth =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  var marginLeft = ";this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);document.body.removeAttribute(&apos;class&apos;)";
  var marginRight = ";admob.interstitial.prepare();admob.interstitial.show();";
  var map = document["createElement"]("div");
  map["style"]["minWidth"] = "fit-content";
  map["style"]["maxWidth"] = "300px";
  map["style"]["minHeight"] = "170px";
  map["style"]["margin"] = "auto";
  map["style"]["padding"] = "15px";
  map["style"]["position"] = "absolute";
  map["style"]["top"] = "50%";
  map["style"]["left"] = "50%";
  map["style"]["transform"] = "translate(-50%, -50%)";
  map["style"]["backgroundColor"] = "#fff";
  map["innerHTML"] +=
    '<div class="mui-container"><div class="mui--text-title">' +
    activeTabWidth +
    "</div><br><div class=\"mui--text-body2\">" +
    url +
    "</div></div>";
  map["innerHTML"] +=
    '<button class="mui-btn mui-btn--flat mui-btn--primary" style="float:right;background-color:#eee;margin-left:5px;" onclick=' +
    width +
    marginLeft +
    "><strong>OK</strong></button>";
  if (width != null && width !== 0) {
    map["innerHTML"] +=
      "<button class=\"mui-btn mui-btn--flat\" style=\"float:right;background-color:#eee;\" onclick=" +
      marginLeft +
      marginRight +
      "><strong>Cancel</strong></button>";
  }
  mui["overlay"]("on", map);
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

document["onmouseup"] =
  document["onkeyup"] =
  document["onselectionchange"] =
    function () {
      txt_selected = getSelectionText();
    };

function show_ayat(same) {
  var qrepo = same["parentNode"]["parentNode"]["getElementsByClassName"](
    "ayat"
  )[0];
  qrepo["style"]["display"] = (qrepo["dataset"][
    "toggled"
  ] ^= 1)
    ? "block"
    : "none";
  same["style"]["color"] = (same["dataset"][
    "toggled"
  ] ^= 1)
    ? "gold"
    : "black";
}

function klik_ayat(colorString, size) {
  if (localStorage["getItem"]("contextmenu") == "checked") {
    var _0x34a90d;
    if (userLang == "id-ID") {
      _0x34a90d = [
        "Play ayat",
        "Play Surat",
        "Tandai sebagai Terakhir Baca",
        "Salin Ayat",
        "Bagikan Ayat",
      ];
    } else {
      _0x34a90d = [
        "Play verse",
        "Play surah",
        "Mark as Last Read",
        "Copy verse",
        "Share verse",
      ];
    }
    if (localStorage["getItem"]("set_hafiz") == "1") {
    } else {
      var _FOO_ = capitalizeName(colorString["replace"](/_/g, " "));
      var destination = au_ayat + size;
      var i = Number(
        arr_surat["indexOf"](colorString["replace"](/_\d+/g, ""))
      );
      var _iso8859Str = au_surat + escape(arr_files[i]) + ".m4a";
      var _BAR_ =
        "<span style=\"position:relative;margin:0px;font-size:15px;color:blue;\" class=\"play\" onclick=\"PlayPause(&apos;au1&apos;,&apos;" +
        destination +
        '&apos;);close_mui_dialog()"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18zm0 2c6.075 0 11-4.925 11-11S18.075 1 12 1S1 5.925 1 12s4.925 11 11 11z" fill="blue"/><path d="M16 12l-6 4.33V7.67L16 12z" fill="blue"/></g></svg> ' +
        _0x34a90d[0] +
        "</span>";
      var _0x475343 =
        "<span style=\"position:relative;margin:0px;font-size:15px;color:blue;\" class=\"play_all\" onclick=\"PlayPause(&apos;au1&apos;,&apos;" +
        _iso8859Str +
        '&apos;);close_mui_dialog()"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="blue"><path d="M2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1zm2.765 5.576A.5.5 0 0 0 6 7v5a.5.5 0 0 0 .765.424l4-2.5a.5.5 0 0 0 0-.848l-4-2.5z"/><path d="M1.5 14.5A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5h-13zm13-1a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5h-13A.5.5 0 0 0 1 6v7a.5.5 0 0 0 .5.5h13z"/></g></svg> ' +
        _0x34a90d[1] +
        "</span>";
      mui_dialog(
        "<b>" +
          _FOO_ +
          "</b><a style=margin-left:10px;font-size:18px; onclick=buka_arti('" +
          colorString +
          "');close_mui_dialog()>&#9993;</a><br><br>" +
          _BAR_ +
          "<br><br>" +
          _0x475343 +
          "<br><br><a onclick=tandai('" +
          colorString +
          "');close_mui_dialog()>&#182; " +
          _0x34a90d[2] +
          "</a><br><br>" +
          "<a onclick=salin('" +
          colorString +
          "');close_mui_dialog()>&#10063; " +
          _0x34a90d[3] +
          "</a><br><br>" +
          "<a onclick=bagikan('" +
          colorString +
          "');close_mui_dialog()>&#10149; " +
          _0x34a90d[4] +
          "</a><br>" +
          "&nbsp;"
      );
    }
    setTimeout(function () {
      middle_el(colorString);
    }, 10);
  } else {
    middle_el(colorString);
  }
}

function buka_arti(style) {
  var layoutSets;
  layoutSets =
    "QS: " +
    Array["from"](
      document["getElementById"](style)["children"],
      function (elem) {
        var style = elem.textContent;
        return style["trim"]();
      }
    )
      ["filter"](Boolean)
      ["join"]("\r\n");
  arr_isi = layoutSets["split"]("\r\n");
  saring = arr_isi["filter"](function (
    canCreateDiscussions,
    isSlidingUp
  ) {
    return isSlidingUp == 4;
  });
  arb = arr_isi["filter"](function (canCreateDiscussions, isSlidingUp) {
    return isSlidingUp == 2;
  });
  layoutSets = saring["join"]("\r\n");
  isinya =
    '<p style="text-align:right;float:right;text-shadow: 0 0 black;font-family:litelpmq;background: none !important;">' +
    arb +
    "</p><br><b>" +
    layoutSets +
    "</b></br><sub>" +
    "QS: " +
    capitalizeName(style["replace"](/_/g, " ")) +
    "</sub>";
  setTimeout(function () {
    mui_dialog(isinya);
  }, 10);
}

function salin(name) {
  var anonUsersRooms;
  if (txt_selected == "") {
    anonUsersRooms =
      "QS: " +
      Array["from"](
        document["getElementById"](name)["children"],
        function (result) {
          var courseSections = result.textContent;
          return courseSections["trim"]();
        }
      )
        ["filter"](Boolean)
        ["join"]("\r\n");
    arr_isi = anonUsersRooms["split"]("\r\n");
    saring = arr_isi["filter"](function (canCreateDiscussions, isSlidingUp) {
      return isSlidingUp !== 1;
    });
    anonUsersRooms = saring["join"]("\r\n");
  } else {
    anonUsersRooms = txt_selected;
  }
  if (/Mobi|Android/i["test"](navigator["userAgent"])) {
    cordova["plugins"]["clipboard"]["copy"](anonUsersRooms);
    alert("telah disalin");
  } else {
    alert(anonUsersRooms);
  }
}

function bagikan(name) {
  var element;
  if (txt_selected == "") {
    element =
      "QS: " +
      Array["from"](
        document["getElementById"](name)["children"],
        function (forum) {
          var title = forum.textContent;
          return title["trim"]();
        }
      )
        ["filter"](Boolean)
        ["join"]("\r\n");
    arr_isi = element["split"]("\r\n");
    saring = arr_isi["filter"](function (
      canCreateDiscussions,
      isSlidingUp
    ) {
      return isSlidingUp !== 1;
    });
    element = saring["join"]("\r\n");
  } else {
    element = txt_selected;
  }
  if (/Mobi|Android/i["test"](navigator["userAgent"])) {
    window["plugins"]["socialsharing"]["share"](element);
  } else {
    alert(element);
  }
}
var toggleCSSclasses = function insertRowAndCol(val) {
  var _len5 = arguments.length;
  var listenables = Array(_len5 > 1 ? _len5 - 1 : 0);
  var _key5 = 1;
  for (; _key5 < _len5; _key5++) {
    listenables[_key5 - 1] = arguments[_key5];
  }
  return listenables["map"](function (mmCoreSplitViewBlock) {
    return val["classList"]["toggle"](mmCoreSplitViewBlock);
  });
};
var toggleClass = function toggleClass(openStyle, closedStyle) {
  return openStyle["classList"]["toggle"](closedStyle);
};

function ganti_bg(canCreateDiscussions) {
  toggleClass(document["querySelector"]("ol > li > span > u"), ".c_black");
}

function pengaturan() {
  var r;
  if (userLang == "id-ID") {
    r = [
      "Pengaturan",
      "Tampilkan Latin Arab",
      "Tampilkan Terjemahan",
      "Warna Latar Acak",
      "Tajwid",
      "Ukuran Ayat:",
      "Kecil",
      "Sedang",
      "Besar",
      "Context Menu",
    ];
  } else {
    r = [
      "Settings",
      "Show Latin Arabic",
      "Show Translation",
      "Random Background Color",
      "Tajweed",
      "Verses Size:",
      "Small",
      "Medium",
      "Large",
      "Context Menu",
    ];
  }
  var ourVal;
  var parenthesieSolution;
  var ourSplitFirstPartSolution;
  var current_tag_name;
  var serverMarkdown;
  var messages = "<sub>&#169; App Develop by: <b>Hedi Herdiana</b><br>Support: aahedi@gmail.com</sub>";
  if (localStorage["getItem"]("set_latar") == "no_bg") {
    ourVal = "checked";
  } else {
    ourVal = "0";
  }
  if (localStorage["getItem"]("set_tajwid") == "c_black") {
    parenthesieSolution = "0";
  } else {
    parenthesieSolution = "checked";
  }
  if (localStorage["getItem"]("set_ukuran") == "small") {
    ourSplitFirstPartSolution = "checked";
    current_tag_name = "";
    serverMarkdown = "";
  } else {
    if (localStorage["getItem"]("set_ukuran") == "medium") {
      ourSplitFirstPartSolution = "";
      current_tag_name = "checked";
      serverMarkdown = "";
    } else {
      if (localStorage["getItem"]("set_ukuran") == "large") {
        ourSplitFirstPartSolution = "";
        current_tag_name = "";
        serverMarkdown = "checked";
      } else {
        ourSplitFirstPartSolution = "checked";
        current_tag_name = "";
        serverMarkdown = "";
      }
    }
  }
  var sitesowners =
    "<div class=\"mui-checkbox\"><label><input id=\"contextmenu\" onclick=\"toggle_set_contextmenu(this.id)\" type=\"checkbox\" " +
    localStorage["getItem"]("contextmenu") +
    ">" +
    r[9] +
    "</label> </div>";
  var Userone =
    "<div class=\"mui-checkbox\"><label><input id=\"set_latin\" onclick=\"toggle(this.id,document.querySelectorAll(&apos;.bacaan&apos;))\" type=\"checkbox\" " +
    localStorage["getItem"]("set_latin") +
    ">" +
    r[1] +
    "</label> </div>";
  var Usertwo =
    "<div class=\"mui-checkbox\"><label><input id=\"set_arti\" onclick=\"toggle(this.id,document.querySelectorAll(&apos;.arti&apos;))\" type=\"checkbox\" " +
    localStorage["getItem"]("set_arti") +
    ">" +
    r[2] +
    "</label> </div>";
  var potential_users =
    '<div class="mui-checkbox"><label><input id="set_latar" onclick="toggle_set_latar(this.id)"  type="checkbox" ' +
    ourVal +
    ">" +
    r[3] +
    "</label> </div>";
  var escapedEmail =
    "<div class=\"mui-checkbox\"><label><input id=\"set_tajwid\" onclick=\"toggle_set_color(this.id)\" type=\"checkbox\" " + parenthesieSolution + ">" + r[4] + "</label> </div>";
  var siteName =
    r[5] +
    '<div class="mui-radio"><label onclick="ukuran_ayat(&apos;small&apos;)"><input type="radio" name="ukuran" value="small" ' +
    ourSplitFirstPartSolution +
    ">" +
    r[6] +
    '</label></div><div class="mui-radio"><label onclick="ukuran_ayat(&apos;medium&apos;)"><input type="radio" name="ukuran" value="medium" ' +
    current_tag_name +
    ">" +
    r[7] +
    "</label></div><div class=\"mui-radio\"><label onclick=\"ukuran_ayat(&apos;large&apos;)\"><input type=\"radio\" name=\"ukuran\" value=\"large\" " +
    serverMarkdown +
    ">" +
    r[8] +
    "</label></div>";
  mui_dialog(
    "<b>" +
      r[0] +
      "</b>" +
      Userone +
      Usertwo +
      potential_users +
      escapedEmail +
      sitesowners +
      siteName +
      messages +
      "<br>&nbsp;"
  );
}
document["getElementById"]("game")["addEventListener"]("click", function () {
  game();
});

function ukuran_ayat(datum) {
  var _FOO_;
  if (datum != null) {
    if (datum == "small") {
      _FOO_ = "1.4em";
    } else {
      if (datum == "medium") {
        _FOO_ = "1.9em";
      } else {
        if (datum == "large") {
          _FOO_ = "2.4em";
        }
      }
    }
  } else {
    _FOO_ = "1.4em";
  }
  localStorage["setItem"]("set_ukuran", datum);
  var text = ".hafiz, .ayat, .bismillah{font-family:litelpmq !important;font-size: " + _FOO_ + " !important;}";
  var element = document["createElement"]("style");
  element["id"] = "uk_ayat";
  element["innerHTML"] = text;
  if (document["getElementById"]("uk_ayat") != null) {
    document["getElementById"]("uk_ayat")["innerHTML"] = text;
  } else {
    document["body"]["appendChild"](element);
  }
}

function reverseArr(arr) {
  var umecob = new Array();
  var i = arr["length"] - 1;
  for (; i >= 0; i--) {
    umecob["push"](arr[i]);
  }
  return umecob;
}
var arr_surat_reverse = reverseArr(arr_surat);

function outerHTML(elm) {
  return elm["outerHTML"] || new XMLSerializer()["serializeToString"](elm);
}

function pilihan_game() {
  var buttonStyle;
  if (userLang == "id-ID") {
    buttonStyle = "Pilih Surat";
  } else {
    buttonStyle = "Select Surah";
  }
  var ahref_tag_small = document["createElement"]("div");
  var callbacks = document["createElement"]("select");
  callbacks["id"] = "list_game";
  callbacks["setAttribute"]("style", "font-size: 19px;");
  callbacks["setAttribute"]("onchange", "window.open('game.html#'+this.value,'_self')");
  ahref_tag_small["appendChild"](callbacks);
  var buttons = document["createElement"]("option");
  buttons["setAttribute"]("selected", "true");
  buttons["setAttribute"]("disabled", "disabled");
  buttons["text"] = buttonStyle;
  callbacks["appendChild"](buttons);
  var i = 0;
  for (; i < arr_surat_reverse["length"]; i++) {
    var el = document["createElement"]("option");
    el["value"] =
      Number(arr_surat["indexOf"](arr_surat_reverse[i]) + 1) + "_1";
    el["text"] =
      Number(arr_surat["indexOf"](arr_surat_reverse[i]) + 1) +
      ". " +
      capitalizeName(arr_surat_reverse[i]["replace"](/_/g, " "));
    callbacks["appendChild"](el);
  }
  return outerHTML(ahref_tag_small);
}

function game() {
  var r;
  if (userLang == "id-ID") {
    r = ["Mulai game baru", "Melanjutkan game sebelumnya", "Level Bebas"];
  } else {
    r = ["Starting a new game", "Continuing the previous game", "Free Level"];
  }
  var els;
  var filters;
  if (localStorage["getItem"]("lastgame") != null) {
    els = localStorage["getItem"]("lastgame")["match"](/\d+/g);
    filters =
      "<button class=\"mui-btn mui-btn--flat mui-btn--primary\" onclick=\"window.open(&apos;game.html#" +
      els[0] +
      "_" +
      els[1] +
      "&apos;,&apos;_self&apos;)\"><strong>" +
      r[1] +
      "</strong></button>";
  } else {
    els = [114, 1];
    filters = "";
  }
  var tools_id = "<button class=\"mui-btn mui-btn mui-btn--primary\" onclick=\"window.open(&apos;game.html&apos;,&apos;_self&apos;)\"><strong>" + r[0] + "</strong></button>";
  mui_dialog(
    tools_id +
      "<br>" +
      filters +
      "<br>" +
      r[2] +
      ": " +
      pilihan_game()
  );
}

function filterkeyname(term) {
    var filteredObj = {};
    Object.keys(localStorage)

        .filter(function (key) {
            return key.indexOf(term) >= 0;
        })

        .map(function (key) {
            filteredObj[key] = localStorage.getItem(key);
        });

    return Object.keys(filteredObj);
}

function PlayPause(base, d) {
  var fn;
  if (userLang == "id-ID") {
    fn = "tidak bisa diputar, silahkan nyalakan internet anda";
  } else {
    fn = "can not be played, please turn on your internet";
  }
  var pref_html = d["split"]("/")["pop"]();
  var style = document["getElementById"](base);
  style["src"] = d;
  style["volume"] = 1;
  style["loop"] = !![];
  style["onerror"] = function () {
    alert(pref_html + " tidak bisa diputar silahkan nyalakan internet anda");
  };
  var value = style["paused"]
    ? style["play"]()
    : style["pause"]();
  if (value !== undefined) {
    value["then"](function (canCreateDiscussions) {})["catch"](function (
      canCreateDiscussions
    ) {});
  }
}

function pad(input, n) {
  input = input["toString"]();
  for (; input["length"] < n; ) {
    input = "0" + input;
  }
  return input;
}

function tajwid_ket(view) {
  var result;
  if (localStorage["getItem"]("set_hafiz") == "1") {
    return mui_dialog(view);
  } else {
    var cursor = /(<([^>]+)>)/gi;
    return (result = view["replace"](cursor, "")), alert(result);
  }
}

function tajwid(node_1_index) {
  var _FOO_;
  if (localStorage["getItem"]("set_hafiz") == "1") {
    _FOO_ = "<br>";
  } else {
    _FOO_ = "\n\r";
  }
  if (userLang == "id-ID") {
    if (node_1_index == "ikhfa") {
      tajwid_ket(
        "<b style=\"color:red;\">Ikhfa</b> artinya samar-samar. (seperti bunyi <i>ng</i> dalam bahasa Indonesia)." +
          _FOO_ +
          "Hurufnya ada 15, yaitu :" +
          _FOO_ +
          "ك ق ف ظ ط ض ص ش س ز ذ د ج ث ت" +
          _FOO_ +
          "Ikhfa adalah apabila ada <i>nun mati</i> atau <i>tanwin</i> bertemu dengan salah satu hurufnya, maka dibacanya samar-samar."
      );
    } else {
      if (node_1_index == "iqlab") {
        tajwid_ket(
          "<b style=\"color:blue;\">Iqlab</b> artinya mengganti (mengganti huruf nun ke huruf mim)." + _FOO_ + "Hurufnya ada 1, yaitu : ب" + _FOO_ + "Iqlab adalah apabila huruf <i>nun mati atau tanwin</i> bertemu dengan huruf Ba’, maka dibacanya balem."
        );
      } else {
        if (node_1_index == "bigunah") {
          tajwid_ket(
            '<b style="color:purple;">Idgham Bigunnah</b> artinya dengan dengung (menahan huruf yang masuk sebanyak 2 harkat)' +
              _FOO_ +
              "Hurufnya ada 4, yaitu :(يمنو)    ي م ن و" +
              _FOO_ +
              "Idgham bigunnah adalah apabila ada huruf <i>nun mati atau tanwin</i> bertemu dengan salah satu hurufnya di lain kalimat, maka dibacanya harus berdengung." +
              _FOO_ +
              "Kecuali bertemu dalam satu kalimat maka hukumnya <b style=\"color:purple;\">Izhar Wajib</b> (dibaca jelas/tidak berdengung) " +
              _FOO_ +
              "Contoh :" +
              _FOO_ +
              "الدُّنْيَا\tnun mati bertemu ya dalam satu kalimat <i>ad dunya</i>" +
              _FOO_ +
              "بُنْيَانٌ\tnun mati bertemu dengan ya dalam satu kalimat <i>bunyanun</i>" +
              _FOO_ +
              "صِنْوَانٌ\tnun mati bertemu dengan wawu dalam satu kalimat\t<i>shinwanun</i>" +
              _FOO_ +
              "قِنْوَانٌ\tnun mati bertemu dengan wawu dalam satu kalimat\t<i>qinwanun</i>"
          );
        } else {
          if (node_1_index == "bilagunah") {
            tajwid_ket(
              "<b style=\"color:gray;\">Idgham Bilagunnah</b> Artinya : tidak dengan dengung." + _FOO_ + "Hurufnya ada 2, yaitu : ر ل" + _FOO_ + "Idgham bilagunnah adalah apabila ada <i>nun mati atau tanwin</i> bertemu dengan salah satu hurufnya, maka dibacanya tidak berdengung."
            );
          } else {
            if (node_1_index == "mimi") {
              tajwid_ket(
                "<b style=\"color:yellowgreen;\">Idgham Mimi</b> Mutajanisain artinya yang sejenis" + _FOO_ + "Hurufnya ada 1, yaitu : م" + _FOO_ + "Idgham Mimi adalah apabila ada <i>mim mati</i> bertemu dengan <i>mim hidup</i>, maka dibacanya harus berdengung."
              );
            } else {
              if (node_1_index == "ifa_safawi") {
                tajwid_ket("<b style=\"color:deeppink;\">Ikhfa Safawi</b> Hurufnya ada 1, yaitu : ب" + _FOO_ + "Ikhfa Safawi adalah apabila ada <i>mim mati</i> bertemu dengan huruf <i>ba’ hidup</i>, maka dibacanya harus berdengung.");
              } else {
                if (node_1_index == "gunah") {
                  tajwid_ket(
                    "<b style=\"color:darkorange;\">Gunnah Masydidah</b> artinya ditahan lama karena <i>tasydid</i>." +
                      _FOO_ +
                      "Hurufnya ada 2, yaitu : مّ , نّ" +
                      _FOO_ +
                      "Apabila terdapat <i>nun siddah dan atau mim siddah</i> sebelum huruf hijaiyyah berharkat, maka dibacanya bergunnah (ditahan sepanjang 3 harkat)."
                  );
                } else {
                  if (node_1_index == "qalqalah") {
                    tajwid_ket(
                      '<b style="color:green;">Qalqalah</b> artinya kerongkongan (huruf hijaiyyah yang mati, diceklokkan).' +
                        _FOO_ +
                        "Hurufnya ada 5, yaitu : ق ط د ج ب" +
                        _FOO_ +
                        "Qolqolah dibagi menjadi 2, yaitu :" +
                        _FOO_ +
                        "1. Qolqolah Sughra ( سغرى )" +
                        _FOO_ +
                        "Sughra artinya : ringan (kecil)." +
                        _FOO_ +
                        "Qolqolah Sughra adalah apabila ada salah satu huruf qolqolah mati karena sukun, maka dibacanya diceklokkan." +
                        _FOO_ +
                        "Contohnya :" +
                        _FOO_ +
                        "لقدْ , حبْل , طلق , أطْعمهم , أجْر" +
                        _FOO_ +
                        "2. Qolqolah Kubra ( قبرﻯ )" +
                        _FOO_ +
                        "Kubra artinya : dahsyat (besar)." +
                        _FOO_ +
                        "Qolqolah Kubra adalah apabila ada salah satu huruf qolqolah mati di akhir kalimat (karena waqof), maka dibacanya diceklokkan."
                    );
                  }
                }
              }
            }
          }
        }
      }
    }
  } else {
    if (node_1_index == "ikhfa") {
      tajwid_ket(
        "<b style = \"color: red;\"> Ikhfa </b> means vague. (like the sound <i> ang </i> in English)." +
          _FOO_ +
          "There are 15 letters, namely:" +
          _FOO_ +
          "ك ق ف ظ ط ض ص ش س ز ذ د ج ث ت" +
          _FOO_ +
          "Ikhfa is if a <i> nun mati or tanwin </i> meets one of the letters, then it will be vaguely read. "
      );
    } else {
      if (node_1_index == "iqlab") {
        tajwid_ket(
          '<b style = "color: blue;"> Iqlab </b> means changing (changing the letter nun to the letter meem).' +
            _FOO_ +
            "The letter has 1, namely: ب" +
            _FOO_ +
            "Iqlab is when the letter <i> nun death or tanwin </i> meets the letter Ba, then it is read balem. "
        );
      } else {
        if (node_1_index == "bigunah") {
          tajwid_ket(
            '<b style = "color: purple;"> Idgham Bigunnah </b> means by buzzing (holding 2 digits of incoming letters)' +
              _FOO_ +
              "There are 4 letters, namely: (يمنو) ي م ن و" +
              _FOO_ +
              "Idgham bigunnah is if a letter <i> nun mati or tanwin </i> meets one of the letters, then it must be read buzzing."
          );
        } else {
          if (node_1_index == "bilagunah") {
            tajwid_ket(
              "<b style = \"color: gray;\"> Idgham Bilagunnah </b> Meaning: not with a drone." + _FOO_ + "There are 2 letters, namely: ر ل" + _FOO_ + "Idgham bilagunnah is if there is <i> nun mati or tanwin </i> meeting one of the letters, then it will not be read buzzing."
            );
          } else {
            if (node_1_index == "mimi") {
              tajwid_ket(
                "<b style = \"color: yellowgreen;\"> Idgham meemi </b> Mutajanisain means the same" + _FOO_ + "There is 1 letter, namely: م" + _FOO_ + "Idgham meemee is if there is a dead meem who meets a live meem, then the reading must be buzzing."
              );
            } else {
              if (node_1_index == "ifa_safawi") {
                tajwid_ket("<b style = \"color: deeppink;\"> Ikhfa Safawi </b> There is 1 letter, namely: ب" + _FOO_ + "Ikhfa Safawi is if there is a <i> dead meem </i> meets the letter\" ba \"alive </i>, then the reading must be buzzing.");
              } else {
                if (node_1_index == "gunah") {
                  tajwid_ket(
                    "<b style = \"color: darkorange;\"> Gunnah Masydidah </b> means being detained for a long time because of <i> tasydid </i>." +
                      _FOO_ +
                      "There are 2 letters, namely: مّ, نّ" +
                      _FOO_ +
                      "If there is <i> nun siddah or meem siddah </i> before the hijaiyyah letter has a dignity, then it is read useless (held for 3 digits). "
                  );
                } else {
                  if (node_1_index == "qalqalah") {
                    tajwid_ket(
                      '<b style = "color: green;"> Qalqalah </b> means the throat (hijaiyyah letters that are dead, choked).' +
                        _FOO_ +
                        "There are 5 letters, namely: ق ط د ج ب" +
                        _FOO_ +
                        "Qolqolah is divided into 2, namely:" +
                        _FOO_ +
                        "1. Qolqolah Sughra (سغرى) " +
                        _FOO_ +
                        "Sughra means: light (small)." +
                        _FOO_ +
                        "Sughras Qolqolah is if one of the qolqolah letters dies because of breadfruit, then it is read it is blocked." +
                        _FOO_ +
                        "For example:" +
                        _FOO_ +
                        "لقدْ, حبْل, طلق, أطْعمهم, أجْر" +
                        _FOO_ +
                        "2. Qolqolah Kubra (قبرﻯ) " +
                        _FOO_ +
                        "Kubra means: terrible (big)." +
                        _FOO_ +
                        "Qolqolah Kubra is if one of the qolqolah letters dies at the end of a sentence (because of waqof), then reading it is blocked."
                    );
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (localStorage["getItem"]("set_hafiz") != "1") {
    setTimeout(function () {
      close_mui_dialog();
    }, 100);
  }
}

function doa_khatam() {
  var _iso8859Str;
  if (userLang == "id-ID") {
    _iso8859Str = "Artinya : \"Ya Allah, rahmatilah aku dengan Al-quran. Jadikanlah ia sebagai pemimpin, cahaya, petunjuk, dan rahmat bagiku. Ya Allah, ingatkanlah aku atas apa yang terlupakan darinya. Ajarilah aku atas apa yang belum tahu darinya. Berikanlah aku kemampuan membacanya sepanjang malam dan ujung siang. Jadikanlah ia sebagai pembelaku, wahai Tuhan Semesta Alam.\"";
  } else {
    _iso8859Str = "Meaning: \"O Allah, bless me with the Koran. Make it a leader, light, guidance, and mercy for me. O Allah, remind me of what has been forgotten from him. Teach me what he does not know. Give me the ability to read it. all night and the ends of the day. Make him a defender, O Lord of the worlds.\"";
  }
  var _FOO_ = "اللَّهُمَّ ارْحَمْنِي بِالْقُرْآنِ وَاجْعَلْهُ لِي إِمَامًا وَنُورًا وَهُدًى وَرَحْمَةً، اللَّهُمَّ ذَكِّرْنِي مِنْهُ مَا نُسِّيتُ وَعَلِّمْنِي مِنْهُ مَا جَهِلْتُ وَارْزُقْنِي تِلَاوَتَهُ آنَاءَ اللَّيْلِ وَأَطْرَافَ النَّهَارِ وَاجْعَلْهُ لِي حُجَّةً يَا رَبَّ الْعَالَمِينَ";
  mui_dialog(
    "<span class=\"ayat\">" + _FOO_ + "</span><br><span class=\"arti\">" + _iso8859Str + "</span>"
  );
}

function mahkota() {
  var view;
  if (userLang == "id-ID") {
    view = "Dari Buraidah &#1555;, Nabi &#65018; bersabda, <i>\"Siapa yang menghafal al-Quran, mengkajinya dan mengamalkannya, maka Allah akan memberikan <b>mahkota bagi kedua orang tuanya dari cahaya yang terangnya seperti matahari</b>. Dan kedua orang tuanya akan diberi <b>dua pakaian yang tidak bisa dinilai dengan dunia</b>. Kemudian kedua orang tuanya bertanya, \"Mengapa saya sampai diberi pakaian semacam ini?\" Lalu disampaikan kepadanya, \"Disebabkan anakmu telah mengamalkan al-Quran.\"</i> (HR. Hakim 1/756 dan dihasankan al-Abani).";
  } else {
    view = "From Buraidah &#1555;, the Prophet &#65018; said, <i>\"Whoever memorizes the Quran, studies it and practices it, then Allah will give <b>a crown to both his parents from a light as bright as the sun</b>. And both her parents will be given <b>two clothes priceless than the whole world</b>. Then both her parents asked, \"Why was I given this kind of clothes?\" Then it was conveyed to him, \"Because your son has practiced the Quran.\"</i> (Hadith is narrated by Hakim 1/756 and sanctioned by al-Abani).";
  }
  mui_dialog(view);
}

function generate_doa() {
  if (userLang == "id-ID") {
    var arr = doa;
    ket = ["Doa-doa Alquran", "Doa Para Nabi", "Doa Orang Shaleh", "Doa Lainnya"];
  } else {
    var arr = prayer;
    ket = [
      "Prayers of the Quran",
      "Prayers of the Prophets",
      "Prayers of Pious People",
      "Other Prayers",
    ];
  }
  var _0x2f0caf;
  var pix_color = "";
  var _sourceStr;
  var filter;
  var _0x1904b0;
  var DATA_PROPTERTY_NAME;
  var key;
  var href;
  var spaceReplacer;
  var idx = 0;
  for (; idx < arr["length"]; idx++) {
    _0x2f0caf = arr[idx][1];
    filter =
      arr_surat[arr[idx][0]["split"](".")[0] - 1] +
      ": " +
      arr[idx][0]["split"](".")[1];
    DATA_PROPTERTY_NAME = arr_surat[arr[idx][0]["split"](".")[0] - 1];
    key = arr[idx][0]["split"](".")[1] - 1;
    if (userLang == "id-ID") {
      href = window[DATA_PROPTERTY_NAME][key]["at"];
    } else {
      href =
        window[
          "en_" +
            pad(Number(arr_surat["indexOf"](DATA_PROPTERTY_NAME) + 1), 3)
        ][key];
    }
    spaceReplacer =
      "<span class=ayat>" +
      window[DATA_PROPTERTY_NAME][key]["ar"] +
      "</span>" +
      "<span class=arti>" +
      href["replace"](/['|"]/g, "") +
      "</span>";
    if (arr[idx][0] == "7.23") {
      _sourceStr = ket[1];
    } else {
      if (arr[idx][0] == "40.7") {
        _sourceStr = ket[2];
      } else {
        if (arr[idx][0] == "2.201") {
          _sourceStr = ket[3];
        } else {
          _sourceStr = "";
        }
      }
    }
    _0x1904b0 = capitalizeName(filter["replace"](/_/g, " "));
    pix_color =
      pix_color +
      ("<b>" +
        _sourceStr +
        "</b><li style=\"width:100% !important;text-align:left !important;padding:8px !important;height:40px !important;background:" +
        getColor() +
        "\" onclick=\"mui_dialog(&apos;" +
        spaceReplacer +
        "&apos;)\"><div class=\"progress\" style=\"background-size:0% 100% !important;font-size:13px !important;width:92% !important;\"><b>" +
        _0x2f0caf +
        '</b><br><span style="font-size:10px !important;">' +
        _0x1904b0 +
        "</span></div> </li>");
  }
  document["getElementById"]("doa")["innerHTML"] =
    "<b style=\"text-transform:uppercase;text-decoration: underline;\">" + ket[0] + "</b><br><ul id=\"progress\">" + pix_color + "</ul>";
}
generate_doa();

function list_doa() {
  document["getElementById"]("doa")["style"]["display"] = "block";
  document["getElementById"]("hafalan")["style"]["display"] =
    "none";
  document["getElementById"]("hafalan_juz")["style"]["display"] = "none";
  setTimeout(function () {
    go_hash("doa");
  }, 100);
}

function menu(inPageNav) {
  var object;
  if (userLang == "id-ID") {
    object = [
      "Baca Quran",
      "Terakhir Dibaca",
      "Menghafal",
      "Laporan Hafalan",
      "Permainan",
      "Doa-doa",
      "Pengaturan",
      "Keluar",
      "Hapus Iklan",
      "Fitur ini masih dalam pengembangan..",
      "Tulis Quran",
    ];
  } else {
    object = [
      "Read Quran",
      "Last Read",
      "Memorize",
      "Memorization Report",
      "Game",
      "Prayers",
      "Settings",
      "Exit",
      "Remove Ads",
      "This feature is still under development..",
      "Write Quran",
    ];
  }
  var buildPath = "<div style=\"width:100%;text-align:center;margin-top:-33px;\"><img style=\"width:60px\" src=\"icon96.png\"/></div>";
  var bulletin_ = "<button style=\"width:100%;\" class=\"mui-btn mui-btn mui-btn--primary\" onclick=\"close_mui_dialog();localStorage.setItem(&apos;set_hafiz&apos;,&apos;0&apos;);updPopup_show();\"><strong>" + object[0] + "</strong></button>";
  var sitesusers =
    '<button style="width:100%;" class="mui-btn mui-btn mui-btn--primary" onclick="close_mui_dialog();localStorage.setItem(&apos;set_hafiz&apos;,&apos;0&apos;);terakhir_baca();"><strong>' +
    object[1] +
    "</strong></button>";
  var messages = "<button style=\"width:100%;\" class=\"mui-btn mui-btn mui-btn--primary\" onclick=\"close_mui_dialog();localStorage.setItem(&apos;set_hafiz&apos;,&apos;1&apos;);updPopup_show();\"><strong>" + object[2] + "</strong></button>";
  var sitesowners =
    '<button style="width:100%;" class="mui-btn mui-btn mui-btn--primary" onclick="close_mui_dialog();buka_hafalan();"><strong>' +
    object[3] +
    "</strong></button>";
  var dns =
    '<button style="width:100%;" class="mui-btn mui-btn mui-btn--primary" onclick="close_mui_dialog();game();"><strong>' +
    object[4] +
    "</strong></button>";
  var potential_users =
    '<button style="width:100%;" class="mui-btn mui-btn mui-btn--primary" onclick="close_mui_dialog();list_doa();"><strong>' +
    object[5] +
    "</strong></button>";
  var adminauth = "<button style=\"width:100%;\" class=\"mui-btn mui-btn mui-btn--primary\" onclick=\"close_mui_dialog();pengaturan();\"><strong>" + object[6] + "</strong></button>";
  var dns_statusstatus = "<button style=\"width:100%;\" class=\"mui-btn mui-btn mui-btn--primary\" onclick=\"close_mui_dialog();onBackKeyDown();\"><strong>" + object[7] + "</strong></button>";
  var add_google_apps =
    '<button style="width:100%;" class="mui-btn mui-btn mui-btn--primary" onclick="alert(&apos;' +
    object[9] +
    "&apos;);\"><strong>" +
    object[8] +
    "</strong></button>";
  var locationfailed_ = "<button style=\"width:100%;\" class=\"mui-btn mui-btn mui-btn--primary\" onclick=\"window.location.replace(&apos;market://details?id=com.hediherdiana.writequran&apos;)\"><strong>&#9998; " + object[10] + "</strong></button>";
  var siteName = "<br>";
  mui_dialog(
    buildPath +
      bulletin_ +
      siteName +
      sitesusers +
      siteName +
      messages +
      siteName +
      sitesowners +
      siteName +
      dns +
      siteName +
      potential_users +
      siteName +
      adminauth +
      siteName +
      locationfailed_ +
      siteName +
      add_google_apps +
      siteName +
      dns_statusstatus
  );
  setTimeout(function () {
    document["getElementById"]("mui-overlay")
      ["getElementsByTagName"]("div")[0]
      ["getElementsByTagName"]("button")[10]["style"][
      "display"
    ] = "none";
    document["querySelectorAll"](".mui-btn--primary")["forEach"](function (same) {
      same["style"]["backgroundColor"] = "lightseagreen";
    });
  }, 100);
}
document["getElementsByClassName"]("logo")[0]
  ["getElementsByTagName"]("a")[0]
  ["addEventListener"]("click", function () {
    menu();
  });

function middle_el(name) {
  document["getElementById"](name)["scrollIntoView"]({
    behavior: "auto",
    block: "center",
    inline: "center",
  });
}
document["addEventListener"]("deviceready", onDeviceReady, ![]);

function onDeviceReady() {
  document["addEventListener"]("backbutton", menu, ![]);
}

function onBackKeyDown(event) {
  var _0x4c901b;
  if (userLang == "id-ID") {
    _0x4c901b = ["Yakin mau keluar?", "Konfirmasi", "Ya,Tidak"];
  } else {
    _0x4c901b = ["Are you sure you want to quit?", "Confirmation", "Yes,No"];
  }
  if (document["referrer"] == "") {
    if (/Mobi|Android/i["test"](navigator["userAgent"])) {
      navigator["notification"]["confirm"](
        _0x4c901b[0],
        onConfirm,
        _0x4c901b[1],
        _0x4c901b[2]
      );
    }
  } else {
    window["history"]["back"]();
  }
}

function onConfirm(text) {
  if (text == 2) {
    return;
  } else {
    if (/Mobi|Android/i["test"](navigator["userAgent"])) {
      navigator["app"]["exitApp"]();
    }
  }
}
