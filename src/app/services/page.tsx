import { Fragment } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Metadata } from "next";

const services = {
  extras: {
    clean_seats: {
      cars: { regular: 90, leather_treatment: 20 },
      trucks_suv: { regular: 93, leather_treatment: 35 },
    },
    shampoo_carpet: {
      cars: 45,
      trucks_suv: 55,
    },
    engine_clean: {
      cars: 40,
      trucks_suv: 45,
    },
    dashboard_shine_dressing: 10,
    headlight_restore_each: 30,
    shine_chrome_rims: 20,
    wash_silicon_tires: 25,
  },
  wash_detail: [
    {
      vehicle: "All Cars",
      models: ["All models"],
      wash: {
        full: 30,
        exterior: 25,
      },
      wash_wax: 90,
      interior_detail: 100,
      full_detail: 175,
    },
    {
      vehicle: "Small Trucks/SUV's",
      models: ["CRV", "Nissan Murano", "Ford Escape"],
      wash: {
        full: 32,
        exterior: 27,
      },

      wash_wax: 95,
      interior_detail: 110,
      full_detail: 185,
    },
    {
      vehicle: "Medium Trucks/SUV's",
      models: ["Explorer", "Jeep Cherokee", "4-Runner"],
      wash: {
        full: 35,
        exterior: 30,
      },

      wash_wax: 115,
      interior_detail: 120,
      full_detail: 200,
    },
    {
      vehicle: "Large Trucks/SUV's",
      models: [
        "Cadillac Escalade",
        "Ford Expedition",
        "Mini Vans",
        "GMC Trucks",
        "Tahoe",
        "Pickups w/ Extra Cab",
      ],
      wash: {
        full: 40,
        exterior: 35,
      },
      wash_wax: 140,
      interior_detail: 130,
      full_detail: 200,
    },
    {
      vehicle: "Extra Large Trucks/SUV's",
      models: [
        "Cadillac Escalade XL",
        "Ford Excursion",
        "Hummer",
        "Dually",
        "Suburban XL",
        "High Top Vans",
      ],
      wash: {
        full: 50,
        exterior: 45,
      },
      wash_wax: 160,
      interior_detail: 130,
      full_detail: 245,
    },
  ],
};

export const metadata: Metadata = {
  title: "Services - Spot-Less Car Spa",
};

export default function ServicesPage() {
  return (
    <div className="py-40 md:py-32 relative flex flex-col md:flex-row bg-[#1b1a1c]">
      <div className="z-40 w-full min-h-screen container">
        <div className="mx-auto mb-28">
          <h1 className="text-white text-6xl md:text-9xl font-bold uppercase">
            Services
          </h1>
        </div>
        <h2 className="text-white text-4xl font-bold uppercase">Wash</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(380px,1fr))] gap-4 my-6">
          {services.wash_detail.map((service) => (
            <Fragment key={service.vehicle}>
              <Card className="grid md:grid-cols-2 items-center bg-transparent">
                <CardHeader>
                  <CardTitle className="text-primary uppercase">
                    {service.vehicle}
                    {service.models.map((model) => (
                      <p key={model} className="text-sm text-white">
                        {model}
                      </p>
                    ))}
                  </CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    <span className="text-white text-2xl mr-2 font-bold">
                      ${service.wash.full}
                    </span>
                    Full
                  </p>
                  <p>
                    <span className="text-white text-2xl mr-2 font-bold">
                      ${service.wash.exterior}
                    </span>
                    Exterior
                  </p>
                  <p>
                    <span className="text-white text-2xl mr-2 font-bold">
                      ${service.wash_wax}
                    </span>
                    Wash + Wax
                  </p>
                </CardContent>
              </Card>
            </Fragment>
          ))}
        </div>
        <h2 className="text-white text-4xl font-bold uppercase">Detail</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(380px,1fr))] gap-4 my-6">
          {services.wash_detail.map((service) => (
            <Fragment key={service.vehicle}>
              <Card className="grid md:grid-cols-2 items-center bg-transparent">
                <CardHeader>
                  <CardTitle className="text-primary  uppercase">
                    {service.vehicle}
                    {service.models.map((model) => (
                      <p key={model} className="text-sm text-white">
                        {model}
                      </p>
                    ))}
                  </CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    <span className="text-white text-2xl mr-2 font-bold">
                      ${service.full_detail}
                    </span>
                    Full Detail
                  </p>
                  <p>
                    <span className="text-white text-2xl mr-2 font-bold">
                      ${service.interior_detail}
                    </span>
                    Interior Detail
                  </p>
                </CardContent>
              </Card>
            </Fragment>
          ))}
        </div>
        <h2 className="text-white text-4xl font-bold uppercase">Clean Seats</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(380px,1fr))] gap-4 my-6">
          <Card className="grid grid-rows-2 items-center bg-transparent">
            <CardHeader>
              <CardTitle className="text-primary  uppercase">Cars</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                <span className="text-white text-2xl mr-2 font-bold">
                  ${services.extras.clean_seats.cars.regular}
                </span>
                Regular
              </p>
              <p>
                <span className="text-white text-2xl mr-2 font-bold">
                  ${services.extras.clean_seats.cars.leather_treatment}
                </span>
                Leather Treatment
              </p>
            </CardContent>
          </Card>
          <Card className="grid grid-rows-2 items-center bg-transparent">
            <CardHeader>
              <CardTitle className="text-primary  uppercase">
                Trucks and SUVs
              </CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                <span className="text-white text-2xl mr-2 font-bold">
                  ${services.extras.clean_seats.trucks_suv.regular}
                </span>
                Regular
              </p>
              <p>
                <span className="text-white text-2xl mr-2 font-bold">
                  ${services.extras.clean_seats.trucks_suv.leather_treatment}
                </span>
                Leather Treatment
              </p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-white text-4xl font-bold uppercase">
          Shampoo Carpet
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(380px,1fr))] gap-4 my-6">
          <Card className="grid grid-rows-2 items-center bg-transparent">
            <CardHeader>
              <CardTitle className="text-primary  uppercase">
                Cars, Trucks, SUVs
              </CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                <span className="text-white text-2xl mr-2 font-bold">
                  ${services.extras.shampoo_carpet.cars}
                </span>
                Cars
              </p>
              <p>
                <span className="text-white text-2xl mr-2 font-bold">
                  ${services.extras.shampoo_carpet.trucks_suv}
                </span>
                Trucks and SUVs
              </p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-white text-4xl font-bold uppercase">Extras</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(380px,1fr))] gap-4 my-6">
          <Card className="grid grid-rows-2 items-center bg-transparent">
            <CardHeader>
              <CardTitle className="text-primary  uppercase">
                Cars, Trucks, SUVs
              </CardTitle>
              <CardDescription>Engine Clean</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                <span className="text-white text-2xl mr-2 font-bold">
                  ${services.extras.engine_clean.cars}
                </span>
                Cars
              </p>
              <p>
                <span className="text-white text-2xl mr-2 font-bold">
                  ${services.extras.engine_clean.cars}
                </span>
                Trucks and SUVs
              </p>
            </CardContent>
          </Card>
          <Card className="grid grid-rows-2 items-center bg-transparent">
            <CardHeader>
              <CardTitle className="text-primary  uppercase">
                Cars, Trucks, SUVs
              </CardTitle>
              <CardDescription>Chrome Rims Shine</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                <span className="text-white text-2xl mr-2 font-bold">
                  ${services.extras.shine_chrome_rims}
                </span>
                Cars + Trucks + SUVs
              </p>
            </CardContent>
          </Card>
          <Card className="grid grid-rows-2 items-center bg-transparent">
            <CardHeader>
              <CardTitle className="text-primary  uppercase">
                Cars, Trucks, SUVs
              </CardTitle>
              <CardDescription>Headlight Restore</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                <span className="text-white text-2xl font-bold">
                  ${services.extras.headlight_restore_each}
                </span>
                /each
              </p>
            </CardContent>
          </Card>
          <Card className="grid grid-rows-2 items-center bg-transparent">
            <CardHeader>
              <CardTitle className="text-primary  uppercase">
                Cars, Trucks, SUVs
              </CardTitle>
              <CardDescription>Headlight Restore</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                <span className="text-white text-2xl mr-2 font-bold">
                  ${services.extras.dashboard_shine_dressing}
                </span>
                Cars + Trucks + SUVs
              </p>
            </CardContent>
          </Card>
          <Card className="grid grid-rows-2 items-center bg-transparent">
            <CardHeader>
              <CardTitle className="text-primary  uppercase">
                Cars, Trucks, SUVs
              </CardTitle>
              <CardDescription>Silicon Tires Wash</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                <span className="text-white text-2xl mr-2 font-bold">
                  ${services.extras.wash_silicon_tires}
                </span>
                Cars + Trucks + SUVs
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
