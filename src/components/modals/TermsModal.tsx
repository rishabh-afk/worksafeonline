"use client";
import Modal from "../common/Modal";
import { RxCross1 } from "react-icons/rx";
import { bigShoulders } from "@/app/layout";

const TermsModal = ({
  onclose,
  isVisible,
}: {
  onclose: any;
  isVisible: boolean;
}) => {
  return (
    <Modal
      onClose={onclose}
      removePadding={true}
      isVisible={isVisible}
      width="w-[90%] lg:w-3/4"
      showCloseButton={false}
    >
      <div className="relative p-5 text-sm">
        <RxCross1
          size={24}
          onClick={onclose}
          className="cursor-pointer absolute top-7 right-7 text-black"
        />
        <div className="bg-white font-sans text-black">
          <h1
            className={`font-castoro text-4xl font-extrabold ${bigShoulders.className}`}
          >
            Terms and Conditions
          </h1>

          <section className="mb-6 mt-4">
            <h2
              className={`text-2xl font-bold text-gray-800 mb-1 ${bigShoulders.className}`}
            >
              1. THESE TERMS
            </h2>
            <div>
              <p>
                1.1 <br /> These are the terms and conditions on which we supply
                products to you, whether these are goods or services.
              </p>
              <p>
                1.2 <br />
                Please read these terms carefully before you submit your order
                to us. These terms tell you who we are, how we will provide
                products to you, how you or we may change or end the contract,
                what to do if there is a problem and other important
                information. If you think that there is a mistake in these
                terms, please contact us to discuss this, by any of the methods
                listed in clause 2.1.
              </p>
              <p>
                1.3 <br />
                In some areas you will have different rights under these terms
                depending on whether you are a business or consumer customer.
                You are a consumer customer if:
              </p>
              <ol>
                <li>(a) you are an individual; and</li>
                <li>
                  (b) you are buying products from us wholly or mainly for your
                  personal use (not for use in connection with your trade,
                  business, craft, or profession).
                </li>
              </ol>
              <p>
                1.4 <br /> If you are a business customer, these terms and
                conditions apply to the contract between you and us, to the
                exclusion of any other terms that you seek to impose or
                incorporate, or which are implied by trade, custom, practice or
                course of dealing. These terms also constitute the entire
                agreement between us in relation to your purchase. You
                acknowledge that you have not relied on any statement, promise,
                representation, assurance or warranty made or given by or on
                behalf of us, which is not set out in these terms and that you
                shall have no claim for innocent or negligent misrepresentation
                based on any statement in this agreement.{" "}
                <strong>
                  Your attention is also particularly drawn to the provisions of
                  clause 20 of these terms.
                </strong>
              </p>
              <p className="font-bold">
                Your attention is also particularly drawn to the provisions of
                clause 20 of these terms.
              </p>
            </div>
          </section>

          <section className="mb-4">
            <h2
              className={`text-2xl font-bold text-gray-800 mb-1 ${bigShoulders.className}`}
            >
              2. INFORMATION ABOUT US AND HOW TO CONTACT US
            </h2>
            <div>
              <p>
                2.1 <br /> We are Worksafe Direct (UK) Limited (company number:
                07995116) trading as Worksafe, whose registered office is at St
                James Road, St James Industrial Estate, Corby, Northamptonshire,
                NN18 8AL. You can contact us by telephone on 01536 203 888, in
                writing at Worksafe Direct (UK) Limited, St James Road, St James
                Industrial Estate, Corby, Northamptonshire, NN18 8AL, or by
                email to{" "}
                <a
                  href="mailto:sales@worksafeonline.co.uk"
                  className="text-blue-500 underline"
                >
                  sales@worksafeonline.co.uk
                </a>
                . Our VAT number is 131 3501 67.
              </p>
              <p>
                2.2 <br />
                If we have to contact you, we will do so by telephone or by
                writing to you at the email address or postal address you
                provided to us in your order.
              </p>
              <p>
                2.3 <br />{" "}
                {` When we use the words "writing" or "written" in these terms,
                this includes emails.`}
              </p>
            </div>
          </section>

          <section className="mb-4">
            <h2
              className={`text-2xl font-bold text-gray-800 mb-1 ${bigShoulders.className}`}
            >
              3. OUR CONTRACT WITH YOU
            </h2>
            <div>
              <p>
                3.1 <br /> Our acceptance of your order will take place when we
                email you to accept it, at which point a contract will come into
                existence between you and us. If we are unable to accept your
                order, we will inform you of this and will not charge you for
                the product.
              </p>
              <p>
                3.2 <br /> We will assign an order number to your order and tell
                you what it is when we accept your order. It will help us if you
                quote your order number whenever you contact us about your
                order.
              </p>
              <p>
                3.3 <br /> On most occasions we do not accept orders outside the
                UK. However, in limited circumstances, we are able to deliver
                products outside the UK. If you require any products to be
                delivered outside of the UK, then please contact us prior to
                placing your order and we will advise you as to whether we will
                be able to deliver the products to you. If you require the
                products to be delivered to an address in Northern Ireland, then
                please note that the delivery provisions stated in these terms
                may vary. Please contact us prior to placing your order and we
                can advise you further.
              </p>
            </div>
          </section>

          <section className="mb-4">
            <h2
              className={`text-2xl font-bold text-gray-800 mb-1 ${bigShoulders.className}`}
            >
              4. OUR PRODUCTS
            </h2>
            <div>
              <p>
                4.1 <br />{" "}
                {`The images of the products on our website are for illustrative
                purposes only. Although we have made every effort to display the
                colours accurately, we cannot guarantee that a device's display of
                the colours accurately reflects the colour of the products. Your
                product may vary slightly from those images.`}
              </p>
              <p>
                4.2 <br />
                The packaging of the product may also vary from any images shown
                on our website, at our warehouse, or in our brochure.
              </p>
              <p>
                4.3 <br />
                If we are making the products to your specification, you are
                responsible for ensuring that any measurements supplied to us
                are correct and accurate.
              </p>
            </div>
          </section>

          <section className="mb-4">
            <h2
              className={`text-2xl font-bold text-gray-800 mb-1 ${bigShoulders.className}`}
            >
              5. YOUR RIGHTS TO MAKE CHANGES
            </h2>
            <p>
              If you wish to make a change to the product you have ordered,
              please contact us as soon as possible. We will let you know if the
              change is possible. If the change is possible, we will let you
              know about any changes to the price of the product, whether the
              change will cause any delays in supplying the product, or anything
              else which would be necessary as a result of your request. We will
              then ask you to confirm to us whether you wish to go ahead with
              your request to change your order.
            </p>
          </section>

          <section className="mb-4">
            <h2
              className={`text-2xl font-bold text-gray-800 mb-1 ${bigShoulders.className}`}
            >
              6. OUR RIGHTS TO MAKE CHANGES
            </h2>
            <p>
              On some occasions, we may have to change the product, for example,
              to reflect changes to relevant laws or regulatory requirements, or
              to implement minor technical adjustments and improvements. If we
              have to change your order in any way, we will notify you.
            </p>
          </section>

          <section className="mb-4">
            <h2
              className={`text-2xl font-bold text-gray-800 mb-1 ${bigShoulders.className}`}
            >
              7. PROVIDING THE PRODUCTS
            </h2>
            <div>
              <p>
                7.1 <br />
                If you have asked to collect the products from our premises, you
                can collect them from us at any time during our normal working
                hours, which are Monday to Friday 8:00 am to 5:00 pm and
                Saturday 8:00 am to 12:00 pm, and you must do so within 10 days
                of us notifying you that the products are ready for collection.
              </p>
              <div>
                7.2 <br />
                If you have requested the products to be delivered to you:
                <ol>
                  <li>
                    (a) if the products are goods, we will contact you with an
                    estimated delivery date, which is normally within 30 days
                    from the day after we accept your order. If the goods are
                    not available to be delivered to you within this period, we
                    will contact you to notify you. Depending on the nature and
                    size of the goods, we will either deliver the goods
                    ourselves or via a third-party courier;
                  </li>
                  <li>
                    (b) if the products are services, the estimated completion
                    date for the services will be notified to you during the
                    order process; and
                  </li>
                  <li>
                    (c) the costs of delivery will be as notified to you during
                    the order process.
                  </li>
                </ol>
              </div>
              <p>
                7.3 <br />
                If you are not at home when the product is delivered and the
                products cannot be posted through your letterbox, we will try to
                rearrange delivery, or if possible, you may collect them from
                our store.
              </p>
              <p>
                7.4 <br />
                If you do not collect the products from us as required in clause
                7.1 or if, after a failed delivery to you, you do not rearrange
                delivery or collection of the product in accordance with clause
                7.3, we will contact you for further instructions and may charge
                you for storage costs and any further delivery costs. If,
                despite our reasonable efforts, we are unable to contact you or
                rearrange delivery or collection, we may end the contract and
                clause 13.2 will apply.
              </p>
              <p>
                7.5 <br />
                If you have ordered services and you do not allow us access to
                your property to perform the services as arranged (and you do
                not have a good reason for this), we may charge you additional
                costs incurred by us as a result. If, despite our reasonable
                efforts, we are unable to contact you or rearrange access to
                your property, we may end the contract and clause 13.2 will
                apply.
              </p>
              <p>
                7.6 <br />
                If our supply of the products is delayed by an event outside our
                control, then we will contact you as soon as possible to let you
                know, and we will take steps to minimize the effect of the
                delay. Provided we do this, we will not be liable for delays
                caused by the event. But if there is a risk of substantial
                delay, you may contact us to end the contract and receive a
                refund for any products you have paid for but not received.
              </p>
            </div>
          </section>

          <section className="mb-4">
            <h2
              className={`text-2xl font-bold text-gray-800 mb-1 ${bigShoulders.className}`}
            >
              8. YOUR LEGAL RIGHTS IF WE DELIVER LATE IF YOU ARE A CONSUMER
              CUSTOMER
            </h2>
            <div>
              <p>
                8.1 <br />
                Delivery of the products shall be completed:
              </p>
              <ol>
                <li>
                  (a) on delivery of the products at our premises, if you have
                  arranged to collect the products from our premises;
                </li>
                <li>
                  (b) on delivery of the products by us to the applicable
                  third-party courier, if the products are being delivered by a
                  third-party courier; or
                </li>
                <li>
                  (c) on delivery of the products by us to the address specified
                  by you, if the products are being delivered by us.
                </li>
              </ol>
              <p>
                8.2
                <br /> If we miss the delivery deadline for any products then
                you may treat the contract as at an end straight away if any of
                the following apply:
              </p>
              <ol>
                <li>(a) we have refused to deliver the products;</li>
                <li>
                  (b) delivery within the delivery deadline was essential
                  (taking into account all the relevant circumstances);
                </li>
                <li>
                  (c) you told us before we accepted your order that delivery
                  within the delivery deadline was essential.
                </li>
              </ol>
              <p>
                8.3
                <br /> If you do not wish to treat the contract as at an end
                straight away, or do not have the right to do so under clause
                8.2 you can give us a new deadline for delivery, which must be
                reasonable, and you can treat the contract as at an end if we do
                not meet the new deadline.
              </p>
              <p>
                8.4
                <br /> If you do choose to treat the contract as at an end for
                late delivery under clause 8.2 or clause 8.3, you can cancel
                your order for any of the products or reject products that have
                been delivered. If you wish, you can reject or cancel the order
                for some of those products (not all of them), unless splitting
                them up would significantly reduce their value. After that we
                will refund any sums you have paid to us for the cancelled
                products and their delivery. If the products have been delivered
                to you, you will have to return them to us or allow us to
                collect them, and we will pay the costs of this.
              </p>
            </div>
          </section>

          <section className="mb-4">
            <h2
              className={`text-2xl font-bold text-gray-800 mb-1 ${bigShoulders.className}`}
            >
              9. YOUR LEGAL RIGHTS IF WE DELIVER LATE IF YOU ARE A BUSINESS
              CUSTOMER
            </h2>
            <div>
              <p>
                9.1 <br />
                Delivery of the products shall be completed:
              </p>
              <ol>
                <li>
                  (a) on delivery of the products at our premises, if you have
                  arranged to collect the products from our premises;
                </li>
                <li>
                  (b) on delivery of the products by us to the applicable
                  third-party courier, if the products are being delivered by a
                  third-party courier;
                </li>
                <li>
                  (c) on delivery of the products by us to the address specified
                  by you, if the products are being delivered by us.
                </li>
              </ol>
              <p>
                9.2
                <br /> Any dates quoted for delivery of the products are
                approximate only and the time of delivery is not of the essence.
                If we fail to deliver the products, our liability shall be
                limited to the costs and expenses incurred by you in obtaining
                replacement goods of similar description and quality in the
                cheapest market available. We shall not be liable for any delay
                in delivery that is due to a reason beyond our reasonable
                control or if you fail to provide us with adequate delivery
                instructions that are relevant to the supply of the products.
              </p>
            </div>
          </section>

          <section className="mb-4">
            <h2
              className={`text-2xl font-bold text-gray-800 ${bigShoulders.className}`}
            >
              10. OWNERSHIP AND RESPONSIBILITY OF GOODS
            </h2>
            <div>
              <p>
                10.1 <br />
                The goods will be your responsibility on completion of delivery
                of the goods and you own the goods once we have received payment
                for the goods in full (subject to clause 10.3 if you are a
                business customer and clause 10.2 and 10.3 applies).
              </p>
              <p>
                10.2
                <br /> If you are a business customer, we are able to offer some
                of our customers goods on consignment (whereby we purchase a set
                amount of goods from our suppliers, at your request, store the
                goods in our warehouse, allow you to take possession of the
                goods for your use or resale, subject to our consignment terms
                and conditions, but retain ownership of such goods until they
                are paid for by the applicable customer{" "}
                <strong>(Consignment Goods). </strong>
                In this instance, we will require you to enter into our
                consignment terms and conditions, which will apply in addition
                to these terms and conditions.
              </p>
              <p>
                10.3
                <br /> For the purpose of clause 10.2, subject to any matters
                stated in our consignment terms and conditions, which will apply
                in addition to these terms and conditions, in relation to any
                such Consignment Goods:
              </p>
              <p>
                (a) ownership of the Consignment Goods will not pass to you
                until:
              </p>
              <ol>
                <li>
                  (i) we receive payment in full (in cash or cleared funds) for
                  the Consignment Goods and any other goods that we have
                  supplied to you, in which case title to the Consignment Goods
                  shall pass at the time of payment of all such sums; or
                </li>
                <li>
                  (ii) you resell the Consignment Goods, in which case ownership
                  of the Consignment Goods shall pass to the you at the time
                  specified in clause 10.3 (b).
                </li>
              </ol>

              <p>
                (b) Subject to clause 10.3(d), you may resell or use the
                Consignment Goods in the ordinary course of your business (but
                not otherwise) before we receive payment for the Consignment
                Goods. However, if you resell the Consignment Goods before that
                time:
              </p>
              <ol>
                <li>(i) you do so as principal and not as our agent; and</li>
                <li>
                  (ii) title to the Consignment Goods shall pass from us to you
                  immediately before the time at which resale by you occurs.
                </li>
              </ol>

              <p>
                (c) Until ownership of the Consignment Goods has passed to you,
                you shall:
              </p>
              <ol>
                <li>
                  (i) store the Consignment Goods separately from all other
                  goods held by you so that they remain readily identifiable as
                  our property;
                </li>
                <li>
                  (ii) not remove, deface or obscure any identifying mark or
                  packaging on or relating to the Consignment Goods;
                </li>

                <li>
                  (iii) maintain the Consignment Goods in satisfactory condition
                  and keep them insured against all risks for their full price
                  from the date of delivery;
                </li>

                <li>
                  (iv) be responsible for and will indemnify us in respect of
                  any Consignment Goods which have been damaged by you or a
                  third party whom you have permitted to have control of the
                  Consignment Goods;
                </li>

                <li>
                  (v) notify us immediately if you become subject to any of the
                  events listed in clause 13.1(e); and
                </li>

                <li>
                  (vi) give us such information relating to the Consignment
                  Goods as we may require from time to time.
                </li>
              </ol>

              <p>
                (d) If before ownership of the Consignment Goods passes to you,
                you become subject to any of the events listed in clause 13.1(e)
                then, without limiting any other right or remedy, we may at any
                time:
              </p>
              <ol>
                <li>
                  (i) require you to deliver up all of the Consignment Goods in
                  your possession that have not been resold, or irrevocably
                  incorporated into another product; and
                </li>
                <li>
                  (ii) if you fail to do so promptly, enter into any of your
                  premises or of any third party where the Consignment Goods are
                  stored in order to recover them.
                </li>
              </ol>

              <p>
                (e) If the Consignment Goods consist of goods which are
                non-standard goods, and you do not purchase such goods from us,
                in accordance with our consignment terms and conditions, we will
                charge you a restocking fee of 25 % of the sale price of the
                applicable product.
              </p>
            </div>
          </section>
          <section className="mb-4">
            <h2
              className={`text-2xl font-bold text-gray-800 ${bigShoulders.className}`}
            >
              11. PRICE AND PAYMENT
            </h2>
            <div>
              <p>
                11.1
                <br />
                {` The price of the product will be the price indicated on the order pages when you place your order. We take all reasonable care to ensure that the price of the product advised to you is correct. However, it is always possible that, despite our best efforts, some of the products we sell may be incorrectly priced. We will normally check prices before accepting your order so that, where the product's correct price at your order date is less than our stated price at your order date, we will charge the lower amount. If the product's correct price at your order date is higher than the price stated to you, we will contact you for your instructions before we accept your order.`}
              </p>
              <p>
                11.2
                <br /> We accept the following methods of payment: sagepay,
                mastercard, visa, cash sterling, and business cheques.
              </p>
              <p>
                11.3
                <br /> Whether the price stated includes value-added tax (VAT)
                or not will be stated on each product and our acknowledgment of
                your order.
              </p>
              <p>
                11.4
                <br /> Where the price is stated to exclude VAT, all amounts
                payable by you are exclusive of amounts in respect of VAT
                chargeable from time to time. Where any taxable supply for VAT
                purposes is made by us to you, you shall, on receipt of a valid
                VAT invoice from us, pay to us, such additional amounts in
                respect of VAT as are chargeable on the supply of the products
                at the same time as payment is due for the supply of the
                products.
              </p>

              <p>
                11.5
                <br /> If the rate of VAT changes between your order date and
                the date we supply the product, we will adjust the rate of VAT
                that you pay, unless you have already paid for the product in
                full before the change in the rate of VAT takes effect.
              </p>

              <p>
                11.6
                <br /> When you must pay for the products depends on whether you
                are a consumer customer or business customer and what type of
                account you have with us.
              </p>

              <p>
                11.7
                <br /> For some of our business customers, we are able to offer
                a trade account, where we are able to offer more favourable
                payment terms. Should you wish to apply for a trade account with
                us, please contact us. We will notify you in writing to confirm
                whether we are able to offer you a trade account and any
                applicable payment terms. If you have a trade account with us,
                then payment for the products will be due within 30 days from
                the end of the month in which the products were ordered, unless
                otherwise agreed by us in writing.
              </p>

              <p>
                11.8
                <br /> If you are a business or consumer customer and you do not
                have a trade account with us, then the price for the products
                will be payable on collection or delivery of the goods (as the
                case may be). However, if you order any customised/bespoke
                products, or any non-standard items (these are goods which we
                would not normally stock but have stocked these upon your
                request) then these products must be paid for by you at the time
                you place your order.
              </p>

              <p>
                11.9
                <br /> No payment will be deemed to have been received by us
                until payment is received in full and clear funds.
              </p>

              <p>
                11.10
                <br /> If you are a business customer:
              </p>

              <ol>
                <li> (a) time for payment is of the essence; and</li>
                <li>
                  (b) you must pay all amounts due to us under these terms in
                  full without any set-off, counterclaim, deduction or
                  withholding (other than any deduction or withholding of tax as
                  required by law).
                </li>
              </ol>

              <p>
                11.11
                <br /> We can charge interest if you pay late, what we can
                charge you depends if you are a business or consumer customer:
              </p>

              <ol>
                <li>
                  (a) If you are a consumer customer and you do not make any
                  payment to us by the due date, we may charge interest to you
                  on the overdue amount at the rate of 4% a year above the base
                  lending rate of Barclays Bank from time to time. This interest
                  shall accrue on a daily basis from the due date until the date
                  of actual payment of the overdue amount, whether before or
                  after judgment. You must pay us interest together with any
                  overdue amount.
                </li>
                <li>
                  (b) If you are a business customer and you do not make any
                  payment to us by the due date we may charge interest to you on
                  the overdue amount at the rate of 8% a year above the base
                  lending rate of Barclays Bank from time to time. This interest
                  shall accrue on a daily basis from the due date until the date
                  of actual payment of the overdue amount, whether before or
                  after judgment. You must pay us interest together with any
                  overdue amount. You will indemnify us against all liabilities,
                  costs, expenses, damages and losses, including all interest,
                  penalties, and legal costs (calculated on a full indemnity
                  basis), suffered or incurred by us arising out of or in
                  connection with the enforcement of the contract.
                </li>
              </ol>

              <p>
                11.12 <br />
                If you think an invoice is wrong please contact us promptly to
                let us know. You will not have to pay any interest until the
                dispute is resolved. Once the dispute is resolved we will charge
                you interest on correctly invoiced sums from the original due
                date.
              </p>
            </div>
          </section>

          <section className="mb-4">
            <h2
              className={`text-2xl font-bold text-gray-800 ${bigShoulders.className}`}
            >
              12. OUR RIGHTS TO SUSPEND DELIVERY OF THE PRODUCTS
            </h2>
            <div>
              <p>
                12.1 <br />
                We may need certain information from you so that we can supply
                the products to you, for example, your address or any embroidery
                requirements. If so, this will have been stated in the
                description of the products on our website. If you do not give
                us this information within a reasonable time of us asking for
                it, or if you give us incomplete or incorrect information, we
                may either end the contract (and clause 13.2 will apply) or make
                an additional charge of a reasonable sum to compensate us for
                any extra work that is required as a result. We will not be
                responsible for supplying the products late, or not supplying
                any part of them, if this is caused by you not giving us the
                information we need within a reasonable time of us asking for
                it.
              </p>
              <div>
                12.2 <br />
                We may have to suspend the supply of a product to:
                <ol>
                  <li>
                    deal with technical problems or make minor technical
                    changes;
                  </li>
                  <li>
                    update the product to reflect changes in relevant laws and
                    regulatory requirements; or
                  </li>
                  <li>
                    make changes to the product as requested by you or notified
                    by us to you.
                  </li>
                </ol>
              </div>
              <p>
                12.3 <br />
                If we suspend the supply of the products, we will contact you in
                advance to tell you we will be suspending supply of the product,
                unless the problem is urgent or an emergency. You may contact us
                to end the contract for a product if we suspend it, or tell you
                we are going to suspend it in each case for a period of more
                than ten days and we will refund any sums you have paid in
                advance for the product in respect of the period after you end
                the contract.
              </p>
              <p>
                12.4 <br />
                If you do not pay us for the product when you are supposed to
                (see clause 11.6, 11.7 and 11.8), we may suspend supply of the
                products until you have paid us the outstanding amounts. We will
                contact you to tell you we are suspending supply of the
                products. We will not suspend the products where you dispute the
                unpaid invoice (see clause 11.12) providing that you notify us
                as soon as possible as soon as you become aware of the same. We
                will not charge you for the products during the period for which
                they are suspended. As well as suspending the products we can
                also charge you interest on your overdue payments (see clause
                11.11).
              </p>
            </div>
          </section>

          <section className="mb-4">
            <h2
              className={`text-2xl font-bold text-gray-800 mb-1 ${bigShoulders.className}`}
            >
              13. OUR RIGHTS TO END THE CONTRACT
            </h2>
            <div>
              <div>
                13.1 <br />
                We may end the contract for a product at any time by writing to
                you if:
                <ol>
                  <li>
                    (a) you do not make any payment to us when it is due and we
                    have not received payment within 7 days of us reminding you
                    that payment is due;
                  </li>
                  <li>
                    (b) you do not, within a reasonable time of us asking for
                    it, provide us with information that is necessary for us to
                    provide the products, for example a delivery address;
                  </li>
                  <li>
                    (c) you do not, within a reasonable time, allow us to
                    deliver the products to you or collect them from us; or
                  </li>
                  <li>
                    (d) you do not, within a reasonable time, allow us access to
                    your premises to supply the services;
                  </li>
                  <li>
                    (e) if you are a business customer and:
                    <ol>
                      <li>
                        (i) you take any step or action in connection with,
                        entering into administration, provisional liquidation or
                        any composition or arrangement with your creditors
                        (other than in relation to a solvent restructuring),
                        being wound up (whether voluntarily or by order of the
                        court, unless for the purpose of a solvent
                        restructuring), having a receiver appointed to any of
                        your assets or ceasing to carry on business; or
                      </li>

                      <li>
                        (ii) you suspend, or threaten to suspend, or cease or
                        threaten to cease, to carry on all or a substantial part
                        of your business; or
                      </li>

                      <li>
                        (iii) we reasonably believe that you are about to take
                        any of the actions, or become subject to any of the
                        events listed in clause 13.1 (e) (i) to 13.1 (e) (iii).
                      </li>

                      <li>
                        (iv) If you are a consumer customer and you stop or
                        suspend payment of any of your debts, or are unable to,
                        or you admit your inability to, pay your debts as they
                        fall due.
                      </li>
                    </ol>
                  </li>
                  <li>
                    (f) If you are a consumer customer and you stop or suspend
                    payment of any of your debts, or are unable to, or you admit
                    your inability to, pay your debts as they fall due.
                  </li>
                </ol>
              </div>
              <p>
                13.2 <br />
                If we end the contract in the situations set out in clause 13.1
                we will refund any money you have paid in advance for products
                we have not provided but we may deduct reasonable compensation
                for the net costs we will incur as a result of you breaking the
                contract.
              </p>

              <p>
                13.3 <br />
                We may write to you to let you know that we are going to stop
                providing the product. We will let you know within a reasonable
                time in advance and will refund any sums you have paid in
                advance for products which will not be provided.
              </p>
            </div>
          </section>

          <section className="mb-4">
            <h2
              className={`text-2xl font-bold text-gray-800 mb-1 ${bigShoulders.className}`}
            >
              14. YOUR RIGHTS TO END THE CONTRACT
            </h2>
            <div className="space-y-2 mt-2">
              <p>
                14.1 <br />
                You can always end your contract with us. Your rights when you
                end the contract will depend on what you have bought, whether
                there is anything wrong with it, how we are performing, when you
                decide to end the contract and whether you are a consumer
                customer or business customer:
              </p>
              <ol>
                <li>
                  (a) If what you have bought is faulty or misdescribed you may
                  have a legal right to end the contract (or to get the product
                  repaired or replaced or a service re-performed or to get some
                  or all of your money back), please see clause 17 if you are a
                  consumer and clause 18 if you are a business customer;
                </li>
                <li>
                  (b) If you want to end the contract because of something we
                  have done or have told you we are going to do, see clause
                  14.2;
                </li>
                <li>
                  (c) If you are a consumer and have just changed your mind
                  about the product, see clause 14.3. You may be able to get a
                  refund if you are within the cooling-off period, but this may
                  be subject to deductions and you will have to pay the costs of
                  return of any goods; or
                </li>

                <li>
                  (d) In all other cases (if we are not at fault and you are not
                  a consumer exercising your right to change your mind), see
                  clause 14.4.
                </li>
              </ol>
            </div>

            <div className="space-y-2 mt-2">
              <p>
                14.2 <br />
                If you are ending a contract for a reason set out at (a) to (e)
                below, the contract will end immediately and we will refund you
                in full for any products which have not been provided and you
                may also be entitled to compensation. The reasons are:
              </p>
              <ol>
                <li>
                  (a) we have told you about an upcoming change to the product
                  or these terms which you do not agree to (see clause 6);
                </li>
                <li>
                  (b) we have told you about an error in the price or
                  description of the product you have ordered and you do not
                  wish to proceed;
                </li>
                <li>
                  (c) there is a risk that supply of the products may be
                  significantly delayed because of events outside our control;
                </li>

                <li>
                  (d) we have suspended supply of the products for technical
                  reasons, or notify you we are going to suspend them for
                  technical reasons, in each case for a period of more than 10
                  days; or
                </li>

                <li>
                  (e) you have a legal right to end the contract because of
                  something we have done wrong.
                </li>
              </ol>
            </div>

            <div className="space-y-2 mt-2">
              <p>
                14.3 <br />
                If you are a consumer customer:
              </p>
              <ol>
                <li>
                  (a) then for most products bought online you have a legal
                  right to change your mind within 14 days and receive a refund.
                  These rights, under the Consumer Contracts Regulations 2013,
                  are explained in more detail in these terms. If you wish to
                  exercise your right to cancel the contract, please notify us
                  in writing. You may wish to use the model cancellation form,
                  which is attached to these terms and conditions.
                </li>
                <li>
                  (b) Your right as a consumer to change your mind under the
                  Consumer Contract Regulations 2013 does not apply in respect
                  of:
                </li>

                <ol className="  mb-4">
                  <li>
                    (i) services, once these have been completed, even if the
                    cancellation period is still running;
                  </li>
                  <li>
                    (ii) products sealed for health protection or hygiene
                    purposes, once these have been unsealed after you receive
                    them;
                  </li>
                  <li>
                    (iii) any goods which have been customised to your
                    requirements or bespoke goods;
                  </li>

                  <li>
                    (iv) sealed audio or sealed video recordings or sealed
                    computer software, once these products are unsealed after
                    you receive them; and
                  </li>

                  <li>
                    (v) any products which become mixed inseparably with other
                    items after their delivery.
                  </li>
                </ol>
                <li>
                  (c) how long you have to change your mind under the Consumer
                  Contract Regulations 2013 depends on what you have ordered and
                  how it is delivered:
                </li>
              </ol>

              <ol>
                <li>
                  (i) If you have bought services, you have 14 days after the
                  day we email you to confirm we accept your order. However,
                  once we have completed the services you cannot change your
                  mind, even if the period is still running. If you cancel after
                  we have started the services, you must pay us for the services
                  provided up until the time you tell us that you have changed
                  your mind; and
                </li>
                <li>
                  (ii) If you have bought goods, you have 14 days after the day
                  you (or someone you nominate) receives the goods, unless your
                  goods are split into several deliveries over different days.
                  In this case you have until 14 days after the day you (or
                  someone you nominate) receives the last delivery or your
                  goods. If your goods are for regular delivery over a set
                  period. In this case you have until 14 days after the day you
                  (or someone you nominate) receives the first delivery of the
                  goods.
                </li>
              </ol>
            </div>

            <div className="space-y-2 mt-2">
              <p>
                14.4 <br />
                Ending the contract where we are not at fault and there is no
                right to change your mind. Even if we are not at fault and you
                are not a consumer who has a right to change their mind (see
                clause 14.1), you can still end the contract before it is
                completed, but you may have to pay us compensation. A contract
                for goods is completed when the product is delivered. A contract
                for services is completed when we have finished providing the
                services and you have paid for them. If you want to end a
                contract before it is completed where we are not at fault and
                you are not a consumer who has changed their mind, just contact
                us to let us know. The contract will end immediately and we will
                refund any sums paid by you for products not provided but we may
                deduct from that refund (or, if you have not made an advance
                payment, charge you) reasonable compensation for the net costs
                we will incur as a result of you ending the contract.
                Unfortunately, if you have ordered customised/ bespoke goods,
                such as goods containing your logo or business name, you are not
                entitled to return these items unless they are defective. In
                addition, if you have ordered undergarments or thermal underwear
                you are not able to return these goods unless they are defective
                and unworn. Any footwear must be returned to us in the original
                condition and unworn, unless they are defective.
              </p>
            </div>
          </section>

          <section className="my-4">
            <h2
              className={`text-2xl font-bold text-gray-800 mb-1 ${bigShoulders.className}`}
            >
              15. HOW TO END THE CONTRACT WITH US
            </h2>
            <div>
              <p>
                15.1
                <br /> To end the contract with us, please let us know by
                contacting us by phone, email, or by post.
              </p>
              <p>
                15.2
                <br /> If you end the contract for any reason after products
                have been dispatched to you or you have received them, you must
                return them to us. You must either return the goods in person to
                where you bought them, post them back to us, or (if they are not
                suitable for posting) allow us to collect them from you. If you
                are a consumer exercising your right to change your mind, you
                must send off the goods within 14 days of telling us you wish to
                end the contract.
              </p>
              <div>
                <p>
                  15.3
                  <br /> We will only pay the costs of return:
                </p>
                <ol>
                  <li>(a) If the products are faulty or misdescribed; or</li>
                  <li>
                    (b) If you are ending the contract due to changes in the
                    product, pricing, description, or delivery delays caused by
                    external events, or because we have done something wrong.
                    <br />
                    In all other circumstances (including where you are a
                    consumer exercising your right to change your mind) you must
                    pay the costs of return.
                  </li>
                </ol>
              </div>
              <p>
                15.4
                <br /> If you are responsible for the costs of return and we are
                collecting the product from you, we will charge you the direct
                cost to us of collection.
              </p>
              <p>
                15.5
                <br /> If you are entitled to a refund under these terms, we
                will refund you the price you paid for the products, including
                delivery costs, by the method you used for payment. However, we
                may make deductions from the price as described below.
              </p>
              <div>
                <p>
                  15.6
                  <br /> If you are exercising your right to change your mind
                  under clause 14.3:
                </p>
                <ol>
                  <li>
                    (a) we may reduce your refund of the price (excluding
                    delivery costs) to reflect any reduction in the value of the
                    goods, if this has been caused by your handling them in a
                    way which would not be permitted in a shop. If we refund you
                    the price paid before we are able to inspect the goods and
                    later discover you have handled them in an unacceptable way,
                    you must pay us an appropriate amount.
                  </li>
                  <li>
                    (b) the maximum refund for delivery costs will be the costs
                    of delivery by the least expensive delivery method we offer.
                    For example, if we offer delivery of a product within 3-5
                    days at one cost but you choose to have the product
                    delivered within 24 hours at a higher cost, then we will
                    only refund what you would have paid for the cheaper
                    delivery option.
                  </li>
                  <li>
                    (c) where the product is a service, we may deduct from any
                    refund an amount for the supply of the service for the
                    period for which it was supplied, ending with the time when
                    you told us you had changed your mind. The amount will be in
                    proportion to what has been supplied, in comparison with the
                    full coverage of the contract.
                  </li>
                  <li>(d) We will make any refunds as soon as possible:</li>
                </ol>
                <ol>
                  <li>
                    (i) Iif the products are goods and we have not offered to
                    collect them, your refund will be made within 14 days from
                    the day on which we receive the product back from you or, if
                    earlier, the day on which you provide us with evidence that
                    you have sent the product back to us;
                  </li>
                  <li>
                    (ii) In all other cases, your refund will be made within 14
                    days of your notification of changing your mind.
                  </li>
                </ol>
              </div>
            </div>

            <section className="my-4">
              <h2
                className={`text-2xl font-bold text-gray-800 ${bigShoulders.className}`}
              >
                16. IF THERE IS A PROBLEM WITH THE PRODUCT
              </h2>
              <p>
                If you have any questions or complaints about the product,
                please contact us.
              </p>
            </section>

            <section id="consumer-rights" className="mb-4">
              <h2
                className={`text-2xl font-bold text-gray-800 ${bigShoulders.className}`}
              >
                17. YOUR RIGHTS IN RESPECT OF DEFECTIVE PRODUCTS IF YOU ARE A
                CONSUMER CUSTOMER
              </h2>
              <p>
                17.1
                <br /> If you are a consumer customer we are under a legal duty
                to supply products that are in conformity with this contract.
                See the box below for a summary of your key legal rights in
                relation to the products. Nothing in these terms will affect
                your legal rights.
              </p>
              <strong> Summary of your key legal rights</strong>
              <br />
              <p>
                This is a summary of your key legal rights. These are subject to
                certain exceptions. For detailed information please visit the
                Citizens Advice website www.adviceguide.org.uk or call 03454 04
                05 06.
              </p>
              <p>
                (a) If your product is goods,The Consumer Rights Act 2015 says
                goods must be as described, fit for purpose and of satisfactory
                quality. During the expected lifespan of your product your legal
                rights entitle you to the following:
              </p>
              <ol>
                <li>
                  (i) up to 30 days: if your goods are faulty, then you can get
                  an immediate refund.
                </li>

                <li>
                  {` (ii) up to six months: if your goods can't be repaired or
                    replaced, then you're entitled to a full refund, in most cases.`}
                </li>

                <li>
                  (iii) up to six years: if your goods do not last a reasonable
                  length of time you may be entitled to some money back. See
                  also clause 14.3.
                </li>
              </ol>
              <p>
                (b) If your product is services The Consumer Rights Act 2015
                says:
              </p>
              <ol>
                <li>
                  {`  (i) you can ask us to repeat or fix a service if it's not
                    carried out with reasonable care and skill, or get some money
                    back if we can't fix it.`}
                </li>

                <li>
                  {`(ii)
      if you haven't agreed a price beforehand, what you're asked to pay must be reasonable.
      `}
                </li>

                <li>
                  (iii)
                  {` if you haven't agreed a time beforehand, it must be carried out within a reasonable time.
      Please note that all of our goods are off the shelf products and we make no representation or give any warranty that the goods are fit for a particular purpose. You should satisfy yourself that any goods you purchase from us are for the purpose you require.`}
                </li>
              </ol>
              <p>
                17.2
                <br /> If you wish to exercise your legal rights to reject
                products, you must either return them in person to where you
                bought them, post them back to us or (if they are not suitable
                for posting) allow us to collect them from you. We will pay the
                costs of postage or collection.
              </p>
            </section>

            <section id="business-rights" className="mb-8">
              <h2
                className={`text-2xl font-bold text-gray-800 ${bigShoulders.className}`}
              >
                18. YOUR RIGHTS IN RESPECT OF DEFECTIVE PRODUCTS IF YOU ARE A
                BUSINESS CUSTOMER
              </h2>
              <p>
                18.1
                <br /> If you are a business customer we warrant that on
                delivery of the goods and for such period as is stated on the
                applicable goods <strong> (Warranty Period) </strong>
                that the applicable goods shall:
              </p>
              <p>
                (a) <br />
                conform in all material respects with their description and any
                relevant specification;
              </p>

              <p>
                (b) <br />
                be free from material defects in design, material and
                workmanship;
              </p>

              <p>
                (c) <br />
                be of satisfactory quality (within the meaning of the Sale of
                Goods Act 1979); and
              </p>

              <p>
                (a) <br />
                be fit for any purpose held out by us.
                <br />
                All of our goods are off the shelf products and we make no
                representation or give no warranty that the goods are fit for a
                particular purpose. You should satisfy yourself that any goods
                you purchase from us are for the purpose you require.
              </p>
              <p>
                18.2
                <br /> Subject to clause 18.3, if:
              </p>

              <p>
                (a) <br />
                you give us notice in writing during the Warranty Period within
                a reasonable time of discovery that a product does not comply
                with the warranty set out in clause 18.1;
              </p>

              <p>
                (b) <br />
                we are given a reasonable opportunity of examining such product;
                and
              </p>

              <p>
                (c) <br />
                you return such product to us at our cost, we shall, at our
                option, repair or replace the defective product, or refund the
                price of the defective product in full.
              </p>

              <p>
                18.3
                <br />
                {` We will not be liable for a product's failure to comply with the warranty in clause 18.1 if:`}
              </p>

              <p>
                (a) <br />
                you make any further use of such product after giving a notice
                in accordance with clause 18.2(a);
              </p>

              <p>
                (b) <br />
                the defect arises because you failed to follow our oral or
                written instructions as to the storage, installation,
                commissioning, use or maintenance of the product or (if there
                are none) good trade practice;
              </p>

              <p>
                (c) <br />
                the defect arises as a result of us following any drawing,
                design or specification supplied by you;
              </p>

              <p>
                (d) <br />
                you alter or repair the product without our written consent; or
              </p>
              <p>
                (e) <br />
                the defect arises as a result of fair wear and tear, wilful
                damage, negligence, or abnormal working conditions.
              </p>

              <p>
                18.4
                <br />
                {` Except as provided in this clause 18, we shall have no liability to you in respect of a product's failure to comply with the warranty set out in clause 18.1.
      `}
              </p>
              <p>
                18.5
                <br />
                These terms shall apply to any repaired or replacement products
                supplied by us under clause 18.2.
              </p>
            </section>

            <section id="consumer-liability" className="mb-4">
              <h2
                className={`text-2xl font-bold text-gray-800 ${bigShoulders.className}`}
              >
                19. OUR RESPONSIBILITY FOR LOSS OR DAMAGE SUFFERED BY YOU IF YOU
                ARE A CONSUMER CUSTOMER
              </h2>
              <p>
                19.1
                <br /> We are responsible to you for foreseeable loss and damage
                caused by us. If we fail to comply with these terms, we are
                responsible for loss or damage you suffer that is a foreseeable
                result of us breaking this contract or as a result of us failing
                to use reasonable care and skill, but we are not responsible for
                any loss or damage that is not foreseeable. Loss or damage is
                foreseeable if either it is obvious that it will happen or if,
                at the time the contract was made, both we and you knew it might
                happen, for example, if you discussed it with us during the
                sales process.
              </p>
              <p>
                19.2
                <br /> We do not exclude or limit in any way our liability to
                you where it would be unlawful to do so. This includes liability
                for death or personal injury caused by our negligence or the
                negligence of our employees, agents or subcontractors; for fraud
                or fraudulent misrepresentation; for breach of your legal rights
                in relation to the products as summarised at clause 17.1 and for
                defective products under the Consumer Protection Act 1987.
              </p>

              <p>
                19.3
                <br /> When we are liable for damage to your property. If we are
                providing services in your property, we will make good any
                damage to your property caused by us while doing so. However, we
                are not responsible for the cost of repairing any pre-existing
                faults or damage to your property that we discover while
                providing the services.
              </p>

              <p>
                19.4
                <br /> If you are a consumer we are only supplying the products
                for to you for domestic and private use. If you use the products
                for any commercial, business or re-sale purpose our liability to
                you will be limited as set out in clause 20.
              </p>
            </section>
          </section>

          {/*  */}
          {/* Section 20 */}
          <div className="mb-4">
            <h3
              className={`text-2xl font-bold text-gray-800 ${bigShoulders.className}`}
            >
              20. OUR RESPONSIBILITY FOR LOSS OR DAMAGE SUFFERED BY YOU IF YOU
              ARE A BUSINESS CUSTOMER
            </h3>
            <p>
              20.1 <br />
              Nothing in these terms shall limit or exclude our liability for:
            </p>
            <ol>
              <li>
                (a) death or personal injury caused by our negligence, or the
                negligence of our employees, agents or subcontractors (as
                applicable);
              </li>
              <li>(b) fraud or fraudulent misrepresentation;</li>
              <li>
                (c) breach of the terms implied by section 12 of the Sale of
                Goods Act 1979 or section 2 of the Supply of Goods and Services
                Act 1982; or
              </li>
              <li>
                (d) defective products under the Consumer Protection Act 1987;
                or
              </li>
              <li>
                (e) any matter in respect of which it would be unlawful for us
                to exclude or restrict liability.
              </li>
            </ol>
            <p>
              20.2 <br />
              Except to the extent expressly stated in clause 18.1 all terms
              implied by sections 13 to 15 of the Sale of Goods Act 1979 and
              sections 3 to 5 of the Supply of Goods and Services Act 1982 are
              excluded.
            </p>
            <p>
              20.3 <br />
              Subject to clause 20.1:
            </p>
            <ol>
              <li>
                (a) we shall not be liable to you, whether in contract, tort
                (including negligence), breach of statutory duty, or otherwise,
                for any loss of profit, or any indirect or consequential loss
                arising under or in connection with any contract between us; and
              </li>
              <li>
                (b) our total liability to you for all other losses arising
                under or in connection with any contract between us, whether in
                contract, tort (including negligence), breach of statutory duty,
                or otherwise, shall be limited to the total sums paid by you for
                products under such contract.
              </li>
            </ol>
            <p>
              20.4 <br />
              If you purchase any goods from us, which are part of our
              janitorial range, such goods are not permitted to be resold or
              made available to consumers and are not permitted to be sold or
              used by the general public. By purchasing any goods from our
              janitorial range from us, you acknowledge and agree that you will
              not resell or make available any such goods to any consumers or
              the general public.
            </p>
          </div>

          {/* Section 21 */}
          <div className="mb-4">
            <h3
              className={`text-2xl font-bold text-gray-800 ${bigShoulders.className}`}
            >
              21. INTELLECTUAL PROPERTY
            </h3>
            <p>
              21.1 <br />
              The following definition shall apply to this clause:
            </p>
            <p>
              <strong>Intellectual Property Rights: </strong>
              patents, utility models, rights to inventions, copyright and
              neighbouring and related rights, moral rights, trade-marks and
              service marks, business names and domain names, rights in get-up
              and trade dress, goodwill and the right to sue for passing off or
              unfair competition, rights in designs, rights in computer
              software, database rights, rights to use, and protect the
              confidentiality of, confidential information (including know-how
              and trade secrets), and all other intellectual property rights, in
              each case whether registered or unregistered and including all
              applications and rights to apply for and be granted, renewals or
              extensions of, and rights to claim priority from, such rights and
              all similar or equivalent rights or forms of protection which
              subsist or will subsist now or in the future in any part of the
              world.
            </p>
            <p>
              21.2 <br />
              If you require us to use any logos, badges, tagline, product or
              business names or similar related items (Customer’s Branding)
              which are required to be embroidered or embellished onto the
              goods, then:
            </p>
            <ol>
              <li>
                (a) you give us a fully paid-up, non-exclusive, royalty-free,
                non-transferable licence to copy and modify any materials
                provided by you to us for the term of the contract for the
                purpose of providing the goods and/or services to you; and
              </li>
              <li>
                (b) you shall fully indemnify us and hold us harmless from and
                against all losses, damages, costs, (including legal fees) and
                expenses incurred by or awarded against us as a result of, or in
                connection with, any claim made or asserted against us that the
                Customer’s Branding infringes the Intellectual Property Rights
                of any third party.
              </li>
            </ol>
          </div>

          {/* Section 22 */}
          <div className="mb-4">
            <h3
              className={`text-2xl font-bold text-gray-800 ${bigShoulders.className}`}
            >
              22. HOW WE MAY USE YOUR PERSONAL INFORMATION
            </h3>
            <p>
              22.1 <br />
              We will use the personal information you provide to us:
            </p>
            <ol>
              <li>(a) to supply the products to you;</li>
              <li>(b) to process your payment for the products; and</li>
              <li>
                (c) if you agreed to this during the order process, to give you
                information about similar products that we provide, but you may
                stop receiving this at any time by contacting us.
              </li>
            </ol>
            <p>
              22.2 <br />
              We will only give your personal information to other third parties
              where the law either requires or allows us to do so. Please refer
              to our privacy policy, which is available on our website, for
              further information.
            </p>
          </div>

          {/* Section 23 */}
          <div className="mb-4">
            <h3
              className={`text-2xl font-bold text-gray-800 ${bigShoulders.className}`}
            >
              23. OTHER IMPORTANT TERMS
            </h3>
            <ol>
              <li>
                23.1 <br /> We may transfer our rights and obligations under
                these terms to another organisation.
              </li>
              <li>
                23.2 <br />
                You may only transfer your rights or your obligations under
                these terms to another person if we agree to this in writing to
                a person who has acquired the product or, where the product is
                services, any item or property in respect of which we have
                provided the services.
              </li>
              <li>
                23.3 <br />
                This contract is between you and us. No other person shall have
                any rights to enforce any of its terms.
              </li>
              <li>
                23.4 <br />
                Each of the paragraphs of these terms operates separately. If
                any court or relevant authority decides that any of them are
                unlawful, the remaining paragraphs will remain in full force and
                effect.
              </li>
              <li>
                23.5 <br />
                If we do not insist immediately that you do anything you are
                required to do under these terms, or if we delay in taking steps
                against you in respect of your breaking this contract, that will
                not mean that you do not have to do those things and it will not
                prevent us taking steps against you at a later date. For
                example, if you miss a payment and we do not chase you but we
                continue to provide the products, we can still require you to
                make the payment at a later date.
              </li>
              <li>
                23.6 <br />
                These terms are governed by English law and you can bring legal
                proceedings in respect of the products in the English courts. If
                you live in Scotland you can bring legal proceedings in respect
                of the products in either the Scottish or the English courts. If
                you live in Northern Ireland you can bring legal proceedings in
                respect of the products in either the Northern Irish or the
                English courts.
              </li>
              <li>
                23.7 <br />
                If you are a business, any dispute or claim arising out of or in
                connection with a contract between us or its subject matter or
                formation (including non-contractual disputes or claims) shall
                be governed by and construed in accordance with the law of
                England and Wales and the courts of England and Wales shall have
                exclusive jurisdiction to settle any such dispute or claim.
              </li>
            </ol>
          </div>

          <div className="flex flex-col gap-4">
            <h1>MODEL CANCELLATION FORM</h1>
            <p>
              (Complete and return this form only if you wish to withdraw from
              the contract)
            </p>
            <p>{`To [TRADER'S NAME, ADDRESS, TELEPHONE NUMBER AND, WHERE AVAILABLE, FAX NUMBER AND E-MAIL ADDRESS TO BE INSERTED BY THE TRADER]`}</p>
            {/*  */}
            <p>
              I/We [*] hereby give notice that I/We [*] cancel my/our [*]
              contract of sale of the following goods [*]/for the supply of the
              following service [*],
            </p>
            <p>Ordered on [*]/received on [*],</p>
            <p>Name of consumer(s),</p>
            <p>Address of consumer(s),</p>
            <p>
              Signature of consumer(s) (only if this form is notified on paper),
            </p>
            <p>Date</p>
            {/*  */}
          </div>

          {/*  */}
        </div>
      </div>
    </Modal>
  );
};

export default TermsModal;
