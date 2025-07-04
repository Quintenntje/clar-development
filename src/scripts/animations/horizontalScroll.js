import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const $body = document.querySelector("body");

const $mouseContainer = document.querySelector("[data-animation='mouse']");
const $mouseball = $mouseContainer.querySelector(
  "[data-animation-child='ball']"
);

const $horizontalScrollTitle = document.querySelector(
  '[data-animation="horizontal-scroll-title"]'
);

export default function initHorizontalScrollAnimation() {
  const $scrollContainer = document.querySelectorAll(
    '[data-animation="horizontal-scroll"]'
  );

  $scrollContainer.forEach(($container) => {
    const $scrollItems = $container.querySelectorAll(
      '[data-animation-child="horizontal-scroll"]'
    );

    const ContainerMovement = gsap.to($container, {
      x: () => `-${$container.scrollWidth + $container.offsetWidth}px`,
      ease: "none",
      scrollTrigger: {
        trigger: $container.parentElement,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        start: "top top",
        end: () => `+=${$container.scrollHeight}`,

        onLeaveBack: () => {
          gsap.to($body, {
            backgroundColor: $container.getAttribute("data-color-bg"),
          });
          gsap.to($container, {
            color: $container.getAttribute("data-color-text"),
          });
          gsap.to($horizontalScrollTitle, {
            color: $container.getAttribute("data-color-text"),
          });

          gsap.to($mouseball, {
            backgroundColor: $container.getAttribute("data-mouse-color"),
          });

          gsap.to($container.parentElement, {
            "--gradient-color": $container.getAttribute("data-color-bg"),
          });
        },
      },
    });

    $scrollItems.forEach(($item) => {
      ScrollTrigger.create({
        trigger: $item,
        containerAnimation: ContainerMovement,
        scrub: true,
        start: "left 18%",
        end: "right 10%",

        onUpdate: (self) => {
          changeOpacity(self);
        },

        onLeaveBack: (self) => {
          changeOpacity(self);
          runColorAnimation();
        },

        onEnterBack: (self) => {
          runColorAnimation();
        },

        onEnter: (self) => {
          runColorAnimation();
        },
      });

      function changeOpacity(self) {
        const opacity = 1 - self.progress * 1.5;

        gsap.to($item, {
          opacity: opacity,
        });
      }

      function runColorAnimation() {
        gsap.to($body, {
          backgroundColor: $item.getAttribute("data-color-bg"),
        });
        gsap.to($container, {
          color: $item.getAttribute("data-color-text"),
        });

        gsap.to($horizontalScrollTitle, {
          color: $item.getAttribute("data-color-text"),
        });

        gsap.to($mouseball, {
          backgroundColor: $item.getAttribute("data-mouse-color"),
        });

        gsap.to($container.parentElement, {
          "--gradient-color": $item.getAttribute("data-color-bg"),
        });
      }
    });
  });
}
