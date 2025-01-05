import Image from "next/image";
import Link from "next/link";
import { TailwindBackground } from "../common/TailwindBackground";

const Hero = () => {
  return (
    <div className="bg-pattern relative h-[calc(100vh-65px)] w-full overflow-hidden">
      <TailwindBackground />
      <div className="container absolute left-[50%] top-[50%] grid -translate-x-[50%] -translate-y-[50%] grid-cols-2 gap-[50px]">
        <div className="left_text flex flex-col gap-2">
          <div className="icons mb-4 flex">
            <Image
              className="rounded-full bg-slate-100 p-1 ring-1 ring-sky-800"
              src="/icons/html-5.png"
              alt="icon"
              width={45}
              height={45}
            />
            <Image
              className="-ml-[10px] rounded-full bg-slate-100 p-1 ring-1 ring-sky-800"
              src="/icons/css-3.png"
              alt="icon"
              width={45}
              height={45}
            />
            <Image
              className="-ml-[10px] rounded-full bg-slate-100 p-1 ring-1 ring-sky-800"
              src="/icons/js.png"
              alt="icon"
              width={45}
              height={45}
            />
            <Image
              className="-ml-[10px] rounded-full bg-slate-100 p-1 ring-1 ring-sky-800"
              src="/icons/tailwind.png"
              alt="icon"
              width={45}
              height={45}
            />
            <Image
              className="-ml-[10px] rounded-full bg-slate-100 p-1 ring-1 ring-sky-800"
              src="/icons/react.png"
              alt="icon"
              width={45}
              height={45}
            />
          </div>
          <h2 className="sm_title font-semibold text-[#FFC700]">
            বাংলা কমপ্লিট ফ্রন্ট-এন্ড ওয়েব ডেভেলপমেন্ট কোর্স
          </h2>
          <h1 className="lg_title text-5xl font-bold text-white">
            <span className="text-[#07A8ED]">ফ্রন্ট-এন্ড</span>{" "}
            <span>ওয়েব ডেভেলপমেন্ট</span>
          </h1>
          <p className="course_desc text-lg text-slate-300">
            আপনি যদি নিজেকে একজন দক্ষ ফ্রন্ট-এন্ড ওয়েব ডেভেলপার হিসেবে অনলাইন
            দুনিয়ায় প্রতিষ্ঠিত করতে চান, তাহলে এই কোর্সটি আপনার জন্য। এই কোর্সে
            আপনাকে একদম বেসিক HTML থেকে শুরু করে এডভান্সড React.js পর্যন্ত
            শেখানো হবে!
          </p>
          <button type="button" className="mt-5 text-start">
            <Link
              href="/purchase"
              className="rounded-full bg-[#07A8ED] px-5 py-1 text-lg text-white transition-all hover:bg-[#07a8edc9]"
            >
              এনরোল করুন
            </Link>
          </button>
        </div>
        <div className="right_video aspect-video overflow-hidden rounded-xl border-4 border-sky-500 bg-slate-800">
          <iframe
            src="https://www.youtube.com/embed/AA2c9UvX7CU"
            title="Complete Beginner Web Development Series in Bengali by WebDev With Ahsan"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="h-full w-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Hero;
