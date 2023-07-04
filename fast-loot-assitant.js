// @name Fast Loot Assistant
// @param(string) groupId=0
// @param(string) firstVillage=0
// @param(number) pagesToLoad=3
// @param(number) runnningTimeMinutes=4
// @enum templates EarlyGame[A(1l)/B(1s)/C(on)],MidGame[A(5l)/B(20l/1s)/C(on)]
// @param(number) maxDistance=40
// @param(enum:templates) template=EarlyGame[A(1l)/B(1s)/C(on)]
// @step {gameUrl}/game.php?screen=am_farm&group={groupId}&village={firstVillage}

const TEMPLATES = {
  "EarlyGame[A(1l)/B(1s)/C(on)]": {
    __jstorage_meta: {
      CRC32: {
        language: "2.3681159914",
        version: "2.3514072768",
        working: "2.1409522915",
        "profile:Default": "2.1010800520",
        profileList: "2.3063179215",
        keyPressSettings: "2.887161816",
        "profile:FarmA": "2.4238495228",
        "profile:FarmB": "2.4030948012",
        "profile:FarmC": "2.4105243160",
      },
      TTL: {},
    },
    language: "en",
    version: "1.13.1 Fixed By Ibra",
    working: false,
    "profile:Default": [
      "1",
      String(TWA.pagesToLoad ?? 3),
      "distance",
      "asc",
      false,
      false,
      false,
      true,
      true,
      true,
      true,
      false,
      "hide",
      "",
      true,
      true,
      false,
      true,
      "greater_than",
      "5",
      true,
      "greater_than",
      "0",
      true,
      "greater_than",
      String(TWA.maxDistance),
      false,
      "greater_than",
      "",
      "hide",
      "",
      false,
      "hide",
      "",
      true,
      true,
      true,
      "1",
      true,
      "3",
      true,
    ],
    profileList: ["Default", "FarmA", "FarmB", "FarmC"],
    keyPressSettings: {
      a_code: 65,
      a_char: "A",
      b_code: 66,
      b_char: "B",
      c_code: 67,
      c_char: "C",
      master_code: 77,
      master_char: "M",
      skip_code: 83,
      skip_char: "S",
      left_code: 37,
      left_char: "â†",
      right_code: 39,
      right_char: "â†’",
      priorityOneEnabled: true,
      priorityOneProfile: "FarmA",
      priorityOneButton: "A",
      priorityTwoEnabled: true,
      priorityTwoProfile: "FarmB",
      priorityTwoButton: "B",
      priorityThreeEnabled: true,
      priorityThreeProfile: "FarmC",
      priorityThreeButton: "C",
      defaultButton: "B",
    },
    "profile:FarmA": [
      "1",
      String(TWA.pagesToLoad ?? 3),
      "distance",
      "asc",
      false,
      false,
      false,
      true,
      true,
      true,
      true,
      false,
      "hide",
      "",
      false,
      true,
      false,
      true,
      "greater_than",
      "5",
      true,
      "greater_than",
      "0",
      true,
      "greater_than",
      String(TWA.maxDistance),
      false,
      "greater_than",
      "",
      "hide",
      "",
      false,
      "hide",
      "",
      true,
      true,
      false,
      "",
      true,
      "1",
      true,
    ],
    "profile:FarmB": [
      "1",
      String(TWA.pagesToLoad ?? 3),
      "distance",
      "asc",
      false,
      false,
      false,
      true,
      true,
      true,
      true,
      true,
      "hide",
      "5",
      true,
      true,
      false,
      true,
      "greater_than",
      "5",
      true,
      "greater_than",
      "0",
      true,
      "greater_than",
      String(TWA.maxDistance),
      false,
      "greater_than",
      "",
      "hide",
      "",
      false,
      "hide",
      "",
      true,
      true,
      true,
      "1",
      true,
      "3",
      true,
    ],
    "profile:FarmC": [
      "1",
      String(TWA.pagesToLoad ?? 3),
      "distance",
      "asc",
      false,
      false,
      false,
      true,
      true,
      true,
      true,
      true,
      "hide",
      "5",
      true,
      false,
      true,
      true,
      "greater_than",
      "3",
      false,
      "greater_than",
      "0",
      true,
      "greater_than",
      String(TWA.maxDistance),
      false,
      "greater_than",
      "",
      "hide",
      "",
      false,
      "hide",
      "",
      true,
      true,
      true,
      "1",
      true,
      "15",
      true,
    ],
  },
  "MidGame[A(5l)/B(20l/1s)/C(on)]": {
    __jstorage_meta: {
      CRC32: {
        language: "2.3681159914",
        version: "2.3514072768",
        working: "2.1409522915",
        "profile:Default": "2.1010800520",
        profileList: "2.3063179215",
        keyPressSettings: "2.887161816",
        "profile:FarmA": "2.4238495228",
        "profile:FarmB": "2.4030948012",
        "profile:FarmC": "2.4105243160",
      },
      TTL: {},
    },
    language: "en",
    version: "1.13.1 Fixed By Ibra",
    working: false,
    "profile:Default": [
      "1",
      String(TWA.pagesToLoad ?? 3),
      "distance",
      "asc",
      false,
      false,
      false,
      true,
      true,
      true,
      true,
      false,
      "hide",
      "",
      true,
      true,
      false,
      true,
      "greater_than",
      "5",
      true,
      "greater_than",
      "3",
      true,
      "greater_than",
      String(TWA.maxDistance),
      false,
      "greater_than",
      "",
      "hide",
      "",
      false,
      "hide",
      "",
      true,
      true,
      true,
      "5",
      true,
      "20",
      true,
    ],
    profileList: ["Default", "FarmA", "FarmB", "FarmC"],
    keyPressSettings: {
      a_code: 65,
      a_char: "A",
      b_code: 66,
      b_char: "B",
      c_code: 67,
      c_char: "C",
      master_code: 77,
      master_char: "M",
      skip_code: 83,
      skip_char: "S",
      left_code: 37,
      left_char: "â†",
      right_code: 39,
      right_char: "â†’",
      priorityOneEnabled: true,
      priorityOneProfile: "FarmB",
      priorityOneButton: "B",
      priorityTwoEnabled: true,
      priorityTwoProfile: "FarmA",
      priorityTwoButton: "A",
      priorityThreeEnabled: true,
      priorityThreeProfile: "FarmC",
      priorityThreeButton: "C",
      defaultButton: "Skip",
    },
    "profile:FarmA": [
      "1",
      String(TWA.pagesToLoad ?? 3),
      "distance",
      "asc",
      false,
      false,
      false,
      true,
      true,
      true,
      true,
      false,
      "hide",
      "",
      true,
      true,
      false,
      true,
      "greater_than",
      "5",
      true,
      "greater_than",
      "3",
      true,
      "greater_than",
      String(TWA.maxDistance),
      false,
      "greater_than",
      "",
      "hide",
      "",
      false,
      "hide",
      "",
      true,
      true,
      false,
      "",
      true,
      "5",
      true,
    ],
    "profile:FarmB": [
      "1",
      String(TWA.pagesToLoad ?? 3),
      "distance",
      "asc",
      false,
      false,
      false,
      true,
      true,
      true,
      true,
      true,
      "hide",
      "5",
      true,
      true,
      false,
      true,
      "greater_than",
      "5",
      true,
      "greater_than",
      "3",
      true,
      "greater_than",
      String(TWA.maxDistance),
      false,
      "greater_than",
      "",
      "hide",
      "",
      false,
      "hide",
      "",
      true,
      true,
      true,
      "1",
      true,
      "20",
      true,
    ],
    "profile:FarmC": [
      "1",
      String(TWA.pagesToLoad ?? 3),
      "distance",
      "asc",
      false,
      false,
      false,
      true,
      true,
      true,
      true,
      true,
      "hide",
      "5",
      true,
      false,
      true,
      true,
      "greater_than",
      "3",
      false,
      "greater_than",
      "3",
      true,
      "greater_than",
      String(TWA.maxDistance),
      false,
      "greater_than",
      "",
      "hide",
      "",
      false,
      "hide",
      "",
      true,
      true,
      true,
      "1",
      true,
      "15",
      true,
    ],
  },
};

localStorage.setItem("jStorage", JSON.stringify(TEMPLATES[TWA.template]));

$.getScript("https://scripts.ibragonza.nl/enhancer/enhancer.js");
void 0;

function delay(time, random = 0) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time + parseInt(Math.random() * random));
  });
}

function simulateKeyPress(character) {
  const char = character;
  const charCode = character.charCodeAt(0);
  window.onkeydown({ key: char, keyCode: charCode, which: charCode });
}

new Promise(async function (resolve) {
  await delay(3000, 1000);

  $("table.settingsTable input[type=submit][value=Apply]").click();

  await delay(500, 1000);

  const interval = setInterval(() => {
    if ($(".g-recaptcha, .captcha").is(":visible")) {
      console.log("Captcha detected");
      clearInterval(interval);
      resolve();
    }
    try {
      simulateKeyPress("M");
    } catch (error) {}
  }, 100);

  await delay(TWA.runnningTimeMinutes * 60 * 1000);

  clearInterval(interval);

  resolve();
});
