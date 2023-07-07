import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";

const ChatBot = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  // changing the showTopBtn state whenever a scroll event happens
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1800) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  // fucntion to help scroll to top smoothly
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="relative">
      {showTopBtn && (
        <button>
          <Image
            alt="chat u"
            src="/assets/icons/whatsapp.png"
            height={50}
            width={150}
            className="fixed bottom-0 right-0 chatIcon-style z-20"
            loading="lazy"
          />
        </button>
      )}
    </div>
  );
};

export default ChatBot;
