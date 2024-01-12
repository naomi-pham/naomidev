"use client";

import { useRouter } from "next/navigation";
import { IconArrow } from "../Icons";

const GoBackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-2 font-black uppercase tracking-wider hover:text-accent-500"
    >
      <div>
        <i>
          <IconArrow size={20} />
        </i>
      </div>
      Go back
    </button>
  );
};

export default GoBackButton;
