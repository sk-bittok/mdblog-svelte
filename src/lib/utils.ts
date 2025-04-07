type DateFormat = Intl.DateTimeFormatOptions["dateStyle"];

export function formatDate(
    date: string,
    dateStyle: DateFormat = "medium",
    locales = "en",
) {
    const dateToFormat = new Date(date.replaceAll("-", "/"));
    const formatter = new Intl.DateTimeFormat(locales, { dateStyle });
    return formatter.format(dateToFormat);
}
