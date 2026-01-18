import React from "react";
import Image from "next/image";

const PromoBanner = () => {
  return (
    <section className="overflow-hidden py-20">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        {/* <!-- promo banner big --> */}
        <div className="relative z-1 overflow-hidden rounded-lg bg-[#F5F5F7] py-12.5 lg:py-17.5 xl:py-22.5 px-4 sm:px-7.5 lg:px-14 xl:px-19 mb-7.5">
          <div className="max-w-[550px] w-full">
            <span className="block font-medium text-xl text-dark mb-3">
              GRIND TECH SOCIAL MEDIA
            </span>

            <h2 className="font-bold text-xl lg:text-heading-4 xl:text-heading-3 text-dark mb-5">
              TIKTOK / WHATSAPP / FACEBOOK TECH SUPPORT
            </h2>

            <p>
              Power Your Work with Genuine Software
Get authentic software licenses direct from Microsoft and trusted global brands. With Company Grind Tech, you also get expert troubleshooting, bug fixes, and compatibility support—ensuring seamless performance and peace of mind.
            </p>
            <li>whatsapp -09163078252</li>
            <li>tiktok - grind tech archetic softwares</li>

            <a
              href="https://www.tiktok.com/@grindtech0"
              className="inline-flex font-medium text-custom-sm text-white bg-blue py-[11px] px-9.5 rounded-md ease-out duration-200 hover:bg-blue-dark mt-7.5"
            >
              INQUIRE NOW
            </a>
          </div>

          <Image
            src="/images/promo/support 1.jpg"
            alt="promo img"
            className="absolute bottom-0 right-4 lg:right-26 -z-1"
            width={274}
            height={350}
          />
        </div>

        <div className="grid gap-7.5 grid-cols-1 lg:grid-cols-2">
          {/* <!-- promo banner small --> */}
          <div className="relative z-1 overflow-hidden rounded-lg bg-[#DBF4F3] py-10 xl:py-16 px-4 sm:px-7.5 xl:px-10">
            <Image
              src="/images/promo/techsupport png.png"
              alt="promo img"
              className="absolute top-1/2 -translate-y-1/2 left-3 sm:left-10 -z-1"
              width={241}
              height={241}
            />

            <div className="text-right">
              <span className="block text-lg text-blue mb-1.5">
                Can do fix software and hardware remotely
              </span>

              <h2 className="font-bold text-xl lg:text-heading-4 text-blue mb-2.5">
                I.T SUPPORT ONLINE
              </h2>

              <p className="font-semibold text-custom-1 text-teal">
                24/7
              </p>

              <a
                href="https://www.facebook.com/profile.php?id=61562873491047
"
                className="inline-flex font-medium text-custom-sm text-white bg-teal py-2.5 px-8.5 rounded-md ease-out duration-200 hover:bg-teal-dark mt-9"
              >
                get support on facebook
              </a>
            </div>
          </div>

          {/* <!-- promo banner small --> */}
          <div className="relative z-1 overflow-hidden rounded-lg bg-[#FFECE1] py-10 xl:py-16 px-4 sm:px-7.5 xl:px-10">
            <Image
              src="/images/promo/anydesk logo.png"
              alt="promo img"
              className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-8.5 -z-1"
              width={200}
              height={200}
            />

            <div>
              <span className="block text-lg text-dark mb-1.5">
                remote online anywhere anytime
              </span>

              <h2 className="font-bold text-xl lg:text-heading-4 text-dark mb-2.5">
                via <span className="text-orange">Anydesk</span> app
              </h2>

              <p className="max-w-[285px] text-custom-sm">
                 free remote app for mac and windows
              </p>

              <a
                href="https://anydesk.com/en/downloads/windows"
                className="inline-flex font-medium text-custom-sm text-white bg-orange py-2.5 px-8.5 rounded-md ease-out duration-200 hover:bg-orange-dark mt-7.5"
              >
                Download here
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
