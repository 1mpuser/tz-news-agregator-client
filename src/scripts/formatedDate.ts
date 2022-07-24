import englishMonths from "../constants/englishMonths";
export default function formatedDate(): string {
    const date = new Date();
    return date.getDate() + englishMonths[date.getMonth()] + date.getFullYear();
}