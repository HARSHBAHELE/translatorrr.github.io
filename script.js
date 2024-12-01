const language = {
    "am-ET": "Amharic",
    "ar-SA": "Arabic",
    "be-BY": "Bielarus",
    "bem-ZM": "Bemba",
    "bi-VU": "Bislama",
    "bjs-BB": "Bajan",
    "bn-IN": "Bengali",
    "bo-CN": "Tibetan",
    "br-FR": "Breton",
    "bs-BA": "Bosnian",
    "ca-ES": "Catalan",
    "cop-EG": "Coptic",
    "cs-CZ": "Czech",
    "cy-GB": "Welsh",
    "da-DK": "Danish",
    "dz-BT": "Dzongkha",
    "de-DE": "German",
    "dv-MV": "Maldivian",
    "el-GR": "Greek",
    "en-GB": "English",
    "es-ES": "Spanish",
    "et-EE": "Estonian",
    "eu-ES": "Basque",
    "fa-IR": "Persian",
    "fi-FI": "Finnish",
    "fn-FNG": "Fanagalo",
    "fo-FO": "Faroese",
    "fr-FR": "French",
    "gl-ES": "Galician",
    "gu-IN": "Gujarati",
    "ha-NE": "Hausa",
    "he-IL": "Hebrew",
    "hi-IN": "Hindi",
    "hr-HR": "Croatian",
    "hu-HU": "Hungarian",
    "id-ID": "Indonesian",
    "is-IS": "Icelandic",
    "it-IT": "Italian",
    "ja-JP": "Japanese",
    "kk-KZ": "Kazakh",
    "km-KM": "Khmer",
    "kn-IN": "Kannada",
    "ko-KR": "Korean",
    "ku-TR": "Kurdish",
    "ky-KG": "Kyrgyz",
    "la-VA": "Latin",
    "lo-LA": "Lao",
    "lv-LV": "Latvian",
    "men-SL": "Mende",
    "mg-MG": "Malagasy",
    "mi-NZ": "Maori",
    "ms-MY": "Malay",
    "mt-MT": "Maltese",
    "my-MM": "Burmese",
    "ne-NP": "Nepali",
    "niu-NU": "Niuean",
    "nl-NL": "Dutch",
    "no-NO": "Norwegian",
    "ny-MW": "Nyanja",
    "ur-PK": "Pakistani",
    "pau-PW": "Palauan",
    "pa-IN": "Panjabi",
    "ps-PK": "Pashto",
    "pis-SB": "Pijin",
    "pl-PL": "Polish",
    "pt-PT": "Portuguese",
    "rn-BI": "Kirundi",
    "ro-RO": "Romanian",
    "ru-RU": "Russian",
    "sg-CF": "Sango",
    "si-LK": "Sinhala",
    "sk-SK": "Slovak",
    "sm-WS": "Samoan",
    "sn-ZW": "Shona",
    "so-SO": "Somali",
    "sq-AL": "Albanian",
    "sr-RS": "Serbian",
    "sv-SE": "Swedish",
    "sw-SZ": "Swahili",
    "ta-LK": "Tamil",
    "te-IN": "Telugu",
    "tet-TL": "Tetum",
    "tg-TJ": "Tajik",
    "th-TH": "Thai",
    "ti-TI": "Tigrinya",
    "tk-TM": "Turkmen",
    "tl-PH": "Tagalog",
    "tn-BW": "Tswana",
    "to-TO": "Tongan",
    "tr-TR": "Turkish",
    "uk-UA": "Ukrainian",
    "uz-UZ": "Uzbek",
    "vi-VN": "Vietnamese",
    "wo-SN": "Wolof",
    "xh-ZA": "Xhosa",
    "yi-YD": "Yiddish",
    "zu-ZA": "Zulu",
}
let lanOption = document.querySelectorAll("select");

lanOption.forEach((get,con)=> {
    for(let countryCode in language) {
        let selected;
        if(con == 0 && countryCode =="en-GB") {
            selected = "selected";
        } else if(con == 1 && countryCode =="hi-IN") {
            selected = "selected";
        }
        let option = `  <option value="${countryCode}"${selected}>${language[countryCode]}</option>`
        get.insertAdjacentHTML('beforeend',option)
    }
})
let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");

input1.addEventListener("input",function() {
    let form1 = lanOption[0].value;
    let form2 = lanOption[1].value;
    const url1 = `https://api.mymemory.translated.net/get?q=${input1.value}!&langpair=${form1}|${form2}`;
    fetch(url1).then(translate => translate.json()).then((data)=> {
        input2.value=data.responseData.translatedText;
    })
});
let icon1 = document.querySelector("#i1")
let icon2 = document.querySelector("#i2")

icon1.addEventListener("click",function() {
    let fromtalk;
    fromtalk = new SpeechSynthesisUtterance(input1.value);
    fromtalk.lang = lanOption[0].value;
    speechSynthesis.speak(fromtalk);
})
icon2.addEventListener("click",function() {
    let fromtalk;
    fromtalk = new SpeechSynthesisUtterance(input2.value);
    fromtalk.lang = lanOption[1].value;
    speechSynthesis.speak(fromtalk);
})
let transfer = document.querySelector("#transfer");

transfer.addEventListener("click",()=> {
    let temptext = input1.value;
    input1.value = input2.value;
    input2.value = temptext;

    let tempopt = lanOption[0].value;
    lanOption[0].value = lanOption[1].value;
    lanOption[1].value = tempopt;
})