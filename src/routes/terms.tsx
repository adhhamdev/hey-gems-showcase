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
    body: `By placing an order you are offering to purchase a product subject to these terms and conditions. All orders are subject to availability and confirmation of the order price. We must receive the payment in whole. Once payment has been received by us we will confirm that your order has been received by sending an email to you at the email address you provide in your order form. Our acceptance of your order takes place on the dispatch of our products to you unless we notify you that we do not accept your order, or you have cancelled your order.`,
  },
  {
    title: "2. Ordering Online",
    body: `Ordering online with us is safe and secure and we do not store any financial information. We use payment processing partners who use SSL on our payment, login and registration pages to keep your data secure.`,
  },
  {
    title: "3. Online Order Cancellations",
    body: `If you wish to cancel an order please email us immediately at Mishkathmax@gmail.com or call us on +94 76 710 7505. Please note that we cannot accept cancellations for bespoke orders or personal orders that include any personalisation.`,
  },
  {
    title: "4. Prices",
    body: `The prices payable for goods will be emailed in advance to arrange the payment. These prices may change according to fluctuations in the market and the price may need to be updated without any prior notice.`,
  },
  {
    title: "5. Discount",
    body: `Discounts can only be used once on full-price items and cannot be used in conjunction with any other offer or discount. We retain the right to withdraw or cancel any discount or promotion at any time.`,
  },
  {
    title: "6. Limitations of Liability",
    body: `So far as permitted by law, we exclude any liability for loss or damage of any kind resulting from the use of the site.`,
  },
  {
    title: "7. Intellectual Property",
    body: `The entire content of this website, including all gemstone designs, photographs, logo, copyright, trademarks and other intellectual property rights it contains, including the use of the name HEY GEMS or HEY GEMS INTERNATIONAL is the sole property of Hey Gems International. You may store, print and display the content supplied solely for your own personal use and you may draw the attention of others within your organisation to material posted on our site. You are not permitted to publish, manipulate, distribute or otherwise reproduce, in any format, any of the content or copies of the content supplied to you or which appears on this website nor may you use any such content in connection with any business or commercial enterprise. By using this service, you agree that you will not attempt to undermine the integrity of this website.`,
  },
  {
    title: "8. Changes to Terms and Conditions",
    body: `We reserve the right, at our sole discretion, to update, change or replace any part of these Terms & Conditions by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes to these Terms of Service constitutes acceptance of those changes.`,
  },
  {
    title: "9. Agreement",
    body: `These terms and conditions set out the entire agreement between you and Hey Gems International in respect of the sale, purchase and use of the goods. They supersede any previous agreement or understanding in relation to the subject matter hereof. No variation of these terms and conditions are binding on us unless agreed by us in writing.`,
  },
  {
    title: "10. Disputes / Feedback",
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
