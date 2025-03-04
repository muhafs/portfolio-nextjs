import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            className="group flex h-[3rem] w-[8rem] items-center justify-center gap-2 rounded-full bg-gray-900 text-white outline-none transition-all hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105 disabled:scale-100 disabled:cursor-not-allowed disabled:bg-opacity-65 dark:bg-white dark:bg-opacity-10"
            disabled={pending}
        >
            {pending ? (
                <div className="size-5 animate-spin rounded-full border-b-2 border-white" />
            ) : (
                <>
                    Submit{" "}
                    <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />
                </>
            )}
        </button>
    );
}
