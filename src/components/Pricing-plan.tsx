"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Toggle } from "@/components/ui/toggle"

export default function PricePlan() {
  const [isMonthly, setIsMonthly] = useState(true)

  const plans = [
    {
      name: "Basic",
      price: isMonthly ? "$49.00" : "$490.00",
      features: [
        "Hire Unlimited Times",
        "Newest Features",
        "Monitor Activity",
        "File Handover",
        "Find Nearest People",
      ],
      isBest: false,
    },
    {
      name: "Professional",
      price: isMonthly ? "$79.00" : "$790.00",
      features: [
        "Hire Unlimited Times",
        "Newest Features",
        "Monitor Activity",
        "File Handover",
        "Find Nearest People",
      ],
      isBest: true,
    },
    {
      name: "Premium",
      price: isMonthly ? "$99.00" : "$990.00",
      features: [
        "Hire Unlimited Times",
        "Newest Features",
        "Monitor Activity",
        "File Handover",
        "Find Nearest People",
      ],
      isBest: false,
    },
  ]

  return (
    <div className=" w-full mx-auto p-6 bg-gradient-to-r from-[#e2e6e8] to-[#f4faf9] rounded-b-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-4">Our Pricing & Plans</h2>
      <p className="text-center text-gray-600 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
      </p>
      <div className="flex justify-center items-center space-x-4 mb-8">
        <Toggle
          pressed={isMonthly}
          onPressedChange={() => setIsMonthly(true)}
          className={`${isMonthly ? 'bg-orange-500 text-white' : 'bg-gray-200'} px-4 py-2 rounded-full`}
        >
          Monthly
        </Toggle>
        <Toggle
          pressed={!isMonthly}
          onPressedChange={() => setIsMonthly(false)}
          className={`${!isMonthly ? 'bg-orange-500 text-white' : 'bg-gray-200'} px-4 py-2 rounded-full`}
        >
          Yearly
        </Toggle>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <Card key={index} className={`relative ${plan.isBest ? 'border-orange-500 border-2' : ''}`}>
            {plan.isBest && (
              <div className="absolute top-0 right-0 bg-orange-500 text-white px-2 py-1 text-sm rounded-bl-lg rounded-tr-lg">
                Best
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-xl font-semibold">{plan.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold mb-4">{plan.price}</p>
              <ul className="space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className={`w-full ${
                  plan.isBest ? 'bg-orange-500 hover:bg-orange-600' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                }`}
              >
                Choose Plan
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <p className="text-center text-gray-600 mt-8">15 Days Money Back Guarantee</p>
    </div>
  )
}