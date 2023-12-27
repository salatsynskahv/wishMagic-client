import {Wish} from "@/types/Wish";

export const WishItemCard = ({ wishItem }: { wishItem: Wish }) => {
    return (
        <div className="p-4 bg-white rounded-xl flex-col justify-center border-2 border-b-neutral-100 items-center gap-14 inline-flex">
            <div className="w-[16rem] h-[16rem] bg-zinc-300 rounded-lg">
                <img src={wishItem.image} alt=""/>
            </div>
            <div className="self-stretch justify-start items-center gap-[30px] inline-flex">
                <div className="flex-col justify-center items-start gap-0.5 inline-flex">
                    <div className="text-black text-lg font-normal font-['Inter']">{wishItem.price || "No price"}</div>
                    <div className="text-black text-[18px] font-bold font-['Inter']">{wishItem.name}</div>
                </div>
                <div className="justify-end items-center gap-1 flex">
                    <div className="text-black text-xl font-normal font-['Inter']">Likes </div>
                </div>
            </div>
        </div>
    )
}