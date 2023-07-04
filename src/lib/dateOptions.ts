export function dateOptionsDayMonth(date) {
    const dateOptionsDayMonth: Intl.DateTimeFormatOptions = {
        day: "numeric",
        month: "long",
    };

    return new Date(date).toLocaleDateString("en-US", dateOptionsDayMonth);
}

export function dateOptionsDayMonthYear(date) {
    const dateOptionsDayMonth: Intl.DateTimeFormatOptions = {
        day: "numeric",
        month: "long",
        year: "numeric",
    };

    return new Date(date).toLocaleDateString("en-US", dateOptionsDayMonth);
}
