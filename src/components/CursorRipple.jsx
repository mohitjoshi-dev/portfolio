import { useEffect } from "react";

function CursorRipple() {
  useEffect(() => {
    const ripple = document.createElement("div");

    ripple.style.position = "fixed";
    ripple.style.width = "30px";
    ripple.style.height = "30px";
    ripple.style.border = "2px solid #a855f7";
    ripple.style.borderRadius = "999px";
    ripple.style.pointerEvents = "none";
    ripple.style.transform = "translate(-50%, -50%)";
    ripple.style.transition = "all 0.5s ease-out";
    ripple.style.opacity = "0";

    document.body.appendChild(ripple);

    const move = (e) => {
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;

      ripple.animate(
        [
          {
            width: "20px",
            height: "20px",
            opacity: 0.8,
          },
          {
            width: "80px",
            height: "80px",
            opacity: 0,
          },
        ],
        {
          duration: 600,
          easing: "ease-out",
        }
      );
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
      ripple.remove();
    };
  }, []);

  return null;
}

export default CursorRipple;