import editorsPick1 from '../assets/EditorsPickList/editors-pick-1.jpg';
import editorsPick2 from '../assets/EditorsPickList/editors-pick-2.jpg';
import editorsPick3 from '../assets/EditorsPickList/editors-pick-3.jpg';
import editorsPick4 from '../assets/EditorsPickList/editors-pick-4.jpg';

const cards = [
  { img: editorsPick1, label: 'MEN' },
  { img: editorsPick2, label: 'WOMEN' },
  { img: editorsPick3, label: 'ACCESSORIES' },
  { img: editorsPick4, label: 'KIDS' },
];

export default function EditorsPick() {
  return (
    <section className="w-[414px] h-[1850px] bg-[#FAFAFA] flex flex-col items-center px-0 py-20 gap-12 mx-auto">
      {/* Başlık */}
      <div className="flex flex-col items-center text-center gap-2">
        <h2 className="text-[24px] font-bold leading-8 tracking-[0.1px] text-[#252B42]">
          EDITOR’S PICK
        </h2>
        <p className="text-[14px] font-normal leading-5 tracking-[0.2px] text-[#737373] w-[193px]">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Kartlar */}
      <div className="flex flex-col items-center gap-[30px]">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`relative w-[325px] ${
              index < 2 ? 'h-[500px]' : 'h-[242px]'
            } bg-white overflow-hidden`}
          >
            <img
              src={card.img}
              alt={card.label}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-25"></div>
            <div
              className="absolute bg-white px-6 py-3 flex items-center justify-center"
              style={
                index === 0
                  ? { width: '170px', height: '48px', top: '426px', left: '31px' }
                  : index === 1
                  ? { width: '136px', height: '48px', top: '434px', left: '63.5px' }
                  : index === 2
                  ? { width: '170px', height: '48px', top: '171px', left: '14px' }
                  : { width: '120px', height: '48px', top: '176px', left: '18px' }
              }
            >
              <h2 className="text-[16px] font-bold leading-6 tracking-[0.1px] text-[#252B42]">
                {card.label}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
