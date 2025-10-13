

const useHistoryDetails = (props) => {

    const previousToken = props?.route?.params?.item
    console.log(previousToken, 'previousTokenpreviousTokenpreviousToken');


    return {
        previousToken
    }
}

export default useHistoryDetails
