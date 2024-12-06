import ArrowRight from "@/assets/icons/arrow-right.svg";

export default function Bar() {
  return (
    <div className="bg-black text-white py-[14px]">
      <div className="flex text-center items-center flex-1 justify-center gap-x-[7px]">
        <span className="gap-[8px] flex">
          <span className="hidden lg:inline-block text-sm text-white/60">
            This page is included in a free SaaS Website Kit.
          </span>
          <span className="text-sm">View the complete Kit</span>
        </span>
        <div className="w-4 h-4 flex justify-center items-center">
          <ArrowRight className="w-[10px] h-2" />
        </div>
      </div>
    </div>
  );
}
