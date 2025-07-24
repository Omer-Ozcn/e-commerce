import { Link } from "react-router-dom";

export default function EditorsPick() {
  return (
    <main className="px-10 pt-20 pb-10 font-[Montserrat]">
      <div className="text-center mb-10">
        <h3 className="font-bold text-2xl text-[#252B42]">EDITOR'S PICK</h3>
        <p className="text-sm text-[#737373]">
          Problems trying to resolve <br className="lg:hidden" /> the conflict between
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
        <div className="w-[325px] h-[500px] bg-[url(/EditorsPick/editors-pick-1.jpg)] bg-cover bg-center flex flex-col justify-end md:w-[510px]">
          <Link
            to="/shop/men"
            className="m-7 w-[170px] h-12 bg-white flex items-center justify-center font-bold text-[#252B42]"
          >
            MEN
          </Link>
        </div>

        <div className="flex flex-col gap-6 md:flex-row">
          <div className="w-[325px] h-[500px] bg-[url(/EditorsPick/editors-pick-2.jpg)] bg-cover bg-center flex flex-col justify-end md:w-[240px]">
            <Link
              to="/shop/women"
              className="m-7 w-[170px] h-12 bg-white flex items-center justify-center font-bold text-[#252B42]"
            >
              WOMEN
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <div className="w-[325px] h-[242px] bg-[url(/EditorsPick/editors-pick-3.jpg)] bg-cover bg-center flex flex-col justify-end md:w-[240px]">
              <Link
                to="/shop/accessories"
                className="m-7 w-[170px] h-12 bg-white flex items-center justify-center font-bold text-[#252B42]"
              >
                ACCESSORIES
              </Link>
            </div>

            <div className="w-[325px] h-[242px] bg-[url(/EditorsPick/editors-pick-4.jpg)] bg-cover bg-center flex flex-col justify-end md:w-[240px]">
              <Link
                to="/shop/kids"
                className="m-7 w-[170px] h-12 bg-white flex items-center justify-center font-bold text-[#252B42]"
              >
                KIDS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
