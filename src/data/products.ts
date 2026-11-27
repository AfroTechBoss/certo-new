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
      "If you shoot professional film or broadcast work and need timecode, longer range and premium lavalier mics in a charging case, choose the Rode Wireless PRO (₦500,000).",
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
        price: 300_000,
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
      "If you don't need timecode, the Lavalier II mics or the charging case, the Rode Wireless GO (Gen 3) (₦300,000) gives you the same capsules and 32-bit float backup for much less.",
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
        price: 500_000,
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
        price: 350_000,
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
      "If you wear headphones all day and want over-ear Alcantara cushions with cooling gel, choose the Rode NTH-100 (₦350,000).",
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
      "If you want a lighter shotgun that comes as a complete location kit with a boompole and windshield, choose the Rode NTG5 kit (₦750,000). For a lower budget, the Rode NTG4 (₦480,000) or NTG4+ (₦450,000) are good choices.",
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
      "If you want a slightly warmer broadcast tone and don't need the pistol grip kit, choose the Rode NTG3B (₦850,000). For a lower budget, the Rode NTG4 (₦480,000) or NTG4+ (₦450,000) are good choices.",
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
        price: 480_000,
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
      "If you record dialogue on a boompole into an XLR recorder or mixer, choose the Rode NTG4 (₦480,000) or NTG4+ (₦450,000).",
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
    slug: "rode-videomicro-ii",
    brand: "Rode",
    name: "Rode VideoMicro II",
    category: "Audio",
    tagline: "Better sound for any camera or phone.",
    headline:
      "A tiny, battery-free on-camera mic that gives your camera or phone clear, focused sound, with a shock mount that fits any shoe and cables for both cameras and phones in the box.",
    summary:
      "The VideoMicro II is Rode's smallest on-camera shotgun mic. It's 80 mm long, weighs 39 g with its mount, and runs on power from your camera or phone, so there's no battery to charge or forget. The supercardioid pattern picks up the person in front of the lens and cuts noise from the sides, and the Helix mount stops handling noise and lets you slide the mic forward or back to keep it out of shot.",
    image: "/products/rode-videomicro-ii/main.png",
    hero: "/products/rode-videomicro-ii/hero.jpg",
    gallery: [
      { src: "/products/rode-videomicro-ii/main.png", alt: "Rode VideoMicro II on its Helix mount with foam windshield" },
      { src: "/products/rode-videomicro-ii/front.png", alt: "Front three-quarter view of the VideoMicro II" },
      { src: "/products/rode-videomicro-ii/side.png", alt: "Side view of the VideoMicro II with its foam windshield" },
      { src: "/products/rode-videomicro-ii/rear.png", alt: "Rear view of the VideoMicro II showing the 3.5 mm output" },
    ],
    stats: [
      { value: "39 g", label: "With its mount" },
      { value: "No battery", label: "Powered by your camera" },
      { value: "80 mm", label: "Tiny and discreet" },
      { value: "2 cables", label: "Camera and phone" },
    ],
    highlights: [
      {
        title: "Clear voice, not room noise",
        body: "Your camera's built-in mic picks up everything around it. The VideoMicro II points where your lens points, so voices sound close and clear while traffic, fans and crowd noise fade into the background.",
        image: "/products/rode-videomicro-ii/guitar.jpg",
      },
      {
        title: "Small enough to leave on all day",
        body: "At 80 mm long, it sits on top of a mirrorless camera, a phone rig or a gimbal without adding weight or getting in the way. It's light enough for long shoots and small enough to keep in your bag at all times.",
        image: "/products/rode-videomicro-ii/rig.jpg",
      },
      {
        title: "A mount that stops bumps and stays out of shot",
        body: "The Helix isolation mount soaks up handling noise and camera motor noise. Slide the mic forward or back in the mount so it doesn't show up in wide-angle shots, and the cold-shoe foot fits any camera or rig.",
        image: "/products/rode-videomicro-ii/skate.jpg",
      },
      {
        title: "Ready for indoor and outdoor shoots",
        body: "A foam windshield comes on the mic for indoor and light outdoor use. For windy days, add a furry windshield such as the Rode WS12, which fits snugly over the mic.",
        image: "/products/rode-videomicro-ii/wind.jpg",
      },
    ],
    idealFor: [
      { title: "Beginner YouTubers and vloggers", body: "A big step up from your camera's built-in mic." },
      { title: "Phone creators", body: "Plug into a phone with a headphone jack for reels and TikToks." },
      { title: "Gimbal and small rigs", body: "Light enough that it won't upset your gimbal's balance." },
      { title: "Events and B-roll", body: "Better ambient sound for weddings, parties and street shots." },
    ],
    notFor:
      "If you want controls on the mic, like gain, a high-pass filter and a safety channel, or a USB mic for your computer, choose the Rode VideoMic NTG (₦350,000).",
    specs: [
      { label: "Type", value: "On-camera shotgun microphone, pressure-gradient electret condenser" },
      { label: "Polar pattern", value: "Supercardioid" },
      { label: "Frequency range", value: "20 Hz–20 kHz" },
      { label: "Sensitivity", value: "−30 dBV (31.62 mV @ 94 dB SPL)" },
      { label: "Signal-to-noise ratio", value: "79 dB" },
      { label: "Max SPL", value: "110 dB SPL" },
      { label: "Output", value: "3.5 mm TRS" },
      { label: "Power", value: "Plug-in power from your camera or phone, no battery needed" },
      { label: "Mount", value: "Helix isolation mount with cold-shoe foot" },
      { label: "Size and weight", value: "80 mm long, 22 mm diameter; 24 g (39 g with mount)" },
    ],
    specsNote: "Figures are Rode's. Phones need a headphone jack, or a 3.5 mm to USB-C or Lightning adaptor.",
    faqs: [
      {
        q: "Does it need batteries?",
        a: "No. It runs on the small amount of power your camera or phone sends through the mic socket, so there's nothing to charge.",
      },
      {
        q: "Will it work with my phone?",
        a: "Yes. Use the TRRS cable that comes in the box for phones with a headphone jack. For iPhones and phones with only USB-C, you'll need a 3.5 mm adaptor, and we can supply the right one.",
      },
      {
        q: "Will it work with my camera?",
        a: "Yes, with any camera that has a 3.5 mm mic input, including Canon, Sony, Nikon, Fujifilm and Panasonic cameras.",
      },
      {
        q: "Can I use it outdoors in the wind?",
        a: "The foam windshield handles light breeze. For strong wind, add the furry Rode WS12 windshield, sold separately.",
      },
      {
        q: "VideoMicro II or VideoMic GO II?",
        a: "Both are light and battery-free. The VideoMic GO II has a longer tube for more focused sound and a USB-C output, so it also works as a USB mic for your computer or phone. Choose the VideoMicro II if you want the smallest and lightest mic.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "VideoMicro II",
        price: 120_000,
        includes: [
          "Rode VideoMicro II on-camera microphone",
          "Helix isolation mount with cold-shoe foot",
          "Foam windshield",
          "3.5 mm TRS cable for cameras",
          "3.5 mm TRRS cable for phones",
        ],
      },
    ],
  },
  {
    slug: "rode-videomic-go-ii",
    brand: "Rode",
    name: "Rode VideoMic GO II",
    category: "Audio",
    tagline: "Light as a feather. Works with everything.",
    headline:
      "An ultra-light on-camera shotgun mic that plugs into your camera, phone or computer, with a USB-C output for digital audio and no battery to charge.",
    summary:
      "The VideoMic GO II weighs just 33 g, yet its longer tube gives you more focused, natural sound than most compact mics. Plug it into a camera over 3.5 mm, or into a phone or computer over USB-C and it becomes a USB mic for podcasts, voice-overs and calls. It runs on power from whatever it's plugged into, and the Helix mount keeps handling noise out of your recordings.",
    image: "/products/rode-videomic-go-ii/main.png",
    hero: "/products/rode-videomic-go-ii/hero.jpg",
    gallery: [
      { src: "/products/rode-videomic-go-ii/main.png", alt: "Rode VideoMic GO II on its Helix mount with foam windshield" },
      { src: "/products/rode-videomic-go-ii/side.png", alt: "Side view of the VideoMic GO II on its Helix mount" },
      { src: "/products/rode-videomic-go-ii/rear.png", alt: "Rear of the VideoMic GO II showing the 3.5 mm and USB-C outputs" },
      { src: "/products/rode-videomic-go-ii/box.png", alt: "What's in the box: VideoMic GO II, Helix mount, foam windshield and cable" },
    ],
    stats: [
      { value: "33 g", label: "Ultra-lightweight" },
      { value: "No battery", label: "Powered by your device" },
      { value: "USB-C", label: "Digital audio output" },
      { value: "15 dBA", label: "Low self-noise" },
    ],
    highlights: [
      {
        title: "Big sound from a tiny mic",
        body: "Rode's acoustic design inside the 120 mm tube gives you focused, natural voices with very little self-noise. It picks up what's in front of the camera and pushes room noise and side sound into the background.",
        image: "/products/rode-videomic-go-ii/small.jpg",
      },
      {
        title: "Camera, phone or computer",
        body: "Use the 3.5 mm output for cameras, or the USB-C output for phones, tablets and computers. Over USB it records in 24-bit, 48 kHz, so it doubles as a desk mic for podcasts, Zoom calls and voice-overs.",
        image: "/products/rode-videomic-go-ii/desk.png",
      },
      {
        title: "Great on your phone",
        body: "Plug it straight into a USB-C phone and record clear audio for reels, TikToks and street interviews. Use the free Rode Capture or Rode Connect apps to adjust gain, add a high-pass filter and get even better sound.",
        image: "/products/rode-videomic-go-ii/phone.png",
      },
      {
        title: "Light enough for any rig",
        body: "At 33 g it won't throw your gimbal off balance or weigh down a small camera. The Helix mount absorbs bumps and lets you slide the mic forward so it stays out of wide shots.",
        image: "/products/rode-videomic-go-ii/campaign.jpg",
      },
    ],
    idealFor: [
      { title: "Vloggers and YouTubers", body: "Clean voice on camera and a USB mic for voice-overs." },
      { title: "Phone content creators", body: "Plug straight into USB-C phones for clear social videos." },
      { title: "Gimbal shooters", body: "So light your gimbal won't notice it." },
      { title: "Online classes and calls", body: "A simple USB mic for your laptop when you're not filming." },
    ],
    notFor:
      "If you want controls on the mic itself, like gain, a pad and a safety channel, choose the Rode VideoMic NTG (₦350,000).",
    specs: [
      { label: "Type", value: "On-camera shotgun microphone, pressure-gradient electret condenser" },
      { label: "Polar pattern", value: "Supercardioid" },
      { label: "Frequency range", value: "20 Hz–20 kHz" },
      { label: "Sensitivity", value: "−31 dBV (28.78 mV @ 94 dB SPL)" },
      { label: "Self-noise", value: "15 dBA" },
      { label: "Max SPL", value: "110 dB SPL" },
      { label: "Outputs", value: "3.5 mm TRS; USB-C digital audio (24-bit, 48 kHz)" },
      { label: "Power", value: "Plug-in power over 3.5 mm, or USB power, no battery needed" },
      { label: "Mount", value: "Helix isolation mount with cold-shoe foot" },
      { label: "Size and weight", value: "120 mm long, 21.6 mm diameter; 33 g (56 g with accessories)" },
    ],
    specsNote: "Figures are Rode's. USB mode works with macOS 10.15, Windows 10, iOS 14, Android 9 and later.",
    faqs: [
      {
        q: "Does it need batteries?",
        a: "No. It takes power from your camera over 3.5 mm, or from your phone or computer over USB-C.",
      },
      {
        q: "Will it work with my iPhone?",
        a: "Yes. iPhone 15 and newer plug straight in over USB-C. Older iPhones with a Lightning port need a USB-C to Lightning cable, which we can supply.",
      },
      {
        q: "Can I use it as a computer mic?",
        a: "Yes. Plug it into a Mac or Windows computer over USB-C and it shows up as a USB mic for podcasts, livestreams, voice-overs and calls.",
      },
      {
        q: "Can I use it outdoors in the wind?",
        a: "The foam windshield handles light breeze. For strong wind, add a furry windshield such as the Rode WS11, sold separately.",
      },
      {
        q: "VideoMic GO II or VideoMicro II?",
        a: "The VideoMic GO II has a longer tube for more focused sound and a USB-C output. The VideoMicro II is smaller and only works over 3.5 mm. Choose the GO II if you also want a USB mic.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "VideoMic GO II",
        price: 200_000,
        includes: [
          "Rode VideoMic GO II on-camera microphone",
          "Helix isolation mount with cold-shoe foot",
          "Foam windshield",
          "3.5 mm camera cable",
        ],
      },
    ],
  },
  {
    slug: "rode-videomic-pro-plus",
    brand: "Rode",
    name: "Rode VideoMic Pro+",
    category: "Audio",
    tagline: "Pro on-camera sound with every control you need.",
    headline:
      "A premium on-camera shotgun mic with a rechargeable battery, auto power on and off with your camera, and gain, filter and boost controls right on the mic.",
    summary:
      "The VideoMic Pro+ is built for filmmakers who want broadcast-quality sound straight into the camera. Its line-gradient design gives a tight, focused pickup with very low self-noise, and the Rycote Lyre suspension keeps bumps out of your audio. It runs on the included rechargeable battery, AA batteries or USB power, and switches itself on and off with your camera, so you never return home with a flat battery or a silent clip.",
    image: "/products/rode-videomic-pro-plus/main.png",
    hero: "/products/rode-videomic-pro-plus/hero.jpg",
    gallery: [
      { src: "/products/rode-videomic-pro-plus/main.png", alt: "Rode VideoMic Pro+ on its Rycote Lyre suspension mount" },
      { src: "/products/rode-videomic-pro-plus/module1.jpg", alt: "Rode VideoMic Pro+ in use on a camera" },
      { src: "/products/rode-videomic-pro-plus/module2.jpg", alt: "Rode VideoMic Pro+ on a camera rig" },
    ],
    stats: [
      { value: "100 h", label: "Rechargeable battery" },
      { value: "14 dBA", label: "Very low self-noise" },
      { value: "3", label: "Ways to power it" },
      { value: "Auto", label: "On and off with your camera" },
    ],
    highlights: [
      {
        title: "Focused, broadcast-quality sound",
        body: "The line-gradient shotgun design picks up the person in front of the lens and rejects noise from the sides and back. With just 14 dBA of self-noise, quiet voices and room tone stay clean instead of hissy.",
        image: "/products/rode-videomic-pro-plus/module1.jpg",
      },
      {
        title: "Fix your sound on the mic",
        body: "A two-stage high-pass filter (75 Hz or 150 Hz) cuts wind rumble and hum. The three-stage level control (−10, 0, +20 dB) matches the mic to your camera, and the +20 dB setting lets you turn down your camera's noisy preamp for cleaner audio. A high-frequency boost adds extra clarity to voices.",
        image: "/products/rode-videomic-pro-plus/module2.jpg",
      },
      {
        title: "Power that won't let you down",
        body: "The included LB-1 rechargeable battery lasts up to 100 hours and charges over micro-USB. You can also run it on two AA batteries or straight from USB power, and auto power turns the mic on and off with your camera.",
        image: "/products/rode-videomic-pro-plus/hero.jpg",
      },
      {
        title: "Bump-proof Rycote suspension",
        body: "The Rycote Lyre suspension isolates the mic from handling noise and camera vibration, and won't sag or break like rubber bands. The cold-shoe foot has a 3/8-inch thread, so it also fits boompoles and rigs.",
        image: "/products/rode-videomic-pro-plus/main.png",
      },
    ],
    idealFor: [
      { title: "Filmmakers and documentary crews", body: "Clean dialogue straight into the camera." },
      { title: "Wedding and event videographers", body: "Long battery life and controls for loud rooms." },
      { title: "Run-and-gun shooters", body: "Auto power means you never forget to switch it on." },
      { title: "YouTubers upgrading their sound", body: "A big step up from compact on-camera mics." },
    ],
    notFor:
      "If you also want a USB mic for your computer or a mic that plugs straight into phones, choose the Rode VideoMic NTG (₦350,000).",
    specs: [
      { label: "Type", value: "On-camera shotgun microphone, line-gradient condenser" },
      { label: "Polar pattern", value: "Supercardioid" },
      { label: "Frequency range", value: "20 Hz–20 kHz" },
      { label: "Sensitivity", value: "−33.6 dB re 1 V/Pa (21.20 mV @ 94 dB SPL)" },
      { label: "Self-noise", value: "14 dBA" },
      { label: "Max SPL", value: "133 dB SPL" },
      { label: "Controls", value: "Two-stage high-pass filter (75/150 Hz), three-stage level (−10, 0, +20 dB), high-frequency boost, auto power" },
      { label: "Output", value: "3.5 mm TRS" },
      { label: "Power", value: "Rode LB-1 rechargeable battery (up to 100 hours), 2 × AA, or micro-USB" },
      { label: "Mount", value: "Rycote Lyre suspension with cold-shoe foot and 3/8-inch thread" },
      { label: "Size and weight", value: "111 × 66 × 170 mm; 122 g" },
    ],
    specsNote: "Figures are Rode's. Battery life depends on use.",
    faqs: [
      {
        q: "What batteries does it use?",
        a: "It comes with the Rode LB-1 rechargeable battery, which lasts up to 100 hours. You can also use two AA batteries, or power it over micro-USB from a power bank.",
      },
      {
        q: "Will it work with my phone?",
        a: "It's made for cameras. To use it with a phone you'll need a TRS to TRRS cable such as the Rode SC7, plus a USB-C or Lightning adaptor for phones without a headphone jack.",
      },
      {
        q: "What does the +20 dB setting do?",
        a: "It sends a stronger signal to your camera, so you can turn the camera's audio level down. Camera preamps are noisy, so this gives you cleaner sound.",
      },
      {
        q: "Can I use it outdoors in the wind?",
        a: "The foam windshield handles light breeze, and the high-pass filter cuts low rumble. For strong wind, add the Rode DeadCat VMP+ furry windshield, sold separately.",
      },
      {
        q: "VideoMic Pro+ or VideoMic NTG?",
        a: "The VideoMic Pro+ has lower self-noise, replaceable batteries and auto power with your camera. The VideoMic NTG is lighter and also works as a USB mic for computers and phones. Choose the Pro+ for camera-only filmmaking.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "VideoMic Pro+",
        price: 480_000,
        includes: [
          "Rode VideoMic Pro+ on-camera microphone",
          "Rycote Lyre suspension mount",
          "Rode LB-1 rechargeable battery",
          "Foam windshield",
          "3.5 mm camera cable",
        ],
      },
    ],
  },
  {
    slug: "rode-videomic-pro",
    brand: "Rode",
    name: "Rode VideoMic Pro",
    category: "Audio",
    tagline: "The on-camera mic that became the standard.",
    headline:
      "A light, focused on-camera shotgun mic with a high-pass filter, three-step gain and a Rycote shock mount, running for over 70 hours on one 9V battery.",
    summary:
      "The VideoMic Pro is the mic many filmmakers and vloggers start with when they get serious about sound. Its supercardioid condenser capsule picks up what's in front of the lens and turns down noise from the sides, so voices come through clean. At just 85 g it barely adds weight to your camera, and the built-in Rycote Lyre mount keeps handling bumps out of your audio.",
    image: "/products/rode-videomic-pro/main.png",
    hero: "/products/rode-videomic-pro/hero.jpg",
    gallery: [
      { src: "/products/rode-videomic-pro/main.png", alt: "Rode VideoMic Pro from the front left" },
      { src: "/products/rode-videomic-pro/rear.png", alt: "Rode VideoMic Pro from the back, showing its controls" },
      { src: "/products/rode-videomic-pro/hero.jpg", alt: "Filmmaker using a camera with a Rode VideoMic Pro outdoors" },
    ],
    stats: [
      { value: "85 g", label: "Barely adds weight" },
      { value: "70+ h", label: "On one 9V battery" },
      { value: "14 dBA", label: "Low self-noise" },
      { value: "3-step", label: "Gain control" },
    ],
    highlights: [
      {
        title: "Focused sound from the front",
        body: "The supercardioid pattern points where your camera points. It picks up the person you're filming and rejects much of the noise around them, giving you clearer dialogue than your camera's built-in mic.",
        image: "/products/rode-videomic-pro/main.png",
      },
      {
        title: "Controls for real-world shoots",
        body: "An 80 Hz high-pass filter cuts traffic rumble and air-conditioner hum. The three-step level control (−10, 0, +20 dB) matches the mic to your camera, and +20 dB lets you turn your camera's noisy preamp down.",
        image: "/products/rode-videomic-pro/rear.png",
      },
      {
        title: "Shock mount built in",
        body: "The Rycote Lyre suspension isolates the mic from handling noise and camera vibration. Unlike rubber bands, it won't sag or snap over time.",
        image: "/products/rode-videomic-pro/hero.jpg",
      },
      {
        title: "Days of shooting on one battery",
        body: "A single 9V battery runs the mic for over 70 hours. Spares are cheap and easy to find, so you can keep shooting all week.",
        image: "/products/rode-videomic-pro/main.png",
      },
    ],
    idealFor: [
      { title: "Vloggers and YouTubers", body: "A big, simple upgrade over camera audio." },
      { title: "Event and wedding shooters", body: "Light enough to leave on the camera all day." },
      { title: "Film students", body: "The classic first pro on-camera mic." },
      { title: "Interviews on location", body: "Focused pickup with a filter for outdoor rumble." },
    ],
    notFor:
      "If you want a rechargeable battery and auto power on and off with your camera, choose the Rode VideoMic Pro+ (₦480,000).",
    specs: [
      { label: "Type", value: "On-camera shotgun microphone, line-gradient condenser" },
      { label: "Polar pattern", value: "Supercardioid" },
      { label: "Capsule", value: "0.50 inch" },
      { label: "Frequency range", value: "40 Hz–20 kHz (high-pass filter at 80 Hz)" },
      { label: "Sensitivity", value: "−32 dB re 1 V/Pa (20 mV @ 94 dB SPL)" },
      { label: "Self-noise", value: "14 dBA" },
      { label: "Max SPL", value: "134 dB SPL" },
      { label: "Output impedance", value: "200 Ω" },
      { label: "Controls", value: "80 Hz high-pass filter, three-step level (−10, 0, +20 dB)" },
      { label: "Output", value: "3.5 mm TRS" },
      { label: "Power", value: "9V battery, over 70 hours" },
      { label: "Mount", value: "Rycote Lyre suspension with cold-shoe foot" },
      { label: "Weight", value: "85 g" },
    ],
    specsNote: "Figures are Rode's. Battery life depends on the battery and use.",
    faqs: [
      {
        q: "What battery does it use?",
        a: "A standard 9V battery, which lasts over 70 hours. Use alkaline or lithium 9V batteries and carry a spare on long shoots.",
      },
      {
        q: "Will it work with my phone?",
        a: "It's made for cameras. To use it with a phone you'll need a TRS to TRRS cable such as the Rode SC7, plus a USB-C or Lightning adaptor for phones without a headphone jack.",
      },
      {
        q: "VideoMic Pro or VideoMic Pro+?",
        a: "Both sound great. The Pro+ adds a rechargeable battery, auto power with your camera, a two-step filter and a high-frequency boost. The VideoMic Pro is lighter and costs less.",
      },
      {
        q: "Can I use it outdoors in the wind?",
        a: "The foam windshield handles light breeze and the high-pass filter cuts low rumble. For strong wind, add a furry windshield such as the Rode DeadCat VMP, sold separately.",
      },
      {
        q: "Does it fit on a boom pole?",
        a: "Yes. The cold-shoe foot fits cameras and shoe mounts, and you can add a shoe adaptor to put it on a boom pole or light stand.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "VideoMic Pro",
        price: 380_000,
        includes: [
          "Rode VideoMic Pro on-camera microphone",
          "Rycote Lyre suspension mount",
          "Foam windshield",
          "3.5 mm camera cable",
        ],
      },
    ],
  },
  {
    slug: "rode-ntg5",
    brand: "Rode",
    name: "Rode NTG5",
    category: "Audio",
    tagline: "Broadcast shotgun sound in a 76 g body.",
    headline:
      "A professional shotgun mic for boom and location work: natural, uncoloured sound, just 10 dBA of self-noise, and electronics protected against moisture.",
    summary:
      "The NTG5 is Rode's lightest professional shotgun mic, made for film sets, documentaries and broadcast. Round acoustic holes replace the usual slots along the tube, giving a natural sound that doesn't colour voices. At 76 g and 203 mm long, it's easy to hold on a boom pole all day, and RF-bias electronics with a protective coating keep it working in heat, humidity and rain.",
    image: "/products/rode-ntg5/main.png",
    hero: "/products/rode-ntg5/hero.jpg",
    gallery: [
      { src: "/products/rode-ntg5/main.png", alt: "Rode NTG5 in its pistol grip with windshield" },
      { src: "/products/rode-ntg5/front.png", alt: "Rode NTG5 shotgun microphone on its own" },
      { src: "/products/rode-ntg5/tube.jpg", alt: "Close-up of the NTG5's round acoustic holes" },
      { src: "/products/rode-ntg5/location.jpg", alt: "Sound recordist using a Rode NTG5 on location" },
      { src: "/products/rode-ntg5/beach.jpg", alt: "Rode NTG5 recording on a beach" },
      { src: "/products/rode-ntg5/box.png", alt: "Rode NTG5 packaging" },
    ],
    stats: [
      { value: "76 g", label: "Ultra-light body" },
      { value: "10 dBA", label: "Very low self-noise" },
      { value: "203 mm", label: "Short for a shotgun" },
      { value: "RF-bias", label: "Weather-resistant electronics" },
    ],
    highlights: [
      {
        title: "Natural, uncoloured sound",
        body: "Instead of long slots, the NTG5 uses round acoustic holes along its tube. The result is a clear, transparent sound with smooth off-axis pickup, so voices sound like the person speaking, even when they move off-mic.",
        image: "/products/rode-ntg5/tube.jpg",
      },
      {
        title: "Light enough for long days on the boom",
        body: "At only 76 g and 203 mm, the NTG5 is one of the most compact pro shotgun mics you can buy. Boom operators feel the difference after a 12-hour shoot, and it suits small camera rigs too.",
        image: "/products/rode-ntg5/location.jpg",
      },
      {
        title: "Built for tough conditions",
        body: "RF-bias circuitry and a conformal coating protect the electronics from moisture and humidity. It keeps sounding right in hot, humid weather where other condenser mics can crackle or fail.",
        image: "/products/rode-ntg5/beach.jpg",
      },
      {
        title: "Quiet enough for any scene",
        body: "With 10 dBA of self-noise, quiet dialogue and room tone stay clean. A tight supercardioid pattern focuses on your subject and turns down the noise around them.",
        image: "/products/rode-ntg5/main.png",
      },
    ],
    idealFor: [
      { title: "Boom operators", body: "Light, short and easy to aim all day." },
      { title: "Film and TV sets", body: "Broadcast-grade dialogue with natural tone." },
      { title: "Documentary crews", body: "Reliable in heat, humidity and outdoor shoots." },
      { title: "Voiceover and studio work", body: "Clear, detailed speech with low noise." },
    ],
    notFor:
      "The NTG5 needs an XLR input with 48V phantom power, like a recorder, mixer or pro camera. For a mic that plugs straight into a camera's 3.5 mm input, choose the Rode VideoMic NTG (₦350,000).",
    specs: [
      { label: "Type", value: "Shotgun microphone, RF-bias condenser" },
      { label: "Polar pattern", value: "Supercardioid" },
      { label: "Frequency response", value: "20 Hz–20 kHz" },
      { label: "Sensitivity", value: "−23.5 dB re 1 V/Pa (66 mV @ 94 dB SPL)" },
      { label: "Self-noise", value: "10 dBA" },
      { label: "Max SPL", value: "130 dB SPL (1% THD)" },
      { label: "Signal-to-noise ratio", value: "84 dB" },
      { label: "Output impedance", value: "25 Ω" },
      { label: "Output", value: "3-pin XLR" },
      { label: "Power", value: "48V phantom power, 2 mA" },
      { label: "Size and weight", value: "203 × 19 × 19 mm; 76 g" },
      { label: "PG2-R pistol grip (kit)", value: "240 × 60 × 117 mm; 224 g" },
    ],
    specsNote: "Figures are Rode's.",
    faqs: [
      {
        q: "What do I need to use it?",
        a: "An XLR cable and a recorder, mixer, audio interface or camera with an XLR input and 48V phantom power. It won't work from a 3.5 mm camera input on its own.",
      },
      {
        q: "Does it come as a kit?",
        a: "Rode sells the NTG5 on its own and as a location kit with the PG2-R pistol grip, WS10 windshield and cable. Ask us on WhatsApp which version is in stock.",
      },
      {
        q: "NTG5 or NTG3?",
        a: "The NTG5 is shorter, lighter and quieter (10 dBA vs 13 dBA), with a flatter low end that suits location work. The NTG3 has a richer low end that many people like indoors and for voiceover.",
      },
      {
        q: "Can I use it outdoors in wind?",
        a: "The foam windshield handles light breeze. For real wind, use a furry cover or a blimp-style windshield, sold separately.",
      },
      {
        q: "Is it good for voiceover?",
        a: "Yes. Its high frequencies are clear and natural, and its low self-noise suits quiet recording rooms.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "NTG5",
        price: 800_000,
        includes: [
          "Rode NTG5 shotgun microphone",
          "Kit version adds the PG2-R pistol grip, WS10 windshield and XLR cable (ask us which is in stock)",
        ],
      },
    ],
  },
  {
    slug: "rode-podmic-usb",
    brand: "Rode",
    name: "Rode PodMic USB",
    category: "Audio",
    tagline: "One broadcast mic for USB and XLR.",
    headline:
      "A rich-sounding dynamic broadcast mic with both USB-C and XLR outputs, built-in APHEX processing and a zero-latency headphone jack.",
    summary:
      "The PodMic USB is a dynamic mic for podcasts, streaming, gaming and voiceover. Plug it into your computer or phone over USB-C and it just works, with Rode's low-noise Revolution Preamp and APHEX processing making your voice sound polished. Later, connect the XLR output to a mixer or interface like a classic broadcast mic. It's built from metal, with a swing mount and pop filter included.",
    image: "/products/rode-podmic-usb/main.png",
    hero: "/products/rode-podmic-usb/hero.jpg",
    gallery: [
      { src: "/products/rode-podmic-usb/main.png", alt: "Rode PodMic USB in black" },
      { src: "/products/rode-podmic-usb/white.png", alt: "Rode PodMic USB in white" },
      { src: "/products/rode-podmic-usb/inputs.jpg", alt: "The PodMic USB's USB-C, XLR and headphone connections" },
      { src: "/products/rode-podmic-usb/desk.jpg", alt: "Rode PodMic USB on a desk next to a computer" },
      { src: "/products/rode-podmic-usb/mobile.jpg", alt: "Rode PodMic USB connected to a phone" },
      { src: "/products/rode-podmic-usb/studio.jpg", alt: "Rode PodMic USB in a home studio" },
      { src: "/products/rode-podmic-usb/box.jpg", alt: "Rode PodMic USB packaging" },
    ],
    stats: [
      { value: "USB + XLR", label: "Two ways to connect" },
      { value: "APHEX", label: "Built-in voice processing" },
      { value: "0 ms", label: "Headphone monitoring delay" },
      { value: "5 yr", label: "Rode warranty" },
    ],
    highlights: [
      {
        title: "Plug into anything",
        body: "Use USB-C to connect to a Windows or Mac computer, an iPhone or an Android phone. Use the XLR output with a mixer or audio interface. One mic covers home, studio and travel.",
        image: "/products/rode-podmic-usb/inputs.jpg",
      },
      {
        title: "Warm, clear broadcast voice",
        body: "The dynamic capsule gives speech a rich, full sound and ignores much of the room around you, which helps in untreated rooms. An internal pop filter and shock mount tame plosives and bumps, and an extra external pop filter is included.",
        image: "/products/rode-podmic-usb/desk.jpg",
      },
      {
        title: "Studio processing built in",
        body: "Over USB, APHEX processing adds a noise gate, compressor, high-pass filter, Aural Exciter and Big Bottom. Use Rode's free software to pick a preset with VoxLab or fine-tune every setting.",
        image: "/products/rode-podmic-usb/studio.jpg",
      },
      {
        title: "Hear yourself with no delay",
        body: "Plug headphones into the mic to hear yourself live, with zero latency and a volume knob on the mic. Great for podcasts, streams and recording voiceovers.",
        image: "/products/rode-podmic-usb/mobile.jpg",
      },
    ],
    idealFor: [
      { title: "Podcasters", body: "Start on USB, grow into an XLR setup later." },
      { title: "Streamers and gamers", body: "Rich voice with processing built in." },
      { title: "Voiceover artists", body: "Clear speech that ignores room noise." },
      { title: "Church and radio presenters", body: "Classic broadcast-mic look and sound." },
    ],
    notFor:
      "If you'll only ever use an XLR mixer or interface, the Rode PodMic (₦280,000) gives the same broadcast style for less.",
    specs: [
      { label: "Type", value: "Dynamic broadcast microphone, end-address" },
      { label: "Polar pattern", value: "Cardioid" },
      { label: "Frequency range", value: "20 Hz–20 kHz" },
      { label: "Sensitivity", value: "−57 dB re 1 V/Pa (1.4 mV @ 94 dB SPL)" },
      { label: "Max SPL", value: "148 dB SPL" },
      { label: "Self-noise", value: "26 dBA analogue; 19 dBA digital" },
      { label: "Outputs", value: "USB-C, 3-pin XLR, 3.5 mm headphone jack" },
      { label: "Digital audio", value: "24-bit, 48 kHz" },
      { label: "Processing", value: "APHEX digital signal processing" },
      { label: "Power over USB", value: "5V, 100 mA" },
      { label: "Works with", value: "Windows 10 or later, macOS 10.15 or later, iOS and Android" },
      { label: "Size and weight", value: "123 × 109 × 110 mm; 900 g" },
    ],
    specsNote: "Figures are Rode's.",
    faqs: [
      {
        q: "Do I need an audio interface?",
        a: "No. Plug it into your computer or phone over USB-C and it's ready. You can add an interface or mixer later and use the XLR output instead.",
      },
      {
        q: "Does it work with my phone?",
        a: "Yes. It works with iPhones and Android phones over USB. iPhones with a Lightning port need a Lightning to USB adaptor.",
      },
      {
        q: "Do I need special software?",
        a: "No, it works as soon as you plug it in. Rode's free software lets you choose voice presets and adjust the APHEX processing.",
      },
      {
        q: "Does it need phantom power?",
        a: "No. It's a dynamic mic, so the XLR output doesn't need phantom power. Over USB, it's powered by the cable.",
      },
      {
        q: "What colours are there?",
        a: "Black and white, at the same price. Tell us which you want on WhatsApp.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "PodMic USB",
        price: 380_000,
        includes: [
          "Rode PodMic USB microphone with swing mount",
          "External pop filter",
          "USB-C cable",
        ],
      },
    ],
  },
  {
    slug: "rode-ntg3",
    brand: "Rode",
    name: "Rode NTG3",
    category: "Audio",
    tagline: "The broadcast standard, in satin nickel.",
    headline:
      "A broadcast-grade RF-bias shotgun mic with a warm, natural voice, tight supercardioid pickup and very low noise, built to keep recording in humid, wet weather where ordinary condenser mics fail.",
    summary:
      "The NTG3 has been a favourite of film, TV and documentary sound crews for years. Its RF-bias design is highly resistant to moisture and condensation, so it keeps sounding clean on humid Lagos mornings, by the sea or in light rain. The supercardioid pattern focuses on your subject and rejects noise from the sides without colouring the sound, and self-noise of just 13 dBA keeps quiet voices clear. It comes in Rode's classic satin-nickel finish with a mount, foam windshield and storage tube.",
    image: "/products/rode-ntg3/main.png",
    hero: "/products/rode-ntg3/hero.jpg",
    gallery: [
      { src: "/products/rode-ntg3/main.png", alt: "Rode NTG3 shotgun microphone in satin nickel" },
      { src: "/products/rode-ntg3/hero.jpg", alt: "Boom operator recording an interview with a Rode NTG3 shotgun mic" },
      { src: "/products/rode-ntg3/tube.jpg", alt: "Rode NTG3 protective storage tube" },
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
        body: "Ordinary condenser mics can crackle, hiss or cut out when moisture gets in. The NTG3 uses RF-bias technology that is highly resistant to humidity and condensation, so it keeps recording clean dialogue on early-morning shoots, at the beach, in hot kitchens or in light rain. For crews who shoot outdoors in Nigeria's climate, that reliability is the reason to buy it.",
        image: "/products/rode-ntg3/hero.jpg",
      },
      {
        title: "Focused on your subject, not the noise",
        body: "The tight supercardioid pattern picks up what you point it at and rejects sound from the sides and rear. Off-axis sound stays natural instead of turning hollow or tinny, so voices still sound right when the actor moves or the boom drifts slightly off target.",
        image: "/products/rode-ntg3/main.png",
      },
      {
        title: "Rich, warm broadcast sound",
        body: "The NTG3 has the full, warm tone and fine detail that broadcasters and voice-over artists ask for. At just 13 dBA self-noise, quiet interviews and whispered lines stay clean, and 130 dB max SPL handles shouting and loud scenes without distortion. It runs on standard P48 phantom power through XLR.",
        image: "/products/rode-ntg3/hero.jpg",
      },
      {
        title: "Built tough, with a storage tube",
        body: "The precision-machined metal body is made in Sydney and weighs just 163 g, so it sits easily on a boompole or camera rig. It comes with an RM5 mount, a foam windshield and a rugged storage tube that protects it in your bag between jobs. Add a furry windshield or blimp for strong wind.",
        image: "/products/rode-ntg3/tube.jpg",
      },
    ],
    idealFor: [
      { title: "Film and TV crews", body: "Broadcast-grade dialogue on a boompole, indoors or out." },
      { title: "Documentaries and outdoor shoots", body: "Reliable sound in humid weather, at the coast and in light rain." },
      { title: "Voice-over and studio work", body: "A warm, detailed voice with very low noise." },
      { title: "News and interviews", body: "Tight pickup that keeps the background quiet." },
    ],
    notFor:
      "If you want the same mic in matte black so it doesn't reflect light on camera, choose the Rode NTG3B (₦850,000). For a lighter shotgun, the Rode NTG5 (₦800,000) weighs just 76 g. For an on-camera mic on a smaller budget, the Rode VideoMic NTG (₦350,000) is a good choice.",
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
      { label: "Finish", value: "Satin nickel" },
    ],
    specsNote: "Figures are Rode's. The NTG3 needs 48 V phantom power from a recorder, mixer, interface or camera with an XLR input. It has no battery option.",
    faqs: [
      {
        q: "Will it work with my camera?",
        a: "Yes, if your camera has an XLR input with 48 V phantom power, as most cinema and broadcast cameras do. For a DSLR or mirrorless camera, connect it through an XLR recorder or adaptor that supplies phantom power, such as a Zoom field recorder.",
      },
      {
        q: "What does RF-bias mean for me?",
        a: "It's the technology that makes the NTG3 highly resistant to moisture and condensation. Regular condenser mics can crackle or drop out in humid weather. The NTG3 keeps sounding clean, which makes it a safe choice for outdoor and coastal shoots.",
      },
      {
        q: "Can I use it outdoors in the wind?",
        a: "The included foam windshield handles a light breeze. For outdoor shoots in real wind, add a furry windshield or a blimp, sold separately. Ask us what fits.",
      },
      {
        q: "Is it good for voice-over?",
        a: "Yes. Its warm, detailed tone and 13 dBA self-noise make it a favourite for voice-over and narration, especially in rooms that aren't fully treated, because the tight pattern picks up less of the room.",
      },
      {
        q: "What's the difference between the NTG3 and NTG3B?",
        a: "They are the same microphone with the same sound. The NTG3 has a satin-nickel finish, while the NTG3B is matte black so it doesn't reflect light on camera.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "NTG3 shotgun mic",
        price: 785_000,
        includes: [
          "Rode NTG3 shotgun microphone (satin nickel)",
          "RM5 microphone mount",
          "Foam windshield",
          "Protective storage tube",
          "Zip pouch",
        ],
      },
    ],
  },
  {
    slug: "rode-podmic",
    brand: "Rode",
    name: "Rode PodMic",
    category: "Audio",
    tagline: "The classic podcast sound. Built like a tank.",
    headline:
      "A broadcast-quality dynamic mic made for podcasts, livestreams and voice work, with a rich, full voice, a built-in pop filter and shock mount, and an all-metal body with an integrated swing mount.",
    summary:
      "The PodMic gives you that warm, close-up 'radio' sound heard on the world's best podcasts. Its dynamic capsule focuses on your voice and picks up far less room echo and background noise than a condenser, which makes it ideal for untreated rooms, shared studios and multi-host shows. The internal pop filter tames plosives, the internal shock mount cuts desk bumps, and the swing mount lets you attach it straight to a boom arm. It connects by XLR to an interface, mixer or RØDECaster.",
    image: "/products/rode-podmic/main.png",
    hero: "/products/rode-podmic/hero.jpg",
    gallery: [
      { src: "/products/rode-podmic/main.png", alt: "Rode PodMic dynamic broadcast microphone in black" },
      { src: "/products/rode-podmic/white.png", alt: "Rode PodMic in white" },
      { src: "/products/rode-podmic/desk.jpg", alt: "Podcaster speaking into a Rode PodMic on a boom arm" },
      { src: "/products/rode-podmic/studio.jpg", alt: "Two-person podcast set up with white Rode PodMics" },
      { src: "/products/rode-podmic/close.jpg", alt: "Gamer streaming with a Rode PodMic" },
    ],
    stats: [
      { value: "Dynamic", label: "Rejects room noise" },
      { value: "Cardioid", label: "Focused on your voice" },
      { value: "Built-in", label: "Pop filter and shock mount" },
      { value: "All-metal", label: "Body and steel grille" },
    ],
    highlights: [
      {
        title: "That rich, warm podcast voice",
        body: "The PodMic's dynamic capsule is tuned for speech. Speak close to it and you get the full-bodied, detailed 'radio' sound listeners expect from a professional show. It's just as good for voice-overs, livestreams on YouTube and Twitch, and online meetings.",
        image: "/products/rode-podmic/desk.jpg",
      },
      {
        title: "Made for real rooms",
        body: "Most home studios and offices in Lagos aren't soundproofed. A dynamic mic like the PodMic picks up far less echo, fan noise and traffic than a condenser, so you can record a clean show in a normal room. With two or more hosts, each mic hears mostly its own speaker.",
        image: "/products/rode-podmic/studio.jpg",
      },
      {
        title: "Pop filter and shock mount built in",
        body: "An internal pop filter softens hard 'p' and 'b' sounds, and an internal shock mount reduces bumps and vibration from the desk. The integrated swing mount screws straight onto a boom arm such as the Rode PSA1+ or a desk stand, with no extra holder needed.",
        image: "/products/rode-podmic/close.jpg",
      },
      {
        title: "Built to last for years",
        body: "The robust all-metal body and stainless-steel mesh grille are made to survive daily recording, travel and the occasional knock. It needs no batteries or phantom power, so there's nothing to wear out. Choose classic black or white.",
        image: "/products/rode-podmic/white.png",
      },
    ],
    idealFor: [
      { title: "Podcasters", body: "Solo shows and multi-host setups with a RØDECaster or mixer." },
      { title: "Streamers and gamers", body: "Clear voice on stream without picking up your keyboard and room." },
      { title: "Voice-over and radio", body: "A warm, close-up broadcast sound." },
      { title: "Churches and studios", body: "Tough enough for daily use by different speakers." },
    ],
    notFor:
      "The PodMic connects by XLR only, so you need an audio interface, mixer or RØDECaster. If you want to plug straight into a computer or phone, choose the Rode PodMic USB (₦380,000), which has both USB-C and XLR. For singing and recording instruments, a condenser like the Rode NT-USB+ (₦390,000) captures more detail.",
    specs: [
      { label: "Type", value: "Dynamic microphone, end-address" },
      { label: "Polar pattern", value: "Cardioid" },
      { label: "Frequency range", value: "50 Hz–15 kHz" },
      { label: "Sensitivity", value: "−57 dBV (1.4 mV @ 94 dB SPL)" },
      { label: "Output impedance", value: "320 Ω" },
      { label: "Output", value: "3-pin XLR" },
      { label: "Power", value: "None needed (no phantom power)" },
      { label: "Mount", value: "Integrated swing mount; internal pop filter and shock mount" },
      { label: "Size and weight", value: "172 × 109 × 62 mm; 937 g" },
      { label: "Colours", value: "Black, white" },
      { label: "Works with", value: "Rode PSA1, PSA1+ and DS1 stands" },
    ],
    specsNote: "Figures are Rode's. Like most broadcast dynamic mics, the PodMic has a low output, so use it with an interface or mixer that has plenty of clean gain, such as a RØDECaster.",
    faqs: [
      {
        q: "Can I plug it straight into my laptop or phone?",
        a: "No. The PodMic has an XLR output, so it needs an audio interface, mixer or RØDECaster between it and your computer. If you want USB, the PodMic USB (₦380,000) plugs straight in.",
      },
      {
        q: "Does it need phantom power?",
        a: "No. It's a dynamic mic, so it doesn't need phantom power or batteries. Turning phantom power on won't harm it.",
      },
      {
        q: "Why does it sound quiet?",
        a: "Broadcast dynamic mics have a low output, so they need more gain than a condenser. Speak close to the mic, about a fist's width away, and use an interface or mixer with plenty of clean gain. We can suggest a good match.",
      },
      {
        q: "Does it come with a cable or stand?",
        a: "The PodMic comes on its own. You'll need an XLR cable and a boom arm or desk stand. The Rode PSA1+ boom arm is a popular pairing, and we can add both to your order.",
      },
      {
        q: "Which colours do you have?",
        a: "The PodMic comes in black and white. Tell us which you want on WhatsApp and we'll confirm stock.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "PodMic",
        price: 280_000,
        includes: ["Rode PodMic dynamic microphone (black or white, ask us which is in stock)"],
      },
    ],
  },
  {
    slug: "rode-nt-usb-plus",
    brand: "Rode",
    name: "Rode NT-USB+",
    category: "Audio",
    tagline: "Studio sound. Just plug in.",
    headline:
      "A professional USB condenser mic with a studio-grade capsule, Rode's low-noise Revolution Preamp and built-in APHEX processing, plus zero-latency headphone monitoring. Plug it into a computer, phone or tablet and record.",
    summary:
      "The NT-USB+ brings the sound of a studio condenser mic to your desk without an interface. Its cardioid capsule captures voices, singing and acoustic instruments with clarity and detail, and the high-gain Revolution Preamp keeps recordings clean and quiet. Built-in APHEX processing, including a compressor, noise gate and Aural Exciter, can polish your sound using Rode's free apps. A headphone output with volume and mix controls lets you hear yourself with no delay. It comes with a desk stand and a pop filter, so you can start recording straight away.",
    image: "/products/rode-nt-usb-plus/main.png",
    hero: "/products/rode-nt-usb-plus/hero.jpg",
    gallery: [
      { src: "/products/rode-nt-usb-plus/main.png", alt: "Rode NT-USB+ USB microphone on its tripod stand" },
      { src: "/products/rode-nt-usb-plus/front.png", alt: "Rode NT-USB+ from the front with pop filter" },
      { src: "/products/rode-nt-usb-plus/rear.png", alt: "Rear of the Rode NT-USB+ with headphone and mix controls" },
      { src: "/products/rode-nt-usb-plus/box.jpg", alt: "What's in the box: NT-USB+, pop filter, tripod, ring mount and USB-C cable" },
      { src: "/products/rode-nt-usb-plus/podcast.jpg", alt: "Podcaster recording at a desk with the Rode NT-USB+" },
      { src: "/products/rode-nt-usb-plus/music.jpg", alt: "Musician recording guitar with the Rode NT-USB+" },
    ],
    stats: [
      { value: "Plug-in", label: "USB-C, no interface needed" },
      { value: "24-bit", label: "48 kHz recording" },
      { value: "APHEX", label: "Built-in processing" },
      { value: "0 ms", label: "Latency-free monitoring" },
    ],
    highlights: [
      {
        title: "Studio condenser sound over USB",
        body: "The NT-USB+ uses a studio-grade condenser capsule with a tight cardioid pattern, so it captures vocals, voice-overs, podcasts and acoustic guitar with the detail you'd expect from a professional studio mic. Rode's ultra-low-noise Revolution Preamp gives plenty of clean gain, and it records at 24-bit/48 kHz.",
        image: "/products/rode-nt-usb-plus/music.jpg",
      },
      {
        title: "Works with computer, phone and tablet",
        body: "It's class-compliant, so it works on Windows and Mac with no drivers, and with Android phones and iPads over USB-C. It's ready for Zoom, Teams, OBS, GarageBand, Audacity and any recording app. iPhones with a Lightning port need an Apple Lightning-to-USB-C cable, sold separately.",
        image: "/products/rode-nt-usb-plus/phone.jpg",
      },
      {
        title: "Pro processing, one click away",
        body: "Inside the mic is APHEX audio processing, including a compressor, noise gate, high-pass filter, Aural Exciter and Big Bottom, the same tools used in pro studios. Turn them on in Rode's free RØDE Central, RØDE Connect or RØDE Reporter apps for a polished, radio-ready sound without extra software.",
        image: "/products/rode-nt-usb-plus/central.jpg",
      },
      {
        title: "Hear yourself with no delay",
        body: "Plug your headphones into the mic itself to hear exactly what you're recording with zero latency. Dedicated controls set the headphone volume and the mix between your mic and the computer's audio, which is perfect for singing along to a backing track or monitoring a call.",
        image: "/products/rode-nt-usb-plus/controls.jpg",
      },
    ],
    idealFor: [
      { title: "Home studios and musicians", body: "Vocals and acoustic instruments, straight into your laptop." },
      { title: "Podcasters and YouTubers", body: "Broadcast-quality voice with built-in processing." },
      { title: "Remote workers and teachers", body: "Clear voice on Zoom, Teams and online classes." },
      { title: "Voice-over artists", body: "Clean, detailed recordings without an interface." },
    ],
    notFor:
      "As a condenser, the NT-USB+ picks up more of a noisy or echoey room than a dynamic mic. If you record in an untreated room or want the classic broadcast sound, the Rode PodMic USB (₦380,000) may suit you better. If you already have an interface and want an XLR studio mic, look at the Rode NT1 (₦420,000).",
    specs: [
      { label: "Type", value: "Condenser USB microphone, pressure gradient" },
      { label: "Polar pattern", value: "Cardioid" },
      { label: "Frequency range", value: "20 Hz–20 kHz" },
      { label: "Max SPL", value: "118 dB SPL (10% THD)" },
      { label: "Dynamic range", value: "97 dB" },
      { label: "Resolution", value: "24-bit / 48 kHz" },
      { label: "Connection", value: "USB-C (class compliant)" },
      { label: "Headphone output", value: "3.5 mm, zero-latency, with volume and mix controls" },
      { label: "Processing", value: "APHEX compressor, noise gate, high-pass filter, Aural Exciter, Big Bottom" },
      { label: "Power", value: "USB bus power, 5 V 500 mA" },
      { label: "Compatibility", value: "macOS 10.14+, Windows 10+, iOS 14+, Android 11+" },
      { label: "Size and weight", value: "184 × 62 × 50 mm; 540 g (730 g with accessories)" },
    ],
    specsNote: "Figures are Rode's. The APHEX processing is switched on and adjusted through Rode's free apps.",
    faqs: [
      {
        q: "Do I need an audio interface?",
        a: "No. The NT-USB+ has its own preamp and converter. Plug the USB-C cable into your computer, phone or tablet and it's ready to record.",
      },
      {
        q: "Will it work with my phone?",
        a: "Yes, with Android phones and iPhones or iPads that have a USB-C port. For older iPhones with a Lightning port, you'll need an Apple Lightning-to-USB-C cable, sold separately.",
      },
      {
        q: "Is it good for singing?",
        a: "Yes. It's a studio condenser, so it captures vocals and acoustic instruments with plenty of detail. The zero-latency headphone output lets you hear yourself clearly while you sing along to a track.",
      },
      {
        q: "NT-USB+ or PodMic USB?",
        a: "Choose the NT-USB+ for music, vocals and detailed voice recording in a reasonably quiet room. Choose the PodMic USB for podcasting and streaming in a noisy or echoey room, because a dynamic mic picks up less of the background.",
      },
      {
        q: "Do I need special software?",
        a: "No. It works with any recording, streaming or meeting app. Rode's free apps, RØDE Central, RØDE Connect and RØDE Reporter, let you turn on the APHEX processing and update the firmware.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "NT-USB+",
        price: 390_000,
        includes: [
          "Rode NT-USB+ USB microphone",
          "Pop filter",
          "Desktop tripod stand",
          "Ring mount",
          "USB-C to USB-C cable",
        ],
      },
    ],
  },
  {
    slug: "rode-wireless-go-ii",
    brand: "Rode",
    name: "Rode Wireless GO II",
    category: "Audio",
    tagline: "Two mics. One tiny receiver. Zero cables.",
    headline:
      "A dual-channel wireless mic system with two clip-on transmitters and one receiver, so you can record two people at once on a camera, phone or computer, up to 200 m away.",
    summary:
      "The Wireless GO II is one of the most trusted wireless mic kits for interviews, vlogs and content creation. Clip a transmitter on each speaker, plug the receiver into your camera, phone or laptop, and you're recording. Each transmitter has a built-in mic and a 3.5 mm input for a lavalier, and can record onboard as a backup. Record both people mixed together or on separate channels, and use the receiver as a USB-C audio interface for your computer or phone.",
    image: "/products/rode-wireless-go-ii/main.png",
    hero: "/products/rode-wireless-go-ii/hero.jpg",
    gallery: [
      { src: "/products/rode-wireless-go-ii/main.png", alt: "Rode Wireless GO II receiver and two transmitters" },
      { src: "/products/rode-wireless-go-ii/set.png", alt: "Wireless GO II receiver with screen beside a transmitter" },
      { src: "/products/rode-wireless-go-ii/interview.jpg", alt: "Two people in a seated interview wearing Wireless GO II transmitters" },
      { src: "/products/rode-wireless-go-ii/reporter.jpg", alt: "Presenters talking to camera with Wireless GO II clipped on" },
      { src: "/products/rode-wireless-go-ii/vlog.jpg", alt: "Couple vlogging on a phone with Wireless GO II" },
      { src: "/products/rode-wireless-go-ii/podcast.png", alt: "Two-person podcast recorded on a laptop with Wireless GO II" },
    ],
    stats: [
      { value: "2", label: "Transmitters, record two people" },
      { value: "200 m", label: "Range, line of sight" },
      { value: "7 hrs", label: "Battery per unit" },
      { value: "30 g", label: "Per transmitter" },
    ],
    highlights: [
      {
        title: "Record two people at once",
        body: "Two transmitters connect to one receiver, so you can mic up both sides of an interview, a co-hosted show or a couple's vlog. Record both voices mixed together, or switch to split mode and put each person on their own channel so you can balance them later in editing.",
        image: "/products/rode-wireless-go-ii/interview.jpg",
      },
      {
        title: "Camera, phone or computer",
        body: "The receiver connects to cameras through the 3.5 mm output, and to computers, Android phones and iPhones through USB-C, where it works as a digital audio interface. That means the same kit works for YouTube, TikTok, Zoom, live streams and professional shoots.",
        image: "/products/rode-wireless-go-ii/vlog.jpg",
      },
      {
        title: "A strong, stable signal",
        body: "Rode's Series IV 2.4 GHz digital transmission is encrypted and reaches up to 200 m with a clear line of sight. It holds up well in busy places like events, markets and city streets, and a safety channel can record a quieter backup to protect you from sudden shouts or loud moments.",
        image: "/products/rode-wireless-go-ii/reporter.jpg",
      },
      {
        title: "Tiny, clip-on and all-day ready",
        body: "Each transmitter weighs just 30 g and clips onto a shirt, collar or pocket. Use the built-in mic, or plug in a lavalier for a cleaner look on camera. Each unit runs for up to 7 hours on a charge, and the transmitters can record onboard as a backup if the signal ever drops.",
        image: "/products/rode-wireless-go-ii/fitness.jpg",
      },
    ],
    idealFor: [
      { title: "Interviews and talk shows", body: "Two guests, each on their own clear channel." },
      { title: "Vloggers and content creators", body: "Clip on and shoot on your phone or camera." },
      { title: "Journalists and event coverage", body: "Reliable wireless sound up to 200 m away." },
      { title: "Online classes and podcasts", body: "Plug into a laptop over USB-C and record." },
    ],
    notFor:
      "If you want the newest model for less, the Rode Wireless GO (Gen 3) (₦300,000) adds 32-bit float backup recording and longer range. For film and TV work with timecode and lavalier mics included, choose the Rode Wireless PRO (₦500,000).",
    specs: [
      { label: "Type", value: "Dual-channel digital wireless mic system (2 transmitters, 1 receiver)" },
      { label: "Mic capsule", value: "Pre-polarised pressure transducer, omnidirectional" },
      { label: "Frequency range", value: "50 Hz–20 kHz" },
      { label: "Max SPL", value: "112 dB SPL" },
      { label: "Self-noise", value: "22 dBA" },
      { label: "Transmission", value: "Series IV 2.4 GHz digital, 128-bit encryption" },
      { label: "Range", value: "Up to 200 m (line of sight)" },
      { label: "Inputs", value: "Built-in mic; 3.5 mm TRS lavalier input on each transmitter" },
      { label: "Outputs", value: "3.5 mm TRS analog; USB-C digital audio" },
      { label: "Battery", value: "Built-in rechargeable, up to 7 hours; charges by USB-C" },
      { label: "Weight", value: "Transmitter 30 g; receiver 32 g" },
      { label: "Size", value: "44 × 45.3 × 18.3 mm (transmitter)" },
      { label: "Computer support", value: "macOS 10.11+, Windows 10+" },
    ],
    specsNote: "Figures are Rode's. Range depends on line of sight and how busy the area is with other wireless signals.",
    faqs: [
      {
        q: "Will it work with my phone?",
        a: "Yes. Connect the receiver to an Android phone or a USB-C iPhone with a USB-C cable, or to a Lightning iPhone with Rode's SC15 cable, sold separately. You can also use the 3.5 mm output with a TRRS cable.",
      },
      {
        q: "Will it work with my camera?",
        a: "Yes. The included 3.5 mm cable plugs into the mic input of most DSLR, mirrorless and video cameras. You can mount the receiver on the camera's hot shoe.",
      },
      {
        q: "Can I use just one transmitter?",
        a: "Yes. Use one transmitter for solo videos and keep the second as a spare, or use both when you need to record two people.",
      },
      {
        q: "Wireless GO II or Wireless GO (Gen 3)?",
        a: "Both record two people. The Gen 3 is the newer model and adds 32-bit float backup recording, GainAssist and longer range, and it costs less on our price list. Choose the GO II if you prefer this model or already use one.",
      },
      {
        q: "Can I add a lavalier mic?",
        a: "Yes. Each transmitter has a 3.5 mm input for a lavalier, such as the Rode Lavalier GO, for a more discreet look on camera.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "Wireless GO II kit",
        price: 470_000,
        includes: [
          "2 Wireless GO II transmitters with built-in mics",
          "1 Wireless GO II receiver",
          "3 furry windshields",
          "3 USB-C to USB-A cables",
          "3.5 mm TRS cable for cameras",
          "Carry pouch",
        ],
      },
    ],
  },
  {
    slug: "rode-nt-usb",
    brand: "Rode",
    name: "Rode NT-USB",
    category: "Audio",
    tagline: "The studio mic that plugs straight in.",
    headline:
      "A studio-quality USB condenser mic for singing, voice-over, podcasting and streaming, with zero-latency headphone monitoring, a pop filter and a desk tripod in the box.",
    summary:
      "The NT-USB brings studio-grade condenser sound to your computer, with no interface needed. Its cardioid capsule captures voices and acoustic instruments with clarity and warmth, and the headphone output on the mic lets you hear yourself with no delay. Dedicated controls set the headphone volume and the mix between your mic and the computer's sound. It comes with a pop filter, a desktop tripod and a ring mount, so you can start recording straight away.",
    image: "/products/rode-nt-usb/main.png",
    hero: "/products/rode-nt-usb/hero.jpg",
    gallery: [
      { src: "/products/rode-nt-usb/main.png", alt: "Rode NT-USB microphone on its desktop tripod" },
      { src: "/products/rode-nt-usb/front.png", alt: "Rode NT-USB from the front" },
      { src: "/products/rode-nt-usb/back.png", alt: "Rode NT-USB with its pop filter attached" },
      { src: "/products/rode-nt-usb/hero.jpg", alt: "Rode NT-USB on a desk beside a keyboard and monitor" },
    ],
    stats: [
      { value: "Plug-in", label: "USB, no interface needed" },
      { value: "0 ms", label: "Latency-free monitoring" },
      { value: "Cardioid", label: "Focused on your voice" },
      { value: "In the box", label: "Pop filter and tripod" },
    ],
    highlights: [
      {
        title: "Studio condenser sound over USB",
        body: "The NT-USB uses a studio-grade condenser capsule, so vocals, voice-overs and acoustic guitar sound full, clear and detailed. It plugs straight into a USB port and works with any recording, streaming or meeting app, with no drivers to install.",
        image: "/products/rode-nt-usb/hero.jpg",
      },
      {
        title: "Hear yourself with no delay",
        body: "Plug headphones into the mic itself to hear exactly what you're recording, with zero latency. One knob sets the headphone volume and the other sets the mix between your voice and the computer's playback, which is ideal for singing along to a beat or monitoring a call.",
        image: "/products/rode-nt-usb/front.png",
      },
      {
        title: "Ready to record out of the box",
        body: "A pop filter clips onto the mic to soften hard 'p' and 'b' sounds, and the desktop tripod puts the mic at mouth height on your desk. The ring mount lets you move it onto a standard mic stand or boom arm whenever you want.",
        image: "/products/rode-nt-usb/back.png",
      },
      {
        title: "Built to last",
        body: "Like all Rode studio mics, the NT-USB is designed and made in Sydney, Australia, with a solid build that stands up to daily use in home studios, churches and offices.",
        image: "/products/rode-nt-usb/main.png",
      },
    ],
    idealFor: [
      { title: "Home studios and singers", body: "Vocals and acoustic instruments, straight into your laptop." },
      { title: "Podcasters and YouTubers", body: "Clean, studio-quality voice recording." },
      { title: "Streamers", body: "Clear voice on stream with easy monitoring." },
      { title: "Remote work and online teaching", body: "A big step up from a laptop or headset mic." },
    ],
    notFor:
      "The newer Rode NT-USB+ (₦390,000) records at 24-bit, adds built-in APHEX processing and works with phones over USB-C, and it costs less on our price list. If you record in a noisy or echoey room, the dynamic Rode PodMic USB (₦380,000) picks up less of the background.",
    specs: [
      { label: "Type", value: "Condenser USB microphone, pressure gradient, side address" },
      { label: "Capsule", value: "0.50\"" },
      { label: "Polar pattern", value: "Cardioid" },
      { label: "Frequency range", value: "20 Hz–20 kHz" },
      { label: "Max SPL", value: "110 dB SPL" },
      { label: "Resolution", value: "16-bit / 48 kHz" },
      { label: "Connection", value: "USB" },
      { label: "Headphone output", value: "3.5 mm, zero-latency, with volume and mix controls" },
      { label: "Power", value: "USB bus power" },
      { label: "Size and weight", value: "184 × 62 × 50 mm; 520 g" },
    ],
    specsNote: "Figures are Rode's. The NT-USB works with Windows and Mac computers without extra drivers.",
    faqs: [
      {
        q: "Do I need an audio interface?",
        a: "No. The NT-USB has its own converter and headphone output. Plug it into a USB port on your computer and it's ready to record.",
      },
      {
        q: "Is it good for singing?",
        a: "Yes. It's a studio condenser, so it captures vocals with plenty of detail, and the zero-latency headphone output lets you hear yourself clearly while you record.",
      },
      {
        q: "Will it work with my phone?",
        a: "The NT-USB is made mainly for computers. If you want to record on a phone or tablet over USB-C, the newer NT-USB+ is the better choice.",
      },
      {
        q: "NT-USB or NT-USB+?",
        a: "The NT-USB+ is the newer model, with 24-bit recording, built-in APHEX processing and USB-C, and it costs less on our price list. Choose the NT-USB if you want this classic model.",
      },
      {
        q: "Can I put it on a boom arm?",
        a: "Yes. Use the included ring mount to attach it to a standard mic stand or a boom arm such as the Rode PSA1+.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "NT-USB",
        price: 400_000,
        includes: [
          "Rode NT-USB USB microphone",
          "Pop filter",
          "Desktop tripod stand",
          "Ring mount",
          "USB cable",
        ],
      },
    ],
  },
  {
    slug: "rode-nt1",
    brand: "Rode",
    name: "Rode NT1",
    category: "Audio",
    tagline: "One of the world's quietest studio mics.",
    headline:
      "A large-diaphragm studio condenser mic with just 4.5 dBA self-noise, giving vocals, voice-overs and instruments a warm, detailed, professional sound.",
    summary:
      "The NT1 is a favourite in home and professional studios for its incredibly low noise and smooth, detailed sound. Its 1\" HF1 capsule captures every nuance of a vocal or acoustic instrument, while self-noise of only 4.5 dBA means quiet passages stay clean and clear. The capsule is mounted on an internal shock mount to cut handling and stand noise. It connects by XLR to any interface, mixer or RØDECaster with phantom power, and it's designed and made in Sydney, Australia.",
    image: "/products/rode-nt1/main.png",
    hero: "/products/rode-nt1/hero.jpg",
    gallery: [
      { src: "/products/rode-nt1/main.png", alt: "Rode NT1 studio condenser mic in a shock mount with pop filter" },
      { src: "/products/rode-nt1/nopop.png", alt: "Rode NT1 in the SM6 shock mount" },
      { src: "/products/rode-nt1/front.png", alt: "Rode NT1 from the front with pop filter" },
      { src: "/products/rode-nt1/box.png", alt: "Rode NT1 side profile in its shock mount" },
      { src: "/products/rode-nt1/studio.jpg", alt: "Singer recording vocals into a Rode NT1" },
      { src: "/products/rode-nt1/jam.jpg", alt: "Musician recording guitar with a Rode NT1 on a boom arm" },
    ],
    stats: [
      { value: "4.5 dBA", label: "Ultra-low self-noise" },
      { value: "1\"", label: "Large-diaphragm capsule" },
      { value: "132 dB", label: "Max SPL" },
      { value: "XLR", label: "P24 / P48 phantom power" },
    ],
    highlights: [
      {
        title: "Studio-quiet recordings",
        body: "At just 4.5 dBA, the NT1 is one of the quietest studio microphones in the world. Soft vocals, whispered voice-overs and gentle acoustic parts stay clean, with no hiss to clean up later. It's a big reason producers choose it for professional-sounding music and voice work.",
        image: "/products/rode-nt1/studio.jpg",
      },
      {
        title: "Warm, detailed, modern sound",
        body: "The 1\" HF1 capsule gives a smooth, warm tone with clear, natural highs. It flatters vocals, rap and spoken word, and it's just as good on acoustic guitar, piano and other instruments. The cardioid pattern focuses on the sound in front of it.",
        image: "/products/rode-nt1/hero.jpg",
      },
      {
        title: "Handles loud sources too",
        body: "With a max SPL of 132 dB, the NT1 copes with powerful singers, guitar amps and percussion without distorting. The capsule sits on Rode's internal shock mount, which cuts down rumble and vibration from the stand and floor.",
        image: "/products/rode-nt1/jam.jpg",
      },
      {
        title: "Made to last a career",
        body: "The NT1 has a tough, black-coated metal body and is designed and made in Sydney, Australia. Use it with the Rode SM6 shock mount and pop filter for the cleanest results on vocals.",
        image: "/products/rode-nt1/nopop.png",
      },
    ],
    idealFor: [
      { title: "Music producers and singers", body: "Professional vocals for songs, rap and covers." },
      { title: "Voice-over artists", body: "Clean, quiet recordings for ads, audiobooks and narration." },
      { title: "Home and church studios", body: "A studio standard for vocals and instruments." },
      { title: "Podcasters with treated rooms", body: "Rich, detailed voice with very low noise." },
    ],
    notFor:
      "The NT1 connects by XLR, so you need an audio interface, mixer or RØDECaster with phantom power. If you want to plug straight into a computer, the Rode NT-USB+ (₦390,000) is simpler. As a sensitive condenser, it also picks up room echo, so in an untreated room a dynamic mic like the Rode PodMic (₦280,000) may suit you better.",
    specs: [
      { label: "Type", value: "Studio condenser microphone, pressure gradient, side address" },
      { label: "Capsule", value: "1.00\" HF1" },
      { label: "Polar pattern", value: "Cardioid" },
      { label: "Frequency range", value: "20 Hz–20 kHz" },
      { label: "Sensitivity", value: "−29 dB re 1 V/Pa (35 mV @ 94 dB SPL)" },
      { label: "Self-noise", value: "4.5 dBA" },
      { label: "Max SPL", value: "132 dB SPL" },
      { label: "Max output", value: "8.0 mV" },
      { label: "Output impedance", value: "100 Ω" },
      { label: "Power", value: "P24 or P48 phantom power" },
      { label: "Connector", value: "3-pin XLR" },
      { label: "Size and weight", value: "187 × 50 × 50 mm; 440 g" },
    ],
    specsNote: "Figures are Rode's. The NT1 needs 24 V or 48 V phantom power from an interface, mixer or RØDECaster.",
    faqs: [
      {
        q: "What do I need to use it?",
        a: "An audio interface, mixer or RØDECaster with phantom power, and an XLR cable. A shock mount and pop filter give the best results on vocals. We can suggest a full setup to match your budget.",
      },
      {
        q: "NT1 or NT1 Kit?",
        a: "The NT1 Kit (₦500,000) comes with extra accessories. Ask us on WhatsApp and we'll tell you exactly what's in each box before you pay.",
      },
      {
        q: "NT1 or NT1-A?",
        a: "Both are excellent, very quiet studio mics. The NT1 has a modern, slightly smoother sound and an all-black finish. The NT1-A (₦580,000) is the classic version with a brighter, airy top end.",
      },
      {
        q: "Is it good for rap and Afrobeats vocals?",
        a: "Yes. Its low noise, warm body and clear highs make it a popular choice for modern vocals, and it handles loud, energetic performances without distorting.",
      },
      {
        q: "Will it work in my bedroom studio?",
        a: "Yes, but condenser mics pick up room echo. Hanging blankets, foam panels or a reflection filter around the mic will make a big difference.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "NT1 studio mic",
        price: 420_000,
        includes: [
          "Rode NT1 studio condenser microphone",
          "Ask us on WhatsApp for the full box contents in stock",
        ],
      },
    ],
  },
  {
    slug: "rode-nt1-kit",
    brand: "Rode",
    name: "Rode NT1 Kit",
    category: "Audio",
    tagline: "The quiet studio mic, ready to record.",
    headline:
      "The Rode NT1 studio condenser mic packaged as a vocal recording kit, with the SM6 shock mount and pop filter so you can set up and record clean vocals on day one.",
    summary:
      "The NT1 Kit pairs one of the world's quietest studio microphones with the accessories it needs for vocals. The NT1's 1\" capsule and 4.5 dBA self-noise give a warm, detailed, hiss-free sound, while the SM6 shock mount isolates it from stand and floor vibration and the detachable pop filter tames hard 'p' and 'b' sounds. Add an XLR cable and an audio interface with phantom power, and you have a complete professional vocal chain for music, voice-over and podcasting.",
    image: "/products/rode-nt1-kit/main.png",
    hero: "/products/rode-nt1-kit/hero.jpg",
    gallery: [
      { src: "/products/rode-nt1-kit/main.png", alt: "Rode NT1 in the SM6 shock mount with pop filter" },
      { src: "/products/rode-nt1-kit/sm6.png", alt: "Rode SM6 shock mount with detachable pop filter" },
      { src: "/products/rode-nt1-kit/front.png", alt: "Rode NT1 kit from the front with the pop filter fitted" },
      { src: "/products/rode-nt1-kit/studio.jpg", alt: "Musician recording with the Rode NT1 on a boom arm" },
      { src: "/products/rode-nt1-kit/jam.jpg", alt: "Singer recording vocals into the Rode NT1" },
    ],
    stats: [
      { value: "4.5 dBA", label: "Ultra-low self-noise" },
      { value: "1\"", label: "Large-diaphragm capsule" },
      { value: "SM6", label: "Shock mount included" },
      { value: "Pop filter", label: "Included, detachable" },
    ],
    highlights: [
      {
        title: "A full vocal setup in one box",
        body: "Buying a studio mic usually means hunting down a shock mount and pop filter separately. The NT1 Kit includes Rode's SM6 shock mount with a detachable pop filter, so the mic arrives ready for vocals. Screw it onto any standard mic stand or boom arm and start recording.",
        image: "/products/rode-nt1-kit/main.png",
      },
      {
        title: "Studio-quiet, hiss-free recordings",
        body: "At just 4.5 dBA, the NT1 is one of the quietest studio microphones in the world. Soft vocals, whispered voice-overs and gentle acoustic parts stay clean, with no background hiss to clean up later.",
        image: "/products/rode-nt1-kit/studio.jpg",
      },
      {
        title: "Isolation that you can hear",
        body: "The SM6 suspends the mic in elastic, so bumps, footsteps and desk knocks don't reach the recording. The pop filter sits at the right distance in front of the capsule and swings out of the way when you don't need it.",
        image: "/products/rode-nt1-kit/sm6.png",
      },
      {
        title: "Warm, modern sound for any voice",
        body: "The 1\" HF1 capsule gives a smooth, warm tone with clear, natural highs. It suits singing, rap and spoken word, handles loud performers up to 132 dB SPL, and works just as well on acoustic guitar and piano.",
        image: "/products/rode-nt1-kit/jam.jpg",
      },
    ],
    idealFor: [
      { title: "Singers and music producers", body: "A complete, professional vocal chain." },
      { title: "Voice-over artists", body: "Clean, quiet takes for ads, audiobooks and narration." },
      { title: "Home and church studios", body: "One purchase covers mic, mount and pop filter." },
      { title: "Upgrading from a USB mic", body: "A big step up in quality and noise floor." },
    ],
    notFor:
      "The NT1 connects by XLR, so you need an audio interface, mixer or RØDECaster with phantom power. If you already own a shock mount and pop filter, the Rode NT1 (₦420,000) saves you money. For a brighter, classic sound, look at the Rode NT1-A (₦580,000). To plug straight into a computer, choose the Rode NT-USB+ (₦390,000).",
    specs: [
      { label: "Type", value: "Studio condenser microphone, pressure gradient, side address" },
      { label: "Capsule", value: "1.00\" HF1" },
      { label: "Polar pattern", value: "Cardioid" },
      { label: "Frequency range", value: "20 Hz–20 kHz" },
      { label: "Sensitivity", value: "−29 dB re 1 V/Pa (35 mV @ 94 dB SPL)" },
      { label: "Self-noise", value: "4.5 dBA" },
      { label: "Max SPL", value: "132 dB SPL" },
      { label: "Output impedance", value: "100 Ω" },
      { label: "Power", value: "P24 or P48 phantom power" },
      { label: "Connector", value: "3-pin XLR" },
      { label: "Mic size and weight", value: "187 × 50 × 50 mm; 440 g" },
      { label: "Shock mount", value: "Rode SM6 with detachable pop filter" },
    ],
    specsNote: "Figures are Rode's. Kit contents can vary between production runs, so we confirm exactly what's in the box before you pay.",
    faqs: [
      {
        q: "What's the difference between the NT1 and the NT1 Kit?",
        a: "It's the same microphone. The kit adds the SM6 shock mount and pop filter, which you'd otherwise need to buy separately for good vocal recordings.",
      },
      {
        q: "What else do I need?",
        a: "An audio interface, mixer or RØDECaster with phantom power, a mic stand or boom arm, and headphones. If an XLR cable isn't in the box we have in stock, we'll tell you before you order.",
      },
      {
        q: "NT1 Kit or NT1-A?",
        a: "Both are very quiet studio mics with a shock mount and pop filter. The NT1 has a smoother, modern sound and black finish. The NT1-A (₦580,000) has a brighter, airy top end and a classic satin-nickel finish.",
      },
      {
        q: "Is it good for Afrobeats and rap vocals?",
        a: "Yes. Its low noise, warm body and clear highs suit modern vocals, and it handles loud, energetic performances without distorting.",
      },
      {
        q: "Will it work in my bedroom studio?",
        a: "Yes, but condenser mics pick up room echo. Foam panels, heavy curtains or a reflection filter behind the mic make a big difference.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "NT1 Kit",
        price: 500_000,
        includes: [
          "Rode NT1 studio condenser microphone",
          "Rode SM6 shock mount",
          "Detachable pop filter",
          "We confirm the full box contents on WhatsApp",
        ],
      },
    ],
  },
  {
    slug: "rode-nt1-a",
    brand: "Rode",
    name: "Rode NT1-A",
    category: "Audio",
    tagline: "The classic vocal mic, complete.",
    headline:
      "A legendary large-diaphragm studio condenser mic with a bright, airy sound and 5 dBA self-noise, sold as Rode's complete vocal recording solution with shock mount, pop filter and cable.",
    summary:
      "For years the NT1-A has been the first serious studio mic for countless singers, rappers and voice-over artists. Its 1\" capsule delivers a warm body with a crisp, airy top end that helps vocals cut through a mix, and at 5 dBA it's one of the quietest mics of its kind. It comes as Rode's Complete Vocal Recording Solution, with the SM6 shock mount, detachable pop filter, XLR cable and dust cover, so it's ready to use with any interface that has phantom power.",
    image: "/products/rode-nt1-a/main.png",
    hero: "/products/rode-nt1-a/hero.jpg",
    gallery: [
      { src: "/products/rode-nt1-a/main.png", alt: "Rode NT1-A studio condenser microphone" },
      { src: "/products/rode-nt1-a/profile.jpg", alt: "Rode NT1-A in the SM6 shock mount with pop filter" },
      { src: "/products/rode-nt1-a/back.png", alt: "Rode NT1-A from the back" },
      { src: "/products/rode-nt1-a/home.jpg", alt: "Rode NT1-A set up in a home studio" },
      { src: "/products/rode-nt1-a/rapper.jpg", alt: "Rapper recording vocals into a Rode NT1-A" },
      { src: "/products/rode-nt1-a/m2.jpg", alt: "Singer-songwriter recording guitar and vocals with the NT1-A" },
    ],
    stats: [
      { value: "5 dBA", label: "Ultra-low self-noise" },
      { value: "1\"", label: "Large-diaphragm capsule" },
      { value: "137 dB", label: "Max SPL" },
      { value: "Complete", label: "Mount, filter and cable" },
    ],
    highlights: [
      {
        title: "The sound of countless hit vocals",
        body: "The NT1-A's bright, airy top end and full low-mids give vocals presence and polish straight out of the mic. It's a favourite for R&B, Afrobeats, gospel and rap, and it flatters acoustic guitar, piano and strings too.",
        image: "/products/rode-nt1-a/m1.jpg",
      },
      {
        title: "Quiet enough for anything",
        body: "With just 5 dBA self-noise, the NT1-A captures soft, intimate takes without hiss. That makes it a strong choice for voice-over, audiobooks and quiet acoustic music, where every bit of noise is audible.",
        image: "/products/rode-nt1-a/hero.jpg",
      },
      {
        title: "Handles loud performances",
        body: "A max SPL of 137 dB means belting singers, guitar amps and drum overheads won't distort the mic. Its JFET electronics with a bipolar output buffer keep the signal clean and strong into your interface.",
        image: "/products/rode-nt1-a/rapper.jpg",
      },
      {
        title: "Everything you need in the box",
        body: "Rode packages the NT1-A as a Complete Vocal Recording Solution, with the SM6 shock mount and pop filter, a 6 m XLR cable and a dust cover. Just add a stand and an interface with phantom power.",
        image: "/products/rode-nt1-a/profile.jpg",
      },
    ],
    idealFor: [
      { title: "Singers and rappers", body: "Bright, present vocals that sit well in a mix." },
      { title: "Music producers", body: "A trusted studio standard for vocals and instruments." },
      { title: "Voice-over and audiobooks", body: "Very low noise for clean spoken word." },
      { title: "Church and home studios", body: "A complete kit in one purchase." },
    ],
    notFor:
      "The NT1-A needs an audio interface, mixer or RØDECaster with phantom power. If you prefer a smoother, darker sound, the Rode NT1 Kit (₦500,000) costs less. If you record in a noisy or untreated room, a dynamic mic like the Rode PodMic (₦280,000) picks up less of the room. To plug straight into a computer, choose the Rode NT-USB+ (₦390,000).",
    specs: [
      { label: "Type", value: "Studio condenser microphone, pressure gradient, side address" },
      { label: "Active electronics", value: "JFET impedance converter with bipolar output buffer" },
      { label: "Capsule", value: "1.00\"" },
      { label: "Polar pattern", value: "Cardioid" },
      { label: "Frequency range", value: "20 Hz–20 kHz" },
      { label: "Sensitivity", value: "−32 dB re 1 V/Pa (25 mV @ 94 dB SPL)" },
      { label: "Self-noise", value: "5 dBA" },
      { label: "Max SPL", value: "137 dB SPL" },
      { label: "Max output", value: "13.7 mV" },
      { label: "Output impedance", value: "100 Ω" },
      { label: "Power", value: "P24 or P48 phantom power" },
      { label: "Connector", value: "3-pin XLR, balanced" },
      { label: "Size and weight", value: "190 × 50 × 50 mm; 326 g" },
    ],
    specsNote: "Figures are Rode's. The NT1-A needs 24 V or 48 V phantom power from an interface, mixer or RØDECaster.",
    faqs: [
      {
        q: "What's in the box?",
        a: "Rode sells the NT1-A as a Complete Vocal Recording Solution: the mic, the SM6 shock mount with pop filter, a 6 m XLR cable and a dust cover. We confirm the contents of the stock we have before you pay.",
      },
      {
        q: "NT1-A or NT1?",
        a: "Both are among the quietest studio mics you can buy. The NT1-A is brighter and airier, which many singers love for presence. The NT1 is smoother and slightly darker. If you're unsure, tell us your voice and style on WhatsApp and we'll help.",
      },
      {
        q: "What else do I need?",
        a: "An audio interface or mixer with phantom power, a mic stand or boom arm, and headphones. We can suggest an interface to match your budget.",
      },
      {
        q: "Is it good for beginners?",
        a: "Yes. It's one of the most popular first studio mics because it sounds professional with very little effort, and the kit includes everything except a stand and interface.",
      },
      {
        q: "Will it pick up my room?",
        a: "As a sensitive condenser, yes. Record away from bare walls and add foam, curtains or a reflection filter for the cleanest vocals.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "NT1-A vocal recording kit",
        price: 580_000,
        includes: [
          "Rode NT1-A studio condenser microphone",
          "Rode SM6 shock mount with detachable pop filter",
          "6 m XLR cable",
          "Dust cover",
        ],
      },
    ],
  },
  {
    slug: "rode-nt-usb-mini",
    brand: "Rode",
    name: "Rode NT-USB Mini",
    category: "Audio",
    tagline: "Big studio sound. Small desk footprint.",
    headline:
      "A compact USB microphone with studio-quality sound, a built-in headphone amp and a magnetic desk stand, made for streaming, podcasting, gaming and online work.",
    summary:
      "The NT-USB Mini packs Rode's studio sound into a small, solid microphone that plugs straight into your computer over USB-C. It records at 24-bit / 48 kHz, has a zero-latency headphone output with its own volume knob, and sits on a weighted magnetic stand that comes off easily so you can move the mic onto a boom arm. Pair it with free RØDE Connect or UNIFY software for multi-mic podcasts and streams.",
    image: "/products/rode-nt-usb-mini/main.png",
    hero: "/products/rode-nt-usb-mini/hero.jpg",
    gallery: [
      { src: "/products/rode-nt-usb-mini/main.png", alt: "Rode NT-USB Mini on its magnetic desk stand" },
      { src: "/products/rode-nt-usb-mini/front.png", alt: "Rode NT-USB Mini from the front" },
      { src: "/products/rode-nt-usb-mini/back.png", alt: "Rode NT-USB Mini from the back showing the USB-C port" },
      { src: "/products/rode-nt-usb-mini/desk.png", alt: "Rode NT-USB Mini on a gaming desk" },
      { src: "/products/rode-nt-usb-mini/arm.jpg", alt: "Rode NT-USB Mini on a boom arm above a gaming setup" },
      { src: "/products/rode-nt-usb-mini/stream.jpg", alt: "Rode NT-USB Mini on a boom arm in a home office" },
    ],
    stats: [
      { value: "24-bit", label: "48 kHz recording" },
      { value: "USB-C", label: "Plug and play" },
      { value: "0 ms", label: "Latency-free monitoring" },
      { value: "Magnetic", label: "Detachable desk stand" },
    ],
    highlights: [
      {
        title: "Studio sound without the studio",
        body: "The NT-USB Mini uses a studio-grade condenser capsule and a built-in 24-bit converter, so your voice sounds clear, warm and broadcast-ready on streams, podcasts, calls and video. Plug it into your computer over USB-C and it works straight away, with no drivers to install.",
        image: "/products/rode-nt-usb-mini/desk.png",
      },
      {
        title: "Hear yourself in real time",
        body: "A high-powered headphone amp with a big volume knob sits on the front of the mic. Plug in your headphones to hear yourself and your computer audio with zero latency, which is ideal for gaming chat, singing along and monitoring streams.",
        image: "/products/rode-nt-usb-mini/front.png",
      },
      {
        title: "Magnetic stand, boom-arm ready",
        body: "The weighted desk stand holds the mic with a magnet, so it stays put on your desk and lifts off in a second. Thread it onto a boom arm like the Rode PSA1+ to free up desk space and get the mic closer to your mouth.",
        image: "/products/rode-nt-usb-mini/arm.jpg",
      },
      {
        title: "Grows with your setup",
        body: "Use it with free RØDE Connect or UNIFY to run podcasts and streams with up to four NT-USB Minis on one computer, with Rode's APHEX processing, sound pads and easy mixing. It's a simple first mic that keeps up as your channel grows.",
        image: "/products/rode-nt-usb-mini/stream.jpg",
      },
    ],
    idealFor: [
      { title: "Streamers and gamers", body: "Clear voice chat and stream audio." },
      { title: "Beginner podcasters", body: "An affordable, studio-quality first mic." },
      { title: "Remote work and online classes", body: "Sound professional on Zoom and Teams." },
      { title: "YouTubers and voice-over", body: "Clean narration straight into your laptop." },
    ],
    notFor:
      "If you want APHEX processing built into the mic itself and phone support, the Rode NT-USB+ (₦390,000) is the step up. If you record in a noisy or echoey room, the dynamic Rode PodMic USB (₦380,000) rejects more background sound. For vocals in a proper studio, look at the Rode NT1 Kit (₦500,000).",
    specs: [
      { label: "Type", value: "Condenser USB microphone, pressure gradient" },
      { label: "Electronics", value: "Electret condenser, A/D and USB interface" },
      { label: "Polar pattern", value: "Cardioid" },
      { label: "Frequency range", value: "20 Hz–20 kHz" },
      { label: "Max SPL", value: "121 dB (1% THD)" },
      { label: "Resolution", value: "24-bit / 48 kHz" },
      { label: "Connection", value: "USB-C, bus powered" },
      { label: "Headphone output", value: "3.5 mm, zero-latency, with volume control" },
      { label: "Computer support", value: "macOS 10.12+, Windows 10+" },
      { label: "Size", value: "141.9 mm tall; 54.5 mm wide; 89.3 mm base" },
      { label: "Weight", value: "585 g with stand" },
    ],
    specsNote: "Figures are Rode's. The NT-USB Mini works with Windows and Mac computers without extra drivers.",
    faqs: [
      {
        q: "Do I need an audio interface?",
        a: "No. The NT-USB Mini has its own converter and headphone amp. Plug it into your computer with the USB-C cable and it's ready.",
      },
      {
        q: "Is it good for gaming and streaming?",
        a: "Yes. It's designed for it. It works with Discord, OBS, Streamlabs and every major game and meeting app, and the headphone output lets you hear chat and game audio through the mic.",
      },
      {
        q: "Can I put it on a boom arm?",
        a: "Yes. Lift it off the magnetic stand and screw it onto any standard boom arm, such as the Rode PSA1+.",
      },
      {
        q: "NT-USB Mini or NT-USB+?",
        a: "The Mini is the budget pick with great sound in a compact body. The NT-USB+ adds built-in APHEX voice processing, a larger capsule and phone support, for about double the price.",
      },
      {
        q: "Will it work with my phone?",
        a: "It's made mainly for computers. If recording on a phone is important, the NT-USB+ is the better choice.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "NT-USB Mini",
        price: 200_000,
        includes: [
          "Rode NT-USB Mini USB microphone",
          "Magnetic desk stand",
          "USB-C to USB-A cable",
        ],
      },
    ],
  },
  {
    slug: "rode-nt2-a",
    brand: "Rode",
    name: "Rode NT2-A",
    category: "Audio",
    tagline: "Three patterns. One studio workhorse.",
    headline:
      "The Rode NT2-A is a 1\" studio condenser with switchable polar patterns, pad and high-pass filter on the body, so one mic covers vocals, instruments, duets and room sound.",
    summary:
      "Most studio mics record in one direction only. The NT2-A switches between cardioid, omni and figure-8 with a switch on the body, so you can record a single vocal, a whole choir, or two singers facing each other with the same mic. A three-step pad lets it take loud sources like guitar amps and drums, and a three-step high-pass filter cuts rumble and boominess before it reaches your recording. With 7 dBA self-noise, a 147 dB max SPL and a warm, detailed 1\" capsule, it's a mic that grows with your studio.",
    image: "/products/rode-nt2-a/main.png",
    hero: "/products/rode-nt2-a/hero.jpg",
    gallery: [
      { src: "/products/rode-nt2-a/main.png", alt: "Rode NT2-A studio condenser microphone from the front" },
      { src: "/products/rode-nt2-a/left.png", alt: "Rode NT2-A showing the pattern, pad and filter switches" },
      { src: "/products/rode-nt2-a/back.png", alt: "Rode NT2-A from the back" },
      { src: "/products/rode-nt2-a/kit.png", alt: "Rode NT2-A in the SM6 shock mount with pop filter" },
      { src: "/products/rode-nt2-a/hero.jpg", alt: "Singer recording vocals into the Rode NT2-A" },
    ],
    stats: [
      { value: "3", label: "Polar patterns" },
      { value: "7 dBA", label: "Low self-noise" },
      { value: "147 dB", label: "Max SPL" },
      { value: "1\"", label: "Large-diaphragm capsule" },
    ],
    highlights: [
      {
        title: "Cardioid, omni or figure-8",
        body: "Use cardioid for a single vocal or instrument, omni to capture a group or the sound of the room, and figure-8 for two singers facing each other or classic stereo techniques. All three are a flick of a switch on the body, with no software or extra capsules.",
        image: "/products/rode-nt2-a/left.png",
      },
      {
        title: "Ready for loud sources",
        body: "A three-step pad (0, −5 and −10 dB) and a 147 dB max SPL mean the NT2-A can sit in front of guitar amps, brass, drums and powerful singers without distorting.",
        image: "/products/rode-nt2-a/main.png",
      },
      {
        title: "Clean low end, straight from the mic",
        body: "The three-step high-pass filter (flat, 40 Hz and 80 Hz) removes traffic rumble, stand noise and boomy proximity effect at the source, so your recordings need less cleaning up later.",
        image: "/products/rode-nt2-a/back.png",
      },
      {
        title: "Shock mount and pop filter in the box",
        body: "The NT2-A comes with Rode's SM6 shock mount with a detachable pop filter and a long XLR cable, so it's ready to record vocals as soon as you plug it into your interface.",
        image: "/products/rode-nt2-a/kit.png",
      },
    ],
    idealFor: [
      { title: "Project and commercial studios", body: "One mic for vocals, instruments and room sound." },
      { title: "Singers and music producers", body: "Warm, detailed vocals with a low noise floor." },
      { title: "Churches and choirs", body: "Omni mode captures a whole group naturally." },
      { title: "Duets and interviews", body: "Figure-8 records two people facing each other." },
    ],
    notFor:
      "The NT2-A connects by XLR and needs an audio interface, mixer or RØDECaster with phantom power. If you only record single vocals in cardioid, the Rode NT1-A (₦580,000) or the NT1 Kit (₦500,000) give you a very quiet studio mic for less. To plug straight into a computer, look at the Rode NT-USB+ (₦390,000).",
    specs: [
      { label: "Type", value: "Studio condenser microphone, pressure gradient, side address" },
      { label: "Capsule", value: "1\"" },
      { label: "Polar patterns", value: "Cardioid, figure-8, omnidirectional (switchable)" },
      { label: "Pad", value: "0, −5, −10 dB" },
      { label: "High-pass filter", value: "Flat, 40 Hz, 80 Hz" },
      { label: "Frequency range", value: "20 Hz–20 kHz" },
      { label: "Sensitivity", value: "−36 dB re 1 V/Pa (16 mV @ 94 dB SPL)" },
      { label: "Self-noise", value: "7 dBA" },
      { label: "Max SPL", value: "147 dB SPL" },
      { label: "Output impedance", value: "200 Ω" },
      { label: "Power", value: "P24 or P48 phantom power" },
      { label: "Connector", value: "3-pin XLR" },
      { label: "Size and weight", value: "55 × 209 × 55 mm; 710 g" },
    ],
    specsNote: "Figures are Rode's. Box contents can vary between production runs, so we confirm exactly what's included before you pay.",
    faqs: [
      {
        q: "Why would I need three polar patterns?",
        a: "Cardioid is for one voice or instrument. Omni picks up all around the mic, which suits groups, choirs and natural room sound. Figure-8 picks up front and back only, ideal for two singers or an interview across a table.",
      },
      {
        q: "NT2-A or NT1-A?",
        a: "Both are quiet 1\" studio condensers. The NT1-A (₦580,000) is cardioid only and slightly quieter. The NT2-A adds omni and figure-8, a pad and a high-pass filter, which make it more flexible for instruments, groups and loud sources.",
      },
      {
        q: "What do the pad and high-pass switches do?",
        a: "The pad lowers the mic's output so very loud sources don't distort. The high-pass filter cuts low rumble and boominess. Both are on the body, so you set them before you record.",
      },
      {
        q: "What else do I need?",
        a: "An audio interface, mixer or RØDECaster with phantom power, a mic stand or boom arm, and headphones. The shock mount, pop filter and XLR cable come in the box.",
      },
      {
        q: "Is it good for Afrobeats and gospel vocals?",
        a: "Yes. It gives warm, detailed vocals in cardioid, and omni mode is great for recording backing singers or a choir around one mic.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "NT2-A",
        price: 600_000,
        includes: [
          "Rode NT2-A multi-pattern studio condenser microphone",
          "Rode SM6 shock mount with detachable pop filter",
          "XLR cable",
          "We confirm the full box contents on WhatsApp",
        ],
      },
    ],
  },
  {
    slug: "rode-procaster",
    brand: "Rode",
    name: "Rode Procaster",
    category: "Audio",
    tagline: "Broadcast voice. Room noise left out.",
    headline:
      "The Rode Procaster is a broadcast-quality dynamic microphone built for speech, with a tight pickup that keeps your voice rich and up-front while ignoring the room around you.",
    summary:
      "The Procaster is made for voices in real rooms. Its dynamic capsule and tight cardioid pattern focus on whoever is speaking into the end of the mic and reject keyboard clatter, fans and room echo, so it sounds great even without acoustic treatment. An internal pop filter softens plosives, and an internal shock mount cuts handling noise. With a sound tuned for broadcast speech, it's a favourite for radio, podcasts, streaming and voice-over.",
    image: "/products/rode-procaster/main.png",
    hero: "/products/rode-procaster/hero.jpg",
    gallery: [
      { src: "/products/rode-procaster/main.png", alt: "Rode Procaster dynamic broadcast microphone" },
      { src: "/products/rode-procaster/front.png", alt: "Rode Procaster from the front" },
      { src: "/products/rode-procaster/back.png", alt: "Rode Procaster from the back" },
      { src: "/products/rode-procaster/studio.jpg", alt: "Rode Procaster with its ring mount and pouch" },
      { src: "/products/rode-procaster/hero.jpg", alt: "Rode Procaster on a boom arm in a streaming setup" },
    ],
    stats: [
      { value: "Dynamic", label: "Broadcast capsule" },
      { value: "Cardioid", label: "Tight, focused pickup" },
      { value: "75 Hz–18 kHz", label: "Tuned for voice" },
      { value: "XLR", label: "Pro connection" },
    ],
    highlights: [
      {
        title: "Your voice, not your room",
        body: "Dynamic mics are far less sensitive to distant sound than condensers. The Procaster's tight cardioid pattern hears what's directly in front of it, so fans, traffic, keyboards and room echo stay in the background, even in an untreated bedroom or office.",
        image: "/products/rode-procaster/hero.jpg",
      },
      {
        title: "Rich, radio-ready sound",
        body: "Its frequency response is shaped for speech: full, warm low-mids and clear presence, without harsh sibilance. Speak close to the mic for that classic broadcast warmth.",
        image: "/products/rode-procaster/main.png",
      },
      {
        title: "Built-in pop filter and shock mount",
        body: "An internal pop filter softens hard 'p' and 'b' sounds, and an internal shock mount reduces bumps and handling noise. The included ring mount fits any standard stand or boom arm.",
        image: "/products/rode-procaster/studio.jpg",
      },
      {
        title: "Tough, all-metal build",
        body: "The solid metal body is made to survive daily use in studios and on-air rooms. It needs no phantom power and connects with a standard XLR cable.",
        image: "/products/rode-procaster/front.png",
      },
    ],
    idealFor: [
      { title: "Podcasters", body: "Clear, warm speech in ordinary rooms." },
      { title: "Radio and broadcast", body: "A classic on-air sound that's easy to mix." },
      { title: "Streamers and gamers", body: "Rejects keyboard noise and room echo." },
      { title: "Voice-over and church PA", body: "Focused pickup with low handling noise." },
    ],
    notFor:
      "The Procaster connects by XLR and needs an audio interface, mixer or RØDECaster with plenty of clean gain, as dynamic mics have a low output. To plug straight into a computer, choose the Rode Podcaster (₦320,000), its USB sibling. For a similar broadcast sound with a more compact, side-address body, look at the Rode PodMic (₦280,000).",
    specs: [
      { label: "Type", value: "Dynamic broadcast microphone, end address" },
      { label: "Polar pattern", value: "Cardioid" },
      { label: "Frequency range", value: "75 Hz–18 kHz" },
      { label: "Sensitivity", value: "−56 dB re 1 V/Pa (1.6 mV @ 94 dB SPL)" },
      { label: "Output impedance", value: "320 Ω" },
      { label: "Power", value: "None needed (no phantom power)" },
      { label: "Connector", value: "3-pin XLR" },
      { label: "Pop and shock protection", value: "Internal pop filter and shock mount" },
      { label: "Size and weight", value: "214 × 53 × 53 mm; 745 g" },
    ],
    specsNote: "Figures are Rode's. Box contents can vary between production runs, so we confirm exactly what's included before you pay.",
    faqs: [
      {
        q: "Procaster or Podcaster?",
        a: "They look and sound alike. The Procaster connects by XLR to an interface or mixer. The Podcaster (₦320,000) has USB built in and plugs straight into a computer, with a headphone output.",
      },
      {
        q: "Procaster or PodMic?",
        a: "Both are broadcast dynamics for speech. The Procaster is end-address, a little more detailed and has a tighter pickup. The PodMic (₦280,000) is side-address with a chunkier, swing-mount design.",
      },
      {
        q: "Do I need a special interface?",
        a: "Dynamic mics have a low output, so use an interface or mixer with plenty of clean gain, such as a RØDECaster. A budget interface may need its gain turned right up, which can add hiss.",
      },
      {
        q: "Can I use it for singing?",
        a: "It's designed for speech, but it works well for live-style vocals where you want to reject the room. For studio vocals, a condenser like the NT1-A is a better match.",
      },
      {
        q: "Does it need a pop filter?",
        a: "There's one built in. If you speak very close and hard, a foam windscreen adds extra protection.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "Procaster",
        price: 280_000,
        includes: [
          "Rode Procaster dynamic broadcast microphone",
          "Ring mount for stands and boom arms",
          "Zip pouch",
          "We confirm the full box contents on WhatsApp",
        ],
      },
    ],
  },
  {
    slug: "rode-podcaster",
    brand: "Rode",
    name: "Rode Podcaster",
    category: "Audio",
    tagline: "Broadcast sound. Just plug in USB.",
    headline:
      "The Rode Podcaster is a dynamic broadcast microphone with USB built in, so you get a rich radio sound straight into your computer with no interface needed.",
    summary:
      "The Podcaster puts a broadcast-style dynamic capsule and a high-quality USB audio interface in one mic. Plug it into your computer and it's ready, recording at up to 24-bit/96 kHz. Its tight cardioid pickup focuses on your voice and ignores the room, and a built-in headphone output with volume control lets you hear yourself with zero delay. It's the simplest way to get a radio-quality voice for podcasts, streaming, Zoom calls and voice-over.",
    image: "/products/rode-podcaster/main.png",
    hero: "/products/rode-podcaster/hero.jpg",
    gallery: [
      { src: "/products/rode-podcaster/main.png", alt: "Rode Podcaster USB dynamic microphone" },
      { src: "/products/rode-podcaster/back.png", alt: "Rode Podcaster showing the headphone output and volume control" },
      { src: "/products/rode-podcaster/front.png", alt: "Rode Podcaster from the front" },
      { src: "/products/rode-podcaster/hero.jpg", alt: "Rode Podcaster on a boom arm at a gaming desk" },
    ],
    stats: [
      { value: "USB", label: "Plug-and-play" },
      { value: "24-bit/96 kHz", label: "Recording quality" },
      { value: "Dynamic", label: "Broadcast capsule" },
      { value: "3.5 mm", label: "Zero-latency monitoring" },
    ],
    highlights: [
      {
        title: "No interface, no fuss",
        body: "The Podcaster has its own A/D converter and USB interface inside. Plug it into a Windows or Mac computer and it works straight away in your recording, streaming or call app, with no drivers or extra boxes.",
        image: "/products/rode-podcaster/main.png",
      },
      {
        title: "Radio sound in an everyday room",
        body: "Its dynamic capsule and tight cardioid pattern focus on your voice and keep keyboard noise, fans and room echo in the background. Speak close for warm, full broadcast tone.",
        image: "/products/rode-podcaster/hero.jpg",
      },
      {
        title: "Hear yourself with zero delay",
        body: "Plug headphones into the 3.5 mm output on the mic and adjust the level with the volume dial. You hear your voice directly from the mic, with no lag, while you record or stream.",
        image: "/products/rode-podcaster/back.png",
      },
      {
        title: "Built for daily use",
        body: "A solid metal body, an internal pop filter and an internal shock mount keep plosives and handling noise down, so it sounds good on a desk stand or boom arm day after day.",
        image: "/products/rode-podcaster/front.png",
      },
    ],
    idealFor: [
      { title: "Solo podcasters", body: "Radio-quality voice without an interface." },
      { title: "Streamers and gamers", body: "Rejects keyboard noise and room echo." },
      { title: "Remote workers and teachers", body: "A big upgrade on laptop and headset mics." },
      { title: "Voice-over beginners", body: "Clean, warm speech, plug-and-play." },
    ],
    notFor:
      "The Podcaster is USB only, so it can't plug into a mixer or RØDECaster. For a mic that does both USB and XLR, look at the Rode PodMic USB (₦380,000). For a smaller, budget USB mic for desk use, the Rode NT-USB Mini (₦200,000) is a great start. If you already have an interface, the XLR Rode Procaster (₦280,000) gives the same broadcast sound.",
    specs: [
      { label: "Type", value: "Dynamic USB microphone, end address" },
      { label: "Polar pattern", value: "Cardioid" },
      { label: "Frequency range", value: "40 Hz–14 kHz" },
      { label: "Bit depth", value: "24-bit" },
      { label: "Sample rate", value: "44.1–96 kHz" },
      { label: "Max SPL", value: "115 dB SPL" },
      { label: "Sensitivity", value: "−51 dB re 1 V/Pa (2.8 mV @ 94 dB SPL)" },
      { label: "Headphone output", value: "3.5 mm, zero-latency, with volume control" },
      { label: "Connection and power", value: "USB, bus-powered" },
      { label: "Size and weight", value: "215 × 56 × 52 mm; 655 g" },
    ],
    specsNote: "Figures are Rode's. Rode's product photos show a white finish; we confirm the colour and box contents we have in stock before you pay.",
    faqs: [
      {
        q: "Podcaster or Procaster?",
        a: "Same broadcast sound. The Podcaster has USB built in and plugs straight into a computer. The Procaster (₦280,000) is XLR, for use with an interface, mixer or RØDECaster.",
      },
      {
        q: "Podcaster or PodMic USB?",
        a: "The PodMic USB (₦380,000) has both USB and XLR outputs plus onboard processing through Rode's software. The Podcaster is simpler: USB only, plug in and go.",
      },
      {
        q: "Does it work with my phone?",
        a: "It's made for computers. Some phones and tablets work with the right USB adapter and enough power, but we can't guarantee it for every device.",
      },
      {
        q: "Do I need a stand?",
        a: "Yes. It needs a desk stand or boom arm with a standard thread. A boom arm keeps it close to your mouth for the best sound.",
      },
      {
        q: "Can two people use it for a podcast?",
        a: "It's designed for one voice. For two or more people, separate XLR mics like the Procaster into a RØDECaster give each person their own channel.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "Podcaster",
        price: 320_000,
        includes: [
          "Rode Podcaster USB dynamic microphone",
          "Ring mount for stands and boom arms",
          "USB cable",
          "We confirm the full box contents on WhatsApp",
        ],
      },
    ],
  },
  {
    slug: "rode-reporter",
    brand: "Rode",
    name: "Rode Reporter",
    category: "Audio",
    tagline: "The interview mic for the street.",
    headline:
      "The Rode Reporter is a long-handled omnidirectional dynamic microphone made for interviews, news and vox pops, with a tough build that ignores handling noise and needs no power.",
    summary:
      "Built for journalists, the Reporter has a long handle so it reaches comfortably between you and your guest, and an omnidirectional pickup so it captures every voice clearly even when it isn't pointed perfectly. Its dynamic capsule needs no phantom power or batteries, so it works with any XLR recorder, mixer or camera adaptor, and it shrugs off wind, bumps and rough handling in the field. A flag-ready design lets you brand it with your station or channel's logo.",
    image: "/products/rode-reporter/main.png",
    hero: "/products/rode-reporter/hero.jpg",
    gallery: [
      { src: "/products/rode-reporter/main.png", alt: "Rode Reporter handheld interview microphone" },
      { src: "/products/rode-reporter/front.png", alt: "Rode Reporter from the front" },
      { src: "/products/rode-reporter/back.png", alt: "Rode Reporter from the back" },
      { src: "/products/rode-reporter/flag.png", alt: "Rode Reporter fitted with a mic flag" },
      { src: "/products/rode-reporter/hero.jpg", alt: "Journalist holding the Rode Reporter" },
    ],
    stats: [
      { value: "Omni", label: "Easy pickup for interviews" },
      { value: "Dynamic", label: "No power needed" },
      { value: "272 mm", label: "Long reach handle" },
      { value: "256 g", label: "Light in the hand" },
    ],
    highlights: [
      {
        title: "Made for interviews",
        body: "The omnidirectional pattern picks up sound evenly all around the capsule, so both you and your guest sound clear even when the mic isn't aimed perfectly. The long handle keeps your hand away from the capsule and gives you reach in a crowd.",
        image: "/products/rode-reporter/hero.jpg",
      },
      {
        title: "Plug in and record",
        body: "As a dynamic mic, the Reporter needs no phantom power and no batteries. Connect it with an XLR cable to a field recorder, mixer, camera XLR adaptor or RØDECaster and it's ready.",
        image: "/products/rode-reporter/main.png",
      },
      {
        title: "Built for the field",
        body: "Its rugged body and internal shock mounting keep handling noise low, and the dynamic capsule copes with loud voices and busy streets. It's made to be passed around, carried in a bag and used every day.",
        image: "/products/rode-reporter/front.png",
      },
      {
        title: "Brand it with a mic flag",
        body: "The Reporter is designed to take a standard mic flag, so your TV station, radio show or YouTube channel's logo shows clearly on camera. Ask us about flags when you order.",
        image: "/products/rode-reporter/flag.png",
      },
    ],
    idealFor: [
      { title: "TV and radio journalists", body: "Classic on-camera interview mic." },
      { title: "YouTube and street interviews", body: "Vox pops and on-the-spot reactions." },
      { title: "Events and church media", body: "Quick interviews with guests and members." },
      { title: "Documentary crews", body: "Reliable sound with no batteries to manage." },
    ],
    notFor:
      "The Reporter is wired and connects by XLR, so you need a recorder, mixer or camera with an XLR input. To go wireless, the Rode Interview GO (₦65,000) turns a Wireless GO or Wireless PRO transmitter into a handheld mic. For podcasts and desk recording, the Rode Procaster (₦280,000) is a better choice.",
    specs: [
      { label: "Type", value: "Dynamic handheld microphone, end address" },
      { label: "Polar pattern", value: "Omnidirectional" },
      { label: "Frequency range", value: "70 Hz–15 kHz" },
      { label: "Sensitivity", value: "−56 dB re 1 V/Pa (1.0 mV @ 94 dB SPL)" },
      { label: "Output impedance", value: "150 Ω" },
      { label: "Power", value: "None needed (no phantom power)" },
      { label: "Connector", value: "3-pin XLR" },
      { label: "Size", value: "272.5 × 41.5 × 41.5 mm" },
      { label: "Weight", value: "256 g" },
    ],
    specsNote: "Figures are Rode's. Mic flags, cables and windshields are sold separately unless stated, so we confirm the box contents before you pay.",
    faqs: [
      {
        q: "Why is an interview mic omnidirectional?",
        a: "Omni mics pick up evenly from every direction, so you and your guest both sound good without precise aiming. They also handle wind and handling noise better than directional mics.",
      },
      {
        q: "Will it work with my camera?",
        a: "Yes, if your camera has an XLR input or you use an XLR adaptor or field recorder. For cameras with only a 3.5 mm input, you'll need an XLR-to-3.5 mm adaptor with enough gain.",
      },
      {
        q: "Does it need batteries or phantom power?",
        a: "No. It's a dynamic mic, so it works without any power. Phantom power won't harm it if it's switched on.",
      },
      {
        q: "Reporter or Interview GO?",
        a: "The Reporter is a wired XLR mic. The Interview GO (₦65,000) is a handle that turns a Wireless GO or Wireless PRO transmitter into a wireless handheld mic, so there's no cable between you and the camera.",
      },
      {
        q: "Can I put my logo on it?",
        a: "Yes. It takes a standard mic flag. Tell us on WhatsApp and we'll advise on flags we can supply.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "Reporter",
        price: 300_000,
        includes: [
          "Rode Reporter omnidirectional dynamic microphone",
          "We confirm the full box contents on WhatsApp",
        ],
      },
    ],
  },
  {
    slug: "rode-interview-go",
    brand: "Rode",
    name: "Rode Interview GO",
    category: "Audio",
    tagline: "Turn your Wireless GO into a handheld mic.",
    headline:
      "The Rode Interview GO is a handheld adaptor that turns a Wireless GO or Wireless PRO transmitter into a wireless interview microphone, with a foam windshield for clean outdoor sound.",
    summary:
      "If you already own a Rode wireless system, the Interview GO gives you a professional handheld interview mic for a small extra cost. Clip the transmitter into the top, fit the foam windshield, and you have a light, wireless mic that you can hold out to guests, use for vox pops or hand to a presenter. The windshield cuts wind and breath noise, and the handle keeps your grip away from the mic so handling noise stays low.",
    image: "/products/rode-interview-go/main.png",
    hero: "/products/rode-interview-go/hero.jpg",
    gallery: [
      { src: "/products/rode-interview-go/main.png", alt: "Rode Interview GO handheld adaptor with foam windshield" },
      { src: "/products/rode-interview-go/field.jpg", alt: "Reporter interviewing a guest with the Interview GO" },
      { src: "/products/rode-interview-go/foam.jpg", alt: "Presenter fitting the foam windshield to the Interview GO" },
      { src: "/products/rode-interview-go/colours.png", alt: "Interview GO windshields in different colours" },
      { src: "/products/rode-interview-go/hero.jpg", alt: "Outdoor interview with the Rode Interview GO" },
    ],
    stats: [
      { value: "Wireless", label: "No cable to the camera" },
      { value: "84 g", label: "Ultra-light handle" },
      { value: "Foam", label: "Windshield included" },
      { value: "Clip-in", label: "Fits in seconds" },
    ],
    highlights: [
      {
        title: "A handheld mic from the kit you own",
        body: "Slide your Wireless GO or Wireless PRO transmitter into the top of the Interview GO and it becomes a handheld interview mic. There's no extra receiver, pairing or setup: it records exactly as the transmitter normally does.",
        image: "/products/rode-interview-go/field.jpg",
      },
      {
        title: "Cleaner sound outdoors",
        body: "The foam windshield slips over the transmitter to cut wind, breath and plosive noise, so street interviews and outdoor pieces to camera stay clear and usable.",
        image: "/products/rode-interview-go/foam.jpg",
      },
      {
        title: "Light and easy to hold",
        body: "At 84 g, the handle adds almost no weight. It keeps your hand away from the mic to reduce handling noise and gives your guest a familiar, professional mic to speak into.",
        image: "/products/rode-interview-go/hero.jpg",
      },
      {
        title: "Looks good on camera",
        body: "The clean handheld shape looks professional in shot. Coloured windshields are available too, so you can match your brand or tell presenters' mics apart.",
        image: "/products/rode-interview-go/colours.png",
      },
    ],
    idealFor: [
      { title: "Wireless GO and PRO owners", body: "Adds a handheld mic for a small cost." },
      { title: "Street and vox pop interviews", body: "Hold it out to anyone, no cables." },
      { title: "Presenters and hosts", body: "A pro look for pieces to camera." },
      { title: "Events and weddings", body: "Quick speeches and guest messages." },
    ],
    notFor:
      "The Interview GO is only a handle and windshield: it makes no sound on its own. You need a Rode wireless transmitter, such as the Rode Wireless GO (Gen 3) (₦300,000), Wireless GO II (₦470,000) or Wireless PRO (₦500,000). For a wired XLR interview mic, look at the Rode Reporter (₦300,000).",
    specs: [
      { label: "Type", value: "Handheld adaptor for Rode wireless transmitters" },
      { label: "Works with", value: "Rode Wireless GO family and Wireless PRO transmitters (we confirm for your model)" },
      { label: "Included", value: "Handle and foam windshield" },
      { label: "Handle size", value: "237 mm long, 23 mm diameter" },
      { label: "Windshield size", value: "73.3 × 81.6 mm" },
      { label: "Weight", value: "Handle 84 g; windshield 8 g" },
      { label: "Power", value: "None (uses the transmitter's own battery)" },
    ],
    specsNote: "Figures are Rode's. Handle and windshield colours vary by stock, so we confirm what's available before you pay.",
    faqs: [
      {
        q: "Does it work on its own?",
        a: "No. It's a handle and windshield for a Rode wireless transmitter. The transmitter does all the recording and sends sound to its receiver as usual.",
      },
      {
        q: "Which transmitters does it fit?",
        a: "Rode designed it for its Wireless GO family and Wireless PRO transmitters. Tell us which system you have on WhatsApp and we'll confirm it fits before you pay.",
      },
      {
        q: "Does it improve the sound?",
        a: "It doesn't change the mic itself, but the foam windshield cuts wind and plosives, and holding the mic close to the speaker gives clearer, fuller voices than a camera-mounted mic.",
      },
      {
        q: "Interview GO or Rode Reporter?",
        a: "The Interview GO is wireless and very light, but needs a Rode wireless system. The Reporter (₦300,000) is a wired XLR handheld mic that works with any recorder or mixer.",
      },
      {
        q: "Can I still use the transmitter as a clip-on mic?",
        a: "Yes. Just slide it out of the handle and clip it to clothing or add a lavalier as usual.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "Interview GO",
        price: 65_000,
        includes: [
          "Rode Interview GO handheld adaptor",
          "Foam windshield",
          "Wireless transmitter not included",
          "We confirm the full box contents on WhatsApp",
        ],
      },
    ],
  },
  {
    slug: "rode-ntg2",
    brand: "Rode",
    name: "Rode NTG-2",
    category: "Audio",
    tagline: "The shotgun mic that runs on a AA.",
    headline:
      "The Rode NTG-2 is a lightweight supercardioid shotgun microphone for film and video, powered by a single AA battery or phantom power, so it works on boom poles, cameras and recorders.",
    summary:
      "The NTG-2 is a broadcast-quality shotgun mic for filmmakers who need flexibility. Its narrow supercardioid pickup focuses on dialogue and sound in front of it while reducing noise from the sides. It runs on P48 phantom power from a recorder or mixer, or on a single AA battery when your camera or recorder can't supply power. At just 161 g, it's easy on boom poles and camera rigs, and it comes with a mic clip, foam windshield and pouch.",
    image: "/products/rode-ntg2/main.png",
    hero: "/products/rode-ntg2/hero.jpg",
    gallery: [
      { src: "/products/rode-ntg2/main.png", alt: "Rode NTG-2 shotgun microphone" },
      { src: "/products/rode-ntg2/box.jpg", alt: "Rode NTG-2 with mic clip, foam windshield and pouch" },
      { src: "/products/rode-ntg2/front.png", alt: "Rode NTG-2 from the front" },
      { src: "/products/rode-ntg2/windshield.png", alt: "Rode NTG-2 with the foam windshield fitted" },
      { src: "/products/rode-ntg2/hero.jpg", alt: "Filmmaker shooting outdoors with a Rode shotgun mic" },
    ],
    stats: [
      { value: "AA or P48", label: "Dual power" },
      { value: "Super-cardioid", label: "Focused pickup" },
      { value: "161 g", label: "Boom-pole friendly" },
      { value: "20 Hz–20 kHz", label: "Full frequency range" },
    ],
    highlights: [
      {
        title: "Power it any way you like",
        body: "Use P48 phantom power from a field recorder, mixer or camera XLR input, or drop in a single AA battery when phantom isn't available. You're never stuck without sound on set.",
        image: "/products/rode-ntg2/main.png",
      },
      {
        title: "Focus on the dialogue",
        body: "The supercardioid pattern is narrow at the front, so the NTG-2 picks up the actor or speaker it's pointed at and reduces noise from the sides. It's a natural choice for boom-mounted dialogue in film, TV and documentary.",
        image: "/products/rode-ntg2/hero.jpg",
      },
      {
        title: "Light enough for long takes",
        body: "At 161 g, the NTG-2 is light on a boom pole and well balanced on a camera rig, so operators can hold it in position through long scenes and interviews.",
        image: "/products/rode-ntg2/front.png",
      },
      {
        title: "Ready to shoot",
        body: "A mic clip, foam windshield and zip pouch come in the box. The windshield reduces light wind and breath noise indoors and outdoors; add a furry windshield or blimp for strong wind.",
        image: "/products/rode-ntg2/box.jpg",
      },
    ],
    idealFor: [
      { title: "Indie filmmakers", body: "Boom-mounted dialogue on a budget." },
      { title: "Documentary and news crews", body: "Runs on a AA when phantom isn't available." },
      { title: "Wedding videographers", body: "Light, reliable sound on camera rigs." },
      { title: "Film schools and churches", body: "A durable, easy-to-learn shotgun mic." },
    ],
    notFor:
      "The NTG-2 connects by XLR, so you need a recorder, mixer or camera XLR input. For a lower-noise, phantom-only shotgun, look at the Rode NTG4 (₦480,000). For on-camera use with a 3.5 mm or USB output, the Rode VideoMic NTG (₦350,000) is easier.",
    specs: [
      { label: "Type", value: "Shotgun condenser microphone, line gradient, end address" },
      { label: "Capsule", value: "0.50\"" },
      { label: "Polar pattern", value: "Supercardioid" },
      { label: "Frequency range", value: "20 Hz–20 kHz" },
      { label: "Sensitivity", value: "−36 dB re 1 V/Pa (15 mV @ 94 dB SPL)" },
      { label: "Self-noise", value: "18 dBA" },
      { label: "Max SPL", value: "131 dB SPL" },
      { label: "Output impedance", value: "250 Ω" },
      { label: "Power", value: "AA battery or P48 phantom power" },
      { label: "Connector", value: "3-pin XLR" },
      { label: "Size and weight", value: "280 × 22 × 22 mm; 161 g" },
    ],
    specsNote: "Figures are Rode's. Box contents can vary between production runs, so we confirm exactly what's included before you pay.",
    faqs: [
      {
        q: "Can I plug it straight into my DSLR or mirrorless camera?",
        a: "Most consumer cameras have a 3.5 mm input, not XLR. You'll need an XLR adaptor, a field recorder or an XLR-to-3.5 mm cable with the mic running on its AA battery. For simple on-camera use, the VideoMic NTG (₦350,000) plugs in directly.",
      },
      {
        q: "How long does the AA battery last?",
        a: "A good alkaline AA lasts many hours of shooting. Carry a spare and remove the battery when you're using phantom power or storing the mic.",
      },
      {
        q: "NTG-2 or NTG4?",
        a: "The NTG4 (₦480,000) has lower self-noise and needs phantom power. The NTG-2 is a little noisier but can run on a AA battery, which is handy when phantom isn't available.",
      },
      {
        q: "Is it good for interviews?",
        a: "Yes, on a boom pole above the speaker or on a stand just out of shot. For handheld street interviews, an omni mic like the Rode Reporter is easier.",
      },
      {
        q: "Will it work outdoors in wind?",
        a: "The foam windshield handles light breezes. For outdoor shoots in real wind, add a furry windshield or a blimp.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "NTG-2",
        price: 380_000,
        includes: [
          "Rode NTG-2 shotgun microphone",
          "Mic clip",
          "Foam windshield",
          "Zip pouch",
          "We confirm the full box contents on WhatsApp",
        ],
      },
    ],
  },
  {
    slug: "rode-videomic",
    brand: "Rode",
    name: "Rode VideoMic",
    category: "Audio",
    tagline: "Clear, focused sound for your camera.",
    headline:
      "The Rode VideoMic is a full-size on-camera shotgun microphone with a Rycote Lyre shock mount, level control and a high-pass filter, powered by a 9V battery.",
    summary:
      "Your camera's built-in mic picks up everything around it, including your own hands on the body. The VideoMic sits on the hot shoe and focuses on what's in front of the lens, so voices and action come through clearly with less background noise. Its Rycote Lyre suspension isolates it from bumps and handling, a 3-step level control helps you get a clean signal into the camera, and a high-pass filter cuts low rumble from traffic, air conditioners and wind.",
    image: "/products/rode-videomic/main.png",
    hero: "/products/rode-videomic/hero.jpg",
    gallery: [
      { src: "/products/rode-videomic/main.png", alt: "Rode VideoMic on-camera shotgun microphone with cable" },
      { src: "/products/rode-videomic/back.png", alt: "Rode VideoMic from the back" },
      { src: "/products/rode-videomic/hero.jpg", alt: "Videographer shooting with the Rode VideoMic on a camera" },
    ],
    stats: [
      { value: "Super-cardioid", label: "Focused on the subject" },
      { value: "40 Hz–20 kHz", label: "Full frequency range" },
      { value: "9V", label: "Battery powered" },
      { value: "176 g", label: "Full-size on-camera mic" },
    ],
    highlights: [
      {
        title: "Hear what you're filming",
        body: "The supercardioid pickup focuses on sound in front of the camera and reduces noise from the sides and behind, so your subject sounds clearer than with the camera's built-in mic.",
        image: "/products/rode-videomic/hero.jpg",
      },
      {
        title: "Rycote Lyre suspension",
        body: "The mic floats in a Rycote Lyre shock mount that absorbs knocks, vibration and lens noise from the camera body. The Lyre bands don't sag or snap like old elastic mounts.",
        image: "/products/rode-videomic/main.png",
      },
      {
        title: "Level control and high-pass filter",
        body: "A 3-step level switch (−10, 0, +20 dB) lets you send a stronger signal to the camera so you can turn its noisy preamp down. The high-pass filter cuts low rumble from traffic, generators and air conditioners.",
        image: "/products/rode-videomic/back.png",
      },
      {
        title: "Long battery life",
        body: "A single 9V battery powers the VideoMic for many hours of shooting, and it connects to the camera with a standard 3.5 mm cable.",
        image: "/products/rode-videomic/main.png",
      },
    ],
    idealFor: [
      { title: "DSLR and mirrorless shooters", body: "Big upgrade over the built-in mic." },
      { title: "Event videographers", body: "Weddings, parties and church services." },
      { title: "Run-and-gun filming", body: "Mounts on the hot shoe, no extra kit." },
      { title: "Vloggers and YouTubers", body: "Clearer voice from behind the camera." },
    ],
    notFor:
      "The VideoMic needs a 9V battery and a camera or recorder with a 3.5 mm mic input. If you'd rather avoid batteries, the Rode VideoMic GO II (₦200,000) runs on camera power and also works over USB. For better sound with a rechargeable battery, look at the Rode VideoMic Pro (₦380,000) or VideoMic Pro+ (₦480,000).",
    specs: [
      { label: "Type", value: "On-camera shotgun condenser microphone, line gradient" },
      { label: "Capsule", value: "0.50\"" },
      { label: "Polar pattern", value: "Supercardioid" },
      { label: "Frequency range", value: "40 Hz–20 kHz" },
      { label: "Sensitivity", value: "−38 dB re 1 V/Pa (12.6 mV @ 94 dB SPL)" },
      { label: "Self-noise", value: "20 dBA" },
      { label: "Max SPL", value: "134 dB SPL" },
      { label: "Output impedance", value: "200 Ω" },
      { label: "Power", value: "9V battery" },
      { label: "Output", value: "3.5 mm TRS minijack" },
      { label: "Size and weight", value: "250 × 102 × 65 mm; 176 g" },
    ],
    specsNote: "Figures are Rode's. Box contents can vary between production runs, so we confirm exactly what's included before you pay.",
    faqs: [
      {
        q: "Will it work with my camera?",
        a: "Yes, if your camera has a 3.5 mm mic input and a hot shoe, which most DSLRs and mirrorless cameras do. Tell us your camera model on WhatsApp and we'll confirm.",
      },
      {
        q: "Does it work with phones?",
        a: "Not directly. Phones need a TRRS adaptor and many don't power external mics well. For phones, the VideoMic GO II (₦200,000) or a wireless mic is easier.",
      },
      {
        q: "How long does the 9V battery last?",
        a: "A fresh 9V alkaline battery lasts many hours of use. Switch the mic off after shooting and carry a spare for long events.",
      },
      {
        q: "VideoMic or VideoMic Pro?",
        a: "The VideoMic Pro (₦380,000) is smaller and lighter with lower self-noise. The VideoMic is a larger, simpler mic that does the same job at a lower price.",
      },
      {
        q: "Is it good for interviews?",
        a: "It's fine when the person is close to the camera and in front of it. For sit-down interviews or when you're further away, a wireless lavalier gives cleaner voice.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "VideoMic",
        price: 180_000,
        includes: [
          "Rode VideoMic with Rycote Lyre mount",
          "Foam windshield",
          "3.5 mm cable",
          "We confirm the full box contents on WhatsApp",
        ],
      },
    ],
  },
  {
    slug: "rode-videomic-go",
    brand: "Rode",
    name: "Rode VideoMic GO",
    category: "Audio",
    tagline: "Plug in, no batteries, better sound.",
    headline:
      "The Rode VideoMic GO is a lightweight on-camera shotgun microphone that runs on your camera's plug-in power, so there are no batteries to charge or forget.",
    summary:
      "At just 73 g, the VideoMic GO is one of the easiest ways to improve your camera's sound. Slide it onto the hot shoe, plug it into the mic input and you're ready: it takes its power from the camera, so there's no switch to forget and no battery to go flat. The supercardioid pickup focuses on what's in front of the lens, and the integrated Rycote Lyre mount keeps handling and camera noise down.",
    image: "/products/rode-videomic-go/main.png",
    hero: "/products/rode-videomic-go/hero.jpg",
    gallery: [
      { src: "/products/rode-videomic-go/main.png", alt: "Rode VideoMic GO on-camera microphone" },
      { src: "/products/rode-videomic-go/back.png", alt: "Rode VideoMic GO with its coiled cable" },
      { src: "/products/rode-videomic-go/dslr.jpg", alt: "Rode VideoMic GO mounted on a DSLR" },
      { src: "/products/rode-videomic-go/detail.jpg", alt: "Creator holding a camera with the VideoMic GO" },
      { src: "/products/rode-videomic-go/hero.jpg", alt: "Rode VideoMic GO on a camera outdoors" },
    ],
    stats: [
      { value: "No battery", label: "Runs on camera power" },
      { value: "73 g", label: "Barely there on camera" },
      { value: "Super-cardioid", label: "Focused pickup" },
      { value: "Rycote", label: "Lyre shock mount" },
    ],
    highlights: [
      {
        title: "No batteries, ever",
        body: "The VideoMic GO runs on the plug-in power that most cameras supply through their mic input. There's no on/off switch and nothing to charge, so it's always ready when you are.",
        image: "/products/rode-videomic-go/dslr.jpg",
      },
      {
        title: "Light enough for any camera",
        body: "At 73 g, it won't unbalance a small mirrorless camera or a gimbal setup, and it fits easily in a camera bag pocket.",
        image: "/products/rode-videomic-go/hero.jpg",
      },
      {
        title: "Focused, clear sound",
        body: "The supercardioid pattern concentrates on sound in front of the camera and reduces noise from the sides, giving clearer voice and action than a built-in mic.",
        image: "/products/rode-videomic-go/detail.jpg",
      },
      {
        title: "Built-in Rycote Lyre mount",
        body: "The integrated Rycote Lyre suspension isolates the mic from bumps, button presses and lens motors, and it's built to last without sagging.",
        image: "/products/rode-videomic-go/main.png",
      },
    ],
    idealFor: [
      { title: "First mic upgrade", body: "Simple step up from the camera's mic." },
      { title: "Vloggers", body: "Light enough for handheld shooting." },
      { title: "Gimbal users", body: "Won't upset the balance of small rigs." },
      { title: "Students and beginners", body: "Nothing to set up or charge." },
    ],
    notFor:
      "The VideoMic GO needs a camera that supplies plug-in power through its 3.5 mm mic input, and it doesn't connect to phones or computers directly. The newer Rode VideoMic GO II (₦200,000) costs the same and adds USB and phone support, so most buyers should consider it first. For level control and lower noise, look at the Rode VideoMic Pro (₦380,000).",
    specs: [
      { label: "Type", value: "On-camera shotgun microphone, line gradient" },
      { label: "Polar pattern", value: "Supercardioid" },
      { label: "Frequency range", value: "100 Hz–16 kHz" },
      { label: "Sensitivity", value: "−35 dB re 1 V/Pa" },
      { label: "Equivalent noise", value: "34 dBA" },
      { label: "Max SPL", value: "120 dB SPL" },
      { label: "Power", value: "Plug-in power from the camera (no battery)" },
      { label: "Output", value: "3.5 mm TRS minijack" },
      { label: "Size", value: "167 × 70 × 79 mm" },
      { label: "Weight", value: "73 g" },
    ],
    specsNote: "Figures are Rode's. Box contents can vary between production runs, so we confirm exactly what's included before you pay.",
    faqs: [
      {
        q: "Will it work with my camera?",
        a: "It works with cameras that have a 3.5 mm mic input with plug-in power, which includes most DSLRs and mirrorless cameras. Tell us your model on WhatsApp and we'll confirm.",
      },
      {
        q: "Does it work with phones?",
        a: "Not directly. For phones, the VideoMic GO II (₦200,000) connects over USB-C or with the right cable for iPhone and Android.",
      },
      {
        q: "VideoMic GO or VideoMic GO II?",
        a: "Both cost ₦200,000. The GO II is newer and smaller, and it also works over USB with phones and computers. The original GO is a simple, proven camera-only mic.",
      },
      {
        q: "Why doesn't it have a power switch?",
        a: "It's powered by the camera through the mic cable, so it turns on when the camera does. There's nothing to switch on or off.",
      },
      {
        q: "Will it work outdoors in wind?",
        a: "The foam windshield handles a light breeze. For windy days, add a furry windshield such as the Rode Deadcat GO.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "VideoMic GO",
        price: 200_000,
        includes: [
          "Rode VideoMic GO with integrated Rycote Lyre mount",
          "Foam windshield",
          "3.5 mm cable",
          "We confirm the full box contents on WhatsApp",
        ],
      },
    ],
  },
  {
    slug: "rode-stereo-videomic-pro",
    brand: "Rode",
    name: "Rode Stereo VideoMic Pro",
    category: "Audio",
    tagline: "Capture the whole scene in stereo.",
    headline:
      "The Rode Stereo VideoMic Pro is a compact on-camera X/Y stereo microphone that records wide, natural sound for music, events and ambience, with level control and a high-pass filter.",
    summary:
      "Shotgun mics focus on one direction. The Stereo VideoMic Pro does the opposite: two matched cardioid capsules in an X/Y pattern capture a wide, realistic stereo image of everything around the camera. That makes it a great choice for live music, church services, concerts, nature and atmosphere, where you want the viewer to feel they're in the room. It's compact and light at 116 g, with low noise, level control and a high-pass filter built in.",
    image: "/products/rode-stereo-videomic-pro/main.png",
    hero: "/products/rode-stereo-videomic-pro/hero.jpg",
    gallery: [
      { src: "/products/rode-stereo-videomic-pro/main.png", alt: "Rode Stereo VideoMic Pro on-camera stereo microphone" },
      { src: "/products/rode-stereo-videomic-pro/back.png", alt: "Rode Stereo VideoMic Pro controls on the back" },
      { src: "/products/rode-stereo-videomic-pro/hero.jpg", alt: "Filming live music with the Rode Stereo VideoMic Pro" },
    ],
    stats: [
      { value: "X/Y stereo", label: "Wide, natural sound" },
      { value: "18 dBA", label: "Low self-noise" },
      { value: "40 Hz–20 kHz", label: "Full frequency range" },
      { value: "116 g", label: "Compact on camera" },
    ],
    highlights: [
      {
        title: "Real stereo from your camera",
        body: "Two matched 0.50\" capsules in an X/Y arrangement record a wide, accurate stereo image. Your footage sounds like being there, with instruments, crowd and room placed naturally left to right.",
        image: "/products/rode-stereo-videomic-pro/hero.jpg",
      },
      {
        title: "Made for music and events",
        body: "With a 134 dB SPL max level, it handles loud bands, choirs and sound systems without distorting, which makes it ideal for concerts, church services and live performances.",
        image: "/products/rode-stereo-videomic-pro/main.png",
      },
      {
        title: "Level control and high-pass filter",
        body: "Switches on the back set the output level and add a high-pass filter to cut rumble from traffic, stage vibration and air conditioners, so you can get a cleaner signal into the camera.",
        image: "/products/rode-stereo-videomic-pro/back.png",
      },
      {
        title: "Low noise, compact build",
        body: "Self-noise of just 18 dBA keeps quiet scenes clean, and the compact 116 g body sits neatly on the hot shoe with a suspension mount to reduce handling noise.",
        image: "/products/rode-stereo-videomic-pro/main.png",
      },
    ],
    idealFor: [
      { title: "Live music videos", body: "Bands, choirs and concerts in stereo." },
      { title: "Church media teams", body: "The full sound of the service and congregation." },
      { title: "Event videographers", body: "Wedding receptions and parties with atmosphere." },
      { title: "Nature and travel", body: "Rich ambience for B-roll and documentaries." },
    ],
    notFor:
      "A stereo mic captures the whole scene, so it isn't the best choice for isolating one speaker's voice. For dialogue and vlogging, pick a shotgun mic like the Rode VideoMic Pro (₦380,000) or VideoMic NTG (₦350,000), or a wireless lavalier. It also needs a camera or recorder with a 3.5 mm stereo mic input.",
    specs: [
      { label: "Type", value: "On-camera stereo condenser microphone, X/Y pair" },
      { label: "Capsules", value: "Two 0.50\" matched capsules" },
      { label: "Frequency range", value: "40 Hz–20 kHz" },
      { label: "Sensitivity", value: "−38 dB re 1 V/Pa (12.6 mV @ 94 dB SPL)" },
      { label: "Self-noise", value: "18 dBA" },
      { label: "Max SPL", value: "134 dB SPL" },
      { label: "Output impedance", value: "200 Ω" },
      { label: "Output", value: "3.5 mm stereo minijack" },
      { label: "Size", value: "134 × 80 × 115 mm" },
      { label: "Weight", value: "116 g" },
    ],
    specsNote: "Figures are Rode's. Power options and box contents can vary between versions, so we confirm exactly what's included before you pay.",
    faqs: [
      {
        q: "Stereo or shotgun: which do I need?",
        a: "A shotgun mic focuses on one subject, which is best for speech and vlogs. A stereo mic captures the whole space, which is best for music, events and atmosphere.",
      },
      {
        q: "Will it work with my camera?",
        a: "Yes, with any camera or recorder that has a 3.5 mm stereo mic input and a hot shoe. Tell us your model on WhatsApp and we'll confirm.",
      },
      {
        q: "Can it record loud concerts?",
        a: "Yes. It handles up to 134 dB SPL. Use the level switch and set your camera's input gain low to avoid clipping at very loud shows.",
      },
      {
        q: "How is it powered?",
        a: "It runs on its own internal battery, so it works with any camera input. We confirm the battery type for the version in stock before you pay.",
      },
      {
        q: "Is it good for interviews?",
        a: "Not ideal. It picks up everything around it, so voices sound more distant. Use a shotgun mic or wireless lavalier for interviews.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "Stereo VideoMic Pro",
        price: 300_000,
        includes: [
          "Rode Stereo VideoMic Pro",
          "Foam windshield",
          "3.5 mm stereo cable",
          "We confirm the full box contents on WhatsApp",
        ],
      },
    ],
  },
  {
    slug: "dji-mic-2",
    brand: "DJI",
    name: "DJI Mic 2",
    category: "Audio",
    tagline: "Pro wireless sound with a backup built in.",
    headline:
      "The DJI Mic 2 is a wireless microphone system with 32-bit float internal recording, intelligent noise cancelling and up to 250 m range, for cameras and phones.",
    summary:
      "DJI Mic 2 clips a small transmitter on your subject and sends clean, clear voice to a receiver on your camera or phone. Each transmitter also records its own 32-bit float backup, so if the signal drops or someone shouts, your audio is still safe. Intelligent noise cancelling cuts background sound at the touch of a button, the receiver has a touchscreen and dial for quick control, and the transmitters connect straight to a phone over Bluetooth when you don't want to carry the receiver. Choose a single-mic kit or the two-mic kit with the charging case.",
    image: "/products/dji-mic-2/main.jpg",
    hero: "/products/dji-mic-2/hero.jpg",
    gallery: [
      { src: "/products/dji-mic-2/main.jpg", alt: "DJI Mic 2 transmitter and receiver" },
      { src: "/products/dji-mic-2/case.jpg", alt: "DJI Mic 2 charging case" },
      { src: "/products/dji-mic-2/colours.png", alt: "DJI Mic 2 transmitters in black and white with the charging case" },
      { src: "/products/dji-mic-2/receiver.jpg", alt: "DJI Mic 2 receiver touchscreen and dial" },
      { src: "/products/dji-mic-2/worn.png", alt: "Presenter wearing a DJI Mic 2 transmitter" },
      { src: "/products/dji-mic-2/hero.jpg", alt: "Creator vlogging with the DJI Mic 2" },
    ],
    stats: [
      { value: "32-bit float", label: "Internal backup recording" },
      { value: "250 m", label: "Max range (FCC)" },
      { value: "18 hours", label: "Total with charging case" },
      { value: "2 kits", label: "Single mic or two mics" },
    ],
    highlights: [
      {
        title: "A backup inside every mic",
        body: "Each transmitter records internally in 32-bit float. If the wireless link drops or the sound peaks, the backup on the mic is still clean, and 32-bit float makes it very hard to clip.",
        image: "/products/dji-mic-2/transmitter.jpg",
      },
      {
        title: "Noise cancelling at a touch",
        body: "Intelligent noise cancelling reduces traffic, fans and crowd sound around your speaker. Turn it on from the receiver when you're recording somewhere loud.",
        image: "/products/dji-mic-2/windscreen.jpg",
      },
      {
        title: "Touchscreen and dial",
        body: "The receiver has a touchscreen and a control dial, so you can check levels, set gain and switch modes without digging through menus.",
        image: "/products/dji-mic-2/receiver.jpg",
      },
      {
        title: "Camera, phone or straight to Bluetooth",
        body: "Use the receiver with a camera through the 3.5 mm cable, or plug it into a phone. The transmitters can also connect directly to a phone over Bluetooth, with no receiver needed.",
        image: "/products/dji-mic-2/camera.jpg",
      },
    ],
    idealFor: [
      { title: "YouTubers and vloggers", body: "Clean voice while walking and talking." },
      { title: "Interviews and podcasts", body: "Two mics for two speakers." },
      { title: "Event and wedding video", body: "Internal backup protects every speech." },
      { title: "Church and conference", body: "Long range, long battery life." },
    ],
    notFor:
      "The single-mic kit has no charging case and only records one person. If you need two mics on a smaller budget, the DJI Mic Mini (₦200,000) is lighter and cheaper but has no internal recording. For the newest DJI system, look at the DJI Mic 3. Already own a Mic 2? Add a spare DJI Mic 2 Transmitter (₦150,000).",
    specs: [
      { label: "Polar pattern", value: "Omnidirectional" },
      { label: "Frequency response", value: "50 Hz–20 kHz (low cut off); 100 Hz–20 kHz (low cut on)" },
      { label: "Max SPL", value: "120 dB SPL" },
      { label: "Equivalent noise", value: "21 dBA" },
      { label: "Internal recording", value: "32-bit float, on each transmitter" },
      { label: "Max range", value: "250 m (FCC), 160 m (CE), unobstructed" },
      { label: "Transmitter", value: "46 × 31 × 22 mm; 28 g; about 6 hours" },
      { label: "Receiver", value: "54 × 28 × 22 mm; 28 g; about 6 hours" },
      { label: "Charging case", value: "200 g; charges two TX and one RX about twice" },
      { label: "Charging time", value: "About 70 minutes (TX and RX)" },
      { label: "Monitor output", value: "3.5 mm headphone jack on the receiver" },
    ],
    specsNote: "Figures are DJI's. Box contents can vary between production runs, so we confirm exactly what's included before you pay.",
    faqs: [
      {
        q: "Which kit should I get?",
        a: "Get the 1 TX + 1 RX kit if you only record yourself. Get the 2 TX + 1 RX kit with the charging case for interviews, two presenters, or if you want to charge everything on the go.",
      },
      {
        q: "Does it work with my phone?",
        a: "Yes. Plug the receiver into a phone with the phone adapter, or connect a transmitter directly to the phone over Bluetooth. Tell us your phone model on WhatsApp and we'll confirm the right connector.",
      },
      {
        q: "What is 32-bit float internal recording?",
        a: "Each transmitter saves its own copy of the audio. 32-bit float keeps loud and quiet sound without clipping, so you can fix the level later in editing.",
      },
      {
        q: "How long does the battery last?",
        a: "About 6 hours per transmitter and receiver. With the charging case, DJI quotes about 18 hours in total.",
      },
      {
        q: "Can I add more transmitters later?",
        a: "Yes. We sell the DJI Mic 2 Transmitter on its own (₦150,000) if you want a spare or a second mic for the single-mic kit.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "1tx",
        name: "1 TX + 1 RX",
        price: 280_000,
        includes: [
          "One DJI Mic 2 transmitter",
          "One DJI Mic 2 receiver",
          "Camera and phone connection accessories",
          "We confirm the full box contents on WhatsApp",
        ],
      },
      {
        id: "2tx-case",
        name: "2 TX + 1 RX + charging case",
        price: 390_000,
        includes: [
          "Two DJI Mic 2 transmitters",
          "One DJI Mic 2 receiver",
          "Charging case",
          "Camera and phone connection accessories",
          "We confirm the full box contents on WhatsApp",
        ],
      },
    ],
  },
  {
    slug: "dji-mic-mini",
    brand: "DJI",
    name: "DJI Mic Mini (2 TX + 1 RX + Charging Case)",
    category: "Audio",
    tagline: "Tiny mics, all-day battery.",
    headline:
      "The DJI Mic Mini is a two-person wireless microphone kit with 10 g transmitters, up to 400 m range and noise cancelling, with a charging case for long shoots.",
    summary:
      "DJI Mic Mini is made to disappear on your clothes. Each transmitter weighs about 10 g, so it sits flat on a collar or T-shirt without pulling it down, and it lasts about 11.5 hours on a charge. The kit comes with two transmitters, a receiver for your camera or phone, and a charging case that tops everything up several times. Two levels of noise cancelling clean up busy streets and noisy rooms, and the transmitters can also connect straight to a phone over Bluetooth.",
    image: "/products/dji-mic-mini/main.jpg",
    hero: "/products/dji-mic-mini/hero.jpg",
    gallery: [
      { src: "/products/dji-mic-mini/main.jpg", alt: "DJI Mic Mini transmitter" },
      { src: "/products/dji-mic-mini/case.jpg", alt: "DJI Mic Mini charging case" },
      { src: "/products/dji-mic-mini/windscreens.jpg", alt: "DJI Mic Mini charging case with furry windscreens" },
      { src: "/products/dji-mic-mini/worn.jpg", alt: "DJI Mic Mini transmitter worn on a shirt" },
      { src: "/products/dji-mic-mini/presenter.jpg", alt: "Presenter recording with the DJI Mic Mini" },
      { src: "/products/dji-mic-mini/hero.jpg", alt: "DJI Mic Mini with cameras and phones" },
    ],
    stats: [
      { value: "10 g", label: "Per transmitter" },
      { value: "400 m", label: "Max range, unobstructed" },
      { value: "11.5 hours", label: "Per transmitter charge" },
      { value: "2 mics", label: "With charging case" },
    ],
    highlights: [
      {
        title: "So light you forget it's there",
        body: "At about 10 g, each transmitter clips or magnets onto clothing without sagging. It looks neat on camera and is comfortable to wear all day.",
        image: "/products/dji-mic-mini/worn.jpg",
      },
      {
        title: "Battery for a full day",
        body: "Each transmitter runs for about 11.5 hours. The charging case can refill both transmitters and the receiver about 3.6 times, so one kit covers long events and travel days.",
        image: "/products/dji-mic-mini/case.jpg",
      },
      {
        title: "Noise cancelling built in",
        body: "Choose between two levels of noise cancelling to cut traffic, crowds and air conditioners, and automatic limiting helps stop sudden loud sound from distorting.",
        image: "/products/dji-mic-mini/transmitter.jpg",
      },
      {
        title: "Camera, phone or Bluetooth",
        body: "The receiver connects to cameras through 3.5 mm and to phones with an adapter. The transmitters can also pair straight to a phone over Bluetooth for quick clips.",
        image: "/products/dji-mic-mini/hero.jpg",
      },
    ],
    idealFor: [
      { title: "Content creators", body: "Small, light, looks clean on camera." },
      { title: "Two-person videos", body: "Interviews, couples and duo channels." },
      { title: "Phone filmmakers", body: "Works with phones as well as cameras." },
      { title: "Long shoot days", body: "Case keeps both mics charged." },
    ],
    notFor:
      "The Mic Mini doesn't record a backup inside the transmitter, so if the wireless signal drops, that part of the audio is lost. For internal recording, get the DJI Mic 2 (from ₦280,000). If you only film on a phone, the DJI Mic Mini 2 phone kit (₦150,000) costs less.",
    specs: [
      { label: "Polar pattern", value: "Omnidirectional" },
      { label: "Frequency response", value: "20 Hz–20 kHz (low cut off); 100 Hz–20 kHz (low cut on)" },
      { label: "Max SPL", value: "120 dB SPL" },
      { label: "Equivalent noise", value: "24 dBA" },
      { label: "Max range", value: "400 m, open area without interference" },
      { label: "Transmitter", value: "26.6 × 26.1 × 16 mm; about 10 g; about 11.5 hours" },
      { label: "Receiver", value: "46.5 × 29.6 × 19.3 mm; about 17.8 g; about 10.5 hours" },
      { label: "Charging case", value: "About 139 g; charges two TX and one RX about 3.6 times" },
      { label: "Charging time", value: "About 90 minutes (TX), 100 minutes (RX), 2 hours (case)" },
      { label: "Bluetooth", value: "Bluetooth 5.3, direct to phone" },
    ],
    specsNote: "Figures are DJI's. Box contents can vary between production runs, so we confirm exactly what's included before you pay.",
    faqs: [
      {
        q: "Does it work with cameras and phones?",
        a: "Yes. The receiver connects to a camera with the 3.5 mm cable and to phones with an adapter. Tell us your camera or phone on WhatsApp and we'll confirm the right connection.",
      },
      {
        q: "How long does the battery last?",
        a: "About 11.5 hours per transmitter and 10.5 hours for the receiver. The charging case refills the whole set about 3.6 times.",
      },
      {
        q: "Mic Mini or Mic 2?",
        a: "The Mic Mini is smaller, lighter and cheaper, with longer battery life. The DJI Mic 2 adds 32-bit float backup recording in each transmitter and a touchscreen receiver.",
      },
      {
        q: "Does it reduce background noise?",
        a: "Yes. It has two levels of noise cancelling. For very windy places, use the furry windscreens.",
      },
      {
        q: "Can I use just one mic?",
        a: "Yes. Leave the second transmitter in the case and record with one. Both mics work together when you need two people.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "2 TX + 1 RX + charging case",
        price: 200_000,
        includes: [
          "Two DJI Mic Mini transmitters",
          "One DJI Mic Mini receiver",
          "Charging case",
          "Windscreens and connection accessories",
          "We confirm the full box contents on WhatsApp",
        ],
      },
    ],
  },
  {
    slug: "hollyland-lark-m1",
    brand: "Hollyland",
    name: "Hollyland Lark M1 (2 TX + 1 RX + Charging Case)",
    category: "Audio",
    tagline: "Small, simple, two-person wireless.",
    headline:
      "The Hollyland Lark M1 is a two-person wireless mic kit with 11.8 g transmitters, one-tap noise cancelling, up to 200 m range and a charging case for about 20 hours of use.",
    summary:
      "The Lark M1 is an easy way to get clean, clear voice into a camera or phone. Each transmitter weighs 11.8 g and is under 1 cm thick, so it clips neatly onto a shirt. One press turns on HearClear noise cancelling to cut traffic and room noise. You get two transmitters, one receiver and a charging case. Each part runs for about 8 hours, and the case takes the kit to about 20 hours in total. Cables for cameras and phones come in the box.",
    image: "/products/hollyland-lark-m1/main.jpg",
    hero: "/products/hollyland-lark-m1/hero.jpg",
    gallery: [
      { src: "/products/hollyland-lark-m1/main.jpg", alt: "Hollyland Lark M1 transmitters in the charging case" },
      { src: "/products/hollyland-lark-m1/g1.jpg", alt: "Hollyland Lark M1 charging cases in different colours" },
      { src: "/products/hollyland-lark-m1/g2.jpg", alt: "Close-up of the Hollyland Lark M1 transmitter" },
      { src: "/products/hollyland-lark-m1/g3.jpg", alt: "Hollyland Lark M1 microphone grille" },
      { src: "/products/hollyland-lark-m1/h1.jpg", alt: "Hollyland Lark M1 clipped to a T-shirt" },
      { src: "/products/hollyland-lark-m1/h4.jpg", alt: "Hollyland Lark M1 camera cable" },
    ],
    stats: [
      { value: "11.8 g", label: "Per transmitter" },
      { value: "200 m", label: "Max range, line of sight" },
      { value: "8 hours", label: "Per charge" },
      { value: "20 hours", label: "Total with case" },
    ],
    highlights: [
      {
        title: "Light enough to forget",
        body: "Each transmitter weighs 11.8 g and is under 1 cm thick. It clips onto a collar or T-shirt without pulling the fabric down and looks tidy on camera.",
        image: "/products/hollyland-lark-m1/h1.jpg",
      },
      {
        title: "One-tap noise cancelling",
        body: "Press once to turn on HearClear noise cancelling. It cuts traffic, crowds and fans so the voice comes through clearly, which helps in busy Lagos streets and noisy rooms.",
        image: "/products/hollyland-lark-m1/h2.jpg",
      },
      {
        title: "Works with cameras and phones",
        body: "The box includes a TRS cable for cameras and a TRRS cable for phones. Set the receiver to High, Mid or Low output to match your device.",
        image: "/products/hollyland-lark-m1/h4.jpg",
      },
      {
        title: "Charging case for long days",
        body: "Each transmitter and the receiver run for about 8 hours. The case charges the whole kit about twice, for about 20 hours of use in total, and a full charge takes about 1.5 hours over USB-C.",
        image: "/products/hollyland-lark-m1/g1.jpg",
      },
    ],
    idealFor: [
      { title: "Interviews", body: "Two mics for host and guest." },
      { title: "Vloggers", body: "Light, neat and quick to set up." },
      { title: "Live streams", body: "Clean voice for gaming and talk shows." },
      { title: "Events", body: "Speeches, church programmes and MCs." },
    ],
    notFor:
      "The Lark M1 doesn't record a backup inside the transmitter, so if the signal drops, that part of the audio is lost. For backup recording, look at the DJI Mic 2 (from ₦280,000). If you film only on a phone, the DJI Mic Mini 2 phone kit (₦150,000) costs less.",
    specs: [
      { label: "Kit", value: "2 transmitters, 1 receiver, charging case" },
      { label: "Polar pattern", value: "Omnidirectional" },
      { label: "Audio", value: "48 kHz / 16-bit, LC3 codec" },
      { label: "Max range", value: "200 m (650 ft), line of sight" },
      { label: "Transmitter weight", value: "11.8 g; under 1 cm thick" },
      { label: "Battery", value: "About 8 hours per transmitter and receiver; about 20 hours total with case" },
      { label: "Charging time", value: "About 1.5 hours, USB-C" },
      { label: "Noise cancelling", value: "HearClear, one press" },
      { label: "Output level", value: "High, Mid, Low presets" },
      { label: "Cables included", value: "TRS–TRS (camera), TRS–TRRS (phone)" },
    ],
    specsNote: "Figures are Hollyland's. Box contents can vary between production runs, so we confirm exactly what's included before you pay.",
    faqs: [
      {
        q: "Does it work with my phone?",
        a: "Yes. Use the TRS–TRRS cable with phones that have a headphone jack. For USB-C or Lightning phones you need an adapter cable. Tell us your phone on WhatsApp and we'll confirm the right one.",
      },
      {
        q: "Can I use it on my camera?",
        a: "Yes. Connect the receiver to the camera's 3.5 mm mic input with the TRS–TRS cable, then pick High, Mid or Low output to match the camera.",
      },
      {
        q: "How long does the battery last?",
        a: "About 8 hours per transmitter and receiver. With the charging case you get about 20 hours in total.",
      },
      {
        q: "Does it reduce background noise?",
        a: "Yes. Press the button on the transmitter to turn on HearClear noise cancelling.",
      },
      {
        q: "Can I use just one mic?",
        a: "Yes. Leave one transmitter in the case and record with the other. Both work together when you need two people.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "2 TX + 1 RX + charging case",
        price: 285_000,
        includes: [
          "Two Lark M1 transmitters",
          "One Lark M1 receiver",
          "Charging case",
          "TRS–TRS camera cable and TRS–TRRS phone cable",
          "We confirm the full box contents on WhatsApp",
        ],
      },
    ],
  },
  {
    slug: "dji-lavalier-mic",
    brand: "DJI",
    name: "DJI Lavalier Mic",
    category: "Audio",
    tagline: "Hide the mic, keep the sound.",
    headline:
      "The DJI Lavalier Mic is a small wired clip-on mic that plugs into DJI Mic and DJI Mic 2 transmitters, so the transmitter can go out of sight while the mic sits close to the voice.",
    summary:
      "Sometimes you don't want a transmitter showing on camera. The DJI Lavalier Mic plugs into the 3.5 mm input on a DJI Mic or DJI Mic 2 transmitter. You clip the small mic onto a collar or under clothing and hide the transmitter in a pocket or on a belt. When the lav is plugged in, the transmitter's built-in mic switches off and records through the lav. The clip rotates, and a cable lock keeps the mic from being pulled loose.",
    image: "/products/dji-lavalier-mic/main.jpg",
    hero: "/products/dji-lavalier-mic/hero.jpg",
    gallery: [
      { src: "/products/dji-lavalier-mic/main.jpg", alt: "DJI Lavalier Mic with cable" },
      { src: "/products/dji-lavalier-mic/g1.jpg", alt: "DJI Lavalier Mic with windscreen and 3.5 mm plug" },
      { src: "/products/dji-lavalier-mic/g3.jpg", alt: "DJI Lavalier Mic plugged into a DJI Mic 2 transmitter" },
      { src: "/products/dji-lavalier-mic/h1.jpg", alt: "DJI Lavalier Mic clipped to a neckline" },
      { src: "/products/dji-lavalier-mic/h3.jpg", alt: "Presenter wearing a DJI Lavalier Mic outdoors" },
    ],
    stats: [
      { value: "Omni", label: "Pickup pattern" },
      { value: "50 Hz–20 kHz", label: "Frequency response" },
      { value: "3.5 mm", label: "Locking plug" },
      { value: "Mic & Mic 2", label: "Works with" },
    ],
    highlights: [
      {
        title: "Out of sight on camera",
        body: "The mic head is small enough to sit on a neckline or tuck under clothing. Put the transmitter in a pocket or on a belt, and nothing bulky shows in the shot.",
        image: "/products/dji-lavalier-mic/h1.jpg",
      },
      {
        title: "Made for DJI Mic transmitters",
        body: "Plug it into a DJI Mic or DJI Mic 2 transmitter. The built-in mic switches off automatically and records through the lav instead.",
        image: "/products/dji-lavalier-mic/h2.jpg",
      },
      {
        title: "Natural voice, any direction",
        body: "The omnidirectional capsule picks up the voice evenly, even if the speaker turns their head, with a 50 Hz–20 kHz frequency response.",
        image: "/products/dji-lavalier-mic/h3.jpg",
      },
      {
        title: "Stays put",
        body: "The clip rotates so you can angle the mic toward the mouth, and the cable lock stops the plug from being pulled out mid-take.",
        image: "/products/dji-lavalier-mic/h4.jpg",
      },
    ],
    idealFor: [
      { title: "Film and drama", body: "Hide the mic on actors." },
      { title: "Weddings", body: "Discreet audio for vows and speeches." },
      { title: "TV and interviews", body: "Clean look for on-camera guests." },
      { title: "DJI Mic owners", body: "Adds a hidden-mic option." },
    ],
    notFor:
      "This is a wired mic only. It needs a DJI Mic or DJI Mic 2 transmitter to work wirelessly. If you don't have one yet, get the DJI Mic 2 kit (from ₦280,000), or the single DJI Mic 2 transmitter if you already own the receiver.",
    specs: [
      { label: "Type", value: "Wired clip-on (lavalier) microphone" },
      { label: "Polar pattern", value: "Omnidirectional" },
      { label: "Frequency response", value: "50 Hz–20 kHz" },
      { label: "Connector", value: "3.5 mm TRS with cable lock" },
      { label: "Compatible with", value: "DJI Mic and DJI Mic 2 transmitters" },
      { label: "Clip", value: "Rotating clip" },
    ],
    specsNote: "Figures are DJI's. It also works with other 3.5 mm mic inputs that supply plug-in power, but we only promise compatibility with DJI Mic and Mic 2 transmitters.",
    faqs: [
      {
        q: "Does it work on its own?",
        a: "It's designed for DJI Mic and DJI Mic 2 transmitters. Plug it into the transmitter and the lav becomes the wireless mic.",
      },
      {
        q: "Will it work with my DJI Mic Mini?",
        a: "The DJI Mic Mini has no 3.5 mm mic input, so this lav won't plug into it. Use it with DJI Mic or DJI Mic 2.",
      },
      {
        q: "Does the transmitter's own mic still record?",
        a: "No. When the lav is plugged in, the transmitter switches to the lav automatically.",
      },
      {
        q: "Does it come with a windscreen?",
        a: "Yes, a foam windscreen comes with it. We confirm the full box contents on WhatsApp before you pay.",
      },
      {
        q: "Can I plug it into my camera?",
        a: "It may work with cameras that supply plug-in power, but it's made for DJI Mic transmitters. Tell us your camera and we'll advise.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "DJI Lavalier Mic",
        price: 120_000,
        includes: [
          "DJI Lavalier Mic",
          "Windscreen and clip",
          "We confirm the full box contents on WhatsApp",
        ],
      },
    ],
  },
  {
    slug: "boya-by-wm8-pro",
    brand: "Boya",
    name: "Boya BY-WM8 Pro UHF Wireless Lavalier System",
    category: "Audio",
    tagline: "Classic UHF wireless, one or two mics.",
    headline:
      "The Boya BY-WM8 Pro is a UHF wireless lavalier system with 48 channels, about 100 m range and AA batteries, sold as K1 (one mic) or K2 (two mics).",
    summary:
      "The BY-WM8 Pro works like the bodypack systems used on TV sets and at events. A bodypack transmitter with a clip-on lav mic sends the voice to a receiver on your camera. You can choose from 48 UHF channels to avoid interference, and an LCD on each unit shows the channel and battery. Everything runs on AA batteries, so you can swap them in seconds instead of waiting to charge. The K1 kit has one transmitter. The K2 kit has two transmitters that both feed one receiver, for interviews and two-person shoots.",
    image: "/products/boya-by-wm8-pro/main.jpg",
    hero: "/products/boya-by-wm8-pro/hero.jpg",
    gallery: [
      { src: "/products/boya-by-wm8-pro/main.jpg", alt: "Boya BY-WM8 Pro K2 receiver and two transmitters" },
      { src: "/products/boya-by-wm8-pro/g1.jpg", alt: "Boya BY-WM8 Pro bodypack transmitter" },
      { src: "/products/boya-by-wm8-pro/g2.jpg", alt: "Boya BY-WM8 Pro dual-antenna receiver" },
      { src: "/products/boya-by-wm8-pro/h1.jpg", alt: "Interview filmed with the Boya BY-WM8 Pro" },
      { src: "/products/boya-by-wm8-pro/h3.jpg", alt: "Boya BY-WM8 Pro receiver on a video camera" },
    ],
    stats: [
      { value: "48", label: "UHF channels" },
      { value: "100 m", label: "Range, open area" },
      { value: "AA", label: "Swappable batteries" },
      { value: "1 or 2", label: "Mics (K1 / K2)" },
    ],
    highlights: [
      {
        title: "Two mics, one receiver",
        body: "The K2 kit sends two transmitters into one receiver, so host and guest can both be miked without a second receiver on the camera.",
        image: "/products/boya-by-wm8-pro/h1.jpg",
      },
      {
        title: "48 channels to avoid interference",
        body: "Pick a clear UHF channel on the LCD, then lock the controls so nothing changes by accident during a shoot.",
        image: "/products/boya-by-wm8-pro/g1.jpg",
      },
      {
        title: "Built for cameras",
        body: "The receiver mounts on the camera's shoe and connects with a 3.5 mm cable. It suits camcorders, DSLRs and mirrorless cameras used for news, events and documentaries.",
        image: "/products/boya-by-wm8-pro/h3.jpg",
      },
      {
        title: "Swap batteries, keep shooting",
        body: "Each unit runs on AA batteries. When they run low, drop in fresh ones and carry on. That helps when power is unreliable.",
        image: "/products/boya-by-wm8-pro/h4.jpg",
      },
    ],
    idealFor: [
      { title: "Event videographers", body: "Speeches, weddings and church services." },
      { title: "News and TV", body: "Classic bodypack setup for reporters." },
      { title: "Interviews", body: "K2 gives two mics into one camera." },
      { title: "Long shoots", body: "Swap AA batteries instead of charging." },
    ],
    notFor:
      "The bodypacks are larger than modern clip-on wireless mics and need AA batteries. If you want something tiny and rechargeable, the Hollyland Lark M1 (₦285,000) or DJI Mic Mini (₦200,000) are smaller and come with a charging case.",
    specs: [
      { label: "System", value: "UHF wireless lavalier" },
      { label: "Channels", value: "48 selectable" },
      { label: "Range", value: "Up to about 100 m, open area" },
      { label: "Lav mic", value: "Omnidirectional; sensitivity −30 dB ±3 dB" },
      { label: "Lav cable", value: "About 1.2 m, 3.5 mm locking plug" },
      { label: "Transmitter inputs", value: "MIC and LINE IN" },
      { label: "Power", value: "AA batteries" },
      { label: "Display", value: "LCD with channel and battery level; control lock" },
      { label: "K1 size and weight", value: "208 × 67 × 29 mm, about 90 g" },
    ],
    specsNote: "Figures are Boya's. Retailers list different UHF frequency bands for this model, so we confirm the band and the full box contents before you pay.",
    faqs: [
      {
        q: "What's the difference between K1 and K2?",
        a: "K1 has one transmitter and one receiver, for one person. K2 has two transmitters and one receiver, so two people can be miked into the same camera.",
      },
      {
        q: "Does it use rechargeable batteries?",
        a: "It runs on AA batteries. You can use rechargeable AA cells if you prefer.",
      },
      {
        q: "Does it work with my camera?",
        a: "Yes, with cameras that have a 3.5 mm mic input. Tell us your camera on WhatsApp and we'll confirm.",
      },
      {
        q: "Can I use it with a phone?",
        a: "It's built for cameras. With a phone you need an adapter cable. For phone-first shooting a modern clip-on kit is easier.",
      },
      {
        q: "What's the range?",
        a: "Up to about 100 m in an open area. Walls and crowds reduce it.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "k1",
        name: "Pro-K1 (1 TX + 1 RX)",
        price: 250_000,
        includes: [
          "One bodypack transmitter",
          "One camera receiver",
          "One lavalier mic",
          "We confirm the full box contents on WhatsApp",
        ],
      },
      {
        id: "k2",
        name: "Pro-K2 (2 TX + 1 RX)",
        price: 380_000,
        includes: [
          "Two bodypack transmitters",
          "One dual-channel camera receiver",
          "Two lavalier mics",
          "We confirm the full box contents on WhatsApp",
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
      "It doesn't fit the original EOS C300 or C300 Dual Pixel, which use the BP-975, or Canon's smaller XA camcorders. For a longer-running pack on the same cameras, choose the Canon BP-A60 (₦704,700).",
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
        price: 567_700,
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
      "It doesn't fit the original EOS C300 or C300 Dual Pixel, which use the BP-975. If you want a lighter, more compact pack for the same cameras, choose the Canon BP-A30 (₦567,700).",
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
        price: 704_700,
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
      "If your camera is older than the EOS R5 Mark II and you just want a reliable spare, the Canon LP-E6NH (₦221,500) gives you the same capacity for less. It doesn't fit Canon cameras that use other batteries, such as the EOS R50, R10 or R100 (LP-E17) or the EOS R1 and R3.",
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
        a: "Both hold 2130 mAh. The LP-E6P can supply more current (6 A), which newer cameras like the EOS R5 Mark II need for full performance. If you shoot on a newer body, choose the LP-E6P. For older cameras, the LP-E6NH (₦221,500) does the same job for less.",
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
        price: 257_050,
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
      "If you shoot on the EOS R5 Mark II or R6 Mark III, the Canon LP-E6P (₦257,050) lets the camera run at its full performance. The LP-E6NH doesn't fit Canon cameras that use other batteries, such as the EOS R50, R10 or R100 (LP-E17) or the EOS R1 and R3.",
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
        price: 221_500,
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
      "It doesn't fit Canon cameras that use the larger LP-E6 family, such as the EOS R5, R6, R6 Mark II, R7, 90D or 5D Mark IV. For those, choose the Canon LP-E6NH (₦221,500).",
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
      "It doesn't fit Canon's Cinema EOS cameras or the XF605, which use the BP-A30 (₦567,700) or BP-A60 (₦704,700), or Canon EOS stills cameras, which take batteries such as the LP-E6NH (₦221,500) or LP-E17 (₦121,400).",
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
      "This is the body only, so you'll need RF lenses (or EF lenses with Canon's EF-EOS R adapter). If you want a fixed-lens, point-and-shoot camcorder with a built-in zoom, look at Canon's XF or XA camcorders instead. Spare batteries: the Canon BP-A30 (₦567,700) and BP-A60 (₦704,700) also fit.",
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
        a: "Canon lists the BP-A30N as its battery and also supports the BP-A60N, BP-A30 and BP-A60. If you already shoot a Canon C70, C300 Mark III or XF605, your batteries fit. We sell the BP-A30 (₦567,700) and BP-A60 (₦704,700).",
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
    notFor: "If you shoot mostly for social media, the Canon XA series records 4K in a lighter body for much less. The XF705 runs on Canon BP-A series batteries: the BP-A30 (₦567,700) and BP-A60 (₦704,700) fit.",
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
        a: "Canon BP-A series. The BP-A30 (₦567,700) and the longer-running BP-A60 (₦704,700) both fit. Add one to your order on WhatsApp.",
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
    notFor: "If you need interchangeable lenses or a shallow cinema look, a Cinema EOS camera like the C70 or C80 suits you better. The XF605 uses Canon BP-A series batteries: the BP-A30 (₦567,700) and BP-A60 (₦704,700) fit.",
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
        a: "Canon BP-A series. The BP-A30 (₦567,700) and the longer-running BP-A60 (₦704,700) both fit.",
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
    notFor: "If you want a lighter camera for solo work, the Canon C70 or C80 offers much of the same image in a smaller body. The C300 Mark III uses Canon BP-A series batteries: the BP-A30 (₦567,700) and BP-A60 (₦704,700) fit.",
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
    notFor: "If you need 10-bit compressed recording without RAW, the C70 or C80 handle that better. The C200 uses Canon BP-A series batteries: the BP-A30 (₦567,700) and BP-A60 (₦704,700) fit.",
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
    notFor: "This is a camera for crews and big productions. For one-person shoots, the C70 or C80 is lighter and simpler. The C500 Mark II uses Canon BP-A series batteries: the BP-A30 (₦567,700) and BP-A60 (₦704,700) fit.",
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
    slug: "dji-rs-4-mini",
    brand: "DJI",
    name: "DJI RS 4 Mini",
    category: "Gimbals",
    tagline: "A light gimbal that tracks you.",
    headline:
      "The DJI RS 4 Mini is a compact camera gimbal for mirrorless cameras and phones, with a 2 kg payload, automatic axis locks, subject tracking and about 13 hours of battery life.",
    summary:
      "The RS 4 Mini weighs about 890 g and carries mirrorless cameras with small lenses up to 2 kg. The axes lock and unlock on their own when you power it on and off, and Teflon-coated arms make balancing quicker. You can switch to vertical shooting for Reels and TikTok in about 10 seconds. Add the RS Intelligent Tracking Module and the gimbal follows a person without the DJI app, which makes it easy to film yourself. The battery runs for about 13 hours.",
    image: "/products/dji-rs-4-mini/main.jpg",
    hero: "/products/dji-rs-4-mini/hero.jpg",
    gallery: [
      { src: "/products/dji-rs-4-mini/main.jpg", alt: "DJI RS 4 Mini with a mirrorless camera on its tripod" },
      { src: "/products/dji-rs-4-mini/g1.jpg", alt: "DJI RS 4 Mini gimbal on its tripod" },
      { src: "/products/dji-rs-4-mini/g2.jpg", alt: "DJI RS 4 Mini with a camera mounted" },
      { src: "/products/dji-rs-4-mini/g3.jpg", alt: "DJI RS 4 Mini and what comes in the box" },
      { src: "/products/dji-rs-4-mini/h2.jpg", alt: "DJI RS 4 Mini tracking a tennis player" },
      { src: "/products/dji-rs-4-mini/h4.jpg", alt: "Filming in a workshop with the DJI RS 4 Mini" },
    ],
    stats: [
      { value: "2 kg", label: "Max payload" },
      { value: "890 g", label: "Gimbal weight" },
      { value: "13 hours", label: "Battery life" },
      { value: "10 s", label: "Switch to vertical" },
    ],
    highlights: [
      {
        title: "Balance once, then just shoot",
        body: "The arms are coated in Teflon so they slide smoothly while you balance the camera. The axes lock automatically when you switch off, so you can pack it away without the camera flopping around.",
        image: "/products/dji-rs-4-mini/h1.jpg",
      },
      {
        title: "Follows you on its own",
        body: "Clip on the RS Intelligent Tracking Module and the gimbal keeps a person in frame, up to about 10 m away. Start and stop tracking with a hand gesture. You don't need the app, and it works with any camera on the gimbal.",
        image: "/products/dji-rs-4-mini/h2.jpg",
      },
      {
        title: "Vertical in about 10 seconds",
        body: "Turn the camera plate to shoot vertical video for Instagram, TikTok and WhatsApp status. No extra bracket, and you don't need to rebalance.",
        image: "/products/dji-rs-4-mini/h3.jpg",
      },
      {
        title: "Light enough for long days",
        body: "At about 890 g it is easy to hold for a full event or a day of content. The 3100 mAh battery runs for about 13 hours and charges over USB-C.",
        image: "/products/dji-rs-4-mini/h4.jpg",
      },
    ],
    idealFor: [
      { title: "Content creators", body: "Smooth walking shots and vertical video." },
      { title: "Solo shooters", body: "Tracking keeps you in frame without a camera operator." },
      { title: "Events", body: "Weddings, owambes and church programmes." },
      { title: "Small cameras", body: "Mirrorless bodies like the Sony ZV-E10 or Canon R50." },
    ],
    notFor:
      "The RS 4 Mini tops out at 2 kg, so it won't carry a full-frame camera with a heavy zoom lens. For bigger setups, look at the DJI RS 4 (from ₦880,000) or the DJI RS 4 Pro (from ₦1,680,000).",
    specs: [
      { label: "Payload", value: "0.4–2 kg" },
      { label: "Weight", value: "About 890 g gimbal; 140 g tripod and grip" },
      { label: "Battery", value: "3100 mAh LiPo 2S, 22.32 Wh" },
      { label: "Battery life", value: "About 13 hours" },
      { label: "Charging", value: "About 1 h 50 m with a 30 W charger, USB-C" },
      { label: "Max speed", value: "360°/s on all axes" },
      { label: "Range", value: "Pan 360° continuous; roll −95° to +235°; tilt −110° to +210°" },
      { label: "Ports", value: "NATO, 1/4\"-20, RSS camera control (USB-C), Pogo pins for the tracking module" },
      { label: "Connection", value: "Bluetooth 5.1, USB-C" },
      { label: "Size", value: "Folded 236 × 64 × 316 mm; unfolded 175 × 182 × 338 mm" },
      { label: "Operating temperature", value: "−10°C to 45°C" },
    ],
    specsNote: "Figures are DJI's. Battery life was measured with the gimbal balanced and at rest. We confirm the box contents before you pay.",
    faqs: [
      {
        q: "Will my camera fit?",
        a: "Most mirrorless cameras with a small lens fit, as long as the camera and lens weigh under 2 kg together. Send us your camera and lens on WhatsApp and we'll confirm.",
      },
      {
        q: "Can I use it with my phone?",
        a: "Yes, with the phone holder. It comes with the Combo; you can also buy it separately.",
      },
      {
        q: "What does the Combo add?",
        a: "The RS Intelligent Tracking Module, which follows a person automatically, and the phone holder.",
      },
      {
        q: "Can it shoot vertical video?",
        a: "Yes. Rotate the camera plate to switch to vertical in about 10 seconds, without rebalancing.",
      },
      {
        q: "How long does the battery last?",
        a: "About 13 hours, and about 1 h 50 m to fully charge with a 30 W USB-C charger.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "RS 4 Mini",
        price: 500_000,
        includes: [
          "DJI RS 4 Mini gimbal",
          "Extended grip and tripod",
          "Quick-release plate",
          "USB-C charging cable",
          "We confirm the full box contents on WhatsApp",
        ],
      },
      {
        id: "combo",
        name: "RS 4 Mini Combo",
        price: 580_000,
        includes: [
          "Everything in the standard kit",
          "RS Intelligent Tracking Module",
          "Phone holder",
          "We confirm the full box contents on WhatsApp",
        ],
      },
    ],
  },
  {
    slug: "dji-rs-4",
    brand: "DJI",
    name: "DJI RS 4",
    category: "Gimbals",
    tagline: "The everyday pro gimbal.",
    headline:
      "The DJI RS 4 is a 3 kg payload gimbal for mirrorless and DSLR cameras, with native vertical shooting, automatic axis locks, a joystick zoom switch and about 12 hours of battery life.",
    summary:
      "The RS 4 is the gimbal most videographers reach for. It carries up to 3 kg, which covers full-frame mirrorless cameras with a 24–70 mm f/2.8 lens. Teflon-coated arms and automatic axis locks make setup quick. You can switch to vertical shooting without extra parts, and the joystick can toggle between moving the gimbal and controlling zoom. The BG21 grip battery runs for about 12 hours, and the optional BG70 grip extends that to about 29 hours. The Combo adds the Focus Pro Motor for smooth focus pulls, plus a briefcase handle and carrying case.",
    image: "/products/dji-rs-4/main.jpg",
    hero: "/products/dji-rs-4/hero.jpg",
    gallery: [
      { src: "/products/dji-rs-4/main.jpg", alt: "DJI RS 4 gimbal on its tripod" },
      { src: "/products/dji-rs-4/g1.jpg", alt: "DJI RS 4 with a camera mounted" },
      { src: "/products/dji-rs-4/g2.jpg", alt: "DJI RS 4 with a full-frame camera and lens" },
      { src: "/products/dji-rs-4/g3.jpg", alt: "DJI RS 4 and what comes in the box" },
      { src: "/products/dji-rs-4/h1.jpg", alt: "DJI RS 4 touchscreen and joystick" },
      { src: "/products/dji-rs-4/h4.jpg", alt: "DJI RS 4 Ronin arm" },
    ],
    stats: [
      { value: "3 kg", label: "Max payload" },
      { value: "1.07 kg", label: "Gimbal weight" },
      { value: "12 hours", label: "Battery life" },
      { value: "29.5 hours", label: "With BG70 grip" },
    ],
    highlights: [
      {
        title: "Zoom and steer from one joystick",
        body: "Flip the mode switch and the joystick controls your lens zoom instead of the gimbal. The 1.8-inch touchscreen gives quick access to settings, so you rarely need the app.",
        image: "/products/dji-rs-4/h1.jpg",
      },
      {
        title: "Built to grow with your kit",
        body: "The RSA port takes accessories like the Ronin image transmitter, a second grip or the BG70 battery grip. There are also USB-C ports for camera control, video transmission and the focus motor.",
        image: "/products/dji-rs-4/h2.jpg",
      },
      {
        title: "Shoot all day",
        body: "The BG21 grip battery runs for about 12 hours and charges in about 2.5 hours at 18 W. Swap in the optional BG70 grip for up to 29.5 hours.",
        image: "/products/dji-rs-4/h3.jpg",
      },
      {
        title: "Quick to balance, quick to pack",
        body: "Teflon-coated arms slide smoothly while you balance. The axes lock automatically when you switch off, and vertical shooting needs no extra bracket.",
        image: "/products/dji-rs-4/h4.jpg",
      },
    ],
    idealFor: [
      { title: "Wedding videographers", body: "Full-frame camera and standard zoom, all day." },
      { title: "Music videos", body: "Smooth moves with zoom on the joystick." },
      { title: "Corporate shoots", body: "Interviews, walk-throughs and B-roll." },
      { title: "Growing crews", body: "Add focus motors and transmission later." },
    ],
    notFor:
      "If you shoot with a small camera or a phone, the DJI RS 4 Mini (from ₦500,000) is lighter and cheaper. If your rig is heavier than 3 kg, or you need LiDAR autofocus for manual lenses, the DJI RS 4 Pro (from ₦1,680,000) is the better fit.",
    specs: [
      { label: "Payload", value: "Up to 3 kg (tested)" },
      { label: "Weight", value: "Gimbal about 1066 g; grip 203 g; tripod 183 g; plates 98 g" },
      { label: "Battery", value: "BG21 grip, 3000 mAh, 21 Wh" },
      { label: "Battery life", value: "About 12 hours; about 29.5 hours with the BG70 grip" },
      { label: "Charging", value: "About 2.5 hours at 18 W" },
      { label: "Range", value: "Pan 360° continuous; roll −95° to +240°; tilt −112° to +214°" },
      { label: "Ports", value: "RSA/NATO, cold shoe, video transmission USB-C, RSS USB-C, focus motor USB-C" },
      { label: "Size", value: "Folded 244 × 116 × 251 mm; unfolded 219 × 191 × 369 mm" },
      { label: "Operating temperature", value: "−20°C to 45°C" },
    ],
    specsNote: "Figures are DJI's. Payload depends on how well the camera is balanced. We confirm the box contents before you pay.",
    faqs: [
      {
        q: "Will my camera and lens fit?",
        a: "Most full-frame mirrorless cameras with a 24–70 mm f/2.8 lens fit within the 3 kg payload. Send us your camera and lens on WhatsApp and we'll confirm.",
      },
      {
        q: "What does the Combo add?",
        a: "The Focus Pro Motor for focus and zoom control, a briefcase handle for low-angle shots, and a carrying case.",
      },
      {
        q: "Can it control my camera?",
        a: "Yes. Connect the camera with the RSS control cable to start and stop recording and, on supported cameras, control zoom from the gimbal.",
      },
      {
        q: "How long does the battery last?",
        a: "About 12 hours on the BG21 grip that comes in the box. The optional BG70 grip extends that to about 29.5 hours.",
      },
      {
        q: "Should I get the RS 4 or the RS 4 Pro?",
        a: "The RS 4 covers most mirrorless rigs. Choose the Pro if your setup weighs more than 3 kg, you use cinema lenses, or you want LiDAR autofocus and dual focus motors.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "RS 4",
        price: 880_000,
        includes: [
          "DJI RS 4 gimbal",
          "BG21 battery grip",
          "Extended grip and tripod",
          "Quick-release plate (Arca-Swiss/Manfrotto)",
          "Camera control and charging cables",
          "We confirm the full box contents on WhatsApp",
        ],
      },
      {
        id: "combo",
        name: "RS 4 Combo",
        price: 1_200_000,
        includes: [
          "Everything in the standard kit",
          "Focus Pro Motor",
          "Briefcase handle",
          "Carrying case",
          "We confirm the full box contents on WhatsApp",
        ],
      },
    ],
  },
  {
    slug: "dji-rs-5",
    brand: "DJI",
    name: "DJI RS 5",
    category: "Gimbals",
    tagline: "Smarter tracking, faster charging.",
    headline:
      "The DJI RS 5 is a 3 kg payload gimbal for mirrorless cameras, with stronger motors, a new tracking module that follows subjects up to 10 m away, a 1-hour full charge and about 14 hours of battery life.",
    summary:
      "The RS 5 is the newest gimbal in DJI's 3 kg class. It carries a full-frame mirrorless camera with a 24–70 mm f/2.8 lens, and its motors have up to 50% more peak torque than before, so it stays steady when you run or turn quickly. Tap a subject on the touchscreen and the Enhanced Intelligent Tracking Module follows it up to 10 m away, and picks it up again if it leaves the frame. The BG33 grip runs for about 14 hours and charges fully in about an hour with a 65 W charger. Automatic axis locks, native vertical shooting and fine-tuning knobs make setup quick. The Combo adds the tracking module and an electronic briefcase handle with its own joystick and buttons.",
    image: "/products/dji-rs-5/main.jpg",
    hero: "/products/dji-rs-5/hero.jpg",
    gallery: [
      { src: "/products/dji-rs-5/main.jpg", alt: "DJI RS 5 with a mirrorless camera on its tripod" },
      { src: "/products/dji-rs-5/g1.jpg", alt: "Using the DJI RS 5 touchscreen while filming" },
      { src: "/products/dji-rs-5/g2.jpg", alt: "DJI RS 5 grip controls" },
      { src: "/products/dji-rs-5/g3.jpg", alt: "Balancing a camera on the DJI RS 5" },
      { src: "/products/dji-rs-5/h1.jpg", alt: "ActiveTrack on the DJI RS 5 screen" },
      { src: "/products/dji-rs-5/h2.jpg", alt: "DJI RS 5 motor" },
    ],
    stats: [
      { value: "3 kg", label: "Max payload" },
      { value: "+50%", label: "Peak motor torque" },
      { value: "14 hours", label: "Battery life" },
      { value: "1 hour", label: "Full charge (65 W)" },
    ],
    highlights: [
      {
        title: "Tap to track your subject",
        body: "Select a person or object on the touchscreen and the Enhanced Intelligent Tracking Module keeps it in frame up to 10 m away. If the subject leaves the shot, it finds it again. You can also start and stop tracking with hand gestures. The module comes in the Combo.",
        image: "/products/dji-rs-5/h1.jpg",
      },
      {
        title: "Stronger motors, steadier shots",
        body: "Peak torque is up to 50% higher, and DJI's fifth-generation stabilisation keeps heavy lenses steady during running shots and fast pans. Rotation speed reaches 360° per second.",
        image: "/products/dji-rs-5/h2.jpg",
      },
      {
        title: "14 hours, charged in an hour",
        body: "The BG33 grip runs for about 14 hours and charges fully in about an hour with a 65 W PD charger. Add the optional BG70 grip for about 30 hours.",
        image: "/products/dji-rs-5/h3.jpg",
      },
      {
        title: "Low angles with the briefcase handle",
        body: "The electronic briefcase handle in the Combo has its own joystick and buttons, so you can steer the gimbal and record during low-angle shots without reaching for the main grip.",
        image: "/products/dji-rs-5/h4.jpg",
      },
    ],
    idealFor: [
      { title: "Solo shooters", body: "The tracking module keeps you or your subject framed." },
      { title: "Wedding videographers", body: "Full-frame camera and 24–70 mm lens, all day." },
      { title: "Sports and action", body: "Stronger motors for running shots." },
      { title: "Social content", body: "Vertical shooting without extra brackets." },
    ],
    notFor:
      "If you shoot with a small camera or a phone, the DJI RS 4 Mini (from ₦500,000) is lighter and cheaper. If your rig is heavier than 3 kg, or you use cinema lenses with focus motors, the DJI RS 4 Pro (from ₦1,680,000) is the better fit.",
    specs: [
      { label: "Payload", value: "Up to 3 kg (tested)" },
      { label: "Weight", value: "Gimbal about 1193 g with plates; grip 274 g; tripod 149 g" },
      { label: "Battery", value: "BG33 grip, 2150 mAh, 33.29 Wh" },
      { label: "Battery life", value: "About 14 hours; about 30 hours with the BG70 grip" },
      { label: "Charging", value: "About 1 hour with a 65 W PD charger" },
      { label: "Range", value: "Pan 360° continuous; roll −95° to +240°; tilt −112° to +214°" },
      { label: "Ports", value: "RSA/NATO, 1/4\"-20 hole, cold shoe, camera control USB-C, multifunction USB-C" },
      { label: "Tracking module", value: "19 g, tracks 0.5–10 m, needs more than 20 lux (Combo)" },
      { label: "Size", value: "Folded 247 × 116 × 259 mm; unfolded 223 × 192 × 419 mm" },
      { label: "Operating temperature", value: "−20°C to 45°C" },
    ],
    specsNote: "Figures are DJI's. Payload depends on how well the camera is balanced. We confirm the box contents before you pay.",
    faqs: [
      {
        q: "Will my camera and lens fit?",
        a: "DJI lists setups like the Sony FX3, A7 IV or A1, Canon R5 II, Nikon Z6III, Panasonic S5II and Fujifilm X-T5 with standard zooms. Send us your camera and lens on WhatsApp and we'll confirm.",
      },
      {
        q: "What does the Combo add?",
        a: "The Enhanced Intelligent Tracking Module for subject tracking and gesture control, and the electronic briefcase handle for low-angle shots.",
      },
      {
        q: "Can it control my camera?",
        a: "Yes. Connect with the camera control cable, or use Bluetooth shutter control on supported Sony, Canon, Nikon, Panasonic and Fujifilm cameras, to start and stop recording from the grip.",
      },
      {
        q: "How long does the battery last?",
        a: "About 14 hours on the BG33 grip that comes in the box, and about an hour to charge fully with a 65 W charger. The optional BG70 grip gives about 30 hours.",
      },
      {
        q: "Should I get the RS 5 or the RS 4?",
        a: "Both carry 3 kg. The RS 5 adds stronger motors, faster charging, longer battery life and the new tracking module. Choose the RS 4 if you'd rather save and don't need tracking.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "RS 5",
        price: 850_000,
        includes: [
          "DJI RS 5 gimbal",
          "BG33 battery grip",
          "Extended grip and tripod",
          "Quick-release plates (Arca-Swiss/Manfrotto)",
          "Camera control and charging cables",
          "We confirm the full box contents on WhatsApp",
        ],
      },
      {
        id: "combo",
        name: "RS 5 Combo",
        price: 1_000_000,
        badge: "Subject tracking",
        includes: [
          "Everything in the standard kit",
          "Enhanced Intelligent Tracking Module",
          "Electronic briefcase handle",
          "We confirm the full box contents on WhatsApp",
        ],
      },
    ],
  },
  {
    slug: "dji-rs-4-pro",
    brand: "DJI",
    name: "DJI RS 4 Pro",
    category: "Gimbals",
    tagline: "Cinema rigs, steady.",
    headline:
      "The DJI RS 4 Pro is a 4.5 kg payload gimbal for cinema cameras and heavy lenses, with stronger motors, dual focus motor support, LiDAR autofocus and about 13 hours of battery life.",
    summary:
      "The RS 4 Pro is built for heavy rigs. It carries up to 4.5 kg, enough for cinema cameras like the Sony FX6 or a full-frame body with a large zoom, and its motors have 20% more torque than the last model. It can drive two focus or zoom motors at once. With the LiDAR range finder it can autofocus manual cinema lenses, using 76,800 ranging points out to 20 m. The BG30 grip runs for about 13 hours. The Combo adds the Ronin Image Transmitter, so a director or focus puller can watch and control the shot from up to 200 m away, plus the Focus Pro Motor.",
    image: "/products/dji-rs-4-pro/main.jpg",
    hero: "/products/dji-rs-4-pro/hero.jpg",
    gallery: [
      { src: "/products/dji-rs-4-pro/main.jpg", alt: "DJI RS 4 Pro with a camera on its tripod" },
      { src: "/products/dji-rs-4-pro/g1.jpg", alt: "DJI RS 4 Pro with a cinema camera" },
      { src: "/products/dji-rs-4-pro/g2.jpg", alt: "DJI RS 4 Pro with a camera and lens" },
      { src: "/products/dji-rs-4-pro/g3.jpg", alt: "DJI RS 4 Pro, carrying case and accessories" },
      { src: "/products/dji-rs-4-pro/h1.jpg", alt: "Focus motors on the DJI RS 4 Pro" },
      { src: "/products/dji-rs-4-pro/h3.jpg", alt: "Watching a DJI RS 4 Pro shot on a remote monitor" },
    ],
    stats: [
      { value: "4.5 kg", label: "Max payload" },
      { value: "+20%", label: "Motor torque" },
      { value: "13 hours", label: "Battery life" },
      { value: "20 m", label: "LiDAR focus range" },
    ],
    highlights: [
      {
        title: "Two motors for focus and zoom",
        body: "Run two focus or zoom motors at the same time, so you can pull focus and zoom on one shot. The Focus Pro Motor comes in the Combo.",
        image: "/products/dji-rs-4-pro/h1.jpg",
      },
      {
        title: "Autofocus for manual lenses",
        body: "Add the LiDAR range finder and the gimbal focuses manual cinema lenses for you. It measures 76,800 points out to 20 m and keeps the subject sharp in low light.",
        image: "/products/dji-rs-4-pro/h2.jpg",
      },
      {
        title: "Watch and control from a distance",
        body: "With the Ronin Image Transmitter in the Combo, a director or focus puller can watch a live feed and control the gimbal from up to 200 m away, with about 60 ms latency.",
        image: "/products/dji-rs-4-pro/h3.jpg",
      },
      {
        title: "Made for heavy rigs",
        body: "Carbon-fibre arms and 20% more motor torque keep a 4.5 kg rig steady. The BG30 grip runs for about 13 hours, and the BG70 option reaches up to 29 hours.",
        image: "/products/dji-rs-4-pro/h4.jpg",
      },
    ],
    idealFor: [
      { title: "Cinema cameras", body: "Sony FX6, Canon C70, RED Komodo and similar." },
      { title: "Film and TV crews", body: "Remote monitoring and focus pulling." },
      { title: "Car and action shots", body: "Strong motors for fast moves." },
      { title: "Manual lenses", body: "LiDAR autofocus for cine primes." },
    ],
    notFor:
      "If your rig weighs under 3 kg, the DJI RS 4 (from ₦880,000) does the job for less and is lighter to carry all day. For phones and small mirrorless cameras, look at the DJI RS 4 Mini (from ₦500,000).",
    specs: [
      { label: "Payload", value: "Up to 4.5 kg (tested)" },
      { label: "Weight", value: "Gimbal about 1242 g; grip 265 g; metal tripod 226 g; plates 110 g" },
      { label: "Battery", value: "BG30 grip, 1950 mAh LiPo 4S, 30 Wh" },
      { label: "Battery life", value: "About 13 hours; up to 29 hours with the BG70 grip" },
      { label: "Charging", value: "About 1.5 hours at 24 W" },
      { label: "Focus", value: "Dual focus/zoom motor support; LiDAR focusing with 76,800 points, up to 20 m" },
      { label: "Transmission (Combo)", value: "Ronin Image Transmitter, up to 200 m (FCC), about 60 ms latency" },
      { label: "Size", value: "Folded 290 × 167 × 267 mm; unfolded 268 × 202 × 415 mm" },
    ],
    specsNote: "Figures are DJI's. The LiDAR range finder is sold separately. We confirm the box contents before you pay.",
    faqs: [
      {
        q: "Will my cinema camera fit?",
        a: "Most compact cinema cameras and full-frame bodies with heavy zooms fit within 4.5 kg. Send us your camera, lens and accessories on WhatsApp and we'll confirm.",
      },
      {
        q: "What does the Combo add?",
        a: "The Ronin Image Transmitter for remote monitoring and control, and the Focus Pro Motor.",
      },
      {
        q: "Does it come with the LiDAR range finder?",
        a: "No. LiDAR focusing needs the DJI LiDAR range finder, which is sold separately. Ask us on WhatsApp and we'll quote it with your gimbal.",
      },
      {
        q: "How long does the battery last?",
        a: "About 13 hours on the BG30 grip, and about 1.5 hours to charge at 24 W. The optional BG70 grip extends it to up to 29 hours.",
      },
      {
        q: "Should I get the RS 4 Pro or the RS 4?",
        a: "Choose the Pro for rigs over 3 kg, cinema lenses, dual motors or LiDAR autofocus. For most mirrorless setups, the RS 4 is enough.",
      },
      {
        q: "How do I order?",
        a: "Tap the WhatsApp button. Your order details go straight to us, and we'll confirm availability and delivery.",
      },
    ],
    variants: [
      {
        id: "standard",
        name: "RS 4 Pro",
        price: 1_700_000,
        includes: [
          "DJI RS 4 Pro gimbal",
          "BG30 battery grip",
          "Extended grip and metal tripod",
          "Quick-release plates",
          "Briefcase handle",
          "Carrying case",
          "We confirm the full box contents on WhatsApp",
        ],
      },
      {
        id: "combo",
        name: "RS 4 Pro Combo",
        price: 1_680_000,
        includes: [
          "Everything in the standard kit",
          "Ronin Image Transmitter",
          "Focus Pro Motor",
          "We confirm the full box contents on WhatsApp",
        ],
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
