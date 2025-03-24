/* 3 String data */

var FavoriteGame = "Fallout: New Vegas";
var CrazyCompany = "Vault Tec Corp";

var FalloutMessage = "You are in a wasteland. Kind regards, ";
var FavoriteMessage = "Your favorite game is, ";

console.log(FalloutMessage + CrazyCompany);
console.log(FavoriteMessage + FavoriteGame);

/* 2 number datatyper */

FalloutHoursSpent = 440;
var MessageSpent = "Du har brukt over ";
var TimerBrukt = " timer på ";
console.log(MessageSpent + FalloutHoursSpent + TimerBrukt + FavoriteGame);

MinecraftServerDays = 200;
MinecraftMessage = "Du har spilt på minecraft serveren over ";
MinecraftDays = " dager";

console.log(MinecraftMessage + MinecraftServerDays + MinecraftDays);

/* 2 Object with 3 parameters */

let FalloutPlayer = {
  nickname: "Lone Wanderer",
  age: 19,
  VaultNumber: 101,
  isCrazy: false,
  isVaultDweller: true,
};

NicknameMessage = "Your nickname is, ";

console.log(NicknameMessage + FalloutPlayer.nickname);

if (FalloutPlayer.isCrazy == false) {
  console.log("You have passed the mental health. Congratulations!");
} else {
  console.log("Please visit our overseer at Platform B. You will be promoted.");
}

let MinecraftPlayer = {
  Name: "Steve",
  age: 23,
  FavoriteActivites: "mining, enchanting and building",
  isCrazy: false,
  isInRelationship: true,
  Spouse: "Alex",
};

if (MinecraftPlayer.Name == "Steve" && MinecraftPlayer.Spouse == "Alex") {
  console.log(
    "You are Steve. The one who likes to do " +
      MinecraftPlayer.FavoriteActivites
  );
} else {
  console.log("You are not Steve. What are you doing in this world?");
}

/* 2 array som inneholder 4 parameter (for eksempel frukt, bilmerker eller spill) */

// Array 1
// Fallout: New Vegas
// Fallout 3
// Minecraft
// Risk of Rain 2

let FavorittSpillListe = [
  "Fallout: New Vegas",
  "Fallout 3",
  "Minecraft",
  "Risk of Rain2",
];

console.log(FavorittSpillListe);

// Array 2
// Balatro
// Stacklands
// Slay the Spire
// Inscryption

let DigitalKortSpill = [
  "Balatro",
  "Stacklands",
  "Slay the Spire",
  "Inscryption",
];

console.log("Din favoritt spill er " + DigitalKortSpill[1], ",sant?");
