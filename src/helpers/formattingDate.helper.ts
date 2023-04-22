export default function formattingDate(time: Date): string {
    const date = new Date(time);
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
}
