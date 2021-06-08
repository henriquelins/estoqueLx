
export function formatPrice(price: number){
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency' ,
        currency: 'BRL' ,
        minimumFractionDigits: 2
    });

    return formatter.format(price);
}

export function refreshPage() {
    window.location.reload();
};
