import { useState } from "react";

const index = () => {

    const [isPublic, setIsPublic] = useState(false);
    const [isPrivate, setIsPrivate] = useState(false);
    const [isInvisible, setIsInvisible] = useState(false);

    return {
        isPublic,
        setIsPublic,
        isPrivate,
        setIsPrivate,
        isInvisible,
        setIsInvisible
    }
}

export default index
