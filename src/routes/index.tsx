import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import miamiHero from "@/assets/miami-hero.jpg";
import valleyHero from "@/assets/valley-hero.jpg";
import logo from "@/assets/ap-pest-logo.png";
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

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "AP Pest Control — Miami, FL & Phoenix, AZ | Sustainable Pest Control" },
      {
        name: "description",
        content:
          "Independent, family-owned pest control serving Miami, FL and the Arizona Valley. Mosquitoes, roaches, scorpions, rodents, termites — handled.",
      },
    ],
  }),
});

type Pest = {
  t: string;
  d: string;
  img: string;
  about: string;
  signs: string[];
  risk: string;
  unique?: "miami" | "arizona";
};

const REGION_FLAG: Record<"miami" | "arizona", { emoji: string; label: string }> = {
  miami: { emoji: "🌴", label: "Miami only" },
  arizona: { emoji: "🌵", label: "Arizona only" },
};

const PEST_ANT: Pest = {
  t: "Ant Pest Control",
  d: "Targeted baiting that wipes out the colony, not just the trail.",
  img: imgAnt,
  about: "Multiple species form trails between food sources and hidden nests. Spraying the trail just splits the colony — baiting takes the whole thing out.",
  signs: ["Trails along countertops & baseboards", "Tiny piles of soil near cracks", "Ants swarming sweet or greasy spills"],
  risk: "Contaminate food and can short out electronics they nest in.",
};
const PEST_COCKROACH: Pest = {
  t: "Cockroach Pest Control",
  d: "American & German roach programs for homes, restaurants, condos.",
  img: imgCockroach,
  about: "American roaches (large, reddish-brown) and German roaches (small, tan) are the two big offenders. Nocturnal, fast-breeding, drawn to moisture and food residue.",
  signs: ["Pepper-like droppings in drawers", "Musty odor in kitchens", "Egg cases (oothecae) behind appliances"],
  risk: "Trigger asthma & allergies; spread salmonella and E. coli.",
};
const PEST_COMMERCIAL: Pest = {
  t: "Commercial Pest Control",
  d: "Hotels, restaurants, marinas, multifamily — discreet schedules.",
  img: imgCommercial,
  about: "Custom IPM programs for businesses with health-code obligations. Discreet uniforms, after-hours service, and full digital documentation for inspectors.",
  signs: ["Failed health inspection prep", "Guest or tenant complaints", "Recurring issues across units"],
  risk: "One sighting can cost a 5-star review, a license, or a lease.",
};
const PEST_EARWIG: Pest = {
  t: "Earwig Control",
  d: "Perimeter dust and granular treatments around foundations and mulch.",
  img: imgEarwig,
  about: "Dark, pincer-tailed insects that hide in damp mulch, leaf litter, and under pots. They wander indoors after heavy rain or irrigation.",
  signs: ["Pincer bugs in bathtubs and sinks", "Notched leaves on plants", "Activity under flowerpots and stones"],
  risk: "Mostly a nuisance, but populations explode fast in irrigated landscaping.",
};
const PEST_FLEA: Pest = {
  t: "Flea Treatment",
  d: "Indoor + yard knockdown with growth regulators that break the cycle.",
  img: imgFlea,
  about: "Tiny jumping parasites that ride in on pets and wildlife. Eggs and larvae live in carpet, bedding, and shaded yard areas — adults are only 5% of the population.",
  signs: ["Itchy red bites around ankles", "Pets scratching constantly", "Black 'pepper' specks in pet bedding"],
  risk: "Transmit tapeworms and, historically, plague-related bacteria.",
};
const PEST_GENERAL: Pest = {
  t: "General Pest Control",
  d: "Quarterly home defense covering the most common indoor and outdoor pests.",
  img: imgGeneral,
  about: "An all-in-one perimeter program for the everyday stuff — ants, spiders, crickets, silverfish, earwigs, occasional invaders. Family- and pet-conscious products.",
  signs: ["Spotting bugs more than once a month", "Webs around eaves and corners", "Activity along baseboards"],
  risk: "Small problems compound fast in our climate without ongoing protection.",
};
const PEST_HORNET: Pest = {
  t: "Hornet Control",
  d: "Safe nest removal and residual treatment around eaves and trees.",
  img: imgHornet,
  about: "Large, aggressive social wasps that build paper nests in trees, sheds, and attics. Defend the nest with repeated stings.",
  signs: ["Football-shaped paper nests", "Hornets patrolling a single area", "Buzzing inside walls or attics"],
  risk: "Multiple stings can be life-threatening — never DIY a mature nest.",
};
const PEST_RODENT: Pest = {
  t: "Rodent Control",
  d: "Inspection, exclusion, trapping, and clean-up of affected areas.",
  img: imgRodent,
  about: "Roof rats, Norway rats, and house mice chew through wire, insulation, and food packaging — and reproduce shockingly fast.",
  signs: ["Scratching in walls or ceilings at night", "Dark, rice-shaped droppings", "Gnaw marks on wood or wiring"],
  risk: "Carry hantavirus and leptospirosis; chewed wiring is a top fire cause.",
};
const PEST_SCORPION: Pest = {
  t: "Scorpion Pest Control",
  d: "UV night sweeps and long-lasting perimeter treatments.",
  img: imgScorpion,
  about: "Bark scorpions (Centruroides sculpturatus) are Arizona's most venomous — pale tan, 2–3\", the only species that climbs walls and ceilings. Glow green under UV.",
  signs: ["Glowing under blacklight at night", "Sightings in showers, shoes, or laundry", "Found in block walls or wood piles"],
  risk: "Stings cause severe pain; medically significant for kids, elderly, and pets.",
};
const PEST_SILVERFISH: Pest = {
  t: "Silverfish Pest Control",
  d: "Crack-and-crevice treatment in attics, bathrooms, and storage areas.",
  img: imgSilverfish,
  about: "Teardrop-shaped, silvery, fast-moving insects that thrive in humid, dark spaces. They feed on paper, glue, starches, and fabric.",
  signs: ["Yellow stains on paper or books", "Tiny holes in stored clothing", "Pepper-like droppings in cabinets"],
  risk: "Damage books, photos, wallpaper, and stored linens over time.",
};
const PEST_SPIDER: Pest = {
  t: "Spider Pest Control",
  d: "Web removal, dusting, and prevention around eaves, garages, and yards.",
  img: imgSpider,
  about: "Black widows and brown spiders hide in block walls, garages, and patio furniture. Most other spiders are harmless — but webs and egg sacs multiply fast.",
  signs: ["Tangled webs under patio furniture", "Egg sacs in garage corners", "Spiders in shoes or stored boxes"],
  risk: "Widow bites are medically significant; brown recluse bites can scar.",
};
const PEST_WASP: Pest = {
  t: "Wasp Pest Control",
  d: "Nest knockdown and residual treatment under eaves, in BBQs, and sheds.",
  img: imgWasp,
  about: "Paper wasps and yellowjackets build umbrella-shaped nests under overhangs. Aggressive when disturbed — yellowjackets can sting repeatedly.",
  signs: ["Wasps entering a small hole in siding", "Open-comb nests under eaves", "Increased activity around trash cans"],
  risk: "Painful, sometimes anaphylactic stings; nests grow rapidly in summer.",
};
const PEST_MOSQUITO: Pest = {
  t: "Mosquito Control",
  d: "Yard fogging and breeding-site treatment built for humid climates.",
  img: imgMosquito,
  about: "Aedes aegypti and Aedes albopictus are the dominant biters. Active dawn and dusk, breeding in any standing water — bottle caps to bromeliads.",
  signs: ["Itchy welts after being outside", "Buzzing around ankles", "Swarms near shaded, damp areas"],
  risk: "Vectors for Zika, dengue, West Nile, and chikungunya.",
};
const PEST_TERMITE: Pest = {
  t: "Termite Defense",
  d: "Subterranean & drywood programs tuned to local construction.",
  img: imgTermite,
  about: "Subterranean termites (incl. invasive Formosan) tunnel up from soil; drywood termites live entirely inside wood. Damage is rarely covered by insurance.",
  signs: ["Mud tubes on foundation walls", "Discarded wings near windowsills", "Hollow-sounding or blistered wood"],
  risk: "Cause billions in structural damage every year across the U.S.",
};

const PEST_BEDBUG: Pest = {
  t: "Bed Bug Treatment",
  d: "Heat & chemical treatments for homes, hotels, and short-term rentals.",
  img: imgBedbug,
  about: "Tiny reddish-brown insects that feed on blood at night and hide in mattress seams, headboards, and baseboards. Hitchhike home from travel and rentals.",
  signs: ["Itchy bites in lines or clusters", "Tiny blood spots on sheets", "Sweet, musty odor in the bedroom"],
  risk: "Spread fast across units; hospitality killers — one room can shut a floor.",
};
const PEST_BEE: Pest = {
  t: "Bee Removal",
  d: "Live removal and hive extraction by trained specialists.",
  img: imgBee,
  about: "Honey bees and Africanized hybrids nest in walls, attics, irrigation boxes, and trees. Africanized colonies defend aggressively in massive swarms.",
  signs: ["Bees entering a single hole in siding", "Buzzing inside a wall", "Honeycomb visible in attic or shed"],
  risk: "Africanized swarm attacks can be fatal; abandoned hives draw rodents and roaches.",
};
const PEST_IGUANA: Pest = {
  t: "Iguana Removal",
  d: "Humane trapping and exclusion — South Florida specialty service.",
  img: imgIguana,
  about: "Invasive green iguanas grow up to 5 ft, devour landscaping, dig burrows that undermine seawalls, and leave heavy droppings on patios and pool decks.",
  signs: ["Burrows along seawalls or canals", "Stripped hibiscus and bougainvillea", "Droppings on docks and decks"],
  risk: "Structural damage to seawalls and foundations; salmonella in droppings.",
  unique: "miami",
};
const PEST_NOSEEUM: Pest = {
  t: "No-See-Um Control",
  d: "Yard misting and harborage treatment for biting midges.",
  img: imgNoseeum,
  about: "Tiny biting midges nearly invisible to the naked eye — punch through standard window screens. Brutal at dusk near the coast and Intracoastal.",
  signs: ["Itchy welts with no visible bug", "Worse at dawn and dusk", "Activity near brackish water"],
  risk: "Bites swell and itch for days; can ruin outdoor dining and rentals.",
  unique: "miami",
};
const PEST_WHITEFLY: Pest = {
  t: "Whitefly Treatment",
  d: "Systemic and foliar treatments for ficus, gumbo limbo, and palms.",
  img: imgWhitefly,
  about: "Tiny white flying insects that suck sap from ornamentals. Ficus whitefly has devastated South Florida hedges and high-end landscaping.",
  signs: ["Sticky honeydew on cars and patios", "Black sooty mold on leaves", "Defoliating ficus hedges"],
  risk: "Kills mature hedges and palms; replacement landscaping runs into thousands.",
  unique: "miami",
};
const PEST_WILDLIFE: Pest = {
  t: "Nuisance Wildlife",
  d: "Raccoons, opossums, and squirrels — humane trapping and exclusion.",
  img: imgWildlife,
  about: "Attic and soffit intruders that tear insulation, contaminate ducts, and bring in fleas and ticks. Common in older Miami neighborhoods with mature canopy.",
  signs: ["Heavy thumping in the attic at night", "Torn soffit vents or roof returns", "Droppings in the attic or under decks"],
  risk: "Rabies risk, parasite spread, fire hazard from chewed wiring.",
  unique: "miami",
};
const PEST_PIGEON: Pest = {
  t: "Pigeon & Bird Control",
  d: "Netting, spikes, and solar-panel exclusion across the Valley.",
  img: imgPigeon,
  about: "Pigeons roost under solar panels, on parapets, and in signage. Their droppings are corrosive and their nests are flammable mats of dry debris.",
  signs: ["Droppings on driveways and walkways", "Cooing under solar arrays", "Nesting debris in gutters"],
  risk: "Histoplasmosis, roof damage, voided solar warranties, fire risk.",
  unique: "arizona",
};
const PEST_KISSINGBUG: Pest = {
  t: "Kissing Bug Control",
  d: "Targeted exterior treatment and exclusion for conenose bugs.",
  img: imgKissingbug,
  about: "Sonoran Desert conenose bugs feed on blood at night and are drawn to packrat nests, kennels, and outdoor lights. Active during monsoon nights.",
  signs: ["Painless bite welts on face/arms", "Bugs near porch lights at night", "Activity near pack rat nests"],
  risk: "Can transmit Trypanosoma cruzi (Chagas disease) — a serious chronic illness.",
  unique: "arizona",
};
const PEST_RATTLESNAKE: Pest = {
  t: "Rattlesnake Removal",
  d: "Safe relocation and yard hardening to keep snakes out.",
  img: imgRattlesnake,
  about: "Western diamondbacks and Mojaves move through Valley yards, especially in spring and after monsoon storms. Hide under AC units, in garages, and pool equipment.",
  signs: ["Shed skins along block walls", "Sightings near pool equipment", "Dogs alerting to a corner of the yard"],
  risk: "Bites are medical emergencies — antivenom runs $50k+; pets often don't survive.",
  unique: "arizona",
};
const PEST_PACKRAT: Pest = {
  t: "Pack Rat Control",
  d: "Nest removal and exclusion focused on landscaping and engine bays.",
  img: imgPackrat,
  about: "Desert woodrats build huge stick nests in cactus, BBQs, and engine compartments. Notorious for chewing wiring on cars left outdoors.",
  signs: ["Stick mounds against block walls", "Shiny objects collected in nests", "Chewed engine wiring or hoses"],
  risk: "Thousands in vehicle damage; nests harbor kissing bugs and scorpions.",
  unique: "arizona",
};
const PEST_CRICKET: Pest = {
  t: "Cricket Control",
  d: "Perimeter treatment for monsoon-season invasions.",
  img: imgCricket,
  about: "Field crickets swarm Valley homes during monsoon — drawn to outdoor lights, they pile up at doorways and slip into garages and laundry rooms by the dozen.",
  signs: ["Loud chirping at night", "Crickets piled at exterior lights", "Activity in garages after storms"],
  risk: "Damage paper, fabric, and plants; constant noise and gross-out factor.",
  unique: "arizona",
};

const miamiPests: Pest[] = [
  PEST_ANT,
  PEST_BEDBUG,
  PEST_BEE,
  PEST_COCKROACH,
  PEST_COMMERCIAL,
  PEST_EARWIG,
  PEST_FLEA,
  PEST_GENERAL,
  PEST_HORNET,
  PEST_IGUANA,
  PEST_MOSQUITO,
  PEST_NOSEEUM,
  PEST_RODENT,
  PEST_SILVERFISH,
  PEST_SPIDER,
  PEST_TERMITE,
  PEST_WASP,
  PEST_WHITEFLY,
  PEST_WILDLIFE,
];

const arizonaPests: Pest[] = [
  PEST_ANT,
  PEST_BEDBUG,
  PEST_BEE,
  PEST_COCKROACH,
  PEST_COMMERCIAL,
  PEST_CRICKET,
  PEST_EARWIG,
  PEST_FLEA,
  PEST_GENERAL,
  PEST_HORNET,
  PEST_KISSINGBUG,
  PEST_PACKRAT,
  PEST_PIGEON,
  PEST_RATTLESNAKE,
  PEST_RODENT,
  PEST_SCORPION,
  PEST_SILVERFISH,
  PEST_SPIDER,
  PEST_TERMITE,
  PEST_WASP,
];

const miamiCities = ["Miami", "Miami Beach", "Brickell", "Coral Gables", "Coconut Grove", "Wynwood", "Aventura", "Doral"];
const azCities = ["Scottsdale", "Phoenix", "Gilbert", "Chandler", "Mesa", "Queen Creek", "Tempe", "Ahwatukee"];

const testimonials = [
  { name: "Adrian Ptak", city: "Scottsdale, AZ", quote: "Absolute pleasure working with AP Pest. My area was a bit out of their service area but they said no worries — and that they did." },
  { name: "Tasia McWilliams", city: "Scottsdale, AZ", quote: "Matt paid close attention to detail, especially around entry points I didn't even know existed. Thoughtful about our 1-year-old." },
  { name: "Brittany David", city: "Phoenix, AZ", quote: "Their team is extremely knowledgeable, reliable, and will make sure your pest and rodent problems are quickly handled." },
];

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="AP Pest" className="h-9 w-auto" />
          <span className="hidden sm:inline font-display font-bold text-lg tracking-[0.25em] text-foreground">
            AP <span className="text-gradient-miami">PEST</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest text-muted-foreground">
          <a href="#miami" className="hover:text-neon-pink transition">Miami, FL</a>
          <a href="#arizona" className="hover:text-neon-cyan transition">Arizona</a>
          <a href="#services" className="hover:text-foreground transition">Services</a>
          <a href="#reviews" className="hover:text-foreground transition">Reviews</a>
          <a href="#contact" className="hover:text-foreground transition">Contact</a>
        </nav>
        <a href="tel:+16028824013" className="text-xs uppercase tracking-[0.2em] px-4 py-2 rounded-sm bg-gradient-miami text-primary-foreground font-semibold shadow-neon hover:opacity-90 transition">
          Free Quote
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0 grid grid-cols-2">
        <img src={miamiHero} alt="" className="w-full h-full object-cover opacity-50" />
        <img src={valleyHero} alt="" className="w-full h-full object-cover opacity-40" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      <div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-neon-pink/60 to-transparent" />
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 w-full text-center">
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.4em] text-neon-cyan mb-6 animate-flicker">
          ◢ Two coasts · One standard
        </p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9]">
          Pest control for
          <br />
          <span className="text-gradient-miami glow-text italic">Miami</span>
          <span className="text-muted-foreground"> & </span>
          <span className="text-gradient-miami glow-text italic">Arizona.</span>
        </h1>
        <p className="mt-6 sm:mt-8 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground px-2">
          Independent, family-owned, and obsessed with sustainable pest control.
          Pick your region — we'll show up fast and do it right.
        </p>
        <div className="mt-12 grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <a href="#miami" className="group p-6 border border-neon-pink/40 hover:border-neon-pink hover:bg-neon-pink/5 transition text-left">
            <div className="text-xs uppercase tracking-[0.3em] text-neon-pink">Florida</div>
            <div className="text-2xl font-display font-bold mt-2">Miami, FL →</div>
            <div className="text-sm text-muted-foreground mt-1">Mosquitoes · Roaches · Termites</div>
          </a>
          <a href="#arizona" className="group p-6 border border-neon-cyan/40 hover:border-neon-cyan hover:bg-neon-cyan/5 transition text-left">
            <div className="text-xs uppercase tracking-[0.3em] text-neon-cyan">Arizona</div>
            <div className="text-2xl font-display font-bold mt-2">The Valley →</div>
            <div className="text-sm text-muted-foreground mt-1">Scorpions · Rodents · Ants</div>
          </a>
        </div>
      </div>
    </section>
  );
}

function RegionSection({
  id, eyebrow, title, italic, copy, cities, pests, image, accent, reverse,
}: {
  id: string; eyebrow: string; title: string; italic: string; copy: string;
  cities: string[]; pests: Pest[]; image: string;
  accent: "pink" | "cyan"; reverse?: boolean;
}) {
  const [active, setActive] = useState(0);
  const accentText = accent === "pink" ? "text-neon-pink" : "text-neon-cyan";
  const accentBorder = accent === "pink" ? "border-neon-pink/40" : "border-neon-cyan/40";
  const accentBorderStrong = accent === "pink" ? "border-neon-pink" : "border-neon-cyan";
  const accentBg = accent === "pink" ? "bg-neon-pink/5" : "bg-neon-cyan/5";
  const selected = pests[active];

  return (
    <section id={id} className="relative py-20 md:py-28 border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12 md:mb-16 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
          <div className="lg:col-span-5">
            <div className={`relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/5] border ${accentBorder} p-1`}>
              <div className={`absolute -inset-4 ${accent === "pink" ? "bg-gradient-miami" : "bg-gradient-sunset"} blur-3xl opacity-20 -z-10`} />
              <img src={image} alt={title} loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute bottom-3 left-3 right-3 backdrop-blur-md bg-background/70 border border-border p-3 sm:p-4">
                <p className={`text-[10px] sm:text-xs uppercase tracking-[0.3em] ${accentText}`}>Service area</p>
                <p className="text-lg sm:text-xl font-display font-bold mt-1">{title}</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className={`text-[10px] sm:text-xs uppercase tracking-[0.4em] ${accentText} mb-4`}>◢ {eyebrow}</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-[0.9]">
              {title.split(" ")[0]} <span className="italic text-gradient-miami">{italic}</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-xl">{copy}</p>
            <div>
              <p className={`text-[10px] sm:text-xs uppercase tracking-[0.3em] ${accentText} mb-3`}>Cities served</p>
              <div className="flex flex-wrap gap-2">
                {cities.map((c) => (
                  <span key={c} className="text-[10px] sm:text-xs px-3 py-1.5 border border-border bg-card/50 uppercase tracking-wider">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Interactive pests */}
        <div>
          <div className="flex items-end justify-between flex-wrap gap-3 mb-6">
            <p className={`text-[10px] sm:text-xs uppercase tracking-[0.3em] ${accentText}`}>◢ Tap a pest</p>
            <p className="text-xs text-muted-foreground">{pests.length} programs</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Pest grid */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-3 sm:grid-cols-3 gap-2 sm:gap-3">
                {pests.map((p, i) => {
                  const isActive = i === active;
                  return (
                    <button
                      key={p.t}
                      onClick={() => setActive(i)}
                      className={`group relative aspect-square border ${isActive ? `${accentBorderStrong} ${accentBg} shadow-neon` : "border-border bg-card/30"} p-2 sm:p-3 transition-all hover:${accentBorderStrong.replace("border-", "border-")} flex flex-col items-center justify-center text-center`}
                      aria-label={p.t}
                    >
                      {p.unique && (
                        <span
                          className="absolute top-1 right-1 text-sm sm:text-base leading-none"
                          title={REGION_FLAG[p.unique].label}
                          aria-label={REGION_FLAG[p.unique].label}
                        >
                          {REGION_FLAG[p.unique].emoji}
                        </span>
                      )}
                      <img
                        src={p.img}
                        alt={p.t}
                        loading="lazy"
                        className={`w-full h-full max-h-[60%] object-contain transition-transform ${isActive ? "scale-110" : "group-hover:scale-105 opacity-80"}`}
                      />
                      <span className={`mt-1 text-[9px] sm:text-[10px] uppercase tracking-wider font-bold ${isActive ? accentText : "text-muted-foreground"}`}>
                        {p.t.replace(" Control", "").replace(" Defense", "").replace(" Treatment", "").replace(" Removal", "")}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Detail panel */}
            <div className="lg:col-span-5">
              <div className={`relative border ${accentBorderStrong} ${accentBg} p-6 sm:p-8 h-full min-h-[280px] flex flex-col gap-5`}>
                <div className="flex items-center gap-4">
                  <img
                    src={selected.img}
                    alt={selected.t}
                    className="w-20 h-20 sm:w-28 sm:h-28 object-contain animate-float shrink-0"
                  />
                  <div className="flex-1">
                    <p className={`text-[10px] uppercase tracking-[0.3em] ${accentText} mb-1`}>Program</p>
                    <h3 className="text-xl sm:text-2xl font-black font-display leading-tight">{selected.t}</h3>
                    {selected.unique && (
                      <span className={`inline-flex items-center gap-1.5 mt-2 px-2 py-1 border ${accentBorderStrong} ${accentBg} text-[10px] uppercase tracking-[0.2em] font-bold`}>
                        <span className="text-base leading-none">{REGION_FLAG[selected.unique].emoji}</span>
                        {REGION_FLAG[selected.unique].label}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <p className={`text-[10px] uppercase tracking-[0.3em] ${accentText} mb-2`}>What it is</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{selected.about}</p>
                </div>

                <div>
                  <p className={`text-[10px] uppercase tracking-[0.3em] ${accentText} mb-2`}>Signs you have them</p>
                  <ul className="space-y-1.5">
                    {selected.signs.map((s) => (
                      <li key={s} className="text-sm text-foreground/90 flex gap-2 leading-relaxed">
                        <span className={accentText}>◆</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-border">
                  <p className={`text-[10px] uppercase tracking-[0.3em] ${accentText} mb-2`}>Why it matters</p>
                  <p className="text-sm text-foreground/80 leading-relaxed">{selected.risk}</p>
                </div>

                <div>
                  <p className={`text-[10px] uppercase tracking-[0.3em] ${accentText} mb-2`}>Our approach</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{selected.d}</p>
                </div>
              </div>
            </div>
          </div>

          <a href="#contact" className="inline-block mt-10 px-8 py-4 bg-gradient-miami text-primary-foreground font-bold uppercase tracking-widest text-sm shadow-neon">
            Book {title.split(",")[0]} Service
          </a>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { t: "Guaranteed", d: "Satisfaction guarantee — if it's not right, we make it right." },
    { t: "Family Owned", d: "Independent and local. You talk to the people doing the work." },
    { t: "Pet & Family Safe", d: "Environmentally responsible products around kids and pets." },
    { t: "Fast Response", d: "Free quotes and quick scheduling across both regions." },
    { t: "Up-to-date Methods", d: "Custom plans, modern tools, no cookie-cutter spray jobs." },
    { t: "Real Results", d: "Skilled techs targeting scorpions, roaches, rodents — for good." },
  ];
  return (
    <section id="services" className="relative py-28 border-t border-border">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-neon-pink mb-4">◢ Why AP Pest</p>
          <h2 className="text-4xl md:text-6xl font-black">
            One standard. <span className="italic text-gradient-miami">Both coasts.</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {items.map((it) => (
            <div key={it.t} className="bg-background p-8 hover:bg-card transition">
              <h3 className="text-xl font-bold">{it.t}</h3>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="py-28 border-t border-border relative">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.4em] text-neon-cyan mb-4">◢ Google Reviews</p>
        <h2 className="text-4xl md:text-6xl font-black mb-16">
          Loved on <span className="italic text-gradient-miami">both coasts.</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.name} className="relative p-8 border border-border bg-card/40 backdrop-blur hover:border-neon-pink/60 hover:shadow-neon transition">
              <div className="text-neon-pink text-2xl mb-4">★★★★★</div>
              <blockquote className="text-foreground/90 leading-relaxed">"{t.quote}"</blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border">
                <div className="font-bold">{t.name}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{t.city}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", region: "miami", pest: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const schema = z.object({
      name: z.string().trim().min(1, "Name required").max(100),
      email: z.string().trim().email("Valid email required").max(255),
      phone: z.string().trim().max(30).optional().or(z.literal("")),
      region: z.string(),
      pest: z.string().trim().max(100).optional().or(z.literal("")),
      message: z.string().trim().min(1, "Tell us a bit about the issue").max(1000),
    });
    const result = schema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    const subject = encodeURIComponent(`New estimate request — ${form.region === "miami" ? "Miami" : "Arizona"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nRegion: ${form.region}\nPest: ${form.pest}\n\n${form.message}`
    );
    window.location.href = `mailto:hello@ap-pest-control.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    toast.success("Opening your email — we'll reply fast.");
  };

  return (
    <section id="contact" className="relative py-20 md:py-28 border-t border-border overflow-hidden">
      <div className="absolute inset-0 bg-gradient-sunset opacity-15" />
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-neon-cyan mb-6">◢ Free estimate</p>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Remove pesky pests <span className="italic text-gradient-miami glow-text">today.</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-8">
            Tell us where the trouble is — Miami or the Valley — we'll show up
            fast with a plan that actually works.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:+16028824013" className="px-6 py-4 bg-gradient-miami text-primary-foreground font-bold uppercase tracking-widest text-xs shadow-neon hover:scale-[1.02] transition text-center">
              Call (602) 882-4013
            </a>
            <a href="mailto:hello@ap-pest-control.com" className="px-6 py-4 border border-neon-cyan/60 text-neon-cyan uppercase tracking-widest text-xs hover:bg-neon-cyan/10 transition text-center">
              Email us
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-card/60 backdrop-blur border border-border p-6 md:p-8 space-y-4 shadow-neon"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-neon-pink">Request a quote</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground mb-1 block">Name</label>
              <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={100} required />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground mb-1 block">Email</label>
              <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={255} required />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground mb-1 block">Phone</label>
              <Input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} maxLength={30} />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground mb-1 block">Region</label>
              <select
                value={form.region}
                onChange={(e) => setForm({ ...form, region: e.target.value })}
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm"
              >
                <option value="miami">Miami, FL</option>
                <option value="arizona">Arizona Valley</option>
              </select>
            </div>
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground mb-1 block">Pest (optional)</label>
            <Input value={form.pest} onChange={(e) => setForm({ ...form, pest: e.target.value })} placeholder="Roaches, scorpions, termites…" maxLength={100} />
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground mb-1 block">What's going on?</label>
            <Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} maxLength={1000} rows={4} required />
          </div>
          <button
            type="submit"
            className="w-full px-8 py-4 bg-gradient-miami text-primary-foreground font-bold uppercase tracking-widest text-sm shadow-neon hover:scale-[1.01] transition"
          >
            {submitted ? "Sent — we'll be in touch" : "Send request"}
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-sm text-muted-foreground">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="AP Pest" className="h-10 w-auto" />
            <span className="font-display font-bold tracking-[0.25em] text-foreground">
              AP <span className="text-gradient-miami">PEST</span>
            </span>
          </div>
          <p className="mt-4">Independent & family owned. Sustainable pest control across Miami and the Arizona Valley.</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-neon-pink mb-3">Miami, FL</p>
          <p>{miamiCities.slice(0, 4).join(" · ")}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-neon-cyan mb-3">Arizona</p>
          <p>{azCities.slice(0, 4).join(" · ")}</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-8 text-xs text-muted-foreground">
        © {new Date().getFullYear()} AP Pest Control.
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <RegionSection
          id="miami"
          eyebrow="Now serving"
          title="Miami, FL"
          italic="Florida."
          copy="From South Beach high-rises to Coral Gables homes, we built a Florida program around humidity, ocean air, and the pests that thrive in both. Mosquitoes, roaches, termites, rodents — handled."
          cities={miamiCities}
          pests={miamiPests}
          image={miamiHero}
          accent="pink"
        />
        <RegionSection
          id="arizona"
          eyebrow="Where it started"
          title="The Valley, AZ"
          italic="Arizona."
          copy="More than a decade protecting Arizona homes from scorpions, roof rats, ants, and everything else the desert serves up after sundown. Same family. Same standard."
          cities={azCities}
          pests={arizonaPests}
          image={valleyHero}
          accent="cyan"
          reverse
        />
        <WhyUs />
        <Reviews />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
