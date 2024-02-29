import Image, { type StaticImageData } from "next/image";
import fac from "@/assets/team/fac.svg";
import adv from "@/assets/team/SivasankaranSir.jpeg"
import cord from "@/assets/team/RajeevSir.jpeg"
import chair from "@/assets/team/Hitesha.jpeg"
import vchair from "@/assets/team/Rudra.jpeg"
import sec from "@/assets/team/Aatesh.png"

export default function Team() {
  return (
    <div id="team" className="p-[5%]">
      <p className="text-center text-3xl font-bold text-white">OUR TEAM</p>
      {/* <p className="pb-2 pt-6 text-center text-lg text-[#BCCACA]">
        Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups.
      </p> */}
      <div className="mx-auto mb-4 mt-10 flex max-w-xs flex-col items-center border-[0.2px] border-[#505050] px-4 py-6 shadow-md shadow-[#BACACA]">
        <Image
          src={adv}
          alt="fac"
          width={100}
          height={100}
          className="pb-4"
        />
        <p className="pb-4 text-xl font-medium text-white">Dr. Sivasankaran K</p>
        <p className="text-center text-[#BCCACA]">
        Chapter Advisor
        </p>
      </div>
      <div className="mx-auto mb-4 mt-10 flex max-w-xs flex-col items-center border-[0.5px] border-[#505050] px-4 py-6 shadow-md shadow-[#BACACA]">
        <Image
          src={cord}
          alt="fac"
          width={100}
          height={100}
          className="pb-4"
        />
        <p className="pb-4 text-xl font-medium text-white">Dr. Rajeev Pankaj</p>
        <p className="text-center text-[#BCCACA]">
          Chapter Advisor
        </p>
      </div>
      <div className="grid grid-cols-6">
        <div className="col-span-6 mx-auto mb-4 mt-10 flex max-w-xs flex-col items-center border-[0.5px] border-[#505050] px-20 py-6 shadow-md shadow-[#BACACA] sm:col-span-3 md:col-span-2">
          <Image
            src={chair}
            alt="fac"
            width={100}
            height={100}
            className="pb-4 mt-4"
          />
          <p className="mt-4 pb-4 text-center text-xl font-medium text-white">Hitesha Thakur</p>
          <p className="text-center text-[#BCCACA]">
            Chairperson
          </p>
        </div>
        <div className="col-span-6 mx-auto mb-4 mt-10 flex max-w-xs flex-col items-center justify-center border-[0.5px] border-[#505050] px-20 py-6 shadow-md shadow-[#BACACA] sm:col-span-3 md:col-span-2">
          <Image
            src={vchair}
            alt="fac"
            width={100}
            height={100}
            className="pb-4"
          />
          <p className="pb-4 text-center text-xl font-medium text-white">Rudrajyoti Dasgupta</p>
          <p className="text-center text-[#BCCACA]">
            Vice Chair
          </p>
        </div>
        <div className="col-span-6 mx-auto mb-4 mt-10 flex max-w-xs flex-col items-center border-[0.5px] border-[#505050] px-20 py-6 shadow-md shadow-[#BACACA] sm:col-span-3 md:col-span-2">
          <Image
            src={sec}
            alt="fac"
            width={100}
            height={100}
            className="pb-4 mt-4"
          />
          <p className="pb-4 text-center mt-4 text-xl font-medium text-white">Aathesh Vigram</p>
          <p className="text-center text-[#BCCACA]">
            Secretary
          </p>
        </div>
        <div className="col-span-6 mx-auto mb-4 mt-10 flex max-w-xs flex-col items-center border-[0.5px] border-[#505050] px-4 py-6 shadow-md shadow-[#BACACA] sm:col-span-3 md:col-span-2">
          <Image
            src={fac as StaticImageData}
            alt="fac"
            width={100}
            height={100}
            className="pb-4"
          />
          <p className="pb-4 text-xl font-medium text-white">JOHN DOE</p>
          <p className="text-center text-[#BCCACA]">
            We are always one step ahead; we challenge convention and push the
            boundaries of what can be achieved
          </p>
        </div>
        <div className="col-span-6 mx-auto mb-4 mt-10 flex max-w-xs flex-col items-center border-[0.5px] border-[#505050] px-4 py-6 shadow-md shadow-[#BACACA] sm:col-span-3 md:col-span-2">
          <Image
            src={fac as StaticImageData}
            alt="fac"
            width={100}
            height={100}
            className="pb-4"
          />
          <p className="pb-4 text-xl font-medium text-white">JOHN DOE</p>
          <p className="text-center text-[#BCCACA]">
            We are always one step ahead; we challenge convention and push the
            boundaries of what can be achieved
          </p>
        </div>
        <div className="col-span-6 mx-auto mb-4 mt-10 flex max-w-xs flex-col items-center border-[0.5px] border-[#505050] px-4 py-6 shadow-md shadow-[#BACACA] sm:col-span-3 md:col-span-2">
          <Image
            src={fac as StaticImageData}
            alt="fac"
            width={100}
            height={100}
            className="pb-4"
          />
          <p className="pb-4 text-xl font-medium text-white">JOHN DOE</p>
          <p className="text-center text-[#BCCACA]">
            We are always one step ahead; we challenge convention and push the
            boundaries of what can be achieved
          </p>
        </div>
        <div className="col-span-6 mx-auto mb-4 mt-10 flex max-w-xs flex-col items-center border-[0.5px] border-[#505050] px-4 py-6 shadow-md shadow-[#BACACA] sm:col-span-3 md:col-span-2">
          <Image
            src={fac as StaticImageData}
            alt="fac"
            width={100}
            height={100}
            className="pb-4"
          />
          <p className="pb-4 text-xl font-medium text-white">JOHN DOE</p>
          <p className="text-center text-[#BCCACA]">
            We are always one step ahead; we challenge convention and push the
            boundaries of what can be achieved
          </p>
        </div>
        <div className="col-span-6 mx-auto mb-4 mt-10 flex max-w-xs flex-col items-center border-[0.5px] border-[#505050] px-4 py-6 shadow-md shadow-[#BACACA] sm:col-span-3 md:col-span-2">
          <Image
            src={fac as StaticImageData}
            alt="fac"
            width={100}
            height={100}
            className="pb-4"
          />
          <p className="pb-4 text-xl font-medium text-white">JOHN DOE</p>
          <p className="text-center text-[#BCCACA]">
            We are always one step ahead; we challenge convention and push the
            boundaries of what can be achieved
          </p>
        </div>
        <div className="col-span-6 mx-auto mb-4 mt-10 flex max-w-xs flex-col items-center border-[0.5px] border-[#505050] px-4 py-6 shadow-md shadow-[#BACACA] sm:col-span-3 md:col-span-2">
          <Image
            src={fac as StaticImageData}
            alt="fac"
            width={100}
            height={100}
            className="pb-4"
          />
          <p className="pb-4 text-xl font-medium text-white">JOHN DOE</p>
          <p className="text-center text-[#BCCACA]">
            We are always one step ahead; we challenge convention and push the
            boundaries of what can be achieved
          </p>
        </div>
      </div>
    </div>
  );
}
