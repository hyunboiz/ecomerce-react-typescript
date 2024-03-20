export default function formatCurrency(number : number){
    return new Intl.NumberFormat().format(number)
}