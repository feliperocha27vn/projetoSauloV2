import GradientWrapper from "../GradientWrapper";
import LogoClothing from "../../assets/imgs/logo.png";
import BarMenu from "../MenuBar";

export default function InicialPage() {
  return (
    <GradientWrapper>
      <div className="flex justify-end h-full">
        <img src={LogoClothing} className="w-[600px] h-[600px]" />
      </div>
      <BarMenu />
    </GradientWrapper>
  );
}
