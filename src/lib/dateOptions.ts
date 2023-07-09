export function dateOptionsDayMonth(date) {
    const dateOptionsDayMonth: Intl.DateTimeFormatOptions = {
        day: "numeric",
        month: "short",
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

export function dateOptionsMonthYear(date) {
    const dateOptionsMonthYear: Intl.DateTimeFormatOptions = {
        month: "long",
        year: "numeric",
    };

    return new Date(date).toLocaleDateString("en-US", dateOptionsMonthYear);
}
