export default function validateString(value: unknown, maxLength: number) {
    if (!value || typeof value !== "string" || value.length > maxLength) {
        return false;
    }

    return true;
}
