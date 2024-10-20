import React from "react";

// CSS for the horizontal line
const lineStyle = `
.horizontal-line {
  border-top: 2px solid black;
  margin: 20px 0; /* Adjusts spacing around the line */
}
`;

const PricingPlans = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Injecting CSS directly inside the component */}
      <style>{lineStyle}</style>

      <div className="flex justify-center space-x-6 mb-8">
        <button className="text-lg font-bold">Monthly</button>
        <span>|</span>
        <button className="text-lg">Annual</button>
      </div>

      {/* Adjusting border, padding, and gap */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 border-4 border-blue-500 w-[1180px] h-[836px] p-6 pb-24 overflow-hidden">
        
        {/* Card 1 */}
        <div className="bg-white shadow-lg p-8 rounded-lg text-center flex flex-col justify-between transition-all duration-300 hover:bg-blue-500 hover:text-white">
          <div>
            <h4 className="text-xl font-bold">Trial</h4>
            <p className="text-lg font-semibold mb-4">Try now</p>
            <ul className="text-sm mb-4 space-y-2">
              <li>25+ data sources</li>
              <li>GPT4, LinkedIn and others</li>
              <li>Access to slack community</li>
              <li>10+ templates to scale your outbound</li>
            </ul>
          </div>
          <button className="w-full bg-white text-blue-500 border-blue-500 py-2 rounded hover:bg-blue-500 hover:text-white">
            Try Now
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg p-8 rounded-lg text-center flex flex-col justify-between transition-all duration-300 hover:bg-blue-500 hover:text-white">
          <div>
            <h4 className="text-xl font-bold">Growth</h4>
            <p className="text-lg mb-2">
              <span className="bg-green-500 text-white px-2 py-1 rounded">50% off</span> 
              <strong>$229</strong>/month
            </p>
            <p className="text-gray-500 line-through mb-4">$459</p>
            <ul className="text-sm mb-4 space-y-2">
              <li><strong>8,000</strong> Credits</li>
              <li>Webhook, HTTP API</li>
              <li>Credit rollover (up to 2x plan credits)</li>
              <li>Outbound email integrations like Instantly</li>
              <li>Dedicated 3 hours from Bitscale expert</li>
            </ul>
          </div>
          <button className="w-full bg-white text-blue-500 border-blue-500 py-2 rounded hover:bg-blue-500 hover:text-white">
            Continue with Growth
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg p-8 rounded-lg text-center flex flex-col justify-between transition-all duration-300 hover:bg-blue-500 hover:text-white">
          <div>
            <h4 className="text-xl font-bold">
              Booster <span className="bg-gray-100 text-black px-2 py-1 rounded">Popular</span>
            </h4>
            <p className="text-lg mb-2">
              <span className="bg-green-500 text-white px-2 py-1 rounded">50% off</span> 
              <strong>$499</strong>/month
            </p>
            <p className="text-gray-500 line-through mb-4">$999</p>
            <ul className="text-sm mb-4 space-y-2">
              <li><strong>25,000</strong> Credits</li>
              <li>Webhook, HTTP API</li>
              <li>Credit rollover (up to 2x plan credits)</li>
              <li>Outbound email integrations like Instantly</li>
              <li>Dedicated 8 hours from Bitscale expert</li>
              <li>2 way Hubspot integration</li>
              <li>4 way Hubspot integration</li>
            </ul>
          </div>

          {/* Horizontal line with additional points */}
          <div className="horizontal-line"></div> {/* Horizontal line added here */}
          <ul className="text-sm space-y-1">
            <li>Unlimited lead research</li>
            <li>1,500 enterprise leads</li>
            <li>Personalized outreach at scale</li>
          </ul>

          <button className="w-full bg-white text-blue-500 border-blue-500 py-2 rounded hover:bg-blue-500 hover:text-white mt-0">
            Continue with Booster
          </button>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-lg p-8 rounded-lg text-center flex flex-col justify-between transition-all duration-300 hover:bg-blue-500 hover:text-white">
          <div>
            <h4 className="text-xl font-bold">Enterprise</h4>
            <p className="text-lg font-semibold mb-4">Contact Us</p>
            <ul className="text-sm mb-4 space-y-2">
              <li>Data privacy certification</li>
              <li>Priority support</li>
              <li>Dedicated Bitscale expert</li>
              <li>Private Slack Channel</li>
              <li>Credit rollover (up to 2x plan credits)</li>
              <li>Outbound email integrations like Instantly</li>
              <li>Dedicated 8 hours from Bitscale expert</li>
              <li>2 way Hubspot integration</li>
            </ul>
          </div>

          {/* Horizontal line with additional points */}
          <div className="horizontal-line"></div> {/* Horizontal line added here */}
          <ul className="text-sm space-y-1">
            <li>Unlimited lead research</li>
            <li>1,500 enterprise leads</li>
            <li>Personalized outreach at scale</li>
          </ul>

          <button className="w-full bg-white text-blue-500 border-blue-500 py-2 rounded hover:bg-blue-500 hover:text-white mt-0">
            Try Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
