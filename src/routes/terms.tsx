import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/Layout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Hey Gems International" },
      { name: "description", content: "Terms and conditions of sale for Hey Gems International." },
      { property: "og:title", content: "Terms & Conditions — Hey Gems International" },
      { property: "og:description", content: "Terms and conditions of sale for Hey Gems International." },
    ],
  }),
  component: Terms,
});

const sections = [
  {
    title: "1. Terms of Sale",
    body: `By placing an order you are offering to purchase a product subject to these terms and conditions. All orders are subject to availability and confirmation of the order price. We must receive payment of the whole of the price for the goods that you order before your order can be accepted and the contract formed. Once payment has been received we will confirm that your order has been accepted by sending an email to you at the email address you provide in your order form. This email will be our acceptance of your order and will be the point at which a contract is formed between us.`,
  },
  {
    title: "2. Ordering Online",
    body: `Ordering online with us is safe and secure and we do not store any financial information. We use payment processing partners who use SSL on our payment, login and registration pages to protect your confidential information.`,
  },
  {
    title: "3. Online Order Cancellations",
    body: `If you wish to cancel an order please email us immediately at Mishkathmax@gmail.com or call us on +94 76 710 7505. Please note that we cannot accept cancellations for bespoke orders or made to order items.`,
  },
  {
    title: "4. Prices",
    body: `The prices payable for goods will be emailed in advance to arrange the payment. These prices may change according to fluctuations in the market and the price may need to be updated with your prior approval before your order is accepted.`,
  },
  {
    title: "5. Discount",
    body: `Discounts can only be used once on full-price items and cannot be used in conjunction with any other offer or discount. We retain the right to withdraw or cancel any discount or promotion at any time.`,
  },
  {
    title: "6. Return / Refund Policy — Website and Social Media Purchases",
    body: `This Return and Refund Policy applies to all purchases made through our official website, Instagram, WhatsApp, Facebook, or any other social media platforms operated by HEY GEMS.\n\nReturn Request Procedure\n1. The customer must notify HEY GEMS of the intention to return an item by sending an email or WhatsApp message stating the reason for the return.\n2. The request must include clear photos and videos of the gemstone or item purchased, showing its current condition and the reason for the return.\n3. The company will review the request and confirm whether the return is accepted.\n\nReturn Shipping Responsibility\n- If the return is approved due to an error on the part of HEY GEMS (for example: wrong item, incorrect specification, or damage before delivery), the company will bear the return shipping charges.\n- If the return is requested for any other reason, the customer will be responsible for all return shipping and postage expenses.\n\nReturn Timeframe\n- Any complaint or return request must be raised within 7–10 working days from the date of delivery.\n- Returns sent after this period may not be accepted unless previously agreed in writing.\n\nRefund Processing\n- In certain cases, refunds will be processed only after the returned item has been received and inspected by HEY GEMS.\n- Once the returned item is received and verified, payment will be issued within 3 working days.\n\nAlternative Refund Timing\n- In some situations, if the customer provides valid tracking details and supporting documents confirming that the item has been shipped back to us, the company may process the refund on the confirmed shipping date, subject to management approval.\n\nNon-Returnable Items\nThe following items are generally non-returnable unless otherwise agreed in writing:\n- Customized or bespoke jewelry\n- Personalized orders\n- Items damaged after delivery\n- Items returned without prior approval\n- Items sold on a final sale or special discount basis\n\nFinal Decision\nAll return and refund decisions remain at the discretion of HEY GEMS, based on inspection of the returned item and compliance with the above conditions.`,
  },
  {
    title: "7. Limitations of Liability",
    body: `So far as permitted by law, we exclude any liability for loss or damage of any kind resulting from the use of the site.`,
  },
  {
    title: "8. Intellectual Property",
    body: `The entire content of this website, including all gemstone designs, photographs, logo, copyright, trademarks and other intellectual property rights it contains, including the use of the website and all material displayed on it, are the property of Hey Gems International. You may not use any content from our website without our express written consent.`,
  },
  {
    title: "9. Changes to Terms and Conditions",
    body: `We reserve the right, at our sole discretion, to update, change or replace any part of these Terms & Conditions by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website following the posting of any changes constitutes acceptance of those changes.`,
  },
  {
    title: "10. Agreement",
    body: `These terms and conditions set out the entire agreement between you and Hey Gems International in respect of the sale, purchase and use of the goods. They supersede any previous agreement, understanding or arrangement between you and Hey Gems International, whether oral or in writing.`,
  },
  {
    title: "11. Disputes / Feedback",
    body: `If you have any questions, comments or wish to get in touch with us, please email us at Mishkathmax@gmail.com or call us on +94 76 710 7505.`,
  },
];

function Terms() {
  return (
    <Layout>
      <PageHero title="Terms & Conditions" subtitle="Please read these terms carefully before placing an order with Hey Gems International." />

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-10">
          {sections.map((s) => (
            <article key={s.title}>
              <h2 className="font-serif text-2xl text-midnight">{s.title}</h2>
              <div className="h-px w-12 bg-gold my-4" />
              <p className="text-muted-foreground leading-relaxed">{s.body}</p>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
