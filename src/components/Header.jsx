export default function Header() {
  return (
    <header className="c_pad py-[24px] md:py-[30px] w-full font-cheaps flex justify-between items-center">
      <div className="menu p-[2px]">
        <span className="w-8 h-[3px] block mb-[12px] bg-black rounded-lg"></span>
        <span className="w-10 h-[3px] block mb-[12px] bg-black  rounded-lg"></span>
        <span className="w-6 h-[3px] block bg-black rounded-lg"></span>
      </div>
      <div className="logo flex items-center gap-1 md:gap-2">
        <img src="./logo.png" alt="logo" />
        <div className="font-30">
          DESIGN <br />
          HUB
        </div>
      </div>
      <div className="font-46 self-end hidden md:block">HOME</div>
    </header>
  );
}
