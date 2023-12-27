import Wishlist from "@/types/Wishlist";
import React, {useEffect, useState} from "react";
import {getAllWishesByWishlistId} from "@/components/services/api/WishService";
import {Wish} from "@/types/Wish";
import {WishItemCard} from "@/components/wishlist/wishItemCard";

const WishlistComponent = ({wishlist}: { wishlist: Wishlist }) => {
    const [wishes, setWishes] = useState<Wish[]>();

    useEffect(() => {
        getAllWishesByWishlistId(wishlist.id).then(
            (result) => {
                console.log(result);
                setWishes(result.data);
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        )
    }, []);

    return (
        <>
            {
                wishes && wishes.map(
                    wish =>
                        <WishItemCard wishItem={wish}></WishItemCard>
                )
            }
        </>
    );
};

export default WishlistComponent;