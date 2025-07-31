import Link from "next/link";

export default function FullReport() {
    return (
        <div>
            <div>
                Full Report
            </div>
            <Link href="/dashboard" className="text-blue-400 text-sm font-medium "> Go Back</Link>
        </div>
    )
}