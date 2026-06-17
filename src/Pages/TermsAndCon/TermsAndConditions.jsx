import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 text-gray-200">
      <div className="max-w-4xl mx-auto p-8 rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-8 text-primary">Terms and Conditions</h1>
        
        <div className="prose max-w-none prose-invert">
          <p className="text-sm text-gray-400 mb-6">Last Updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-100">1. Introduction</h2>
            <p className="mb-4 text-gray-300">
              Welcome to Elara International. These Terms and Conditions govern your use of our website and services. 
              By accessing or using our services, you agree to be bound by these terms.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-100">2. Ordering Process</h2>
            <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-300">
              <li>All orders are subject to product availability</li>
              <li>We reserve the right to refuse or cancel any order</li>
              <li>Prices are subject to change without notice</li>
              <li>You must provide accurate and complete order information</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-100">3. Payment Terms</h2>
            <p className="mb-2 text-gray-300">We accept the following payment methods:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-300">
              <li>Credit/Debit Cards</li>
              <li>Bank Transfers</li>
              <li>Mobile Payment Services</li>
            </ul>
            <p className="text-gray-300">
              Payment is due at the time of order. Your order will not be processed until payment is confirmed.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-100">4. Shipping and Delivery</h2>
            <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-300">
              <li>Shipping costs are calculated at checkout</li>
              <li>Delivery times are estimates only</li>
              <li>We are not responsible for delays caused by carriers or customs</li>
              <li>Risk of loss passes to you upon delivery</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-100">5. Returns and Refunds</h2>
            <p className="mb-2 text-gray-300">Our return policy includes:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-300">
              <li>Defective products may be returned within 14 days</li>
              <li>Return shipping costs are the customer's responsibility</li>
              <li>Refunds will be processed within 7-10 business days</li>
            </ul>
            <p className="text-gray-300">
              Custom or special-order items may not be eligible for return.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-100">6. Intellectual Property</h2>
            <p className="text-gray-300">
              All content on this website, including designs, text, graphics, and logos, is the property of Elara International 
              and protected by intellectual property laws. Unauthorized use is prohibited.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-100">7. Limitation of Liability</h2>
            <p className="mb-4 text-gray-300">
              Elara International shall not be liable for any indirect, incidental, or consequential damages arising from 
              the use of our products or services.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-100">8. Governing Law</h2>
            <p className="text-gray-300">
              These terms shall be governed by and construed in accordance with the laws of [Your Country/State], 
              without regard to its conflict of law provisions.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4 text-gray-100">9. Changes to Terms</h2>
            <p className="text-gray-300">
              We reserve the right to modify these terms at any time. Your continued use of our services 
              constitutes acceptance of the modified terms.
            </p>
          </section>
          
          <div className="mt-12 p-4 bg-gray-800 rounded-lg border border-gray-700">
            <p className="font-medium text-gray-200">If you have any questions about these Terms and Conditions, please contact us at:</p>
            <p className="mt-2 text-gray-300">Email: contact.elaraint@gmail</p>
            <p className="text-gray-300">Phone: +880 1765-580804</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;