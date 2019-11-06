import { ErrorPopup } from "../view/errorPopup";

const ERROR_MESSAGE_TEMPLATE = 'Sorry, we can not get';

const handleError = (errorType) => {
    console.log(`${ERROR_MESSAGE_TEMPLATE} ${errorType}`);
    const popup = new ErrorPopup();
    popup.getRoot().innerText = `${ERROR_MESSAGE_TEMPLATE} ${errorType}`;
};

export { handleError };