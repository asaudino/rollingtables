var RollTables =
{

  //FUumbles
  CriticalMiss:{
    1: 'Slipped. You must make a successful DC 10 DEX Save or immediately fall prone.',
    2: 'Slipped. You must make a successful DC 10 DEX Save or immediately fall prone.',
    3: 'Slipped. You must make a successful DC 10 DEX Save or immediately fall prone.',
    4: 'Slipped. You must make a successful DC 10 DEX Save or immediately fall prone.',
    5: 'Slipped. You must make a successful DC 10 DEX Save or immediately fall prone.',
    6: 'Pulled a muscle. You must make a successful DC 10 CON save or your speed is halved until the encounter ends.',
    7: 'Pulled a muscle. You must make a successful DC 10 CON save or your speed is halved until the encounter ends.',
    8: 'Pulled a muscle. You must make a successful DC 10 CON save or your speed is halved until the encounter ends.',
    9: 'Pulled a muscle. You must make a successful DC 10 CON save or your speed is halved until the encounter ends.',
    10: 'Something in your eye. Your melee attacks only do half damage for the remainder of the encounter.',
    11: 'Wicked back-swing. You strike yourself slightly on your back-swing and take 1d8 damage.',
    12: 'Wicked back-swing. You strike yourself slightly on your back-swing and take 1d8 damage.',
    13: 'Wicked back-swing. You strike yourself slightly on your back-swing and take 1d8 damage.',
    14: 'Wicked back-swing. You strike yourself slightly on your back-swing and take 1d8 damage.',
    15: 'Wicked back-swing. You strike yourself slightly on your back-swing and take 1d8 damage.',
    16: 'Wind knocked out of you. You become exhausted to level 1 of that condition.',
    17: 'Wind knocked out of you. You become exhausted to level 1 of that condition.',
    18: 'Wind knocked out of you. You become exhausted to level 1 of that condition.',
    19: 'Wind knocked out of you. You become exhausted to level 1 of that condition.',
    20: 'Loss of confidence. You gain disadvantage for your attacks against this opponent for the remainder of the encounter.',
    21: 'Shook yourself up. You are stunned for 1 round.',
    22: 'Shook yourself up. You are stunned for 1 round.',
    23: 'Shook yourself up. You are stunned for 1 round.',
    24: 'Shook yourself up. You are stunned for 1 round.',
    25: 'Shook yourself up. You are stunned for 1 round.',
    26: 'Give them hope. Your target’s allies within 30 feet gain a d6 inspiration die that can be used during this encounter.',
    27: 'Give them hope. Your target’s allies within 30 feet gain a d6 inspiration die that can be used during this encounter.',
    28: 'Give them hope. Your target’s allies within 30 feet gain a d6 inspiration die that can be used during this encounter.',
    29: 'Give them hope. Your target’s allies within 30 feet gain a d6 inspiration die that can be used during this encounter.',
    30: 'Panic attack. You must make a successful DC 10 WIS Save or become frightened for the remainder of the encounter.',
    31: 'Dropped weapon. Your drop your weapon and it falls 10’ from your location in a random direction.',
    32: 'Dropped weapon. Your drop your weapon and it falls 10’ from your location in a random direction.',
    33: 'Dropped weapon. Your drop your weapon and it falls 10’ from your location in a random direction.',
    34: 'Dropped weapon. Your drop your weapon and it falls 10’ from your location in a random direction.',
    35: 'Dropped weapon. Your drop your weapon and it falls 10’ from your location in a random direction.',
    36: 'Discombobulated. You become incapacitated for 1 round.',
    37: 'Discombobulated. You become incapacitated for 1 round.',
    38: 'Discombobulated. You become incapacitated for 1 round.',
    39: 'Discombobulated. You become incapacitated for 1 round.',
    40: 'You’ve fallen and you can’t get up. You immediately fall prone and lose all movement this round.',
    41: 'Bad timing. You drop to last in the imitative order for the combat but do not act again this turn.',
    42: 'Bad timing. You drop to last in the imitative order for the combat but do not act again this turn.',
    43: 'Bad timing. You drop to last in the imitative order for the combat but do not act again this turn.',
    44: 'Bad timing. You drop to last in the imitative order for the combat but do not act again this turn.',
    45: 'Bad timing. You drop to last in the imitative order for the combat but do not act again this turn.',
    46: 'Broken bone. You break a bone in your hand. You suffer disadvantage for the rest of the encounter and take 1d6 damage every round until healed.',
    47: 'Broken bone. You break a bone in your hand. You suffer disadvantage for the rest of the encounter and take 1d6 damage every round until healed.',
    48: 'Broken bone. You break a bone in your hand. You suffer disadvantage for the rest of the encounter and take 1d6 damage every round until healed.',
    49: 'Broken bone. You break a bone in your hand. You suffer disadvantage for the rest of the encounter and take 1d6 damage every round until healed.',
    50: 'Easy prey. Allies of the target within 20’ will attack you with their next turn, unless they would suffer an Attack of Opportunity to do so.',
    51: 'Exposed defenses. Your swing unbalances you so much that your target may take one melee attack against you as a reaction.',
    52: 'Exposed defenses. Your swing unbalances you so much that your target may take one melee attack against you as a reaction.',
    53: 'Exposed defenses. Your swing unbalances you so much that your target may take one melee attack against you as a reaction.',
    54: 'Exposed defenses. Your swing unbalances you so much that your target may take one melee attack against you as a reaction.',
    55: 'Exposed defenses. Your swing unbalances you so much that your target may take one melee attack against you as a reaction.',
    56: 'Your own worst enemy. You suffer the effects of a bane spell for the remainder of the encounter.',
    57: 'Your own worst enemy. You suffer the effects of a bane spell for the remainder of the encounter.',
    58: 'Your own worst enemy. You suffer the effects of a bane spell for the remainder of the encounter.',
    59: 'Your own worst enemy. You suffer the effects of a bane spell for the remainder of the encounter.',
    60: 'Unguarded. All adjacent allies of your target may immediately take an attack of opportunity against you.',
    61: 'Costly mistake. Your target may re-roll all 1s and 2s on the damage roll for his next successful melee attack vs. you.',
    62: 'Costly mistake. Your target may re-roll all 1s and 2s on the damage roll for his next successful melee attack vs. you.',
    63: 'Costly mistake. Your target may re-roll all 1s and 2s on the damage roll for his next successful melee attack vs. you.',
    64: 'Costly mistake. Your target may re-roll all 1s and 2s on the damage roll for his next successful melee attack vs. you.',
    65: 'Costly mistake. Your target may re-roll all 1s and 2s on the damage roll for his next successful melee attack vs. you.',
    66: 'Revealed intentions. You and your allies all suffer disadvantage for your next attack.',
    67: 'Revealed intentions. You and your allies all suffer disadvantage for your next attack.',
    68: 'Revealed intentions. You and your allies all suffer disadvantage for your next attack.',
    69: 'Revealed intentions. You and your allies all suffer disadvantage for your next attack.',
    70: 'Wrong target. You mistakenly strike an ally adjacent to you with your attack.',
    71: 'Lodged weapon. Your weapon becomes stuck in the floor or a nearby object. You must make a DC 14 STR check to remove it as an action.',
    72: 'Lodged weapon. Your weapon becomes stuck in the floor or a nearby object. You must make a DC 14 STR check to remove it as an action.',
    73: 'Lodged weapon. Your weapon becomes stuck in the floor or a nearby object. You must make a DC 14 STR check to remove it as an action.',
    74: 'Lodged weapon. Your weapon becomes stuck in the floor or a nearby object. You must make a DC 14 STR check to remove it as an action.',
    75: 'Lodged weapon. Your weapon becomes stuck in the floor or a nearby object. You must make a DC 14 STR check to remove it as an action.',
    76: 'Devastating error. Your opponent may immediately make one melee attack with advantage against you as a reaction.',
    77: 'Devastating error. Your opponent may immediately make one melee attack with advantage against you as a reaction.',
    78: 'Devastating error. Your opponent may immediately make one melee attack with advantage against you as a reaction.',
    79: 'Devastating error. Your opponent may immediately make one melee attack with advantage against you as a reaction.',
    80: 'Shattered. Your weapon breaks if it is non-magical. Enchanted weapons must make a DC 8 Save and get a +1 to their roll for every + of the weapon.',
    81: 'Thrown weapon. You lose your grip and throw your weapon. It lands 30’ from your location in a random direction.',
    82: 'Thrown weapon. You lose your grip and throw your weapon. It lands 30’ from your location in a random direction.',
    83: 'Thrown weapon. You lose your grip and throw your weapon. It lands 30’ from your location in a random direction.',
    84: 'Thrown weapon. You lose your grip and throw your weapon. It lands 30’ from your location in a random direction.',
    85: 'Thrown weapon. You lose your grip and throw your weapon. It lands 30’ from your location in a random direction.',
    86: 'Panic attack. You immediately suffer the effects of the Confusion spell for 1 round.',
    87: 'Panic attack. You immediately suffer the effects of the Confusion spell for 1 round.',
    88: 'Panic attack. You immediately suffer the effects of the Confusion spell for 1 round.',
    89: 'Panic attack. You immediately suffer the effects of the Confusion spell for 1 round.',
    90: 'Horrible aftermath. Roll twice on this chart and apply both effects to yourself.',
    91: 'Self-inflicted wound. Your attack ricochets back and you hit yourself. Roll your damage as if you had hit your target and apply it to yourself.',
    92: 'Self-inflicted wound. Your attack ricochets back and you hit yourself. Roll your damage as if you had hit your target and apply it to yourself.',
    93: 'Self-inflicted wound. Your attack ricochets back and you hit yourself. Roll your damage as if you had hit your target and apply it to yourself.',
    94: 'Self-inflicted wound. Your attack ricochets back and you hit yourself. Roll your damage as if you had hit your target and apply it to yourself.',
    95: 'Self-inflicted wound. Your attack ricochets back and you hit yourself. Roll your damage as if you had hit your target and apply it to yourself.',
    96: 'Did you see that? Your attack ricochets back and you hit yourself. Apply the maximum damage to yourself as if you had hit your target.',
    97: 'Did you see that? Your attack ricochets back and you hit yourself. Apply the maximum damage to yourself as if you had hit your target.',
    98: 'Did you see that? Your attack ricochets back and you hit yourself. Apply the maximum damage to yourself as if you had hit your target.',
    99: 'Did you see that? Your attack ricochets back and you hit yourself. Apply the maximum damage to yourself as if you had hit your target.',
    100: 'No! Your attack ricochets back and you hit yourself. Apply the maximum critical damage to yourself as if you had hit your target.'
  },
  CriticalHit:{
    1: 'Standard critical damage as indicated by the weapon type.',
    2: 'Standard critical damage as indicated by the weapon type.',
    3: 'Standard critical damage as indicated by the weapon type.',
    4: 'Standard critical damage as indicated by the weapon type.',
    5: 'Standard critical damage as indicated by the weapon type.',
    6: 'Standard critical damage as indicated by the weapon type.',
    7: 'Standard critical damage as indicated by the weapon type.',
    8: 'Standard critical damage as indicated by the weapon type.',
    9: 'Standard critical damage as indicated by the weapon type.',
    10: 'Standard critical damage as indicated by the weapon type.',
    11: 'Critical multiplier increased by 1. (If a weapon deals double damage on a critical hit, then it would deal triple damage. If the weapon deals triple damage, then it would deal quadruple damage, and so on.)',
    12: 'Critical multiplier increased by 1. (If a weapon deals double damage on a critical hit, then it would deal triple damage. If the weapon deals triple damage, then it would deal quadruple damage, and so on.)',
    13: 'Critical multiplier increased by 1. (If a weapon deals double damage on a critical hit, then it would deal triple damage. If the weapon deals triple damage, then it would deal quadruple damage, and so on.)',
    14: 'Critical multiplier increased by 1. (If a weapon deals double damage on a critical hit, then it would deal triple damage. If the weapon deals triple damage, then it would deal quadruple damage, and so on.)',
    15: 'Critical multiplier increased by 1. (If a weapon deals double damage on a critical hit, then it would deal triple damage. If the weapon deals triple damage, then it would deal quadruple damage, and so on.)',
    16: 'Normal damage, and weapon is knocked from the opponent’s hands. (If enemy uses natural weapons, such as a bite attack, those weapons are damaged and rendered unusable.)',
    17: 'Normal damage, and opponent’s shield is knocked out of their hands. (If no shield is present, weapon is knocked away instead, as described for 16)',
    18: 'Normal damage, plus opponent’s armor (or natural armor) is damaged, reducing its AC bonus by 1. Armor can be repaired for 1/2 base cost. (If armor is magical, re-roll.)',
    19: 'Normal damage, plus the opponent’s ear is struck, and destroyed. (If the target is wearing a helm, attack deals normal damage, and helm is knocked off.)',
    20: 'Normal damage, plus the opponent’s eye is struck, and destroyed. (If the target is wearing a helm, attack deals normal damage and helm is knocked off.)',
    21: 'Normal damage, plus the opponent’s knee is struck. They are reduced to 1/2 movement speed.',
    22: 'Critical damage, plus the opponent’s right arm is destroyed (Either cut off, or damaged beyond usability).',
    23: 'Critical damage, plus the opponent’s left arm is destroyed (Either cut off, or damaged beyond usability).',
    24: 'Critical damage, plus the opponent’s right leg is destroyed (Either cut off, or damaged beyond usability).',
    25: 'Critical damage, plus the opponent’s left leg is destroyed (Either cut off, or damaged beyond usability).',
    26: 'Critical damage, plus severe damage to the abdomen. (Heavy bleeding, either from a wound, or internally). Target will continue to lose 10 hp every turn (10 minutes) until bbleeding is stopped.',
    27: 'Critical damage, plus severe damage to one of the target’s lungs. Target is left gasping on the ground until tended to. Suffers a permanent loss of 4 Constitution (which also causes a loss of 2hp/level). This ability loss is from the destruction of a lung, and cannot be recovered by anything less than a Regenerate spell.',
    28: 'The attack strikes the chest, and severely damages the heart. The target is immediately reduced to -1 hp.',
    29: 'The attack strikes the head. The target immediately drops to -1 hp and suffers the permanent loss of 4 Wisdom. This ability loss is from brain damage, and cannot be recovered by anything less than a Regenerate spell. (If the target is wearing a helmet, this attack instead deals critical damage, and knocks the helmet from the target’s head).',
    30: 'Roll twice and use both effects.'
  },
  SpellCriticalMiss:{
    1: 'The spell has the opposite effect on the target it normally would',
    2: 'The spell is delayed 1d4 rounds before it resolved at the target location',
    3: 'You can no longer cast spells for 1 round and you lose all concentration.',
    4: 'A burst of bright white light explodes in front of you, you are blinded for 1 round.',
    5: 'Standard miss.',
    6: 'The targets suffers the effects of healing word at the same level as the casted spell.',
    7: 'A surge of magical energy deals 1d4 damage per spell level you.',
    8: 'The spell strikes you, centered on your location.',
    9: 'The spell strikes your ally nearest to the target, centered on their location.',
    10: 'Roll again. If you get this result a second time in a row, a random item or items suddenly appear at the target.'
  },

  //NPC Names
  DwarfNames:{
    1: "Adrik",
    2: "Alberich",
    3: "Baern",
    4: "Barendd",
    5: "Brottor",
    6: "Bruenor",
    7: "Oain",
    8: "Oarrak",
    9: "Oelg",
    10: "Eberk",
    11: "Einkil",
    12: "Fargrim",
    13: "Flint",
    14: "Gardain",
    15: "Harbek",
    16: "Kildrak",
    17: "Morgran",
    18: "Orsik",
    19: "Oskar",
    20: "Rangrim",
    21: "Rurik",
    22: "Taklinn",
    23: "Thoradin",
    24: "Thorin",
    25: "Tordek",
    26: "Traubon",
    27: "Travok",
    28: "Ulfgar",
    29: "Veit",
    30: "Vondal",
    31: "Ambera",
    32: "Artin",
    33: "Audhild",
    34: "Bardryn",
    35: "Oagnal",
    36: "Oiesa",
    37: "Eldeth",
    38: "Falkrunn",
    39: "Finellen",
    40: "Gunnloda",
    41: "Gurdis",
    42: "Helja",
    43: "Hlin",
    44: "Kathra",
    45: "Kristryd",
    46: "lide",
    47: "Liftrasa",
    48: "Mardred",
    49: "Riswynn",
    50: "Sannl",
    51: "Torbera",
    52: "Torgga",
    53: "Vistra"
  },
  DwarfSurnames:{
    1: "Balderk",
    2: "Battlehammer",
    3: "Brawnanvil",
    4: "Dankil",
    5: "Fireforge",
    6: "Frostbeard",
    7: "Gorunn",
    8: "Holderhek",
    9: "Ironfist",
    10: "Loderr",
    11: "Lutgehr",
    12: "Rumnaheim",
    13: "Strakeln",
    14: "Torunn",
    15: "Ungart"
  }
};


sessionStorage.RollTables = JSON.stringify(RollTables);
