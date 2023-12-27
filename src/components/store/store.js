import {configureStore} from "@reduxjs/toolkit";
import wishlistsSlice from "@/components/store/slices/wishlistSlice";


export default function configurePreloadedStore(state) {
    return configureStore({
        reducer: {
            wishlist: wishlistsSlice,
        },
        preloadedState: state,
    });
}
