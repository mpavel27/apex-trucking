import AOS from "aos";
import "aos/dist/aos.css";

export default ({ app }) => {
  app.AOS = new AOS.init({
    disable: window.innerWidth < 640,
    easing: 'ease-in-out-cubic',
    duration: 400,
    once: true
  });
};
