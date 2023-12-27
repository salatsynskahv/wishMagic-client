'use client'
import {useSelector} from "react-redux";
import WishlistComponent from "@/app/wishlists/components/wishlistComponent";
import Wishlist from "@/types/Wishlist";

export default function Wishlists() {

    // @ts-ignore
    const wishlists = useSelector((state) => state.wishlist);
    console.log(wishlists)

    if(!wishlists.wishlists ||  wishlists.wishlists?.length < 1) {
        return null;
    }

    return (<div className="mx-6 my-10 grid grid-cols-4 gap-1">
        {wishlists && wishlists?.wishlists.map((wishlist: Wishlist) => <WishlistComponent wishlist={wishlist}/>)}
    </div>
    )
}
