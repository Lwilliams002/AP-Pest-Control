import { useEffect, useRef, type CSSProperties } from "react";
import antImg from "@/assets/pests/ant.png";
import roachImg from "@/assets/pests/cockroach.png";
import spiderImg from "@/assets/pests/spider.png";
import mosquitoImg from "@/assets/pests/mosquito.png";
import scorpionImg from "@/assets/pests/scorpion.png";
import termiteImg from "@/assets/pests/termite.png";
import bedbugImg from "@/assets/pests/bedbug.png";
import waspImg from "@/assets/pests/wasp.png";

type PestCrawlerConfig = {
  id: string;
  className: string;
  image: string;
  top: number;
  startX: number;
  angle: number;
  speed: number;
  turnEvery: number;
  maxTurn: number;
  wiggle: number;
};

const pestCrawlers = [
  {
    id: "ant-1",
    className: "pest-ant",
    image: antImg,
    top: 8,
    startX: -8,
    angle: 8,
    speed: 34,
    turnEvery: 1.8,
    maxTurn: 28,
    wiggle: 9,
  },
  {
    id: "roach-1",
    className: "pest-roach slow",
    image: roachImg,
    top: 22,
    startX: 18,
    angle: -4,
    speed: 26,
    turnEvery: 2.4,
    maxTurn: 22,
    wiggle: 7,
  },
  {
    id: "spider-1",
    className: "pest-spider",
    image: spiderImg,
    top: 38,
    startX: 96,
    angle: 184,
    speed: 24,
    turnEvery: 1.6,
    maxTurn: 36,
    wiggle: 12,
  },
  {
    id: "termite-1",
    className: "pest-termite",
    image: termiteImg,
    top: 55,
    startX: 40,
    angle: 12,
    speed: 30,
    turnEvery: 1.4,
    maxTurn: 20,
    wiggle: 8,
  },
  {
    id: "scorpion-1",
    className: "pest-scorpion slow",
    image: scorpionImg,
    top: 70,
    startX: 82,
    angle: 176,
    speed: 20,
    turnEvery: 2.8,
    maxTurn: 24,
    wiggle: 6,
  },
  {
    id: "mosquito-1",
    className: "pest-mosquito",
    image: mosquitoImg,
    top: 86,
    startX: -2,
    angle: -10,
    speed: 42,
    turnEvery: 1.1,
    maxTurn: 42,
    wiggle: 16,
  },
  {
    id: "bedbug-1",
    className: "pest-bedbug",
    image: bedbugImg,
    top: 14,
    startX: 66,
    angle: 190,
    speed: 22,
    turnEvery: 2,
    maxTurn: 18,
    wiggle: 7,
  },
  {
    id: "wasp-1",
    className: "pest-wasp slow",
    image: waspImg,
    top: 62,
    startX: 24,
    angle: 2,
    speed: 36,
    turnEvery: 1.2,
    maxTurn: 38,
    wiggle: 14,
  },
  {
    id: "ant-2",
    className: "pest-ant",
    image: antImg,
    top: 30,
    startX: 8,
    angle: 18,
    speed: 38,
    turnEvery: 0.95,
    maxTurn: 34,
    wiggle: 13,
  },
  {
    id: "roach-2",
    className: "pest-roach",
    image: roachImg,
    top: 48,
    startX: 110,
    angle: 172,
    speed: 23,
    turnEvery: 3.1,
    maxTurn: 18,
    wiggle: 5,
  },
  {
    id: "spider-2",
    className: "pest-spider slow",
    image: spiderImg,
    top: 80,
    startX: 56,
    angle: 202,
    speed: 21,
    turnEvery: 1.35,
    maxTurn: 44,
    wiggle: 15,
  },
  {
    id: "termite-2",
    className: "pest-termite",
    image: termiteImg,
    top: 6,
    startX: 52,
    angle: -6,
    speed: 32,
    turnEvery: 1.65,
    maxTurn: 24,
    wiggle: 10,
  },
  {
    id: "scorpion-2",
    className: "pest-scorpion slow",
    image: scorpionImg,
    top: 91,
    startX: 104,
    angle: 188,
    speed: 18,
    turnEvery: 3.6,
    maxTurn: 20,
    wiggle: 5,
  },
  {
    id: "mosquito-2",
    className: "pest-mosquito",
    image: mosquitoImg,
    top: 18,
    startX: 34,
    angle: 28,
    speed: 48,
    turnEvery: 0.75,
    maxTurn: 52,
    wiggle: 20,
  },
  {
    id: "bedbug-2",
    className: "pest-bedbug",
    image: bedbugImg,
    top: 66,
    startX: 72,
    angle: 194,
    speed: 20,
    turnEvery: 2.65,
    maxTurn: 16,
    wiggle: 6,
  },
  {
    id: "wasp-2",
    className: "pest-wasp",
    image: waspImg,
    top: 42,
    startX: -12,
    angle: -18,
    speed: 44,
    turnEvery: 0.9,
    maxTurn: 46,
    wiggle: 18,
  },
] satisfies PestCrawlerConfig[];

const degreesToRadians = (degrees: number) => (degrees * Math.PI) / 180;

type CrawlerState = PestCrawlerConfig & {
  el: HTMLSpanElement;
  x: number;
  y: number;
  radians: number;
  nextTurn: number;
  size: number;
  seed: number;
};

function PestCrawler({
  pest,
  setRef,
}: {
  pest: PestCrawlerConfig;
  setRef: (node: HTMLSpanElement | null) => void;
}) {
  return (
    <span
      ref={setRef}
      className={`pest-crawler is-js-crawler ${pest.className}`}
      style={{ "--start-top": `${pest.top}%` } as CSSProperties}
    >
      <img src={pest.image} alt="" decoding="async" />
    </span>
  );
}

export function PestCrawlerSwarm() {
  const swarmRef = useRef<HTMLDivElement | null>(null);
  const crawlerRefs = useRef<Array<HTMLSpanElement | null>>([]);

  useEffect(() => {
    const swarm = swarmRef.current;
    if (!swarm) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = swarm.clientWidth;
    let height = swarm.clientHeight;

    const refreshBounds = () => {
      width = swarm.clientWidth;
      height = swarm.clientHeight;
    };

    const crawlers: CrawlerState[] = pestCrawlers.flatMap((pest, index) => {
      const el = crawlerRefs.current[index];
      if (!el) return [];

      const rect = el.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height, 36);

      return [
        {
          ...pest,
          el,
          x: (width * pest.startX) / 100,
          y: (height * pest.top) / 100,
          radians: degreesToRadians(pest.angle),
          nextTurn: pest.turnEvery * (0.35 + ((index * 37) % 100) / 75),
          size,
          seed: index * 2.381 + pest.startX * 0.017 + pest.top * 0.031 + 0.41,
        },
      ];
    });

    const placeCrawler = (crawler: CrawlerState, rotation: number) => {
      crawler.el.style.transform = `translate3d(${crawler.x}px, ${crawler.y}px, 0) rotate(${rotation}rad)`;
    };

    refreshBounds();
    crawlers.forEach((crawler) => placeCrawler(crawler, crawler.radians));

    if (reduceMotion || crawlers.length === 0) return;

    const resizeObserver = new ResizeObserver(refreshBounds);
    resizeObserver.observe(swarm);

    let raf = 0;
    let previous = performance.now();

    const tick = (now: number) => {
      const delta = Math.min((now - previous) / 1000, 0.05);
      previous = now;

      crawlers.forEach((crawler) => {
        crawler.nextTurn -= delta;

        if (crawler.nextTurn <= 0) {
          const turnPulse = now * (0.00075 + (crawler.seed % 5) * 0.00014) + crawler.seed;
          const turnDirection = Math.sin(turnPulse) > 0 ? 1 : -1;
          const turnAmount =
            crawler.maxTurn *
            (0.25 +
              Math.abs(Math.sin(now * (0.0005 + (crawler.seed % 3) * 0.00013) + crawler.seed)) *
                0.75);
          crawler.radians += degreesToRadians(turnAmount * turnDirection);
          crawler.nextTurn =
            crawler.turnEvery *
            (0.55 +
              Math.abs(Math.cos(now * (0.0004 + (crawler.seed % 4) * 0.0001) + crawler.seed)) *
                1.15);
        }

        const wiggle = degreesToRadians(
          Math.sin(now * (0.0035 + (crawler.seed % 7) * 0.00055) + crawler.seed) * crawler.wiggle,
        );
        const travelAngle = crawler.radians + wiggle * 0.45;

        crawler.x += Math.cos(travelAngle) * crawler.speed * delta;
        crawler.y += Math.sin(travelAngle) * crawler.speed * delta;

        if (crawler.x > width + crawler.size) crawler.x = -crawler.size;
        if (crawler.x < -crawler.size) crawler.x = width + crawler.size;

        const minY = crawler.size * 0.2;
        const maxY = Math.max(height - crawler.size * 1.2, minY);

        if (crawler.y < minY) {
          crawler.y = minY;
          crawler.radians = Math.abs(crawler.radians);
        }

        if (crawler.y > maxY) {
          crawler.y = maxY;
          crawler.radians = -Math.abs(crawler.radians);
        }

        placeCrawler(crawler, crawler.radians + wiggle);
      });

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div ref={swarmRef} className="pest-swarm" aria-hidden>
      {pestCrawlers.map((pest, index) => (
        <PestCrawler
          key={pest.id}
          pest={pest}
          setRef={(node) => {
            crawlerRefs.current[index] = node;
          }}
        />
      ))}
    </div>
  );
}
