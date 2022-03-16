export const formatPrice = (number) => {

    const value = Intl.NumberFormat('en-US',{style: 'currency', currency: 'USD'}).format(number/100)
    return number
}

export const getUniqueValues = () => {}