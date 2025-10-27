import { useRef, useState } from "react";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");


const useOnBoarding = () => {

    const [isTermsAccepted, setIsTermsAccepted] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleScroll = (event) => {
        const slideIndex = Math.round(
            event.nativeEvent.contentOffset.x / width
        );
        setCurrentIndex(slideIndex);
    };


    return {
        currentIndex,
        setCurrentIndex,
        isTermsAccepted,
        setIsTermsAccepted,
        handleScroll,
    }
}

export default useOnBoarding
