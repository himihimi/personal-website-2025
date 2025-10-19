import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="border-b border-white/10 px-6 py-4">
            <div className="flex items-center justify-between">
                {/* 如果你用的是静态资源（如 /public/logo.png），路径应该写成 /logo.png。 
                    如果你用 layout="fill" 来让图片填满容器，需要额外配合 position: relative 等
                */}
                <Image
                    src="https://avatars.githubusercontent.com/u/19183035?v=4"
                    alt="github Logo"
                    width={100}
                    height={100}
                    className="h-15 w-auto"
                    priority
                />
            </div>
            <nav className="flex space-x-6">
                <Link href="/" className="text-gray-500 hover:text-white transtions-colors duration-200 font-medium">
                    Homieeee
                </Link>
                <Link href="/contact" className="text-gray-400 duration-200 font-medium">
                    No contact yeh
                </Link>
            </nav>
        </header>
    )
}