import Wishlist from "@/types/Wishlist";
import React, {useEffect, useState} from "react";
import {getAllWishesByWishlistId} from "@/components/services/api/WishService";
import {Wish} from "@/types/Wish";
import {WishItemCard} from "@/components/wishlist/wishItemCard";

const WishlistComponent = ({wishlist}: { wishlist: Wishlist }) => {

    return (
        <>
            {
                wishlist.wishes && wishlist.wishes.map(
                    wish =>
                        <WishItemCard wishItem={wish}></WishItemCard>
                )
            }
        </>
    );
};

export default WishlistComponent;