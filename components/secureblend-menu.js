import { useCallback, useEffect } from "react";

const SecureblendMenu = ({ onClose }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onFrameButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "end", behavior: "smooth" });
    }
  }, []);

  const onFrameButton1Click = useCallback(() => {
    window.open("https://parkingswing.vercel.app");
  }, []);

  return (
    <div
      className="rounded-3xs bg-gray-200 w-[270px] h-[313px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0] max-w-full max-h-full"
      data-animate-on-scroll
    >
      <div
        className="absolute top-[18px] left-[225px] w-[32.6px] h-7 cursor-pointer"
        onClick={onClose}
      >
        <div className="absolute top-[25.7px] left-[0px] rounded-8xs bg-white w-10 h-[3px] overflow-hidden [transform:_rotate(-40deg)] [transform-origin:0_0]" />
        <div className="absolute top-[0px] left-[1.9px] rounded-8xs bg-white w-10 h-[3px] overflow-hidden [transform:_rotate(40deg)] [transform-origin:0_0]" />
      </div>
      <button
        className="cursor-pointer [border:none] p-0 bg-gray-100 absolute top-[118px] left-[55px] rounded-xl shadow-[0px_2px_4px_2px_#01f9f9] w-[161px] h-[26px] overflow-hidden"
        onClick={onFrameButtonClick}
      >
        <div className="absolute top-[-3px] left-[12px] text-lg font-michroma text-white text-center inline-block w-[136px] h-8">
          Community
        </div>
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-gray-100 absolute top-[192px] left-[55px] rounded-xl shadow-[0px_2px_4px_2px_#01f9f9] w-[161px] h-[26px] overflow-hidden"
        onClick={onFrameButton1Click}
      >
        <div className="absolute top-[-3px] left-[12px] text-lg font-michroma text-white text-center inline-block w-[136px] h-8">
          Developer
        </div>
      </button>
    </div>
  );
};

export default SecureblendMenu;
