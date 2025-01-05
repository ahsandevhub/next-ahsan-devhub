import { GoDesktopDownload, GoDeviceCameraVideo } from "react-icons/go";
import { IoVideocamOutline } from "react-icons/io5";

const CourseDetails = () => {
  return (
    <div className="relative flex h-[calc(100vh-65px)] w-full items-center justify-center border-y border-y-gray-700 bg-slate-900 py-[100px]">
      <div className="container">
        <h1 className="mb-3 text-center text-3xl font-bold text-white">
          এক নজরে{" "}
          <span className="text-[#07A8ED]">ফ্রন্ট-এন্ড ওয়েব ডেভেলপমেন্ট</span>{" "}
          কোর্স
        </h1>
        <p className="text-center text-lg font-semibold text-slate-300">
          এই কোর্সে যা যা পাচ্ছেন
        </p>
        <div className="cards_container mx-auto mt-8 w-[90%] rounded-xl border border-gray-700 bg-slate-800 p-5">
          <div className="grid grid-cols-3">
            <div className="item border-b border-r border-gray-700 p-8">
              <div className="content flex flex-col items-center gap-2 text-white">
                <div className="icon">
                  <GoDeviceCameraVideo className="text-5xl text-[#07A8ED]" />
                </div>
                <h3 className="title">25 টি মডিউল 200+ ভিডিও</h3>
                <p className="desc text-center font-[300] text-slate-300">
                  ধাপে ধাপে শেখার জন্য কোর্সটি 15টি মডিউলে ও 200+ ভিডিওতে ভাগ
                  করে সাজানো হয়েছে এবং ডকুমেন্টেশন ধরে ধরে শিখানো হয়েছে।
                </p>
              </div>
            </div>
            <div className="item border-b border-r border-gray-700 p-6">
              <div className="content flex flex-col items-center gap-2 text-white">
                <div className="icon">
                  <GoDesktopDownload className="text-5xl text-[#07A8ED]" />
                </div>
                <h3 className="title">25 টি মডিউল 200+ ভিডিও</h3>
                <p className="desc text-center font-[300] text-slate-300">
                  ধাপে ধাপে শেখার জন্য কোর্সটি 15টি মডিউলে ও 200+ ভিডিওতে ভাগ
                  করে সাজানো হয়েছে এবং ডকুমেন্টেশন ধরে ধরে শিখানো হয়েছে।
                </p>
              </div>
            </div>
            <div className="item border-b border-gray-700 p-6">
              <div className="content flex flex-col items-center gap-2 text-white">
                <div className="icon">
                  <IoVideocamOutline className="text-5xl text-[#07A8ED]" />
                </div>
                <h3 className="title">25 টি মডিউল 200+ ভিডিও</h3>
                <p className="desc text-center font-[300] text-slate-300">
                  ধাপে ধাপে শেখার জন্য কোর্সটি 15টি মডিউলে ও 200+ ভিডিওতে ভাগ
                  করে সাজানো হয়েছে এবং ডকুমেন্টেশন ধরে ধরে শিখানো হয়েছে।
                </p>
              </div>
            </div>
            <div className="item border-r border-gray-700 p-6">
              <div className="content flex flex-col items-center gap-2 text-white">
                <div className="icon">
                  <IoVideocamOutline className="text-5xl text-[#07A8ED]" />
                </div>
                <h3 className="title">25 টি মডিউল 200+ ভিডিও</h3>
                <p className="desc text-center font-[300] text-slate-300">
                  ধাপে ধাপে শেখার জন্য কোর্সটি 15টি মডিউলে ও 200+ ভিডিওতে ভাগ
                  করে সাজানো হয়েছে এবং ডকুমেন্টেশন ধরে ধরে শিখানো হয়েছে।
                </p>
              </div>
            </div>
            <div className="item border-r border-gray-700 p-6">
              <div className="content flex flex-col items-center gap-2 text-white">
                <div className="icon">
                  <IoVideocamOutline className="text-5xl text-[#07A8ED]" />
                </div>
                <h3 className="title">25 টি মডিউল 200+ ভিডিও</h3>
                <p className="desc text-center font-[300] text-slate-300">
                  ধাপে ধাপে শেখার জন্য কোর্সটি 15টি মডিউলে ও 200+ ভিডিওতে ভাগ
                  করে সাজানো হয়েছে এবং ডকুমেন্টেশন ধরে ধরে শিখানো হয়েছে।
                </p>
              </div>
            </div>
            <div className="item border-gray-700 p-6">
              <div className="content flex flex-col items-center gap-2 text-white">
                <div className="icon">
                  <IoVideocamOutline className="text-5xl text-[#07A8ED]" />
                </div>
                <h3 className="title">25 টি মডিউল 200+ ভিডিও</h3>
                <p className="desc text-center font-[300] text-slate-300">
                  ধাপে ধাপে শেখার জন্য কোর্সটি 15টি মডিউলে ও 200+ ভিডিওতে ভাগ
                  করে সাজানো হয়েছে এবং ডকুমেন্টেশন ধরে ধরে শিখানো হয়েছে।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
