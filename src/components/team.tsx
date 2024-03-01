import Image, { type StaticImageData } from "next/image";
import fac from "@/assets/team/fac.svg";
import adv from "@/assets/team/SivasankaranSir.jpeg"
import cord from "@/assets/team/RajeevSir.jpeg"
import chair from "@/assets/team/Hitesha.jpeg"
import vchair from "@/assets/team/Rudra.jpeg"
import sec from "@/assets/team/Aatesh.png"
import fin from "@/assets/team/Chamoli.jpeg"
import pr from "@/assets/team/Abhay.jpeg"
import design from "@/assets/team/Manas.jpeg"
import outreach from "@/assets/team/Advait.jpg"
import hr from "@/assets/team/Vanshika.jpeg"

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
        <div className="col-span-6 mx-auto mb-4 mt-10 flex max-w-xs flex-col items-center border-[0.5px] border-[#505050] px-4 w-[100%] py-6 shadow-md shadow-[#BACACA] sm:col-span-3 md:col-span-2">
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
        <div className="col-span-6 mx-auto mb-4 mt-10 flex max-w-xs flex-col items-center justify-center border-[0.5px] border-[#505050] px-4 w-[100%] py-6 shadow-md shadow-[#BACACA] sm:col-span-3 md:col-span-2">
          <Image
            src={vchair}
            alt="fac"
            width={100}
            height={100}
            className="pb-4 mt-4"
          />
          <p className="pb-4 text-center text-xl font-medium text-white">Rudrajyoti Dasgupta</p>
          <p className="text-center text-[#BCCACA]">
            Vice Chair
          </p>
        </div>
        <div className="col-span-6 mx-auto mb-4 mt-10 flex max-w-xs flex-col items-center border-[0.5px] border-[#505050] px-4 w-[100%] py-6 shadow-md shadow-[#BACACA] sm:col-span-3 md:col-span-2">
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
        <div className="col-span-6 mx-auto mb-4 mt-10 flex max-w-xs flex-col items-center border-[0.5px] border-[#505050] px-4 w-[100%] py-6 shadow-md shadow-[#BACACA] sm:col-span-3 md:col-span-2">
          <Image
            src={fin}
            alt="fac"
            width={100}
            height={100}
            className="pb-4 mt-4"
          />
          <p className="pb-4 text-center mt-4 text-xl font-medium text-white">Adhiraj Singh </p>
          <p className="text-center text-[#BCCACA]">
            Co Secretary
          </p>
        </div>
        <div className="col-span-6 mx-auto mb-4 mt-10 flex max-w-xs flex-col items-center border-[0.5px] border-[#505050] px-4 w-[100%] py-6 shadow-md shadow-[#BACACA] sm:col-span-3 md:col-span-2">
          <Image
            src={fin}
            alt="fac"
            width={100}
            height={100}
            className="pb-4 mt-4"
          />
          <p className="pb-4 text-center mt-4 text-xl font-medium text-white">Siddhant Chamoli</p>
          <p className="text-center text-[#BCCACA]">
            Finance Head
          </p>
        </div>
        <div className="col-span-6 mx-auto mb-4 mt-10 flex max-w-xs flex-col items-center border-[0.5px] border-[#505050] px-4 w-[100%] py-6 shadow-md shadow-[#BACACA] sm:col-span-3 md:col-span-2">
          <Image
            src={pr}
            alt="fac"
            width={100}
            height={100}
            className="pb-4 mt-4"
          />
          <p className="pb-4 text-center mt-4 text-xl font-medium text-white">Abhay Varma  P K</p>
          <p className="text-center text-[#BCCACA]">
            Pr and Marketing Head
          </p>
        </div>
        <div className="col-span-6 mx-auto mb-4 mt-10 flex max-w-xs flex-col items-center border-[0.5px] border-[#505050] px-4 w-[100%] py-6 shadow-md shadow-[#BACACA] sm:col-span-3 md:col-span-2">
          <Image
            src={design}
            alt="fac"
            width={100}
            height={100}
            className="pb-4 mt-4"
          />
          <p className="pb-4 text-xl text-center mt-4 font-medium text-white">Manas Lohe</p>
          <p className="text-center text-[#BCCACA]">
            Design Head
          </p>
        </div>
        <div className="col-span-6 mx-auto mb-4 mt-10 flex max-w-xs flex-col items-center border-[0.5px] border-[#505050] px-4 w-[100%] py-6 shadow-md shadow-[#BACACA] sm:col-span-3 md:col-span-2">
          <Image
            src={outreach}
            alt="fac"
            width={100}
            height={100}
            className="pb-4 mt-4"
          />
          <p className="pb-4 text-xl text-center mt-4 font-medium text-white">Advait Iyer</p>
          <p className="text-center text-[#BCCACA]">
            Outreach Head
          </p>
        </div>
        <div className="col-span-6 mx-auto mb-4 mt-10 flex max-w-xs flex-col items-center border-[0.5px] border-[#505050] px-4 w-[100%] py-6 shadow-md shadow-[#BACACA] sm:col-span-3 md:col-span-2">
          <Image
            src={hr}
            alt="fac"
            width={100}
            height={100}
            className="pb-4 mt-4"
          />
          <p className="pb-4 text-xl text-center mt-4 font-medium text-white">Vanshika Sharma</p>
          <p className="text-center text-[#BCCACA]">
            HR Head
          </p>
        </div>
      </div>
    </div>
  );
}
