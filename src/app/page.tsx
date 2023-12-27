'use client'
import HeroSection from "@/app/heroSection";
import React, {useEffect, useState} from "react";
import Wishlists from "@/app/wishlists/page";
import {Provider, useDispatch} from "react-redux";
import {getUserWishlist} from "@/components/services/api/WishlistService";
import configurePreloadedStore from "@/components/store/store";
import Wishlist from "@/types/Wishlist";
import {useAuth} from "@/components/context/AuthContext";
import store from "@/components/store/store";
import StoreProvider from "@/app/StoreProvider";
import {useAppDispatch} from "@/lib/hooks";
import {init} from "@/components/store/slices/wishlistSlice";

export default (): React.JSX.Element => {
    const [loading, setLoading] = useState(true);
    const dispatch = useAppDispatch();
    const {getUser} = useAuth();

    useEffect(() => {
        const user = getUser();
        if (!user) {
            setLoading(false)
        } else {
            getUserWishlist().then(
                (result) => {
                    console.log(result);
                    dispatch(init({wishlists: result.data}));
                    setLoading(false);
                },
            ).catch(
                (error) => {
                    console.log(error);
                    setLoading(false);
                }
            )
        }
    }, []);

    return (
        <>
            {loading ? <div>loading</div> :
                <>
                    <HeroSection/>
                    <Wishlists/>
                </>
            }
        </>

    )
}