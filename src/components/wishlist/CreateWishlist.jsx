import React, {useState} from "react";
import Modal from "../utils/Modal";

export const CreateWishlist = () => {
    const [showModal, setShowModal] = React.useState(false);

    return (
        <div>
            {/*<div className="min-h-screen flex items-center justify-center">*/}
                <button
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={() => setShowModal(prevState => !prevState)}
                >
                    Create Wish
                </button>

                <Modal showModal={showModal} setShowModal={setShowModal}>
                </Modal>
            {/*</div>*/}

        </div>
    )
}