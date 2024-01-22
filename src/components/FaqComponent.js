import Faq from "react-faq-component";
import data from "./dataFaq";
import TitleFaq from "./TitleFaq";

const styles = {
  bgColor: "#E3D5CB",
  titleTextColor: "#804216",
  rowTitleColor: "#804216",
  rowContentColor: "#A0836E",
  arrowColor: "#804216",
  transitionDuration: "1s",
  timingFunc: "ease",
};

const config = {
  animate: true,
  arrowIcon: "+",
  tabFocus: true,
};
function FaqComponent() {
  return (
    <section className="bg-lightBrown p-10 md:px-40">
      <TitleFaq
        titleColor="#804216"
        bgColor="#804216"
        title="Frequently Asked Questions"
      />

      <Faq data={data} styles={styles} config={config} />
    </section>
  );
}

export default FaqComponent;
