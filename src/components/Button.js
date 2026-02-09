import Link from 'next/link';

export default function Button({
    children,
    href,
    onClick,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}) {
    const baseStyles = 'font-semibold transition-all duration-200 inline-block text-center rounded-full';

    const variants = {
        primary: 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl',
        secondary: 'bg-white text-gray-800 hover:bg-gray-50 shadow-md hover:shadow-lg border border-gray-200',
        outline: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900',
    };

    const sizes = {
        sm: 'px-4 py-1.5 text-sm rounded-full',
        md: 'px-6 py-2.5 text-base rounded-full',
        lg: 'px-8 py-3 text-lg rounded-full',
    };

    const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    // If href is provided, render as Link
    if (href) {
        return (
            <Link href={href} className={buttonClasses} {...props}>
                {children}
            </Link>
        );
    }

    // Otherwise render as button
    return (
        <button onClick={onClick} className={buttonClasses} {...props}>
            {children}
        </button>
    );
}
