const info = {
  KTL: {
    text: "觀塘線",
    color: "#7ed957",
    sta: [
      { code: "WHA", name: "Whampoa" },
      { code: "HOM", name: "Ho Man Tin" },
      { code: "YMT", name: "Yau Ma Tei" },
      { code: "MOK", name: "Mong Kok" },
      { code: "PRE", name: "Prince Edward" },
      { code: "SKM", name: "Shek Kip Mei" },
      { code: "KOT", name: "Kowloon Tong" },
      { code: "LOF", name: "Lok Fu" },
      { code: "WTS", name: "Wong Tai Sin" },
      { code: "DIH", name: "Diamond Hill" },
      { code: "CHH", name: "Choi Hung" },
      { code: "KOB", name: "Kowloon Bay" },
      { code: "NTK", name: "Ngau Tau Kok" },
      { code: "KWT", name: "Kwun Tong" },
      { code: "LAT", name: "Lam Tin" },
      { code: "YAT", name: "Yau Tong" },
      { code: "TIK", name: "Tiu Keng Leng" },
    ],
  },
  ISL: {
    text: "港島線",
    color: "#004aad",
    sta: [
      { code: "KET", name: "Kennedy Town" },
      { code: "HKU", name: "HKU" },
      { code: "SYP", name: "Sai Ying Pun" },
      { code: "SHW", name: "Sheung Wan" },
      { code: "CEN", name: "Central" },
      { code: "ADM", name: "Admiralty" },
      { code: "WAC", name: "Wan Chai" },
      { code: "CAB", name: "Causeway Bay" },
      { code: "TIH", name: "Tin Hau" },
      { code: "FOH", name: "Fortress Hill" },
      { code: "NOP", name: "North Point" },
      { code: "QUB", name: "Quarry Bay" },
      { code: "TAK", name: "Tai Koo" },
      { code: "SWH", name: "Sai Wan Ho" },
      { code: "SKW", name: "Shau Kei Wan" },
      { code: "HFC", name: "Heng Fa Chuen" },
      { code: "CHW", name: "Chai Wan" },
    ],
  },
  TWL: {
    text: "荃灣線",
    color: "#ff3131",
    sta: [
      { code: "CEN", name: "Central" },
      { code: "ADM", name: "Admiralty" },
      { code: "TST", name: "Tsim Sha Tsui" },
      { code: "JOR", name: "Jordan" },
      { code: "YMT", name: "Yau Ma Tei" },
      { code: "MOK", name: "Mong Kok" },
      { code: "PRE", name: "Price Edward" },
      { code: "SSP", name: "Sham Shui Po" },
      { code: "CSW", name: "Cheung Sha Wan" },
      { code: "LCK", name: "Lai Chi Kok" },
      { code: "MEF", name: "Mei Foo" },
      { code: "LAK", name: "Lai King" },
      { code: "KWF", name: "Kwai Fong" },
      { code: "KWH", name: "Kwai Hing" },
      { code: "TWH", name: "Tai Wo Hau" },
      { code: "TSW", name: "Tsuen Wan" },
    ],
  },
  SIL: {
    text: "南港島線",
    color: "#cbcd09",
    sta: [
      { code: "ADM", name: "Admiralty" },
      { code: "OCP", name: "Ocean Park" },
      { code: "WCH", name: "Wong Chuk Hang" },
      { code: "LET", name: "Lei Tung" },
      { code: "SOH", name: "South Horizons" },
    ],
  },
  TCL: {
    text: "東涌線",
    color: "#f6943d",
    sta: [
      { code: "HOK", name: "Hong Kong" },
      { code: "KOW", name: "Kowloon" },
      { code: "OLY", name: "Olympic" },
      { code: "NAC", name: "Nam Cheong" },
      { code: "LAK", name: "Lai King" },
      { code: "TSY", name: "Tsing Yi" },
      { code: "SUN", name: "Sunny Bay" },
      { code: "TUC", name: "Tung Chung" },
    ],
  },
  EAL: {
    text: "東鐵線",
    color: "#5ce1e6",
    sta: [
      { code: "ADM", name: "Admiralty" },
      { code: "EXC", name: "Exhibition Centre" },
      { code: "HUH", name: "Hung Hom" },
      { code: "MKK", name: "Mong Kok East" },
      { code: "KOT", name: "Kowloon Tong" },
      { code: "TAW", name: "Tai Wai" },
      { code: "SHT", name: "Sha Tin" },
      { code: "FOT", name: "Fo Tan" },
      { code: "RAC", name: "Racecourse" },
      { code: "UNI", name: "University" },
      { code: "TAP", name: "Tai Po Market" },
      { code: "TWO", name: "Tai Wo" },
      { code: "FAN", name: "Fanling" },
      { code: "SHS", name: "Sheung Shui" },
      { code: "LOW", name: "Lo Wu" },
      { code: "LMC", name: "Lok Ma Chau" },
    ],
  },
  TML: {
    text: "屯馬線",
    color: "#8d6019",
    sta: [
      { code: "WKS", name: "Wu Kai Sha" },
      { code: "MOS", name: "Ma On Shan" },
      { code: "HEO", name: "Heng On" },
      { code: "TSH", name: "Tai Shui Hang" },
      { code: "SHM", name: "Shek Mun" },
      { code: "CIO", name: "City One" },
      { code: "STW", name: "Sha Tin Wai" },
      { code: "CKT", name: "Che Kung Temple" },
      { code: "TAW", name: "Tai Wai" },
      { code: "HIK", name: "Hin Keng" },
      { code: "DIH", name: "Diamond Hill" },
      { code: "KAT", name: "Kai Tak" },
      { code: "SUW", name: "Sung Wong Toi" },
      { code: "TKW", name: "To Kwa Wan" },
      { code: "HOM", name: "Ho Man Tin" },
      { code: "HUH", name: "Hung Hom" },
      { code: "ETS", name: "East Tsim Sha Tsui" },
      { code: "AUS", name: "Austin" },
      { code: "NAC", name: "Nam Cheong" },
      { code: "MEF", name: "Mei Foo" },
      { code: "TWW", name: "Tsuen Wan West" },
      { code: "KSR", name: "Kam Sheung Road" },
      { code: "YUL", name: "Yuen Long" },
      { code: "LOP", name: "Long Ping" },
      { code: "TIS", name: "Tin Shui Wai" },
      { code: "SIH", name: "Siu Hong" },
      { code: "TUM", name: "Tuen Mun" },
    ],
  },
  AEL: {
    text: "機場快線",
    color: "#3d9ea0",
    sta: [
      { code: "HOK", name: "Hong Kong" },
      { code: "KOW", name: "Kowloon" },
      { code: "TSY", name: "Tsing Yi" },
      { code: "AIR", name: "Airport" },
      { code: "AWE", name: "AsiaWorld Expo" },
    ],
  },
  TKL: {
    text: "將軍澳線",
    color: "#8d45ab",
    sta: [
      { code: "NOP", name: "North Point" },
      { code: "QUB", name: "Quarry Bay" },
      { code: "YAT", name: "Yau Tong" },
      { code: "TIK", name: "Tiu Keng Leng" },
      { code: "TKO", name: "Tseung Kwan O" },
      { code: "LHP", name: "LOHAS Park" },
      { code: "HAH", name: "Hang Hau" },
      { code: "POA", name: "Po Lam" },
    ],
  },
};

// let line = document.getElementsByClassName;

// let api = `https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php?line=${line}&sta=${station}`;

// let api = `https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php?line=KTL&sta=HOM`;

// let text = info[x].text;
// console.log(text);

// let line = "KTL";
// let sta = "HOM";

let abortController;

async function getdata(api) {
  if (abortController) {
    abortController.abort();
  }
  abortController = new AbortController();
  const signal = abortController.signal;
  try {
    const response = await fetch(api, { signal });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`); // Check for HTTP errors
    }
    const result = await response.json();
    return result; // Return the fetched data
  } catch (error) {
    console.error("Error fetching data:", error); // Log any errors
    return null; // Return null or handle the error as needed
  }
}
function headerDiv() {
  const container = document.getElementById("selecter");
  for (const x in info) {
    const newDiv = document.createElement("div");
    newDiv.textContent = info[x].text;
    newDiv.className = x;
    newDiv.style.backgroundColor = info[x].color;
    newDiv.addEventListener("click", async function () {
      document.getElementById("content").innerHTML = "";
      document.getElementById("lower").innerHTML = "";
      timeContent();
      const content = document.getElementById("content");
      const lower = document.getElementById("lower");
      let line = this.className;
      for (const y of info[line].sta) {
        const contentDiv = document.createElement("div");
        const lowerDiv = document.createElement("div");
        let station = y.code;
        let staName = y.name;
        contentDiv.style.backgroundColor = info[x].color;
        let api = `https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php?line=${line}&sta=${station}`;
        const apiData = await getdata(api);

        let update = apiData.data[`${line}-${station}`];
        if (update && update.UP && update.UP.length > 0 && update.UP[0]) {
          contentDiv.innerHTML += `${staName}<br>`;
          contentDiv.innerHTML += `Estimated arrival time:<br> ${update.UP[0].time}<br>`;
          contentDiv.innerHTML += `Platform of arrived train: No.${update.UP[0].plat}`;
          content.appendChild(contentDiv);
        }
        if (update && update.DOWN && update.DOWN.length > 0 && update.DOWN[0]) {
          lowerDiv.style.backgroundColor = info[x].color;
          lowerDiv.innerHTML += `${staName}<br>`;
          lowerDiv.innerHTML += `Estimated arrival time:<br> ${update.DOWN[0].time}<br>`;
          lowerDiv.innerHTML += `Platform of arrived train: No.${update.DOWN[0].plat}`;
          lower.appendChild(lowerDiv);
        }
      }
    });

    container.appendChild(newDiv);
  }
}

async function timeContent() {
  let api = "https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php";
  const response = await fetch(api);
  const result = await response.json();

  document.getElementById(
    "time"
  ).innerText = `Last updated time: ${result.timestamp}`;
}

headerDiv();
