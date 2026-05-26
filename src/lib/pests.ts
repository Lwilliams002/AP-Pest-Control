import imgMosquito from "@/assets/pests/mosquito.png";
import imgCockroach from "@/assets/pests/cockroach.png";
import imgRodent from "@/assets/pests/rodent.png";
import imgAnt from "@/assets/pests/ant.png";
import imgTermite from "@/assets/pests/termite.png";
import imgScorpion from "@/assets/pests/scorpion.png";
import imgSpider from "@/assets/pests/spider.png";
import imgCommercial from "@/assets/pests/commercial.png";
import imgEarwig from "@/assets/pests/earwig.png";
import imgFlea from "@/assets/pests/flea.png";
import imgGeneral from "@/assets/pests/general.png";
import imgHornet from "@/assets/pests/hornet.png";
import imgSilverfish from "@/assets/pests/silverfish.png";
import imgWasp from "@/assets/pests/wasp.png";
import imgBedbug from "@/assets/pests/bedbug.png";
import imgBee from "@/assets/pests/bee.png";
import imgIguana from "@/assets/pests/iguana.png";
import imgNoseeum from "@/assets/pests/noseeum.png";
import imgWhitefly from "@/assets/pests/whitefly.png";
import imgWildlife from "@/assets/pests/wildlife.png";
import imgPigeon from "@/assets/pests/pigeon.png";
import imgKissingbug from "@/assets/pests/kissingbug.png";
import imgRattlesnake from "@/assets/pests/rattlesnake.png";
import imgPackrat from "@/assets/pests/packrat.png";
import imgCricket from "@/assets/pests/cricket.png";

export type Pest = {
  t: string;
  d: string;
  img: string;
  about: string;
  signs: string[];
  risk: string;
  unique?: "miami" | "arizona";
  seasonal?: string;
};

export const REGION_FLAG: Record<"miami" | "arizona", { emoji: string; label: string }> = {
  miami: { emoji: "🌴", label: "Miami only" },
  arizona: { emoji: "🌵", label: "Arizona only" },
};

const PEST_ANT: Pest = { t: "Ant Pest Control", d: "Targeted baiting that wipes out the colony, not just the trail.", img: imgAnt, about: "Multiple species form trails between food sources and hidden nests. Spraying the trail just splits the colony — baiting takes the whole thing out.", signs: ["Trails along countertops & baseboards", "Tiny piles of soil near cracks", "Ants swarming sweet or greasy spills"], risk: "Contaminate food and can short out electronics they nest in." };
const PEST_COCKROACH: Pest = { t: "Cockroach Pest Control", d: "American & German roach programs for homes, restaurants, condos.", img: imgCockroach, about: "American roaches (large, reddish-brown) and German roaches (small, tan) are the two big offenders. Nocturnal, fast-breeding, drawn to moisture and food residue.", signs: ["Pepper-like droppings in drawers", "Musty odor in kitchens", "Egg cases (oothecae) behind appliances"], risk: "Trigger asthma & allergies; spread salmonella and E. coli." };
const PEST_COMMERCIAL: Pest = { t: "Commercial Pest Control", d: "Hotels, restaurants, marinas, multifamily — discreet schedules.", img: imgCommercial, about: "Custom IPM programs for businesses with health-code obligations. Discreet uniforms, after-hours service, and full digital documentation for inspectors.", signs: ["Failed health inspection prep", "Guest or tenant complaints", "Recurring issues across units"], risk: "One sighting can cost a 5-star review, a license, or a lease." };
const PEST_EARWIG: Pest = { t: "Earwig Control", d: "Perimeter dust and granular treatments around foundations and mulch.", img: imgEarwig, about: "Dark, pincer-tailed insects that hide in damp mulch, leaf litter, and under pots. They wander indoors after heavy rain or irrigation.", signs: ["Pincer bugs in bathtubs and sinks", "Notched leaves on plants", "Activity under flowerpots and stones"], risk: "Mostly a nuisance, but populations explode fast in irrigated landscaping." };
const PEST_FLEA: Pest = { t: "Flea Treatment", d: "Indoor + yard knockdown with growth regulators that break the cycle.", img: imgFlea, about: "Tiny jumping parasites that ride in on pets and wildlife. Eggs and larvae live in carpet, bedding, and shaded yard areas — adults are only 5% of the population.", signs: ["Itchy red bites around ankles", "Pets scratching constantly", "Black 'pepper' specks in pet bedding"], risk: "Transmit tapeworms and, historically, plague-related bacteria." };
const PEST_GENERAL: Pest = { t: "General Pest Control", d: "Quarterly home defense covering the most common indoor and outdoor pests.", img: imgGeneral, about: "An all-in-one perimeter program for the everyday stuff — ants, spiders, crickets, silverfish, earwigs, occasional invaders. Family- and pet-conscious products.", signs: ["Spotting bugs more than once a month", "Webs around eaves and corners", "Activity along baseboards"], risk: "Small problems compound fast in our climate without ongoing protection." };
const PEST_HORNET: Pest = { t: "Hornet Control", d: "Safe nest removal and residual treatment around eaves and trees.", img: imgHornet, about: "Large, aggressive social wasps that build paper nests in trees, sheds, and attics. Defend the nest with repeated stings.", signs: ["Football-shaped paper nests", "Hornets patrolling a single area", "Buzzing inside walls or attics"], risk: "Multiple stings can be life-threatening — never DIY a mature nest." };
const PEST_RODENT: Pest = { t: "Rodent Control", d: "Inspection, exclusion, trapping, and clean-up of affected areas.", img: imgRodent, about: "Roof rats, Norway rats, and house mice chew through wire, insulation, and food packaging — and reproduce shockingly fast.", signs: ["Scratching in walls or ceilings at night", "Dark, rice-shaped droppings", "Gnaw marks on wood or wiring"], risk: "Carry hantavirus and leptospirosis; chewed wiring is a top fire cause." };
const PEST_SCORPION: Pest = { t: "Scorpion Pest Control", d: "UV night sweeps and long-lasting perimeter treatments.", img: imgScorpion, about: "Bark scorpions (Centruroides sculpturatus) are Arizona's most venomous — pale tan, 2–3\", the only species that climbs walls and ceilings. Glow green under UV.", signs: ["Glowing under blacklight at night", "Sightings in showers, shoes, or laundry", "Found in block walls or wood piles"], risk: "Stings cause severe pain; medically significant for kids, elderly, and pets." };
const PEST_SILVERFISH: Pest = { t: "Silverfish Pest Control", d: "Crack-and-crevice treatment in attics, bathrooms, and storage areas.", img: imgSilverfish, about: "Teardrop-shaped, silvery, fast-moving insects that thrive in humid, dark spaces. They feed on paper, glue, starches, and fabric.", signs: ["Yellow stains on paper or books", "Tiny holes in stored clothing", "Pepper-like droppings in cabinets"], risk: "Damage books, photos, wallpaper, and stored linens over time." };
const PEST_SPIDER: Pest = { t: "Spider Pest Control", d: "Web removal, dusting, and prevention around eaves, garages, and yards.", img: imgSpider, about: "Black widows and brown spiders hide in block walls, garages, and patio furniture. Most other spiders are harmless — but webs and egg sacs multiply fast.", signs: ["Tangled webs under patio furniture", "Egg sacs in garage corners", "Spiders in shoes or stored boxes"], risk: "Widow bites are medically significant; brown recluse bites can scar." };
const PEST_WASP: Pest = { t: "Wasp Pest Control", d: "Nest knockdown and residual treatment under eaves, in BBQs, and sheds.", img: imgWasp, about: "Paper wasps and yellowjackets build umbrella-shaped nests under overhangs. Aggressive when disturbed — yellowjackets can sting repeatedly.", signs: ["Wasps entering a small hole in siding", "Open-comb nests under eaves", "Increased activity around trash cans"], risk: "Painful, sometimes anaphylactic stings; nests grow rapidly in summer." };
const PEST_MOSQUITO: Pest = { t: "Mosquito Control", d: "Yard fogging and breeding-site treatment built for humid climates.", img: imgMosquito, about: "Aedes aegypti and Aedes albopictus are the dominant biters. Active dawn and dusk, breeding in any standing water — bottle caps to bromeliads.", signs: ["Itchy welts after being outside", "Buzzing around ankles", "Swarms near shaded, damp areas"], risk: "Vectors for Zika, dengue, West Nile, and chikungunya.", seasonal: "Summer hotspot" };
const PEST_TERMITE: Pest = { t: "Termite Defense", d: "Subterranean & drywood programs tuned to local construction.", img: imgTermite, about: "Subterranean termites (incl. invasive Formosan) tunnel up from soil; drywood termites live entirely inside wood. Damage is rarely covered by insurance.", signs: ["Mud tubes on foundation walls", "Discarded wings near windowsills", "Hollow-sounding or blistered wood"], risk: "Cause billions in structural damage every year across the U.S." };
const PEST_BEDBUG: Pest = { t: "Bed Bug Treatment", d: "Heat & chemical treatments for homes, hotels, and short-term rentals.", img: imgBedbug, about: "Tiny reddish-brown insects that feed on blood at night and hide in mattress seams, headboards, and baseboards. Hitchhike home from travel and rentals.", signs: ["Itchy bites in lines or clusters", "Tiny blood spots on sheets", "Sweet, musty odor in the bedroom"], risk: "Spread fast across units; hospitality killers — one room can shut a floor." };
const PEST_BEE: Pest = { t: "Bee Removal", d: "Live removal and hive extraction by trained specialists.", img: imgBee, about: "Honey bees and Africanized hybrids nest in walls, attics, irrigation boxes, and trees. Africanized colonies defend aggressively in massive swarms.", signs: ["Bees entering a single hole in siding", "Buzzing inside a wall", "Honeycomb visible in attic or shed"], risk: "Africanized swarm attacks can be fatal; abandoned hives draw rodents and roaches." };
const PEST_IGUANA: Pest = { t: "Iguana Removal", d: "Humane trapping and exclusion — South Florida specialty service.", img: imgIguana, about: "Invasive green iguanas grow up to 5 ft, devour landscaping, dig burrows that undermine seawalls, and leave heavy droppings on patios and pool decks.", signs: ["Burrows along seawalls or canals", "Stripped hibiscus and bougainvillea", "Droppings on docks and decks"], risk: "Structural damage to seawalls and foundations; salmonella in droppings.", unique: "miami" };
const PEST_NOSEEUM: Pest = { t: "No-See-Um Control", d: "Yard misting and harborage treatment for biting midges.", img: imgNoseeum, about: "Tiny biting midges nearly invisible to the naked eye — punch through standard window screens. Brutal at dusk near the coast and Intracoastal.", signs: ["Itchy welts with no visible bug", "Worse at dawn and dusk", "Activity near brackish water"], risk: "Bites swell and itch for days; can ruin outdoor dining and rentals.", unique: "miami" };
const PEST_WHITEFLY: Pest = { t: "Whitefly Treatment", d: "Systemic and foliar treatments for ficus, gumbo limbo, and palms.", img: imgWhitefly, about: "Tiny white flying insects that suck sap from ornamentals. Ficus whitefly has devastated South Florida hedges and high-end landscaping.", signs: ["Sticky honeydew on cars and patios", "Black sooty mold on leaves", "Defoliating ficus hedges"], risk: "Kills mature hedges and palms; replacement landscaping runs into thousands.", unique: "miami" };
const PEST_WILDLIFE: Pest = { t: "Nuisance Wildlife", d: "Raccoons, opossums, and squirrels — humane trapping and exclusion.", img: imgWildlife, about: "Attic and soffit intruders that tear insulation, contaminate ducts, and bring in fleas and ticks. Common in older Miami neighborhoods with mature canopy.", signs: ["Heavy thumping in the attic at night", "Torn soffit vents or roof returns", "Droppings in the attic or under decks"], risk: "Rabies risk, parasite spread, fire hazard from chewed wiring.", unique: "miami" };
const PEST_PIGEON: Pest = { t: "Pigeon & Bird Control", d: "Netting, spikes, and solar-panel exclusion across the Valley.", img: imgPigeon, about: "Pigeons roost under solar panels, on parapets, and in signage. Their droppings are corrosive and their nests are flammable mats of dry debris.", signs: ["Droppings on driveways and walkways", "Cooing under solar arrays", "Nesting debris in gutters"], risk: "Histoplasmosis, roof damage, voided solar warranties, fire risk.", unique: "arizona" };
const PEST_KISSINGBUG: Pest = { t: "Kissing Bug Control", d: "Targeted exterior treatment and exclusion for conenose bugs.", img: imgKissingbug, about: "Sonoran Desert conenose bugs feed on blood at night and are drawn to packrat nests, kennels, and outdoor lights. Active during monsoon nights.", signs: ["Painless bite welts on face/arms", "Bugs near porch lights at night", "Activity near pack rat nests"], risk: "Can transmit Trypanosoma cruzi (Chagas disease) — a serious chronic illness.", unique: "arizona" };
const PEST_RATTLESNAKE: Pest = { t: "Rattlesnake Removal", d: "Safe relocation and yard hardening to keep snakes out.", img: imgRattlesnake, about: "Western diamondbacks and Mojaves move through Valley yards, especially in spring and after monsoon storms. Hide under AC units, in garages, and pool equipment.", signs: ["Shed skins along block walls", "Sightings near pool equipment", "Dogs alerting to a corner of the yard"], risk: "Bites are medical emergencies — antivenom runs $50k+; pets often don't survive.", unique: "arizona" };
const PEST_PACKRAT: Pest = { t: "Pack Rat Control", d: "Nest removal and exclusion focused on landscaping and engine bays.", img: imgPackrat, about: "Desert woodrats build huge stick nests in cactus, BBQs, and engine compartments. Notorious for chewing wiring on cars left outdoors.", signs: ["Stick mounds against block walls", "Shiny objects collected in nests", "Chewed engine wiring or hoses"], risk: "Thousands in vehicle damage; nests harbor kissing bugs and scorpions.", unique: "arizona" };
const PEST_CRICKET: Pest = { t: "Cricket Control", d: "Perimeter treatment for monsoon-season invasions.", img: imgCricket, about: "Field crickets swarm Valley homes during monsoon — drawn to outdoor lights, they pile up at doorways and slip into garages and laundry rooms by the dozen.", signs: ["Loud chirping at night", "Crickets piled at exterior lights", "Activity in garages after storms"], risk: "Damage paper, fabric, and plants; constant noise and gross-out factor.", unique: "arizona" };

export const miamiMosquito: Pest = PEST_MOSQUITO;
export const miamiPests: Pest[] = [PEST_BEDBUG, PEST_COMMERCIAL, PEST_EARWIG, PEST_FLEA, PEST_GENERAL, PEST_HORNET, PEST_RODENT, PEST_SILVERFISH, PEST_SPIDER, PEST_TERMITE, PEST_WASP];
export const arizonaTermite: Pest = PEST_TERMITE;
export const arizonaPests: Pest[] = [PEST_ANT, PEST_BEDBUG, PEST_COCKROACH, PEST_COMMERCIAL, PEST_CRICKET, PEST_EARWIG, PEST_FLEA, PEST_GENERAL, PEST_HORNET, PEST_KISSINGBUG, PEST_PACKRAT, PEST_PIGEON, PEST_RATTLESNAKE, PEST_RODENT, PEST_SCORPION, PEST_SILVERFISH, PEST_SPIDER, PEST_WASP];

export const miamiCities = [
  "Miami", "Miami Beach", "Brickell", "Coral Gables", "Coconut Grove", "Wynwood", "Aventura", "Doral",
  "Fort Lauderdale", "Hollywood", "Pembroke Pines", "Davie", "Boca Raton", "Delray Beach",
  "West Palm Beach", "Jupiter", "Key Biscayne", "Pinecrest", "Homestead", "Kendall",
];
export const azCities = ["Scottsdale", "Phoenix", "Gilbert", "Chandler", "Mesa", "Queen Creek", "Tempe", "Ahwatukee"];

export const testimonials = [
  { name: "Adrian Ptak", city: "Scottsdale, AZ", quote: "Absolute pleasure working with AP Pest. My area was a bit out of their service area but they said no worries — and that they did." },
  { name: "Tasia McWilliams", city: "Scottsdale, AZ", quote: "Matt paid close attention to detail, especially around entry points I didn't even know existed. Thoughtful about our 1-year-old." },
  { name: "Brittany David", city: "Phoenix, AZ", quote: "Their team is extremely knowledgeable, reliable, and will make sure your pest and rodent problems are quickly handled." },
];
