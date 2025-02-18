export default function getErrorMessage(error: unknown) {
    let msg: string;

    if (error instanceof Error) {
        msg = error.message;
    } else if (error && typeof error === "object" && "message" in error) {
        msg = String(error.message);
    } else if (typeof error === "string") {
        msg = error;
    } else {
        msg = "Unknown error";
    }

    return msg;
}
