import { site } from "./site";

export type Policy = {
  slug: string;
  title: string;
  summary: string;
  sections: { heading: string; body: string[] }[];
};

// TODO(owner): review every timeline, fee and condition below before going live.
export const policiesUpdated = "26 November 2026";

export const policies: Policy[] = [
  {
    slug: "shipping",
    title: "Shipping Policy",
    summary: "How we get your order to you, anywhere in Nigeria.",
    sections: [
      {
        heading: "Where we deliver",
        body: [
          "We deliver to every state in Nigeria. You can also pick up your order from our store at " + site.address + ".",
        ],
      },
      {
        heading: "Our delivery partners",
        body: [
          `${site.legalName} officially uses FEZ Delivery and GIG Logistics for deliveries in and outside of Lagos, within Nigeria.`,
          "We book the delivery once your payment is confirmed and send you the tracking details on WhatsApp.",
        ],
      },
      {
        heading: "Using your own rider or courier",
        body: [
          "You are welcome to use your own dispatch rider and/or delivery company. Send us the rider's name and phone number on WhatsApp before pickup so we can release the order safely.",
          "Once we hand your order to your own rider or courier, the order is in their care. We are not responsible for loss or damage after that handover.",
        ],
      },
      {
        heading: "Delivery times",
        body: [
          "Lagos: usually 1 to 2 working days after payment is confirmed.",
          "Outside Lagos: usually 2 to 5 working days, depending on your city.",
          "These are estimates. Public holidays, weather and courier delays can affect them, and we will keep you updated on WhatsApp.",
        ],
      },
      {
        heading: "Delivery fees",
        body: [
          "Delivery fees depend on your location and the size of the order. We confirm the exact fee on WhatsApp before you pay.",
        ],
      },
      {
        heading: "When your order arrives",
        body: [
          "Please check the package in front of the rider. If the box is damaged or anything is missing, take photos and message us on WhatsApp within 24 hours.",
        ],
      },
    ],
  },
  {
    slug: "refunds",
    title: "Refund & Returns Policy",
    summary: "What you can return, how refunds work, and how long they take.",
    sections: [
      {
        heading: "Items you can return",
        body: [
          "You can return an item within 7 days of delivery if it is faulty, damaged on arrival, or not what you ordered.",
          "Items must come back in their original packaging with all accessories, manuals and free gifts.",
        ],
      },
      {
        heading: "Items we cannot accept",
        body: [
          "Items that have been activated, registered or linked to an account (for example, drones bound to a DJI account), unless they are faulty.",
          "Items with physical damage, water damage, or signs of misuse.",
          "Memory cards, batteries and other consumables once the seal is broken, unless faulty.",
          "Change-of-mind returns on opened items.",
        ],
      },
      {
        heading: "How to start a return",
        body: [
          "Message us on WhatsApp with your order details, photos or a short video of the problem, and the reason for the return.",
          "We will reply with return instructions. Please do not send items back without speaking to us first.",
        ],
      },
      {
        heading: "Inspection",
        body: [
          "We inspect every returned item within 3 working days of receiving it and let you know the outcome on WhatsApp.",
        ],
      },
      {
        heading: "Refunds, repairs and replacements",
        body: [
          "If the return is approved, we will repair or replace the item or give you a refund, depending on stock and what you prefer.",
          "Refunds go back to the account you paid from, within 7 working days of approval.",
          "Delivery fees are not refundable unless the item was faulty or we sent the wrong item.",
        ],
      },
      {
        heading: "Manufacturer warranty",
        body: [
          "Many products also carry a manufacturer warranty. After the 7-day return window, we will help you make a warranty claim with the brand.",
        ],
      },
    ],
  },
  {
    slug: "payment",
    title: "Payment Policy",
    summary: "How to pay safely for your order.",
    sections: [
      {
        heading: "How to pay",
        body: [
          `Bank transfer to our Kuda business account in the name of ${site.legalName}.`,
          `A Flutterwave payment link that shows the business name ${site.legalName}.`,
          "Cryptocurrency, sent to our wallet address, if you prefer to pay that way.",
          "We send the account details, payment link or wallet address on WhatsApp once your order is confirmed.",
        ],
      },
      {
        heading: "Paying in our store",
        body: [
          "If you are paying in person at our store in Computer Village, Ikeja, you can also pay by card (POS) or transfer at the counter.",
        ],
      },
      {
        heading: "These are the only ways we accept payment",
        body: [
          `Unless you are in our physical store, we will only ever send you our Kuda account, a Flutterwave link in the name of ${site.legalName}, or our crypto wallet address. We will never ask you to pay into a personal account or any other bank.`,
          "Before you pay through a Flutterwave link, check that the business name shown is " + site.legalName + ".",
          "Crypto payments cannot be reversed. Copy the wallet address exactly as we send it, and confirm the coin and network with us before you send.",
          `If anyone asks you to pay any other way, do not pay. Confirm with us first on WhatsApp at ${site.whatsappDisplay}.`,
        ],
      },
      {
        heading: "Confirming your payment",
        body: [
          "Send your payment receipt on WhatsApp. We confirm payment, then prepare and ship your order.",
          "We process orders only after payment has been received.",
        ],
      },
      {
        heading: "Prices",
        body: [
          "All prices are in Nigerian Naira (₦). Prices can change with exchange rates and supply, so we confirm the final price on WhatsApp before you pay.",
          "Once you have paid for a confirmed order, the price is locked in.",
        ],
      },
      {
        heading: "Receipts",
        body: ["We issue a receipt for every completed order. Ask us on WhatsApp if you need an invoice for your company."],
      },
    ],
  },
  {
    slug: "terms",
    title: "Terms & Conditions",
    summary: "The terms that apply when you shop with CERTO.",
    sections: [
      {
        heading: "About us",
        body: [
          `This website is run by ${site.legalName}, a business registered in Nigeria (business number ${site.businessNumber}), located at ${site.address}.`,
          "By using this website or placing an order, you agree to these terms.",
        ],
      },
      {
        heading: "Orders",
        body: [
          "Orders are placed on WhatsApp. An order is confirmed only when we have confirmed stock and price and received your payment.",
          "We may decline or cancel an order, for example if an item is out of stock or a price was shown in error. If you have already paid, we will refund you in full.",
        ],
      },
      {
        heading: "Product information",
        body: [
          "We work hard to keep product details, photos and prices accurate. Small differences in colour or packaging can happen. Images are for illustration.",
          "Brand names and trademarks belong to their owners. We are an independent retailer.",
        ],
      },
      {
        heading: "Delivery, returns and payment",
        body: [
          "Delivery, returns and payment are covered by our Shipping Policy, Refund & Returns Policy and Payment Policy, which form part of these terms.",
        ],
      },
      {
        heading: "Use of products",
        body: [
          "You are responsible for using products safely and legally. Drone pilots must follow the rules of the Nigerian Civil Aviation Authority (NCAA) and any local restrictions.",
        ],
      },
      {
        heading: "Liability",
        body: [
          "To the extent the law allows, our liability for any order is limited to the amount you paid for it. Nothing in these terms limits your rights under Nigerian consumer protection law.",
        ],
      },
      {
        heading: "Changes and governing law",
        body: [
          "We may update these terms from time to time. The version on this page applies to orders placed after it is published.",
          "These terms are governed by the laws of the Federal Republic of Nigeria.",
        ],
      },
    ],
  },
];

export function getPolicy(slug: string) {
  return policies.find((p) => p.slug === slug);
}
