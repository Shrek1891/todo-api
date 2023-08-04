export const getCreatedDate = (): string =>
    new Date().getFullYear() + '-' +
    ((new Date().getMonth() + 1) > 10
        ? new Date().getMonth() + 1 : '0' +
        (new Date().getMonth() + 1)) + '-' +
    new Date().getDate();