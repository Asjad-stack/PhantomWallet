

const useYouPay = (props) => {

    const type = props?.route?.params?.type ?? 'From'

    return {
        type
    }
}

export default useYouPay
