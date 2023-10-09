function getRandomInt(min, max) {
    return min + Math.floor(Math.random() * (max - min))
}

function d6() {
    return getRandomInt(1, 7)
}

var factions = ["A coalition of revenants from the past", 
"A crew of amateur criminals", 
"A CYCLOPS foot soldier battalion", 
"A globe-trotting spy", 
"A group of visitors from the future", 
"A joint force of 1D6 CRO units", 
"A mad scientist think tank", 
"A network of CYCLOPS civilian plants", 
"A pack of intelligent animals", 
"A political party leader", 
"A profiteering PMC squad", 
"A radicalized civilian", 
"A reality-warping anomaly", 
"A rival small-time mercenary squad", 
"A rogue micronation", 
"A seasoned CRO unit", 
"A revolutionary sentient AI", 
"An underground society of monsters", 
"A soldier gone AWOL", 
"A national space agency", 
"A spurned henchman", 
"A squad of organized deserters", 
"A tiny country", 
"An alien civilization", 
"An escaped experiment", 
"An evil corporation", 
"An influential celebrity", 
"An insurgent group", 
"An organized and powerful crime outfit", 
"An outlandish cult", 
"An up-and-coming supervillain", 
"The CIA/FBI", 
"The KGB/GRU", 
"The UN/NATO", 
"The undead fourth reich"]

var actions = ["Accelerate human evolution", 
"Access another planet", 
"Birth a race of super-soldiers", 
"Breach an anomalous zone", 
"Build a robotic superweapon", 
"Cast the ultimate spell", 
"Convert an abandoned structure", 
"Create a new form of bio-warfare", 
"Cultivate psionic powers", 
"Deploy mass mind control", 
"Engineer a coverup", 
"Eradicate an insurgent ideology", 
"Exacerbate an ongoing crisis", 
"Execute a heist", 
"Hasten a natural disaster", 
"Interfere with celestial movements", 
"Launch a popular revolution", 
"Lay seige to a city", 
"Leech people's life force", 
"Make dreams and nightmares material", 
"Manufacture a human food product", 
"Monopolize control of a resource", 
"Mutate humans or animals", 
"Perfect an alchemical formula", 
"Produce proof of a legend", 
"Replicate a fictional story", 
"Sabotage a diplomatic event", 
"Seize an occupied structure", 
"Sow division and discord", 
"Spoil an expanse of nature", 
"Stage a stealth coup", 
"Steal a paranormal artifact", 
"Take control of a city", 
"Tap into another dimension", 
"Travel through time and alter history", 
"Undermine a country's economy"]

var goals = ["Allow them to evade taxes", 
"Awaken a forgotten god", 
"Bankrupt a corporation", 
"Be used to justify new laws", 
"Bolster the value of their capital", 
"Cause mass confusion", 
"Change the course of an activist struggle", 
"Create waves of refugees", 
"Crush their political opponents", 
"Curry favor with their monstrous masters", 
"Damage the fabric of spacetime", 
"Destroy a public figure's reputation", 
"Destabilize a powder-keg region", 
"Direct scrutiny away from them", 
"Drive an endangered species extinct", 
"Ensure their legacy", 
"Fork time into divergent iterations", 
"Frame an opposing faction", 
"Fulfill a dark cult prophecy", 
"Function as a deterrent", 
"Guarantee them a place in Heaven", 
"Harm local children", 
"Help start a proxy war", 
"Increase the rate of inflation", 
"Kill an important political figure", 
"Let them conquer a small country", 
"Make somone important proud", 
"Make them filthy rich", 
"Obliterate a rural town", 
"Satisfy some sick fascination", 
"Spread a horrible illness", 
"Taint a community's resource supply", 
"Turn the Cold War hot", 
"Unleash an eldritch anomaly", 
"Warp civilians into something else", 
"Worsen economic inequality"]

var twists = ["A divine entity is interfering with their plan", 
"A double agent holds a high position with them", 
"A FIST agent gone MIA surfaces working for them", 
"A late historical figure is alive and involved", 
"A local faction challenges the enemy and FIST", 
"A mythical figure appears and takes a stance", 
"A natural disaster has just begun in the area", 
"A superhero aims to stop them", 
"Alien body snatchers have infiltrated their ranks", 
"All of this has been simulated by CYCLOPS", 
"All relevant intel is being systematically destroyed", 
"All technology breaks down in the mission area", 
"Being spotted will cause an international incident", 
"Capturing a player character is integral to the plan", 
"CYCLOPS believes they may be useful as pawns", 
"CYCLOPS has reached out to FIST for help", 
"CYCLOPS is pursuing the same mission", 
"Federal agents have warned FIST to stay away", 
"FIST has memories from after the mission", 
"Nobody knows when or where this is happening", 
"One player character is fated to die in action", 
"Only brand-new operatives can go on this mission", 
"Simply accepting the mission compromises FIST", 
"The cliant clearly has an ulterior motive", 
"The enemy is splintering into several sub-factions", 
"The informant is notorious for misunderstandings", 
"The mission area is nigh-inaccessible", 
"Their area of operations is infested with monsters", 
"Theirleader is a player character's family or ex", 
"Their plan is likely to suddenly spiral out of control", 
"There is no concrete proof that any of this is true", 
"They know FIST and can easily recognize everyone", 
"They contacted FIST requestiong non-involvement", 
"They will start backpedaling before the payoff", 
"This directly contradicts their previous behavior", 
"This venture is a distraction from their real goal"]

var rewards = [
    "", 
    "", 
    "Base upgrade", 
    "Structure", 
    "Enemy ally", 
    "Crates", 
    "Weapons", 
    "Weapon with tag and skin", 
    "Armors", 
    "CYCLOPS gadgets", 
    "NPC ally", 
    "Vehicle", 
    "Paycheck"
]

var locations = [
    "",
    "",
    "Where the fuck are we ???",
    "Outer Space", 
    "Antarctica", 
    "South Africa", 
    "Asia", 
    "Europe", 
    "North America", 
    "North Africa", 
    "Inner Earth", 
    "Deep sea",
    "Other dimension"
]

document.getElementById("faction").innerHTML = factions[getRandomInt(0, 6*6 + 1)]
document.getElementById("action").innerHTML = actions[getRandomInt(0, 6*6 + 1)]
document.getElementById("goal").innerHTML = goals[getRandomInt(0, 6*6 + 1)]
document.getElementById("twist").innerHTML = twists[getRandomInt(0, 6*6 + 1)]

document.getElementById("location").innerHTML = locations[d6() + d6()]
document.getElementById("reward").innerHTML = rewards[d6() + d6()]
