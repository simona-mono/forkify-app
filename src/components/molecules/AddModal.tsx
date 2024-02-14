import { useAppContext } from "../../contexts/AppContext";
import Input from "../atoms/Input";
import Label from "../atoms/Label";

export default function AddModal() {
    const { toggleAddModal, openAddModal } = useAppContext(); 

    const handleToggleModal = () => {
        toggleAddModal();
    };

    return (
        <>
            {openAddModal && (
                <div id="defaultModal" aria-hidden="true" className="overflow-y-auto overflow-x-hidden fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-50 w-full h-modal">
                    <div className="relative p-4 w-full max-w-3xl h-full mx-auto">
                        <div className="relative p-4 bg-white rounded-lg shadow sm:p-5">
                            <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    Add new recipe
                                </h3>
                                <button type="button" onClick={handleToggleModal} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="defaultModal">
                                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <form action="#">
                                <div className="grid gap-4 mb-4 sm:grid-cols-2">
                                    <div>
                                        <Label inputId="input__title" text="Recipe name" />
                                        <Input id="input__title" type="text" placeholder="Spicy ananas" value="" />
                                    </div>
                                    <div>
                                        <Label inputId="input__publisher" text="Publisher" />
                                        <Input id="input__publisher" type="text" placeholder="Spicy ananas" value="" />
                                    </div>
                                    <div>
                                        <Label inputId="input__image_url" text="Image URL" />
                                        <Input id="input__image_url" type="text" placeholder="Spicy ananas" value="" />
                                    </div>
                                    <div>
                                        <Label inputId="input__ingredients" text="Ingredients" />
                                        <Input id="input__ingredients" type="text" placeholder="Spicy ananas" value="" />
                                    </div>
                                </div>
                                <button type="submit" className="inline-flex text-white items-center bg-brown-100 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                    <svg className="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                                    Add recipe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
