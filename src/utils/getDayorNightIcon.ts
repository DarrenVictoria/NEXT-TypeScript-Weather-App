/** @format */

export function getDayorNightIcon(
    IconName: string,
    dateTimeString: string
): string {
    const hours = new Date(dateTimeString).getHours();
    const isDayTime = hours > 6 && hours < 18;
    return isDayTime ? IconName.replace(/.$/, "d")  : IconName.replace(/.$/, "n");
}