export type Variant = {
  id: string;
  name: string;
  price: number;
  badge?: string;
  includes: string[];
};

export type Product = {
  slug: string;
  brand: string;
  name: string;
  category: string;
  tagline: string;
  headline: string;
  summary: string;
  image: string;
  hero: string;
  gallery: { src: string; alt: string }[];
  stats: { value: string; label: string }[];
  highlights: { title: string; body: string; image: string }[];
  idealFor: { title: string; body: string }[];
  notFor?: string;
  specs: { label: string; value: string }[];
  /** Footnote under the specs table (drones get a flight-time note by default). */
  specsNote?: string;
  faqs: { q: string; a: string }[];
  variants: Variant[];
};

const m5 = "/products/mini-5-pro";
const a3 = "/products/air-3s";
const fl = "/products/flip";
const m4 = "/products/mini-4-pro";

export const products: Product[] = [
  {
    slug: "dji-mini-5-pro",
    brand: "DJI",
    name: "DJI Mini 5 Pro",
    category: "Drones",
    tagline: "1-inch camera. Under 250 g.",
    headline: "Pro-level aerial footage from a drone that fits in your hand.",
    summary:
      "The Mini 5 Pro puts a 50MP 1-inch sensor, 4K/120fps video and all-round obstacle sensing into a foldable drone that weighs under 250 g. It's built for creators who want cinematic shots without carrying a big drone.",
    image: `${m5}/main.png`,
    hero: `${m5}/lake.jpg`,
    gallery: [
      { src: `${m5}/main.png`, alt: "DJI Mini 5 Pro drone" },
      { src: `${m5}/lake.jpg`, alt: "Mountain lake reflection shot on Mini 5 Pro" },
      { src: `${m5}/handheld.jpg`, alt: "Folded Mini 5 Pro held in one hand" },
      { src: `${m5}/camera.jpg`, alt: "Mini 5 Pro 1-inch camera close-up" },
    ],
    stats: [
      { value: "1-inch", label: "50MP CMOS sensor" },
      { value: "4K/120", label: "Slow-motion video" },
      { value: "<250 g", label: "Take-off weight" },
      { value: "Up to 52 min", label: "Flight time*" },
    ],
    highlights: [
      {
        title: "A big 1-inch sensor in a mini drone",
        body: "More light, more detail and cleaner night shots. Shoot 50MP stills and 4K video up to 120fps, with 10-bit D-Log M when you want to colour grade.",
        image: `${m5}/camera.jpg`,
      },
      {
        title: "True vertical shooting for Reels & TikTok",
        body: "The gimbal rotates for native portrait shots, so you get full-quality vertical content without cropping. Post straight to social.",
        image: `${m5}/portrait.jpg`,
      },
      {
        title: "Sees in every direction",
        body: "Omnidirectional obstacle sensing with a forward LiDAR helps the drone avoid trees and buildings, even in low light. Great for beginners and confident pilots alike.",
        image: `${m5}/sensing.jpg`,
      },
      {
        title: "Smooth, cinematic movement",
        body: "A stabilised gimbal and intelligent tracking (ActiveTrack) keep your subject in frame while you focus on the story.",
        image: `${m5}/gimbal.jpg`,
      },
    ],
    idealFor: [
      { title: "Content creators", body: "Vertical-ready aerials for Reels, TikTok and YouTube." },
      { title: "Event & wedding videographers", body: "Add drone shots to your packages without a heavy kit." },
      { title: "Real estate & hospitality", body: "Clean, sharp property and location footage." },
      { title: "Travellers", body: "Fits in a small bag. No heavy case to carry." },
    ],
    notFor:
      "Need a drone for heavy wind, long-range industrial or mapping work? Message us and we'll point you to the right model.",
    specs: [
      { label: "Weight", value: "Under 250 g (standard battery)" },
      { label: "Camera sensor", value: "1-inch CMOS, 50MP" },
      { label: "Lens", value: "24mm equivalent, f/1.8" },
      { label: "Video", value: "4K up to 120fps" },
      { label: "Colour profile", value: "10-bit D-Log M" },
      { label: "Gimbal", value: "3-axis, rotates for true vertical shooting" },
      { label: "Obstacle sensing", value: "Omnidirectional, with forward LiDAR" },
      { label: "Max flight time", value: "36 min (standard) / 52 min (Battery Plus)" },
      { label: "Subject tracking", value: "ActiveTrack" },
      { label: "Controller", value: "DJI RC 2 (screen built in)" },
    ],
    faqs: [
      {
        q: "Is it easy to fly if I'm a beginner?",
        a: "Yes. GPS hold, return-to-home and all-round obstacle sensing make it one of the easiest drones to fly. We'll also guide you through your first setup.",
      },
      {
        q: "What's the difference between Fly More Combo and Fly More Combo Plus?",
        a: "Both come with the DJI RC 2 screen controller and extra batteries. The Plus version uses the larger Battery Plus for up to 52 minutes per battery (this makes the drone slightly heavier than 250 g).",
      },
      {
        q: "Do I need a phone to fly it?",
        a: "No. The DJI RC 2 controller has its own bright screen, so you can fly without connecting your phone.",
      },
      {
        q: "Can I post directly to Instagram or TikTok?",
        a: "Yes. Shoot in true vertical, then transfer clips to your phone with the DJI Fly app and post.",
      },
      {
        q: "How do I order?",
        a: "Pick your combo, tap \"Order on WhatsApp\" and send the message. We'll confirm availability, delivery and payment with you directly.",
      },
    ],
    variants: [
      {
        id: "fmc-rc2",
        name: "Fly More Combo (DJI RC 2)",
        price: 1_700_000,
        includes: [
          "Mini 5 Pro drone",
          "DJI RC 2 screen controller",
          "3 Intelligent Flight Batteries",
          "Charging hub",
          "Shoulder bag",
          "Spare propellers",
        ],
      },
      {
        id: "fmc-plus-rc2",
        name: "Fly More Combo Plus (DJI RC 2)",
        price: 1_800_000,
        badge: "Longest flight time",
        includes: [
          "Mini 5 Pro drone",
          "DJI RC 2 screen controller",
          "3 Intelligent Flight Batteries Plus (up to 52 min)",
          "Charging hub",
          "Shoulder bag",
          "Spare propellers",
        ],
      },
    ],
  },
  {
    slug: "dji-air-3s",
    brand: "DJI",
    name: "DJI Air 3S",
    category: "Drones",
    tagline: "Two cameras. One flight.",
    headline: "A dual-camera travel drone with a 1-inch sensor and a 70mm tele lens.",
    summary:
      "The Air 3S pairs a 50MP 1-inch main camera with a 70mm medium tele camera, so you can capture wide landscapes and tight, compressed shots in the same flight. Add 45 minutes of flight time, 20 km O4 video transmission and all-round obstacle sensing with LiDAR.",
    image: `${a3}/main.png`,
    hero: `${a3}/lake.jpg`,
    gallery: [
      { src: `${a3}/main.png`, alt: "DJI Air 3S drone" },
      { src: `${a3}/flying.jpg`, alt: "Air 3S flying over red rock canyon" },
      { src: `${a3}/lake.jpg`, alt: "Air 3S at dusk beside a lake" },
      { src: `${a3}/camera.jpg`, alt: "Air 3S dual camera close-up" },
    ],
    stats: [
      { value: "1-inch", label: "50MP main camera" },
      { value: "70mm", label: "48MP medium tele camera" },
      { value: "45 min", label: "Max flight time*" },
      { value: "20 km", label: "O4 video transmission" },
    ],
    highlights: [
      {
        title: "A 1-inch main camera with 14 stops of dynamic range",
        body: "Bright skies and deep shadows in the same frame, without losing detail. Shoot 50MP stills and 4K video up to 120fps, with 10-bit D-Log M for colour grading.",
        image: `${a3}/sensor.jpg`,
      },
      {
        title: "A 70mm tele lens for cinematic shots",
        body: "The second camera brings subjects closer and compresses the background. Perfect for portraits, cars, buildings and that layered, film-like look, without flying close.",
        image: `${a3}/tele.jpg`,
      },
      {
        title: "Sees obstacles, day and night",
        body: "Omnidirectional vision sensing plus a forward LiDAR help the Air 3S avoid obstacles, including in city lights and low light after sunset.",
        image: `${a3}/sensing.jpg`,
      },
      {
        title: "Smarter Return to Home",
        body: "The Air 3S remembers its route and plans a safe, efficient path back to you, even through built-up areas. Fly with more confidence.",
        image: `${a3}/rth.jpg`,
      },
    ],
    idealFor: [
      { title: "Videographers & filmmakers", body: "Two focal lengths in one drone for more varied, cinematic edits." },
      { title: "Real estate & tourism", body: "Wide property shots and tight detail shots in the same flight." },
      { title: "Travel creators", body: "Long flight time and strong transmission for big landscapes." },
      { title: "Upgrading from a Mini", body: "More range, more stability in wind and a second camera." },
    ],
    notFor:
      "Want the lightest drone possible for travel? Look at the DJI Mini 5 Pro. Not sure? Message us and we'll help you choose.",
    specs: [
      { label: "Weight", value: "724 g" },
      { label: "Main camera", value: "1-inch CMOS, 50MP, 24mm, f/1.8" },
      { label: "Tele camera", value: "1/1.3-inch CMOS, 48MP, 70mm, f/2.8" },
      { label: "Video", value: "4K up to 120fps, FHD up to 240fps" },
      { label: "Colour profile", value: "10-bit D-Log M and HLG" },
      { label: "Dynamic range", value: "Up to 14 stops" },
      { label: "Max flight time", value: "45 min" },
      { label: "Transmission", value: "DJI O4, up to 20 km (FCC)" },
      { label: "Obstacle sensing", value: "Omnidirectional, with forward LiDAR" },
      { label: "Internal storage", value: "42 GB" },
    ],
    faqs: [
      {
        q: "Air 3S or Mini 5 Pro: which should I buy?",
        a: "Both have a 1-inch camera. The Air 3S adds a 70mm tele camera, longer range and better stability in wind. The Mini 5 Pro is lighter and easier to carry. If you want more creative shots and a more confident flight, choose the Air 3S.",
      },
      {
        q: "What's the difference between the RC-N3 and the RC 2 controller?",
        a: "The DJI RC-N3 uses your phone as the screen. The DJI RC 2 has its own bright built-in screen, so you can fly without your phone. It's faster to set up and won't drain your phone battery.",
      },
      {
        q: "Is it heavier than a Mini drone?",
        a: "Yes. At 724 g it's heavier than the sub-250 g Mini series, which helps it stay steady in wind. Always check the local rules for where you plan to fly.",
      },
      {
        q: "Do I need a memory card?",
        a: "It has 42 GB of internal storage, so you can start flying right away. We recommend adding a fast microSD card for longer shoots.",
      },
      {
        q: "How do I order?",
        a: "Pick your package, tap \"Order on WhatsApp\" and send the message. We'll confirm availability, delivery and payment with you directly.",
      },
    ],
    variants: [
      {
        id: "rcn3",
        name: "Standard (DJI RC-N3)",
        price: 2_000_000,
        includes: [
          "Air 3S drone",
          "DJI RC-N3 controller (uses your phone)",
          "1 Intelligent Flight Battery",
          "Spare propellers",
          "Cables",
        ],
      },
      {
        id: "fmc-rcn3",
        name: "Fly More Combo (DJI RC-N3)",
        price: 2_200_000,
        includes: [
          "Air 3S drone",
          "DJI RC-N3 controller (uses your phone)",
          "3 Intelligent Flight Batteries",
          "Charging hub",
          "Shoulder bag",
          "ND filter set (ND8/32/128)",
          "Spare propellers",
        ],
      },
      {
        id: "fmc-rc2",
        name: "Fly More Combo (DJI RC 2)",
        price: 2_300_000,
        badge: "Screen controller",
        includes: [
          "Air 3S drone",
          "DJI RC 2 screen controller",
          "3 Intelligent Flight Batteries",
          "Charging hub",
          "Shoulder bag",
          "ND filter set (ND8/32/128)",
          "Spare propellers",
        ],
      },
    ],
  },
  {
    slug: "dji-flip",
    brand: "DJI",
    name: "DJI Flip",
    category: "Drones",
    tagline: "Launch from your palm. Fly anywhere.",
    headline: "A safe, foldable vlog drone with full propeller guards and a 4K camera.",
    summary:
      "The DJI Flip weighs under 249 g, folds flat and has full-coverage propeller guards, so you can launch it from your hand and fly close to people with confidence. It shoots 48MP photos and 4K/60fps HDR video, and follows you with one tap. No remote needed.",
    image: `${fl}/main.png`,
    hero: `${fl}/meadow.jpg`,
    gallery: [
      { src: `${fl}/main.png`, alt: "DJI Flip drone with propeller guards" },
      { src: `${fl}/family.jpg`, alt: "Family flying the DJI Flip in the mountains" },
      { src: `${fl}/meadow.jpg`, alt: "DJI Flip in a meadow with a child and a dog" },
      { src: `${fl}/portrait.jpg`, alt: "Portrait photo taken with the DJI Flip" },
    ],
    stats: [
      { value: "<249 g", label: "Take-off weight" },
      { value: "4K/60", label: "HDR video" },
      { value: "31 min", label: "Max flight time*" },
      { value: "13 km", label: "O4 video transmission" },
    ],
    highlights: [
      {
        title: "Full propeller guards. Launch from your palm.",
        body: "The foldable guards cover every propeller, so the Flip is safe to take off from your hand and fly near friends and family. Pick a mode, let go, and it starts filming.",
        image: `${fl}/palm.jpg`,
      },
      {
        title: "Follows you, hands-free",
        body: "Tap to track and the Flip follows you while you walk, run or cycle. Use quick modes like Dronie, Circle, Rocket and Helix for instant cinematic clips. No remote controller needed.",
        image: `${fl}/forest.jpg`,
      },
      {
        title: "A big 1/1.3-inch camera",
        body: "Shoot 48MP photos and 4K video at up to 60fps with HDR, or 100fps for slow motion. 10-bit D-Log M gives you room to colour grade, and vertical shooting is ready for Reels and TikTok.",
        image: `${fl}/sensor.jpg`,
      },
      {
        title: "Folds small, flies long",
        body: "Under 249 g and folds to the size of a water bottle. Get up to 31 minutes per battery and a stable O4 video feed up to 13 km away.",
        image: `${fl}/handheld.jpg`,
      },
    ],
    idealFor: [
      { title: "Vloggers & content creators", body: "Follows you and films itself. Perfect for solo shooting." },
      { title: "First-time drone owners", body: "Prop guards and palm launch make it easy and safe to start." },
      { title: "Families & travellers", body: "Light, foldable and safe to fly around people." },
      { title: "Events & lifestyle shoots", body: "Fly close to people for fresh, moving angles." },
    ],
    notFor:
      "Shooting in strong wind or need a 1-inch sensor for pro work? Look at the DJI Mini 5 Pro or Air 3S, or message us and we'll help you choose.",
    specs: [
      { label: "Weight", value: "Under 249 g" },
      { label: "Camera sensor", value: "1/1.3-inch CMOS, 48MP photos" },
      { label: "Lens", value: "24mm equivalent, f/1.7" },
      { label: "Video", value: "4K up to 100fps (60fps with HDR)" },
      { label: "Vertical video", value: "2.7K and FHD vertical shooting" },
      { label: "Colour profile", value: "10-bit D-Log M" },
      { label: "Max flight time", value: "31 min" },
      { label: "Transmission", value: "DJI O4, up to 13 km (FCC)" },
      { label: "Obstacle sensing", value: "Forward 3D infrared sensing" },
      { label: "Propeller guards", value: "Foldable, full coverage" },
      { label: "Internal storage", value: "2 GB" },
    ],
    faqs: [
      {
        q: "Can I fly it without a remote controller?",
        a: "Yes. You can launch it from your palm and use the quick modes (Follow, Dronie, Circle and more), or fly it with the DJI Fly app on your phone within a short range. For full range and manual flying, choose a package with a controller.",
      },
      {
        q: "What's the difference between the RC-N3 and the RC 2 controller?",
        a: "The DJI RC-N3 uses your phone as the screen. The DJI RC 2 has its own bright built-in screen, so you can fly without your phone.",
      },
      {
        q: "Is it safe to fly around people?",
        a: "The full-coverage propeller guards make it one of the safest DJI drones to fly near people. Always fly with care and keep a safe distance.",
      },
      {
        q: "Flip or Mini 5 Pro?",
        a: "Choose the Flip for hands-free vlogging and safe flying around people. Choose the Mini 5 Pro for a larger 1-inch sensor, all-round obstacle sensing and better wind handling.",
      },
      {
        q: "Do I need a memory card?",
        a: "Yes. The Flip has only 2 GB built in, so add a fast microSD card (64 GB or more). Ask us and we can add one to your order.",
      },
      {
        q: "How do I order?",
        a: "Pick your package, tap \"Order on WhatsApp\" and send the message. We'll confirm availability, delivery and payment with you directly.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "Standard (DJI RC-N3)",
        price: 1_000_000,
        includes: [
          "DJI Flip drone",
          "DJI RC-N3 controller (uses your phone)",
          "1 Intelligent Flight Battery",
          "Spare propellers",
          "Cables",
        ],
      },
      {
        id: "rc2",
        name: "Standard (DJI RC 2)",
        price: 1_400_000,
        badge: "Screen controller",
        includes: [
          "DJI Flip drone",
          "DJI RC 2 screen controller",
          "1 Intelligent Flight Battery",
          "Spare propellers",
          "Cables",
        ],
      },
      {
        id: "fmc-rc2",
        name: "Fly More Combo (DJI RC 2)",
        price: 1_600_000,
        badge: "Best value",
        includes: [
          "DJI Flip drone",
          "DJI RC 2 screen controller",
          "3 Intelligent Flight Batteries",
          "Charging hub",
          "Shoulder bag",
          "Spare propellers",
        ],
      },
    ],
  },
  {
    slug: "dji-mini-4-pro",
    brand: "DJI",
    name: "DJI Mini 4 Pro",
    category: "Drones",
    tagline: "Mini size. Pro safety.",
    headline: "A sub-249 g drone with all-round obstacle sensing and 4K/60fps HDR video.",
    summary:
      "The DJI Mini 4 Pro packs a 1/1.3-inch 48MP camera, omnidirectional obstacle sensing and ActiveTrack 360° into a drone that weighs under 249 g. Shoot 4K/60fps HDR and 10-bit D-Log M, fly up to 45 minutes with Plus batteries, and see a clear feed up to 20 km away.",
    image: `${m4}/main.png`,
    hero: `${m4}/sunset.jpg`,
    gallery: [
      { src: `${m4}/main.png`, alt: "DJI Mini 4 Pro drone" },
      { src: `${m4}/flying.jpg`, alt: "DJI Mini 4 Pro in flight" },
      { src: `${m4}/night.jpg`, alt: "City at night shot with the DJI Mini 4 Pro" },
      { src: `${m4}/city.jpg`, alt: "City skyline at sunset shot with the DJI Mini 4 Pro" },
    ],
    stats: [
      { value: "<249 g", label: "Take-off weight" },
      { value: "4K/60", label: "HDR video" },
      { value: "45 min", label: "Max flight time (Plus battery)*" },
      { value: "20 km", label: "O4 video transmission" },
    ],
    highlights: [
      {
        title: "A bigger camera for day and night",
        body: "The 1/1.3-inch 48MP sensor with an f/1.7 lens pulls clean detail from sunsets and city lights. Shoot 4K/60fps HDR, slow motion at 4K/100fps, and 10-bit D-Log M or HLG for colour grading.",
        image: `${m4}/camera.jpg`,
      },
      {
        title: "Sees in every direction",
        body: "Omnidirectional vision sensors and a 3D infrared sensor underneath help the Mini 4 Pro avoid obstacles all around, so you can fly through trees and tight spots with more confidence.",
        image: `${m4}/sensing.jpg`,
      },
      {
        title: "ActiveTrack 360°",
        body: "Lock on to yourself, a car or a bike and the drone follows smoothly while you draw the path on a trace wheel. Add Waypoint Flight and Cruise Control for repeatable, cinematic moves.",
        image: `${m4}/track.jpg`,
      },
      {
        title: "Long flights, long range",
        body: "Up to 34 minutes on the standard battery or 45 minutes with the Plus battery. DJI O4 sends a 1080p/60fps live feed up to 20 km away, and Advanced RTH brings it home safely.",
        image: `${m4}/lake.jpg`,
      },
    ],
    idealFor: [
      { title: "Content creators", body: "4K HDR, slow motion and tracking in a bag-friendly drone." },
      { title: "Real estate & tourism", body: "Smooth aerials with Waypoint Flight you can repeat." },
      { title: "Travellers", body: "Under 249 g and folds small enough for any backpack." },
      { title: "Upgraders from older Minis", body: "Big jump in safety, range and low-light video." },
    ],
    notFor:
      "Want a larger 1-inch sensor or a second zoom camera? Look at the DJI Mini 5 Pro or Air 3S, or message us and we'll help you choose.",
    specs: [
      { label: "Weight", value: "Under 249 g (over 249 g with Plus battery)" },
      { label: "Camera sensor", value: "1/1.3-inch CMOS, 48MP photos" },
      { label: "Lens", value: "24mm equivalent, f/1.7" },
      { label: "Video", value: "4K up to 100fps (60fps with HDR), FHD up to 200fps" },
      { label: "Colour profile", value: "10-bit D-Log M and HLG" },
      { label: "Max flight time", value: "34 min (45 min with Plus battery)" },
      { label: "Transmission", value: "DJI O4, up to 20 km (FCC)" },
      { label: "Obstacle sensing", value: "Omnidirectional vision + downward 3D infrared" },
      { label: "Tracking", value: "ActiveTrack 360°" },
      { label: "Wind resistance", value: "Up to 10.7 m/s" },
      { label: "Internal storage", value: "2 GB" },
    ],
    faqs: [
      {
        q: "What's the difference between the Fly More Combo and the Fly More Combo Plus?",
        a: "Both come with 3 batteries, a charging hub and a shoulder bag. The Plus version uses the larger Plus batteries for up to 45 minutes per flight instead of 34, but the drone then weighs slightly more than 249 g.",
      },
      {
        q: "What's the difference between the RC-N2 and the RC 2 controller?",
        a: "The DJI RC-N2 uses your phone as the screen. The DJI RC 2 has its own bright built-in screen, so you can fly without your phone.",
      },
      {
        q: "Mini 4 Pro or Mini 5 Pro?",
        a: "The Mini 5 Pro has a larger 1-inch sensor for better low-light and dynamic range. The Mini 4 Pro gives you most of the same safety and tracking features for less money.",
      },
      {
        q: "Can I fly it at night?",
        a: "Yes. The f/1.7 lens and night mode handle low light well. Obstacle sensing works less well in the dark, so fly with extra care.",
      },
      {
        q: "Do I need a memory card?",
        a: "Yes. There is only 2 GB built in, so add a fast microSD card (64 GB or more). Ask us and we can add one to your order.",
      },
      {
        q: "How do I order?",
        a: "Pick your package, tap \"Order on WhatsApp\" and send the message. We'll confirm availability, delivery and payment with you directly.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "Standard (DJI RC-N2)",
        price: 1_600_000,
        includes: [
          "DJI Mini 4 Pro drone",
          "DJI RC-N2 controller (uses your phone)",
          "1 Intelligent Flight Battery",
          "Spare propellers",
          "Cables",
        ],
      },
      {
        id: "rc2",
        name: "Standard (DJI RC 2)",
        price: 1_750_000,
        badge: "Screen controller",
        includes: [
          "DJI Mini 4 Pro drone",
          "DJI RC 2 screen controller",
          "1 Intelligent Flight Battery",
          "Spare propellers",
          "Cables",
        ],
      },
      {
        id: "fmc-rc2",
        name: "Fly More Combo (DJI RC 2)",
        price: 1_900_000,
        includes: [
          "DJI Mini 4 Pro drone",
          "DJI RC 2 screen controller",
          "3 Intelligent Flight Batteries (34 min)",
          "Charging hub",
          "Shoulder bag",
          "Spare propellers",
        ],
      },
      {
        id: "fmc-plus-rc2",
        name: "Fly More Combo Plus (DJI RC 2)",
        price: 1_900_000,
        badge: "45-min batteries",
        includes: [
          "DJI Mini 4 Pro drone",
          "DJI RC 2 screen controller",
          "3 Intelligent Flight Batteries Plus (45 min)",
          "Charging hub",
          "Shoulder bag",
          "Spare propellers",
        ],
      },
    ],
  },
  {
    slug: "dji-neo-2",
    brand: "DJI",
    name: "DJI Neo 2",
    category: "Drones",
    tagline: "Your pocket cameraman.",
    headline:
      "A 151 g selfie drone that takes off from your palm, follows you and films in 4K. No pilot skills needed.",
    summary:
      "Launch it from your hand, let it follow you, and land it back on your palm. The Neo 2 is the easiest way to get flying shots of yourself.",
    image: "/products/neo-2/main.png",
    hero: "/products/neo-2/kayak.jpg",
    gallery: [
      { src: "/products/neo-2/main.png", alt: "DJI Neo 2 drone" },
      { src: "/products/neo-2/palm.jpg", alt: "DJI Neo 2 hovering over a palm" },
      { src: "/products/neo-2/kayak.jpg", alt: "DJI Neo 2 filming kayakers on a lake" },
      { src: "/products/neo-2/family.jpg", alt: "DJI Neo 2 following a family and their dog" },
    ],
    stats: [
      { value: "151 g", label: "Fits in a jacket pocket" },
      { value: "4K/60", label: "2-axis gimbal video" },
      { value: "19 min", label: "Max flight time*" },
      { value: "49 GB", label: "Built-in storage" },
    ],
    highlights: [
      {
        title: "Take off from your palm",
        body: "Press a button and the Neo 2 lifts off your hand. Point with a gesture to steer it, then hold out your palm and it lands right back. You don't need a remote or a phone.",
        image: "/products/neo-2/palm.jpg",
      },
      {
        title: "It follows you on its own",
        body: "ActiveTrack keeps you in frame while you run, ride or paddle. Pick from 8 tracking angles or QuickShots like Dronie and Circle, and get a finished clip in seconds.",
        image: "/products/neo-2/run.jpg",
      },
      {
        title: "Sees what's around it",
        body: "Vision sensors all round, plus a forward LiDAR and a downward sensor, help it avoid obstacles. Full prop guards make it safe to fly close to people.",
        image: "/products/neo-2/sensing.jpg",
      },
      {
        title: "Smooth 4K for your socials",
        body: "A new 2-axis gimbal steadies 4K/60 video. Shoot 2.7K vertical clips for Reels and TikTok, or 4K/100 slow motion when you fly with a controller.",
        image: "/products/neo-2/family.jpg",
      },
    ],
    idealFor: [
      { title: "Content creators", body: "Hands-free shots of yourself for vlogs, Reels and TikTok." },
      { title: "Travel and outdoors", body: "Hiking, beach days and road trips. It's light enough to bring everywhere." },
      { title: "First-time flyers", body: "Palm launch, gestures and prop guards make it the easiest drone to start with." },
      { title: "Sport and fitness", body: "Let it follow your run, ride or workout while you focus on moving." },
    ],
    notFor:
      "Need sharper footage, longer flights or more range for client work? Look at the DJI Mini 4 Pro or Mini 5 Pro instead.",
    specs: [
      { label: "Weight", value: "151 g (160 g with Digital Transceiver)" },
      { label: "Camera", value: "1/2-inch CMOS, 12 MP, f/2.2" },
      { label: "Video", value: "4K/60fps; 4K/100fps slow motion (with controller)" },
      { label: "Vertical video", value: "2.7K/60fps" },
      { label: "Gimbal", value: "2-axis mechanical (tilt, roll)" },
      { label: "Max flight time", value: "19 minutes*" },
      { label: "Range", value: "Up to 10 km with Digital Transceiver + controller; 500 m on phone Wi-Fi" },
      { label: "Obstacle sensing", value: "Omnidirectional vision, forward LiDAR, downward infrared" },
      { label: "Controls", value: "Palm, gesture, voice, app, RC-N3, RC Motion 3 + Goggles N3" },
      { label: "Max speed", value: "12 m/s" },
      { label: "Storage", value: "49 GB built-in (no memory card needed)" },
    ],
    faqs: [
      {
        q: "Which package should I choose?",
        a: "The Fly More Combo (Drone only) gives you 3 batteries and a charging hub, and you fly with your palm, gestures or phone. The Fly More Combo adds the RC-N3 controller and Digital Transceiver for long range. The Motion Fly More Combo swaps the controller for DJI Goggles N3 and RC Motion 3, for immersive FPV-style flying.",
      },
      {
        q: "Do I need a controller?",
        a: "No. You can fly with your palm, hand gestures, voice or the DJI Fly app on your phone (up to 500 m). A controller lets you fly much further and unlocks 4K/100fps slow motion.",
      },
      {
        q: "Is it safe to fly around people?",
        a: "Yes. The propellers are fully enclosed by guards, it weighs only 151 g, and it senses obstacles around it. Always fly with care and keep it within sight.",
      },
      {
        q: "Neo 2 or the original Neo?",
        a: "The Neo 2 adds a 2-axis gimbal for steadier video, 4K/60 instead of 4K/30, obstacle sensing with LiDAR, gesture control and longer flights. If smooth footage matters to you, the Neo 2 is worth it.",
      },
      {
        q: "Do I need a memory card?",
        a: "No. It has 49 GB built in, enough for a lot of 4K clips. Transfer them to your phone over Wi-Fi.",
      },
      {
        q: "How do I order?",
        a: "Pick your package above and tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "fmc-drone-only",
        name: "Fly More Combo (Drone only)",
        price: 600_000,
        includes: [
          "DJI Neo 2 drone",
          "3 Intelligent Flight Batteries",
          "Two-way charging hub",
          "Propeller guards",
          "Spare propellers and screwdriver",
          "USB-C cable",
        ],
      },
      {
        id: "fmc",
        name: "Fly More Combo",
        price: 800_000,
        badge: "Most popular",
        includes: [
          "DJI Neo 2 drone",
          "DJI RC-N3 remote controller",
          "Digital Transceiver (up to 10 km)",
          "3 Intelligent Flight Batteries",
          "Two-way charging hub",
          "Propeller guards",
          "Spare propellers and screwdriver",
          "Cables",
        ],
      },
      {
        id: "motion-fmc",
        name: "Motion Fly More Combo",
        price: 1_200_000,
        badge: "FPV goggles",
        includes: [
          "DJI Neo 2 drone",
          "DJI Goggles N3",
          "DJI RC Motion 3",
          "Digital Transceiver",
          "3 Intelligent Flight Batteries",
          "Two-way charging hub",
          "Propeller guards",
          "Spare propellers and screwdriver",
          "USB-C cable",
        ],
      },
    ],
  },
  {
    slug: "dji-neo",
    brand: "DJI",
    name: "DJI Neo",
    category: "Drones",
    tagline: "Your first drone.",
    headline:
      "A 135 g palm-sized drone that launches from your hand, follows you and films in 4K. The most affordable way to start flying.",
    summary:
      "No remote, no skills, no stress. Launch the Neo from your palm, let it capture you from the sky, and catch it when it comes back.",
    image: "/products/neo/main.png",
    hero: "/products/neo/desert.jpg",
    gallery: [
      { src: "/products/neo/main.png", alt: "DJI Neo drone" },
      { src: "/products/neo/palm.jpg", alt: "DJI Neo hovering over a palm" },
      { src: "/products/neo/hand.jpg", alt: "DJI Neo held in two hands" },
      { src: "/products/neo/bike.jpg", alt: "DJI Neo following a cyclist" },
    ],
    stats: [
      { value: "135 g", label: "Lighter than a phone" },
      { value: "4K/30", label: "Stabilised video" },
      { value: "18 min", label: "Max flight time*" },
      { value: "22 GB", label: "Built-in storage" },
    ],
    highlights: [
      {
        title: "Launch it from your hand",
        body: "Press the mode button and the Neo lifts off your palm, records its shot and returns to land on your hand. You don't need a remote or even your phone.",
        image: "/products/neo/palm.jpg",
      },
      {
        title: "Follows you everywhere",
        body: "It tracks you as you walk, cycle or hike, keeping you in the centre of the shot. Ready-made shots like Dronie, Circle, Rocket and Spotlight give you clips you can post straight away.",
        image: "/products/neo/bike.jpg",
      },
      {
        title: "4K video, steady and level",
        body: "A 1/2-inch 12 MP camera on a single-axis gimbal, with RockSteady and HorizonBalancing, keeps your 4K footage smooth. Shoot 1080p vertical for Reels and TikTok.",
        image: "/products/neo/hike.jpg",
      },
      {
        title: "Fly it like an FPV drone",
        body: "Pair it with DJI Goggles N3 and RC Motion 3 and you see what the drone sees, flying it with simple hand movements. That's what the Motion Fly More Combo is for.",
        image: "/products/neo/fpv.jpg",
      },
    ],
    idealFor: [
      { title: "Beginners", body: "The easiest and cheapest way to try a drone. Full prop guards keep it safe." },
      { title: "Vloggers", body: "Hands-free shots of yourself from angles a phone can't reach." },
      { title: "Gift buyers", body: "A small, fun gadget that anyone can fly in minutes." },
      { title: "Travellers", body: "At 135 g it fits in any bag, so it can come on every trip." },
    ],
    notFor:
      "Want obstacle sensing, a 2-axis gimbal and 4K/60? The DJI Neo 2 is the upgrade. For serious aerial photography, look at the Mini 4 Pro or Mini 5 Pro.",
    specs: [
      { label: "Weight", value: "Approx. 135 g" },
      { label: "Camera", value: "1/2-inch sensor, 12 MP, f/2.8" },
      { label: "Video", value: "4K/30fps, 1080p/60fps" },
      { label: "Vertical video", value: "1080p/60fps" },
      { label: "Gimbal", value: "Single-axis mechanical (tilt) + RockSteady / HorizonBalancing" },
      { label: "Max flight time", value: "18 minutes (17 with prop guards)*" },
      { label: "Range", value: "50 m on phone Wi-Fi; longer with RC-N3 or goggles" },
      { label: "Sensing", value: "Downward vision positioning" },
      { label: "Wind resistance", value: "8 m/s (Level 4)" },
      { label: "Max speed", value: "8 m/s (16 m/s in manual mode)" },
      { label: "Storage", value: "22 GB built-in" },
    ],
    faqs: [
      {
        q: "Which package should I choose?",
        a: "The drone alone lets you fly with your palm or phone. The Fly More Combo adds the RC-N3 controller for longer range, plus 3 batteries and a charging hub so you can fly for almost an hour. The Motion Fly More Combo adds DJI Goggles N3 and RC Motion 3 for immersive first-person flying.",
      },
      {
        q: "Do I need a controller?",
        a: "No. You can launch it from your palm, choose a shot with the button on the drone, or fly it from the DJI Fly app. A controller lets you fly further and steer it manually.",
      },
      {
        q: "Neo or Neo 2?",
        a: "The Neo is the best value and perfect to start. The Neo 2 adds obstacle sensing with LiDAR, a 2-axis gimbal, 4K/60 video, gesture control and much more range. If budget allows, the Neo 2 is the better long-term buy.",
      },
      {
        q: "Is it safe to fly near people?",
        a: "Yes. It weighs only 135 g and the propellers are fully enclosed. It has no obstacle sensing, so fly in open spaces and keep it in sight.",
      },
      {
        q: "Do I need a memory card?",
        a: "No. It has 22 GB built in, and you can transfer clips to your phone over Wi-Fi.",
      },
      {
        q: "How do I order?",
        a: "Pick your package above and tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "drone",
        name: "Drone only",
        price: 500_000,
        includes: [
          "DJI Neo drone",
          "1 Intelligent Flight Battery",
          "Propeller guards",
          "Spare propellers",
          "USB-C cable",
        ],
      },
      {
        id: "fmc",
        name: "Fly More Combo",
        price: 700_000,
        badge: "Best value",
        includes: [
          "DJI Neo drone",
          "DJI RC-N3 remote controller",
          "3 Intelligent Flight Batteries",
          "Two-way charging hub",
          "Propeller guards",
          "Spare propellers",
          "Cables",
        ],
      },
      {
        id: "motion-fmc",
        name: "Motion Fly More Combo",
        price: 1_100_000,
        badge: "FPV goggles",
        includes: [
          "DJI Neo drone",
          "DJI Goggles N3",
          "DJI RC Motion 3",
          "3 Intelligent Flight Batteries",
          "Two-way charging hub",
          "Propeller guards",
          "Spare propellers",
          "Cables",
        ],
      },
    ],
  },
  {
    slug: "dji-lito-1",
    brand: "DJI",
    name: "DJI Lito 1",
    category: "Drones",
    tagline: "Pure ease. Just fly.",
    headline:
      "A sub-249 g camera drone with a 3-axis gimbal, 4K/100fps video and sensors on every side. Built for first-time pilots who want real drone footage.",
    summary:
      "The Lito 1 senses obstacles all around, follows you with ActiveTrack and flies up to 36 minutes per battery. It's a proper camera drone that stays easy to fly.",
    image: "/products/lito-1/main.png",
    hero: "/products/lito-1/cliff.jpg",
    gallery: [
      { src: "/products/lito-1/main.png", alt: "DJI Lito 1 drone" },
      { src: "/products/lito-1/hand.jpg", alt: "DJI Lito 1 folded in two hands" },
      { src: "/products/lito-1/city.jpg", alt: "Aerial shot of a city river with a hot air balloon" },
      { src: "/products/lito-1/bag.jpg", alt: "DJI Lito 1 packed in its shoulder bag" },
    ],
    stats: [
      { value: "249 g", label: "No heavy-drone hassle" },
      { value: "4K/100", label: "3-axis gimbal video" },
      { value: "36 min", label: "Max flight time*" },
      { value: "360°", label: "Obstacle sensing" },
    ],
    highlights: [
      {
        title: "Sees obstacles on every side",
        body: "Vision sensors cover forward, back, sides, up and down, with an infrared sensor underneath. The Lito 1 slows and steers around what's in its way, so beginners can fly with confidence.",
        image: "/products/lito-1/cliff.jpg",
      },
      {
        title: "Follows you with ActiveTrack",
        body: "Tap yourself on screen and the Lito 1 keeps you in frame while you walk, run or ride. You get smooth cinematic shots without needing a second person to fly.",
        image: "/products/lito-1/track.jpg",
      },
      {
        title: "Real camera, real gimbal",
        body: "A 48 MP 1/2-inch sensor with a bright f/1.8 lens sits on a 3-axis mechanical gimbal. Shoot 4K up to 100fps for slow motion, 2.7K vertical for Reels and TikTok, and RAW photos for editing.",
        image: "/products/lito-1/city.jpg",
      },
      {
        title: "Small enough to take everywhere",
        body: "It folds down to the size of a water bottle and weighs under 249 g. O4 transmission gives you a clear, stable live view up to 15 km away.",
        image: "/products/lito-1/hand.jpg",
      },
    ],
    idealFor: [
      { title: "First-time pilots", body: "All-round sensing and simple controls take the stress out of learning to fly." },
      { title: "Travellers", body: "Light, foldable and long-flying, ready for every trip and landscape." },
      { title: "Content creators", body: "4K slow motion, vertical video and ActiveTrack for social-ready clips." },
      { title: "Upgrading from Neo", body: "A step up to a 3-axis gimbal, longer flights and much more range." },
    ],
    notFor:
      "Need a 1-inch sensor, 10-bit D-Log M or pro colour grading? Look at the DJI Mini 5 Pro or Air 3S. Want more camera in the same small body? The Lito X1 has a larger 1/1.3-inch sensor.",
    specs: [
      { label: "Weight", value: "Under 249 g" },
      { label: "Camera", value: "1/2-inch CMOS, 48 MP, f/1.8, 26 mm equivalent" },
      { label: "Video", value: "4K at up to 100fps (slow motion), 1080p at up to 100fps" },
      { label: "Vertical video", value: "2.7K at up to 60fps" },
      { label: "Gimbal", value: "3-axis mechanical (tilt, roll, pan)" },
      { label: "Max flight time", value: "36 minutes*" },
      { label: "Transmission", value: "DJI O4, up to 15 km (FCC) / 8 km (CE)" },
      { label: "Obstacle sensing", value: "Omnidirectional vision + downward infrared" },
      { label: "Wind resistance", value: "10.7 m/s" },
      { label: "Max speed", value: "18 m/s (Sport mode)" },
      { label: "Storage", value: "microSD card, up to 1 TB (not included)" },
    ],
    faqs: [
      {
        q: "Which package should I choose?",
        a: "The standard package gets you flying with one battery. The Fly More Combo adds 3 batteries and a charging hub, so you get well over an hour of flying per outing. If you travel or shoot often, the Fly More Combo is the better value.",
      },
      {
        q: "Is it good for beginners?",
        a: "Yes, that's who it was built for. It senses obstacles on every side, holds its position steadily, returns home automatically and flies with the simple DJI Fly app.",
      },
      {
        q: "Lito 1 or Lito X1?",
        a: "Both are sub-249 g drones that are easy to fly. The Lito X1 has a larger 1/1.3-inch sensor and LiDAR for better low-light shots and sensing. The Lito 1 has a 1/2-inch sensor and costs less. If you mostly fly in daylight, the Lito 1 is plenty.",
      },
      {
        q: "Lito 1 or Neo?",
        a: "The Neo is a selfie drone you launch from your hand. The Lito 1 is a full camera drone, with a 3-axis gimbal, 36-minute flights, 15 km range and obstacle sensing on every side.",
      },
      {
        q: "Do I need a memory card?",
        a: "Yes. The Lito 1 records to a microSD card (64 GB to 1 TB, V30 or faster). We can add one to your order. Just ask on WhatsApp.",
      },
      {
        q: "How do I order?",
        a: "Pick your package above and tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "Standard",
        price: 680_000,
        includes: [
          "DJI Lito 1 drone",
          "DJI RC-N3 remote controller",
          "1 Intelligent Flight Battery",
          "Spare propellers",
          "Cables",
        ],
      },
      {
        id: "fmc",
        name: "Fly More Combo",
        price: 950_000,
        badge: "Best value",
        includes: [
          "DJI Lito 1 drone",
          "DJI RC-N3 remote controller",
          "3 Intelligent Flight Batteries",
          "Charging hub",
          "Shoulder bag",
          "Spare propellers",
          "Cables",
        ],
      },
    ],
  },
  {
    slug: "dji-lito-x1",
    brand: "DJI",
    name: "DJI Lito X1",
    category: "Drones",
    tagline: "Instant wow. Just fly.",
    headline:
      "A sub-249 g drone with a big 1/1.3-inch sensor, forward LiDAR and sensing on every side. Premium image quality that stays easy to fly.",
    summary:
      "The Lito X1 pairs a bright f/1.7 camera with 10-bit D-Log M, ActiveTrack and up to 36 minutes per battery. It's the beginner-friendly drone for people who care how their footage looks.",
    image: "/products/lito-x1/main.png",
    hero: "/products/lito-x1/outback.jpg",
    gallery: [
      { src: "/products/lito-x1/main.png", alt: "DJI Lito X1 drone" },
      { src: "/products/lito-x1/van.jpg", alt: "Aerial shot of a blue van on a coastal cliff at sunset" },
      { src: "/products/lito-x1/truck.jpg", alt: "4x4 truck driving through outback dust" },
      { src: "/products/lito-x1/bag.jpg", alt: "DJI Lito X1 taken out of its shoulder bag" },
    ],
    stats: [
      { value: "1/1.3\"", label: "Large 48 MP sensor" },
      { value: "249 g", label: "No heavy-drone hassle" },
      { value: "36 min", label: "Max flight time*" },
      { value: "LiDAR", label: "+ 360° obstacle sensing" },
    ],
    highlights: [
      {
        title: "Sees obstacles on every side, plus LiDAR",
        body: "Vision sensors cover every direction, a forward LiDAR measures distance precisely, even in dim light, and an infrared sensor watches the ground. The Lito X1 slows and steers around what's in its way.",
        image: "/products/lito-x1/sensing.jpg",
      },
      {
        title: "Bigger sensor, better shots",
        body: "A 1/1.3-inch 48 MP sensor with a bright f/1.7 lens gathers more light for clean sunsets and night scenes. Shoot 4K up to 100fps, 2.7K vertical for Reels and TikTok, and 10-bit D-Log M for proper colour grading.",
        image: "/products/lito-x1/van.jpg",
      },
      {
        title: "Follows you with ActiveTrack",
        body: "Tap yourself on screen and the Lito X1 keeps you in frame while you walk, ride or skate. You get smooth cinematic moves without a second person flying.",
        image: "/products/lito-x1/track.jpg",
      },
      {
        title: "Small enough to take everywhere",
        body: "It folds to palm size and weighs under 249 g. O4 transmission gives a clear 1080p/60fps live view up to 15 km away, and 42 GB of built-in storage means you can fly even if you forget a card.",
        image: "/products/lito-x1/bag.jpg",
      },
    ],
    idealFor: [
      { title: "Content creators", body: "A large sensor, 10-bit D-Log M and vertical video for footage that stands out." },
      { title: "First-time pilots who want quality", body: "All-round sensing and LiDAR make it easy to fly, and the camera won't hold you back." },
      { title: "Travellers", body: "Light, foldable and long-flying, ready for road trips and golden hour." },
      { title: "Upgrading from Neo or Lito 1", body: "A clear step up in low-light image quality and sensing." },
    ],
    notFor:
      "Need a 1-inch sensor, longer zoom or pro video tools? Look at the DJI Mini 5 Pro or Air 3S. Mostly flying in daylight on a tighter budget? The Lito 1 costs less.",
    specs: [
      { label: "Weight", value: "Under 249 g (standard battery)" },
      { label: "Camera", value: "1/1.3-inch CMOS, 48 MP, f/1.7, 24 mm equivalent" },
      { label: "Video", value: "4K at up to 100fps (slow motion), 1080p at up to 200fps" },
      { label: "Colour", value: "10-bit D-Log M, 10-bit Normal (H.265)" },
      { label: "Vertical video", value: "2.7K at up to 60fps" },
      { label: "Gimbal", value: "3-axis mechanical (tilt, roll, pan)" },
      { label: "Max flight time", value: "36 min (standard), 52 min (Battery Plus)*" },
      { label: "Transmission", value: "DJI O4, 1080p/60fps live view, up to 15 km (FCC) / 8 km (CE)" },
      { label: "Obstacle sensing", value: "Omnidirectional vision + forward LiDAR + downward infrared" },
      { label: "Wind resistance", value: "10.7 m/s" },
      { label: "Storage", value: "42 GB built-in + microSD up to 1 TB" },
    ],
    faqs: [
      {
        q: "Which package should I choose?",
        a: "The Fly Combo gets you flying with one battery and the RC-N3 controller. The Fly More Combo adds 3 batteries and a charging hub, for well over an hour of flying per outing. The Fly More Combo Plus swaps in the DJI RC 2 screen controller and longer-lasting batteries.",
      },
      {
        q: "Is it good for beginners?",
        a: "Yes. It senses obstacles on every side, uses LiDAR to judge distance, holds its position steadily, returns home automatically and flies with the simple DJI Fly app.",
      },
      {
        q: "Lito X1 or Lito 1?",
        a: "Both are sub-249 g drones that are easy to fly. The Lito X1 has a larger 1/1.3-inch sensor with f/1.7, forward LiDAR, 10-bit D-Log M and 42 GB built-in storage. That means better low-light shots and more editing room. If you mostly fly in daylight and want to save, the Lito 1 is plenty.",
      },
      {
        q: "Lito X1 or Mini 5 Pro?",
        a: "The Mini 5 Pro has a bigger 1-inch sensor and more pro features, and costs more. The Lito X1 is the simpler, more affordable way to get great low-light footage.",
      },
      {
        q: "Do I need a memory card?",
        a: "Not to start. It has 42 GB built in. For longer shoots, add a microSD card (64 GB to 1 TB, V30 or faster). We can add one to your order. Just ask on WhatsApp.",
      },
      {
        q: "How do I order?",
        a: "Pick your package above and tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "fly-combo",
        name: "Fly Combo (RC-N3)",
        price: 1_050_000,
        includes: [
          "DJI Lito X1 drone",
          "DJI RC-N3 remote controller",
          "1 Intelligent Flight Battery",
          "Spare propellers",
          "Cables",
        ],
      },
      {
        id: "fmc",
        name: "Fly More Combo (RC-N3)",
        price: 1_300_000,
        badge: "Best value",
        includes: [
          "DJI Lito X1 drone",
          "DJI RC-N3 remote controller",
          "3 Intelligent Flight Batteries",
          "Charging hub",
          "Shoulder bag",
          "Spare propellers",
          "Cables",
        ],
      },
      {
        id: "fmc-plus",
        name: "Fly More Combo Plus (DJI RC 2)",
        price: 1_400_000,
        badge: "Screen controller",
        includes: [
          "DJI Lito X1 drone",
          "DJI RC 2 screen remote controller",
          "3 Intelligent Flight Batteries Plus (up to 52 min each)",
          "Charging hub",
          "Shoulder bag",
          "Spare propellers",
          "Cables",
        ],
      },
    ],
  },
  {
    slug: "dji-avata-360",
    brand: "DJI",
    name: "DJI Avata 360",
    category: "Drones",
    tagline: "Above it all, see it all.",
    headline:
      "An 8K 360° drone with built-in prop guards and sensing on every side. Fly once, then choose your shot later. You never miss the moment.",
    summary:
      "Two 1/1.1-inch sensors capture everything around the drone in 8K/60fps. Reframe any angle afterwards, switch to single-lens 4K for classic shots, or strap on goggles for an FPV ride.",
    image: "/products/avata-360/main.png",
    hero: "/products/avata-360/desert.jpg",
    gallery: [
      { src: "/products/avata-360/main.png", alt: "DJI Avata 360 drone" },
      { src: "/products/avata-360/cyclist.jpg", alt: "DJI Avata 360 following road cyclists" },
      { src: "/products/avata-360/track.jpg", alt: "DJI Avata 360 tracking a car drifting on a salt flat" },
      { src: "/products/avata-360/lens.jpg", alt: "Close-up of the DJI Avata 360 lens and prop guard" },
    ],
    stats: [
      { value: "8K/60", label: "360° video" },
      { value: "120 MP", label: "360° photos" },
      { value: "23 min", label: "Max flight time*" },
      { value: "LiDAR", label: "+ 360° obstacle sensing" },
    ],
    highlights: [
      {
        title: "Shoot everything, frame it later",
        body: "The Avata 360 records the whole scene around it in 8K. Afterwards, point the virtual camera wherever you like, so one flight gives you many angles and sharp cropped shots. No more missed moments.",
        image: "/products/avata-360/reframe.jpg",
      },
      {
        title: "1-inch-class flagship imaging",
        body: "Two 1/1.1-inch 64 MP sensors with f/1.9 lenses shoot 8K/60fps 360° HDR video and 120 MP 360° photos. Or switch to single-lens mode for 4K/60 and 2.7K/120 slow motion, with D-Log M for grading.",
        image: "/products/avata-360/sensor.jpg",
      },
      {
        title: "Built-in guards, sensing on every side",
        body: "Integrated prop guards make it safe to fly close to people and objects. Omnidirectional vision, forward LiDAR and a downward sensor help it avoid obstacles, even during dynamic tracking shots.",
        image: "/products/avata-360/cyclist.jpg",
      },
      {
        title: "FPV flying and aerial filming in one",
        body: "Fly it like a normal drone with the DJI RC 2, or add DJI Goggles N3 and RC Motion 3 for immersive first-person flying. O4+ sends a clear 1080p live view up to 20 km away.",
        image: "/products/avata-360/track.jpg",
      },
    ],
    idealFor: [
      { title: "Content creators", body: "One flight gives you many angles for Reels, TikTok and YouTube." },
      { title: "Action and sports", body: "Follow cyclists, cars and riders, then pick the perfect angle after." },
      { title: "Real estate and events", body: "Immersive 360° tours and close-in flying with built-in guards." },
      { title: "FPV beginners", body: "Prop guards and obstacle sensing make cinematic FPV flying less scary." },
    ],
    notFor:
      "Just want classic landscape stills and long flights? A DJI Mini 5 Pro or Air 3S gives longer flight times and a lighter drone. Want an FPV drone with a single camera for the lowest price? Look at the Avata 2.",
    specs: [
      { label: "Weight", value: "Approx. 455 g" },
      { label: "Camera", value: "2 × 1/1.1-inch CMOS, 64 MP each, f/1.9, 200° FOV" },
      { label: "360° video", value: "8K (7680×3840) and 6K at up to 60fps" },
      { label: "Single-lens video", value: "4K at up to 60fps, 2.7K at up to 120fps" },
      { label: "Photos", value: "360° at 30 MP or 120 MP, JPEG + RAW (DNG)" },
      { label: "Colour", value: "Normal and D-Log M" },
      { label: "Max flight time", value: "Approx. 23 minutes*" },
      { label: "Transmission", value: "DJI O4+, 1080p live view, up to 20 km (FCC) / 10 km (CE)" },
      { label: "Obstacle sensing", value: "Omnidirectional vision + forward LiDAR + downward infrared" },
      { label: "Max speed", value: "18 m/s (Sport mode)" },
      { label: "Storage", value: "42 GB built-in + microSD up to 1 TB" },
    ],
    faqs: [
      {
        q: "What is a 360° drone?",
        a: "It records every direction at once. After the flight you choose where the camera points, so you can make normal 16:9 or vertical videos from any angle, or share fully immersive 360° clips.",
      },
      {
        q: "Is it good for beginners?",
        a: "Yes. The prop guards are built in, it senses obstacles on every side, and with the DJI RC 2 it flies like a regular camera drone. You don't need FPV skills to start.",
      },
      {
        q: "Can I use FPV goggles?",
        a: "Yes. It works with DJI Goggles 3 or Goggles N3, paired with RC Motion 3 or FPV Remote Controller 3. This unlocks immersive flying and extra single-lens modes. Ask us on WhatsApp about adding goggles.",
      },
      {
        q: "Avata 360 or Avata 2?",
        a: "The Avata 2 is a single-camera FPV drone that's great for dives and flips. The Avata 360 films all around in 8K, has obstacle sensing and flies with a normal controller too. It's the better all-rounder for creators.",
      },
      {
        q: "Do I need a memory card?",
        a: "Not to start. It has 42 GB built in. 8K files are large, so for longer shoots add a microSD card (64 GB to 1 TB, A2 V30). We can add one to your order. Just ask on WhatsApp.",
      },
      {
        q: "How do I order?",
        a: "Pick your package above and tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "fmc-rc2",
        name: "Fly More Combo (DJI RC 2)",
        price: 1_780_000,
        badge: "Complete kit",
        includes: [
          "DJI Avata 360 drone",
          "DJI RC 2 screen remote controller",
          "3 Intelligent Flight Batteries",
          "Charging hub",
          "Shoulder bag",
          "Spare propellers",
          "Cables",
        ],
      },
    ],
  },
  {
    slug: "dji-avata-2",
    brand: "DJI",
    name: "DJI Avata 2",
    category: "Drones",
    tagline: "All thrills, no frills.",
    headline:
      "An immersive FPV drone you fly with your hand. Put on the goggles, tilt the motion controller and fly through the sky like you're in it.",
    summary:
      "The Avata 2 comes as a complete FPV kit with DJI Goggles 3 and RC Motion 3. It films 4K at up to 100fps with a 1/1.3-inch sensor and does one-tap flips, rolls and drifts.",
    image: "/products/avata-2/main.png",
    hero: "/products/avata-2/sky.jpg",
    gallery: [
      { src: "/products/avata-2/main.png", alt: "DJI Avata 2 drone" },
      { src: "/products/avata-2/kit.jpg", alt: "DJI Avata 2 with DJI Goggles 3 and RC Motion 3" },
      { src: "/products/avata-2/cliff.jpg", alt: "FPV shot diving down a green cliff face" },
      { src: "/products/avata-2/build.jpg", alt: "DJI Avata 2 from above with built-in prop guards" },
    ],
    stats: [
      { value: "4K/100", label: "Slow-motion video" },
      { value: "155°", label: "Ultra-wide FPV view" },
      { value: "23 min", label: "Max flight time*" },
      { value: "13 km", label: "O4 video range*" },
    ],
    highlights: [
      {
        title: "Feel like you're flying",
        body: "DJI Goggles 3 put the drone's view right in front of your eyes, with a crisp 1080p/100fps live feed and very low latency. It's the closest thing to flying yourself.",
        image: "/products/avata-2/goggles.jpg",
      },
      {
        title: "Fly with one hand",
        body: "RC Motion 3 turns your hand movements into flight. Point where you want to go and press to fly. Flips, rolls and drifts take one tap, so beginners get dramatic shots without years of FPV practice.",
        image: "/products/avata-2/kit.jpg",
      },
      {
        title: "4K/100fps from the pilot's seat",
        body: "A 1/1.3-inch sensor with a 155° ultra-wide lens films 4K at up to 100fps for slow motion, with D-Log M for grading. RockSteady and HorizonSteady keep fast footage smooth.",
        image: "/products/avata-2/cliff.jpg",
      },
      {
        title: "Built to take a knock",
        body: "Integrated prop guards protect the drone and what's around it, so you can fly close to trees, buildings and people. Downward and backward sensing help it hover steadily and land safely.",
        image: "/products/avata-2/build.jpg",
      },
    ],
    idealFor: [
      { title: "FPV beginners", body: "Motion control and one-tap tricks make FPV flying easy to learn." },
      { title: "Action content", body: "Dives, chases and fly-throughs that a normal drone can't film." },
      { title: "Real estate and venues", body: "Smooth one-take fly-through tours of homes, hotels and event spaces." },
      { title: "Thrill seekers", body: "The immersive goggles experience is the most fun you can have with a drone." },
    ],
    notFor:
      "Want classic aerial photos, long flights or obstacle avoidance on every side? Look at the Mini 5 Pro or Air 3S. Want to film all around and choose the angle later? The Avata 360 is the upgrade.",
    specs: [
      { label: "Weight", value: "Approx. 377 g" },
      { label: "Camera", value: "1/1.3-inch CMOS, 12 MP, f/2.8, 155° FOV" },
      { label: "Video", value: "4K at up to 100fps, 2.7K and 1080p at up to 120fps" },
      { label: "Colour", value: "Standard and D-Log M" },
      { label: "Stabilisation", value: "Single-axis gimbal + RockSteady 3.0+ / HorizonSteady" },
      { label: "Max flight time", value: "Approx. 23 minutes*" },
      { label: "Transmission", value: "DJI O4, 1080p/100fps live view, up to 13 km (FCC) / 10 km (CE)" },
      { label: "Sensing", value: "Downward and backward vision + ToF" },
      { label: "Max speed", value: "16 m/s (Sport), 27 m/s (Manual)" },
      { label: "Wind resistance", value: "10.7 m/s (Level 5)" },
      { label: "Storage", value: "46 GB built-in + microSD up to 512 GB" },
    ],
    faqs: [
      {
        q: "Which package should I choose?",
        a: "Both packages include the drone, DJI Goggles 3 and RC Motion 3. The single-battery combo gets you flying for about 20 minutes. The three-battery combo adds 2 more batteries, a charging hub and a shoulder bag, so you get about an hour per outing. Most buyers go for three batteries.",
      },
      {
        q: "I've never flown FPV. Can I fly it?",
        a: "Yes. With RC Motion 3 you just point your hand where you want to go. It hovers in place on its own, and the Return to Home button brings it back. Start in an open space and you'll pick it up quickly.",
      },
      {
        q: "Avata 2 or Avata 360?",
        a: "The Avata 2 is a pure FPV drone for dives, flips and fly-throughs, and the package includes goggles. The Avata 360 films all around in 8K so you can choose the angle later, senses obstacles on every side and also flies with a normal screen controller.",
      },
      {
        q: "Can I wear glasses with the goggles?",
        a: "DJI Goggles 3 have adjustable dioptres for short-sightedness, so many people can fly without glasses. Ask us on WhatsApp if you're not sure.",
      },
      {
        q: "Do I need a memory card?",
        a: "Not to start. It has 46 GB built in. For longer shoots, add a microSD card (64 GB to 512 GB, V30). We can add one to your order. Just ask on WhatsApp.",
      },
      {
        q: "How do I order?",
        a: "Pick your package above and tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "fmc-1",
        name: "Fly More Combo (Single Battery)",
        price: 1_800_000,
        includes: [
          "DJI Avata 2 drone",
          "DJI Goggles 3",
          "DJI RC Motion 3",
          "1 Intelligent Flight Battery",
          "Spare propellers",
          "Cables",
        ],
      },
      {
        id: "fmc-3",
        name: "Fly More Combo (Three Batteries)",
        price: 2_100_000,
        badge: "Best value",
        includes: [
          "DJI Avata 2 drone",
          "DJI Goggles 3",
          "DJI RC Motion 3",
          "3 Intelligent Flight Batteries",
          "Charging hub",
          "Shoulder bag",
          "Spare propellers",
          "Cables",
        ],
      },
    ],
  },
  {
    slug: "dji-mini-3",
    brand: "DJI",
    name: "DJI Mini 3",
    category: "Drones",
    tagline: "Built for adventure.",
    headline:
      "A sub-249 g camera drone with a bright 1/1.3-inch sensor, 4K HDR video and up to 38 minutes per battery. Serious aerial footage at a friendly price.",
    summary:
      "The Mini 3 pairs a large f/1.7 camera with a 3-axis gimbal that rotates for true vertical shots. It comes with the DJI RC screen controller, so you don't need your phone to fly.",
    image: "/products/mini-3/main.png",
    hero: "/products/mini-3/mountains.jpg",
    gallery: [
      { src: "/products/mini-3/main.png", alt: "DJI Mini 3 drone" },
      { src: "/products/mini-3/hand.jpg", alt: "DJI Mini 3 folded in a hand" },
      { src: "/products/mini-3/coast.jpg", alt: "Aerial shot of waves on a forested coastline" },
      { src: "/products/mini-3/bag.jpg", alt: "DJI Mini 3 packed in its shoulder bag" },
    ],
    stats: [
      { value: "249 g", label: "No heavy-drone hassle" },
      { value: "1/1.3\"", label: "48 MP f/1.7 sensor" },
      { value: "38 min", label: "Max flight time*" },
      { value: "4K HDR", label: "3-axis gimbal video" },
    ],
    highlights: [
      {
        title: "Big sensor, bright lens",
        body: "A 1/1.3-inch 48 MP sensor with an f/1.7 aperture captures clean, detailed footage from sunrise to city lights. 4K HDR video keeps both bright skies and dark shadows full of detail.",
        image: "/products/mini-3/coast.jpg",
      },
      {
        title: "True vertical shooting",
        body: "The gimbal rotates 90° so you shoot full-resolution portrait photos and videos for Reels, TikTok and Stories. No cropping, no lost quality.",
        image: "/products/mini-3/city.jpg",
      },
      {
        title: "Up to 38 minutes per battery",
        body: "One battery covers a full session of exploring and filming. With the Fly More Combo's 3 batteries you get almost two hours of flying per outing.",
        image: "/products/mini-3/friends.jpg",
      },
      {
        title: "Small enough to take everywhere",
        body: "It folds to palm size and weighs under 249 g, so it fits in any bag. It handles Level 5 winds and sends a stable live view up to 10 km away.",
        image: "/products/mini-3/hand.jpg",
      },
    ],
    idealFor: [
      { title: "First-time pilots", body: "A proper camera drone with simple controls and a screen controller included." },
      { title: "Travellers", body: "Light, foldable and long-flying, ready for every trip." },
      { title: "Content creators", body: "4K HDR and true vertical video for social-ready clips." },
      { title: "Budget-conscious buyers", body: "A big sensor and 3-axis gimbal for less than the Pro models." },
    ],
    notFor:
      "The Mini 3 has no obstacle avoidance, so you need to watch for trees and buildings yourself. Want sensors that help avoid crashes, ActiveTrack or 10-bit D-Log M? Look at the Mini 4 Pro or Lito X1.",
    specs: [
      { label: "Weight", value: "Under 249 g (standard battery)" },
      { label: "Camera", value: "1/1.3-inch CMOS, 48 MP, f/1.7, 24 mm equivalent" },
      { label: "Video", value: "4K at up to 30fps, 2.7K and 1080p at up to 60fps" },
      { label: "HDR", value: "4K HDR video, HDR single photos" },
      { label: "Photos", value: "48 MP, JPEG + RAW (DNG)" },
      { label: "Gimbal", value: "3-axis mechanical, rotates for true vertical shooting" },
      { label: "Max flight time", value: "38 min (standard), 51 min (Battery Plus)*" },
      { label: "Transmission", value: "DJI O2, 720p live view, up to 10 km (FCC) / 6 km (CE)" },
      { label: "Sensing", value: "Downward vision positioning (no obstacle avoidance)" },
      { label: "Wind resistance", value: "10.7 m/s (Level 5)" },
      { label: "Storage", value: "microSD card, up to 256 GB (not included)" },
    ],
    faqs: [
      {
        q: "Which package should I choose?",
        a: "Both come with the DJI RC screen controller. The standard package has one battery. The Fly More Combo adds 2 more batteries, a charging hub and a shoulder bag, for almost two hours of flying per outing. If you travel or shoot often, the Fly More Combo is the better value.",
      },
      {
        q: "Is it good for beginners?",
        a: "Yes. It holds its position steadily, returns home automatically and flies with the simple DJI Fly app. It has no obstacle avoidance, so start in open spaces and keep it in sight.",
      },
      {
        q: "Mini 3 or Mini 4 Pro?",
        a: "The Mini 4 Pro adds obstacle sensing on every side, ActiveTrack, 4K/60fps, 10-bit D-Log M and much longer range. The Mini 3 has a similar-size sensor and longer flight time for less money. If you mostly fly in open spaces, the Mini 3 is great value.",
      },
      {
        q: "Do I need a phone to fly?",
        a: "No. The DJI RC has a built-in screen, so you can switch it on and fly without connecting your phone.",
      },
      {
        q: "Do I need a memory card?",
        a: "Yes. The Mini 3 records to a microSD card (32 GB to 256 GB, V30 or faster). We can add one to your order. Just ask on WhatsApp.",
      },
      {
        q: "How do I order?",
        a: "Pick your package above and tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "dji-rc",
        name: "Standard (DJI RC)",
        price: 1_000_000,
        includes: [
          "DJI Mini 3 drone",
          "DJI RC screen remote controller",
          "1 Intelligent Flight Battery",
          "Spare propellers",
          "Cables",
        ],
      },
      {
        id: "fmc-rc",
        name: "Fly More Combo (DJI RC)",
        price: 1_400_000,
        badge: "Best value",
        includes: [
          "DJI Mini 3 drone",
          "DJI RC screen remote controller",
          "3 Intelligent Flight Batteries",
          "Two-way charging hub",
          "Shoulder bag",
          "Spare propellers",
          "Cables",
        ],
      },
    ],
  },
  {
    slug: "dji-mini-3-pro",
    brand: "DJI",
    name: "DJI Mini 3 Pro",
    category: "Drones",
    tagline: "Pro power, mini size.",
    headline:
      "A sub-249 g drone with a 48 MP 1/1.3-inch sensor, 4K/60fps video, obstacle sensing in three directions and smart subject tracking.",
    summary:
      "The Mini 3 Pro is the first Mini built for serious creators. It adds forward, backward and downward obstacle sensing, FocusTrack subject tracking and DJI O3 transmission with a 1080p live view, all at the same pocket-size weight.",
    image: "/products/mini-3-pro/main.png",
    hero: "/products/mini-3-pro/palm.jpg",
    gallery: [
      { src: "/products/mini-3-pro/main.png", alt: "DJI Mini 3 Pro drone" },
      { src: "/products/mini-3-pro/palm.jpg", alt: "DJI Mini 3 Pro folded above an open hand" },
      { src: "/products/mini-3-pro/studio.jpg", alt: "DJI Mini 3 Pro folded, showing its camera and sensors" },
      { src: "/products/mini-3-pro/pocket.jpg", alt: "DJI Mini 3 Pro slipping into a jacket pocket" },
      { src: "/products/mini-3-pro/controllers.jpg", alt: "DJI RC-N1 and DJI RC remote controllers" },
    ],
    stats: [
      { value: "249 g", label: "No heavy-drone hassle" },
      { value: "4K/60", label: "48 MP 1/1.3\" sensor" },
      { value: "3-way", label: "Obstacle sensing" },
      { value: "34 min", label: "Max flight time*" },
    ],
    highlights: [
      {
        title: "Big sensor, pro-level footage",
        body: "A 1/1.3-inch 48 MP sensor with a bright f/1.7 lens captures clean, detailed shots even at sunset. Record 4K at up to 60fps, 4K HDR, or 1080p at 120fps for smooth slow motion.",
        image: "/products/mini-3-pro/studio.jpg",
      },
      {
        title: "Sees obstacles ahead, behind and below",
        body: "Forward, backward and downward vision sensors with APAS 4.0 help the drone brake or fly around obstacles, so you can film with more confidence near trees and buildings.",
        image: "/products/mini-3-pro/flight.jpg",
      },
      {
        title: "Tracks your subject for you",
        body: "FocusTrack (ActiveTrack, Spotlight and Point of Interest) locks onto a person, car or bike and keeps it in frame while you focus on the moment. The gimbal also rotates for true vertical shots for Reels and TikTok.",
        image: "/products/mini-3-pro/palm.jpg",
      },
      {
        title: "Fits in a jacket pocket",
        body: "It folds to palm size and weighs under 249 g. DJI O3 transmission gives a sharp 1080p live view up to 12 km away (FCC), and it handles Level 5 winds.",
        image: "/products/mini-3-pro/pocket.jpg",
      },
    ],
    idealFor: [
      { title: "Content creators", body: "4K/60, true vertical video and subject tracking for social-ready clips." },
      { title: "Travellers", body: "Pocket-size and light, with obstacle sensing for tricky locations." },
      { title: "Upgraders", body: "A big step up from the Mini 2 or Mini 3 without going heavy." },
      { title: "Event and real-estate shooters", body: "Clean 48 MP photos and smooth footage for client work." },
    ],
    notFor:
      "The Mini 3 Pro has no sideways obstacle sensing and no 10-bit D-Log M. Want sensing on every side and longer range? Look at the Mini 4 Pro or Mini 5 Pro.",
    specs: [
      { label: "Weight", value: "Under 249 g (standard battery)" },
      { label: "Camera", value: "1/1.3-inch CMOS, 48 MP, f/1.7, 24 mm equivalent" },
      { label: "Video", value: "4K and 2.7K at up to 60fps, 1080p at up to 120fps" },
      { label: "HDR", value: "4K HDR video, D-Cinelike colour profile" },
      { label: "Photos", value: "48 MP, JPEG + RAW (DNG)" },
      { label: "Gimbal", value: "3-axis mechanical, rotates for true vertical shooting" },
      { label: "Max flight time", value: "34 min (standard), 47 min (Battery Plus)*" },
      { label: "Transmission", value: "DJI O3, 1080p/30fps live view, up to 12 km (FCC) / 8 km (CE)" },
      { label: "Sensing", value: "Forward, backward and downward obstacle sensing, APAS 4.0" },
      { label: "Smart features", value: "FocusTrack (ActiveTrack 4.0, Spotlight 2.0, Point of Interest 3.0), QuickShots, MasterShots" },
      { label: "Wind resistance", value: "10.7 m/s (Level 5)" },
      { label: "Storage", value: "microSD card, up to 256 GB (not included)" },
    ],
    faqs: [
      {
        q: "Which package should I choose?",
        a: "The drone is the same in both. The RC-N1 controller uses your phone as the screen. The DJI RC has its own bright built-in screen, so you just switch on and fly without tying up your phone. If you fly often, the DJI RC is worth the extra.",
      },
      {
        q: "Is it good for beginners?",
        a: "Yes. It holds its position steadily, returns home automatically, and its obstacle sensors add a safety net. Start in open spaces and keep it in sight while you learn.",
      },
      {
        q: "Mini 3 Pro or Mini 3?",
        a: "The Mini 3 Pro adds obstacle sensing, FocusTrack subject tracking, 4K/60fps and 1080p/120fps slow motion, and stronger O3 transmission. The Mini 3 flies a little longer and costs less. If you want to film moving subjects or fly near obstacles, choose the Pro.",
      },
      {
        q: "Mini 3 Pro or Mini 4 Pro?",
        a: "The Mini 4 Pro adds obstacle sensing on every side, 10-bit D-Log M and longer range. The Mini 3 Pro gives you most of the image quality for less money.",
      },
      {
        q: "Do I need a memory card?",
        a: "Yes. The Mini 3 Pro records to a microSD card (V30 or faster, up to 256 GB). We can add one to your order. Just ask on WhatsApp.",
      },
      {
        q: "How do I order?",
        a: "Pick your package above and tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "rc-n1",
        name: "Standard (RC-N1)",
        price: 1_300_000,
        includes: [
          "DJI Mini 3 Pro drone",
          "DJI RC-N1 remote controller (uses your phone)",
          "1 Intelligent Flight Battery",
          "Spare propellers",
          "Cables",
        ],
      },
      {
        id: "dji-rc",
        name: "Standard (DJI RC)",
        price: 1_500_000,
        badge: "Most popular",
        includes: [
          "DJI Mini 3 Pro drone",
          "DJI RC screen remote controller",
          "1 Intelligent Flight Battery",
          "Spare propellers",
          "Cables",
        ],
      },
    ],
  },
  {
    slug: "dji-mini-4k",
    brand: "DJI",
    name: "DJI Mini 4K",
    category: "Drones",
    tagline: "Your first 4K drone.",
    headline:
      "A sub-249 g beginner drone that shoots sharp 4K video on a 3-axis gimbal and flies up to 31 minutes per battery. The easiest, most affordable way to start shooting from the sky.",
    summary:
      "The Mini 4K is built for first-time pilots. One-tap takeoff and landing, automatic Return to Home and stable GPS hovering make it simple to fly. A 4K camera on a 3-axis gimbal gives you smooth, sharp footage from day one.",
    image: "/products/mini-4k/main.png",
    hero: "/products/mini-4k/hands.jpg",
    gallery: [
      { src: "/products/mini-4k/main.png", alt: "DJI Mini 4K drone with RC-N1C controller" },
      { src: "/products/mini-4k/sky.jpg", alt: "DJI Mini 4K hovering in the sky" },
      { src: "/products/mini-4k/folded.jpg", alt: "DJI Mini 4K folded" },
      { src: "/products/mini-4k/combo.jpg", alt: "DJI Mini 4K Fly More Combo contents" },
    ],
    stats: [
      { value: "249 g", label: "No heavy-drone hassle" },
      { value: "4K", label: "3-axis gimbal video" },
      { value: "31 min", label: "Max flight time*" },
      { value: "10 km", label: "Video transmission*" },
    ],
    highlights: [
      {
        title: "Sharp 4K, smooth as glass",
        body: "A 12 MP camera records 4K/30fps video, and a 3-axis mechanical gimbal keeps every shot steady, even in a breeze. 4× digital zoom lets you frame subjects without flying closer.",
        image: "/products/mini-4k/sky.jpg",
      },
      {
        title: "Made for beginners",
        body: "Take off and land with one tap. GPS keeps it hovering steadily in place, and Return to Home brings it back automatically if the signal or battery gets low. The DJI Fly app's built-in tutorials walk you through your first flights.",
        image: "/products/mini-4k/hover.jpg",
      },
      {
        title: "Cinematic shots in one tap",
        body: "QuickShots like Dronie, Helix, Rocket, Circle and Boomerang fly pro-looking moves for you. Panorama mode stitches wide landscapes automatically, ready to share.",
        image: "/products/mini-4k/top.jpg",
      },
      {
        title: "Fits in your hand",
        body: "It folds to palm size and weighs under 249 g, so it goes in any bag. It holds steady in Level 5 winds and streams a live view up to 10 km away.",
        image: "/products/mini-4k/folded.jpg",
      },
    ],
    idealFor: [
      { title: "First-time pilots", body: "Simple controls, steady hovering and automatic safety features." },
      { title: "Students and hobbyists", body: "Learn to fly and shoot 4K without a big budget." },
      { title: "Travellers", body: "Light and foldable, ready for every trip and holiday." },
      { title: "Small businesses", body: "Affordable aerial shots of property, events and locations." },
    ],
    notFor:
      "The Mini 4K has no obstacle avoidance or ActiveTrack, so you need to watch for trees and buildings yourself. Need sensors that help avoid crashes, subject tracking, HDR or vertical shooting? Look at the Mini 4 Pro or Mini 3.",
    specs: [
      { label: "Weight", value: "Under 249 g" },
      { label: "Camera", value: "1/2.3-inch CMOS, 12 MP, f/2.8" },
      { label: "Video", value: "4K at up to 30fps, 2.7K and 1080p at up to 60fps" },
      { label: "Zoom", value: "4× digital zoom (4K: 2×)" },
      { label: "Photos", value: "12 MP, JPEG + RAW (DNG), AEB" },
      { label: "Gimbal", value: "3-axis mechanical" },
      { label: "Max flight time", value: "31 min*" },
      { label: "Transmission", value: "DJI O2, 720p live view, up to 10 km (FCC) / 6 km (CE)" },
      { label: "Sensing", value: "GPS + downward vision positioning (no obstacle avoidance)" },
      { label: "Wind resistance", value: "10.7 m/s (Level 5)" },
      { label: "Smart features", value: "QuickShots, Panorama, one-tap takeoff/landing, Return to Home" },
      { label: "Storage", value: "microSD card, up to 256 GB (not included)" },
    ],
    faqs: [
      {
        q: "Which package should I choose?",
        a: "Both come with the RC-N1C controller, which uses your phone as the screen. The standard package has one battery. The Fly More Combo adds 2 more batteries, a two-way charging hub and a shoulder bag, for over 90 minutes of flying per outing. If you plan to fly often, the Fly More Combo is the better value.",
      },
      {
        q: "Is it really good for beginners?",
        a: "Yes, it's DJI's entry-level drone. It hovers steadily with GPS, takes off and lands with one tap, and returns home automatically. It has no obstacle avoidance, so start in open spaces and keep it in sight.",
      },
      {
        q: "Mini 4K or Mini 3?",
        a: "The Mini 3 has a larger 1/1.3-inch sensor for better low-light shots, 4K HDR, true vertical shooting and longer flight time. The Mini 4K is the most affordable way to get 4K on a 3-axis gimbal. If you're just starting out on a budget, the Mini 4K is the smart pick.",
      },
      {
        q: "Do I need a phone to fly?",
        a: "Yes. The RC-N1C controller holds your smartphone, which shows the live view through the free DJI Fly app (iOS and Android).",
      },
      {
        q: "Do I need a memory card?",
        a: "Yes. The Mini 4K has no internal storage and records to a microSD card (V30 or faster, up to 256 GB). We can add one to your order. Just ask on WhatsApp.",
      },
      {
        q: "How do I order?",
        a: "Pick your package above and tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "Standard (RC-N1C)",
        price: 600_000,
        includes: [
          "DJI Mini 4K drone",
          "RC-N1C remote controller",
          "1 Intelligent Flight Battery",
          "Spare propellers",
          "Cables",
        ],
      },
      {
        id: "fmc",
        name: "Fly More Combo",
        price: 900_000,
        badge: "Best value",
        includes: [
          "DJI Mini 4K drone",
          "RC-N1C remote controller",
          "3 Intelligent Flight Batteries",
          "Two-way charging hub",
          "Shoulder bag",
          "Propeller holder and spare propellers",
          "Cables",
        ],
      },
    ],
  },
  {
    slug: "dji-mavic-3-pro",
    brand: "DJI",
    name: "DJI Mavic 3 Pro",
    category: "Drones",
    tagline: "Three cameras. One flagship.",
    headline:
      "DJI's flagship drone with three Hasselblad-tuned cameras, from a 4/3 CMOS main camera to a 166 mm telephoto. 5.1K video, 43 minutes per battery and obstacle sensing on every side.",
    summary:
      "The Mavic 3 Pro is built for professionals who need every shot right the first time. Switch between wide, medium tele and telephoto mid-flight to tell a richer story, all on one stabilised gimbal. It comes with the DJI RC screen controller, so you're ready to fly straight out of the box.",
    image: "/products/mavic-3-pro/main.png",
    hero: "/products/mavic-3-pro/hero.jpg",
    gallery: [
      { src: "/products/mavic-3-pro/main.png", alt: "DJI Mavic 3 Pro drone with three cameras" },
      { src: "/products/mavic-3-pro/flying.jpg", alt: "DJI Mavic 3 Pro flying over rocks" },
      { src: "/products/mavic-3-pro/car.jpg", alt: "DJI Mavic 3 Pro folded in a car console" },
      { src: "/products/mavic-3-pro/batteries.jpg", alt: "DJI Mavic 3 Pro batteries on the charging hub" },
    ],
    stats: [
      { value: "3", label: "Hasselblad-tuned cameras" },
      { value: "5.1K", label: "10-bit video" },
      { value: "43 min", label: "Max flight time*" },
      { value: "15 km", label: "Video transmission*" },
    ],
    highlights: [
      {
        title: "Hasselblad 4/3 main camera",
        body: "A 20 MP 4/3 CMOS sensor with an adjustable f/2.8–f/11 aperture and 12.8 stops of dynamic range. Shoot 5.1K/50fps and 4K/120fps in 10-bit D-Log, D-Log M or HLG for footage that grades like cinema.",
        image: "/products/mavic-3-pro/sunrise.jpg",
      },
      {
        title: "70 mm and 166 mm telephoto",
        body: "A 48 MP medium tele camera and a 166 mm tele camera with up to 28× hybrid zoom let you compress backgrounds, isolate subjects and capture distant details without flying closer.",
        image: "/products/mavic-3-pro/tele.jpg",
      },
      {
        title: "43 minutes, sensors all round",
        body: "Fly up to 43 minutes per battery. Omnidirectional obstacle sensing and APAS help steer around trees and buildings, and ActiveTrack keeps your subject in frame.",
        image: "/products/mavic-3-pro/flying.jpg",
      },
      {
        title: "15 km HD live view",
        body: "DJI O3+ transmission streams a 1080p/60fps live feed up to 15 km away. QuickTransfer sends photos and videos to your phone at up to 80 MB/s, so you can review and share on location.",
        image: "/products/mavic-3-pro/transfer.jpg",
      },
    ],
    idealFor: [
      { title: "Filmmakers", body: "Three focal lengths and 10-bit log for cinematic, gradable footage." },
      { title: "Real estate and tourism", body: "Wide establishing shots and tele detail from a single flight." },
      { title: "Event and wedding crews", body: "Tele cameras capture the moment without flying close to guests." },
      { title: "Agencies and content studios", body: "A flagship tool that delivers client-ready work every shoot." },
    ],
    notFor:
      "At 958 g, the Mavic 3 Pro is bigger and heavier than DJI's Mini and Air drones, and it costs more. If you're a beginner or mostly post to social media, the Mini 4 Pro or Air 3S gives you excellent results for much less. Always check the local rules for where you plan to fly.",
    specs: [
      { label: "Weight", value: "958 g" },
      { label: "Hasselblad camera", value: "4/3 CMOS, 20 MP, 24 mm, f/2.8–f/11" },
      { label: "Medium tele camera", value: "1/1.3-inch CMOS, 48 MP, 70 mm, f/2.8" },
      { label: "Tele camera", value: "1/2-inch CMOS, 12 MP, 166 mm, f/3.4, up to 28× hybrid zoom" },
      { label: "Video", value: "5.1K at up to 50fps, DCI 4K at up to 120fps" },
      { label: "Colour", value: "10-bit D-Log, D-Log M and HLG" },
      { label: "Max flight time", value: "43 min*" },
      { label: "Transmission", value: "DJI O3+, 1080p/60fps live view, up to 15 km (FCC) / 8 km (CE)" },
      { label: "Sensing", value: "Omnidirectional obstacle sensing, APAS" },
      { label: "Wind resistance", value: "12 m/s" },
      { label: "Smart features", value: "ActiveTrack, Waypoint flight, Cruise Control, MasterShots, Hyperlapse" },
      { label: "Storage", value: "8 GB internal + microSD card (not included)" },
    ],
    faqs: [
      {
        q: "Which package should I choose?",
        a: "Both come with the DJI RC screen controller. The standard package has one battery. The Fly More Combo adds 2 more batteries, a charging hub and a carrying bag, for over two hours of flying per outing. For paid shoots, the Fly More Combo is the better value.",
      },
      {
        q: "Mavic 3 Pro or Air 3S?",
        a: "The Air 3S has two cameras and is lighter and cheaper. The Mavic 3 Pro adds a larger 4/3 Hasselblad sensor with adjustable aperture, a third 166 mm tele camera and longer flight time. If you shoot professionally, the Mavic 3 Pro is the one to get.",
      },
      {
        q: "Do I need a phone to fly?",
        a: "No. The DJI RC has a built-in screen, so you can switch it on and fly without connecting your phone.",
      },
      {
        q: "Do I need a memory card?",
        a: "The drone has 8 GB of internal storage, but you'll want a fast microSD card (V30 or faster) for 5.1K and 4K/120fps video. We can add one to your order. Just ask on WhatsApp.",
      },
      {
        q: "Is it hard to fly?",
        a: "No. It hovers steadily, senses obstacles on every side and returns home automatically. Because of its size and value, we recommend some practice in open spaces before flying in busy areas.",
      },
      {
        q: "How do I order?",
        a: "Pick your package above and tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "dji-rc",
        name: "Standard (DJI RC)",
        price: 3_400_000,
        includes: [
          "DJI Mavic 3 Pro drone",
          "DJI RC screen remote controller",
          "1 Intelligent Flight Battery",
          "Gimbal protector",
          "Spare propellers",
          "Cables",
        ],
      },
      {
        id: "fmc-rc",
        name: "Fly More Combo (DJI RC)",
        price: 4_500_000,
        badge: "Best value",
        includes: [
          "DJI Mavic 3 Pro drone",
          "DJI RC screen remote controller",
          "3 Intelligent Flight Batteries",
          "Battery charging hub",
          "Carrying bag",
          "Gimbal protector",
          "Spare propellers",
          "Cables",
        ],
      },
    ],
  },
  {
    slug: "hollyland-solidcom-se",
    brand: "Hollyland",
    name: "Hollyland Solidcom SE",
    category: "Audio",
    tagline: "Your crew, always in sync.",
    headline:
      "A wireless, full-duplex headset intercom that lets your whole crew talk hands-free. Up to 350 m range, dual-mic noise cancellation and up to 12 hours per battery, pre-paired and ready to go out of the box.",
    summary:
      "Solidcom SE keeps directors, camera operators, sound and lighting crews connected without walkie-talkies or wires. Everyone talks and listens at the same time, like a phone call, while noise cancellation filters out generators, crowds and wind. Batteries swap in seconds, so the talk never stops.",
    image: "/products/solidcom-se/main.png",
    hero: "/products/solidcom-se/hero.jpg",
    gallery: [
      { src: "/products/solidcom-se/main.png", alt: "Hollyland Solidcom SE headsets with charging base" },
      { src: "/products/solidcom-se/kit.jpg", alt: "Solidcom SE master headset, four remote headsets and charging base" },
      { src: "/products/solidcom-se/team.jpg", alt: "Production crew wearing Solidcom SE headsets" },
      { src: "/products/solidcom-se/boom.jpg", alt: "Close-up of the Solidcom SE microphone boom" },
    ],
    stats: [
      { value: "350 m", label: "Line-of-sight range*" },
      { value: "Full-duplex", label: "Talk and listen at once" },
      { value: "12 h", label: "Per remote battery*" },
      { value: ">20 dB", label: "Dual-mic noise reduction" },
    ],
    highlights: [
      {
        title: "Hands-free, full-duplex talk",
        body: "Everyone on the team can talk and listen at the same time, just like a phone call. No buttons to hold, no waiting your turn. Need a moment of silence? Push-to-Talk and a latching mute switch put you in control.",
        image: "/products/solidcom-se/camera.jpg",
      },
      {
        title: "Clear voices, even on a loud set",
        body: "Dual-mic ENC cuts background noise by more than 20 dB, and a 70 dB signal-to-noise ratio keeps speech crisp. Generators, crowds and music stay in the background, where they belong.",
        image: "/products/solidcom-se/talk.jpg",
      },
      {
        title: "350 m range that stays stable",
        body: "The 2.4 GHz link reaches up to 350 m (1,100 ft) line of sight. Auto Frequency Hopping moves away from interference automatically, so the conversation doesn't drop in busy venues.",
        image: "/products/solidcom-se/team.jpg",
      },
      {
        title: "Swap batteries, keep talking",
        body: "Each headset runs on a detachable 770 mAh battery: about 10 hours on the master and 12 hours on a remote. Swap in a charged one in seconds, and charge them all on the included 6-slot base.",
        image: "/products/solidcom-se/battery.jpg",
      },
    ],
    idealFor: [
      { title: "Film and TV crews", body: "Director, camera, sound and lighting stay in sync on every take." },
      { title: "Live events and churches", body: "Coordinate stage, cameras and front of house without shouting." },
      { title: "Broadcast and live streams", body: "Clear cues between director and operators during the show." },
      { title: "Sports and outdoor shoots", body: "Light, water-resistant headsets with long range for open fields." },
    ],
    notFor:
      "Solidcom SE is a closed team intercom, not a mic for recording or broadcasting your voice. The headsets resist splashes but aren't waterproof, so don't submerge them. For larger teams, a spare battery for every headset and an encrypted link, look at the Solidcom C1 Pro.",
    specs: [
      { label: "System", value: "Wireless full-duplex headset intercom, pre-paired" },
      { label: "Frequency", value: "2.4 GHz, Auto Frequency Hopping" },
      { label: "Range", value: "Up to 350 m (1,100 ft) line of sight*" },
      { label: "Noise reduction", value: "Dual-mic ENC, >20 dB" },
      { label: "Signal-to-noise ratio", value: "70 dB" },
      { label: "Frequency response", value: "150 Hz–7 kHz" },
      { label: "Controls", value: "Push-to-Talk, latching mute/talk, volume" },
      { label: "Battery", value: "Detachable 770 mAh Li-ion, about 3 h to charge" },
      { label: "Battery life", value: "About 10 h (master), 12 h (remote)*" },
      { label: "Weight", value: "About 185 g per headset with battery" },
      { label: "Durability", value: "Water resistant (not waterproof), replaceable ear pads" },
      { label: "Operating temperature", value: "0–45 °C" },
    ],
    specsNote: "*Range and battery life measured by the manufacturer in ideal conditions.",
    faqs: [
      {
        q: "Which package should I choose?",
        a: "Count everyone who needs to talk, including the director. The 5S kit connects 5 people: 1 master and 4 remote headsets. The 8S kit is for bigger crews of up to 8 people. If you're unsure, tell us about your team on WhatsApp and we'll recommend the right kit.",
      },
      {
        q: "Is it hard to set up?",
        a: "No. The headsets come pre-paired. Switch them on and they connect automatically. No base station, no cables and no app needed.",
      },
      {
        q: "How far apart can people be?",
        a: "Up to 350 m (1,100 ft) with a clear line of sight. Walls, crowds and metal structures reduce range, so indoors expect less.",
      },
      {
        q: "Can I use it in the rain?",
        a: "The headsets are water resistant, so light rain and splashes are fine. They are not waterproof, so keep them out of heavy downpours and never submerge them.",
      },
      {
        q: "What happens when a battery runs low?",
        a: "Pop it out and slide in a charged one. The batteries are detachable, so you can keep a spare charging on the base and keep talking all day.",
      },
      {
        q: "How do I order?",
        a: "Pick your package above and tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "5s",
        name: "5-person kit (SE-5S)",
        price: 1_150_000,
        includes: [
          "1 master headset (single-ear)",
          "4 remote headsets (single-ear)",
          "5 Li-ion 770 mAh batteries",
          "6-slot charging base",
          "USB-A to USB-C cable",
          "Number stickers",
        ],
      },
      {
        id: "8s",
        name: "8-person kit (SE-8S)",
        price: 1_700_000,
        badge: "Bigger crews",
        includes: [
          "8 wireless single-ear headsets (master + remotes)",
          "Li-ion batteries for every headset",
          "Charging base",
          "USB-C cable",
          "Number stickers",
        ],
      },
    ],
  },
  {
    slug: "hollyland-solidcom-c1-pro",
    brand: "Hollyland",
    name: "Hollyland Solidcom C1 Pro",
    category: "Audio",
    tagline: "Pro intercom for big crews.",
    headline:
      "A full-duplex wireless intercom for crews of up to 8, with dual-mic noise cancellation, 350 m range and a spare battery for every headset. Switch on, put it on, start talking.",
    summary:
      "The Solidcom C1 Pro is Hollyland's professional headset intercom for churches, live events, film sets and broadcast teams. Everyone talks and listens at once, hands-free, while noise cancellation keeps voices clear over crowds, music and generators. Encrypted DECT links keep your conversation private and stable across the whole venue.",
    image: "/products/solidcom-c1-pro/main.png",
    hero: "/products/solidcom-c1-pro/hero.jpg",
    gallery: [
      { src: "/products/solidcom-c1-pro/main.png", alt: "Hollyland Solidcom C1 Pro 8-person kit with charging case" },
      { src: "/products/solidcom-c1-pro/kit.jpg", alt: "Solidcom C1 Pro headsets and charging case" },
      { src: "/products/solidcom-c1-pro/crew.jpg", alt: "Camera crew wearing Solidcom C1 Pro headsets" },
      { src: "/products/solidcom-c1-pro/drone.jpg", alt: "Drone pilot wearing a Solidcom C1 Pro headset" },
    ],
    stats: [
      { value: "8", label: "People in one kit" },
      { value: "350 m", label: "Line-of-sight range*" },
      { value: "10 h+", label: "Per remote battery*" },
      { value: "20 dB", label: "Dual-mic noise reduction" },
    ],
    highlights: [
      {
        title: "Clear voices in loud places",
        body: "A directional main mic picks up your voice while a second mic samples the noise around you. Dual-mic ENC removes about 20 dB of background noise, and echo cancellation keeps speech crisp from 150 Hz to 7 kHz.",
        image: "/products/solidcom-c1-pro/tv.jpg",
      },
      {
        title: "Talk, mute or push-to-talk",
        body: "Everyone talks and listens at the same time, like a phone call. One button toggles talk and mute, or hold it for push-to-talk. Flip the mic boom up to mute instantly. Red nameplates mark the master, blue the remotes.",
        image: "/products/solidcom-c1-pro/ptt.jpg",
      },
      {
        title: "350 m range, private and stable",
        body: "The DECT link covers up to 350 m (1,100 ft) line of sight, enough for a large church, stadium or festival site. Dual antennas on every headset fight interference, and encryption stops outsiders listening in.",
        image: "/products/solidcom-c1-pro/church.jpg",
      },
      {
        title: "Two batteries per headset",
        body: "Every headset comes with a spare battery, so you can swap and keep talking all day. Remotes run more than 10 hours per battery and recharge in about 2.5 hours in the included charging case.",
        image: "/products/solidcom-c1-pro/battery.jpg",
      },
    ],
    idealFor: [
      { title: "Churches and live events", body: "Stage, cameras, sound and lights coordinated across the whole venue." },
      { title: "Film and TV production", body: "Director and crew stay in sync on busy, noisy sets." },
      { title: "Broadcast and live streams", body: "Clear cues between director and every camera operator." },
      { title: "Concerts and festivals", body: "Noise cancellation that keeps up with loud music and crowds." },
    ],
    notFor:
      "The C1 Pro is a closed team intercom, not a mic for recording or broadcasting. If your team is 5 people or fewer and you don't need the longer battery life, the Solidcom SE does the job for much less.",
    specs: [
      { label: "System", value: "Wireless full-duplex headset intercom, DECT, encrypted" },
      { label: "Frequency", value: "1.9 GHz DECT (region-specific bands)" },
      { label: "Range", value: "Up to 350 m (1,100 ft) line of sight*" },
      { label: "Noise reduction", value: "Dual-mic ENC, 20 dB ±2, with echo cancellation" },
      { label: "Frequency response", value: "150 Hz–7 kHz" },
      { label: "Signal-to-noise ratio", value: "71 ±2 dB" },
      { label: "Controls", value: "Talk/mute with push-to-talk, volume, boom-up mute" },
      { label: "Battery", value: "Replaceable 700 mAh Li-ion, about 2.5 h to charge" },
      { label: "Battery life", value: "Remote >10 h; master >4 h with 7 remotes*" },
      { label: "Weight", value: "About 170 g per headset with battery" },
      { label: "Compatibility", value: "Works with first-generation Solidcom C1" },
      { label: "Operating temperature", value: "0–45 °C" },
    ],
    specsNote: "*Range and battery life measured by the manufacturer in ideal conditions.",
    faqs: [
      {
        q: "How many people can use it?",
        a: "The 8S kit connects 8 people: 1 master headset and 7 remotes. Need more people, or separate A and B talk groups? Ask us about adding the Solidcom hub on WhatsApp.",
      },
      {
        q: "Solidcom C1 Pro or Solidcom SE?",
        a: "Both are full-duplex and noise-cancelling. The C1 Pro uses DECT with encryption and dual antennas for a more stable, private link, ships a spare battery for every headset, and scales to bigger teams. For small crews on a budget, the SE is great value.",
      },
      {
        q: "Is it hard to set up?",
        a: "No. The headsets come pre-paired. Switch them on, put them on and start talking. No base station, no cables and no app needed.",
      },
      {
        q: "How far apart can people be?",
        a: "Up to 350 m (1,100 ft) with a clear line of sight. Walls, crowds and metal structures reduce range, so indoors expect less.",
      },
      {
        q: "Will it last a full event?",
        a: "Yes. Remote headsets run more than 10 hours per battery, and every headset comes with a spare. Swap the master's battery partway through long events, since it powers the whole network.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "8s",
        name: "8-person kit (C1 Pro-8S)",
        price: 3_400_000,
        includes: [
          "1 master headset (single-ear)",
          "7 remote headsets (single-ear)",
          "16 Li-ion batteries (2 per headset)",
          "8-slot charging case",
          "Microphone cushions and over-ear/on-ear cushions",
          "DC adapter and USB-A to USB-C cable",
          "Storage case",
        ],
      },
    ],
  },
  {
    slug: "hollyland-lark-max-2",
    brand: "Hollyland",
    name: "Hollyland Lark Max 2",
    category: "Audio",
    tagline: "Pro wireless mics you can hear live.",
    headline:
      "Two-person wireless lav kit with 32-bit float backup recording, AI noise cancellation, timecode and wireless monitoring earphones in the box. Clean, safe audio for every shoot.",
    summary:
      "The Lark Max 2 Ultimate Combo is Hollyland's flagship wireless mic kit for filmmakers, journalists and content creators. Two tiny 14 g transmitters record 32-bit float backups onboard, so a dropout or clipped shout never ruins a take. Plug the camera receiver into your camera or the USB-C receiver into your phone, and listen live through the included OWS earphones.",
    image: "/products/lark-max-2/main.png",
    hero: "/products/lark-max-2/hero.jpg",
    gallery: [
      { src: "/products/lark-max-2/main.png", alt: "Hollyland Lark Max 2 Ultimate Combo with OWS earphones and charging case" },
      { src: "/products/lark-max-2/kit.jpg", alt: "Everything in the Lark Max 2 Ultimate Combo box" },
      { src: "/products/lark-max-2/closeup.jpg", alt: "Lark Max 2 transmitter and camera receiver" },
      { src: "/products/lark-max-2/clip.jpg", alt: "Lark Max 2 transmitter clipped to a jacket" },
    ],
    stats: [
      { value: "32-bit", label: "Float onboard recording" },
      { value: "340 m", label: "Line-of-sight range*" },
      { value: "36 h", label: "Battery with case*" },
      { value: "14 g", label: "Per transmitter" },
    ],
    highlights: [
      {
        title: "Hear exactly what you're recording",
        body: "The included OWS open-ear earphones let you monitor your talent wirelessly from up to 100 m away with about 25 ms delay, so you catch rustle, wind or dropouts while you can still re-take. They also double as everyday Bluetooth earphones.",
        image: "/products/lark-max-2/monitor.jpg",
      },
      {
        title: "A backup that can't clip",
        body: "Each transmitter records 32-bit float audio to 8 GB of built-in storage, up to 14 hours. If the wireless signal drops or someone suddenly shouts, the backup on the mic saves the take. On iPhone, iPad and Mac you can even capture 32-bit float live over USB-C.",
        image: "/products/lark-max-2/record.jpg",
      },
      {
        title: "Studio sound, minus the noise",
        body: "48 kHz audio with 72 dB signal-to-noise and 128 dB max SPL keeps voices clear and natural. AI noise cancellation, adjustable from 5 to 25 dB, cuts traffic, wind and room echo before it reaches your edit.",
        image: "/products/lark-max-2/sound.jpg",
      },
      {
        title: "Shoot all day on one case",
        body: "Transmitters run about 11 hours per charge and the charging case brings the total to 36 hours. A full charge takes under 1.5 hours. Frame-accurate timecode over 3.5 mm and USB-C keeps multi-camera edits in sync.",
        image: "/products/lark-max-2/battery.jpg",
      },
    ],
    idealFor: [
      { title: "Interviews and documentaries", body: "Two clean voice tracks with an onboard backup you can trust." },
      { title: "YouTube and social content", body: "USB-C receiver goes straight into your phone, no adapters." },
      { title: "Weddings and events", body: "Small mics, long range and recordings that survive dropouts." },
      { title: "Solo shooters", body: "Monitor audio by ear while you run the camera yourself." },
    ],
    notFor:
      "If you just need simple, budget mics for phone videos and don't need onboard recording, timecode or wireless monitoring, the Lark M2S or Lark M2 will do the job for much less.",
    specs: [
      { label: "In this kit", value: "2 transmitters, camera receiver, USB-C receiver, OWS monitor earphones" },
      { label: "Transmission", value: "2.4 GHz adaptive frequency hopping" },
      { label: "Range", value: "Up to 340 m (1,115 ft) line of sight*" },
      { label: "Audio", value: "48 kHz / 32-bit float, 20 Hz–20 kHz" },
      { label: "Signal-to-noise ratio", value: "72 dB" },
      { label: "Max SPL", value: "128 dB SPL" },
      { label: "Onboard recording", value: "8 GB per transmitter, up to 14 h" },
      { label: "Noise cancellation", value: "AI, adjustable 5–25 dB" },
      { label: "Timecode", value: "Frame-level, via 3.5 mm and USB-C" },
      { label: "Battery life", value: "Transmitter about 11 h; 36 h with charging case*" },
      { label: "Charge time", value: "Under 1.5 h" },
      { label: "Weight", value: "Transmitter 14 g; camera RX 24 g; USB-C RX 5.9 g" },
    ],
    specsNote: "*Range and battery life measured by the manufacturer in ideal conditions. Indoors and with bodies in the way, expect less range.",
    faqs: [
      {
        q: "Does it work with my phone and my camera?",
        a: "Yes. The camera receiver connects to any camera with a 3.5 mm mic input (cables included), and the USB-C receiver plugs straight into USB-C phones, iPads and laptops. For older Lightning iPhones, ask us about an adapter.",
      },
      {
        q: "What does the OWS earphone do?",
        a: "It lets you listen to your mics wirelessly while you shoot, up to 100 m away, so you hear problems as they happen. When you're not filming, it works as a normal Bluetooth earphone.",
      },
      {
        q: "Why does 32-bit float recording matter?",
        a: "A 32-bit float file can't be ruined by gain that is too high or too low. Even if someone shouts or the signal drops, the copy saved on the transmitter can be recovered cleanly in your edit.",
      },
      {
        q: "Can I add more mics later?",
        a: "Yes. The receiver supports up to 4 transmitters. Extra Lark Max 2 transmitters can be added. Message us on WhatsApp for price and availability.",
      },
      {
        q: "Lark Max 2 or Lark M2S?",
        a: "The M2S is a great compact mic for creators. The Lark Max 2 adds onboard 32-bit float recording, timecode, a screen on the receiver, wireless monitoring and much longer range, so it suits paid and professional work.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "ultimate",
        name: "Ultimate Combo (2 mics + OWS earphones)",
        price: 420_000,
        includes: [
          "2 transmitters with built-in mics",
          "Camera receiver (3.5 mm) and USB-C receiver",
          "OWS wireless monitor earphones with charging case",
          "Charging case for transmitters and receivers",
          "2 lavalier mics, windscreens and magnets",
          "Camera and phone cables",
        ],
      },
    ],
  },
  {
    slug: "hollyland-lark-m2s",
    brand: "Hollyland",
    name: "Hollyland Lark M2S",
    category: "Audio",
    tagline: "Almost invisible wireless mics.",
    headline:
      "A two-person wireless mic kit with 7 g button-size transmitters and a receiver for your camera, your Android phone and your iPhone, all in the box. Clear sound for videos, interviews and live streams.",
    summary:
      "The Lark M2S Ultimate Combo is one of the smallest wireless mic kits you can buy. Each transmitter weighs just 7 g and clips under a collar where the camera barely sees it. You get three receivers, for a camera, USB-C phones and Lightning iPhones, so you can plug into whatever you're shooting with today. Noise cancellation and 30 hours of battery with the case keep you recording all day.",
    image: "/products/lark-m2s/main.png",
    hero: "/products/lark-m2s/hero.jpg",
    gallery: [
      { src: "/products/lark-m2s/main.png", alt: "Hollyland Lark M2S Ultimate Combo with charging case and receivers" },
      { src: "/products/lark-m2s/kit.jpg", alt: "Everything in the Lark M2S Ultimate Combo box" },
      { src: "/products/lark-m2s/closeup.jpg", alt: "Lark M2S transmitters on the charging case with camera and USB-C receivers" },
      { src: "/products/lark-m2s/clip.jpg", alt: "Lark M2S transmitter clipped discreetly to a shirt collar" },
    ],
    stats: [
      { value: "7 g", label: "Per transmitter" },
      { value: "300 m", label: "Line-of-sight range*" },
      { value: "30 h", label: "Battery with case*" },
      { value: "3", label: "Receivers in the box" },
    ],
    highlights: [
      {
        title: "So small they disappear on camera",
        body: "Each transmitter weighs only 7 g. Clip it on and it sits under a collar or on a neckline where viewers hardly notice it. The flexible titanium clip holds its shape and stays put, even when your talent is moving.",
        image: "/products/lark-m2s/tiny.jpg",
      },
      {
        title: "One kit for camera, Android and iPhone",
        body: "The Ultimate Combo gives you three receivers: one for cameras (3.5 mm), one for USB-C phones, tablets and laptops, and one for Lightning iPhones. The camera receiver can feed your camera and a phone at the same time, so you get a backup copy of the audio.",
        image: "/products/lark-m2s/connect.jpg",
      },
      {
        title: "Your voice, not the street",
        body: "48 kHz / 24-bit audio with over 70 dB signal-to-noise and 116 dB max SPL keeps speech clear. One press of a button turns on noise cancellation, with strong and weak levels in the LarkSound app, to cut wind, traffic and crowd noise.",
        image: "/products/lark-m2s/noise.jpg",
      },
      {
        title: "Charged and ready all day",
        body: "Transmitters run about 9 hours and the camera receiver about 8.5 hours on one charge. The charging case tops everything up about 2.5 times for up to 30 hours in total, and a full charge takes under 1.5 hours.",
        image: "/products/lark-m2s/battery.jpg",
      },
    ],
    idealFor: [
      { title: "Content creators", body: "Plug into your phone and record clean voice for Reels, TikTok and YouTube." },
      { title: "Interviews and podcasts", body: "Two mics, two voices, recorded clearly on camera or phone." },
      { title: "Churches and events", body: "Small, reliable mics that stay out of sight." },
      { title: "Teachers and live streamers", body: "Works with laptops, iPads and phones straight out of the box." },
    ],
    notFor:
      "If you shoot paid jobs and need a backup recording on the mic itself, timecode or live monitoring, step up to the Lark Max 2. If you want longer battery life for less money, the Lark M2 Combo also has three receivers and lasts up to 40 hours with its case.",
    specs: [
      { label: "In this kit", value: "2 transmitters, camera receiver, USB-C receiver, Lightning receiver, charging case" },
      { label: "Transmission", value: "2.4 GHz adaptive frequency hopping" },
      { label: "Range", value: "Up to 300 m (1,000 ft) line of sight*" },
      { label: "Audio", value: "48 kHz / 24-bit, 20 Hz–20 kHz" },
      { label: "Signal-to-noise ratio", value: "Over 70 dB" },
      { label: "Max SPL", value: "116 dB SPL" },
      { label: "Mic pattern", value: "Omnidirectional" },
      { label: "Noise cancellation", value: "On/off by button; strong or weak in the LarkSound app" },
      { label: "Outputs", value: "3.5 mm (camera RX), USB-C, Lightning" },
      { label: "Battery life", value: "Transmitter about 9 h; camera RX about 8.5 h; up to 30 h with case*" },
      { label: "Charge time", value: "Transmitter about 1 h; case under 1.5 h" },
      { label: "Weight", value: "Transmitter 7 g; camera RX 12 g; phone RX 6 g" },
    ],
    specsNote: "*Range and battery life measured by the manufacturer in ideal conditions, with noise cancellation off. Indoors and with bodies in the way, expect less range.",
    faqs: [
      {
        q: "Does it work with my phone and my camera?",
        a: "Yes. The camera receiver connects to any camera with a 3.5 mm mic input (cable included). The USB-C receiver plugs into Android phones, newer iPhones, iPads and laptops, and the Lightning receiver plugs into older iPhones.",
      },
      {
        q: "Can I record two people at once?",
        a: "Yes. The kit has two transmitters, so you can mic up two people and record both voices together.",
      },
      {
        q: "Does it record onto the mic?",
        a: "No. The M2S sends audio to the receiver and your camera or phone records it. If you want a backup recording saved on the mic itself, look at the Lark Max 2.",
      },
      {
        q: "Lark M2S or Lark M2?",
        a: "The M2S transmitters are smaller and lighter (7 g) with a regular clip, so they are easier to hide. The Lark M2 Combo costs a little less and lasts longer (up to 40 hours with the case), but its mics attach with magnets or a necklace case instead of a clip.",
      },
      {
        q: "Is there a white version?",
        a: "Hollyland makes the M2S in Space Gray and Glacier White. Message us on WhatsApp to check which colour we have in stock.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "ultimate",
        name: "Ultimate Combo (2 mics, 3 receivers)",
        price: 200_000,
        includes: [
          "2 transmitters with built-in mics",
          "Camera receiver (3.5 mm)",
          "USB-C receiver and Lightning receiver",
          "Charging case",
          "2 furry windscreens",
          "3.5 mm TRS cable and USB-A to USB-C charging cable",
        ],
      },
    ],
  },
  {
    slug: "hollyland-lark-m2",
    brand: "Hollyland",
    name: "Hollyland Lark M2",
    category: "Audio",
    tagline: "Button-size mics. All-day battery.",
    headline:
      "A two-person wireless mic kit with tiny 9 g transmitters, receivers for your camera, Android phone and iPhone, and up to 40 hours of battery with the charging case.",
    summary:
      "The Lark M2 Combo is the all-round wireless mic kit for creators. The button-size transmitters attach with a magnet or hang from a necklace case, so they stay out of the way on camera. Three receivers cover cameras, USB-C phones and Lightning iPhones, one-touch noise cancellation cleans up busy locations, and the charging case keeps you going for up to 40 hours.",
    image: "/products/lark-m2/main.png",
    hero: "/products/lark-m2/hero.jpg",
    gallery: [
      { src: "/products/lark-m2/main.png", alt: "Hollyland Lark M2 Combo with charging case, transmitters and receivers" },
      { src: "/products/lark-m2/kit.jpg", alt: "Everything in the Lark M2 Combo box" },
      { src: "/products/lark-m2/closeup.jpg", alt: "Lark M2 transmitters above the camera charging case with USB-C and Lightning receivers" },
      { src: "/products/lark-m2/white.jpg", alt: "Lark M2 Combo in Ivory White" },
    ],
    stats: [
      { value: "9 g", label: "Per transmitter" },
      { value: "300 m", label: "Line-of-sight range*" },
      { value: "40 h", label: "Battery with case*" },
      { value: "3", label: "Receivers in the box" },
    ],
    highlights: [
      {
        title: "A mic the size of a button",
        body: "Each transmitter is just 26 mm across and weighs about 9 g. Hold it on with the included magnets, or wear it on the necklace case, and it blends into your outfit instead of drawing attention.",
        image: "/products/lark-m2/wear.jpg",
      },
      {
        title: "One kit for camera, Android and iPhone",
        body: "The Combo comes with three receivers: a 3.5 mm receiver for cameras and laptops, a USB-C receiver for Android phones, newer iPhones, iPads and MacBooks, and a Lightning receiver for older iPhones. Switch devices without buying anything extra.",
        image: "/products/lark-m2/connect.jpg",
      },
      {
        title: "One touch to cut the noise",
        body: "Recording next to traffic, a generator or a crowd? Press once to turn on noise cancellation and keep the focus on your voice. Audio is 48 kHz / 24-bit with over 70 dB signal-to-noise and 115 dB max SPL.",
        image: "/products/lark-m2/noise.jpg",
      },
      {
        title: "Record all day, charge in 1.5 hours",
        body: "Transmitters run about 10 hours and the camera receiver about 9 hours on a charge. The charging case refills everything more than three times for up to 40 hours in total, and a full charge takes about 1.5 hours.",
        image: "/products/lark-m2/battery.jpg",
      },
    ],
    idealFor: [
      { title: "Content creators", body: "Clean voice for Reels, TikTok and YouTube, straight into your phone." },
      { title: "Interviews and podcasts", body: "Two mics, two voices, recorded clearly on camera or phone." },
      { title: "Churches and events", body: "Small, reliable mics that last a full programme." },
      { title: "Teachers and live streamers", body: "Plug into a laptop, iPad or phone and start talking." },
    ],
    notFor:
      "If you shoot paid jobs and need a backup recording on the mic itself, timecode or live monitoring, step up to the Lark Max 2. If you want the smallest possible mic with a regular clip, look at the Lark M2S.",
    specs: [
      { label: "In this kit", value: "2 transmitters, camera receiver, USB-C receiver, Lightning receiver, camera charging case" },
      { label: "Transmission", value: "2.4 GHz adaptive frequency hopping" },
      { label: "Range", value: "Up to 300 m (1,000 ft) line of sight*" },
      { label: "Audio", value: "48 kHz / 24-bit, 20 Hz–20 kHz" },
      { label: "Signal-to-noise ratio", value: "Over 70 dB" },
      { label: "Max SPL", value: "115 dB SPL" },
      { label: "Mic pattern", value: "Omnidirectional" },
      { label: "Noise cancellation", value: "One-touch on/off" },
      { label: "Outputs", value: "3.5 mm (camera RX), USB-C, Lightning" },
      { label: "Battery life", value: "Transmitter about 10 h; camera RX about 9 h; up to 40 h with case*" },
      { label: "Charge time", value: "Transmitter and receiver about 1.5 h; case under 2 h" },
      { label: "Weight", value: "Transmitter 9 g; camera RX 14.8 g; phone RX 6 g" },
    ],
    specsNote: "*Range and battery life measured by the manufacturer in ideal conditions, with noise cancellation off. Indoors and with bodies in the way, expect less range.",
    faqs: [
      {
        q: "Does it work with my phone and my camera?",
        a: "Yes. The camera receiver connects to any camera with a 3.5 mm mic input (cable included). The USB-C receiver plugs into Android phones, newer iPhones, iPads and laptops, and the Lightning receiver plugs into older iPhones.",
      },
      {
        q: "Can I record two people at once?",
        a: "Yes. The kit has two transmitters, so you can mic up two people and record both voices together.",
      },
      {
        q: "How do I attach the mic?",
        a: "The box includes four magnets and two necklace silicone cases. Put the magnet behind your shirt to hold the mic on the front, or hang it around your neck. There is no back clip in the box.",
      },
      {
        q: "Lark M2 or Lark M2S?",
        a: "The Lark M2 gives you longer battery life (up to 40 hours with the case) at a lower price. The M2S has even smaller 7 g transmitters with a regular clip, which makes them a little easier to hide.",
      },
      {
        q: "Is there a white version?",
        a: "Yes, Hollyland makes the Lark M2 Combo in black and Ivory White. Message us on WhatsApp to check which colour we have in stock.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "combo",
        name: "Combo (2 mics, 3 receivers)",
        price: 170_000,
        includes: [
          "2 transmitters with built-in mics",
          "Camera receiver (3.5 mm)",
          "USB-C receiver and Lightning receiver",
          "Camera charging case",
          "2 furry windscreens, 4 magnets and 2 necklace cases",
          "3.5 mm TRS cable and USB-A to USB-C charging cable",
          "Drawstring bag",
        ],
      },
    ],
  },
  {
    slug: "zoom-h6-studio",
    brand: "Zoom",
    name: "Zoom H6 Studio",
    category: "Audio",
    tagline: "Six tracks. Never clip again.",
    headline:
      "A handheld recorder with four XLR inputs, a swappable XY stereo mic and 32-bit float recording, so every voice and instrument is captured cleanly without worrying about levels.",
    summary:
      "The H6 Studio records up to six tracks at once: four mics or instruments through its XLR/TRS inputs plus the included XY stereo mic. 32-bit float recording means loud moments don't distort and quiet ones can be raised later, so you never lose a take to bad levels. It runs on AA batteries for the field, doubles as a USB-C audio interface for your computer or phone, and fits in one hand.",
    image: "/products/zoom-h6-studio/main.png",
    hero: "/products/zoom-h6-studio/hero.jpg",
    gallery: [
      { src: "/products/zoom-h6-studio/main.png", alt: "Zoom H6 Studio handheld recorder with XY mic capsule" },
      { src: "/products/zoom-h6-studio/angle.jpg", alt: "Zoom H6 Studio from the side, showing gain knobs and colour screen" },
      { src: "/products/zoom-h6-studio/side.jpg", alt: "H6 Studio XLR inputs, headphone output, USB-C port and line out" },
      { src: "/products/zoom-h6-studio/mics.jpg", alt: "Close-up of the XYH-5s XY stereo mic capsule" },
    ],
    stats: [
      { value: "6", label: "Tracks at once" },
      { value: "4", label: "XLR/TRS inputs" },
      { value: "32-bit", label: "Float recording" },
      { value: "15 h", label: "Battery on AA*" },
    ],
    highlights: [
      {
        title: "Four XLR inputs for a whole panel",
        body: "Plug in up to four lavaliers, handheld or shotgun mics, each with its own gain knob and +48 V phantom power. Zoom's low-noise preamps keep voices clean, so a four-person podcast, interview or panel can all record on one device.",
        image: "/products/zoom-h6-studio/cables.jpg",
      },
      {
        title: "32-bit float: no more ruined takes",
        body: "Dual converters capture everything from a whisper to a shout without clipping. If someone suddenly laughs, sings or hammers on metal, the audio stays clean, and you can fix the level later in editing. Switch to 16/24-bit when you need smaller files.",
        image: "/products/zoom-h6-studio/loud.jpg",
      },
      {
        title: "Your recorder and your audio interface",
        body: "Connect over USB-C to a Mac, PC, iPhone or Android and use it as a 6-in/2-out interface for live streams and recording into your software. It can save a backup to the microSD card at the same time, so a crash never costs you the session.",
        image: "/products/zoom-h6-studio/usb.jpg",
      },
      {
        title: "Runs on AA batteries anywhere",
        body: "Four AA batteries give about 15 hours of stereo recording with alkalines, or around 26 hours with lithium. No battery? Power it from USB instead. It weighs 477 g, so it travels easily to locations, churches and events.",
        image: "/products/zoom-h6-studio/battery.jpg",
      },
    ],
    idealFor: [
      { title: "Podcasts and interviews", body: "Mic up to four people and record each voice on its own track." },
      { title: "Churches and live music", body: "Capture the room with the XY mic plus feeds from the mixer." },
      { title: "Film and documentary sound", body: "Shotgun and wireless mics into one recorder, with no clipping." },
      { title: "Live streamers and studios", body: "Use it as a USB audio interface for your computer or phone." },
    ],
    notFor:
      "If you only record one or two people, the Zoom H5 Studio or H4 Essential costs less. For professional film sets that need eight inputs and built-in timecode, look at the Zoom F8n Pro.",
    specs: [
      { label: "Tracks", value: "Up to 6 tracks plus a stereo mix (8 in total)" },
      { label: "Inputs", value: "4 XLR/TRS combo inputs with +48 V phantom power, plus the XY mic capsule" },
      { label: "Included mic", value: "XYH-5s 90° XY stereo capsule, max SPL 140 dB" },
      { label: "Recording", value: "32-bit float or 16/24-bit WAV, 44.1–192 kHz" },
      { label: "Preamps", value: "Gain up to +60 dB, EIN −127 dBu" },
      { label: "Dynamic range", value: "Up to 132 dB (dual AD converters)" },
      { label: "USB", value: "USB-C audio interface, 6-in/2-out, Mac, Windows, iOS and Android" },
      { label: "Outputs", value: "Headphone, 3.5 mm line out, built-in speaker" },
      { label: "Screen", value: "2.0\" colour LCD" },
      { label: "Storage", value: "microSD card up to 2 TB (sold separately)" },
      { label: "Power", value: "4 AA batteries, USB bus power or AD-17 adapter" },
      { label: "Battery life", value: "About 15 h (alkaline) or 26 h (lithium) recording 2 tracks*" },
      { label: "Size and weight", value: "86 × 221 × 54.6 mm, 477 g with batteries" },
      { label: "Expandable", value: "Swap in Zoom SSH-6e shotgun, EXH-6e and XYH-6e capsules; optional Bluetooth and timecode adapters" },
    ],
    specsNote: "*Battery life measured by Zoom. Recording six tracks or using phantom power shortens it (about 4.5 hours on alkaline AAs with six tracks).",
    faqs: [
      {
        q: "What does 32-bit float mean for me?",
        a: "You don't have to set levels perfectly. Loud sounds won't distort and quiet sounds can be turned up in editing without hiss, so takes that would be ruined on other recorders are saved.",
      },
      {
        q: "Can I use it with my camera?",
        a: "Yes. Run a cable from the line out to your camera's mic input to send it a reference track, and record the clean audio in the H6 Studio at the same time. Sync them in editing.",
      },
      {
        q: "Does it work as a USB microphone or interface?",
        a: "Yes. Plug it into a computer, iPhone or Android phone with USB-C and it works as an audio interface for recording or live streaming, with up to six inputs.",
      },
      {
        q: "What do I need to buy with it?",
        a: "A microSD card and four AA batteries (or a USB power source). Add the mics and XLR cables you want to plug into the four inputs.",
      },
      {
        q: "H6 Studio or H5 Studio?",
        a: "The H6 Studio has four XLR inputs and records six tracks. The H5 Studio has two XLR inputs and costs less. Choose the H6 if you ever record more than two people.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "H6 Studio recorder",
        price: 580_000,
        includes: [
          "Zoom H6 Studio recorder",
          "XYH-5s XY stereo mic capsule",
          "microSD card and AA batteries sold separately",
        ],
      },
    ],
  },
  {
    slug: "zoom-h5-studio",
    brand: "Zoom",
    name: "Zoom H5 Studio",
    category: "Audio",
    tagline: "Two XLR inputs. Zero clipped takes.",
    headline:
      "A compact handheld recorder with two locking XLR inputs, a swappable XY stereo mic and 32-bit float recording, built for interviews, podcasts and run-and-gun video.",
    summary:
      "The H5 Studio records up to four tracks plus a stereo mix: two mics through its XLR/TRS inputs and the included XY stereo mic. 32-bit float recording means a sudden shout won't distort and a soft voice can be raised later, so takes aren't ruined by bad levels. It runs on AA batteries, works as a USB-C audio interface for your computer or phone, and costs less than the H6 Studio when two inputs are all you need.",
    image: "/products/zoom-h5-studio/main.png",
    hero: "/products/zoom-h5-studio/hero.jpg",
    gallery: [
      { src: "/products/zoom-h5-studio/main.png", alt: "Zoom H5 Studio handheld recorder with XY mic capsule" },
      { src: "/products/zoom-h5-studio/angle.jpg", alt: "Zoom H5 Studio from the side, showing gain knobs and colour screen" },
      { src: "/products/zoom-h5-studio/inputs-close.jpg", alt: "The two locking XLR/TRS combo inputs on the base of the H5 Studio" },
      { src: "/products/zoom-h5-studio/mics.jpg", alt: "Close-up of the XYH-5s XY stereo mic capsule" },
    ],
    stats: [
      { value: "4+2", label: "Tracks plus stereo mix" },
      { value: "2", label: "XLR/TRS inputs" },
      { value: "32-bit", label: "Float recording" },
      { value: "15 h", label: "Battery on AA*" },
    ],
    highlights: [
      {
        title: "Two XLR inputs for interviews and podcasts",
        body: "Plug in two lavaliers, handheld or shotgun mics through locking XLR/TRS inputs, each with +48 V phantom power. Zoom's low-noise preamps keep voices clean, and the XY mic captures the room at the same time, so a two-person interview records perfectly on one device.",
        image: "/products/zoom-h5-studio/inputs.jpg",
      },
      {
        title: "32-bit float: no more ruined takes",
        body: "Dual converters capture everything from a whisper to a shout without clipping, with up to 132 dB of dynamic range. If a guest suddenly laughs or a crowd cheers, the audio stays clean and you fix the level in editing. Dedicated gain knobs are there when you switch to 16/24-bit for smaller files.",
        image: "/products/zoom-h5-studio/knobs.jpg",
      },
      {
        title: "Your recorder and your audio interface",
        body: "Connect over USB-C to a Mac, PC, iPhone or Android and use it as a 4-in/2-out interface for podcasts, live streams and recording into your software. It can save a backup to the microSD card at the same time, so a crash never costs you the session.",
        image: "/products/zoom-h5-studio/usb.jpg",
      },
      {
        title: "Runs on AA batteries anywhere",
        body: "Four AA batteries give about 15 hours of stereo recording with alkalines, or around 21 hours with lithium. No batteries? Power it from USB instead. At 410 g it slips into a camera bag for shoots, church services and events.",
        image: "/products/zoom-h5-studio/battery.jpg",
      },
    ],
    idealFor: [
      { title: "Interviews and vlogs", body: "Two mics on two people, each voice on its own track." },
      { title: "Two-person podcasts", body: "Record on the go or plug into your laptop as an interface." },
      { title: "Video shooters", body: "Clean audio alongside your camera, with no clipping." },
      { title: "Churches and musicians", body: "Capture the room with the XY mic plus a feed from the mixer." },
    ],
    notFor:
      "If you record three or four people at once, the Zoom H6 Studio gives you four XLR inputs. If you need a simpler recorder on a tighter budget, look at the Zoom H4 Essential.",
    specs: [
      { label: "Tracks", value: "Up to 4 tracks plus a stereo mix (6 in total)" },
      { label: "Inputs", value: "2 locking XLR/TRS combo inputs with +48 V phantom power, plus the XY mic capsule" },
      { label: "Included mic", value: "XYH-5s 90° XY stereo capsule, max SPL 140 dB" },
      { label: "Recording", value: "32-bit float or 16/24-bit WAV, 44.1–192 kHz" },
      { label: "Preamps", value: "Zoom F-series preamps, EIN −127 dBu" },
      { label: "Dynamic range", value: "Up to 132 dB (dual AD converters)" },
      { label: "USB", value: "USB-C audio interface, 4-in/2-out, Mac, Windows, iOS and Android" },
      { label: "Outputs", value: "Headphone, 3.5 mm line out, built-in speaker" },
      { label: "Screen", value: "Full-colour LCD with waveform display" },
      { label: "Storage", value: "microSD card up to 2 TB (sold separately)" },
      { label: "Power", value: "4 AA batteries, USB bus power or AD-17 adapter" },
      { label: "Battery life", value: "About 15 h (alkaline) or 21 h (lithium) recording 2 tracks*" },
      { label: "Size and weight", value: "86 × 206 × 54.6 mm, 410 g with batteries" },
      { label: "Expandable", value: "Swap in Zoom SSH-6e shotgun, EXH-6e and XYH-6e capsules; optional Bluetooth and timecode adapters" },
    ],
    specsNote: "*Battery life measured by Zoom. Recording four tracks or using phantom power shortens it (about 6 hours on alkaline AAs with four tracks).",
    faqs: [
      {
        q: "What does 32-bit float mean for me?",
        a: "You don't have to set levels perfectly. Loud sounds won't distort and quiet sounds can be turned up in editing without hiss, so takes that would be ruined on other recorders are saved.",
      },
      {
        q: "Can I use it with my camera?",
        a: "Yes. Run a cable from the line out to your camera's mic input to send it a reference track, and record the clean audio in the H5 Studio at the same time. Sync them in editing.",
      },
      {
        q: "Does it work as a USB interface?",
        a: "Yes. Plug it into a computer, iPhone or Android phone with USB-C and it works as an audio interface for recording or live streaming, with up to four inputs.",
      },
      {
        q: "What do I need to buy with it?",
        a: "A microSD card and four AA batteries (or a USB power source). Add the mics and XLR cables you want to plug into the two inputs.",
      },
      {
        q: "H5 Studio or H6 Studio?",
        a: "The H5 Studio has two XLR inputs, weighs less and costs less. The H6 Studio has four XLR inputs and records six tracks. Choose the H5 if you usually record one or two people.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "H5 Studio recorder",
        price: 500_000,
        includes: [
          "Zoom H5 Studio recorder",
          "XYH-5s XY stereo mic capsule",
          "microSD card and AA batteries sold separately",
        ],
      },
    ],
  },
  {
    slug: "zoom-h4-essential",
    brand: "Zoom",
    name: "Zoom H4 Essential",
    category: "Audio",
    tagline: "Pro recording. No level stress.",
    headline:
      "A light, affordable handheld recorder with two locking XLR inputs, a built-in XY stereo mic and 32-bit float recording, so you get clean audio without fiddling with levels.",
    summary:
      "The H4 Essential records four tracks at once: two mics through its XLR/TRS inputs plus the built-in XY stereo mic. 32-bit float recording means a sudden shout won't distort and a quiet voice can be raised later, so you never lose a take to bad levels. It runs on just two AA batteries, weighs 243 g, doubles as a USB-C audio interface, and is the most affordable way into Zoom's XLR recorders.",
    image: "/products/zoom-h4-essential/main.png",
    hero: "/products/zoom-h4-essential/hero.jpg",
    gallery: [
      { src: "/products/zoom-h4-essential/main.png", alt: "Zoom H4 Essential handheld recorder with XY stereo mics" },
      { src: "/products/zoom-h4-essential/angle.jpg", alt: "Zoom H4 Essential at an angle, showing the colour screen and XLR inputs" },
      { src: "/products/zoom-h4-essential/side.jpg", alt: "Side of the H4 Essential with USB-C port and microSD slot" },
      { src: "/products/zoom-h4-essential/podcast.jpg", alt: "Two people recording a podcast with the H4 Essential" },
    ],
    stats: [
      { value: "4", label: "Tracks at once" },
      { value: "2", label: "XLR/TRS inputs" },
      { value: "32-bit", label: "Float recording" },
      { value: "243 g", label: "With batteries" },
    ],
    highlights: [
      {
        title: "Two XLR inputs plus a stereo mic",
        body: "Plug two lavaliers, handheld or shotgun mics into the locking XLR/TRS inputs, with +48 V phantom power for condenser mics. The built-in XY mics capture the room at the same time, up to 130 dB SPL, loud enough for a live band.",
        image: "/products/zoom-h4-essential/inputs.jpg",
      },
      {
        title: "32-bit float: no more ruined takes",
        body: "There's no gain to set. Dual converters capture everything from a whisper to a drum hit without clipping, and you adjust the level later in editing. New firmware adds AI noise reduction to remove steady background hum and MP3 recording for smaller files.",
        image: "/products/zoom-h4-essential/loud.jpg",
      },
      {
        title: "Record and stream at the same time",
        body: "Connect over USB-C to a Mac, PC, iPhone or Android and use it as a 4-in/2-out audio interface for live streams, podcasts and church broadcasts. It can save a backup to the microSD card while you stream.",
        image: "/products/zoom-h4-essential/usb.jpg",
      },
      {
        title: "Runs on two AA batteries",
        body: "Two AA batteries give about 9 hours of stereo recording with alkalines, or around 19 hours with lithium. You can also power it from USB. At 243 g it fits in a jacket pocket or camera bag.",
        image: "/products/zoom-h4-essential/battery.jpg",
      },
    ],
    idealFor: [
      { title: "Podcasts and interviews", body: "Two XLR mics for two voices, or the XY mic for on-the-go interviews." },
      { title: "Musicians and churches", body: "Record rehearsals, live shows and services in stereo." },
      { title: "Video creators", body: "Clean dialogue alongside your camera, with no clipping." },
      { title: "Students and beginners", body: "Pro-quality recording without having to learn about gain." },
    ],
    notFor:
      "If you need to record at 192 kHz or want a swappable mic capsule, step up to the Zoom H5 Studio. If you record three or four people with XLR mics, look at the Zoom H6 Studio.",
    specs: [
      { label: "Tracks", value: "Up to 4 tracks at once" },
      { label: "Inputs", value: "2 locking XLR/TRS combo inputs with +48 V phantom power, 3.5 mm mic/line input, built-in XY mic" },
      { label: "Built-in mic", value: "90° XY stereo, max SPL 130 dB" },
      { label: "Recording", value: "32-bit float WAV at 44.1/48/96 kHz; MP3 (firmware update)" },
      { label: "Preamps", value: "No gain to set; EIN −120 dBu" },
      { label: "Extra features", value: "AI noise reduction, built-in mixer, audible menus for blind users" },
      { label: "USB", value: "USB-C audio interface, 4-in/2-out, Mac, Windows, iOS and Android" },
      { label: "Outputs", value: "3.5 mm headphone/line out, built-in speaker" },
      { label: "Screen", value: "2.0\" colour LCD" },
      { label: "Storage", value: "microSD card up to 1 TB (sold separately)" },
      { label: "Power", value: "2 AA batteries, USB bus power or AD-17 adapter" },
      { label: "Battery life", value: "About 9 h (alkaline) or 19 h (lithium) recording 2 tracks*" },
      { label: "Size and weight", value: "66.9 × 156.1 × 38 mm, 243 g with batteries" },
      { label: "Add-ons", value: "Optional BTA-1 Bluetooth adapter for app control and wireless timecode; TCA-1 timecode adapter" },
    ],
    specsNote: "*Battery life measured by Zoom with phantom power off. Recording four tracks shortens it considerably (about 2.5 hours on alkaline AAs, 8 hours on lithium), so use lithium batteries or USB power for long sessions.",
    faqs: [
      {
        q: "What does 32-bit float mean for me?",
        a: "You don't have to set levels at all. Loud sounds won't distort and quiet sounds can be turned up in editing without hiss, so you can just press record and focus on your content.",
      },
      {
        q: "Can I use it with my camera?",
        a: "Yes. Run a cable from the 3.5 mm output to your camera's mic input to send it a reference track, and record the clean audio in the H4 Essential at the same time. Sync them in editing.",
      },
      {
        q: "Does it work as a USB interface?",
        a: "Yes. Plug it into a computer, iPhone or Android phone with USB-C and it works as an audio interface for recording or live streaming.",
      },
      {
        q: "What do I need to buy with it?",
        a: "A microSD card and two AA batteries (lithium lasts longest), or a USB power source. Add XLR mics and cables if you want to use the two inputs.",
      },
      {
        q: "H4 Essential or H5 Studio?",
        a: "Both have two XLR inputs and 32-bit float. The H4 Essential is lighter, cheaper and needs no gain setting. The H5 Studio adds gain knobs, higher sample rates, a swappable mic capsule and longer battery life on four AAs.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "H4 Essential recorder",
        price: 350_000,
        includes: [
          "Zoom H4 Essential recorder with built-in XY mics",
          "microSD card and AA batteries sold separately",
        ],
      },
    ],
  },
  {
    slug: "zoom-h2-essential",
    brand: "Zoom",
    name: "Zoom H2 Essential",
    category: "Audio",
    tagline: "Three mics. Sound from every angle.",
    headline:
      "A pocket recorder with three built-in mics that capture front, back, or all around, plus 32-bit float recording so you never have to worry about levels.",
    summary:
      "The H2 Essential packs front and rear cardioid mics and a side-facing mic into a 170 g body. Choose 90° or 120° stereo or focused mono, and record from the front, the back or both at once: one recorder for music, interviews, rehearsals and ambience. 32-bit float means loud moments won't distort, it doubles as a USB-C mic for your phone or computer, and two AA batteries give about 11 hours of recording.",
    image: "/products/zoom-h2-essential/main.png",
    hero: "/products/zoom-h2-essential/hero.jpg",
    gallery: [
      { src: "/products/zoom-h2-essential/main.png", alt: "Zoom H2 Essential handheld recorder, front view" },
      { src: "/products/zoom-h2-essential/angle.jpg", alt: "Zoom H2 Essential at an angle, showing the colour screen and controls" },
      { src: "/products/zoom-h2-essential/mics.jpg", alt: "Inside the H2 Essential: a side-facing mic plus front and rear cardioid mics" },
      { src: "/products/zoom-h2-essential/podcast.jpg", alt: "Two people recording a podcast with the H2 Essential on a table" },
    ],
    stats: [
      { value: "3", label: "Built-in mics" },
      { value: "32-bit", label: "Float recording" },
      { value: "11 h", label: "On 2 AA batteries*" },
      { value: "170 g", label: "With batteries" },
    ],
    highlights: [
      {
        title: "Three mics, many ways to record",
        body: "Front and rear cardioid mics plus a side mic let you pick 90° or 120° stereo, or mono for tighter pickup with less background noise. Record from the front, the back or both at once, so you can capture a solo singer, a full band, or two people sitting across a table.",
        image: "/products/zoom-h2-essential/patterns.jpg",
      },
      {
        title: "32-bit float: no ruined takes",
        body: "Record up to 96 kHz in 32-bit float and you don't have to set gain before you press record. Shouts, horns and sudden laughter stay clean, and quiet voices can be raised in editing. Newer firmware adds AI noise reduction, MP3 recording and mid-side recording.",
        image: "/products/zoom-h2-essential/loud.jpg",
      },
      {
        title: "A USB mic for your phone and laptop",
        body: "Plug it into an iPhone, Android, Mac or PC over USB-C and it works as a 32-bit float USB microphone, while saving a backup to the microSD card. Record pro audio straight into your phone's video for video podcasts, Reels and live streams.",
        image: "/products/zoom-h2-essential/usb.jpg",
      },
      {
        title: "Small, light and runs all day",
        body: "At 170 g with batteries, it fits in a shirt pocket. Two AA batteries give about 11 hours of stereo recording on alkalines, or around 20 hours on lithium, and you can also power it from USB or a power bank.",
        image: "/products/zoom-h2-essential/battery.jpg",
      },
    ],
    idealFor: [
      { title: "Musicians and choirs", body: "Capture rehearsals and performances in wide, natural stereo." },
      { title: "Podcasts and interviews", body: "Record two people facing each other on front and rear mics." },
      { title: "Phone creators", body: "A clean USB mic that records straight into your phone video." },
      { title: "Churches and lectures", body: "Place it once and record the whole room for hours." },
    ],
    notFor:
      "The H2 Essential has no XLR inputs. If you want to plug in professional lavalier, handheld or shotgun mics, choose the Zoom H4 Essential (two XLR inputs) or the H5 Studio.",
    specs: [
      { label: "Built-in mics", value: "Front and rear cardioid mics plus a side bidirectional mic (mid-side)" },
      { label: "Pickup patterns", value: "90° stereo, 120° stereo or mono; front, rear or front + rear" },
      { label: "Max SPL", value: "120 dB SPL (front/rear), 122 dB SPL (side)" },
      { label: "Recording", value: "32-bit float WAV at 44.1/48/96 kHz; MP3 and MS Raw (firmware update)" },
      { label: "Extra input", value: "3.5 mm mic/line input with plug-in power, for a lav or external mic" },
      { label: "Outputs", value: "3.5 mm headphone/line out, built-in speaker" },
      { label: "USB", value: "USB-C mic/audio interface, 4-in/2-out, Mac, Windows, iOS and Android" },
      { label: "Extra features", value: "AI noise reduction, low-cut filter, pre-record, marker button, audible menus" },
      { label: "Screen", value: "1.3\" colour LCD with waveform display" },
      { label: "Storage", value: "microSD card up to 2 TB (sold separately)" },
      { label: "Power", value: "2 AA batteries, USB bus power, power bank or AD-17 adapter" },
      { label: "Battery life", value: "About 11 h (alkaline) or 20.5 h (lithium), front stereo recording*" },
      { label: "Size and weight", value: "60 × 44 × 97 mm, 170 g with batteries" },
      { label: "Add-ons", value: "Optional BTA-1 Bluetooth adapter, TCA-1 timecode adapter, WSH-2e windscreen" },
    ],
    specsNote: "*Battery life measured by Zoom at 48 kHz with no headphones. Recording front and rear mics together gives about 8 hours on alkalines, and adding an external mic with headphones at 96 kHz drops it to about 4 hours.",
    faqs: [
      {
        q: "What does 32-bit float mean for me?",
        a: "You don't have to set levels before you record. Loud sounds won't distort and quiet sounds can be turned up in editing without hiss, so you can just press record.",
      },
      {
        q: "Can I use it with my phone?",
        a: "Yes. Connect it to an iPhone or Android phone with a USB-C cable and it works as a microphone, so your phone video records clean audio from the H2 Essential.",
      },
      {
        q: "Can I plug in a lavalier mic?",
        a: "Yes, through the 3.5 mm input, which provides plug-in power for lav mics. It has no XLR inputs, so for professional XLR mics choose the H4 Essential.",
      },
      {
        q: "What do I need to buy with it?",
        a: "A microSD card and two AA batteries (lithium lasts longest), or a USB power source. A windscreen helps when recording outdoors.",
      },
      {
        q: "H2 Essential or H4 Essential?",
        a: "The H2 Essential has three built-in mics that record front, back or all around, and it's smaller and cheaper. The H4 Essential adds two XLR inputs for external mics. Choose the H2 if you'll mostly use the built-in mics.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "H2 Essential recorder",
        price: 300_000,
        includes: [
          "Zoom H2 Essential recorder with built-in mics",
          "microSD card and AA batteries sold separately",
        ],
      },
    ],
  },
  {
    slug: "zoom-h1-xlr",
    brand: "Zoom",
    name: "Zoom H1 XLR",
    category: "Audio",
    tagline: "Two XLR inputs in your pocket.",
    headline:
      "The smallest, most affordable way to record two professional mics. Two locking XLR/TRS inputs and 32-bit float recording in a 164 g recorder that runs on AA batteries.",
    summary:
      "The H1 XLR is built for people who already have mics, or plan to get them. Plug in two XLR mics, a stereo feed from a mixer, or a lav or camera mic through the 3.5 mm input, and press record. 32-bit float means there's no gain to set and nothing clips. It mounts on a camera rig, works as a USB-C audio interface for your phone or computer, and runs about 12 hours on two AA batteries.",
    image: "/products/zoom-h1-xlr/main.png",
    hero: "/products/zoom-h1-xlr/hero.jpg",
    gallery: [
      { src: "/products/zoom-h1-xlr/main.png", alt: "Zoom H1 XLR recorder, front view with OLED screen" },
      { src: "/products/zoom-h1-xlr/angle.jpg", alt: "Zoom H1 XLR at an angle, showing the two XLR inputs on top" },
      { src: "/products/zoom-h1-xlr/inputs-close.jpg", alt: "Locking XLR/TRS combo inputs, mic/line switch and 3.5 mm line in" },
      { src: "/products/zoom-h1-xlr/cables.jpg", alt: "Zoom H1 XLR with two TRS cables plugged in" },
    ],
    stats: [
      { value: "2", label: "XLR/TRS inputs" },
      { value: "32-bit", label: "Float recording" },
      { value: "12 h", label: "On 2 AA batteries*" },
      { value: "164 g", label: "With batteries" },
    ],
    highlights: [
      {
        title: "Two XLR inputs, plus a 3.5 mm input",
        body: "Two locking XLR/TRS combo inputs take shotgun, handheld, lavalier and condenser mics, with +48 V phantom power. A 3.5 mm stereo input with plug-in power takes on-camera mics, lavs and phones. Record each input as mono or as a stereo pair.",
        image: "/products/zoom-h1-xlr/inputs.jpg",
      },
      {
        title: "32-bit float: plug in and press record",
        body: "Dual converters and 32-bit float recording up to 96 kHz mean there's no gain to set. Quiet voices and loud engines are both captured clean, and you set the level later in editing. The low-noise preamps (−122 dBu EIN) keep voices clear.",
        image: "/products/zoom-h1-xlr/loud.jpg",
      },
      {
        title: "Record straight from the mixing desk",
        body: "Each input has a mic/line switch and accepts +4 dBu professional line level, so you can take a clean stereo feed from a church, event or band mixer without clipping. No extra adapters or attenuators needed.",
        image: "/products/zoom-h1-xlr/line.jpg",
      },
      {
        title: "Pro audio for your phone videos",
        body: "Connect to an iPhone, Android, Mac or PC over USB-C and the H1 XLR works as a 32-bit float audio interface, while also saving a backup to the microSD card. Record two mics straight into your phone video for video podcasts, interviews and live streams.",
        image: "/products/zoom-h1-xlr/usb.jpg",
      },
    ],
    idealFor: [
      { title: "Two-person podcasts", body: "Two XLR mics, two clean tracks, anywhere you go." },
      { title: "Filmmakers", body: "Mount it on your rig and record shotgun or wireless mics." },
      { title: "Churches and events", body: "Record a clean stereo feed straight from the mixer." },
      { title: "Phone creators", body: "Get two pro mics into your phone video over USB-C." },
    ],
    notFor:
      "The H1 XLR has no built-in microphone, so you'll need your own mics or a mixer feed. If you want a recorder with built-in mics as well as XLR inputs, choose the Zoom H4 Essential. If you only need built-in mics, look at the H1 Essential or H2 Essential.",
    specs: [
      { label: "Inputs", value: "2 locking XLR/TRS combo inputs with +48 V phantom power; 3.5 mm stereo mic/line input with plug-in power" },
      { label: "Built-in mic", value: "None. Use your own mics or a line feed" },
      { label: "Input level", value: "Mic/line switch per input; max +4 dBu (mic), +24 dBu (line)" },
      { label: "Preamps", value: "No gain to set (dual AD converters); EIN −122 dBu" },
      { label: "Recording", value: "32-bit float WAV at 44.1/48/96 kHz, stereo or mono, BWF and iXML" },
      { label: "USB", value: "USB-C audio interface, 2-in/2-out at 44.1/48 kHz, Mac, Windows, iOS and Android" },
      { label: "Outputs", value: "3.5 mm headphone/line out with volume control, built-in speaker" },
      { label: "Extra features", value: "Built-in mixer, voice-guided menus for blind and low-vision users, 1/4\" tripod mount" },
      { label: "Screen", value: "OLED with real-time waveform display" },
      { label: "Storage", value: "microSD card up to 1 TB (sold separately)" },
      { label: "Power", value: "2 AA batteries, USB bus power, power bank or AD-17 adapter" },
      { label: "Battery life", value: "About 12 h (alkaline) or 19 h (lithium) with phantom power off*" },
      { label: "Size and weight", value: "62.1 × 107 × 39.3 mm, 164 g with batteries" },
    ],
    specsNote: "*Battery life measured by Zoom recording both inputs at 48 kHz with no headphones. With phantom power on for a condenser mic, expect about 4 hours on alkaline AAs or 9 hours on lithium.",
    faqs: [
      {
        q: "Does it have a built-in microphone?",
        a: "No. The H1 XLR records from mics or sources you plug in: two XLR/TRS inputs and a 3.5 mm input. If you want built-in mics too, choose the H4 Essential.",
      },
      {
        q: "What does 32-bit float mean for me?",
        a: "You don't have to set levels before recording. Loud sounds won't distort and quiet sounds can be turned up in editing without hiss, so you just press record.",
      },
      {
        q: "Can I use it with my phone?",
        a: "Yes. Connect it to an iPhone or Android phone with a USB-C cable and your phone video records clean audio from your two mics.",
      },
      {
        q: "What do I need to buy with it?",
        a: "Microphones and XLR cables, a microSD card, and two AA batteries (lithium lasts longest) or a USB power source.",
      },
      {
        q: "H1 XLR or H4 Essential?",
        a: "Both have two XLR inputs and 32-bit float. The H1 XLR is smaller and cheaper but has no built-in mic. The H4 Essential adds a built-in XY stereo mic and records four tracks.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "H1 XLR recorder",
        price: 250_000,
        includes: [
          "Zoom H1 XLR recorder",
          "Microphones, microSD card and AA batteries sold separately",
        ],
      },
    ],
  },
  {
    slug: "zoom-h1-essential",
    brand: "Zoom",
    name: "Zoom H1 Essential",
    category: "Audio",
    tagline: "Press record. That's it.",
    headline:
      "Zoom's smallest, simplest recorder. Built-in XY stereo mics and 32-bit float recording in a 92 g body, so you get clean audio with one button and no levels to set.",
    summary:
      "The H1 Essential is the easiest way to record good audio. Its built-in XY stereo mics capture music, voices and ambience, and 32-bit float recording means nothing clips, so you just press record. It slips into a pocket, runs about 10 hours on two AAA batteries, works as a USB-C mic for your phone or computer, and has a 3.5 mm input for a lavalier mic and a 3.5 mm output for your camera.",
    image: "/products/zoom-h1-essential/main.png",
    hero: "/products/zoom-h1-essential/hero.jpg",
    gallery: [
      { src: "/products/zoom-h1-essential/main.png", alt: "Zoom H1 Essential recorder, front view with XY mics and OLED screen" },
      { src: "/products/zoom-h1-essential/angle.jpg", alt: "Zoom H1 Essential at an angle" },
      { src: "/products/zoom-h1-essential/mics.jpg", alt: "Close-up of the H1 Essential's built-in XY stereo mics" },
      { src: "/products/zoom-h1-essential/lavalier.jpg", alt: "Zoom H1 Essential with a lavalier mic plugged into the 3.5 mm input" },
    ],
    stats: [
      { value: "92 g", label: "With batteries" },
      { value: "32-bit", label: "Float recording" },
      { value: "10 h", label: "On 2 AAA batteries*" },
      { value: "120 dB", label: "Max SPL" },
    ],
    highlights: [
      {
        title: "Built-in stereo mics, no levels to set",
        body: "The 90° XY stereo mics handle sound up to 120 dB SPL, about as loud as a revving sports car. 32-bit float recording up to 96 kHz means loud moments won't distort and quiet ones can be raised later, so every take is usable. Newer firmware adds AI noise reduction and MP3 recording.",
        image: "/products/zoom-h1-essential/loud.jpg",
      },
      {
        title: "A practice partner for musicians",
        body: "Record every rehearsal and listen back on the built-in speaker. Overdubbing lets you layer a second part over your first take, and you can slow playback down to learn a tricky passage. Pre-record and auto record make sure you never miss the start.",
        image: "/products/zoom-h1-essential/music.jpg",
      },
      {
        title: "Interviews, podcasts and video",
        body: "Mount it on a tripod for sit-down conversations, or switch to mono for on-the-go interviews. Plug a lavalier into the 3.5 mm input for clear dialogue, and send audio straight to your camera from the 3.5 mm output.",
        image: "/products/zoom-h1-essential/interview.jpg",
      },
      {
        title: "A USB mic for your phone and laptop",
        body: "Connect to an iPhone, Android, Mac or PC over USB-C and the H1 Essential works as a USB microphone, while saving a backup to the microSD card. It's a quick upgrade for Zoom calls, voiceovers and phone videos.",
        image: "/products/zoom-h1-essential/usb.jpg",
      },
    ],
    idealFor: [
      { title: "Musicians", body: "Record rehearsals, ideas and live sets in stereo." },
      { title: "Students and lecturers", body: "Capture classes and talks for hours on AAA batteries." },
      { title: "Beginner creators", body: "Clean audio with one button and nothing to set up." },
      { title: "Video shooters", body: "Feed your camera better sound than its built-in mic." },
    ],
    notFor:
      "The H1 Essential has no XLR inputs. If you want to plug in professional XLR mics, choose the Zoom H1 XLR (no built-in mic) or the H4 Essential (built-in mic plus two XLR inputs). For front and rear mics that record from both sides, look at the H2 Essential.",
    specs: [
      { label: "Built-in mic", value: "90° XY stereo, max SPL 120 dB" },
      { label: "Extra input", value: "3.5 mm stereo mic/line input with 2.5 V plug-in power, for a lav or external mic" },
      { label: "Recording", value: "32-bit float WAV at 44.1/48/96 kHz, stereo or mono, BWF and iXML; MP3 (firmware update)" },
      { label: "USB", value: "USB-C microphone (48 kHz, 24-bit), Mac, Windows, iOS and Android" },
      { label: "Outputs", value: "3.5 mm headphone/line out for a camera, built-in speaker" },
      { label: "Extra features", value: "AI noise reduction, overdubbing, pre-record, auto record, playback speed control, marker button, voice-guided menus" },
      { label: "Screen", value: "128 × 64 OLED" },
      { label: "Storage", value: "microSD card up to 1 TB (sold separately)" },
      { label: "Power", value: "2 AAA batteries, USB bus power or AD-17 adapter" },
      { label: "Battery life", value: "About 10 h (alkaline) or 18 h (lithium)*" },
      { label: "Size and weight", value: "53.9 × 136.6 × 29 mm, 92 g with batteries" },
      { label: "Add-ons", value: "Optional APH-1e accessory pack, WSH-1e windscreen, LMF-2 lavalier mic" },
    ],
    specsNote: "*Battery life measured by Zoom recording stereo at 48 kHz with no headphones. Using headphones or a USB connection will shorten it.",
    faqs: [
      {
        q: "What does 32-bit float mean for me?",
        a: "You don't have to set levels before recording. Loud sounds won't distort and quiet sounds can be turned up in editing without hiss, so you just press record.",
      },
      {
        q: "Can I use it with my phone?",
        a: "Yes. Connect it to an iPhone or Android phone with a USB-C cable and it works as a microphone for your videos, calls and voiceovers.",
      },
      {
        q: "Can I plug in a lavalier mic?",
        a: "Yes, through the 3.5 mm input, which gives plug-in power for lav mics. It has no XLR inputs, so for professional XLR mics choose the H1 XLR or H4 Essential.",
      },
      {
        q: "What do I need to buy with it?",
        a: "A microSD card and two AAA batteries (lithium lasts longest), or a USB power source. A windscreen helps when recording outdoors.",
      },
      {
        q: "H1 Essential or H2 Essential?",
        a: "The H1 Essential is smaller, lighter and cheaper, with front-facing XY stereo mics. The H2 Essential adds rear and side mics so it can record from the front, back or all around. Choose the H1 if you mostly record what's in front of you.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "H1 Essential recorder",
        price: 180_000,
        includes: [
          "Zoom H1 Essential recorder with built-in XY mics",
          "microSD card and AAA batteries sold separately",
        ],
      },
    ],
  },
  {
    slug: "zoom-f6",
    brand: "Zoom",
    name: "Zoom F6",
    category: "Audio",
    tagline: "Six inputs. Zero clipped takes.",
    headline:
      "A compact professional field recorder with six XLR inputs, 32-bit float recording and built-in timecode, made for film sets, documentaries and events where you only get one take.",
    summary:
      "The F6 was the first field recorder with 32-bit float and dual AD converters, so a sudden shout or slammed door never distorts and a soft voice can be raised later without hiss. It records up to 14 tracks from six locking XLR inputs with pro preamps and phantom power, keeps cameras in sync with an accurate timecode generator, and weighs just 520 g, small enough for a sound bag or to sit under your camera.",
    image: "/products/zoom-f6/main.png",
    hero: "/products/zoom-f6/hero.jpg",
    gallery: [
      { src: "/products/zoom-f6/main.png", alt: "Zoom F6 multitrack field recorder at an angle" },
      { src: "/products/zoom-f6/front.jpg", alt: "Front of the Zoom F6 with colour screen and six channel knobs" },
      { src: "/products/zoom-f6/inputs.jpg", alt: "Side of the F6 with locking XLR inputs, timecode and headphone jacks" },
      { src: "/products/zoom-f6/battery.jpg", alt: "Zoom F6 with its AA battery holder open" },
    ],
    stats: [
      { value: "6", label: "Locking XLR inputs" },
      { value: "14", label: "Tracks at once" },
      { value: "32-bit", label: "Float recording" },
      { value: "520 g", label: "Without batteries" },
    ],
    highlights: [
      {
        title: "32-bit float: never lose a take to bad levels",
        body: "Two AD converters per input capture everything from a whisper to a gunshot, and 32-bit float files store it all without clipping. On a film set or at a live event there's no second chance, and with the F6 you don't need one: fix the level in editing.",
        image: "/products/zoom-f6/crew.jpg",
      },
      {
        title: "Six pro preamps in a body that fits a sound bag",
        body: "Six locking Neutrik XLR inputs with mic or line level, +24/+48 V phantom power on every channel and very low-noise preamps (EIN −127 dBu). Plug in boom mics, wireless lav receivers and a feed from the mixer, all in a 520 g recorder you can work with one hand.",
        image: "/products/zoom-f6/bag.jpg",
      },
      {
        title: "Timecode that keeps your cameras in sync",
        body: "A built-in timecode generator accurate to ±0.2 ppm keeps running even when the F6 is switched off. Send timecode to your camera or jam-sync from another source, so audio and video line up automatically in editing. Mount it under your camera with the included adapter.",
        image: "/products/zoom-f6/camera.jpg",
      },
      {
        title: "Real faders and auto-mixing when you need them",
        body: "Pair it with the optional Zoom FRC-8 F-Control for eight real faders on a busy set, or let Zoom AutoMix balance several talking mics for you. Look-ahead limiters protect your 24-bit files, and an optional BTA-1 adds control from an iPhone or iPad.",
        image: "/products/zoom-f6/faders.jpg",
      },
    ],
    idealFor: [
      { title: "Film and TV sound", body: "Boom and wireless lavs on separate tracks, synced by timecode." },
      { title: "Documentaries", body: "Unpredictable moments recorded clean with no level riding." },
      { title: "Events and churches", body: "Six mics or a mixer feed captured on separate tracks." },
      { title: "Podcasts and panels", body: "Up to six guests, each on their own track, with AutoMix." },
    ],
    notFor:
      "If you need eight inputs and dual SD card slots for big productions, choose the Zoom F8n Pro. If you only record two to four people and want built-in mics, the Zoom H5 Studio or H6 Studio costs less.",
    specs: [
      { label: "Tracks", value: "Up to 14 tracks (6 inputs in 32-bit float and 24-bit, plus a stereo mix)" },
      { label: "Inputs", value: "6 locking Neutrik XLR inputs, mic or line level" },
      { label: "Phantom power", value: "+24 V or +48 V on each channel" },
      { label: "Preamps", value: "Mic gain +12 to +75 dB, EIN −127 dBu, line input up to +24 dBu" },
      { label: "Recording", value: "32-bit float or 16/24-bit WAV, 44.1–192 kHz, BWF/iXML; MP3" },
      { label: "Timecode", value: "Built-in generator, ±0.2 ppm, in/out on 3.5 mm jack, jam sync" },
      { label: "Mixing", value: "Zoom AutoMix, look-ahead limiters, optional FRC-8 fader controller" },
      { label: "Outputs", value: "3.5 mm line out, 3.5 mm headphone out" },
      { label: "USB", value: "6-in/4-out audio interface up to 96 kHz in 32-bit float; iOS in stereo mode" },
      { label: "Screen", value: "1.54\" colour LCD (240 × 240), monochrome mode for sunlight" },
      { label: "Storage", value: "SD, SDHC or SDXC card up to 1 TB (sold separately)" },
      { label: "Power", value: "4 AA batteries, Sony L-series battery, USB 5 V or AD-17 adapter" },
      { label: "Battery life", value: "Up to 16.5 h on lithium AAs recording 2 channels*" },
      { label: "Size and weight", value: "100 × 119.8 × 62.9 mm, 520 g" },
    ],
    specsNote: "*Battery life measured by Zoom at 48 kHz/16-bit on two channels. Recording all six channels with +48 V phantom power drains AAs fast (about 30 minutes on alkaline, 3 hours on lithium), so use a Sony L-series battery or USB power for long shoots.",
    faqs: [
      {
        q: "What does 32-bit float mean for me?",
        a: "You don't have to set gain before you record. Loud sounds won't distort and quiet sounds can be turned up in editing without hiss, so a take is never ruined by bad levels.",
      },
      {
        q: "Can it sync with my camera?",
        a: "Yes. The built-in timecode generator sends timecode to cameras that accept it, or jam-syncs from another source, so your audio and video line up automatically in editing. You can also send a reference track to the camera from the line out.",
      },
      {
        q: "How do I power it on a long shoot?",
        a: "Use a Sony L-series camera battery (NP-F style) on the back, or power it from USB or a power bank. Four AA batteries work for short sessions; lithium AAs last much longer than alkalines.",
      },
      {
        q: "Can I use it as a USB audio interface?",
        a: "Yes. Connect it to a Mac or PC and it works as a 6-in/4-out interface up to 96 kHz, ideal for podcasts and live streams. It can also record to the SD card at the same time.",
      },
      {
        q: "F6 or H6 Studio?",
        a: "The H6 Studio has four XLR inputs and a built-in XY mic, and suits podcasts and music. The F6 has six XLR inputs, timecode and a tougher build for film sets and professional location sound.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "F6 field recorder",
        price: 750_000,
        includes: [
          "Zoom F6 field recorder",
          "Camera mount adapter",
          "SD card, batteries and FRC-8 mixer sold separately",
        ],
      },
    ],
  },
  {
    slug: "zoom-f8n-pro",
    brand: "Zoom",
    name: "Zoom F8n Pro",
    category: "Audio",
    tagline: "Eight inputs. Every take safe.",
    headline:
      "A professional eight-input field recorder and mixer with 32-bit float recording, rock-solid timecode and dual SD card backup, built for film sets, TV crews and big live events.",
    summary:
      "The F8n Pro records ten tracks from eight locking XLR/TRS inputs in 32-bit float, so a sudden shout never distorts and a quiet voice can be raised later without hiss. A highly accurate timecode generator keeps every camera in sync, two SD card slots record a backup of every take, and three separate outputs feed your cameras, PA and headphones at the same time.",
    image: "/products/zoom-f8n-pro/main.png",
    hero: "/products/zoom-f8n-pro/hero.jpg",
    gallery: [
      { src: "/products/zoom-f8n-pro/main.png", alt: "Zoom F8n Pro multitrack field recorder at an angle" },
      { src: "/products/zoom-f8n-pro/front.jpg", alt: "Front of the F8n Pro with colour screen, meters and eight channel knobs" },
      { src: "/products/zoom-f8n-pro/inputs.jpg", alt: "Side of the F8n Pro with locking XLR/TRS inputs and dual SD card slots" },
      { src: "/products/zoom-f8n-pro/battery.jpg", alt: "Underside of the F8n Pro with its eight-AA battery compartment open" },
    ],
    stats: [
      { value: "8", label: "Locking XLR/TRS inputs" },
      { value: "10", label: "Tracks at once" },
      { value: "32-bit", label: "Float recording" },
      { value: "2", label: "SD slots for backup" },
    ],
    highlights: [
      {
        title: "32-bit float: no clipped takes, ever",
        body: "Two AD converters on every input capture everything from a whisper to an engine revving, and 32-bit float files store it all without distortion. You don't need to ride levels during a take: fix the volume in editing. On a set where every take costs money, that peace of mind pays for itself.",
        image: "/products/zoom-f8n-pro/float.jpg",
      },
      {
        title: "Eight pro preamps for the biggest jobs",
        body: "Eight locking Neutrik XLR/TRS inputs with mic or line level, +24/+48 V phantom power and very low-noise preamps (EIN −127 dBu). Run a boom, six wireless lavs and a feed from the venue mixer all on separate tracks, from one recorder that fits a sound bag.",
        image: "/products/zoom-f8n-pro/bag.jpg",
      },
      {
        title: "Timecode and dual SD for professional workflows",
        body: "A timecode generator accurate to 0.2 ppm keeps running even when the F8n Pro is switched off, with BNC in and out for cameras and jam sync. Two SD card slots record a backup of every take at once, or split your files across both, so a failed card never costs you the day.",
        image: "/products/zoom-f8n-pro/timecode.jpg",
      },
      {
        title: "Three outputs plus an 8-in/4-out USB interface",
        body: "Send separate mixes to cameras on the balanced TA3 main out and the 3.5 mm sub out while you monitor on a 1/4\" headphone jack. Connect to a computer and it becomes an 8-in/4-out interface in 32-bit float for live streams and podcasts, while still recording to SD.",
        image: "/products/zoom-f8n-pro/interface.jpg",
      },
    ],
    idealFor: [
      { title: "Film and TV crews", body: "Boom plus several wireless lavs, each on its own track, synced by timecode." },
      { title: "Documentaries and reality TV", body: "Many people talking at once, recorded clean with backup on two cards." },
      { title: "Churches and live events", body: "Eight mics or a desk feed recorded for later mixing and streaming." },
      { title: "Studios and podcasts", body: "An eight-input USB interface that also records on its own." },
    ],
    notFor:
      "If you never need more than six inputs and want a smaller, lighter recorder, the Zoom F6 (₦750,000) does 32-bit float and timecode for much less. For two to four mics with built-in stereo mics, look at the Zoom H6 Studio.",
    specs: [
      { label: "Tracks", value: "Up to 10 tracks (8 inputs plus a stereo mix)" },
      { label: "Inputs", value: "8 locking Neutrik XLR/TRS combo inputs, mic or line level; Zoom mic capsule input" },
      { label: "Phantom power", value: "+24 V or +48 V" },
      { label: "Preamps", value: "Mic gain +10 to +75 dB, EIN −127 dBu, dual AD converters" },
      { label: "Recording", value: "32-bit float or 16/24-bit WAV, 44.1–192 kHz, BWF/iXML" },
      { label: "Timecode", value: "Built-in generator, 0.2 ppm accuracy, BNC in/out, jam sync" },
      { label: "Mixing", value: "Zoom AutoMix, high-pass filter, phase invert, mid-side decoding, input/output delays, 6 s pre-record" },
      { label: "Outputs", value: "Balanced TA3 main out 1/2, 3.5 mm sub out, 1/4\" headphone out" },
      { label: "USB", value: "8-in/4-out audio interface up to 96 kHz in 32-bit float" },
      { label: "Screen", value: "2.4\" colour LCD with monochrome mode for sunlight" },
      { label: "Storage", value: "2 SD/SDHC/SDXC slots up to 1 TB each, for backup or split recording (cards sold separately)" },
      { label: "Control", value: "F8 Control app for iOS/Android over Bluetooth; optional FRC-8 fader controller" },
      { label: "Power", value: "8 AA batteries, external 9–18 V DC (4-pin Hirose) or the included AD-19 adapter" },
      { label: "Battery life", value: "About 7 h on alkaline AAs, 13.5 h on lithium AAs*" },
      { label: "Size and weight", value: "178 × 140 × 54 mm, 1.2 kg with batteries" },
    ],
    specsNote: "*Battery life measured by Zoom recording two channels at 48 kHz with outputs, timecode and phantom power off. Recording all eight channels at 192 kHz with +48 V phantom power lasts about 30 minutes on alkaline AAs and 2 hours on lithium, so use an external battery on the Hirose input for long shoots.",
    faqs: [
      {
        q: "What does 32-bit float mean for me?",
        a: "You don't have to set gain perfectly before you record. Loud sounds won't distort and quiet sounds can be turned up in editing without hiss, so a take is never ruined by bad levels.",
      },
      {
        q: "Can it sync with my cameras?",
        a: "Yes. The built-in timecode generator sends timecode to cameras through the BNC output, or jam-syncs from another source, so audio and video line up automatically in editing. You can also feed a scratch mix to each camera from the main and sub outputs.",
      },
      {
        q: "How do I power it on a long shoot?",
        a: "Plug an external battery into the 4-pin Hirose DC input (9–18 V), which is standard on professional sets. Eight AA batteries are fine for lighter sessions, and the included AD-19 adapter powers it from the wall.",
      },
      {
        q: "Can I use it as a USB audio interface?",
        a: "Yes. Connect it to a Mac or PC and it works as an 8-in/4-out interface up to 96 kHz in 32-bit float, ideal for live streams, church services and podcasts. It can record to SD at the same time as a backup.",
      },
      {
        q: "F8n Pro or F6?",
        a: "The F6 has six inputs, one SD slot and weighs 520 g, so it suits smaller crews. The F8n Pro has eight inputs, dual SD backup, BNC timecode and a balanced TA3 main out for bigger productions and events.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "F8n Pro field recorder",
        price: 1_400_000,
        includes: [
          "Zoom F8n Pro field recorder",
          "AD-19 AC adapter",
          "SD cards, batteries and FRC-8 controller sold separately",
        ],
      },
    ],
  },
  {
    slug: "rode-wireless-go-3",
    brand: "Rode",
    name: "Rode Wireless GO (Gen 3)",
    category: "Audio",
    tagline: "Clip on. Hit record. Never lose a take.",
    headline:
      "The world's most popular compact wireless mic, now with 32-bit float backup recording inside each transmitter, so two people sound clear on camera, phone or computer, every time.",
    summary:
      "Wireless GO (Gen 3) gives you two clip-on transmitters and one receiver that plugs into your camera, phone or laptop. Each transmitter also records its own 32-bit float backup, so if the signal drops or someone shouts, you still have a clean copy. GainAssist sets your levels for you, the range reaches up to 260 m, and each unit runs up to 7 hours on a charge.",
    image: "/products/rode-wireless-go-3/main.png",
    hero: "/products/rode-wireless-go-3/hero.jpg",
    gallery: [
      { src: "/products/rode-wireless-go-3/main.png", alt: "Rode Wireless GO Gen 3 receiver and two transmitters in black" },
      { src: "/products/rode-wireless-go-3/trio.jpg", alt: "Wireless GO Gen 3 receiver with its screen and two transmitters" },
      { src: "/products/rode-wireless-go-3/white.jpg", alt: "Rode Wireless GO Gen 3 in white" },
      { src: "/products/rode-wireless-go-3/pocket.jpg", alt: "Clipping a Wireless GO transmitter onto clothing" },
    ],
    stats: [
      { value: "2", label: "Transmitters, 1 receiver" },
      { value: "32-bit", label: "Float backup recording" },
      { value: "260 m", label: "Range, line of sight" },
      { value: "7 h", label: "Battery per charge" },
    ],
    highlights: [
      {
        title: "A backup recording in every transmitter",
        body: "Each transmitter records its own 32-bit float copy of the audio while it sends to the receiver. If the wireless signal drops, a laugh clips or a voice is too soft, open the backup file in editing and fix it. For paid jobs, interviews and once-only moments, this is the feature that saves you.",
        image: "/products/rode-wireless-go-3/float.jpg",
      },
      {
        title: "Clear, stable sound for two people",
        body: "Two transmitters send to one receiver over Rode's Series IV 2.4 GHz link with 128-bit encryption, up to 260 m in open space. Record both voices mixed together, or on separate left and right channels for editing. The built-in mics use the same capsules and preamps as the Wireless PRO.",
        image: "/products/rode-wireless-go-3/creator.jpg",
      },
      {
        title: "Works with cameras, phones and computers",
        body: "The receiver has a 3.5 mm output for cameras and a USB-C output for Android phones, iPhones and computers, where it works as a USB microphone. With Direct Connect in the RØDE Capture app, you can even pair a transmitter straight to an iPhone over Bluetooth, with no receiver at all.",
        image: "/products/rode-wireless-go-3/phone.jpg",
      },
      {
        title: "GainAssist sets your levels for you",
        body: "GainAssist balances loud and soft speech automatically, and a safety channel records a second, quieter copy when you go straight into a camera. Add headphone monitoring, locking 3.5 mm lav inputs and setup through the free RØDE Central app, and it handles gym shoots, events and street interviews alike.",
        image: "/products/rode-wireless-go-3/gain.jpg",
      },
    ],
    idealFor: [
      { title: "Content creators", body: "YouTube, TikTok and Reels with clear voice from a phone or camera." },
      { title: "Interviews and podcasts", body: "Two people on their own channels, with backup recording in each mic." },
      { title: "Churches and events", body: "Clip-on mics for speakers, recorded straight into a camera or laptop." },
      { title: "Weddings and vlogs", body: "Small, light and quick to set up when there's no second chance." },
    ],
    notFor:
      "If you shoot professional film or broadcast work and need timecode, longer range and premium lavalier mics in a charging case, choose the Rode Wireless PRO (₦520,000).",
    specs: [
      { label: "System", value: "Dual-channel: 2 transmitters and 1 receiver" },
      { label: "Transmission", value: "Series IV 2.4 GHz digital, 128-bit encryption, up to 260 m line of sight" },
      { label: "Backup recording", value: "32-bit float on-board recording in each transmitter" },
      { label: "Built-in mics", value: "Omnidirectional pressure capsule, 20 Hz–20 kHz" },
      { label: "Max SPL", value: "123.5 dB SPL" },
      { label: "Noise and SNR", value: "22 dBA equivalent noise, 72 dB signal-to-noise" },
      { label: "Inputs", value: "3.5 mm locking TRS on each transmitter for an external lavalier" },
      { label: "Outputs", value: "3.5 mm TRRS analog out and USB-C digital out on the receiver; headphone monitoring" },
      { label: "Features", value: "GainAssist, output gain control, safety channel, camera presets, plug-in power detect" },
      { label: "Phone and computer", value: "USB-C for iOS 14+, Android 11+, macOS 11+, Windows 10+; Direct Connect to iPhone via RØDE Capture" },
      { label: "Battery", value: "Built-in rechargeable, up to 7 hours, USB-C charging" },
      { label: "Size and weight", value: "Each unit 46.5 × 44 × 20 mm; transmitter 35 g, receiver 36 g" },
    ],
    specsNote: "Battery life is Rode's figure and depends on settings. Using backup recording and the screen at full brightness uses more power, so charge between sessions or add a power bank for long days.",
    faqs: [
      {
        q: "Will it work with my phone?",
        a: "Yes. Plug the receiver into an iPhone or Android phone with USB-C, using the cable or adaptor in the box. Older iPhones with a Lightning port need a Lightning adaptor, sold separately. You can also pair a transmitter straight to an iPhone with Direct Connect in the RØDE Capture app.",
      },
      {
        q: "Will it work with my camera?",
        a: "Yes. Connect the receiver to your camera's mic input with the included 3.5 mm cable, and choose your camera's preset in RØDE Central for the best levels.",
      },
      {
        q: "What is the backup recording for?",
        a: "Each transmitter records its own 32-bit float copy of the audio. If the wireless signal drops or the levels are wrong, you can transfer the backup through RØDE Central and use it instead, so a take is never lost.",
      },
      {
        q: "Can I use a lavalier mic?",
        a: "Yes. Each transmitter has a locking 3.5 mm input, so you can plug in a lavalier such as the Rode Lavalier GO for a more hidden look on camera.",
      },
      {
        q: "Wireless GO (Gen 3) or Wireless PRO?",
        a: "The GO 3 suits creators, interviews and events. The Wireless PRO adds timecode, two Lavalier II mics and a charging case for professional film and TV work.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "Wireless GO (Gen 3) kit",
        price: 320_000,
        includes: [
          "2 Wireless GO transmitters with built-in mics",
          "1 Wireless GO receiver",
          "3.5 mm TRS cable for cameras",
          "USB-C cable and USB-C adaptor",
          "Furry windshields and carry pouch",
        ],
      },
    ],
  },
  {
    slug: "rode-wireless-pro",
    brand: "Rode",
    name: "Rode Wireless PRO",
    category: "Audio",
    tagline: "Film-set sound. Timecode built in.",
    headline:
      "Rode's most advanced compact wireless mic, with timecode, 32 GB of 32-bit float backup in every transmitter, two Lavalier II mics and a charging case, built for professional film, TV and events.",
    summary:
      "Wireless PRO gives you two transmitters and one receiver that go straight onto your camera, phone or computer. Each transmitter stores over 40 hours of 32-bit float backup audio, timecode keeps sound and picture in sync, and two premium Lavalier II mics are in the box for a clean, hidden look. The Charge Case+ tops everything up twice on the go, so you're ready for a full shoot day.",
    image: "/products/rode-wireless-pro/main.png",
    hero: "/products/rode-wireless-pro/hero.jpg",
    gallery: [
      { src: "/products/rode-wireless-pro/main.png", alt: "Rode Wireless PRO receiver and two transmitters" },
      { src: "/products/rode-wireless-pro/kit.jpg", alt: "Everything in the Wireless PRO kit: transmitters, receiver, Lavalier II mics, charge case and accessories" },
      { src: "/products/rode-wireless-pro/case.jpg", alt: "Wireless PRO units charging in the Charge Case+" },
      { src: "/products/rode-wireless-pro/lav.jpg", alt: "Plugging a Lavalier II mic into a Wireless PRO transmitter" },
    ],
    stats: [
      { value: "32 GB", label: "Backup in each transmitter" },
      { value: "40+ h", label: "On-board recording time" },
      { value: "Timecode", label: "Built into every unit" },
      { value: "2", label: "Lavalier II mics included" },
    ],
    highlights: [
      {
        title: "Over 40 hours of backup in every transmitter",
        body: "Each transmitter records its own 32-bit float copy of the audio to 32 GB of internal memory, enough for more than 40 hours. If the signal drops, someone shouts or the levels were wrong, the clean backup is waiting for you in editing. On paid jobs and once-only moments, you never lose a take.",
        image: "/products/rode-wireless-pro/float.jpg",
      },
      {
        title: "Timecode for perfect sync in editing",
        body: "Every unit carries timecode, so your audio and video line up automatically in Premiere Pro, DaVinci Resolve or Final Cut, even across several cameras. No clapping, no lining up waveforms by hand and no expensive external timecode boxes. It's the feature that makes Wireless PRO ready for film and TV crews.",
        image: "/products/rode-wireless-pro/timecode.jpg",
      },
      {
        title: "Two Lavalier II mics and a charging case in the box",
        body: "Rode's premium Lavalier II mics give a broadcast-quality voice and hide neatly on clothing, with locking 3.5 mm plugs that won't pull out. The Charge Case+ holds both transmitters and the receiver, charges them twice over on the go and packs into your bag with all the accessories.",
        image: "/products/rode-wireless-pro/charge.jpg",
      },
      {
        title: "Works with cameras, phones and computers",
        body: "The receiver has a 3.5 mm output for cameras and USB-C for iPhones, Android phones and computers. With Direct Connect in the RØDE Capture app, a transmitter can pair straight to an iPhone. GainAssist, a safety channel and up to 260 m range handle the rest, all set up in the free RØDE Central app.",
        image: "/products/rode-wireless-pro/phone.jpg",
      },
    ],
    idealFor: [
      { title: "Film and TV crews", body: "Timecode, backup recording and hidden lavs for professional sets." },
      { title: "Documentaries and interviews", body: "Two people on separate channels, with 40+ hours of backup." },
      { title: "Weddings and events", body: "A full day's shoot with a charging case and no lost moments." },
      { title: "Serious content creators", body: "Pro sound on camera or phone, with lavs ready in the box." },
    ],
    notFor:
      "If you don't need timecode, the Lavalier II mics or the charging case, the Rode Wireless GO (Gen 3) (₦320,000) gives you the same capsules and 32-bit float backup for much less.",
    specs: [
      { label: "System", value: "Dual-channel: 2 transmitters and 1 receiver" },
      { label: "Transmission", value: "Series IV 2.4 GHz digital, 128-bit encryption, up to 260 m line of sight" },
      { label: "Backup recording", value: "32-bit float on-board recording, 32 GB per transmitter (over 40 hours)" },
      { label: "Timecode", value: "Built-in timecode on transmitters and receiver" },
      { label: "Built-in mics", value: "Omnidirectional pressure capsule, 20 Hz–20 kHz" },
      { label: "Max SPL", value: "123.5 dB SPL" },
      { label: "Noise and SNR", value: "22 dBA equivalent noise, 72 dB signal-to-noise" },
      { label: "Inputs", value: "3.5 mm locking TRS on each transmitter; 2 Rode Lavalier II mics included" },
      { label: "Outputs", value: "3.5 mm TRRS analog out and USB-C digital out on the receiver; headphone monitoring" },
      { label: "Features", value: "GainAssist, output gain control, safety channel, plug-in power detect" },
      { label: "Phone and computer", value: "USB-C for iOS 14+, Android 11+, macOS 10.15+, Windows 10+; Direct Connect to iPhone via RØDE Capture" },
      { label: "Battery", value: "Up to 7 hours per unit; Charge Case+ (4200 mAh) gives 2 full recharges" },
      { label: "Size and weight", value: "Each unit 46.5 × 44 × 20 mm; transmitter 35 g, receiver 36 g; charge case 177 g" },
    ],
    specsNote: "Battery life and recording time are Rode's figures and depend on settings. The Charge Case+ fully charges in about 2.5 hours from a 5 V/3 A USB-C supply.",
    faqs: [
      {
        q: "What is timecode and do I need it?",
        a: "Timecode stamps your audio with the exact time, so editing software lines it up with your video automatically. If you shoot with more than one camera, or edit long interviews and events, it saves hours of syncing by hand.",
      },
      {
        q: "Will it work with my phone?",
        a: "Yes. Plug the receiver into an iPhone or Android phone with USB-C. Older iPhones with a Lightning port need a Lightning adaptor, sold separately. You can also pair a transmitter straight to an iPhone with Direct Connect in the RØDE Capture app.",
      },
      {
        q: "Will it work with my camera?",
        a: "Yes. Connect the receiver to your camera's mic input with the included 3.5 mm cable.",
      },
      {
        q: "How do I get the backup recordings?",
        a: "Connect the transmitter to a computer and transfer the files with the free RØDE Central app. Each transmitter holds over 40 hours, so you can record a whole event without emptying it.",
      },
      {
        q: "Wireless PRO or Wireless GO (Gen 3)?",
        a: "Both sound the same and record 32-bit float backups. The Wireless PRO adds timecode, more backup memory, two Lavalier II mics and a charging case, so it suits professional film, TV and long events.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "Wireless PRO kit",
        price: 520_000,
        includes: [
          "2 Wireless PRO transmitters with built-in mics",
          "1 Wireless PRO receiver",
          "2 Rode Lavalier II lavalier mics",
          "Charge Case+ and accessory case",
          "3.5 mm TRS cable, USB-C cable and SC34 cable",
          "MagClip GO and furry windshields",
        ],
      },
    ],
  },
  {
    slug: "rode-nth-100",
    brand: "Rode",
    name: "Rode NTH-100",
    category: "Audio",
    tagline: "Hear every detail. Wear them all day.",
    headline:
      "Professional over-ear studio headphones with custom-matched 40 mm drivers, ultra-flat sound and Alcantara cushions with cooling gel, built for mixing, editing and long sessions.",
    summary:
      "The NTH-100 gives you an accurate, natural sound with deep, controlled bass and a very wide frequency response, so you hear exactly what you recorded. CoolTech gel and memory-foam Alcantara cushions stay comfortable for hours, the FitLok system holds your fit in place, and the replaceable cable can plug into either side. Made in Sydney with a spring-steel headband.",
    image: "/products/rode-nth-100/main.png",
    hero: "/products/rode-nth-100/hero.jpg",
    gallery: [
      { src: "/products/rode-nth-100/main.png", alt: "Rode NTH-100 studio headphones in black" },
      { src: "/products/rode-nth-100/white.jpg", alt: "Rode NTH-100 headphones in white" },
      { src: "/products/rode-nth-100/fit.jpg", alt: "Adjusting the NTH-100 headband with the FitLok system" },
      { src: "/products/rode-nth-100/desk.jpg", alt: "NTH-100 headphones resting on a studio mixing desk" },
    ],
    stats: [
      { value: "40 mm", label: "Custom-matched drivers" },
      { value: "5 Hz–35 kHz", label: "Frequency response" },
      { value: "350 g", label: "Light for all-day wear" },
      { value: "2.4 m", label: "Replaceable cable" },
    ],
    highlights: [
      {
        title: "Accurate sound you can trust in the mix",
        body: "Custom 40 mm drivers with a four-layer aluminium voice coil, triple-layer Mylar diaphragm and neodymium magnet give an ultra-flat, detailed sound with tight bass and smooth highs. What you hear is what you recorded, so your edits, mixes and podcasts translate to phones, cars and speakers.",
        image: "/products/rode-nth-100/mixing.jpg",
      },
      {
        title: "Comfortable for hours, even in hot rooms",
        body: "Alcantara cushions with memory foam and CoolTech gel stay cool and soft through long editing sessions, and the closed over-ear design blocks out room noise. The headband spreads the 350 g weight evenly, so they don't pinch after a full day.",
        image: "/products/rode-nth-100/comfort.jpg",
      },
      {
        title: "FitLok keeps your fit, a cable on either side",
        body: "Set the headband once and FitLok locks it, so it never slips or needs adjusting again. The locking cable plugs into either earcup, keeping it out of your way whether you work left or right of your desk, and a 3.5 mm to ¼\" adaptor is in the box for interfaces and mixers.",
        image: "/products/rode-nth-100/style.jpg",
      },
      {
        title: "Built to last, easy to repair",
        body: "An all-metal spring-steel headband and tough build handle daily studio and location use. The cushions and cable are user-replaceable, and the optional NTH-Mic turns the NTH-100 into a broadcast headset for streaming, gaming and live shows.",
        image: "/products/rode-nth-100/desk.jpg",
      },
    ],
    idealFor: [
      { title: "Mixing and editing", body: "Flat, detailed sound for music, video and podcast post-production." },
      { title: "Podcasters and streamers", body: "Comfortable for long shows, with an optional headset mic." },
      { title: "Producers and musicians", body: "Hear every layer of a track while recording or mixing." },
      { title: "Location and church sound", body: "Closed-back isolation for monitoring live sources." },
    ],
    notFor:
      "If you want the same accurate sound for less, in a lighter on-ear design, the Rode NTH-50 (₦200,000) is the more affordable choice.",
    specs: [
      { label: "Type", value: "Closed-back, over-ear (circumaural) studio headphones" },
      { label: "Drivers", value: "40 mm dynamic, custom-matched" },
      { label: "Frequency response", value: "5 Hz–35 kHz" },
      { label: "Impedance", value: "32 Ω" },
      { label: "Sensitivity", value: "110 dB/V" },
      { label: "Max input", value: "1700 mW" },
      { label: "Isolation", value: "20 dBA ambient noise attenuation" },
      { label: "Cable", value: "2.4 m detachable, locking, connects to either side; 3.5 mm plug with ¼\" adaptor" },
      { label: "Comfort", value: "Alcantara cushions with memory foam and CoolTech gel, FitLok headband lock" },
      { label: "Build", value: "Spring-steel headband; user-replaceable cushions and cable" },
      { label: "Size and weight", value: "80 × 190 × 188 mm, 350 g" },
    ],
    specsNote: "Figures are Rode's. The NTH-Mic headset mic and coloured NTH-Cables are optional extras, sold separately.",
    faqs: [
      {
        q: "Will they work with my phone or laptop?",
        a: "Yes. They plug into any 3.5 mm headphone jack. For phones and laptops with only USB-C, use a USB-C to 3.5 mm adaptor, sold separately. The included ¼\" adaptor fits audio interfaces, mixers and recorders.",
      },
      {
        q: "Are they good for mixing and editing?",
        a: "Yes. They're tuned for an accurate, ultra-flat sound, so you hear your recording as it really is. That's what you want for mixing music, editing video and cleaning up podcasts.",
      },
      {
        q: "Do they leak sound or let noise in?",
        a: "They're closed-back, so very little sound leaks out and room noise is reduced by about 20 dB. That makes them good for recording next to a mic, and for working in busy rooms.",
      },
      {
        q: "Can I replace the cushions or cable?",
        a: "Yes. The ear cushions and the cable are user-replaceable, so a worn part never means buying new headphones.",
      },
      {
        q: "NTH-100 or NTH-50?",
        a: "Both have the same accurate 40 mm sound and a cable that connects to either side. The NTH-50 is a lighter on-ear design (220 g) with a coiled cable, popular with DJs. The NTH-100 is over-ear, with Alcantara cooling cushions and FitLok, for professionals who wear headphones all day.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "NTH-100 headphones",
        price: 300_000,
        includes: [
          "Rode NTH-100 studio headphones",
          "2.4 m detachable cable",
          "3.5 mm to ¼\" adaptor",
          "Storage pouch",
          "COLORS ID set",
        ],
      },
    ],
  },
  {
    slug: "rode-nth-50",
    brand: "Rode",
    name: "Rode NTH-50",
    category: "Audio",
    tagline: "Studio-accurate sound. Light enough to forget.",
    headline:
      "Professional on-ear headphones with a custom 40 mm driver and resonant chamber for rich bass, clear detail and strong noise isolation, in a 220 g body made for DJs, producers and creators.",
    summary:
      "The NTH-50 gives you accurate, detailed sound with deep, controlled bass and ultra-low distortion, so you can trust what you hear while mixing, editing or DJing. Passive isolation blocks out about 21 dB of room noise, the contoured headband and memory-foam cushions stay comfortable for long sessions, and the locking coiled cable plugs into either side. Made in Sydney with a tough aluminium build.",
    image: "/products/rode-nth-50/main.png",
    hero: "/products/rode-nth-50/hero.jpg",
    gallery: [
      { src: "/products/rode-nth-50/main.png", alt: "Rode NTH-50 on-ear headphones with coiled cable" },
      { src: "/products/rode-nth-50/studio.jpg", alt: "Rode NTH-50 headphones in matte black" },
      { src: "/products/rode-nth-50/detail.jpg", alt: "Close-up of the NTH-50 earcups and locking cable" },
      { src: "/products/rode-nth-50/box.jpg", alt: "What's in the box: NTH-50 headphones, coiled cable, adaptor, COLORS ID rings and pouch" },
    ],
    stats: [
      { value: "40 mm", label: "Custom-matched driver" },
      { value: "5 Hz–35 kHz", label: "Frequency response" },
      { value: "−21 dBA", label: "Noise isolation" },
      { value: "220 g", label: "Lightweight on-ear" },
    ],
    highlights: [
      {
        title: "Rich bass with clear, accurate detail",
        body: "A custom 40 mm dynamic driver sits in a resonant chamber that gives deep, rounded bass without muddying the mids and highs. Distortion stays ultra-low and the stereo image is natural, so you hear every detail when you mix, edit podcasts or produce beats.",
        image: "/products/rode-nth-50/mixing.jpg",
      },
      {
        title: "Shut out the noise, even in a loud club",
        body: "Passive isolation cuts about 21 dB of outside noise, so you can cue your next track at a loud event, record next to a mic without leaking sound, or focus on your edit in a busy office. You hear your audio, not the room.",
        image: "/products/rode-nth-50/club.jpg",
      },
      {
        title: "Light and comfortable for long sessions",
        body: "At just 220 g with a contoured headband, the NTH-50 takes pressure off the top of your head. Soft memory-foam cushions mould to your ears, so you can wear them through a full DJ set, a long edit or a day of recording.",
        image: "/products/rode-nth-50/comfort.jpg",
      },
      {
        title: "A locking cable on either side, built to last",
        body: "The coiled cable locks into either earcup, so it stays out of your way whether you work left or right. The matte aluminium body resists scratches, and the ear cushions, head cushion and cable are all replaceable. Add the optional NTH-Mic to turn it into a headset.",
        image: "/products/rode-nth-50/cable.jpg",
      },
    ],
    idealFor: [
      { title: "DJs", body: "Light on-ear fit, strong isolation and a coiled cable for the booth." },
      { title: "Music producers", body: "Accurate sound with deep, clean bass for beats and mixes." },
      { title: "Video editors and podcasters", body: "Hear every word and background noise while you edit." },
      { title: "Content creators", body: "Monitor your audio while you record without sound leaking into the mic." },
    ],
    notFor:
      "If you wear headphones all day and want over-ear Alcantara cushions with cooling gel, choose the Rode NTH-100 (₦300,000).",
    specs: [
      { label: "Type", value: "Closed-back, on-ear (supra-aural) studio headphones" },
      { label: "Driver", value: "40 mm dynamic, custom-matched, with resonant chamber" },
      { label: "Frequency response", value: "5 Hz–35 kHz" },
      { label: "Impedance", value: "32 Ω" },
      { label: "Sensitivity", value: "102 dB SPL @ 1 mW; 117 dB SPL @ 1 V" },
      { label: "Distortion", value: "Under 0.03% @ 500 Hz (1 mW)" },
      { label: "Max SPL", value: "124 dB SPL" },
      { label: "Max input power", value: "100 mW short term, 50 mW long term" },
      { label: "Isolation", value: "21 dBA ambient noise attenuation" },
      { label: "Cable", value: "1.7 m coiled, detachable, locking, connects to either side; 3.5 mm plug with ¼\" adaptor" },
      { label: "Build", value: "Lightweight aluminium; replaceable ear cushions, head cushion and cable" },
      { label: "Weight", value: "220 g" },
    ],
    specsNote: "Figures are Rode's. The NTH-Mic headset mic is an optional extra, sold separately.",
    faqs: [
      {
        q: "Will they work with my phone or laptop?",
        a: "Yes. They plug into any 3.5 mm headphone jack. For phones and laptops with only USB-C, use a USB-C to 3.5 mm adaptor, sold separately. The included ¼\" adaptor fits DJ mixers, audio interfaces and recorders.",
      },
      {
        q: "Are on-ear headphones comfortable?",
        a: "The NTH-50 weighs just 220 g, with a contoured headband and soft memory-foam cushions, so it stays comfortable for long sessions. On-ear is also easier to slip half off when you're DJing or talking to someone.",
      },
      {
        q: "Are they good for DJing?",
        a: "Yes. They're light, block out about 21 dB of outside noise for cueing in loud rooms, and the coiled cable locks into either side, so it stays out of your way at the decks.",
      },
      {
        q: "Can I replace the cushions or cable?",
        a: "Yes. The ear cushions, head cushion and cable are all replaceable, so a worn part never means buying new headphones.",
      },
      {
        q: "NTH-50 or NTH-100?",
        a: "Both have the same accurate 40 mm sound and a cable that connects to either side. The NTH-50 is lighter, on-ear and costs less. The NTH-100 is over-ear with Alcantara cooling cushions and FitLok, for people who wear headphones all day.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "NTH-50 headphones",
        price: 200_000,
        includes: [
          "Rode NTH-50 on-ear headphones",
          "1.7 m coiled detachable cable",
          "3.5 mm to ¼\" adaptor",
          "Storage pouch",
          "COLORS ID set",
        ],
      },
    ],
  },
  {
    slug: "rode-ntg3b",
    brand: "Rode",
    name: "Rode NTG3B",
    category: "Audio",
    tagline: "Broadcast sound. Rain or shine.",
    headline:
      "A broadcast-grade RF-bias shotgun mic in matte black, with a warm, natural voice, tight supercardioid pickup and very low noise, built to keep working in humid, wet weather where other mics fail.",
    summary:
      "The NTG3B is the shotgun mic film, TV and documentary crews trust for dialogue. Its RF-bias design shrugs off moisture and condensation, so it keeps sounding clean on humid mornings, by the sea or in light rain. The supercardioid pattern focuses on your subject and rejects noise from the sides without colouring the sound, and self-noise of just 13 dBA keeps quiet voices clear. The matte black finish stays out of sight on camera.",
    image: "/products/rode-ntg3b/main.png",
    hero: "/products/rode-ntg3b/hero.jpg",
    gallery: [
      { src: "/products/rode-ntg3b/main.png", alt: "Rode NTG3B shotgun microphone in matte black" },
      { src: "/products/rode-ntg3b/clip.jpg", alt: "Rode NTG3B in its RM5 mount" },
      { src: "/products/rode-ntg3b/box.jpg", alt: "What's in the box: NTG3B, RM5 mount, foam windshield, storage tube and pouch" },
      { src: "/products/rode-ntg3b/xlr.jpg", alt: "Close-up of the NTG3B XLR connector and Rode logo" },
    ],
    stats: [
      { value: "13 dBA", label: "Ultra-low self-noise" },
      { value: "RF-bias", label: "Moisture-resistant design" },
      { value: "130 dB", label: "Max SPL" },
      { value: "163 g", label: "Light enough for a boompole" },
    ],
    highlights: [
      {
        title: "Keeps working in humid, wet weather",
        body: "Ordinary condenser mics can crackle, hiss or cut out when moisture gets in. The NTG3B uses RF-bias technology that is very resistant to humidity and condensation, so it keeps recording clean dialogue on early-morning shoots, by the beach, in steamy kitchens or in light rain. For outdoor crews, that reliability is the reason to buy it.",
        image: "/products/rode-ntg3b/boom.jpg",
      },
      {
        title: "Focused on your subject, not the noise",
        body: "The tight supercardioid pattern picks up what you point it at and rejects sound from the sides and rear. Off-axis sound stays natural instead of turning hollow or tinny, so voices still sound right when the actor moves or the boom drifts slightly off target.",
        image: "/products/rode-ntg3b/grille.jpg",
      },
      {
        title: "Rich, warm broadcast sound",
        body: "The NTG3B has the full, warm tone and fine detail that broadcasters and voice-over artists ask for. At just 13 dBA self-noise, quiet interviews and whispered lines stay clean with no hiss, and 130 dB max SPL handles shouting and loud scenes without distortion. It runs on standard P48 phantom power through XLR.",
        image: "/products/rode-ntg3b/xlr.jpg",
      },
      {
        title: "Built tough, with a storage tube",
        body: "The precision-machined metal body is made in Sydney and weighs just 163 g, so it sits easily on a boompole or camera rig. It comes with an RM5 mount, a foam windshield and a rugged storage tube that protects it in your bag between jobs. Add the Rode WS7 or a blimp for strong wind.",
        image: "/products/rode-ntg3b/tube.jpg",
      },
    ],
    idealFor: [
      { title: "Film and TV crews", body: "Broadcast-grade dialogue on a boompole, indoors or out." },
      { title: "Documentaries and outdoor shoots", body: "Reliable sound in humid weather, at the coast and in light rain." },
      { title: "Voice-over and studio work", body: "A warm, detailed voice with very low noise." },
      { title: "News and interviews", body: "Tight pickup that keeps the background quiet." },
    ],
    notFor:
      "If you want a lighter shotgun that comes as a complete location kit with a boompole and windshield, choose the Rode NTG5 kit (₦750,000). For a lower budget, the Rode NTG4 (₦350,000) or NTG4+ (₦450,000) are good choices.",
    specs: [
      { label: "Type", value: "RF-bias condenser shotgun microphone, line-gradient" },
      { label: "Polar pattern", value: "Supercardioid" },
      { label: "Capsule", value: "0.50\"" },
      { label: "Frequency range", value: "40 Hz–20 kHz" },
      { label: "Sensitivity", value: "−30 dB re 1 V/Pa (31.6 mV @ 94 dB SPL)" },
      { label: "Self-noise", value: "13 dBA" },
      { label: "Max SPL", value: "130 dB SPL" },
      { label: "Max output", value: "8.2 mV" },
      { label: "Output impedance", value: "25 Ω" },
      { label: "Power", value: "P48 phantom power" },
      { label: "Connector", value: "3-pin XLR" },
      { label: "Size and weight", value: "255 × 19 × 19 mm; 163 g" },
      { label: "Finish", value: "Matte black" },
    ],
    specsNote: "Figures are Rode's. The NTG3B needs 48 V phantom power from a recorder, mixer, interface or camera with an XLR input. It has no battery option.",
    faqs: [
      {
        q: "Will it work with my camera?",
        a: "Yes, if your camera has an XLR input with 48 V phantom power, as most cinema and broadcast cameras do. For a DSLR or mirrorless camera, connect it through an XLR recorder or adaptor that supplies phantom power, such as a Zoom field recorder.",
      },
      {
        q: "What does RF-bias mean for me?",
        a: "It's the technology that makes the NTG3B very resistant to moisture and condensation. Regular condenser mics can crackle or drop out in humid weather. The NTG3B keeps sounding clean, which makes it a safe choice for outdoor and coastal shoots.",
      },
      {
        q: "Can I use it outdoors in the wind?",
        a: "The included foam windshield handles light breeze. For outdoor shoots in real wind, add the Rode WS7 furry windshield or a blimp, both sold separately.",
      },
      {
        q: "Is it good for voice-over?",
        a: "Yes. Its warm, detailed tone and 13 dBA self-noise make it a favourite for voice-over and narration, especially in rooms that aren't fully treated, because the tight pattern picks up less of the room.",
      },
      {
        q: "What's the difference between the NTG3 and NTG3B?",
        a: "They are the same microphone with the same sound. The NTG3B has a matte black finish that doesn't reflect light on camera, while the NTG3 is satin nickel.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "NTG3B shotgun mic",
        price: 850_000,
        includes: [
          "Rode NTG3B shotgun microphone (matte black)",
          "RM5 microphone mount",
          "WSVM foam windshield",
          "Protective storage tube",
          "Zip pouch",
        ],
      },
    ],
  },
  {
    slug: "rode-ntg5-kit",
    brand: "Rode",
    name: "Rode NTG5 Kit",
    category: "Audio",
    tagline: "Broadcast sound. Featherweight kit.",
    headline:
      "A broadcast-grade RF-bias shotgun mic that weighs just 76 g, with natural, uncoloured sound and 10 dBA self-noise, packed as a complete location kit with pistol grip, shock mount, furry windshield and cable.",
    summary:
      "The NTG5 is one of the lightest professional shotgun mics you can buy, made for boom operators and filmmakers who shoot all day. Its circular-port acoustic design gives a clear, natural voice with smooth off-axis sound, and RF-bias with conformal coating keeps it working in humidity and damp weather. The kit includes everything you need to start recording: a PG2-R pistol grip with Rycote Lyre shock mount, a WS10 furry windshield, a foam windshield, a mic clip, cable and pouch.",
    image: "/products/rode-ntg5-kit/main.png",
    hero: "/products/rode-ntg5-kit/hero.jpg",
    gallery: [
      { src: "/products/rode-ntg5-kit/main.png", alt: "Rode NTG5 shotgun mic on the PG2-R pistol grip with Lyre shock mount" },
      { src: "/products/rode-ntg5-kit/box.jpg", alt: "What's in the NTG5 kit: mic, pistol grip, windshields, mount, cable and pouch" },
      { src: "/products/rode-ntg5-kit/clip.jpg", alt: "Rode NTG5 in its RM5 microphone clip" },
      { src: "/products/rode-ntg5-kit/fur.jpg", alt: "Rode NTG5 with the WS10 furry windshield" },
    ],
    stats: [
      { value: "10 dBA", label: "Ultra-low self-noise" },
      { value: "76 g", label: "Ultra-lightweight" },
      { value: "203 mm", label: "Short body" },
      { value: "RF-bias", label: "Moisture-resistant design" },
    ],
    highlights: [
      {
        title: "A boom operator's dream",
        body: "At just 76 g and 203 mm long, the NTG5 is one of the most compact professional shotgun mics available. Your arms tire far less on a long shoot, it balances easily on a boompole or camera, and the whole kit packs small for travel. It's built for crews who move fast and shoot all day.",
        image: "/products/rode-ntg5-kit/boom.jpg",
      },
      {
        title: "Natural, uncoloured sound",
        body: "Rode replaced the usual slots with circular acoustic ports, so the NTG5 sounds open and natural instead of boxy. The tightly controlled frequency response and very low 10 dBA self-noise keep voices clear and true, and sound stays smooth even when your subject moves slightly off-axis.",
        image: "/products/rode-ntg5-kit/grille.jpg",
      },
      {
        title: "Reliable in humid and damp conditions",
        body: "RF-bias technology and conformal coating on the electronics protect the NTG5 from moisture and humidity, so it keeps recording clean on early mornings, by the sea or in steamy locations. The WS10 furry windshield in the box handles outdoor wind.",
        image: "/products/rode-ntg5-kit/fur.jpg",
      },
      {
        title: "A complete kit, ready for location",
        body: "The PG2-R pistol grip has a Rycote Lyre shock mount that stops handling noise, and it screws onto any standard boompole. A short cable runs from the mic through the grip, and you also get a foam windshield, a mic clip and a pouch. Add a boompole and an XLR recorder and you're ready to shoot.",
        image: "/products/rode-ntg5-kit/grip.jpg",
      },
    ],
    idealFor: [
      { title: "Boom operators", body: "Light enough to hold overhead through a full day of takes." },
      { title: "Filmmakers and documentaries", body: "Clear, natural dialogue on location, indoors or out." },
      { title: "Run-and-gun crews", body: "Pistol grip, shock mount and windshield in one small kit." },
      { title: "Interviews and broadcast", body: "Tight pickup with very low noise for clean voices." },
    ],
    notFor:
      "If you want a slightly warmer broadcast tone and don't need the pistol grip kit, choose the Rode NTG3B (₦850,000). For a lower budget, the Rode NTG4 (₦350,000) or NTG4+ (₦450,000) are good choices.",
    specs: [
      { label: "Type", value: "RF-bias condenser shotgun microphone" },
      { label: "Polar pattern", value: "Supercardioid" },
      { label: "Frequency range", value: "20 Hz–20 kHz (80 Hz–20 kHz ±3 dB)" },
      { label: "Sensitivity", value: "−23.5 dB re 1 V/Pa (66 mV @ 94 dB SPL)" },
      { label: "Self-noise", value: "10 dBA" },
      { label: "Signal-to-noise ratio", value: "84 dB" },
      { label: "Max SPL", value: "130 dB SPL" },
      { label: "Output impedance", value: "25 Ω" },
      { label: "Power", value: "P48 phantom power, 2 mA" },
      { label: "Connector", value: "3-pin XLR" },
      { label: "Mic size and weight", value: "203 × 19 × 19 mm; 76 g" },
      { label: "PG2-R pistol grip", value: "240 × 60 × 117 mm; 224 g; Rycote Lyre shock mount, 3/8\" boompole thread" },
    ],
    specsNote: "Figures are Rode's. The NTG5 needs 48 V phantom power from a recorder, mixer, interface or camera with an XLR input. A boompole is not included.",
    faqs: [
      {
        q: "Will it work with my camera?",
        a: "Yes, if your camera has an XLR input with 48 V phantom power, as most cinema and broadcast cameras do. For a DSLR or mirrorless camera, connect it through an XLR recorder or adaptor that supplies phantom power, such as a Zoom field recorder.",
      },
      {
        q: "Does the kit include a boompole?",
        a: "No. The kit includes the mic, PG2-R pistol grip with shock mount, WS10 furry windshield, foam windshield, mic clip, cable and pouch. The pistol grip screws onto any standard boompole, which you can add separately.",
      },
      {
        q: "Can I use it outdoors in the wind?",
        a: "Yes. The WS10 furry windshield in the box handles most outdoor wind. For very strong wind, add a Rode Blimp, sold separately.",
      },
      {
        q: "NTG5 or NTG3B?",
        a: "Both are broadcast-grade RF-bias mics that resist moisture. The NTG5 is much lighter and shorter with a more natural, open sound, and comes as a full kit. The NTG3B has a slightly warmer tone that many broadcasters love.",
      },
      {
        q: "Is it good for voice-over?",
        a: "Yes. The natural sound and 10 dBA self-noise make it a strong choice for voice-over, and its tight pattern picks up less of an untreated room.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "NTG5 location recording kit",
        price: 750_000,
        includes: [
          "Rode NTG5 shotgun microphone",
          "PG2-R pistol grip with Rycote Lyre shock mount",
          "WS10 furry windshield and foam windshield",
          "RM5 microphone clip",
          "PG2-R cable and zip pouch",
        ],
      },
    ],
  },
  {
    slug: "rode-ntg4",
    brand: "Rode",
    name: "Rode NTG4 / NTG4+",
    category: "Audio",
    tagline: "Pro shotgun sound. Smart price.",
    headline:
      "A professional supercardioid shotgun mic with clean, crisp sound and built-in pad, high-pass filter and high-frequency boost. Choose the NTG4 for phantom power, or the NTG4+ with a rechargeable battery that runs over 150 hours.",
    summary:
      "The NTG4 gives filmmakers, YouTubers and event crews broadcast-style dialogue without the broadcast price. Its tight supercardioid pattern focuses on your subject and cuts noise from the sides, and three buttons on the body give you a −10 dB pad, a 75 Hz high-pass filter and a high-frequency boost. The NTG4 runs on phantom power from your recorder or camera. The NTG4+ adds a built-in lithium-ion battery, so it works with gear that can't supply phantom power.",
    image: "/products/rode-ntg4/main.jpg",
    hero: "/products/rode-ntg4/hero.jpg",
    gallery: [
      { src: "/products/rode-ntg4/main.jpg", alt: "Rode NTG4 shotgun microphone in matte black" },
      { src: "/products/rode-ntg4/box.jpg", alt: "What's in the box: NTG4 mic, RM5 clip and foam windshield" },
      { src: "/products/rode-ntg4/clip.jpg", alt: "Rode NTG4 in its RM5 microphone clip" },
      { src: "/products/rode-ntg4/foam.jpg", alt: "Rode NTG4 with the WSVM foam windshield" },
    ],
    stats: [
      { value: "16 dBA", label: "Low self-noise" },
      { value: "135 dB", label: "Max SPL" },
      { value: "3", label: "Built-in sound controls" },
      { value: "150+ h", label: "Battery life (NTG4+)" },
    ],
    highlights: [
      {
        title: "Clean, focused dialogue on location",
        body: "The supercardioid pattern picks up the person you point it at and rejects noise from the sides and rear. Voices come through clear and crisp, with low 16 dBA self-noise, so interviews, short films and event coverage sound professional on a boompole or on camera.",
        image: "/products/rode-ntg4/boom.jpg",
      },
      {
        title: "Pad, high-pass filter and HF boost on the mic",
        body: "Three buttons on the body fix common problems at the source. The 75 Hz high-pass filter cuts traffic rumble and air-conditioning hum, the −10 dB pad stops loud speakers and music from distorting, and the high-frequency boost restores clarity when you use a furry windshield.",
        image: "/products/rode-ntg4/controls.jpg",
      },
      {
        title: "NTG4+: no phantom power needed",
        body: "The NTG4+ has a built-in rechargeable lithium-ion battery that runs for over 150 hours on one charge and tops up over micro-USB. Plug it into a camera, recorder or mixer that has no phantom power and it just works. When phantom power is available, it can run on that too.",
        image: "/products/rode-ntg4/xlr.jpg",
      },
      {
        title: "Ready to shoot out of the box",
        body: "Both versions come with an RM5 mic clip, a foam windshield and a zip pouch, in a tough, lightweight metal body that sits easily on a boompole or camera rig. Add a furry windshield for outdoor wind and you have a complete dialogue setup.",
        image: "/products/rode-ntg4/box.jpg",
      },
    ],
    idealFor: [
      { title: "Filmmakers and short films", body: "Clear dialogue on a boompole without a big budget." },
      { title: "YouTubers and content creators", body: "A step up from on-camera mics, with tight pickup." },
      { title: "Events and church media", body: "Focused sound from the stage or podium, with a pad for loud rooms." },
      { title: "Interviews and documentaries", body: "Clean voices that cut through background noise." },
    ],
    notFor:
      "If you shoot in humid or wet weather often and want broadcast-grade RF-bias reliability, choose the Rode NTG5 kit (₦750,000) or the Rode NTG3B (₦850,000).",
    specs: [
      { label: "Type", value: "Condenser shotgun microphone, line-gradient" },
      { label: "Polar pattern", value: "Supercardioid" },
      { label: "Capsule", value: "0.50\"" },
      { label: "Frequency range", value: "20 Hz–20 kHz" },
      { label: "Sensitivity", value: "−32 dB re 1 V/Pa (25 mV @ 94 dB SPL)" },
      { label: "Self-noise", value: "16 dBA" },
      { label: "Max SPL", value: "135 dB SPL" },
      { label: "Output impedance", value: "200 Ω" },
      { label: "Controls", value: "75 Hz high-pass filter, −10 dB pad, high-frequency boost" },
      { label: "Power (NTG4)", value: "P12, P24 or P48 phantom power" },
      { label: "Power (NTG4+)", value: "P48 phantom power or built-in rechargeable lithium-ion battery (150+ hours, micro-USB charging)" },
      { label: "Connector", value: "3-pin XLR" },
      { label: "Size and weight", value: "NTG4: 225 × 22 × 22 mm, 126 g. NTG4+: 278 × 22 × 22 mm, 176 g" },
    ],
    specsNote: "Figures are Rode's. The NTG4 needs phantom power from a recorder, mixer, interface or camera with an XLR input. The NTG4+ can run on its own battery.",
    faqs: [
      {
        q: "NTG4 or NTG4+?",
        a: "They sound the same and have the same controls. Choose the NTG4 if your recorder, mixer or camera has XLR inputs with phantom power. Choose the NTG4+ if your gear has no phantom power, or you want to save your recorder's battery, because it runs over 150 hours on its own built-in battery.",
      },
      {
        q: "Will it work with my DSLR or mirrorless camera?",
        a: "These mics have an XLR output. Connect them through an XLR recorder or adaptor, such as a Zoom field recorder. With the NTG4 the recorder must supply phantom power; the NTG4+ only needs an XLR input.",
      },
      {
        q: "Can I use it outdoors in the wind?",
        a: "The included foam windshield handles light breeze. For real wind outdoors, add a furry windshield such as the Rode WS7, then press the high-frequency boost button to bring back the clarity the fur takes away.",
      },
      {
        q: "How do I charge the NTG4+?",
        a: "Charge it over USB with the included micro-USB cable, from a laptop, power bank or phone charger. A full charge gives over 150 hours of use, so on most shoots you'll only need to top it up now and then.",
      },
      {
        q: "Is it good for church, events and podium speech?",
        a: "Yes. The tight pickup focuses on the speaker and reduces crowd and room noise, and the −10 dB pad keeps loud voices and music clean.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "ntg4",
        name: "NTG4 (phantom power)",
        price: 350_000,
        includes: [
          "Rode NTG4 shotgun microphone",
          "RM5 microphone clip",
          "WSVM foam windshield",
          "Zip pouch",
        ],
      },
      {
        id: "ntg4-plus",
        name: "NTG4+ (built-in battery)",
        price: 450_000,
        includes: [
          "Rode NTG4+ shotgun microphone with built-in rechargeable battery",
          "RM5 microphone clip",
          "WSVM foam windshield",
          "Micro-USB charging cable",
          "Zip pouch",
        ],
      },
    ],
  },
  {
    slug: "rode-videomic-ntg",
    brand: "Rode",
    name: "Rode VideoMic NTG",
    category: "Audio",
    tagline: "One mic. Camera, phone and computer.",
    headline:
      "A pro on-camera shotgun mic with natural, broadcast-style sound, a smart output that works with both cameras and phones, a USB mode for your computer, and a built-in battery that lasts over 30 hours.",
    summary:
      "The VideoMic NTG uses the same acoustic design as Rode's NTG5 shotgun, so voices sound natural and clear instead of boxy. Put it on your camera for interviews and vlogs, plug it into your phone for content on the go, or connect it to a laptop over USB for podcasts, voice-overs and livestreams. A gain dial, high-pass filter, pad, high-frequency boost and safety channel are all on the mic, and it weighs just 94 g.",
    image: "/products/rode-videomic-ntg/main.jpg",
    hero: "/products/rode-videomic-ntg/hero.jpg",
    gallery: [
      { src: "/products/rode-videomic-ntg/main.jpg", alt: "Rode VideoMic NTG on its Rycote Lyre shock mount" },
      { src: "/products/rode-videomic-ntg/box.jpg", alt: "What's in the box: VideoMic NTG, shock mount, foam windshield and cables" },
      { src: "/products/rode-videomic-ntg/side.jpg", alt: "Side view of the VideoMic NTG on its camera mount" },
      { src: "/products/rode-videomic-ntg/foam.jpg", alt: "Rode VideoMic NTG with its foam windshield" },
    ],
    stats: [
      { value: "30+ h", label: "Built-in battery" },
      { value: "94 g", label: "Ultra-lightweight" },
      { value: "3-in-1", label: "Camera, phone and USB mic" },
      { value: "15 dBA", label: "Low self-noise" },
    ],
    highlights: [
      {
        title: "Broadcast-style sound on your camera",
        body: "Slide it onto your camera's shoe and record clear, focused voices for interviews, vlogs, events and short films. The supercardioid pattern picks up the person in front of the lens and cuts noise from the sides, and the Rycote Lyre shock mount stops handling noise reaching the mic.",
        image: "/products/rode-videomic-ntg/camera.jpg",
      },
      {
        title: "Fix your sound on the mic, not in the edit",
        body: "Turn the gain dial to match your camera or phone, and watch the peak light so your audio never distorts. Buttons on the body give you a high-pass filter (75 Hz or 150 Hz) to cut wind rumble and generator hum, a −20 dB pad for loud rooms, a high-frequency boost for extra clarity, and a safety channel that records a quieter backup in case someone shouts.",
        image: "/products/rode-videomic-ntg/controls.jpg",
      },
      {
        title: "Plugs into a camera, phone or computer",
        body: "The smart 3.5 mm output detects whether it's plugged into a camera or a phone, so you don't need special adaptor cables. Connect it over USB-C and it becomes a desktop USB mic for podcasts, voice-overs, Zoom calls and livestreams, with the 3.5 mm jack working as a headphone output so you can hear yourself.",
        image: "/products/rode-videomic-ntg/usb.jpg",
      },
      {
        title: "The same acoustic design as the NTG5",
        body: "Instead of the usual slots, the tube has rows of small round holes, the same design Rode uses in its NTG5 broadcast shotgun. The result is a natural, uncoloured voice with a very flat response, and the aluminium body is tough yet light enough to forget it's on your rig.",
        image: "/products/rode-videomic-ntg/grille.jpg",
      },
    ],
    idealFor: [
      { title: "YouTubers and vloggers", body: "Clean voice on camera, and a USB mic for voice-overs at your desk." },
      { title: "Interviews and documentaries", body: "Focused pickup that keeps background noise down." },
      { title: "Mobile content creators", body: "Plug straight into your phone for reels, TikToks and street interviews." },
      { title: "Event and wedding videographers", body: "Pad and safety channel for loud speeches and music." },
    ],
    notFor:
      "If you record dialogue on a boompole into an XLR recorder or mixer, choose the Rode NTG4 (₦350,000) or NTG4+ (₦450,000).",
    specs: [
      { label: "Type", value: "On-camera shotgun microphone, pressure-gradient electret condenser" },
      { label: "Polar pattern", value: "Supercardioid" },
      { label: "Frequency range", value: "20 Hz–20 kHz (35 Hz–18 kHz ±3 dB)" },
      { label: "Sensitivity", value: "−26 dB re 1 V/Pa (50 mV @ 94 dB SPL)" },
      { label: "Self-noise", value: "15 dBA" },
      { label: "Max SPL", value: "120 dB SPL" },
      { label: "Controls", value: "Variable gain dial, high-pass filter (75/150 Hz), −20 dB pad, high-frequency boost, safety channel, peak light" },
      { label: "Outputs", value: "Auto-sensing 3.5 mm (camera or phone); USB-C digital audio (24-bit, 48 kHz)" },
      { label: "Battery", value: "Built-in rechargeable lithium-ion, 350 mAh, 30+ hours" },
      { label: "Mount", value: "Rycote Lyre shock mount with cold-shoe foot" },
      { label: "Size and weight", value: "171 mm long, 21.6 mm diameter; 94 g" },
    ],
    specsNote: "Figures are Rode's. USB mode works with Mac, Windows and compatible phones and tablets.",
    faqs: [
      {
        q: "Will it work with my phone?",
        a: "Yes. The 3.5 mm output detects a phone automatically, so it works with phones that have a headphone jack. For phones with only USB-C, connect it over USB-C and it works as a digital mic.",
      },
      {
        q: "Does it need batteries?",
        a: "No. It has a built-in rechargeable battery that lasts over 30 hours and charges over USB-C from a laptop, power bank or phone charger.",
      },
      {
        q: "Can I use it as a podcast or computer mic?",
        a: "Yes. Plug it into a computer over USB-C and it works as a USB mic for podcasts, voice-overs, livestreams and video calls. You can plug headphones into the 3.5 mm jack to hear yourself while you record.",
      },
      {
        q: "Can I use it outdoors in the wind?",
        a: "The included foam windshield handles light breeze, and the high-pass filter cuts low wind rumble. For strong wind, add a furry windshield such as the Rode WS11, sold separately.",
      },
      {
        q: "VideoMic NTG or NTG4?",
        a: "Choose the VideoMic NTG if you mainly shoot with the mic on your camera or phone, or want a USB mic too. Choose the NTG4 or NTG4+ if you record on a boompole into an XLR recorder or mixer.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "VideoMic NTG",
        price: 350_000,
        includes: [
          "Rode VideoMic NTG on-camera shotgun microphone",
          "Rycote Lyre shock mount with cold-shoe foot",
          "Foam windshield",
          "3.5 mm camera cable",
          "USB-C cable",
        ],
      },
    ],
  },
  {
    slug: "dji-mic-mini-2",
    brand: "DJI",
    name: "DJI Mic Mini 2 (2 TX + 1 Mobile RX + Charging Case)",
    category: "Audio",
    tagline: "Tiny mics. Big, clean voice.",
    headline:
      "Two featherlight 11 g wireless mics and a plug-in phone receiver, with noise cancelling, voice tone presets and up to 48 hours of power from the charging case. Clip on, plug in and record two people on your phone.",
    summary:
      "The DJI Mic Mini 2 is built for creators who shoot on their phone. Each transmitter weighs just 11 g and snaps on with a magnet or clip, so it disappears on your shirt. The mobile receiver plugs straight into your phone with no app or cables, and records both mics at once. Noise cancelling, automatic limiting and three voice tone presets keep your sound clean, and the charging case keeps everything topped up for up to 48 hours of shooting.",
    image: "/products/dji-mic-mini-2/main.jpg",
    hero: "/products/dji-mic-mini-2/hero.jpg",
    gallery: [
      { src: "/products/dji-mic-mini-2/main.jpg", alt: "DJI Mic Mini 2 kit contents: charging case, transmitters, mobile receiver, covers, windscreens and pouch" },
      { src: "/products/dji-mic-mini-2/duo.jpg", alt: "Two creators each wearing a DJI Mic Mini 2 transmitter" },
      { src: "/products/dji-mic-mini-2/compact.jpg", alt: "DJI Mic Mini 2 transmitter with a green magnetic cover worn on a sweater" },
      { src: "/products/dji-mic-mini-2/case.jpg", alt: "DJI Mic Mini 2 charging case with both transmitters inside" },
    ],
    stats: [
      { value: "11 g", label: "Per transmitter" },
      { value: "48 h", label: "Total power with case" },
      { value: "300 m", label: "Range to the phone receiver" },
      { value: "2", label: "Mics recording at once" },
    ],
    highlights: [
      {
        title: "So light you'll forget it's on",
        body: "Each transmitter weighs about 11 g and is smaller than a matchbox. Clip it to a collar or attach it with the magnet under your shirt, and it stays out of the way in vlogs, interviews and reels. Swap the magnetic front covers between black and white to match your outfit.",
        image: "/products/dji-mic-mini-2/compact.jpg",
      },
      {
        title: "Clean voice, even when it's noisy",
        body: "Two levels of noise cancelling, Basic and Strong, cut traffic, wind and crowd noise so your voice comes through. Automatic limiting stops sudden shouts or laughs from distorting, and three voice tone presets, Regular, Rich and Bright, let you shape your sound without editing.",
        image: "/products/dji-mic-mini-2/noise.jpg",
      },
      {
        title: "Plug into your phone and record",
        body: "The mobile receiver plugs straight into your phone and records both mics with no app or extra cables, so two-person interviews, podcasts and live streams are easy. The transmitters also connect directly to select DJI cameras, such as Osmo Pocket and Osmo Action models, with no receiver at all, and they work with receivers from other DJI Mic generations.",
        image: "/products/dji-mic-mini-2/devices.jpg",
      },
      {
        title: "Up to 48 hours from the case",
        body: "Each transmitter runs up to about 11.5 hours on its own. Drop them in the charging case between takes and its 1950 mAh battery tops them up about 3.6 times, giving up to 48 hours of total shooting time. That's a full shoot day, or a week of content, without hunting for a socket.",
        image: "/products/dji-mic-mini-2/case.jpg",
      },
    ],
    idealFor: [
      { title: "Phone content creators", body: "Reels, TikToks and YouTube Shorts with clear voice." },
      { title: "Interviews and street vox pops", body: "Two mics on one phone, recording at once." },
      { title: "Vloggers and live streamers", body: "Tiny, light mics that stay out of the shot." },
      { title: "Church, events and small businesses", body: "Simple wireless sound for talks and product videos." },
    ],
    notFor:
      "If you mostly shoot on a mirrorless or cinema camera and want internal backup recording and a camera receiver with a screen, choose the DJI Mic 3 (from ₦350,000).",
    specs: [
      { label: "Kit", value: "2 transmitters, 1 mobile receiver, charging case" },
      { label: "Transmitter size and weight", value: "28.58 × 28.04 × 13.52 mm; about 11 g" },
      { label: "Polar pattern", value: "Omnidirectional" },
      { label: "Frequency response", value: "20 Hz–20 kHz (100 Hz–20 kHz with low cut on)" },
      { label: "Max SPL", value: "120 dB SPL" },
      { label: "Equivalent noise", value: "24 dBA" },
      { label: "Sound features", value: "Two-level noise cancelling (Basic, Strong), automatic limiting, three voice tone presets (Regular, Rich, Bright)" },
      { label: "Range", value: "Up to 300 m with the mobile receiver (unobstructed, no interference)" },
      { label: "Transmitter battery", value: "114 mAh; up to about 11.5 hours; about 70 minutes to charge" },
      { label: "Mobile receiver", value: "39.26 × 27.26 × 8.97 mm; about 6.5 g; powered by your phone" },
      { label: "Charging case", value: "1950 mAh; about 3.6 full charges of the mics; up to 48 hours total; about 2 hours to charge" },
      { label: "Wireless", value: "2.4 GHz; Bluetooth 5.3" },
    ],
    specsNote:
      "Figures are DJI's, measured in lab conditions. Range and battery life vary with surroundings and settings. The mobile receiver connects to phones; for a mirrorless camera, add a DJI Mic camera receiver, sold separately.",
    faqs: [
      {
        q: "Will it work with my phone?",
        a: "Yes. The mobile receiver plugs into your phone's USB-C port and works with the phone's own camera app, with no extra app needed. Message us your phone model if you're unsure and we'll confirm.",
      },
      {
        q: "Can I use it with my camera?",
        a: "The mobile receiver in this kit is made for phones. The transmitters connect directly to select DJI cameras, such as Osmo Pocket and Osmo Action models, with no receiver. For a mirrorless or DSLR camera, you'll need a DJI Mic camera receiver, sold separately, or choose the DJI Mic 3 kit.",
      },
      {
        q: "How long does the battery last?",
        a: "Each transmitter runs up to about 11.5 hours. The charging case recharges them about 3.6 times, for up to 48 hours of total recording time.",
      },
      {
        q: "Does it work outdoors in wind and noise?",
        a: "Yes. The kit includes two windscreens for the mics, and the two-level noise cancelling cuts background noise such as traffic and crowds.",
      },
      {
        q: "DJI Mic Mini 2 or DJI Mic 3?",
        a: "Choose the Mic Mini 2 if you mainly record on your phone and want the smallest, lightest mics at the best price. Choose the DJI Mic 3 if you shoot on cameras and want internal backup recording and a receiver with a screen.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "2 TX + 1 Mobile RX + Charging Case",
        price: 150_000,
        includes: [
          "2 × DJI Mic Mini 2 transmitter",
          "1 × DJI Mic Series Mobile Receiver",
          "1 × DJI Mic Mini 2 charging case",
          "1 × splitter charging cable",
          "2 × windscreen",
          "4 × magnetic front cover (2 black, 2 white)",
          "2 × magnetic clip and 2 × magnet",
          "1 × carrying pouch",
        ],
      },
    ],
  },
  {
    slug: "dji-mic-3",
    brand: "DJI",
    name: "DJI Mic 3",
    category: "Audio",
    tagline: "Pro wireless sound, half the size.",
    headline:
      "DJI's flagship wireless mic: tiny 16 g transmitters, 400 m range, 32-bit float backup recording, built-in timecode and up to 28 hours of power with the case. Record up to four people on one receiver.",
    summary:
      "The DJI Mic 3 is about half the size and weight of the Mic 2, yet does more. Each transmitter records a 32-bit float backup inside the mic, so a dropout or a sudden shout never ruins a take. Dual-band transmission reaches up to 400 m, adaptive gain keeps voices balanced, and built-in timecode makes multi-camera editing fast. The receiver has a touchscreen and dial, and plugs into cameras and phones. Choose the full kit with charging case, a single-person kit, or add extra transmitters and receivers to your setup.",
    image: "/products/dji-mic-3/main.jpg",
    hero: "/products/dji-mic-3/hero.jpg",
    gallery: [
      { src: "/products/dji-mic-3/main.jpg", alt: "DJI Mic 3 receiver with touchscreen, two transmitters and charging case" },
      { src: "/products/dji-mic-3/case.jpg", alt: "DJI Mic 3 charging case open with transmitters and receiver inside" },
      { src: "/products/dji-mic-3/box.jpg", alt: "DJI Mic 3 kit contents: charging case, transmitters, receiver, windscreens, cables and pouch" },
      { src: "/products/dji-mic-3/team.jpg", alt: "A four-person interview recorded with DJI Mic 3 transmitters" },
    ],
    stats: [
      { value: "400 m", label: "Max range" },
      { value: "32-bit", label: "Float backup recording" },
      { value: "28 h", label: "Total power with case" },
      { value: "4 TX", label: "Transmitters on one setup" },
    ],
    highlights: [
      {
        title: "Up to four mics, eight receivers",
        body: "Run up to four transmitters and eight receivers at once for panel talks, podcasts and multi-camera shoots. With supported cameras or software you can record four separate audio tracks, so each voice can be fixed on its own in the edit. Built-in timecode keeps every camera and mic in sync, drifting less than one frame in 24 hours.",
        image: "/products/dji-mic-3/team.jpg",
      },
      {
        title: "Balanced, clean voice in any room",
        body: "Adaptive gain has two modes: Automatic stops clipping when people laugh or shout outdoors, and Dynamic evens out loudness for calm studio talk. Two levels of noise cancelling cut background noise, and three voice tone presets, Regular, Rich and Bright, shape your sound without editing.",
        image: "/products/dji-mic-3/tones.jpg",
      },
      {
        title: "A backup inside every mic",
        body: "Each transmitter records internally in 32-bit float or 24-bit, and can save two files at once: the original track and an enhanced version. If the wireless link drops or a voice suddenly gets loud, your audio is still safe. 32-bit float captures everything from whispers to shouts, so you can set levels later in the edit.",
        image: "/products/dji-mic-3/record.jpg",
      },
      {
        title: "All-day power, fast top-ups",
        body: "Transmitters run up to 8 hours and the receiver up to 10 hours. The charging case recharges the full set about 2.4 times, for up to 28 hours of total use, and a 5-minute charge gives about 2 hours of recording. The case also links the mics and holds the receiver, adapters and accessories, so you're ready the moment you open it.",
        image: "/products/dji-mic-3/battery.jpg",
      },
    ],
    idealFor: [
      { title: "Videographers and filmmakers", body: "Long range, timecode and a backup recording on every mic." },
      { title: "Interviews, podcasts and panels", body: "Up to four voices on one receiver, on separate tracks." },
      { title: "Weddings, church and events", body: "Safe 32-bit float backup when the room gets loud." },
      { title: "Content creators", body: "Works with cameras, phones and DJI Osmo cameras." },
    ],
    notFor:
      "If you mostly record on your phone and want the lightest, most affordable kit, choose the DJI Mic Mini 2 (₦150,000).",
    specs: [
      { label: "Transmitter size and weight", value: "28.77 × 28.34 × 16.35 mm; 16 g with magnet (about 12.5 g without clip and magnet)" },
      { label: "Receiver", value: "53.85 × 28.69 × 22.00 mm; 25.1 g; 1.1-inch touchscreen and dial" },
      { label: "Polar pattern", value: "Omnidirectional" },
      { label: "Frequency response", value: "20 Hz–20 kHz (encoded), 20 Hz–24 kHz (lossless)" },
      { label: "Max SPL", value: "126 dB SPL (1% THD)" },
      { label: "Equivalent noise / SNR", value: "22 dBA / 72 dB" },
      { label: "Recording", value: "48 kHz; 32-bit float or 24-bit; dual-file internal recording on each transmitter (up to 43 hours in 32-bit float)" },
      { label: "Sound features", value: "Adaptive gain (Automatic and Dynamic), two-level noise cancelling, three voice tone presets (Regular, Rich, Bright)" },
      { label: "Range", value: "Up to 400 m (open area, no interference); dual-band 2.4 GHz and 5 GHz" },
      { label: "Connections", value: "Up to 4 transmitters and 8 receivers; four-channel output with supported devices" },
      { label: "Timecode", value: "Built in; drift under 1 frame in 24 hours; 3.5 mm TRS and USB-C output" },
      { label: "Battery", value: "Transmitter 8 hours, receiver 10 hours, about 50 minutes to charge; 5-minute charge gives about 2 hours" },
      { label: "Charging case", value: "1950 mAh; about 2.4 full charges of 2 TX + 1 RX; up to 28 hours total; about 1.5 hours to charge" },
    ],
    specsNote:
      "Figures are DJI's, measured in lab conditions. Range and battery life vary with surroundings and settings. Phones with a Lightning port need a DJI Lightning adapter, sold separately.",
    faqs: [
      {
        q: "Which option should I choose?",
        a: "The 2 TX + 1 RX kit with charging case suits two-person interviews and long shoot days. The 1 TX + 1 RX kit suits solo creators. Buy a single transmitter or receiver to expand a Mic 3 kit you already own, for example to record up to four people or feed more cameras.",
      },
      {
        q: "Will it work with my camera and phone?",
        a: "Yes. The receiver connects to cameras with the locking 3.5 mm cable, and to USB-C phones with the mobile phone adapter included in the full kit. A transmitter can also connect directly to select DJI cameras, such as Osmo Pocket 3 and Osmo Action models, with no receiver. Message us your camera or phone model if you're unsure.",
      },
      {
        q: "What does 32-bit float recording do for me?",
        a: "Each transmitter keeps its own backup recording. In 32-bit float, audio that was too loud or too quiet can be fixed in the edit without distortion, so a surprise shout or a weak signal won't ruin your take.",
      },
      {
        q: "Will it work with my DJI Mic 2?",
        a: "Mic 3 transmitters and receivers are designed to work together within the Mic 3 system. If you're mixing generations, message us your current kit and we'll confirm before you buy.",
      },
      {
        q: "DJI Mic 3 or DJI Mic Mini 2?",
        a: "Choose the Mic 3 if you shoot on cameras and want internal backup recording, timecode, a receiver with a screen and 400 m range. Choose the Mic Mini 2 if you mainly record on your phone and want the smallest kit at the best price.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "kit-2tx",
        name: "2 TX + 1 RX + Charging Case",
        price: 480_000,
        includes: [
          "2 × DJI Mic 3 transmitter",
          "1 × DJI Mic 3 receiver",
          "1 × DJI Mic 3 charging case",
          "1 × mobile phone adapter (USB-C)",
          "1 × locking 3.5 mm TRS audio cable",
          "1 × USB-C to USB-C cable",
          "4 × windscreen",
          "2 × magnetic clip and 2 × magnet",
          "1 × carrying pouch",
        ],
      },
      {
        id: "kit-1tx",
        name: "1 TX + 1 RX",
        price: 350_000,
        includes: [
          "1 × DJI Mic 3 transmitter",
          "1 × DJI Mic 3 receiver",
          "Cables and accessories as supplied by DJI (no charging case)",
        ],
      },
      {
        id: "tx",
        name: "Transmitter only",
        price: 180_000,
        includes: [
          "1 × DJI Mic 3 transmitter",
          "Adds a mic to your Mic 3 kit, or connects directly to select DJI cameras",
        ],
      },
      {
        id: "rx",
        name: "Receiver only",
        price: 250_000,
        includes: [
          "1 × DJI Mic 3 receiver",
          "Adds a camera feed to your Mic 3 kit, or works as a timecode generator",
        ],
      },
    ],
  },
  {
    slug: "dji-mic-2-transmitter",
    brand: "DJI",
    name: "DJI Mic 2 Transmitter",
    category: "Audio",
    tagline: "Add a mic. Or record straight to your phone.",
    headline:
      "A single DJI Mic 2 transmitter with 32-bit float internal recording, intelligent noise cancelling, 250 m range and Bluetooth straight to your phone. Add a third voice to your Mic 2 kit, replace a lost mic, or use it on its own.",
    summary:
      "The DJI Mic 2 transmitter is a complete wireless mic on its own. It records a 32-bit float backup inside the mic, so a dropout or a loud laugh never ruins a take, and its intelligent noise cancelling keeps voices clear in busy places. Pair it with your DJI Mic 2 receiver to add another person, connect it straight to select DJI Osmo cameras with no receiver, or link it to your phone over Bluetooth. It weighs about 28 g and attaches with a magnet or clip.",
    image: "/products/dji-mic-2-transmitter/main.jpg",
    hero: "/products/dji-mic-2-transmitter/hero.jpg",
    gallery: [
      { src: "/products/dji-mic-2-transmitter/main.jpg", alt: "DJI Mic 2 transmitter in Shadow Black" },
      { src: "/products/dji-mic-2-transmitter/windscreen.jpg", alt: "DJI Mic 2 transmitter with its furry windscreen" },
      { src: "/products/dji-mic-2-transmitter/side.jpg", alt: "Side view of the DJI Mic 2 transmitter with its clip" },
      { src: "/products/dji-mic-2-transmitter/box.jpg", alt: "What's in the box: transmitter, windscreen, clip magnet, pouch and USB-C cable" },
    ],
    stats: [
      { value: "32-bit", label: "Float internal recording" },
      { value: "250 m", label: "Max range" },
      { value: "14 h", label: "Internal recording storage" },
      { value: "6 h", label: "Battery life" },
    ],
    highlights: [
      {
        title: "Add a voice to your Mic 2 kit",
        body: "Lost a mic, or need to record one more person? This transmitter pairs with your DJI Mic 2 receiver just like the ones in the kit. Clip it on with the magnet or clip, and it sits neatly on a collar or shirt for interviews, podcasts and events.",
        image: "/products/dji-mic-2-transmitter/kit.jpg",
      },
      {
        title: "A backup recording inside the mic",
        body: "The transmitter records internally at 48 kHz in 32-bit float or 24-bit, with about 14 hours of storage. If the wireless link drops or someone suddenly shouts, your audio is still safe, and 32-bit float lets you fix levels in the edit without distortion.",
        image: "/products/dji-mic-2-transmitter/record.jpg",
      },
      {
        title: "Bluetooth straight to your phone",
        body: "Connect the transmitter to your phone over Bluetooth with no receiver, and record clean voice in your camera app and supported third-party apps. It's a quick, light setup for reels, vlogs and selfie videos. Note that noise cancelling and internal recording are off while using Bluetooth.",
        image: "/products/dji-mic-2-transmitter/phone.jpg",
      },
      {
        title: "Clear voice in noisy places",
        body: "Intelligent noise cancelling cuts traffic, crowds and air-conditioning hum so the voice comes through. The omnidirectional mic picks up speech naturally wherever it's clipped, and the included windscreen handles wind outdoors.",
        image: "/products/dji-mic-2-transmitter/clip.jpg",
      },
    ],
    idealFor: [
      { title: "DJI Mic 2 owners", body: "Add a third voice or replace a lost transmitter." },
      { title: "DJI Osmo camera users", body: "Connects directly to Osmo Pocket 3 and Osmo Action models." },
      { title: "Phone creators", body: "Bluetooth to your phone for quick vlogs and reels." },
      { title: "Interviews and events", body: "A safe 32-bit float backup on every take." },
    ],
    notFor:
      "If you don't own a DJI Mic 2 receiver or a DJI Osmo camera and want a complete phone kit, choose the DJI Mic Mini 2 (₦150,000). For a full camera kit, choose the DJI Mic 3 (from ₦350,000).",
    specs: [
      { label: "Weight", value: "About 28 g" },
      { label: "Polar pattern", value: "Omnidirectional" },
      { label: "Internal recording", value: "48 kHz; 32-bit float or 24-bit; 8 GB, about 14 hours" },
      { label: "Sound features", value: "Intelligent noise cancelling" },
      { label: "Range", value: "Up to 250 m (open area, no interference)" },
      { label: "Battery", value: "Up to 6 hours (up to 18 hours with a Mic 2 charging case)" },
      { label: "Connections", value: "DJI Mic 2 receiver; Bluetooth to phones; direct to select DJI Osmo cameras" },
      { label: "Direct camera support", value: "Osmo Pocket 3, Osmo Action 4, Osmo Action 5 Pro, Osmo Action 6, Osmo 360, Osmo Nano, Osmo Mobile 7P and Osmo Mobile 8" },
      { label: "Mounting", value: "Magnetic attachment and clip" },
      { label: "Charging", value: "USB-C" },
    ],
    specsNote:
      "Figures are DJI's, measured in lab conditions. The transmitter doesn't take external storage. When connected to a phone over Bluetooth, noise cancelling and internal recording aren't available.",
    faqs: [
      {
        q: "Does it work with my DJI Mic 2 kit?",
        a: "Yes. It pairs with the DJI Mic 2 receiver, so you can add another person to your setup or replace a lost transmitter.",
      },
      {
        q: "Can I use it without a receiver?",
        a: "Yes. It connects directly to select DJI cameras, such as Osmo Pocket 3 and Osmo Action models, and to phones over Bluetooth. With Bluetooth, noise cancelling and internal recording are turned off.",
      },
      {
        q: "Will it work with a DJI Mic 3 kit?",
        a: "It's made for the DJI Mic 2 system. If you own a Mic 3 kit, a Mic 3 transmitter is the safer choice. Message us your kit and we'll confirm before you buy.",
      },
      {
        q: "Is there a white version?",
        a: "This listing is the Shadow Black transmitter. DJI also makes it in Pearl White, so message us if you'd like white and we'll check availability.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "Transmitter (Shadow Black)",
        price: 150_000,
        includes: [
          "1 × DJI Mic 2 transmitter (Shadow Black)",
          "1 × windscreen",
          "1 × clip magnet",
          "1 × carrying pouch",
          "1 × USB-C charging cable",
        ],
      },
    ],
  },
  {
    slug: "alctron-pf8",
    brand: "Alctron",
    name: "Alctron PF8 Pop Filter and Isolation Shield",
    category: "Audio",
    tagline: "A quiet booth that fits on your mic.",
    headline:
      "A compact foam isolation shield with a built-in pop filter. It slips straight onto your microphone, cuts room echo and outside noise, and stops harsh P and B sounds, for cleaner vocals and voice-overs in any room.",
    summary:
      "Most home and church studios have the same problem: bare walls that make vocals sound echoey and thin. The Alctron PF8 wraps your microphone in dense noise-reduction foam, so it hears your voice and much less of the room. The front cap works as a pop filter to soften plosives, and the whole shield weighs just 122 g, so it mounts directly on the mic with no extra stand or arm. It suits large-diaphragm mics about 4.5 to 6 cm wide.",
    image: "/products/alctron-pf8/main.jpg",
    hero: "/products/alctron-pf8/hero.jpg",
    gallery: [
      { src: "/products/alctron-pf8/main.jpg", alt: "Alctron PF8 foam isolation shield with its blue pop filter cap" },
      { src: "/products/alctron-pf8/open.jpg", alt: "Alctron PF8 with the pop filter cap removed, showing the foam chamber" },
      { src: "/products/alctron-pf8/hole.jpg", alt: "Back of the Alctron PF8 showing the 47 mm microphone hole" },
      { src: "/products/alctron-pf8/mounted.jpg", alt: "Alctron PF8 fitted on a studio microphone in a shock mount" },
    ],
    stats: [
      { value: "122 g", label: "Light enough to sit on the mic" },
      { value: "4.5–6 cm", label: "Fits large-diaphragm mics" },
      { value: "2-in-1", label: "Isolation shield and pop filter" },
      { value: "0", label: "Extra stands or arms needed" },
    ],
    highlights: [
      {
        title: "Cleaner vocals in an untreated room",
        body: "Dense noise-reduction foam surrounds the microphone on every side, so it captures your voice and much less of the echo bouncing off walls and ceilings. Outside noise such as fans, generators and traffic is reduced too, giving clear, focused vocals that need less fixing in the mix.",
        image: "/products/alctron-pf8/mounted.jpg",
      },
      {
        title: "Built-in pop filter",
        body: "The front cap acts as a pop filter, softening the bursts of air from P, B and T sounds that cause thumps and distortion. You get a reflection filter and a pop filter in one piece, instead of buying and setting up two.",
        image: "/products/alctron-pf8/open.jpg",
      },
      {
        title: "Slips straight onto your mic",
        body: "There's no heavy frame or separate stand. Slide the PF8 over a large-diaphragm mic about 4.5 to 6 cm wide through the 47 mm opening and it stays in place, working with your existing shock mount and mic stand. It's small enough to pack in a bag for recording on location.",
        image: "/products/alctron-pf8/hole.jpg",
      },
      {
        title: "Made for cardioid studio mics",
        body: "The PF8 works best with cardioid condenser and dynamic studio mics, the kind most singers, podcasters, voice-over artists and church media teams use. The foam also helps against wind and breath noise when you record close to the mic.",
        image: "/products/alctron-pf8/top.jpg",
      },
    ],
    idealFor: [
      { title: "Home studio singers and rappers", body: "Drier, cleaner vocals in a bedroom or living room." },
      { title: "Podcasters and voice-over artists", body: "Less room echo and fewer popping P sounds." },
      { title: "Church media teams", body: "Clearer recordings in large, echoey halls." },
      { title: "Recording on the go", body: "Light and compact enough to travel with your mic." },
    ],
    notFor:
      "It's not a fit for slim pencil mics, lavalier mics or shotgun mics, which are narrower than 4.5 cm. It also reduces room sound at the mic but doesn't replace full acoustic treatment for very noisy spaces.",
    specs: [
      { label: "Type", value: "Foam isolation shield (reflection filter) with integrated pop filter" },
      { label: "Material", value: "High-density noise-reduction foam" },
      { label: "Supported microphones", value: "Large-diaphragm mics about 4.5 to 6 cm in diameter" },
      { label: "Recommended pickup pattern", value: "Cardioid" },
      { label: "Microphone hole", value: "47 mm" },
      { label: "Size", value: "172 × 200 × 180 mm" },
      { label: "Weight", value: "122 g" },
      { label: "Mounting", value: "Fits directly on the microphone; no stand or arm needed" },
    ],
    specsNote: "Figures are Alctron's. Check your microphone's body diameter before ordering, or message us your mic model.",
    faqs: [
      {
        q: "Will it fit my microphone?",
        a: "It fits large-diaphragm mics with a body about 4.5 to 6 cm wide, which covers most studio condenser mics and many dynamic mics. Message us your mic model and we'll confirm before you buy.",
      },
      {
        q: "Do I still need a separate pop filter?",
        a: "No. The front cap works as a pop filter, so it softens P and B sounds as well as cutting room echo.",
      },
      {
        q: "Will it make my room sound like a professional studio?",
        a: "It makes a clear difference by cutting much of the echo and outside noise the mic hears. For a very noisy or very echoey space, combine it with some soft furnishings or acoustic panels for the best results.",
      },
      {
        q: "Does it need a stand?",
        a: "No. It slides straight onto your mic and stays on your existing mic stand and shock mount.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "PF8",
        price: 50_000,
        includes: ["Alctron PF8 foam isolation shield with built-in pop filter cap"],
      },
    ],
  },
  {
    slug: "canon-bp-a30",
    brand: "Canon",
    name: "Canon BP-A30 Battery Pack",
    category: "Batteries",
    tagline: "Keep your Cinema EOS rolling.",
    headline:
      "Canon's original 14.4 V, 3100 mAh (45 Wh) lithium-ion pack for the EOS C70, C300 Mark III, C500 Mark II, C200 and XF605. A genuine spare means no dead camera halfway through a wedding, service or shoot.",
    summary:
      "On a long shoot day, one battery is never enough. The BP-A30 is Canon's own pack for its Cinema EOS and pro camcorders, so it fits perfectly, talks to the camera to show accurate remaining time, and charges safely in Canon chargers. At 45 Wh it gives you a solid block of recording per pack, and it's under the 100 Wh airline limit, so you can carry spares in your hand luggage. Keep one charging while you shoot on the other and you'll never stop rolling.",
    image: "/products/canon-bp-a30/main.jpg",
    hero: "/products/canon-bp-a30/hero.jpg",
    gallery: [
      { src: "/products/canon-bp-a30/main.jpg", alt: "Canon BP-A30 lithium-ion battery pack" },
      { src: "/products/canon-bp-a30/c70-back.jpg", alt: "Back of the Canon EOS C70 with a BP-A30 battery fitted" },
      { src: "/products/canon-bp-a30/c70-slant.jpg", alt: "Canon EOS C70 with RF lens and BP-A30 battery in the rear battery bay" },
      { src: "/products/canon-bp-a30/c400.jpg", alt: "Canon EOS C400 cinema camera" },
    ],
    stats: [
      { value: "45 Wh", label: "Capacity (3100 mAh)" },
      { value: "14.4 V", label: "Lithium-ion pack" },
      { value: "7+", label: "Canon cameras it powers" },
      { value: "< 100 Wh", label: "Fine in airline hand luggage" },
    ],
    highlights: [
      {
        title: "Made for Canon's Cinema EOS cameras",
        body: "The BP-A30 slots straight into the EOS C70, C300 Mark III, C300 Mark II, C500 Mark II and C200, and Canon's XF705 and XF605 pro camcorders. It's the same pack Canon puts in the box, so it fits snugly and locks in place with no wobble or loose contacts.",
        image: "/products/canon-bp-a30/c70-slant.jpg",
      },
      {
        title: "Accurate battery readouts",
        body: "Because it's a genuine Canon pack, the camera reads its remaining charge correctly and shows you how much recording time is left. No guessing, no surprise shutdowns in the middle of a vow, a sermon or an interview.",
        image: "/products/canon-bp-a30/c70-back.jpg",
      },
      {
        title: "Swap and keep shooting",
        body: "A spare pack turns a one-battery camera into an all-day camera. Shoot on one while the other charges in your Canon CG-A10 or CG-A20 charger, and keep a fully charged pack in your bag for when the day runs long. The included terminal cover protects the contacts in your bag.",
        image: "/products/canon-bp-a30/c70-kit.jpg",
      },
      {
        title: "Safe to fly with",
        body: "At 45 Wh, the BP-A30 is well under the 100 Wh limit most airlines set for lithium-ion batteries, so you can carry spares in your hand luggage to destination weddings and out-of-town jobs. Canon's protection circuits guard against over-charging and short circuits.",
        image: "/products/canon-bp-a30/main.jpg",
      },
    ],
    idealFor: [
      { title: "Wedding and event filmmakers", body: "Long days with no time to wait for a charge." },
      { title: "Church media teams", body: "Record full services without a mid-sermon swap scare." },
      { title: "Documentary and broadcast crews", body: "Reliable power on location, far from a socket." },
      { title: "Rental houses and studios", body: "Genuine spares for your Canon cinema kits." },
    ],
    notFor:
      "It doesn't fit the original EOS C300 or C300 Dual Pixel, which use the BP-975, or Canon's smaller XA camcorders. For a longer-running pack on the same cameras, choose the Canon BP-A60 (₦674,700).",
    specs: [
      { label: "Model", value: "Canon BP-A30 (0868C002)" },
      { label: "Type", value: "Rechargeable lithium-ion battery pack" },
      { label: "Voltage", value: "14.4 V" },
      { label: "Capacity", value: "3100 mAh (45 Wh)" },
      { label: "Operating temperature", value: "0 to 40 °C" },
      { label: "Compatible cameras", value: "EOS C70, EOS C300 Mark III, EOS C300 Mark II, EOS C500 Mark II, EOS C200 / C200B, XF705, XF605" },
      { label: "Compatible chargers", value: "Canon CG-A10, CG-A20" },
      { label: "Included", value: "Battery pack with terminal cover" },
    ],
    specsNote:
      "Figures are Canon's. Recording time per pack depends on your camera, resolution, frame rate, screen and accessories. Message us your camera model if you're unsure it fits.",
    faqs: [
      {
        q: "Will it fit my camera?",
        a: "It fits the Canon EOS C70, C300 Mark III, C300 Mark II, C500 Mark II, C200 and C200B, and the XF705 and XF605 camcorders. It doesn't fit the original C300 or C300 Dual Pixel. Message us your camera model and we'll confirm before you buy.",
      },
      {
        q: "Is this the original Canon battery?",
        a: "Yes. It's the genuine Canon BP-A30, the same pack Canon supplies with these cameras, not a third-party copy.",
      },
      {
        q: "BP-A30 or BP-A60?",
        a: "Both fit the same cameras. The BP-A30 (45 Wh) is lighter and cheaper. The BP-A60 has a bigger capacity, so it runs longer per pack but is bigger and heavier. Many shooters use a BP-A60 on the camera and keep BP-A30s as spares.",
      },
      {
        q: "Which charger do I need?",
        a: "Use a Canon CG-A10 or CG-A20 charger. Most of these cameras also charge the battery inside the camera with the supplied power adapter.",
      },
      {
        q: "Can I take it on a plane?",
        a: "Yes. At 45 Wh it's under the 100 Wh limit most airlines allow in hand luggage. Carry spares in your cabin bag, not checked luggage, and keep the terminal cover on.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "BP-A30",
        price: 487_700,
        includes: ["1 × Canon BP-A30 battery pack (with terminal cover)"],
      },
    ],
  },
  {
    slug: "canon-bp-a60",
    brand: "Canon",
    name: "Canon BP-A60 Battery Pack",
    category: "Batteries",
    tagline: "Double the power for long shoot days.",
    headline:
      "Canon's high-capacity 14.4 V, 6200 mAh (90 Wh) lithium-ion pack for the EOS C70, C300 Mark III, C500 Mark II, C200 and XF605. Twice the energy of the BP-A30, so you swap batteries half as often.",
    summary:
      "When the shoot runs all day, fewer battery swaps means fewer missed moments. The BP-A60 is Canon's own high-capacity pack for its Cinema EOS cameras and pro camcorders. At 90 Wh it holds twice the energy of the BP-A30, so one pack carries you through far more of a wedding, service or documentary day. It talks to the camera to show accurate remaining time, charges safely in Canon chargers, and at under 100 Wh it can still travel in your hand luggage.",
    image: "/products/canon-bp-a60/main.jpg",
    hero: "/products/canon-bp-a60/hero.jpg",
    gallery: [
      { src: "/products/canon-bp-a60/main.jpg", alt: "Canon BP-A60 high-capacity lithium-ion battery pack" },
      { src: "/products/canon-bp-a60/front.jpg", alt: "Front of the Canon BP-A60 showing the charge level indicator and check button" },
      { src: "/products/canon-bp-a60/c70-slant.jpg", alt: "Canon EOS C70, one of the cinema cameras the BP-A60 powers" },
      { src: "/products/canon-bp-a60/c70-back.jpg", alt: "Back of the Canon EOS C70 showing its rear battery bay" },
    ],
    stats: [
      { value: "90 Wh", label: "Capacity (6200 mAh)" },
      { value: "2×", label: "The energy of a BP-A30" },
      { value: "7+", label: "Canon cameras it powers" },
      { value: "< 100 Wh", label: "Fine in airline hand luggage" },
    ],
    highlights: [
      {
        title: "Twice the run time per pack",
        body: "With 6200 mAh (90 Wh), the BP-A60 holds double the energy of the BP-A30 that comes with most of these cameras. That means fewer swaps during a ceremony, a full church service or a long interview, and fewer batteries to carry and charge.",
        image: "/products/canon-bp-a60/main.jpg",
      },
      {
        title: "Made for Canon's Cinema EOS cameras",
        body: "It fits the EOS C70, C300 Mark III, C300 Mark II, C500 Mark II and C200, and Canon's XF705 and XF605 pro camcorders. It's a genuine Canon pack, so it locks in firmly with clean contacts. It's taller than the BP-A30 and sits a little further out of the battery bay.",
        image: "/products/canon-bp-a60/c70-slant.jpg",
      },
      {
        title: "Know exactly how much time is left",
        body: "The camera reads the pack's charge accurately and shows your remaining recording time. Press the check button on the battery to see its charge level on the five-step indicator, even when it's in your bag.",
        image: "/products/canon-bp-a60/front.jpg",
      },
      {
        title: "Charge one, shoot on the other",
        body: "Pair it with your existing BP-A30 or another BP-A60 and charge in a Canon CG-A10 or CG-A20 charger while you shoot. At 90 Wh it's under the 100 Wh airline limit, so spares can fly with you in your cabin bag.",
        image: "/products/canon-bp-a60/c70-kit.jpg",
      },
    ],
    idealFor: [
      { title: "Wedding and event filmmakers", body: "Ceremony to reception with fewer battery swaps." },
      { title: "Church media teams", body: "Record long services on a single pack." },
      { title: "Documentary and broadcast crews", body: "More hours on location, far from a socket." },
      { title: "Gimbal and rig shooters", body: "Fewer stops to rebalance and swap power." },
    ],
    notFor:
      "It doesn't fit the original EOS C300 or C300 Dual Pixel, which use the BP-975. If you want a lighter, more compact pack for the same cameras, choose the Canon BP-A30 (₦487,700).",
    specs: [
      { label: "Model", value: "Canon BP-A60 (0870C002)" },
      { label: "Type", value: "Rechargeable intelligent lithium-ion battery pack" },
      { label: "Voltage", value: "14.4 V" },
      { label: "Capacity", value: "6200 mAh (90 Wh)" },
      { label: "Charge indicator", value: "Five-step level display with check button" },
      { label: "Compatible cameras", value: "EOS C70, EOS C300 Mark III, EOS C300 Mark II, EOS C500 Mark II, EOS C200 / C200B, XF705, XF605" },
      { label: "Compatible chargers", value: "Canon CG-A10, CG-A20" },
      { label: "Included", value: "Battery pack with terminal cover" },
    ],
    specsNote:
      "Figures are Canon's. Recording time per pack depends on your camera, resolution, frame rate, screen and accessories. Message us your camera model if you're unsure it fits.",
    faqs: [
      {
        q: "Will it fit my camera?",
        a: "It fits the Canon EOS C70, C300 Mark III, C300 Mark II, C500 Mark II, C200 and C200B, and the XF705 and XF605 camcorders. It doesn't fit the original C300 or C300 Dual Pixel. Message us your camera model and we'll confirm before you buy.",
      },
      {
        q: "BP-A60 or BP-A30?",
        a: "Both fit the same cameras. The BP-A60 (90 Wh) holds twice the energy of the BP-A30 (45 Wh), so it runs about twice as long per pack, but it's bigger and heavier. Many shooters run a BP-A60 on the camera and keep BP-A30s as spares.",
      },
      {
        q: "Does it work with the EOS C400 or C80?",
        a: "Canon lists the newer BP-A60N for the C400. Message us your camera model before ordering and we'll confirm the right battery.",
      },
      {
        q: "Is this the original Canon battery?",
        a: "Yes. It's the genuine Canon BP-A60, not a third-party copy.",
      },
      {
        q: "Can I take it on a plane?",
        a: "Yes. At 90 Wh it's under the 100 Wh limit most airlines allow in hand luggage. Carry spares in your cabin bag, not checked luggage, and keep the terminal cover on.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "BP-A60",
        price: 674_700,
        includes: ["1 × Canon BP-A60 battery pack (with terminal cover)"],
      },
    ],
  },
  {
    slug: "canon-lp-e6p",
    brand: "Canon",
    name: "Canon LP-E6P Battery Pack",
    category: "Batteries",
    tagline: "Full power for Canon's newest cameras.",
    headline:
      "Canon's newest 7.2 V, 2130 mAh lithium-ion pack, built for the EOS R5 Mark II and R6 Mark III. A higher 6 A output unlocks the full performance of newer bodies, and it still works in cameras that take the LP-E6NH.",
    summary:
      "The LP-E6P is the successor to the LP-E6NH, the battery used across a huge range of Canon cameras. It holds the same 2130 mAh, but it can deliver up to 6 A of continuous current, which newer cameras such as the EOS R5 Mark II need to run at their full speed and features. It charges in the same Canon chargers, can charge inside supported cameras over USB-C, and it's a genuine Canon pack, so your camera reads its charge and battery health correctly. One spare can be the difference between finishing a wedding and missing the first dance.",
    image: "/products/canon-lp-e6p/main.jpg",
    hero: "/products/canon-lp-e6p/hero.jpg",
    gallery: [
      { src: "/products/canon-lp-e6p/main.jpg", alt: "Canon LP-E6P lithium-ion battery pack" },
      { src: "/products/canon-lp-e6p/r6-mark-iii.jpg", alt: "Canon EOS R6 Mark III with RF 24-105mm lens, one of the cameras the LP-E6P powers" },
      { src: "/products/canon-lp-e6p/r5-bottom.jpg", alt: "Underside of the Canon EOS R5 Mark II showing its battery compartment" },
      { src: "/products/canon-lp-e6p/bg-r20.jpg", alt: "Canon BG-R20 battery grip, which holds two LP-E6P packs" },
    ],
    stats: [
      { value: "2130 mAh", label: "Capacity (7.2 V)" },
      { value: "6 A", label: "Max continuous output" },
      { value: "USB-C", label: "In-camera charging on supported bodies" },
      { value: "< 100 Wh", label: "Fine in airline hand luggage" },
    ],
    highlights: [
      {
        title: "Unlocks your new camera's full performance",
        body: "Newer Canon cameras, starting with the EOS R5 Mark II, draw more power for fast bursts, high-resolution video and cooling. The LP-E6P can deliver up to 6 A of continuous current, so the camera runs at its full speed and features instead of holding back as it can with older packs.",
        image: "/products/canon-lp-e6p/r5-bottom.jpg",
      },
      {
        title: "Works with the cameras you already own",
        body: "It's the same size and shape as the LP-E6NH, LP-E6N and LP-E6, so it also fits the many Canon cameras that take those packs, such as the EOS R5, R6, R6 Mark II, R7, 5D Mark IV and 90D. Buy the LP-E6P once and use it across your old and new bodies.",
        image: "/products/canon-lp-e6p/r6-mark-iii.jpg",
      },
      {
        title: "Charge in the camera over USB-C",
        body: "On cameras that support direct charging, plug in a Canon PD-E2 or PD-E1 USB power adapter (sold separately) and charge the battery without taking it out. It also charges in Canon's LC-E6 and LC-E6E chargers and the CBC-E6 car charger.",
        image: "/products/canon-lp-e6p/pd-e2.jpg",
      },
      {
        title: "Double up with a battery grip",
        body: "Canon battery grips such as the BG-R20 for the EOS R5 Mark II and R6 Mark III hold two packs, roughly doubling your shooting time and giving you a better grip for portrait shots. A pair of genuine LP-E6P packs is the safest way to fill one.",
        image: "/products/canon-lp-e6p/bg-r20.jpg",
      },
    ],
    idealFor: [
      { title: "EOS R5 Mark II and R6 Mark III owners", body: "The battery your camera is designed to run at full power." },
      { title: "Wedding and event photographers", body: "Swap in a fresh pack and never miss a key moment." },
      { title: "Hybrid photo and video shooters", body: "Long video takes and fast bursts on one pack." },
      { title: "Multi-camera Canon users", body: "One battery type across your older and newer bodies." },
    ],
    notFor:
      "If your camera is older than the EOS R5 Mark II and you just want a reliable spare, the Canon LP-E6NH (₦191,500) gives you the same capacity for less. It doesn't fit Canon cameras that use other batteries, such as the EOS R50, R10 or R100 (LP-E17) or the EOS R1 and R3.",
    specs: [
      { label: "Model", value: "Canon LP-E6P (6537C001)" },
      { label: "Type", value: "Rechargeable lithium-ion battery pack" },
      { label: "Voltage", value: "7.2 V" },
      { label: "Capacity", value: "2130 mAh" },
      { label: "Max continuous discharge", value: "6 A" },
      { label: "Made for", value: "EOS R5 Mark II, EOS R6 Mark III and newer cameras" },
      { label: "Also fits", value: "Cameras that take the LP-E6NH, LP-E6N or LP-E6 (e.g. EOS R5, R6, R6 Mark II, R7, R5 C, 5D Mark IV, 90D)" },
      { label: "Chargers", value: "Canon LC-E6, LC-E6E; CBC-E6 car charger" },
      { label: "USB charging", value: "In camera via Canon PD-E2 or PD-E1 (sold separately), on cameras that support it" },
      { label: "Included", value: "Battery pack with terminal cover" },
    ],
    specsNote:
      "Figures are Canon's. Shots and recording time per charge depend on your camera, settings, temperature and accessories. Message us your camera model if you're unsure it fits.",
    faqs: [
      {
        q: "Will it fit my camera?",
        a: "It's made for the EOS R5 Mark II and R6 Mark III, and it also fits cameras that take the LP-E6NH, LP-E6N or LP-E6, such as the EOS R5, R6, R6 Mark II, R7, 5D Mark IV and 90D. Message us your camera model and we'll confirm before you buy.",
      },
      {
        q: "LP-E6P or LP-E6NH?",
        a: "Both hold 2130 mAh. The LP-E6P can supply more current (6 A), which newer cameras like the EOS R5 Mark II need for full performance. If you shoot on a newer body, choose the LP-E6P. For older cameras, the LP-E6NH (₦191,500) does the same job for less.",
      },
      {
        q: "Can I charge it with my old charger?",
        a: "Yes. It charges in Canon's LC-E6 and LC-E6E chargers and the CBC-E6 car charger. On supported cameras you can also charge it inside the camera with a Canon PD-E2 or PD-E1 USB power adapter.",
      },
      {
        q: "Is this the original Canon battery?",
        a: "Yes. It's the genuine Canon LP-E6P, not a third-party copy, so your camera shows its charge level and battery health accurately.",
      },
      {
        q: "Can I take it on a plane?",
        a: "Yes. It's far below the 100 Wh limit most airlines allow in hand luggage. Carry spares in your cabin bag, not checked luggage, and keep the terminal cover on.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "LP-E6P",
        price: 207_050,
        includes: ["1 × Canon LP-E6P battery pack (with terminal cover)"],
      },
    ],
  },
  {
    slug: "canon-lp-e6nh",
    brand: "Canon",
    name: "Canon LP-E6NH Battery Pack",
    category: "Batteries",
    tagline: "The spare every Canon shooter needs.",
    headline:
      "Canon's genuine 7.2 V, 2130 mAh lithium-ion pack for the EOS R5, R6, R6 Mark II, R7, 5D Mark IV, 90D and many more. About 14% more capacity than the LP-E6N in the same size, with in-camera USB charging on supported bodies.",
    summary:
      "The LP-E6NH is the battery behind a huge range of Canon mirrorless and DSLR cameras. It's the same size as the older LP-E6N, but its capacity rises from 1865 mAh to 2130 mAh, so you get more shots and longer video takes from every charge. It's a genuine Canon pack, so your camera reads its remaining charge and battery health accurately, and it charges in Canon's LC-E6 and LC-E6E chargers or inside supported cameras over USB. One spare in your bag can be the difference between finishing a wedding and missing the first dance.",
    image: "/products/canon-lp-e6nh/main.jpg",
    hero: "/products/canon-lp-e6nh/hero.jpg",
    gallery: [
      { src: "/products/canon-lp-e6nh/main.jpg", alt: "Canon LP-E6NH lithium-ion battery pack" },
      { src: "/products/canon-lp-e6nh/r6-mark-ii.jpg", alt: "Canon EOS R6 Mark II with RF 24-105mm lens, one of the cameras the LP-E6NH powers" },
      { src: "/products/canon-lp-e6nh/r5.jpg", alt: "Canon EOS R5 with RF 24-105mm lens, which runs on the LP-E6NH" },
      { src: "/products/canon-lp-e6nh/r6-bottom.jpg", alt: "Underside of the Canon EOS R6 Mark II showing its battery compartment" },
    ],
    stats: [
      { value: "2130 mAh", label: "Capacity (7.2 V)" },
      { value: "+14%", label: "More capacity than the LP-E6N" },
      { value: "USB", label: "In-camera charging on supported bodies" },
      { value: "< 100 Wh", label: "Fine in airline hand luggage" },
    ],
    highlights: [
      {
        title: "More shots from every charge",
        body: "The LP-E6NH keeps the size and shape of the LP-E6N but raises the capacity from 1865 mAh to 2130 mAh. That's roughly 14% more power per pack, so you get more frames on a long shoot and longer video takes before you need to swap.",
        image: "/products/canon-lp-e6nh/main.jpg",
      },
      {
        title: "Fits a huge range of Canon cameras",
        body: "It powers the EOS R5, R6, R6 Mark II, R7 and R5 C mirrorless cameras, and DSLRs such as the 5D Mark IV, 6D Mark II, 7D Mark II, 90D and 80D. It also works in cameras made for the LP-E6 and LP-E6N, so one battery type covers your whole kit.",
        image: "/products/canon-lp-e6nh/r6-mark-ii.jpg",
      },
      {
        title: "Charge it inside the camera",
        body: "On cameras that support direct charging, such as the EOS R5, R6 and R7, plug in a Canon USB power adapter (PD-E1, sold separately) and charge without taking the battery out. It also charges in the Canon LC-E6 and LC-E6E chargers and the CBC-E6 car charger.",
        image: "/products/canon-lp-e6nh/pd-e.jpg",
      },
      {
        title: "Genuine Canon, accurate readouts",
        body: "Because it's Canon's own pack, your camera shows its exact remaining charge, shot count and battery health. No surprise shutdowns in the middle of a vow, a sermon or an interview, and no warnings about unrecognised batteries.",
        image: "/products/canon-lp-e6nh/r5.jpg",
      },
    ],
    idealFor: [
      { title: "EOS R5, R6, R6 Mark II and R7 owners", body: "The battery your camera ships with, as a spare." },
      { title: "Wedding and event photographers", body: "Swap in a fresh pack and never miss a key moment." },
      { title: "Canon DSLR shooters", body: "More capacity for your 5D Mark IV, 6D Mark II or 90D." },
      { title: "Church media teams", body: "Keep cameras running through long services." },
    ],
    notFor:
      "If you shoot on the EOS R5 Mark II or R6 Mark III, the Canon LP-E6P (₦207,050) lets the camera run at its full performance. The LP-E6NH doesn't fit Canon cameras that use other batteries, such as the EOS R50, R10 or R100 (LP-E17) or the EOS R1 and R3.",
    specs: [
      { label: "Model", value: "Canon LP-E6NH" },
      { label: "Type", value: "Rechargeable lithium-ion battery pack" },
      { label: "Voltage", value: "7.2 V" },
      { label: "Capacity", value: "2130 mAh (LP-E6N: 1865 mAh)" },
      { label: "Compatible cameras", value: "EOS R5, R6, R6 Mark II, R7, R5 C, R, Ra, 5D Mark IV, 5DS, 5DS R, 6D Mark II, 7D Mark II, 90D, 80D and other LP-E6 / LP-E6N cameras" },
      { label: "Compatible chargers", value: "Canon LC-E6, LC-E6E; CBC-E6 car charger" },
      { label: "USB charging", value: "In-camera on supported cameras with the Canon PD-E1 USB power adapter (sold separately)" },
      { label: "Included", value: "Battery pack with terminal cover" },
    ],
    specsNote:
      "Figures are Canon's. Shots per charge depend on your camera, settings, screen use and temperature. Message us your camera model if you're unsure it fits.",
    faqs: [
      {
        q: "Will it fit my camera?",
        a: "It fits Canon cameras that take the LP-E6, LP-E6N or LP-E6NH, including the EOS R5, R6, R6 Mark II, R7, R5 C, 5D Mark IV, 6D Mark II, 7D Mark II, 90D and 80D. It doesn't fit the R50, R10, R100, R1 or R3. Message us your camera model and we'll confirm before you buy.",
      },
      {
        q: "LP-E6NH or LP-E6P?",
        a: "Both hold 2130 mAh and fit the same cameras. The LP-E6P can deliver more current, which the EOS R5 Mark II and R6 Mark III need for full performance. For every other camera, the LP-E6NH is the better-value choice.",
      },
      {
        q: "Will my old LP-E6 charger work?",
        a: "Yes. It charges in the Canon LC-E6 and LC-E6E chargers and the CBC-E6 car charger, so you don't need a new charger.",
      },
      {
        q: "Is this the original Canon battery?",
        a: "Yes. It's the genuine Canon LP-E6NH, the same pack Canon supplies with cameras such as the EOS R6 Mark II, not a third-party copy.",
      },
      {
        q: "Can I take it on a plane?",
        a: "Yes. It's far below the 100 Wh limit most airlines allow in hand luggage. Carry spares in your cabin bag, not checked luggage, and keep the terminal cover on.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "LP-E6NH",
        price: 191_500,
        includes: ["1 × Canon LP-E6NH battery pack (with terminal cover)"],
      },
    ],
  },
  {
    slug: "canon-lp-e17",
    brand: "Canon",
    name: "Canon LP-E17 Battery Pack",
    category: "Batteries",
    tagline: "A spare for Canon's compact cameras.",
    headline:
      "Canon's genuine 7.2 V, 1040 mAh lithium-ion pack for the EOS R50, R10, R100, R8, RP, M50 and Canon's compact DSLRs. Small cameras have small batteries, so a spare is the easiest way to shoot all day.",
    summary:
      "The LP-E17 powers Canon's lighter cameras, the ones creators, vloggers and new photographers love. Because these bodies are so compact, their battery is small too, and a busy day of photos and video can drain it before lunch. A genuine Canon spare fits perfectly, shows its exact remaining charge on your camera, and charges in the Canon LC-E17 charger or, on supported cameras, inside the camera over USB. Keep one charged in your bag and never cut a shoot short.",
    image: "/products/canon-lp-e17/main.jpg",
    hero: "/products/canon-lp-e17/hero.jpg",
    gallery: [
      { src: "/products/canon-lp-e17/main.jpg", alt: "Canon LP-E17 lithium-ion battery pack" },
      { src: "/products/canon-lp-e17/r50.jpg", alt: "Canon EOS R50 with RF-S 18-45mm lens, which runs on the LP-E17" },
      { src: "/products/canon-lp-e17/r8.jpg", alt: "Canon EOS R8 with RF 24-50mm lens, which runs on the LP-E17" },
      { src: "/products/canon-lp-e17/r100.jpg", alt: "Canon EOS R100 with RF-S 18-45mm lens, which runs on the LP-E17" },
    ],
    stats: [
      { value: "1040 mAh", label: "Capacity (7.2 V)" },
      { value: "15+", label: "Canon cameras it powers" },
      { value: "USB", label: "In-camera charging on supported bodies" },
      { value: "< 100 Wh", label: "Fine in airline hand luggage" },
    ],
    highlights: [
      {
        title: "Double your shooting time",
        body: "Compact cameras run through their battery fast, especially when you record video or use the screen a lot. One spare LP-E17 doubles the time you can shoot, so you can cover a whole event, a day of content or a trip without hunting for a socket.",
        image: "/products/canon-lp-e17/main.jpg",
      },
      {
        title: "Fits Canon's most popular compact cameras",
        body: "It powers the EOS R50, R10, R100, R8 and RP mirrorless cameras, the EOS M50, M50 Mark II, M6 Mark II and M5, and DSLRs such as the 250D, 200D, 850D, 800D, 77D and 760D. If your camera came with an LP-E17, this is the right spare.",
        image: "/products/canon-lp-e17/r50.jpg",
      },
      {
        title: "Charge it inside the camera",
        body: "On cameras that support direct USB charging, such as the EOS R50, R10 and R8, plug in a Canon PD-E1 USB power adapter (sold separately) and charge without taking the battery out. It also charges in the Canon LC-E17 charger that came with your camera.",
        image: "/products/canon-lp-e17/pd-e.jpg",
      },
      {
        title: "Genuine Canon, accurate readouts",
        body: "Because it's Canon's own pack, your camera shows its exact remaining charge. No surprise shutdowns in the middle of a shoot, and no warnings about unrecognised batteries or features locked by the camera.",
        image: "/products/canon-lp-e17/r8.jpg",
      },
    ],
    idealFor: [
      { title: "EOS R50, R10, R100 and R8 owners", body: "The battery your camera ships with, as a spare." },
      { title: "Vloggers and content creators", body: "Video eats battery. A spare keeps you recording." },
      { title: "Event and church photographers", body: "Cover the whole programme without stopping to charge." },
      { title: "Travellers", body: "Small, light and fine to carry in your hand luggage." },
    ],
    notFor:
      "It doesn't fit Canon cameras that use the larger LP-E6 family, such as the EOS R5, R6, R6 Mark II, R7, 90D or 5D Mark IV. For those, choose the Canon LP-E6NH (₦191,500).",
    specs: [
      { label: "Model", value: "Canon LP-E17" },
      { label: "Type", value: "Rechargeable lithium-ion battery pack" },
      { label: "Voltage", value: "7.2 V" },
      { label: "Capacity", value: "1040 mAh" },
      { label: "Compatible cameras", value: "EOS R50, R10, R100, R8, RP; EOS M50, M50 Mark II, M6 Mark II, M5, M3; EOS 250D, 200D, 850D, 800D, 77D, 760D, 750D" },
      { label: "Compatible chargers", value: "Canon LC-E17, LC-E17E, LC-E17C" },
      { label: "USB charging", value: "In-camera on supported cameras with the Canon PD-E1 USB power adapter (sold separately)" },
      { label: "Included", value: "Battery pack with terminal cover" },
    ],
    specsNote:
      "Figures are Canon's. Shots per charge depend on your camera, settings, screen use and temperature. Message us your camera model if you're unsure it fits.",
    faqs: [
      {
        q: "Will it fit my camera?",
        a: "It fits Canon cameras that take the LP-E17, including the EOS R50, R10, R100, R8, RP, M50, M50 Mark II, M6 Mark II, 250D, 200D and 850D. It doesn't fit cameras that use the LP-E6 family, such as the R6 or 90D. Message us your camera model and we'll confirm before you buy.",
      },
      {
        q: "Can I charge it in my camera?",
        a: "On the EOS R50, R10, R8 and other cameras that support USB charging, yes, with a Canon PD-E1 USB power adapter. Otherwise, use the Canon LC-E17 charger that came with your camera.",
      },
      {
        q: "Will my existing charger work?",
        a: "Yes. It charges in the Canon LC-E17, LC-E17E and LC-E17C chargers, so you don't need a new one.",
      },
      {
        q: "Is this the original Canon battery?",
        a: "Yes. It's the genuine Canon LP-E17, the same pack Canon supplies with cameras such as the EOS R50 and R8, not a third-party copy.",
      },
      {
        q: "Can I take it on a plane?",
        a: "Yes. It's far below the 100 Wh limit most airlines allow in hand luggage. Carry spares in your cabin bag, not checked luggage, and keep the terminal cover on.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "LP-E17",
        price: 121_400,
        includes: ["1 × Canon LP-E17 battery pack (with terminal cover)"],
      },
    ],
  },
  {
    slug: "canon-bp-828",
    brand: "Canon",
    name: "Canon BP-828 Battery Pack",
    category: "Batteries",
    tagline: "Longer takes for your Canon XA camcorder.",
    headline:
      "Canon's high-capacity 7.4 V, 2670 mAh intelligent lithium-ion pack for the XA60, XA65, XA70 and XA75 professional camcorders and other BP-800 series models. About 50% more capacity than the BP-820 that ships in the box.",
    summary:
      "Canon's XA camcorders come with the compact BP-820, which is fine for short jobs but runs out fast on a full church service, conference or wedding. The BP-828 is Canon's own larger pack for the same battery bay. With 2670 mAh it gives you roughly half as much recording time again per charge, so you swap less and miss less. It's a genuine Canon intelligent battery, so the camcorder shows accurate remaining time, and it charges inside the camcorder or in a Canon charger.",
    image: "/products/canon-bp-828/main.jpg",
    hero: "/products/canon-bp-828/hero.jpg",
    gallery: [
      { src: "/products/canon-bp-828/main.jpg", alt: "Canon BP-828 intelligent lithium-ion battery pack" },
      { src: "/products/canon-bp-828/xa75.jpg", alt: "Canon XA75 professional camcorder, which takes the BP-828" },
      { src: "/products/canon-bp-828/xa65.jpg", alt: "Canon XA65 professional camcorder, which takes the BP-828" },
      { src: "/products/canon-bp-828/xa75-rear.jpg", alt: "Rear view of the Canon XA75 showing where the battery fits" },
    ],
    stats: [
      { value: "2670 mAh", label: "Capacity (7.4 V)" },
      { value: "+50%", label: "More capacity than the BP-820" },
      { value: "XA60–XA75", label: "Canon's current pro camcorders" },
      { value: "< 100 Wh", label: "Fine in airline hand luggage" },
    ],
    highlights: [
      {
        title: "More recording per charge",
        body: "The BP-828 holds 2670 mAh, around 50% more than the BP-820 supplied with the XA camcorders. That means longer continuous recording on one pack, enough to get through more of a service, a seminar or a ceremony before you need to swap.",
        image: "/products/canon-bp-828/main.jpg",
      },
      {
        title: "Made for Canon's XA camcorders",
        body: "Canon lists the BP-828 as the optional high-capacity battery for the XA60, XA65, XA70 and XA75. It also fits many other camcorders in the BP-800 series family, including earlier XA models and LEGRIA / VIXIA HF G camcorders. Message us your model and we'll confirm.",
        image: "/products/canon-bp-828/xa75.jpg",
      },
      {
        title: "Accurate time remaining",
        body: "It's a genuine Canon intelligent lithium-ion battery, so the camcorder reads its charge and shows how many minutes you have left. No guessing, and no sudden shutdown in the middle of a sermon, a speech or a first dance.",
        image: "/products/canon-bp-828/xa65.jpg",
      },
      {
        title: "Charge in the camcorder or a charger",
        body: "Charge it inside your camcorder with the supplied power adapter, or in a Canon BP-800 series charger such as the CG-800 so you can charge one pack while you shoot on another. Keep a fully charged BP-828 in your bag for long days.",
        image: "/products/canon-bp-828/xa75-rear.jpg",
      },
    ],
    idealFor: [
      { title: "XA60, XA65, XA70 and XA75 owners", body: "A bigger pack than the one in the box." },
      { title: "Church media teams", body: "Record long services with fewer swaps." },
      { title: "Event and conference videographers", body: "More time on every pack through the day." },
      { title: "Schools and news crews", body: "Reliable power for run-and-gun shooting." },
    ],
    notFor:
      "It doesn't fit Canon's Cinema EOS cameras or the XF605, which use the BP-A30 (₦487,700) or BP-A60 (₦674,700), or Canon EOS stills cameras, which take batteries such as the LP-E6NH (₦191,500) or LP-E17 (₦121,400).",
    specs: [
      { label: "Model", value: "Canon BP-828" },
      { label: "Type", value: "Rechargeable intelligent lithium-ion battery pack" },
      { label: "Voltage", value: "7.4 V" },
      { label: "Capacity", value: "2670 mAh (about 19.8 Wh)" },
      { label: "Compatible camcorders", value: "XA60, XA65, XA70, XA75 (Canon-listed); also XA40, XA45, XA50, XA55, XA11, XA15, XA20, XA25 and LEGRIA / VIXIA HF G series. Check your model with us" },
      { label: "Charging", value: "In the camcorder with its power adapter, or in a Canon BP-800 series charger (such as the CG-800)" },
      { label: "Battery supplied with XA60–XA75", value: "BP-820 (the BP-828 is the larger optional pack)" },
      { label: "Included", value: "Battery pack with terminal cover" },
    ],
    specsNote:
      "Voltage and capacity are printed on Canon's pack. Recording time depends on your camcorder, resolution, screen and viewfinder use, and temperature. Message us your camcorder model if you're unsure it fits.",
    faqs: [
      {
        q: "Will it fit my camcorder?",
        a: "Canon lists it for the XA60, XA65, XA70 and XA75. It also fits many other Canon camcorders that use BP-800 series batteries, such as the XA40, XA45, XA50, XA55 and LEGRIA / VIXIA HF G models. Message us your camcorder model and we'll confirm before you buy.",
      },
      {
        q: "BP-828 or the BP-820 that came with my camcorder?",
        a: "Both fit the same battery bay. The BP-828 is larger and holds about 50% more charge, so it records for longer per pack. Many shooters keep the BP-828 on the camcorder and the BP-820 as a backup.",
      },
      {
        q: "How do I charge it?",
        a: "Charge it inside the camcorder with the power adapter that came with it, or in a Canon BP-800 series charger so you can keep shooting while a spare charges.",
      },
      {
        q: "Is this the original Canon battery?",
        a: "Yes. It's the genuine Canon BP-828, not a third-party copy.",
      },
      {
        q: "Can I take it on a plane?",
        a: "Yes. At about 20 Wh it's far below the 100 Wh limit most airlines allow in hand luggage. Carry spares in your cabin bag, not checked luggage, and keep the terminal cover on.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "BP-828",
        price: 207_050,
        includes: ["1 × Canon BP-828 battery pack (with terminal cover)"],
      },
    ],
  },
  {
    slug: "canon-eos-c80",
    brand: "Canon",
    name: "Canon EOS C80 (Body)",
    category: "Camcorders",
    tagline: "Full-frame cinema in a camera you can carry all day.",
    headline:
      "Canon's compact 6K full-frame cinema camera with an RF mount. Internal 6K RAW, 4K 120P, 16 stops of dynamic range, triple base ISO, Dual Pixel autofocus, built-in ND filters, SDI and twin mini-XLR inputs in a 1.3 kg body.",
    summary:
      "The EOS C80 puts the image quality of Canon's bigger cinema cameras into a body small enough for a gimbal, a shoulder rig or a long day handheld. Its 6K full-frame stacked sensor records RAW internally to ordinary SD cards, or crisp 10-bit 4K oversampled from 6K. Triple base ISO keeps night scenes and dim church halls clean, Dual Pixel CMOS AF II locks on to faces and eyes, and the built-in ND filters let you shoot wide open in bright sun. Pro sound, SDI and HDMI out, timecode and live streaming are all built in, so it's ready for weddings, documentaries, commercials and live events.",
    image: "/products/canon-eos-c80/main.jpg",
    hero: "/products/canon-eos-c80/hero.jpg",
    gallery: [
      { src: "/products/canon-eos-c80/main.jpg", alt: "Canon EOS C80 full-frame cinema camera, front three-quarter view" },
      { src: "/products/canon-eos-c80/front.jpg", alt: "Front of the Canon EOS C80 showing the RF mount and full-frame sensor" },
      { src: "/products/canon-eos-c80/back.jpg", alt: "Back of the Canon EOS C80 with its 3.5-inch flip-out touch screen" },
      { src: "/products/canon-eos-c80/top.jpg", alt: "Top of the Canon EOS C80 with its multi-function shoe and controls" },
    ],
    stats: [
      { value: "6K", label: "Full-frame RAW, recorded inside" },
      { value: "16 stops", label: "Dynamic range" },
      { value: "4K 120P", label: "Slow motion" },
      { value: "1.3 kg", label: "Body only" },
    ],
    highlights: [
      {
        title: "6K full-frame, straight to SD cards",
        body: "A 6K back-illuminated stacked full-frame sensor and Canon's DIGIC DV7 processor record 12-bit Cinema RAW Light internally, with no external recorder. Or shoot 10-bit 4:2:2 4K that's oversampled from 6K for extra detail. With 16 stops of dynamic range, bright windows and dark corners both hold detail.",
        image: "/products/canon-eos-c80/sensor.jpg",
      },
      {
        title: "Clean in low light with triple base ISO",
        body: "Three base ISOs (800, 3200 and 12800 in Canon Log and RAW) let you pick the cleanest setting for the light you have, from sunny outdoor shoots to candle-lit receptions and dim church halls. The built-in mechanical ND filter (2 to 10 stops) lets you keep a wide aperture in bright sun.",
        image: "/products/canon-eos-c80/main.jpg",
      },
      {
        title: "Autofocus that keeps up",
        body: "Dual Pixel CMOS AF II covers about 100% of the frame and recognises people, faces, eyes and animals. Pair it with 4K at up to 120P and 2K at 180P for smooth slow motion that stays sharp, even when your subject moves fast.",
        image: "/products/canon-eos-c80/af.jpg",
      },
      {
        title: "Pro audio and connections built in",
        body: "Two mini-XLR inputs with 48 V phantom power, physical level dials, a 3.5 mm mic input and 4-channel 24-bit audio. Send video out over 12G-SDI and HDMI at the same time, sync with BNC timecode, and control or stream over Ethernet and built-in Wi-Fi, with SRT support for live streaming.",
        image: "/products/canon-eos-c80/audio.jpg",
      },
    ],
    idealFor: [
      { title: "Wedding and event filmmakers", body: "Cinema images in a body light enough for a gimbal." },
      { title: "Documentary and corporate crews", body: "Pro audio, timecode and long takes on SD cards." },
      { title: "Church and live production teams", body: "SDI out, streaming and clean low-light footage." },
      { title: "Music video and commercial shooters", body: "6K RAW, 120P slow motion and full-frame depth." },
    ],
    notFor:
      "This is the body only, so you'll need RF lenses (or EF lenses with Canon's EF-EOS R adapter). If you want a fixed-lens, point-and-shoot camcorder with a built-in zoom, look at Canon's XF or XA camcorders instead. Spare batteries: the Canon BP-A30 (₦487,700) and BP-A60 (₦674,700) also fit.",
    specs: [
      { label: "Sensor", value: "35mm full-frame back-illuminated stacked CMOS, about 26.7 MP total (up to 19.0 MP effective)" },
      { label: "Processor", value: "DIGIC DV7" },
      { label: "Lens mount", value: "Canon RF (EF lenses with the EF-EOS R adapter)" },
      { label: "Recording formats", value: "Cinema RAW Light, XF-AVC, XF-HEVC S, XF-AVC S" },
      { label: "Max resolution and frame rates", value: "6K 30P RAW (6000 × 3164); 4K up to 120P; 2K up to 180P (about 6% crop above 100P in Super 35 mode)" },
      { label: "Dynamic range", value: "16 stops" },
      { label: "Base ISO", value: "800 / 3200 / 12800 (Canon Log 2, Log 3, RAW); ISO 160–25600, extended 100–102400" },
      { label: "Autofocus", value: "Dual Pixel CMOS AF II with people, eye and animal detection" },
      { label: "ND filter", value: "Built-in mechanical, 2 / 4 / 6 stops (8 and 10 stops with extender)" },
      { label: "Screen", value: "3.5-inch, 2.76-million-dot high-brightness touch LCD" },
      { label: "Audio", value: "2 × mini-XLR with 48 V phantom power, 3.5 mm mic input; 4-channel 24-bit/48 kHz Linear PCM" },
      { label: "Outputs and connections", value: "12G-SDI (BNC), HDMI Type-A, BNC timecode in/out, headphone, Ethernet, built-in Wi-Fi, REMOTE A" },
      { label: "Recording media", value: "2 × SD card slots (double, relay and proxy recording)" },
      { label: "Battery", value: "Canon BP-A30N; BP-A60N, BP-A30 and BP-A60 also fit" },
      { label: "Dimensions", value: "About 160 × 137.4 × 116 mm" },
      { label: "Weight", value: "About 1300 g (body)" },
    ],
    specsNote:
      "Specifications are Canon's. Frame rates and bit rates depend on recording format and sensor mode. Message us to confirm exactly what's in the box with your order.",
    faqs: [
      {
        q: "Does it come with a lens?",
        a: "No. This is the body only. It takes Canon RF lenses, and EF lenses fit with Canon's EF-EOS R adapter, so you can use the Canon lenses you already own. Message us if you'd like a lens quoted with it.",
      },
      {
        q: "What memory cards do I need?",
        a: "It records to SD cards in two slots. For 6K RAW and high-bit-rate 4K, use fast UHS-II V90 cards. Lighter formats such as XF-HEVC S work on V60 cards. The second slot can record a backup copy at the same time.",
      },
      {
        q: "Which batteries does it use?",
        a: "Canon lists the BP-A30N as its battery and also supports the BP-A60N, BP-A30 and BP-A60. If you already shoot a Canon C70, C300 Mark III or XF605, your batteries fit. We sell the BP-A30 (₦487,700) and BP-A60 (₦674,700).",
      },
      {
        q: "Can I plug in professional microphones?",
        a: "Yes. It has two mini-XLR inputs with 48 V phantom power and a 3.5 mm mic input, with physical level dials for channels 1 and 2. Standard XLR microphones connect with mini-XLR adapter cables, or use a wireless system such as the Rode Wireless PRO or DJI Mic.",
      },
      {
        q: "Can I use it for live streaming?",
        a: "Yes. Send clean video out over 12G-SDI or HDMI to a switcher, or stream over the network using the built-in Ethernet and Wi-Fi with SRT support.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "body",
        name: "EOS C80 body",
        price: 6_300_000,
        includes: [
          "1 × Canon EOS C80 body",
          "Canon BP-A30N battery and power adapter (standard Canon box contents; confirmed when you order)",
        ],
      },
    ],
  },
  {
    slug: "canon-xf705",
    brand: "Canon",
    name: "Canon XF705",
    category: "Camcorders",
    tagline: "4K 10-bit broadcast camcorder with 12G-SDI",
    headline: "Broadcast 4K HDR in one shoulder-free body.",
    summary: "Canon's flagship 1-inch camcorder records 4K UHD 4:2:2 10-bit in XF-HEVC, with HLG and PQ HDR, Canon Log 3, a 15x zoom and 12G-SDI out. It is built for news, events and broadcast work where the footage goes straight to air or a grade.",
    image: "/products/canon-xf705/main.jpg",
    hero: "/products/canon-xf705/hero.jpg",
    gallery: [
      {
        src: "/products/canon-xf705/main.jpg",
        alt: "Canon XF705 camcorder, side view",
      },
      {
        src: "/products/canon-xf705/g1.jpg",
        alt: "Canon XF705 lens close-up",
      },
      {
        src: "/products/canon-xf705/g2.jpg",
        alt: "Canon XF705 body, three-quarter view",
      },
      {
        src: "/products/canon-xf705/g3.jpg",
        alt: "Shooter filming with the Canon XF705 on a snowy mountain",
      },
    ],
    stats: [
      {
        value: "4K 10-bit",
        label: "4:2:2 XF-HEVC",
      },
      {
        value: "15x",
        label: "optical zoom",
      },
      {
        value: "12G-SDI",
        label: "single-cable 4K out",
      },
      {
        value: "1.0-inch",
        label: "CMOS sensor",
      },
    ],
    highlights: [
      {
        title: "15x zoom, 1-inch sensor",
        body: "A 25.5–382.5 mm (35 mm equivalent) lens on a 1.0-inch sensor covers wide shots to tight close-ups without changing lenses.",
        image: "/products/canon-xf705/h1.jpg",
      },
      {
        title: "Controls where you need them",
        body: "Dedicated buttons, a 4.0-inch touch LCD and a tilting viewfinder keep settings within reach while you shoot.",
        image: "/products/canon-xf705/h2.jpg",
      },
      {
        title: "HDR straight from the camera",
        body: "Record HLG or PQ HDR, or Canon Log 3 for grading, at 4:2:2 10-bit in XF-HEVC.",
        image: "/products/canon-xf705/h3.jpg",
      },
      {
        title: "Built for the field",
        body: "Five-axis image stabilisation, Dual Pixel autofocus and two XLR inputs mean one person can run a whole shoot.",
        image: "/products/canon-xf705/h4.jpg",
      },
    ],
    idealFor: [
      {
        title: "Broadcast news",
        body: "12G-SDI and 10-bit HDR fit straight into a broadcast workflow.",
      },
      {
        title: "Events and conferences",
        body: "Long zoom, reliable autofocus and dual SD slots for long recordings.",
      },
      {
        title: "Documentary",
        body: "One-operator body with pro audio and a lens that covers every shot.",
      },
      {
        title: "HDR delivery",
        body: "HLG and PQ recording for HDR TV and streaming.",
      },
    ],
    notFor: "If you shoot mostly for social media, the Canon XA series records 4K in a lighter body for much less. The XF705 runs on Canon BP-A series batteries: the BP-A30 (₦487,700) and BP-A60 (₦674,700) fit.",
    specs: [
      {
        label: "Sensor",
        value: "1.0-inch CMOS, 8.29 MP effective",
      },
      {
        label: "Processor",
        value: "Dual DIGIC DV6",
      },
      {
        label: "Video",
        value: "4K UHD up to 50P/60P, 4:2:2 10-bit",
      },
      {
        label: "Codecs",
        value: "XF-HEVC (H.265), XF-AVC (H.264)",
      },
      {
        label: "HDR and log",
        value: "HLG, PQ, Canon Log 3",
      },
      {
        label: "Lens",
        value: "15x zoom, 25.5–382.5 mm (35 mm equivalent)",
      },
      {
        label: "Stabilisation",
        value: "Five-axis image stabilisation",
      },
      {
        label: "Autofocus",
        value: "Dual Pixel CMOS AF with touch AF and face detection",
      },
      {
        label: "ND filter",
        value: "Built-in ND filters",
      },
      {
        label: "Screen",
        value: "4.0-inch touch LCD, 1.23M dots",
      },
      {
        label: "Viewfinder",
        value: "Tilting EVF",
      },
      {
        label: "Outputs",
        value: "12G-SDI, HDMI",
      },
      {
        label: "Audio",
        value: "2× XLR inputs with phantom power, 4-channel recording",
      },
      {
        label: "Media",
        value: "Dual SD card slots",
      },
      {
        label: "Battery",
        value: "Canon BP-A30 (BP-A60 also fits)",
      },
    ],
    specsNote: "Specifications are Canon's. Frame rates and bit rates depend on recording format and region (PAL/NTSC). Message us to confirm exactly what's in the box with your order.",
    faqs: [
      {
        q: "Which batteries does it use?",
        a: "Canon BP-A series. The BP-A30 (₦487,700) and the longer-running BP-A60 (₦674,700) both fit. Add one to your order on WhatsApp.",
      },
      {
        q: "Can it record HDR?",
        a: "Yes. It records HLG and PQ HDR in-camera, or Canon Log 3 if you want to grade later.",
      },
      {
        q: "Is this model still made?",
        a: "Canon has replaced the XF705 with newer models, so stock is limited. Message us before you pay to confirm the unit's condition, what accessories come with it and the warranty.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "body",
        name: "Canon XF705",
        price: 10_300_000,
        includes: ["Canon XF705 camcorder", "Battery, charger, lens hood and handle unit (standard Canon box contents; confirmed when you order)"],
      },
    ],
  },
  {
    slug: "canon-xf605",
    brand: "Canon",
    name: "Canon XF605",
    category: "Camcorders",
    tagline: "4K 60P 10-bit camcorder with IP streaming",
    headline: "Canon's newest pro camcorder, ready to stream.",
    summary: "The XF605 records 4K 60P 4:2:2 10-bit on a 1-inch sensor with a 15x zoom, then sends it out over 12G-SDI, HDMI or the network. Eye, head and body detection autofocus, built-in ND and two XLR inputs make it a full broadcast kit in one hand-held body.",
    image: "/products/canon-xf605/main.jpg",
    hero: "/products/canon-xf605/hero.jpg",
    gallery: [
      {
        src: "/products/canon-xf605/main.jpg",
        alt: "Canon XF605 camcorder, three-quarter view",
      },
      {
        src: "/products/canon-xf605/g1.jpg",
        alt: "Canon XF605, front view",
      },
      {
        src: "/products/canon-xf605/g2.jpg",
        alt: "Canon XF605, side view",
      },
      {
        src: "/products/canon-xf605/g3.jpg",
        alt: "Canon XF605 in a broadcast control room",
      },
    ],
    stats: [
      {
        value: "4K 60P",
        label: "4:2:2 10-bit",
      },
      {
        value: "15x",
        label: "optical zoom",
      },
      {
        value: "Eye AF",
        label: "head and body detection",
      },
      {
        value: "IP",
        label: "streaming and remote control",
      },
    ],
    highlights: [
      {
        title: "Light enough to hold all day",
        body: "A compact body with a 15x zoom and five-axis stabilisation for steady hand-held shooting.",
        image: "/products/canon-xf605/h1.jpg",
      },
      {
        title: "Autofocus that follows people",
        body: "Dual Pixel AF with eye, head and body detection keeps the subject sharp as they move.",
        image: "/products/canon-xf605/h2.jpg",
      },
      {
        title: "Control it from your phone",
        body: "Built-in Wi-Fi and Ethernet let you stream over IP and control the camera remotely.",
        image: "/products/canon-xf605/h3.jpg",
      },
      {
        title: "Big touch screen",
        body: "A 3.5-inch touch LCD and an OLED viewfinder make focus and menus quick.",
        image: "/products/canon-xf605/h4.jpg",
      },
    ],
    idealFor: [
      {
        title: "Live streaming",
        body: "IP streaming and network control for churches, events and studios.",
      },
      {
        title: "Broadcast news",
        body: "12G-SDI, timecode and 10-bit recording for TV workflows.",
      },
      {
        title: "Events and weddings",
        body: "Reliable autofocus and dual SD slots for long days.",
      },
      {
        title: "Corporate video",
        body: "One operator can run sound, picture and streaming.",
      },
    ],
    notFor: "If you need interchangeable lenses or a shallow cinema look, a Cinema EOS camera like the C70 or C80 suits you better. The XF605 uses Canon BP-A series batteries: the BP-A30 (₦487,700) and BP-A60 (₦674,700) fit.",
    specs: [
      {
        label: "Sensor",
        value: "1.0-inch CMOS",
      },
      {
        label: "Processor",
        value: "DIGIC DV7",
      },
      {
        label: "Video",
        value: "4K UHD up to 60P, 4:2:2 10-bit",
      },
      {
        label: "High frame rate",
        value: "Full HD up to 120P",
      },
      {
        label: "Codecs",
        value: "XF-AVC, XF-AVC S, XF-HEVC S",
      },
      {
        label: "HDR and log",
        value: "HLG, PQ, Canon Log 3",
      },
      {
        label: "Lens",
        value: "15x optical zoom",
      },
      {
        label: "Stabilisation",
        value: "Five-axis image stabilisation",
      },
      {
        label: "ND filter",
        value: "Built-in ND: 1/4, 1/16, 1/64",
      },
      {
        label: "Autofocus",
        value: "Dual Pixel CMOS AF with eye, head and body detection",
      },
      {
        label: "Screen",
        value: "3.5-inch touch LCD",
      },
      {
        label: "Viewfinder",
        value: "OLED EVF",
      },
      {
        label: "Outputs",
        value: "12G-SDI, HDMI, timecode",
      },
      {
        label: "Network",
        value: "Wi-Fi and Ethernet, IP streaming",
      },
      {
        label: "Audio",
        value: "2× XLR inputs, multi-function shoe",
      },
      {
        label: "Media",
        value: "Dual SD card slots",
      },
      {
        label: "Battery",
        value: "Canon BP-A30 (BP-A60 also fits)",
      },
    ],
    specsNote: "Specifications are Canon's. Frame rates and bit rates depend on recording format and region (PAL/NTSC). Message us to confirm exactly what's in the box with your order.",
    faqs: [
      {
        q: "Can I stream directly from the camera?",
        a: "Yes. The XF605 streams over IP using its Ethernet port or Wi-Fi, so you don't need a separate encoder for many setups.",
      },
      {
        q: "Which batteries does it use?",
        a: "Canon BP-A series. The BP-A30 (₦487,700) and the longer-running BP-A60 (₦674,700) both fit.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "body",
        name: "Canon XF605",
        price: 5_560_000,
        includes: ["Canon XF605 camcorder", "Battery, charger, lens hood and handle unit (standard Canon box contents; confirmed when you order)"],
      },
    ],
  },
  {
    slug: "canon-xf400",
    brand: "Canon",
    name: "Canon XF400",
    category: "Camcorders",
    tagline: "Compact 4K camcorder with 1-inch sensor and XLR",
    headline: "Pro 4K in a body you can carry anywhere.",
    summary: "The XF400 puts a 1-inch sensor, 15x zoom, Dual Pixel autofocus and two XLR inputs into a compact body. It records 4K 50P/60P to dual SD cards and Full HD up to 120P for slow motion.",
    image: "/products/canon-xf400/main.jpg",
    hero: "/products/canon-xf400/hero.jpg",
    gallery: [
      {
        src: "/products/canon-xf400/main.jpg",
        alt: "Canon XF405 camcorder pictured, which shares the XF400 body",
      },
      {
        src: "/products/canon-xf400/g1.jpg",
        alt: "Canon XF405 pictured (same body as the XF400), front three-quarter view",
      },
      {
        src: "/products/canon-xf400/g2.jpg",
        alt: "Canon XF405 pictured (same body as the XF400), side view",
      },
      {
        src: "/products/canon-xf400/g3.jpg",
        alt: "Shooter filming by the water with the Canon XF405 (same body as the XF400)",
      },
    ],
    stats: [
      {
        value: "4K 60P",
        label: "MP4 recording",
      },
      {
        value: "15x",
        label: "optical zoom",
      },
      {
        value: "1.0-inch",
        label: "CMOS sensor",
      },
      {
        value: "2× XLR",
        label: "pro audio inputs",
      },
    ],
    highlights: [
      {
        title: "15x zoom on a 1-inch sensor",
        body: "Covers wide shots to tight close-ups with better low-light quality than small-sensor camcorders.",
        image: "/products/canon-xf400/h1.jpg",
      },
      {
        title: "Touch to focus",
        body: "Dual Pixel autofocus with a touch LCD lets you pull focus with a tap.",
        image: "/products/canon-xf400/h2.jpg",
      },
      {
        title: "Hands-on controls",
        body: "Dedicated buttons and rings for iris, focus and zoom, plus a handle with two XLR inputs.",
        image: "/products/canon-xf400/h3.jpg",
      },
      {
        title: "Everything in the box",
        body: "Comes with the handle, lens hood, battery and charger, so you can start shooting the day it arrives.",
        image: "/products/canon-xf400/h4.jpg",
      },
    ],
    idealFor: [
      {
        title: "Weddings and events",
        body: "Long zoom, dual SD slots and good low-light quality.",
      },
      {
        title: "Church and school media",
        body: "Easy to use with dependable autofocus.",
      },
      {
        title: "Documentary",
        body: "Compact body with pro audio for one-person crews.",
      },
      {
        title: "Slow motion",
        body: "Full HD up to 120P.",
      },
    ],
    notFor: "The XF400 has no SDI output. If you need SDI, look at the XF605 or XA75. It runs on Canon BP-800 series batteries: a spare BP-828 (₦207,050) gives longer recording.",
    specs: [
      {
        label: "Sensor",
        value: "1.0-inch CMOS",
      },
      {
        label: "Processor",
        value: "DIGIC DV6",
      },
      {
        label: "Video",
        value: "4K UHD up to 50P/60P, MP4 4:2:0 8-bit, up to 150 Mbps",
      },
      {
        label: "High frame rate",
        value: "Full HD up to 120P",
      },
      {
        label: "Lens",
        value: "15x optical zoom",
      },
      {
        label: "Stabilisation",
        value: "Five-axis image stabilisation",
      },
      {
        label: "ND filter",
        value: "Built-in ND: 1/4, 1/16, 1/64",
      },
      {
        label: "Autofocus",
        value: "Dual Pixel CMOS AF with touch AF",
      },
      {
        label: "Screen",
        value: "Touch LCD",
      },
      {
        label: "Outputs",
        value: "HDMI (no SDI)",
      },
      {
        label: "Audio",
        value: "2× XLR inputs on the handle",
      },
      {
        label: "Infrared",
        value: "Infrared shooting mode",
      },
      {
        label: "Media",
        value: "Dual SD card slots",
      },
      {
        label: "Battery",
        value: "Canon BP-800 series (BP-828 recommended)",
      },
    ],
    specsNote: "Specifications are Canon's. Frame rates and bit rates depend on recording format and region (PAL/NTSC). Message us to confirm exactly what's in the box with your order.",
    faqs: [
      {
        q: "What's the difference between the XF400 and XF405?",
        a: "They are the same camera, except the XF405 adds a 3G-SDI output. Some photos on this page show the XF405.",
      },
      {
        q: "Which battery should I buy as a spare?",
        a: "The Canon BP-828 (₦207,050) gives the longest recording time.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "body",
        name: "Canon XF400",
        price: 3_550_000,
        includes: ["Canon XF400 camcorder", "Battery, charger, handle unit and lens hood (standard Canon box contents; confirmed when you order)"],
      },
    ],
  },
  {
    slug: "canon-eos-c300-mark-iii",
    brand: "Canon",
    name: "Canon EOS C300 Mark III",
    category: "Camcorders",
    tagline: "Super 35 4K cinema camera with Dual Gain Output",
    headline: "16+ stops of dynamic range in a modular cinema body.",
    summary: "The C300 Mark III uses Canon's Super 35 Dual Gain Output sensor for over 16 stops of dynamic range. It records Cinema RAW Light and 10-bit XF-AVC to dual CFexpress cards, with 4K up to 120P and Dual Pixel autofocus.",
    image: "/products/canon-eos-c300-mark-iii/main.jpg",
    hero: "/products/canon-eos-c300-mark-iii/hero.jpg",
    gallery: [
      {
        src: "/products/canon-eos-c300-mark-iii/main.jpg",
        alt: "Canon EOS C300 Mark III cinema camera",
      },
      {
        src: "/products/canon-eos-c300-mark-iii/g1.jpg",
        alt: "Canon EOS C300 Mark III, front view",
      },
      {
        src: "/products/canon-eos-c300-mark-iii/g2.jpg",
        alt: "Operator shooting with the Canon C300 Mark III on a gimbal",
      },
      {
        src: "/products/canon-eos-c300-mark-iii/g3.jpg",
        alt: "Canon C300 Mark III on a shoulder rig",
      },
    ],
    stats: [
      {
        value: "16+ stops",
        label: "dynamic range",
      },
      {
        value: "4K 120P",
        label: "slow motion",
      },
      {
        value: "RAW",
        label: "Cinema RAW Light",
      },
      {
        value: "Super 35",
        label: "DGO sensor",
      },
    ],
    highlights: [
      {
        title: "Built for crews",
        body: "Modular design, SDI out and timecode fit into professional film and TV sets.",
        image: "/products/canon-eos-c300-mark-iii/h1.jpg",
      },
      {
        title: "Gimbal-ready",
        body: "A compact body balances on gimbals and fits tight rigs.",
        image: "/products/canon-eos-c300-mark-iii/h2.jpg",
      },
      {
        title: "Rig it your way",
        body: "Top handle, LM-V2 touch monitor and accessory points let you build the camera for each job.",
        image: "/products/canon-eos-c300-mark-iii/h3.jpg",
      },
      {
        title: "Clean highlights and shadows",
        body: "Dual Gain Output reads each pixel twice, keeping detail in bright skies and dark shadows in the same shot.",
        image: "/products/canon-eos-c300-mark-iii/h4.jpg",
      },
    ],
    idealFor: [
      {
        title: "Feature films and series",
        body: "RAW recording and wide dynamic range for heavy grading.",
      },
      {
        title: "Commercials and music videos",
        body: "4K 120P slow motion and Cinema EOS colour.",
      },
      {
        title: "Documentary",
        body: "Dual Pixel AF and ND filters for fast, small crews.",
      },
      {
        title: "Broadcast",
        body: "12G-SDI, timecode and 10-bit XF-AVC.",
      },
    ],
    notFor: "If you want a lighter camera for solo work, the Canon C70 or C80 offers much of the same image in a smaller body. The C300 Mark III uses Canon BP-A series batteries: the BP-A30 (₦487,700) and BP-A60 (₦674,700) fit.",
    specs: [
      {
        label: "Sensor",
        value: "Super 35 4K Dual Gain Output CMOS",
      },
      {
        label: "Dynamic range",
        value: "16+ stops",
      },
      {
        label: "Processor",
        value: "DIGIC DV7",
      },
      {
        label: "Recording",
        value: "Cinema RAW Light, XF-AVC 10-bit",
      },
      {
        label: "Frame rates",
        value: "4K up to 120P; 2K up to 180P (crop)",
      },
      {
        label: "Media",
        value: "Dual CFexpress Type B",
      },
      {
        label: "Lens mount",
        value: "Canon EF (PL interchangeable)",
      },
      {
        label: "Autofocus",
        value: "Dual Pixel CMOS AF",
      },
      {
        label: "ND filter",
        value: "Built-in motorised ND, 2 to 10 stops",
      },
      {
        label: "Monitor",
        value: "LM-V2 4.3-inch touch LCD",
      },
      {
        label: "Outputs",
        value: "12G-SDI, HDMI, timecode",
      },
      {
        label: "Audio",
        value: "XLR inputs on the monitor unit",
      },
      {
        label: "Battery",
        value: "Canon BP-A30 (BP-A60 also fits)",
      },
    ],
    specsNote: "Specifications are Canon's. Frame rates and bit rates depend on recording format and region (PAL/NTSC). Message us to confirm exactly what's in the box with your order.",
    faqs: [
      {
        q: "Does it come with a lens?",
        a: "No, the price is for the body. It takes Canon EF lenses, and the mount can be changed to PL.",
      },
      {
        q: "What cards do I need?",
        a: "CFexpress Type B for RAW and high-bit-rate recording.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "body",
        name: "Canon EOS C300 Mark III body",
        price: 10_000_000,
        includes: ["Canon EOS C300 Mark III body", "LM-V2 monitor, handle, battery and charger (standard Canon box contents; confirmed when you order)"],
      },
    ],
  },
  {
    slug: "canon-eos-c200",
    brand: "Canon",
    name: "Canon EOS C200",
    category: "Camcorders",
    tagline: "Super 35 4K cinema camera with internal RAW",
    headline: "4K RAW recording in a compact cinema body.",
    summary: "The C200 records Cinema RAW Light 4K up to 60P internally to CFast 2.0, or MP4 to SD cards. Its Super 35 sensor gives 15 stops of dynamic range, with Dual Pixel autofocus and built-in ND filters.",
    image: "/products/canon-eos-c200/main.jpg",
    hero: "/products/canon-eos-c200/hero.jpg",
    gallery: [
      {
        src: "/products/canon-eos-c200/main.jpg",
        alt: "Canon EOS C200 cinema camera, three-quarter view",
      },
      {
        src: "/products/canon-eos-c200/g1.jpg",
        alt: "Canon EOS C200, dark three-quarter view",
      },
      {
        src: "/products/canon-eos-c200/g2.jpg",
        alt: "Canon EOS C200 filming a colour powder scene",
      },
      {
        src: "/products/canon-eos-c200/g3.jpg",
        alt: "Musician being filmed with the Canon EOS C200 on a gimbal",
      },
    ],
    stats: [
      {
        value: "4K RAW",
        label: "Cinema RAW Light",
      },
      {
        value: "15 stops",
        label: "dynamic range",
      },
      {
        value: "120P",
        label: "Full HD slow motion",
      },
      {
        value: "Super 35",
        label: "CMOS sensor",
      },
    ],
    highlights: [
      {
        title: "RAW ready to grade",
        body: "Cinema RAW Light keeps the files flexible for colour grading without huge file sizes.",
        image: "/products/canon-eos-c200/h1.jpg",
      },
      {
        title: "Music videos and promos",
        body: "Dual Pixel AF and gimbal-friendly size suit fast-moving shoots.",
        image: "/products/canon-eos-c200/h2.jpg",
      },
      {
        title: "Strong colour",
        body: "Canon's colour science gives natural skin tones straight out of camera.",
        image: "/products/canon-eos-c200/h3.jpg",
      },
      {
        title: "Compact cinema body",
        body: "Modular handle, LM-V1 monitor and grip let you go small or fully rigged.",
        image: "/products/canon-eos-c200/h4.jpg",
      },
    ],
    idealFor: [
      {
        title: "Music videos",
        body: "Internal RAW and slow motion.",
      },
      {
        title: "Short films",
        body: "Cinema image quality at a lower price than the C300 series.",
      },
      {
        title: "Commercials",
        body: "Clean 4K footage with room to grade.",
      },
      {
        title: "Documentary",
        body: "MP4 to SD for long, light recording days.",
      },
    ],
    notFor: "If you need 10-bit compressed recording without RAW, the C70 or C80 handle that better. The C200 uses Canon BP-A series batteries: the BP-A30 (₦487,700) and BP-A60 (₦674,700) fit.",
    specs: [
      {
        label: "Sensor",
        value: "Super 35 CMOS, 8.85 MP effective",
      },
      {
        label: "Dynamic range",
        value: "15 stops",
      },
      {
        label: "Processor",
        value: "Dual DIGIC DV6",
      },
      {
        label: "RAW",
        value: "Cinema RAW Light 4K up to 60P to CFast 2.0",
      },
      {
        label: "Compressed",
        value: "MP4 to SD cards",
      },
      {
        label: "High frame rate",
        value: "Full HD up to 120P",
      },
      {
        label: "Lens mount",
        value: "Canon EF",
      },
      {
        label: "Autofocus",
        value: "Dual Pixel CMOS AF",
      },
      {
        label: "ND filter",
        value: "Built-in ND: 2, 4, 6 stops (8 and 10 in extended mode)",
      },
      {
        label: "Monitor",
        value: "LM-V1 4-inch touch LCD",
      },
      {
        label: "Outputs",
        value: "3G-SDI, HDMI",
      },
      {
        label: "Audio",
        value: "2× XLR inputs",
      },
      {
        label: "Battery",
        value: "Canon BP-A30 (BP-A60 also fits)",
      },
    ],
    specsNote: "Specifications are Canon's. Frame rates and bit rates depend on recording format and region (PAL/NTSC). Message us to confirm exactly what's in the box with your order.",
    faqs: [
      {
        q: "What's in the kit with the lens?",
        a: "The kit adds the Canon EF 24-105mm lens, so you can start shooting without buying a separate lens.",
      },
      {
        q: "What cards do I need?",
        a: "CFast 2.0 for RAW recording and SD cards for MP4.",
      },
      {
        q: "Is this model still made?",
        a: "Canon has replaced the EOS C200 with newer models, so stock is limited. Message us before you pay to confirm the unit's condition, what accessories come with it and the warranty.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "body",
        name: "Canon EOS C200 body",
        price: 8_450_000,
        includes: ["Canon EOS C200 body", "LM-V1 monitor, handle, battery and charger (standard Canon box contents; confirmed when you order)"],
      },
      {
        id: "kit-24-105",
        name: "Canon EOS C200 with EF 24-105mm",
        price: 9_650_000,
        includes: ["Canon EOS C200 body", "Canon EF 24-105mm lens", "LM-V1 monitor, handle, battery and charger (standard Canon box contents; confirmed when you order)"],
      },
    ],
  },
  {
    slug: "canon-eos-c100-mark-ii",
    brand: "Canon",
    name: "Canon EOS C100 Mark II",
    category: "Camcorders",
    tagline: "Super 35 Full HD cinema camera with Dual Pixel AF",
    headline: "A proven cinema camera at an entry price.",
    summary: "The C100 Mark II pairs a Super 35 sensor with Dual Pixel autofocus, built-in ND filters and two XLR inputs. It records Full HD AVCHD and MP4 to dual SD cards, with Canon Log for grading.",
    image: "/products/canon-eos-c100-mark-ii/main.jpg",
    hero: "/products/canon-eos-c100-mark-ii/hero.jpg",
    gallery: [
      {
        src: "/products/canon-eos-c100-mark-ii/main.jpg",
        alt: "Canon EOS C100 Mark II cinema camera",
      },
      {
        src: "/products/canon-eos-c100-mark-ii/g1.jpg",
        alt: "Canon EOS C100 Mark II, front view",
      },
      {
        src: "/products/canon-eos-c100-mark-ii/g2.jpg",
        alt: "Canon EOS C100 Mark II, rear and viewfinder",
      },
      {
        src: "/products/canon-eos-c100-mark-ii/g3.jpg",
        alt: "Canon EOS C100 Mark II, side view with handle",
      },
    ],
    stats: [
      {
        value: "Super 35",
        label: "CMOS sensor",
      },
      {
        value: "Full HD",
        label: "up to 59.94P",
      },
      {
        value: "Dual Pixel",
        label: "autofocus",
      },
      {
        value: "2× XLR",
        label: "pro audio",
      },
    ],
    highlights: [
      {
        title: "Cinema look on a budget",
        body: "A Super 35 sensor and EF lenses give a shallow depth of field and a film look.",
        image: "/products/canon-eos-c100-mark-ii/h1.jpg",
      },
      {
        title: "Focus that keeps up",
        body: "Dual Pixel CMOS AF comes as standard on the Mark II.",
        image: "/products/canon-eos-c100-mark-ii/h2.jpg",
      },
      {
        title: "Built-in ND",
        body: "Neutral density filters let you shoot wide open in bright light.",
        image: "/products/canon-eos-c100-mark-ii/h3.jpg",
      },
      {
        title: "Ready for sound",
        body: "Two XLR inputs on the handle record professional audio straight into the camera.",
        image: "/products/canon-eos-c100-mark-ii/h4.jpg",
      },
    ],
    idealFor: [
      {
        title: "Film students",
        body: "An affordable way into cinema cameras and EF lenses.",
      },
      {
        title: "Weddings",
        body: "Cinematic Full HD with reliable autofocus.",
      },
      {
        title: "Interviews",
        body: "XLR audio and Canon Log for clean, gradable footage.",
      },
      {
        title: "Church media",
        body: "Long recording to dual SD cards.",
      },
    ],
    notFor: "The C100 Mark II records Full HD only. If you need 4K, the C200, C70 or C80 are better choices.",
    specs: [
      {
        label: "Sensor",
        value: "Super 35 CMOS",
      },
      {
        label: "Processor",
        value: "DIGIC DV4",
      },
      {
        label: "Recording",
        value: "AVCHD and MP4, Full HD up to 59.94P",
      },
      {
        label: "Media",
        value: "Dual SD card slots",
      },
      {
        label: "Lens mount",
        value: "Canon EF",
      },
      {
        label: "Autofocus",
        value: "Dual Pixel CMOS AF",
      },
      {
        label: "ND filter",
        value: "Built-in ND: 2, 4, 6 stops",
      },
      {
        label: "Screen",
        value: "3.5-inch vari-angle OLED",
      },
      {
        label: "Viewfinder",
        value: "Tilting EVF",
      },
      {
        label: "Outputs",
        value: "HDMI with timecode",
      },
      {
        label: "Audio",
        value: "2× XLR inputs on the handle",
      },
      {
        label: "Wireless",
        value: "Wi-Fi",
      },
      {
        label: "Picture",
        value: "Canon Log",
      },
      {
        label: "Battery",
        value: "Canon BP-955 type",
      },
    ],
    specsNote: "Specifications are Canon's. Frame rates and bit rates depend on recording format and region (PAL/NTSC). Message us to confirm exactly what's in the box with your order.",
    faqs: [
      {
        q: "What's in each package?",
        a: "Body only comes with a hard case and monitor. The kit adds the Canon 24-105mm USM lens. The Atomos package adds an Atomos external recorder for higher-quality recording.",
      },
      {
        q: "Does it shoot 4K?",
        a: "No. It records Full HD. Its HDMI output can feed an external recorder for better-quality files.",
      },
      {
        q: "Is this model still made?",
        a: "Canon has replaced the EOS C100 Mark II with newer models, so stock is limited. Message us before you pay to confirm the unit's condition, what accessories come with it and the warranty.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "body-case",
        name: "Body + hard case + monitor",
        price: 3_700_000,
        includes: ["Canon EOS C100 Mark II body", "Hard case", "Monitor unit", "Battery and charger (standard Canon box contents; confirmed when you order)"],
      },
      {
        id: "kit-24-105",
        name: "Kit with 24-105mm USM lens",
        price: 4_500_000,
        includes: ["Canon EOS C100 Mark II body", "Canon EF 24-105mm USM lens", "Battery and charger (standard Canon box contents; confirmed when you order)"],
      },
      {
        id: "atomos",
        name: "With Atomos recorder",
        price: 3_700_000,
        includes: ["Canon EOS C100 Mark II body", "Atomos external recorder", "Battery and charger (standard Canon box contents; confirmed when you order)"],
      },
    ],
  },
  {
    slug: "canon-eos-c100",
    brand: "Canon",
    name: "Canon EOS C100",
    category: "Camcorders",
    tagline: "Entry Super 35 cinema camera",
    headline: "The camera that started many careers.",
    summary: "The original C100 gives you a Super 35 sensor, EF lens mount, built-in ND filters and two XLR inputs at a low price. It records Full HD AVCHD to dual SD cards with Canon Log.",
    image: "/products/canon-eos-c100/main.jpg",
    hero: "/products/canon-eos-c100/hero.jpg",
    gallery: [
      {
        src: "/products/canon-eos-c100/main.jpg",
        alt: "Canon EOS C100 cinema camera",
      },
      {
        src: "/products/canon-eos-c100/g1.jpg",
        alt: "Canon EOS C100 with microphone handle",
      },
      {
        src: "/products/canon-eos-c100/g2.jpg",
        alt: "Canon EOS C100, front view showing the sensor",
      },
      {
        src: "/products/canon-eos-c100/g3.jpg",
        alt: "Canon EOS C100, rear LCD",
      },
    ],
    stats: [
      {
        value: "Super 35",
        label: "CMOS sensor",
      },
      {
        value: "Full HD",
        label: "AVCHD",
      },
      {
        value: "ND",
        label: "built-in filters",
      },
      {
        value: "2× XLR",
        label: "pro audio",
      },
    ],
    highlights: [
      {
        title: "Cinema image, small price",
        body: "A Super 35 sensor with EF lenses for a shallow, film-like look.",
        image: "/products/canon-eos-c100/h1.jpg",
      },
      {
        title: "Pro audio built in",
        body: "Two XLR inputs on the handle.",
        image: "/products/canon-eos-c100/h2.jpg",
      },
      {
        title: "Built-in ND filters",
        body: "Shoot wide open outdoors without screw-on filters.",
        image: "/products/canon-eos-c100/h3.jpg",
      },
      {
        title: "Light and compact",
        body: "Small enough for hand-held work and simple rigs.",
        image: "/products/canon-eos-c100/h4.jpg",
      },
    ],
    idealFor: [
      {
        title: "Beginners",
        body: "An affordable first cinema camera.",
      },
      {
        title: "Interviews",
        body: "Clean Full HD with XLR audio.",
      },
      {
        title: "Short films",
        body: "Super 35 look with Canon Log.",
      },
      {
        title: "Second camera",
        body: "Matches Canon colour on multi-camera shoots.",
      },
    ],
    notFor: "The original C100 records Full HD only and its autofocus is basic unless the Dual Pixel upgrade was done. For reliable autofocus, choose the C100 Mark II.",
    specs: [
      {
        label: "Sensor",
        value: "Super 35 CMOS, 8.29 MP effective",
      },
      {
        label: "Processor",
        value: "DIGIC DV III",
      },
      {
        label: "Recording",
        value: "AVCHD Full HD, 24 Mbps",
      },
      {
        label: "Media",
        value: "Dual SD card slots",
      },
      {
        label: "Lens mount",
        value: "Canon EF",
      },
      {
        label: "ND filter",
        value: "Built-in ND: 2, 4, 6 stops",
      },
      {
        label: "Screen",
        value: "3.5-inch LCD",
      },
      {
        label: "Outputs",
        value: "HDMI with timecode",
      },
      {
        label: "Audio",
        value: "2× XLR inputs on the handle",
      },
      {
        label: "Picture",
        value: "Canon Log",
      },
      {
        label: "Battery",
        value: "Canon BP-955 type",
      },
    ],
    specsNote: "Specifications are Canon's. Frame rates and bit rates depend on recording format and region (PAL/NTSC). Message us to confirm exactly what's in the box with your order.",
    faqs: [
      {
        q: "Does it have Dual Pixel autofocus?",
        a: "Not as standard. It was a paid upgrade on the original C100, so message us to check whether a unit has it.",
      },
      {
        q: "Is this model still made?",
        a: "Canon has replaced the EOS C100 with newer models, so stock is limited. Message us before you pay to confirm the unit's condition, what accessories come with it and the warranty.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "body",
        name: "Canon EOS C100 body",
        price: 2_300_000,
        includes: ["Canon EOS C100 body", "Handle, battery and charger (standard Canon box contents; confirmed when you order)"],
      },
    ],
  },
  {
    slug: "canon-eos-c500-mark-ii",
    brand: "Canon",
    name: "Canon EOS C500 Mark II",
    category: "Camcorders",
    tagline: "5.9K full-frame cinema camera",
    headline: "Full-frame 5.9K for high-end productions.",
    summary: "The C500 Mark II records 5.9K full-frame Cinema RAW Light and XF-AVC to dual CFexpress cards, with more than 15 stops of dynamic range. Its modular design and expansion units let it work hand-held or fully rigged on set.",
    image: "/products/canon-eos-c500-mark-ii/main.jpg",
    hero: "/products/canon-eos-c500-mark-ii/hero.jpg",
    gallery: [
      {
        src: "/products/canon-eos-c500-mark-ii/main.jpg",
        alt: "Canon EOS C500 Mark II cinema camera, front view",
      },
      {
        src: "/products/canon-eos-c500-mark-ii/g1.jpg",
        alt: "Canon EOS C500 Mark II with lens and monitor",
      },
      {
        src: "/products/canon-eos-c500-mark-ii/g2.jpg",
        alt: "Operator rigging the Canon EOS C500 Mark II",
      },
      {
        src: "/products/canon-eos-c500-mark-ii/g3.jpg",
        alt: "Canon EOS C500 Mark II on a car shoot with a crane",
      },
    ],
    stats: [
      {
        value: "5.9K",
        label: "full-frame sensor",
      },
      {
        value: "15+ stops",
        label: "dynamic range",
      },
      {
        value: "RAW",
        label: "Cinema RAW Light",
      },
      {
        value: "12G-SDI",
        label: "4K output",
      },
    ],
    highlights: [
      {
        title: "Full-frame sensor",
        body: "A 5.9K full-frame sensor for a shallow depth of field and wide shots with any EF lens.",
        image: "/products/canon-eos-c500-mark-ii/h1.jpg",
      },
      {
        title: "Touch monitor",
        body: "The LM-V2 touch monitor gives quick access to focus and settings.",
        image: "/products/canon-eos-c500-mark-ii/h2.jpg",
      },
      {
        title: "Expandable",
        body: "EU-V1 and EU-V2 expansion units add more SDI, genlock, timecode and power outputs.",
        image: "/products/canon-eos-c500-mark-ii/h3.jpg",
      },
      {
        title: "Controls on both sides",
        body: "Buttons on the operator and assistant sides let the crew work together.",
        image: "/products/canon-eos-c500-mark-ii/h4.jpg",
      },
    ],
    idealFor: [
      {
        title: "Feature films",
        body: "Full-frame RAW for cinema release.",
      },
      {
        title: "High-end commercials",
        body: "5.9K for reframing and VFX.",
      },
      {
        title: "Car and action shoots",
        body: "Modular body fits cranes, cars and gimbals.",
      },
      {
        title: "Netflix-level series",
        body: "RAW and wide dynamic range for heavy grading.",
      },
    ],
    notFor: "This is a camera for crews and big productions. For one-person shoots, the C70 or C80 is lighter and simpler. The C500 Mark II uses Canon BP-A series batteries: the BP-A30 (₦487,700) and BP-A60 (₦674,700) fit.",
    specs: [
      {
        label: "Sensor",
        value: "5.9K full-frame CMOS",
      },
      {
        label: "Dynamic range",
        value: "15+ stops",
      },
      {
        label: "Processor",
        value: "DIGIC DV7",
      },
      {
        label: "Recording",
        value: "Cinema RAW Light, XF-AVC",
      },
      {
        label: "Media",
        value: "Dual CFexpress Type B",
      },
      {
        label: "Lens mount",
        value: "Canon EF (PL mount available)",
      },
      {
        label: "Autofocus",
        value: "Dual Pixel CMOS AF",
      },
      {
        label: "ND filter",
        value: "Built-in ND, 2 to 10 stops",
      },
      {
        label: "Monitor",
        value: "LM-V2 4.3-inch touch LCD",
      },
      {
        label: "Outputs",
        value: "12G-SDI, timecode",
      },
      {
        label: "Expansion",
        value: "EU-V1 and EU-V2 units (optional)",
      },
      {
        label: "Audio",
        value: "XLR inputs on the monitor unit",
      },
      {
        label: "Battery",
        value: "Canon BP-A30 / BP-A60",
      },
    ],
    specsNote: "Specifications are Canon's. Frame rates and bit rates depend on recording format and region (PAL/NTSC). Message us to confirm exactly what's in the box with your order.",
    faqs: [
      {
        q: "Does it come with a lens?",
        a: "No, the price is for the body. It takes Canon EF lenses, and a PL mount is available.",
      },
      {
        q: "What cards do I need?",
        a: "CFexpress Type B cards.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "body",
        name: "Canon EOS C500 Mark II body",
        price: 12_100_500,
        includes: ["Canon EOS C500 Mark II body", "LM-V2 monitor, handle, battery and charger (standard Canon box contents; confirmed when you order)"],
      },
    ],
  },
  {
    slug: "canon-xa75",
    brand: "Canon",
    name: "Canon XA75",
    category: "Camcorders",
    tagline: "1-inch 4K camcorder with 3G-SDI and XLR",
    headline: "The XA camcorder with the best image and SDI out.",
    summary: "The XA75 pairs a 1-inch sensor with a 15x zoom, Dual Pixel autofocus and a built-in ND filter. It records 4K to dual SD cards, outputs over 3G-SDI and HDMI, and streams as a USB-C webcam.",
    image: "/products/canon-xa75/main.jpg",
    hero: "/products/canon-xa75/hero.jpg",
    gallery: [
      {
        src: "/products/canon-xa75/main.jpg",
        alt: "Canon XA75 camcorder",
      },
      {
        src: "/products/canon-xa75/g1.jpg",
        alt: "Canon XA75, side view",
      },
      {
        src: "/products/canon-xa75/g2.jpg",
        alt: "Canon XA75 with LCD open",
      },
      {
        src: "/products/canon-xa75/g3.jpg",
        alt: "Canon XA75, rear and top view",
      },
    ],
    stats: [
      {
        value: "1.0-inch",
        label: "CMOS sensor",
      },
      {
        value: "15x",
        label: "optical zoom",
      },
      {
        value: "3G-SDI",
        label: "and HDMI out",
      },
      {
        value: "2× XLR",
        label: "on the handle",
      },
    ],
    highlights: [
      {
        title: "Face tracking",
        body: "Dual Pixel AF finds and follows faces across the 3.5-inch touch screen.",
        image: "/products/canon-xa75/h1.jpg",
      },
      {
        title: "Ready for news",
        body: "SDI out and XLR audio fit straight into a broadcast or streaming setup.",
        image: "/products/canon-xa75/h2.jpg",
      },
      {
        title: "Pro audio handle",
        body: "Two XLR inputs with phantom power on a detachable handle.",
        image: "/products/canon-xa75/h3.jpg",
      },
      {
        title: "Viewfinder for bright days",
        body: "A 0.36-inch EVF when the sun washes out the screen.",
        image: "/products/canon-xa75/h4.jpg",
      },
    ],
    idealFor: [
      {
        title: "Events and weddings",
        body: "15x zoom and face-tracking autofocus for long, unpredictable days.",
      },
      {
        title: "News and interviews",
        body: "XLR audio and a handle that keeps the mic close.",
      },
      {
        title: "Church and school media",
        body: "Simple to run, with dependable autofocus.",
      },
      {
        title: "Webcam streaming",
        body: "Plug into a computer over USB-C and stream without a capture card.",
      },
    ],
    notFor: "The XA75 has no Wi-Fi or network streaming. If you need IP streaming, look at the XF605. If you don't need SDI, the XA70 is the same camera for less.",
    specs: [
      {
        label: "Sensor",
        value: "1.0-inch CMOS, 8.29 MP effective",
      },
      {
        label: "Processor",
        value: "DIGIC DV6",
      },
      {
        label: "Lens",
        value: "15x zoom, 25.5–382.5 mm (35 mm equivalent), f/2.8–4.5",
      },
      {
        label: "Stabilisation",
        value: "Optical plus electronic five-axis IS",
      },
      {
        label: "ND filter",
        value: "Built-in ND: 1/4, 1/16, 1/64",
      },
      {
        label: "Autofocus",
        value: "Dual Pixel CMOS AF with face detection and tracking",
      },
      {
        label: "Recording",
        value: "XF-AVC: 4K 25P at 160 Mbps, Full HD 50P; MP4: 4K 25P at 150 Mbps",
      },
      {
        label: "Colour",
        value: "4:2:0 8-bit internal; Canon Log 3",
      },
      {
        label: "Slow and fast motion",
        value: "Fast motion up to x1200; Full HD x0.5 slow motion",
      },
      {
        label: "Screen",
        value: "3.5-inch touch LCD, 2.76M dots",
      },
      {
        label: "Viewfinder",
        value: "0.36-inch EVF, 1.77M dots",
      },
      {
        label: "Audio",
        value: "2× XLR with 48 V phantom power on the handle, 3.5 mm mic input, 4-channel LPCM",
      },
      {
        label: "Outputs",
        value: "3G-SDI, HDMI mini (4:2:2 10-bit in Full HD), USB-C webcam (UVC), timecode",
      },
      {
        label: "Infrared",
        value: "IR mode with IR lamp in the handle",
      },
      {
        label: "Wireless",
        value: "No Wi-Fi or LAN; GPS with optional Canon GP-E2",
      },
      {
        label: "Media",
        value: "Dual SD card slots",
      },
      {
        label: "Battery",
        value: "Canon BP-820 supplied (BP-828 optional)",
      },
      {
        label: "Weight",
        value: "About 990 g body, 1,465 g with accessories",
      },
    ],
    specsNote: "Specifications are Canon's. Frame rates and bit rates depend on recording format and region (PAL/NTSC). Message us to confirm exactly what's in the box with your order.",
    faqs: [
      {
        q: "What's the difference between the XA75 and XA70?",
        a: "The XA75 adds a 3G-SDI output. Everything else is the same.",
      },
      {
        q: "Which battery should I buy as a spare?",
        a: "The camera comes with a Canon BP-820. The larger Canon BP-828 (₦207,050) fits too and records for longer.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "body",
        name: "Canon XA75",
        price: 3_200_500,
        includes: ["Canon XA75 camcorder", "Handle unit, lens hood, mic holder, BP-820 battery, USB power adapter (standard Canon box contents; confirmed when you order)"],
      },
    ],
  },
  {
    slug: "canon-xa70",
    brand: "Canon",
    name: "Canon XA70",
    category: "Camcorders",
    tagline: "1-inch 4K camcorder with XLR and USB-C streaming",
    headline: "XA75 image quality without the SDI port.",
    summary: "The XA70 is the XA75 without SDI: the same 1-inch sensor, 15x zoom, Dual Pixel autofocus and XLR handle. It outputs over HDMI and works as a USB-C webcam for streaming.",
    image: "/products/canon-xa70/main.jpg",
    hero: "/products/canon-xa70/hero.jpg",
    gallery: [
      {
        src: "/products/canon-xa70/main.jpg",
        alt: "Canon XA70 camcorder",
      },
      {
        src: "/products/canon-xa70/g1.jpg",
        alt: "Canon XA70-series camcorder, side view",
      },
      {
        src: "/products/canon-xa70/g2.jpg",
        alt: "Canon XA70, front view",
      },
      {
        src: "/products/canon-xa70/g3.jpg",
        alt: "Canon XA70, top view",
      },
    ],
    stats: [
      {
        value: "1.0-inch",
        label: "CMOS sensor",
      },
      {
        value: "15x",
        label: "optical zoom",
      },
      {
        value: "4K",
        label: "to dual SD",
      },
      {
        value: "USB-C",
        label: "webcam streaming",
      },
    ],
    highlights: [
      {
        title: "Subject detection",
        body: "Dual Pixel AF detects faces and keeps them sharp.",
        image: "/products/canon-xa70/h1.jpg",
      },
      {
        title: "Built for news crews",
        body: "Light enough for run-and-gun work.",
        image: "/products/canon-xa70/h2.jpg",
      },
      {
        title: "XLR audio",
        body: "Two XLR inputs with phantom power on the handle.",
        image: "/products/canon-xa70/h3.jpg",
      },
      {
        title: "Built-in ND",
        body: "Three ND steps let you control exposure outdoors.",
        image: "/products/canon-xa70/h4.jpg",
      },
    ],
    idealFor: [
      {
        title: "Events and weddings",
        body: "15x zoom and face-tracking autofocus for long, unpredictable days.",
      },
      {
        title: "News and interviews",
        body: "XLR audio and a handle that keeps the mic close.",
      },
      {
        title: "Church and school media",
        body: "Simple to run, with dependable autofocus.",
      },
      {
        title: "Webcam streaming",
        body: "Plug into a computer over USB-C and stream without a capture card.",
      },
    ],
    notFor: "The XA70 has no SDI output and no Wi-Fi. If you need SDI, choose the XA75.",
    specs: [
      {
        label: "Sensor",
        value: "1.0-inch CMOS, 8.29 MP effective",
      },
      {
        label: "Processor",
        value: "DIGIC DV6",
      },
      {
        label: "Lens",
        value: "15x zoom, 25.5–382.5 mm (35 mm equivalent), f/2.8–4.5",
      },
      {
        label: "Stabilisation",
        value: "Optical plus electronic five-axis IS",
      },
      {
        label: "ND filter",
        value: "Built-in ND: 1/4, 1/16, 1/64",
      },
      {
        label: "Autofocus",
        value: "Dual Pixel CMOS AF with face detection and tracking",
      },
      {
        label: "Recording",
        value: "XF-AVC: 4K 25P at 160 Mbps, Full HD 50P; MP4: 4K 25P at 150 Mbps",
      },
      {
        label: "Colour",
        value: "4:2:0 8-bit internal; Canon Log 3",
      },
      {
        label: "Slow and fast motion",
        value: "Fast motion up to x1200; Full HD x0.5 slow motion",
      },
      {
        label: "Screen",
        value: "3.5-inch touch LCD, 2.76M dots",
      },
      {
        label: "Viewfinder",
        value: "0.36-inch EVF, 1.77M dots",
      },
      {
        label: "Audio",
        value: "2× XLR with 48 V phantom power on the handle, 3.5 mm mic input, 4-channel LPCM",
      },
      {
        label: "Outputs",
        value: "HDMI mini (4:2:2 10-bit in Full HD), USB-C webcam (UVC), timecode. No SDI",
      },
      {
        label: "Infrared",
        value: "IR mode with IR lamp in the handle",
      },
      {
        label: "Wireless",
        value: "No Wi-Fi or LAN; GPS with optional Canon GP-E2",
      },
      {
        label: "Media",
        value: "Dual SD card slots",
      },
      {
        label: "Battery",
        value: "Canon BP-820 supplied (BP-828 optional)",
      },
    ],
    specsNote: "Specifications are Canon's. Frame rates and bit rates depend on recording format and region (PAL/NTSC). Message us to confirm exactly what's in the box with your order.",
    faqs: [
      {
        q: "Can I stream with it?",
        a: "Yes. Connect it to a computer over USB-C and it works as a webcam, or send HDMI to a capture card or switcher.",
      },
      {
        q: "Which battery should I buy as a spare?",
        a: "The camera comes with a Canon BP-820. The larger Canon BP-828 (₦207,050) fits too and records for longer.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "body",
        name: "Canon XA70",
        price: 2_800_000,
        includes: ["Canon XA70 camcorder", "Handle unit, lens hood, mic holder, BP-820 battery, USB power adapter (standard Canon box contents; confirmed when you order)"],
      },
    ],
  },
  {
    slug: "canon-xa65",
    brand: "Canon",
    name: "Canon XA65",
    category: "Camcorders",
    tagline: "20x 4K camcorder with 3G-SDI and XLR",
    headline: "Long reach and SDI out for studios and live work.",
    summary: "The XA65 has a 20x zoom with a bright f/1.8 aperture at the wide end, 4K recording and a 3G-SDI output. Its XLR handle and USB-C webcam mode suit corporate, church and live production work.",
    image: "/products/canon-xa65/main.jpg",
    hero: "/products/canon-xa65/hero.jpg",
    gallery: [
      {
        src: "/products/canon-xa65/main.jpg",
        alt: "Canon XA65 camcorder",
      },
      {
        src: "/products/canon-xa65/g1.jpg",
        alt: "Canon XA65, side view",
      },
      {
        src: "/products/canon-xa65/g2.jpg",
        alt: "Canon XA65, three-quarter view",
      },
      {
        src: "/products/canon-xa65/g3.jpg",
        alt: "Canon XA65 with LCD open",
      },
    ],
    stats: [
      {
        value: "20x",
        label: "optical zoom",
      },
      {
        value: "f/1.8",
        label: "at the wide end",
      },
      {
        value: "3G-SDI",
        label: "and HDMI out",
      },
      {
        value: "4K",
        label: "to dual SD",
      },
    ],
    highlights: [
      {
        title: "SDI for live production",
        body: "Connect straight to a switcher with a single BNC cable.",
        image: "/products/canon-xa65/h1.jpg",
      },
      {
        title: "Face detection",
        body: "Hybrid AF follows faces on the touch screen.",
        image: "/products/canon-xa65/h2.jpg",
      },
      {
        title: "XLR audio",
        body: "Plug professional mics into the handle.",
        image: "/products/canon-xa65/h3.jpg",
      },
      {
        title: "Dual SD slots",
        body: "Record to both cards for backup, or one after the other.",
        image: "/products/canon-xa65/h4.jpg",
      },
    ],
    idealFor: [
      {
        title: "Events",
        body: "20x zoom reaches the stage from the back of the hall.",
      },
      {
        title: "Church and school media",
        body: "Easy to use with pro audio.",
      },
      {
        title: "Interviews",
        body: "Two XLR inputs on the handle for clean sound.",
      },
      {
        title: "Low-budget 4K",
        body: "4K recording at an entry price.",
      },
    ],
    notFor: "The XA65 uses a small sensor, so for low light or a shallow look the 1-inch XA75 is better. If you don't need SDI, the XA60B is the same camera for less.",
    specs: [
      {
        label: "Sensor",
        value: "1/2.3-inch CMOS, 21.14 MP total",
      },
      {
        label: "Processor",
        value: "DIGIC DV6",
      },
      {
        label: "Lens",
        value: "20x zoom, 29.3–601 mm (35 mm equivalent), f/1.8–2.8",
      },
      {
        label: "ND filter",
        value: "Built-in gradation ND (auto/off)",
      },
      {
        label: "Autofocus",
        value: "Hybrid AF with face detection",
      },
      {
        label: "Recording",
        value: "XF-AVC: 4K 25P at 160 Mbps, Full HD 50P; MP4: 4K 25P at 150 Mbps",
      },
      {
        label: "Screen",
        value: "3.5-inch touch LCD, 2.76M dots",
      },
      {
        label: "Viewfinder",
        value: "0.36-inch EVF, 1.77M dots",
      },
      {
        label: "Audio",
        value: "2× XLR with 48 V phantom power on the handle, 3.5 mm mic input",
      },
      {
        label: "Outputs",
        value: "3G-SDI, HDMI mini, USB-C",
      },
      {
        label: "Wireless",
        value: "No Wi-Fi or LAN",
      },
      {
        label: "Media",
        value: "Dual SD card slots",
      },
      {
        label: "Battery",
        value: "Canon BP-820 supplied (BP-828 optional)",
      },
      {
        label: "Weight",
        value: "About 750 g body",
      },
    ],
    specsNote: "Specifications are Canon's. Frame rates and bit rates depend on recording format and region (PAL/NTSC). Message us to confirm exactly what's in the box with your order.",
    faqs: [
      {
        q: "What's the difference between the XA65 and XA60B?",
        a: "The XA65 adds a 3G-SDI output. Everything else is the same.",
      },
      {
        q: "Which battery should I buy as a spare?",
        a: "The camera comes with a Canon BP-820. The larger Canon BP-828 (₦207,050) fits too and records for longer.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "body",
        name: "Canon XA65",
        price: 2_950_800,
        includes: ["Canon XA65 camcorder", "Handle unit, lens hood, BP-820 battery, power adapter (standard Canon box contents; confirmed when you order)"],
      },
    ],
  },
  {
    slug: "canon-xa60b",
    brand: "Canon",
    name: "Canon XA60B",
    category: "Camcorders",
    tagline: "Affordable 20x 4K camcorder with XLR",
    headline: "4K and pro audio at the lowest XA price.",
    summary: "The XA60B gives you 4K recording, a 20x zoom, an XLR audio handle and USB-C webcam streaming for a low price. It is the XA65 without the SDI port.",
    image: "/products/canon-xa60b/main.jpg",
    hero: "/products/canon-xa60b/hero.jpg",
    gallery: [
      {
        src: "/products/canon-xa60b/main.jpg",
        alt: "Canon XA60B camcorder",
      },
      {
        src: "/products/canon-xa60b/g1.jpg",
        alt: "Canon XA60-series camcorder, side view",
      },
      {
        src: "/products/canon-xa60b/g2.jpg",
        alt: "Canon XA60-series camcorder, left side",
      },
      {
        src: "/products/canon-xa60b/g3.jpg",
        alt: "Canon XA60-series camcorder, front side",
      },
    ],
    stats: [
      {
        value: "20x",
        label: "optical zoom",
      },
      {
        value: "4K",
        label: "to dual SD",
      },
      {
        value: "2× XLR",
        label: "on the handle",
      },
      {
        value: "USB-C",
        label: "webcam streaming",
      },
    ],
    highlights: [
      {
        title: "XLR audio",
        body: "Two professional mic inputs on the handle.",
        image: "/products/canon-xa60b/h1.jpg",
      },
      {
        title: "Dual SD slots",
        body: "Back up as you record.",
        image: "/products/canon-xa60b/h2.jpg",
      },
      {
        title: "Face detection",
        body: "Hybrid AF follows faces on the touch screen.",
        image: "/products/canon-xa60b/h3.jpg",
      },
      {
        title: "Light and simple",
        body: "About 740 g, easy for one person to run all day.",
        image: "/products/canon-xa60b/h4.jpg",
      },
    ],
    idealFor: [
      {
        title: "Events",
        body: "20x zoom reaches the stage from the back of the hall.",
      },
      {
        title: "Church and school media",
        body: "Easy to use with pro audio.",
      },
      {
        title: "Interviews",
        body: "Two XLR inputs on the handle for clean sound.",
      },
      {
        title: "Low-budget 4K",
        body: "4K recording at an entry price.",
      },
    ],
    notFor: "The XA60B has no SDI output. If you need SDI for live production, choose the XA65.",
    specs: [
      {
        label: "Sensor",
        value: "1/2.3-inch CMOS, 21.14 MP total",
      },
      {
        label: "Processor",
        value: "DIGIC DV6",
      },
      {
        label: "Lens",
        value: "20x zoom, 29.3–601 mm (35 mm equivalent), f/1.8–2.8",
      },
      {
        label: "ND filter",
        value: "Built-in gradation ND (auto/off)",
      },
      {
        label: "Autofocus",
        value: "Hybrid AF with face detection",
      },
      {
        label: "Recording",
        value: "XF-AVC: 4K 25P at 160 Mbps, Full HD 50P; MP4: 4K 25P at 150 Mbps",
      },
      {
        label: "Screen",
        value: "3.5-inch touch LCD, 2.76M dots",
      },
      {
        label: "Viewfinder",
        value: "0.36-inch EVF, 1.77M dots",
      },
      {
        label: "Audio",
        value: "2× XLR with 48 V phantom power on the handle, 3.5 mm mic input",
      },
      {
        label: "Outputs",
        value: "HDMI mini, USB-C. No SDI",
      },
      {
        label: "Wireless",
        value: "No Wi-Fi or LAN",
      },
      {
        label: "Media",
        value: "Dual SD card slots",
      },
      {
        label: "Battery",
        value: "Canon BP-820 supplied (BP-828 optional)",
      },
      {
        label: "Weight",
        value: "About 740 g body",
      },
    ],
    specsNote: "Specifications are Canon's. Frame rates and bit rates depend on recording format and region (PAL/NTSC). Message us to confirm exactly what's in the box with your order.",
    faqs: [
      {
        q: "Can I stream with it?",
        a: "Yes. Connect it to a computer over USB-C and it works as a webcam, or send HDMI to a capture card.",
      },
      {
        q: "Which battery should I buy as a spare?",
        a: "The camera comes with a Canon BP-820. The larger Canon BP-828 (₦207,050) fits too and records for longer.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "body",
        name: "Canon XA60B",
        price: 1_850_000,
        includes: ["Canon XA60B camcorder", "Handle unit, lens hood, BP-820 battery, power adapter (standard Canon box contents; confirmed when you order)"],
      },
    ],
  },
  {
    slug: "canon-xa55",
    brand: "Canon",
    name: "Canon XA55",
    category: "Camcorders",
    tagline: "1-inch 4K camcorder with 3G-SDI and Dual Pixel AF",
    headline: "1-inch 4K with SDI at a mid-range price.",
    summary: "The XA55 records 4K on a 1-inch sensor with a 15x zoom, Dual Pixel autofocus and five-axis stabilisation. Its handle has two XLR inputs, and a 3G-SDI output connects it to switchers and broadcast kit.",
    image: "/products/canon-xa55/main.jpg",
    hero: "/products/canon-xa55/hero.jpg",
    gallery: [
      {
        src: "/products/canon-xa55/main.jpg",
        alt: "Canon XA55 camcorder",
      },
      {
        src: "/products/canon-xa55/g1.jpg",
        alt: "Canon XA55, three-quarter view",
      },
      {
        src: "/products/canon-xa55/g2.jpg",
        alt: "Canon XA55, side view",
      },
      {
        src: "/products/canon-xa55/g3.jpg",
        alt: "Canon XA55, top view",
      },
    ],
    stats: [
      {
        value: "1.0-inch",
        label: "CMOS sensor",
      },
      {
        value: "15x",
        label: "optical zoom",
      },
      {
        value: "3G-SDI",
        label: "and HDMI out",
      },
      {
        value: "Dual Pixel",
        label: "autofocus",
      },
    ],
    highlights: [
      {
        title: "1-inch sensor",
        body: "A larger sensor for cleaner footage in low light.",
        image: "/products/canon-xa55/h1.jpg",
      },
      {
        title: "Compact body",
        body: "Small enough to carry all day.",
        image: "/products/canon-xa55/h2.jpg",
      },
      {
        title: "Face detection",
        body: "Dual Pixel AF finds faces and keeps them sharp on the touch screen.",
        image: "/products/canon-xa55/h3.jpg",
      },
      {
        title: "Dual SD slots",
        body: "Record to both cards for backup, or one after the other.",
        image: "/products/canon-xa55/h4.jpg",
      },
    ],
    idealFor: [
      {
        title: "Weddings and events",
        body: "1-inch sensor handles dim halls better than small-sensor camcorders.",
      },
      {
        title: "Documentary",
        body: "Compact body with XLR audio for one-person crews.",
      },
      {
        title: "Church and school media",
        body: "Dual Pixel AF keeps speakers sharp.",
      },
      {
        title: "Slow motion",
        body: "Full HD high frame rates for slow-motion shots.",
      },
    ],
    notFor: "Canon has replaced the XA55 with the XA75, which adds Canon Log 3 and USB-C streaming. If you don't need SDI, the XA50 is the same camera without it.",
    specs: [
      {
        label: "Sensor",
        value: "1.0-inch CMOS",
      },
      {
        label: "Processor",
        value: "DIGIC DV6",
      },
      {
        label: "Lens",
        value: "15x optical zoom",
      },
      {
        label: "Stabilisation",
        value: "Five-axis image stabilisation",
      },
      {
        label: "ND filter",
        value: "Built-in ND: 1/4, 1/16, 1/64",
      },
      {
        label: "Autofocus",
        value: "Dual Pixel CMOS AF with touch AF and face detection",
      },
      {
        label: "Recording",
        value: "4K UHD MP4 up to 30P; Full HD MP4",
      },
      {
        label: "Slow motion",
        value: "Full HD high frame rate recording",
      },
      {
        label: "Screen",
        value: "Touch LCD",
      },
      {
        label: "Viewfinder",
        value: "Tilting EVF",
      },
      {
        label: "Audio",
        value: "2× XLR inputs on the handle",
      },
      {
        label: "Infrared",
        value: "Infrared shooting mode",
      },
      {
        label: "Outputs",
        value: "3G-SDI, HDMI",
      },
      {
        label: "Media",
        value: "Dual SD card slots",
      },
      {
        label: "Battery",
        value: "Canon BP-820 supplied (BP-828 optional)",
      },
    ],
    specsNote: "Specifications are Canon's. Frame rates and bit rates depend on recording format and region (PAL/NTSC). Message us to confirm exactly what's in the box with your order.",
    faqs: [
      {
        q: "What's the difference between the XA55 and XA50?",
        a: "The XA55 adds a 3G-SDI output. Everything else is the same.",
      },
      {
        q: "Which battery should I buy as a spare?",
        a: "The camera comes with a Canon BP-820. The larger Canon BP-828 (₦207,050) fits too and records for longer.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "body",
        name: "Canon XA55",
        price: 2_200_000,
        includes: ["Canon XA55 camcorder", "Handle unit, lens hood, BP-820 battery, power adapter (standard Canon box contents; confirmed when you order)"],
      },
    ],
  },
  {
    slug: "canon-xa50",
    brand: "Canon",
    name: "Canon XA50",
    category: "Camcorders",
    tagline: "1-inch 4K camcorder with Dual Pixel AF and XLR",
    headline: "1-inch 4K and pro audio in a compact body.",
    summary: "The XA50 is the XA55 without SDI: a 1-inch sensor, 15x zoom, Dual Pixel autofocus, five-axis stabilisation and an XLR audio handle, recording 4K to dual SD cards.",
    image: "/products/canon-xa50/main.jpg",
    hero: "/products/canon-xa50/hero.jpg",
    gallery: [
      {
        src: "/products/canon-xa50/main.jpg",
        alt: "Canon XA50 camcorder",
      },
      {
        src: "/products/canon-xa50/g1.jpg",
        alt: "Canon XA50-series camcorder, three-quarter view",
      },
      {
        src: "/products/canon-xa50/g2.jpg",
        alt: "Canon XA50-series camcorder, side view",
      },
      {
        src: "/products/canon-xa50/g3.jpg",
        alt: "Canon XA50-series camcorder, top view",
      },
    ],
    stats: [
      {
        value: "1.0-inch",
        label: "CMOS sensor",
      },
      {
        value: "15x",
        label: "optical zoom",
      },
      {
        value: "4K",
        label: "to dual SD",
      },
      {
        value: "2× XLR",
        label: "on the handle",
      },
    ],
    highlights: [
      {
        title: "1-inch sensor",
        body: "A larger sensor for cleaner footage in low light.",
        image: "/products/canon-xa50/h1.jpg",
      },
      {
        title: "Compact body",
        body: "Small enough to carry all day.",
        image: "/products/canon-xa50/h2.jpg",
      },
      {
        title: "Face detection",
        body: "Dual Pixel AF finds faces and keeps them sharp on the touch screen.",
        image: "/products/canon-xa50/h3.jpg",
      },
      {
        title: "Dual SD slots",
        body: "Record to both cards for backup, or one after the other.",
        image: "/products/canon-xa50/h4.jpg",
      },
    ],
    idealFor: [
      {
        title: "Weddings and events",
        body: "1-inch sensor handles dim halls better than small-sensor camcorders.",
      },
      {
        title: "Documentary",
        body: "Compact body with XLR audio for one-person crews.",
      },
      {
        title: "Church and school media",
        body: "Dual Pixel AF keeps speakers sharp.",
      },
      {
        title: "Slow motion",
        body: "Full HD high frame rates for slow-motion shots.",
      },
    ],
    notFor: "The XA50 has no SDI output. If you need SDI, choose the XA55 or XA75.",
    specs: [
      {
        label: "Sensor",
        value: "1.0-inch CMOS",
      },
      {
        label: "Processor",
        value: "DIGIC DV6",
      },
      {
        label: "Lens",
        value: "15x optical zoom",
      },
      {
        label: "Stabilisation",
        value: "Five-axis image stabilisation",
      },
      {
        label: "ND filter",
        value: "Built-in ND: 1/4, 1/16, 1/64",
      },
      {
        label: "Autofocus",
        value: "Dual Pixel CMOS AF with touch AF and face detection",
      },
      {
        label: "Recording",
        value: "4K UHD MP4 up to 30P; Full HD MP4",
      },
      {
        label: "Slow motion",
        value: "Full HD high frame rate recording",
      },
      {
        label: "Screen",
        value: "Touch LCD",
      },
      {
        label: "Viewfinder",
        value: "Tilting EVF",
      },
      {
        label: "Audio",
        value: "2× XLR inputs on the handle",
      },
      {
        label: "Infrared",
        value: "Infrared shooting mode",
      },
      {
        label: "Outputs",
        value: "HDMI. No SDI",
      },
      {
        label: "Media",
        value: "Dual SD card slots",
      },
      {
        label: "Battery",
        value: "Canon BP-820 supplied (BP-828 optional)",
      },
    ],
    specsNote: "Specifications are Canon's. Frame rates and bit rates depend on recording format and region (PAL/NTSC). Message us to confirm exactly what's in the box with your order.",
    faqs: [
      {
        q: "Does it have SDI?",
        a: "No. Choose the XA55 if you need SDI.",
      },
      {
        q: "Which battery should I buy as a spare?",
        a: "The camera comes with a Canon BP-820. The larger Canon BP-828 (₦207,050) fits too and records for longer.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "body",
        name: "Canon XA50",
        price: 3_600_000,
        includes: ["Canon XA50 camcorder", "Handle unit, lens hood, BP-820 battery, power adapter (standard Canon box contents; confirmed when you order)"],
      },
    ],
  },
  {
    slug: "canon-xa45",
    brand: "Canon",
    name: "Canon XA45",
    category: "Camcorders",
    tagline: "20x 4K camcorder with 3G-SDI and XLR",
    headline: "Compact 4K with SDI out and a long zoom.",
    summary: "The XA45 records 4K to dual SD cards with a 20x zoom, five-axis stabilisation and an XLR audio handle. Its 3G-SDI output connects to switchers for live production.",
    image: "/products/canon-xa45/main.jpg",
    hero: "/products/canon-xa45/hero.jpg",
    gallery: [
      {
        src: "/products/canon-xa45/main.jpg",
        alt: "Canon XA45 camcorder",
      },
      {
        src: "/products/canon-xa45/g1.jpg",
        alt: "Canon XA45, three-quarter view",
      },
      {
        src: "/products/canon-xa45/g2.jpg",
        alt: "Canon XA45, side view",
      },
      {
        src: "/products/canon-xa45/g3.jpg",
        alt: "Canon XA45 held in hand",
      },
    ],
    stats: [
      {
        value: "20x",
        label: "optical zoom",
      },
      {
        value: "4K",
        label: "to dual SD",
      },
      {
        value: "3G-SDI",
        label: "and HDMI out",
      },
      {
        value: "2× XLR",
        label: "on the handle",
      },
    ],
    highlights: [
      {
        title: "20x zoom",
        body: "Reach the stage from the back of the room.",
        image: "/products/canon-xa45/h1.jpg",
      },
      {
        title: "Slow and fast motion",
        body: "Built-in slow and fast motion modes for creative shots.",
        image: "/products/canon-xa45/h2.jpg",
      },
      {
        title: "Small and light",
        body: "Fits easily in one hand and a small bag.",
        image: "/products/canon-xa45/h3.jpg",
      },
      {
        title: "Infrared mode",
        body: "Film in very low light using infrared.",
        image: "/products/canon-xa45/h4.jpg",
      },
    ],
    idealFor: [
      {
        title: "Events",
        body: "20x zoom reaches the stage from the back of the hall.",
      },
      {
        title: "Church and school media",
        body: "Easy to use with pro audio.",
      },
      {
        title: "Interviews",
        body: "Two XLR inputs on the handle for clean sound.",
      },
      {
        title: "Low-budget 4K",
        body: "4K recording at an entry price.",
      },
    ],
    notFor: "Canon has replaced the XA45 with the XA65. If you don't need SDI, the XA40 is the same camera without it.",
    specs: [
      {
        label: "Sensor",
        value: "1/2.3-inch CMOS",
      },
      {
        label: "Lens",
        value: "20x optical zoom",
      },
      {
        label: "Stabilisation",
        value: "Five-axis image stabilisation",
      },
      {
        label: "Autofocus",
        value: "Hybrid AF with face detection",
      },
      {
        label: "Recording",
        value: "4K UHD MP4 up to 30P; Full HD MP4",
      },
      {
        label: "Slow motion",
        value: "Slow and fast motion recording",
      },
      {
        label: "Screen",
        value: "Touch LCD",
      },
      {
        label: "Viewfinder",
        value: "EVF",
      },
      {
        label: "Audio",
        value: "2× XLR inputs on the handle",
      },
      {
        label: "Infrared",
        value: "Infrared shooting mode",
      },
      {
        label: "Outputs",
        value: "3G-SDI, HDMI",
      },
      {
        label: "Media",
        value: "Dual SD card slots",
      },
      {
        label: "Battery",
        value: "Canon BP-820 supplied (BP-828 optional)",
      },
    ],
    specsNote: "Specifications are Canon's. Frame rates and bit rates depend on recording format and region (PAL/NTSC). Message us to confirm exactly what's in the box with your order.",
    faqs: [
      {
        q: "What's the difference between the XA45 and XA40?",
        a: "The XA45 adds a 3G-SDI output. Everything else is the same.",
      },
      {
        q: "Which battery should I buy as a spare?",
        a: "The camera comes with a Canon BP-820. The larger Canon BP-828 (₦207,050) fits too and records for longer.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "body",
        name: "Canon XA45",
        price: 3_500_000,
        includes: ["Canon XA45 camcorder", "Handle unit, lens hood, BP-820 battery, power adapter (standard Canon box contents; confirmed when you order)"],
      },
    ],
  },
  {
    slug: "canon-xa40",
    brand: "Canon",
    name: "Canon XA40",
    category: "Camcorders",
    tagline: "Compact 20x 4K camcorder with XLR",
    headline: "Small 4K camcorder with pro audio.",
    summary: "The XA40 is the XA45 without SDI: 4K to dual SD cards, a 20x zoom, five-axis stabilisation and an XLR audio handle in a compact body.",
    image: "/products/canon-xa40/main.jpg",
    hero: "/products/canon-xa40/hero.jpg",
    gallery: [
      {
        src: "/products/canon-xa40/main.jpg",
        alt: "Canon XA40 camcorder",
      },
      {
        src: "/products/canon-xa40/g1.jpg",
        alt: "Canon XA40-series camcorder, three-quarter view",
      },
      {
        src: "/products/canon-xa40/g2.jpg",
        alt: "Canon XA40-series camcorder, side view",
      },
      {
        src: "/products/canon-xa40/g3.jpg",
        alt: "Canon XA40-series camcorder held in hand",
      },
    ],
    stats: [
      {
        value: "20x",
        label: "optical zoom",
      },
      {
        value: "4K",
        label: "to dual SD",
      },
      {
        value: "2× XLR",
        label: "on the handle",
      },
      {
        value: "IR",
        label: "infrared mode",
      },
    ],
    highlights: [
      {
        title: "20x zoom",
        body: "Reach the stage from the back of the room.",
        image: "/products/canon-xa40/h1.jpg",
      },
      {
        title: "Slow and fast motion",
        body: "Built-in slow and fast motion modes for creative shots.",
        image: "/products/canon-xa40/h2.jpg",
      },
      {
        title: "Small and light",
        body: "Fits easily in one hand and a small bag.",
        image: "/products/canon-xa40/h3.jpg",
      },
      {
        title: "Infrared mode",
        body: "Film in very low light using infrared.",
        image: "/products/canon-xa40/h4.jpg",
      },
    ],
    idealFor: [
      {
        title: "Events",
        body: "20x zoom reaches the stage from the back of the hall.",
      },
      {
        title: "Church and school media",
        body: "Easy to use with pro audio.",
      },
      {
        title: "Interviews",
        body: "Two XLR inputs on the handle for clean sound.",
      },
      {
        title: "Low-budget 4K",
        body: "4K recording at an entry price.",
      },
    ],
    notFor: "The XA40 has no SDI output. If you need SDI, choose the XA45 or XA65.",
    specs: [
      {
        label: "Sensor",
        value: "1/2.3-inch CMOS",
      },
      {
        label: "Lens",
        value: "20x optical zoom",
      },
      {
        label: "Stabilisation",
        value: "Five-axis image stabilisation",
      },
      {
        label: "Autofocus",
        value: "Hybrid AF with face detection",
      },
      {
        label: "Recording",
        value: "4K UHD MP4 up to 30P; Full HD MP4",
      },
      {
        label: "Slow motion",
        value: "Slow and fast motion recording",
      },
      {
        label: "Screen",
        value: "Touch LCD",
      },
      {
        label: "Viewfinder",
        value: "EVF",
      },
      {
        label: "Audio",
        value: "2× XLR inputs on the handle",
      },
      {
        label: "Infrared",
        value: "Infrared shooting mode",
      },
      {
        label: "Outputs",
        value: "HDMI. No SDI",
      },
      {
        label: "Media",
        value: "Dual SD card slots",
      },
      {
        label: "Battery",
        value: "Canon BP-820 supplied (BP-828 optional)",
      },
    ],
    specsNote: "Specifications are Canon's. Frame rates and bit rates depend on recording format and region (PAL/NTSC). Message us to confirm exactly what's in the box with your order.",
    faqs: [
      {
        q: "Does it have SDI?",
        a: "No. Choose the XA45 if you need SDI.",
      },
      {
        q: "Which battery should I buy as a spare?",
        a: "The camera comes with a Canon BP-820. The larger Canon BP-828 (₦207,050) fits too and records for longer.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "body",
        name: "Canon XA40",
        price: 2_700_000,
        includes: ["Canon XA40 camcorder", "Handle unit, lens hood, BP-820 battery, power adapter (standard Canon box contents; confirmed when you order)"],
      },
    ],
  },
  {
    slug: "canon-xa11",
    brand: "Canon",
    name: "Canon XA11",
    category: "Camcorders",
    tagline: "Compact Full HD camcorder with XLR",
    headline: "A dependable HD camcorder with pro audio.",
    summary: "The XA11 records Full HD in AVCHD and MP4 to dual SD cards, with a 20x zoom, an XLR audio handle and an infrared mode. It is a simple, reliable camera for events and church media when you don't need 4K.",
    image: "/products/canon-xa11/main.jpg",
    hero: "/products/canon-xa11/hero.jpg",
    gallery: [
      {
        src: "/products/canon-xa11/main.jpg",
        alt: "Canon XA11/XA15-series camcorder (XA15 pictured)",
      },
      {
        src: "/products/canon-xa11/g1.jpg",
        alt: "Canon XA11/XA15-series camcorder, rear view with LCD (XA15 pictured)",
      },
      {
        src: "/products/canon-xa11/g2.jpg",
        alt: "Canon XA11/XA15-series box contents (XA15 pictured)",
      },
      {
        src: "/products/canon-xa11/g3.jpg",
        alt: "Canon XA11/XA15-series camcorder, three-quarter view (XA15 pictured)",
      },
    ],
    stats: [
      {
        value: "Full HD",
        label: "AVCHD and MP4",
      },
      {
        value: "20x",
        label: "optical zoom",
      },
      {
        value: "2× XLR",
        label: "on the handle",
      },
      {
        value: "IR",
        label: "infrared mode",
      },
    ],
    highlights: [
      {
        title: "Easy to carry",
        body: "Compact enough for one-hand shooting.",
        image: "/products/canon-xa11/h1.jpg",
      },
      {
        title: "Touch screen",
        body: "Change settings and focus quickly.",
        image: "/products/canon-xa11/h2.jpg",
      },
      {
        title: "Everything in the box",
        body: "Handle, battery and accessories included.",
        image: "/products/canon-xa11/h3.jpg",
      },
      {
        title: "Long zoom",
        body: "20x optical zoom for events.",
        image: "/products/canon-xa11/h4.jpg",
      },
    ],
    idealFor: [
      {
        title: "Church media",
        body: "Simple Full HD recording for services.",
      },
      {
        title: "Events",
        body: "Long zoom and dual SD for long recordings.",
      },
      {
        title: "Schools",
        body: "Easy for students and staff to use.",
      },
      {
        title: "Budget interviews",
        body: "XLR audio at a low price.",
      },
    ],
    notFor: "The XA11 records Full HD only. For 4K, look at the XA60B or XA70. Some photos show the XA15, its sister model with SDI.",
    specs: [
      {
        label: "Video",
        value: "Full HD, AVCHD and MP4",
      },
      {
        label: "Lens",
        value: "20x optical zoom",
      },
      {
        label: "Audio",
        value: "2× XLR inputs on the handle",
      },
      {
        label: "Outputs",
        value: "HDMI. No SDI",
      },
      {
        label: "Screen",
        value: "Touch LCD",
      },
      {
        label: "Viewfinder",
        value: "EVF",
      },
      {
        label: "Infrared",
        value: "Infrared shooting mode",
      },
      {
        label: "Media",
        value: "Dual SD card slots",
      },
      {
        label: "Battery",
        value: "Canon BP-820 supplied (BP-828 optional)",
      },
    ],
    specsNote: "Specifications are Canon's. Frame rates and bit rates depend on recording format and region (PAL/NTSC). Message us to confirm exactly what's in the box with your order.",
    faqs: [
      {
        q: "Does it shoot 4K?",
        a: "No, it records Full HD. For 4K at a similar price, look at the XA60B.",
      },
      {
        q: "Which battery should I buy as a spare?",
        a: "The camera comes with a Canon BP-820. The larger Canon BP-828 (₦207,050) fits too and records for longer.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "body",
        name: "Canon XA11",
        price: 1_850_000,
        includes: ["Canon XA11 camcorder", "Handle unit, lens hood, BP-820 battery, power adapter (standard Canon box contents; confirmed when you order)"],
      },
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
