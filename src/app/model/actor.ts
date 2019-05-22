interface Actor {

  id: number;
  name: string;
  level: number;
  currentHealth: number;
  baseHealth: number;
  basePower: number;
  baseSpeed: number;

  health: number;
  power: number;
  speed: number;

  quality: Quality;
  balance: Balance;

  abilities: Ability[];
}

interface Quality {
  multiplier: number;
  name: string;
}

interface Balance {
  health: number;
  power: number;
  speed: number;
  name: string;
}

interface Ability {
  name: string;
  description: string;
  abilityType: number;
  cooldown: number;
  heal: number;
  damage: number;
}
